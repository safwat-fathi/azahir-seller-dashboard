import HttpService from "@/services/http.service";
import { Product } from "@/types/models";
import { IParams } from "@/types/services";

class ProductService extends HttpService<Product> {
  constructor() {
    super("/products");
  }

  public async getProducts(params?: IParams) {
    try {
      const data = await this.getList(params);
      console.log("🚀 ~ getProducts ~ data:", data);

      return data;
    } catch (err) {
      throw err;
    }
  }

  public async add(data: any | any[]) {
    try {
      return;
    } catch (err) {
      throw err;
    }
  }
}

export default new ProductService();
