import { destroyTokenAction, getTokenAction } from "@/app/(auth)/actions";
import { HttpError } from "@/lib/classes/http-error";

export default class HttpClient {
  private _token: string | null = null;
  private _options: RequestInit = {};

  private async _request<T = any>(
    url: string,
    method: TMethod,
    options: any
  ): Promise<T | any> {
    try {
      this._token = await getTokenAction();

      this._options = {
        method,
        headers: {
          Authorization: `Bearer ${this._token}`,
          Accept: "application/json",
          "Accept-Language": "en",
        },
        cache: "no-store",
        next: {
          revalidate: 0,
        },
        ...options,
      };

      const response = await fetch(url, this._options);

      // No content response
      if (response.status === 204) {
        return;
      }

      if (!response.ok) {
        if (response.status === 401) {
          await destroyTokenAction();

          throw new HttpError(401, "Unauthorized");
        }

        if (response.status === 500) {
          throw new HttpError(500, "Server error");
        }

        throw new HttpError(response.status, response.statusText);
      }

      return response.json();
    } catch (err) {
      throw err;
    }
  }

  public async get<T = any>(url: string, headers?: TObj<string, string>) {
    try {
      return await this._request<T>(url, "GET", headers);
    } catch (err) {
      throw err;
    }
  }

  public async post<T = any>(
    url: string,
    body: string | FormData,
    headers?: TObj<string, string>
  ) {
    try {
      const options: RequestInit = { headers, body };

      return await this._request<T>(url, "POST", options);
    } catch (err) {
      throw err;
    }
  }

  public async put<T = any>(
    url: string,
    body: string | FormData,
    headers?: TObj<string, string>
  ) {
    try {
      const options: RequestInit = { headers, body };

      return await this._request<T>(url, "PUT", options);
    } catch (err) {
      throw err;
    }
  }

  public async delete<T = any>(url: string, headers?: TObj<string, string>) {
    try {
      const options: RequestInit = { headers };

      return await this._request<T>(url, "DELETE", options);
    } catch (err) {
      throw err;
    }
  }
}
