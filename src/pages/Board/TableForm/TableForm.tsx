import React from "react";
import { useNavigate } from "react-router";
import { Card, Table, Category } from "./TableForm.styles";

interface TableFormProps {
  data: any[];
  categories: { label: string; value: string }[];
}

const TableForm: React.FC<TableFormProps> = ({ data, categories }) => {
  const navigate = useNavigate();
  const getCategoryLabel = (categoryValue: string) => {
    const category = categories.find((cat) => cat.value === categoryValue);
    return category ? category.label : categoryValue;
  };

  return (
    <Card>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>제목</th>
            <th>카테고리</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} onClick={() => navigate(`/board/${row.id}`)}>
              <td>{row.id}</td>
              <td>{row.title}</td>
              <td>
                <Category $type={row.category}>
                  {getCategoryLabel(row.category)}
                </Category>
              </td>
              <td>{row.createdAt.slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default TableForm;
