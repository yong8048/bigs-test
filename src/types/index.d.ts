interface ResCategory {
  value: string;
  label: string;
}

interface ResLogin {
  accessToken: string;
  refreshToken: string;
}
interface ResRefresh {
  accessToken: string;
  refreshToken: string;
}

interface ICreateBoard {
  title: string;
  content: string;
  category: string;
  file?: File | null;
}

interface IUpdateBoard {
  id: number;
  title: string;
  content: string;
  category: string;
  file?: File | null;
}

interface IGetBoardSize {
  page: number;
  size: number;
}

interface IBoardItem {
  id: number;
  title: string;
  category: string;
  createdAt: string;
}

interface ISort {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
}

interface IPageable {
  pageNumber: number;
  pageSize: number;
  sort: ISort;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

interface IBoardListResponse {
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

interface ISignup {
  username: string;
  name: string;
  password: string;
  confirmPassword: string;
}
interface ILogin {
  username: string;
  password: string;
}

interface IRefreshToken {
  refreshToken: string;
}

interface BoardData {
  id: number;
  title: string;
  content: string;
  boardCategory: string;
  imageUrl?: string;
  createdAt: string;
}

interface PostOptions {
  contentType?: string;
}
