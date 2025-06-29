import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }

  @media (max-width: 480px) {
    padding: 16px 12px;
  }
`;
export const TableCard = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  padding: 32px 24px;
  width: 100%;
  max-width: 800px;
  overflow-x: auto;

  @media (max-width: 768px) {
    padding: 20px 16px;
    border-radius: 12px;
  }
  @media (max-width: 480px) {
    padding: 16px 12px;
    border-radius: 8px;
  }
`;

export const TitleRow = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 16px 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0 0 12px 60px;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const CategoryFilter = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 8px;
    margin-bottom: 16px;
  }
`;

export const CategoryButton = styled.button<{ active?: boolean }>`
  padding: 8px 20px;
  border-radius: 20px;
  border: none;
  background: ${({ active }) => (active ? "#4f8cff" : "#f1f5f9")};
  color: ${({ active }) => (active ? "#fff" : "#7b7b93")};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  white-space: nowrap;

  &:hover {
    background: #2563eb;
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 6px 16px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 5px 12px;
    font-size: 0.85rem;
  }
`;

export const Avatar = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e3f6f5;
  margin-right: 10px;
  vertical-align: middle;

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    margin-right: 8px;
  }
`;

export const Status = styled.span<{ $active: boolean }>`
  color: ${({ $active }) => ($active ? "#22c55e" : "#a3a3a3")};
  background: ${({ $active }) => ($active ? "#e0fbe6" : "#f3f4f6")};
  padding: 4px 12px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    padding: 3px 8px;
    font-size: 0.85rem;
  }
`;

export const Plan = styled.span<{ $type: string }>`
  color: ${({ $type }) =>
    $type === "Diehard"
      ? "#eab308"
      : $type === "Casual"
      ? "#22c55e"
      : "#2563eb"};
  background: ${({ $type }) =>
    $type === "Diehard"
      ? "#fef9c3"
      : $type === "Casual"
      ? "#e0fbe6"
      : "#e0e7ff"};
  padding: 4px 12px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    padding: 3px 8px;
    font-size: 0.85rem;
  }
`;

export const Category = styled.span<{ $type: string }>`
  color: ${({ $type }) =>
    $type === "NOTICE"
      ? "#2563eb"
      : $type === "FREE"
      ? "#22c55e"
      : $type === "QNA"
      ? "#a855f7"
      : $type === "ETC"
      ? "#eab308"
      : "#7b7b93"};
  background: ${({ $type }) =>
    $type === "NOTICE"
      ? "#e0e7ff"
      : $type === "FREE"
      ? "#e0fbe6"
      : $type === "QNA"
      ? "#ede9fe"
      : $type === "ETC"
      ? "#fef9c3"
      : "#f3f4f6"};
  padding: 4px 12px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    padding: 3px 8px;
    font-size: 0.85rem;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 24px;
  justify-content: center;
  flex-wrap: wrap;

  button {
    background: #f1f5f9;
    border: none;
    border-radius: 6px;
    padding: 6px 12px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background: #e0e7ff;
    }
  }

  span {
    color: #a3a3a3;
    font-size: 1rem;
    margin: 0 4px;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    gap: 4px;

    button {
      padding: 5px 10px;
      font-size: 0.9rem;
    }

    span {
      font-size: 0.9rem;
    }
  }
`;

export const PageNum = styled.button<{ active?: boolean }>`
  background: ${({ active }) => (active ? "#4f8cff" : "#f1f5f9")};
  color: ${({ active }) => (active ? "#fff" : "#7b7b93")};
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: #2563eb;
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 0.9rem;
  }
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  button {
    padding: 10px 20px;
    width: 100px;
  }

  ul {
    display: flex;
    gap: 5px;
    margin-right: 20px;
  }

  a {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    gap: 12px;
    align-items: stretch;

    button {
      padding: 12px 20px;
    }
  }
`;
