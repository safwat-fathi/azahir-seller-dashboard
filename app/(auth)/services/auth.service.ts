import HttpClient from "@/services/http-client.service";
import { createToken, destroyToken } from "@/app/(auth)/login/actions";

const httpClient = new HttpClient();

class AuthService {
  public async login() {
    try {
      await createToken();

      return;
    } catch (err) {
      throw err;
    }
  }

  public async logout() {
    try {
      await destroyToken();

      return;
    } catch (err) {
      throw err;
    }
  }
}

const authService = new AuthService();

export default authService;
