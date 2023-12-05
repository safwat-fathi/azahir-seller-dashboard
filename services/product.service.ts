import HttpClient from "@/services/http.service";

class ProductService extends HttpClient {
  constructor() {
    super();
  }

  public async getProducts(data: any) {
    try {
      // console.log("login data:", data);

      return;
    } catch (err) {
      throw err;
    }
  }

  public async addProducts(data: any | any[]) {
    try {
      return;
    } catch (err) {
      throw err;
    }
  }
}

const productService = new ProductService();

export default productService;
