export type TMethod = "GET" | "POST" | "PUT" | "DELETE";

// type IParams = Record<string, undefined | string | string[]>;
export type IParams =
  | string
  | Record<string, string>
  | URLSearchParams
  | string[][]
  | undefined;

export interface IBaseResponse {
  success: boolean;
  message: string | null;
}

export interface IMeta {
  current_page: number;
  total_pages: number;
  previous: number;
  next: number;
  has_previous: boolean;
  has_next: boolean;
}

export interface IPaginatedResponse<T = any> extends IBaseResponse {
  meta: IMeta;
  data: T[];
}

export interface IResponse<T = any> extends IBaseResponse {
  data: T;
}

export abstract class HttpServiceAbstract<T> {
  protected abstract getList(
    params?: IParams,
    options?: RequestInit
  ): Promise<IPaginatedResponse<T>>;

  // protected abstract getBy(
  //   identifier: string,
  //   params?: IParams,
  //   options?: RequestInit
  // ): Promise<IResponse<T>>;

  // protected abstract add(
  //   body: string | FormData,
  //   _params?: IParams,
  //   options?: RequestInit
  // ): Promise<IResponse<T>>;
}
