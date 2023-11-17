import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export default class HttpClient {
  private _options: TObj<string> = {};

  private async _request<T = any>(
    url: string,
    method: TMethod,
    options: any
  ): Promise<T | any> {
    try {
      const token = "oaw9w9da0a-dl";

      this._options = {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        method,
        ...options,
      };

      const response = await fetch(url, this._options);

      // No content response
      if (response.status === 204) {
        return;
      }

      if (!response.ok) {
        if (response.status === 401) {
          throw {
            message: `HttpClient::Unauthenticated error`,
            code: response.status,
          };
        }

        if (response.status === 500) {
          throw {
            message: `HttpClient::Server error`,
            code: response.status,
          };
        }

        throw { message: `HttpClient::HTTP error`, code: response.status };
      }

      return response.json();
    } catch (err) {
      throw err;
    }
  }

  public async get<T = any>(url: string, headers: TObj<string, string>) {
    try {
      return await this._request<T>(url, "GET", headers);
    } catch (err) {
      throw err;
    }
  }

  public async post<T = any>(
    url: string,
    headers: TObj<string, string>,
    body: string | FormData
  ) {
    try {
      const options: TObj<string> = { headers, body };

      return await this._request<T>(url, "POST", options);
    } catch (err) {
      throw err;
    }
  }

  public async put<T = any>(
    url: string,
    headers: TObj<string, string>,
    body: string | FormData
  ) {
    try {
      const options: TObj<string> = { headers, body };

      return await this._request<T>(url, "PUT", options);
    } catch (err) {
      throw err;
    }
  }

  public async delete<T = any>(url: string, headers: TObj<string, string>) {
    try {
      const options: TObj<string> = { headers };

      return await this._request<T>(url, "DELETE", options);
    } catch (err) {
      throw err;
    }
  }
}
