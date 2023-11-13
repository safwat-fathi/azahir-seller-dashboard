type TMethod = "GET" | "POST";

export default class HttpClient {
  private _options: TObj<string> = {};

  private async _request<T = any>(
    url: string,
    method: TMethod,
    options: any
  ): Promise<T> {
    try {
      const token = "oaw9w9da0a-dl";

      this._options = {
        Authorization: `Bearer ${token}`,
        method,
        ...options,
      };

      const response = await fetch(url, this._options);

      if (!response.ok) {
        throw new Error(`HttpClient::HTTP error Status::${response.status}`);
      }

      return response.json();
    } catch (err) {
      throw new Error(`Error::HttpClient::${err}`);
    }
  }

  public async get<T = any>(url: string, headers: TObj<string, string>) {
    try {
      return await this._request<T>(url, "GET", headers);
    } catch (err) {
      throw new Error(`Error::HttpClient::GET::${err}`);
    }
  }

  public async post<T = any>(
    url: string,
    headers: TObj<string, string>,
    body: string | FormData
  ) {
    try {
      const options: TObj<string> = { headers, body };

      if (body instanceof FormData) {
        options["headers"]["Content-Type"] = "multipart/form-data";
      }

      if (body instanceof String || typeof body === "string") {
        options["headers"]["Content-Type"] = "application/json";
      }

      return await this._request<T>(url, "POST", options);
    } catch (err) {
      throw new Error(`Error::HttpClient::GET::${err}`);
    }
  }
}
