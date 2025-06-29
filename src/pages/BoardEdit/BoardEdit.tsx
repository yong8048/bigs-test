import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getBoard, getCategories, updateBoard } from "../../api/boards";
import authStore from "../../stores/AuthStore";
import { observer } from "mobx-react";
import * as S from "./BoardEdit.styles";
import Loading from "../../components/Loading/Loading";

type Category = { label: string; value: string };

export interface BoardData {
  id: number;
  title: string;
  content: string;
  boardCategory: string;
  imageUrl?: string;
  createdAt: string;
}

const BoardEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("NOTICE");
  const [file, setFile] = useState<File | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [originalImageUrl, setOriginalImageUrl] = useState<
    string | undefined
  >();

  useEffect(() => {
    const accessToken = authStore.accessToken;
    if (!accessToken || !id) {
      navigate("/login");
      return;
    }

    getCategories()
      .then((data) => {
        const categoryList = Object.entries(data).map(([value, label]) => ({
          label: label as string,
          value,
        }));
        setCategories(categoryList);
      })
      .catch(() => {
        navigate("/login");
      });

    getBoard(parseInt(id))
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
        setCategory(data.boardCategory);
        setOriginalImageUrl(data.imageUrl);
        setLoading(false);
      })
      .catch(() => {
        navigate("/login");
      });
  }, [id, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const accessToken = authStore.accessToken;
    if (accessToken && id) {
      try {
        await updateBoard({
          id: parseInt(id),
          title,
          content,
          category,
          file,
        });
        alert("게시글이 수정되었습니다!");
        navigate(`/board/${id}`);
      } catch (err: any) {
        alert("게시글 수정에 실패했습니다.");
      }
    }
  };

  const handleDeleteImage = () => {
    setFile(null);
    setOriginalImageUrl(undefined);
  };

  if (loading) {
    return <Loading message="게시글을 불러오는 중..." />;
  }

  return (
    <S.Container>
      <S.TitleRow>
        <S.Title>게시글 수정</S.Title>
      </S.TitleRow>
      <S.Card>
        <form onSubmit={handleSubmit}>
          <S.FormGroup>
            <S.Label>제목</S.Label>
            <S.Input
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              required
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>내용</S.Label>
            <S.Textarea
              value={content}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setContent(e.target.value)
              }
              required
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>카테고리</S.Label>
            <S.Select
              value={category}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setCategory(e.target.value)
              }
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </S.Select>
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>파일(선택)</S.Label>
            {(originalImageUrl || file) && (
              <S.CurrentImage>
                <span>현재 이미지:</span>
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : `https://front-mission.bigs.or.kr${originalImageUrl}`
                  }
                  alt="현재 이미지"
                />
                <S.DeleteImageButton type="button" onClick={handleDeleteImage}>
                  이미지 삭제
                </S.DeleteImageButton>
              </S.CurrentImage>
            )}
            <S.FileInput
              type="file"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFile(e.target.files?.[0] || null)
              }
            />
          </S.FormGroup>

          <S.ButtonContainer>
            <S.CancelButton
              type="button"
              onClick={() => navigate(`/board/${id}`)}
            >
              취소
            </S.CancelButton>
            <S.SubmitButton type="submit">수정</S.SubmitButton>
          </S.ButtonContainer>
        </form>
      </S.Card>
    </S.Container>
  );
};

export default observer(BoardEdit);
