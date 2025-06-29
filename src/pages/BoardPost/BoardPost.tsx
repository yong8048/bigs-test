import React, { useEffect, useState } from "react";
import * as S from "./BoardPost.styles";
import { getCategories, postBoard } from "../../api/boards";
import authStore from "../../stores/AuthStore";
import { useNavigate } from "react-router";
import { observer } from "mobx-react";

type Category = { label: string; value: string };

const BoardPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("NOTICE");
  const [file, setFile] = useState<File | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const accessToken = authStore.accessToken;
    if (accessToken) {
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
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const accessToken = authStore.accessToken;
    if (accessToken) {
      try {
        await postBoard({ title, content, category, file });
        alert("게시글이 등록되었습니다!");
        navigate("/board");
      } catch (err: any) {
        alert("게시글 등록에 실패했습니다.");
      }
    }
  };

  return (
    <S.Container>
      <S.TitleRow>
        <S.Title>게시판 글 쓰기</S.Title>
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
            <S.FileInput
              type="file"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFile(e.target.files?.[0] || null)
              }
            />
          </S.FormGroup>

          <S.ButtonContainer>
            <S.CancelButton type="button" onClick={() => navigate("/board")}>
              취소
            </S.CancelButton>
            <S.SubmitButton type="submit">등록</S.SubmitButton>
          </S.ButtonContainer>
        </form>
      </S.Card>
    </S.Container>
  );
};

export default observer(BoardPost);
