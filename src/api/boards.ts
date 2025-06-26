import axios from "axios";
//인터페이스로 다 만들지 그냥 쓸지
export interface ICreateBoard {
  title: string;
  content: string;
  category: string;
  file?: File | null;
  token: string;
}
export interface IUpdateBoard {
  id: number;
  title: string;
  content: string;
  category: string;
  file?: File | null;
  token: string;
}
export interface IGetBoardSize {
  page: number;
  size: number;
  token: string;
}

export async function createBoard({
  title,
  content,
  category,
  file,
  token,
}: ICreateBoard) {
  const formData = new FormData();
  formData.append("request", JSON.stringify({ title, content, category }));
  if (file) {
    formData.append("file", file);
  }

  const res = await axios.post(
    "https://front-mission.bigs.or.kr/boards",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
}

export async function updateBoard({
  id,
  title,
  content,
  category,
  file,
  token,
}: IUpdateBoard) {
  const formData = new FormData();
  formData.append("request", JSON.stringify({ title, content, category }));
  if (file) {
    formData.append("file", file);
  }

  const res = await axios.patch(
    `https://front-mission.bigs.or.kr/boards/${id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
}

export async function deleteBoard(id: number, token: string) {
  const res = await axios.delete(
    `https://front-mission.bigs.or.kr/boards/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
}

export async function getBoard(id: number, token: string) {
  const res = await axios.get(`https://front-mission.bigs.or.kr/boards/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function getBoardSize({ page, size, token }: IGetBoardSize) {
  const res = await axios.get(
    `https://front-mission.bigs.or.kr/boards?page=${page}&size=${size}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
}

export async function getCategories(token: string) {
  const res = await axios.get(
    "https://front-mission.bigs.or.kr/boards/categories",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
}
