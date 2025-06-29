import axios from "axios";
import { Delete, Get, Patch, Post } from "./wrapper";
import { BoardData } from "../pages/BoardEdit/BoardEdit";

//인터페이스로 다 만들지 그냥 쓸지
export interface ICreateBoard {
  title: string;
  content: string;
  category: string;
  file?: File | null;
}

export interface IUpdateBoard {
  id: number;
  title: string;
  content: string;
  category: string;
  file?: File | null;
}

export interface IGetBoardSize {
  page: number;
  size: number;
}

export interface IBoardItem {
  id: number;
  title: string;
  category: string;
  createdAt: string;
}

export interface ISort {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
}

export interface IPageable {
  pageNumber: number;
  pageSize: number;
  sort: ISort;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

export interface IBoardListResponse {
  content: IBoardItem[];
  pageable: IPageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  sort: ISort;
  first: boolean;
  empty: boolean;
}

export async function postBoard({
  title,
  content,
  category,
  file,
}: ICreateBoard) {
  const formData = new FormData();
  const requestBlob = new Blob([JSON.stringify({ title, content, category })], {
    type: "application/json",
  });
  formData.append("request", requestBlob);
  if (file) {
    formData.append("file", file);
  }

  const res = await Post("/boards", formData, {
    contentType: file ? "multipart/form-data" : "appliaction/json",
  });
  return res.data;
}

export async function updateBoard({
  id,
  title,
  content,
  category,
  file,
}: IUpdateBoard) {
  const formData = new FormData();
  const requestBlob = new Blob([JSON.stringify({ title, content, category })], {
    type: "application/json",
  });
  formData.append("request", requestBlob);
  if (file) {
    formData.append("file", file);
  }

  const res = await Patch(`/boards/${id}`, formData, {
    contentType: "multipart/form-data",
  });
  return res.data;
}

export async function deleteBoard(id: number) {
  const res = await Delete(`/boards/${id}`);
  return res.data;
}

export async function getBoard(id: number) {
  const res = await Get<BoardData>(`/boards/${id}`);
  return res.data;
}

export async function getBoardSize({ page, size }: IGetBoardSize) {
  // const res = await Get(`/boards?page=${page}&size=${size}`);
  const res = await Get<IBoardListResponse>("/boards", {
    params: {
      page,
      size,
    },
  });
  return res.data;
}

export async function getCategories() {
  const res = await Get<ResCategory>("/boards/categories");
  return res.data;
}
