import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import * as S from "./BoardDetail.styles";
import { deleteBoard, getBoard, getCategories } from "../../api/boards";
import authStore from "../../stores/AuthStore";
import { observer } from "mobx-react";
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";

const BoardDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [boardData, setBoardData] = useState<BoardData | null>(null);
  const [categories, setCategories] = useState<
    { label: string; value: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  const getCategoryLabel = (categoryValue: string) => {
    const category = categories.find((cat) => cat.value === categoryValue);
    return category ? category.label : categoryValue;
  };

  const ClickDelete = (id: string | undefined) => {
    if (!id) return;
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    deleteBoard(Number(id))
      .then(() => {
        alert("삭제되었습니다.");
        navigate("/board");
      })
      .catch(() => {
        alert("삭제에 실패했습니다.");
      });
  };

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
        setBoardData(data);
        setLoading(false);
      })
      .catch(() => {
        navigate("/login");
      });
  }, [id, navigate]);

  if (loading) {
    return <Loading message="게시글을 불러오는 중..." />;
  }

  if (!boardData) {
    return (
      <S.Container>
        <S.Card>게시글을 찾을 수 없습니다.</S.Card>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Card>
        <S.Header>
          <S.Title>{boardData.title}</S.Title>
          <S.MetaInfo>
            <div>
              <S.Category>
                {getCategoryLabel(boardData.boardCategory)}
              </S.Category>
              <S.Date>{boardData.createdAt.slice(0, 10)}</S.Date>
            </div>
            <S.ActionButtons>
              <MdOutlineEdit onClick={() => navigate(`/board/${id}/edit`)} />
              <RiDeleteBin6Line onClick={() => ClickDelete(id)} />
            </S.ActionButtons>
          </S.MetaInfo>
        </S.Header>
        <S.Content>
          {boardData.imageUrl && boardData.imageUrl !== "" && (
            <S.ImageContainer>
              <S.Image
                src={`https://front-mission.bigs.or.kr${boardData.imageUrl}`}
                alt="게시글 이미지"
              />
            </S.ImageContainer>
          )}
          <S.TextContent>{boardData.content}</S.TextContent>
        </S.Content>
        <S.ButtonContainer>
          <Button onClick={() => navigate("/board")}>목록</Button>
        </S.ButtonContainer>
      </S.Card>
    </S.Container>
  );
};

export default observer(BoardDetail);
