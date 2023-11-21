import HttpClient from "@/services/http-client.service";

const httpClient = new HttpClient();

class AuthService {
  public async login() {
    try {
      const formData = new FormData();
      formData.append("name", "safwat");
      formData.append("email", "safwat@test.com");

      const data = {
        name: "safwat",
        email: "safwat@test.com",
      };

      const dataStringified = JSON.stringify(data);

      // const res = await httpClient.put(
      //   "/api/hello",
      //   { "Accept-Language": "en" },
      //   formData
      // );
      // const res = await httpClient.post(
      //   "/api/hello",
      //   { "Accept-Language": "en" },
      //   formData
      // );
      // const res = await httpClient.get("/api/hello", {
      const res = await httpClient.get("http://localhost:8000/api/products/", {
        "Accept-Language": "en",
        cache: "no-store",
      });

      return res;
    } catch (err) {
      throw err;
    }
  }
}

const authService = new AuthService();

export default authService;
