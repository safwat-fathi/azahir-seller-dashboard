import { onLogoutAction, getTokenAction } from "@/app/(auth)/actions";
import { HttpError } from "@/lib/classes/http-error";
import {
  HttpServiceAbstract,
  IPaginatedResponse,
  IParams,
  TMethod,
} from "@/types/services";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_API || "";
export default class HttpService<T> extends HttpServiceAbstract<T> {
  private _url: string;
  private _token: string | null = null;
  private _options: RequestInit = {};

  constructor(url: string) {
    super();
    this._url = BASE_URL + url;
  }

  private async _request(
    route: string,
    method: TMethod,
    options?: RequestInit,
    params?: IParams
  ) {
    try {
      this._token = await getTokenAction();

      this._options = {
        method,
        headers: {
          Authorization: `Bearer ${this._token}`,
          Accept: "application/json",
          "Accept-Language": "en",
        },
        // cache: "no-store",
        // next: {
        //   revalidate: 0,
        // },
        ...options,
      };

      const urlParams = params ? `?${new URLSearchParams(params)}` : "";

      const fullURL = this._url + route + urlParams;

      const response = await fetch(fullURL, this._options);

      // No content response
      if (response.status === 204) return;

      if (!response.ok) {
        if (response.status === 401) {
          await onLogoutAction();

          throw new HttpError(401, "Unauthorized");
        }

        throw new HttpError(
          response.status || 500,
          response.statusText || "Something went wrong"
        );
      }

      return await response.json();
    } catch (err) {
      throw err;
    }
  }

  protected async getList(
    params?: IParams,
    options?: RequestInit | undefined
  ): Promise<IPaginatedResponse<T>> {
    const data = await this._request("/", "GET", options, params);

    return data;
  }
}
