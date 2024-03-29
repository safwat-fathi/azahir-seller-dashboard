import { onLoginAction, onLogoutAction } from "@/app/(auth)/actions";
import { LoginInputs } from "@/app/(auth)/login/components/LoginForm";
import HttpService from "@/services/http.service";

class AuthService {
  public async login(data: LoginInputs) {
    try {
      // console.log("login data:", data);

      await onLoginAction("23|awdawdad");

      return;
    } catch (err) {
      throw err;
    }
  }

  public async logout() {
    try {
      await onLogoutAction();

      return;
    } catch (err) {
      throw err;
    }
  }

  public async test() {
    try {
      // const res = await HttpService.get("http://localhost:8000/api/products");
      // const res = await this.get("http://localhost:8000/api/products");
      // return res;
    } catch (err) {
      throw err;
    }
  }
}

const authService = new AuthService();

export default authService;
