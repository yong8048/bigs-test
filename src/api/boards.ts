import { Delete, Get, Patch, Post } from "./wrapper";

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
