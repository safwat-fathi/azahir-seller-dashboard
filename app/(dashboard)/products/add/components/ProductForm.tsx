"use client";

import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { HttpError } from "@/lib/classes/http-error";
import { useRouter } from "next/navigation";
import Button from "@/lib/ui/components/Button";
import { ErrorMessage } from "@hookform/error-message";
import { addProductSchema } from "./schema";
import productService from "@/services/product.service";
import { Product } from "@/types/models";

const numberInputClasses =
  "[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none";

const ProductForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isLoading, errors },
  } = useForm<Product>({
    resolver: yupResolver(addProductSchema),
  });

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);

  const onSuccess: SubmitHandler<Product> = async data => {
    try {
      await productService.addProducts(data);

      // redirect to home on success
      router.push("/");
    } catch (err: any) {
      throw new HttpError(
        500,
        err.status ? err.status : "Something went wrong"
      );
    }
  };

  const onError: SubmitErrorHandler<Product> = errs => {
    console.log("errs::", errs);
  };

  return (
    // <form onSubmit={e => e.preventDefault()}>
    <form onSubmit={handleSubmit(onSuccess, onError)}>
      <div className="mb-4">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          htmlFor="name"
        >
          Product Name
        </label>
        <div className="relative">
          <input
            id="name"
            type="text"
            {...register("name")}
            placeholder="Enter your email"
            className={`w-full rounded-lg border py-4 pl-6 pr-10 bg-transparent dark:bg-form-input focus-visible:shadow-none outline-none ${
              errors.name
                ? "border-danger  dark:border-danger focus:border-danger dark:focus:border-danger"
                : "border-stroke focus:border-primary dark:border-form-strokedark dark:focus:border-primary"
            }`}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <p className="text-danger">{message}</p>}
        />
      </div>

      <div className="mb-6">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          htmlFor="price"
        >
          Product Price
        </label>
        <div className="relative">
          <input
            id="price"
            type="number"
            {...register("price", { required: true })}
            placeholder="6+ Characters, 1 Capital letter"
            className={`w-full rounded-lg border py-4 pl-6 pr-10 bg-transparent dark:bg-form-input focus-visible:shadow-none outline-none ${numberInputClasses} ${
              errors.price
                ? "border-danger  dark:border-danger focus:border-danger dark:focus:border-danger"
                : "border-stroke focus:border-primary dark:border-form-strokedark dark:focus:border-primary"
            }`}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="price"
          render={({ message }) => <p className="text-danger">{message}</p>}
        />
      </div>

      <div className="mb-5">
        <Button loading={isLoading} type="submit" size="lg" className="w-full">
          Add Product
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
