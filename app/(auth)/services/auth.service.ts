import HttpClient from "@/services/http.service";
import { createTokenAction, destroyTokenAction } from "../actions";
import { LoginInputs } from "../login/components/LoginForm";

class AuthService extends HttpClient {
  constructor() {
    super();
  }

  public async login(data: LoginInputs) {
    try {
      console.log("login data:", data);

      await createTokenAction("23|awdawdad");

      return;
    } catch (err) {
      throw err;
    }
  }

  public async logout() {
    try {
      await destroyTokenAction();

      return;
    } catch (err) {
      throw err;
    }
  }

  public async test() {
    try {
      // const res = await httpClient.get("http://localhost:8000/api/products");
      const res = await this.get("http://localhost:8000/api/products");

      return res;
    } catch (err) {
      throw err;
    }
  }
}

const authService = new AuthService();

export default authService;
