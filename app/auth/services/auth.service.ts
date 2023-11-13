import HttpClient from "@/services/http-client.service";

const httpClient = new HttpClient();

class AuthService {
  public async login() {
    try {
      // const formData = new FormData();
      // formData.append("title", "safwat");
      // formData.append("body", "safwat");
      // formData.append("userId", "1");

      const data = {
        title: "foo",
        body: "bar",
        userId: 1,
      };

      const dataStringified = JSON.stringify(data);

      const res = await httpClient.post(
        "https://jsonplaceholder.typicode.com/posts",
        { "Accept-Language": "en" },
        dataStringified
      );

      return res;
    } catch (err) {
      throw new Error(`Error::AuthService::POST::${err}`);
    }
  }
}

const authService = new AuthService();

export default authService;
