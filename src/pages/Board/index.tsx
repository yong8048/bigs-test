import React, { useEffect, useState } from "react";
import * as S from "./Board.styles";
import TableForm from "./TableForm/TableForm";
import { getBoardSize, getCategories } from "../../api/boards";
import authStore from "../../stores/AuthStore";
import { observer } from "mobx-react";
import ReactPaginate from "react-paginate";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router";
import Loading from "../../components/Loading/Loading";

const Board = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [categories, setCategories] = useState([
    { label: "전체", value: "ALL" },
  ]);
  const [boardData, setBoardData] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(5);
  const [loading, setLoading] = useState(true);

  const filteredData =
    selectedCategory === "ALL"
      ? boardData
      : boardData.filter((row) => row.category === selectedCategory);

  useEffect(() => {
    const accessToken = authStore.accessToken;
    if (accessToken) {
      getCategories()
        .then((data: any) => {
          const categoryList = Object.entries(data).map(([value, label]) => ({
            label: label as string,
            value,
          }));
          setCategories([{ label: "전체", value: "ALL" }, ...categoryList]);
        })
        .catch(() => {
          navigate("/login");
        });
    }
  }, [navigate]);

  useEffect(() => {
    const accessToken = authStore.accessToken;
    if (accessToken) {
      setLoading(true);
      getBoardSize({ page, size: pageSize })
        .then((res) => {
          setBoardData(res.content || []);
          setTotalPages(res.totalPages || 1);
          setLoading(false);
        })
        .catch(() => {
          navigate("/login");
        });
    }
  }, [page, pageSize, navigate]);

  if (loading) {
    return <Loading message="게시글 목록을 불러오는 중..." />;
  }

  return (
    <S.Container>
      <S.TitleRow>
        <S.Title>게시판</S.Title>
      </S.TitleRow>
      <S.TableCard>
        <S.CategoryFilter>
          {categories.map((cat) => (
            <S.CategoryButton
              key={cat.value}
              $active={selectedCategory === cat.value}
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.label}
            </S.CategoryButton>
          ))}
        </S.CategoryFilter>
        <TableForm data={filteredData} categories={categories} />
        <S.BottomRow>
          <Button onClick={() => navigate(`/board/post`)}>글 쓰기</Button>
          <ReactPaginate
            pageCount={totalPages}
            forcePage={page}
            onPageChange={({ selected }) => setPage(selected)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </S.BottomRow>
      </S.TableCard>
    </S.Container>
  );
};

export default observer(Board);
