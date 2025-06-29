import styled from "styled-components";

export const Card = styled.div`
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
    overflow-x: hidden;
  }
  @media (max-width: 480px) {
    padding: 16px 12px;
    border-radius: 8px;
    overflow-x: hidden;
  }
`;

export const Table = styled.table`
  width: 100%;
  min-width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
  table-layout: auto;

  th {
    text-align: left;
    color: #7b7b93;
    font-weight: 600;
    font-size: 0.98rem;
    padding-bottom: 8px;
    padding-right: 16px;
    &:nth-child(1) {
      width: 15%;
      padding-left: 16px;
    }
    &:nth-child(2) {
      width: 40%;
    }
    &:nth-child(3) {
      width: 20%;
    }
    &:nth-child(4) {
      width: 25%;
      padding-right: 16px;
    }
  }
  td {
    background: #fff;
    padding: 12px 0;
    border-radius: 8px;
    font-size: 1rem;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:nth-child(1) {
      padding-left: 16px;
    }
    &:nth-child(2) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    &:nth-child(4) {
      padding-right: 16px;
    }
  }
  tr {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
    cursor: pointer;
    &:nth-child(1):hover {
      cursor: auto;
      background-color: #fff;
    }
    &:hover {
      background-color: #f8fafc;
      td {
        background-color: #f8fafc;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
    table-layout: fixed;
    thead,
    tbody {
      width: 100%;
    }
    th,
    td {
      width: 25%;
      min-width: 0;
      text-align: start;
    }
  }
  @media (max-width: 480px) {
    width: 100%;
    min-width: 100%;
    table-layout: fixed;
    thead,
    tbody {
      width: 100%;
    }
    th,
    td {
      width: 25%;
      min-width: 0;
      text-align: start;
    }
    th {
      font-size: 0.85rem;
      width: auto;
      &:nth-child(1) {
        width: auto;
        padding-left: 8px;
      }
      &:nth-child(2) {
        width: auto;
      }
      &:nth-child(3) {
        width: auto;
      }
      &:nth-child(4) {
        width: auto;
        padding-right: 8px;
      }
    }
    td {
      padding: 8px 0;
      font-size: 0.85rem;
      &:nth-child(1) {
        padding-left: 8px;
      }
      &:nth-child(4) {
        padding-right: 8px;
      }
    }
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
`;
