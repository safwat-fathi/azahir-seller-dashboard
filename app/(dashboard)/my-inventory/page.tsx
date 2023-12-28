import Breadcrumb from "@/lib/ui/components/Breadcrumbs/Breadcrumb";
import EmptyState from "@/lib/ui/components/EmptyState";
import productService from "@/services/product.service";
import { IParams } from "@/types/services";
import { Metadata } from "next";
import Buttonawd from "./button";

const breadCrumbList = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Inventory",
  },
];

export const metadata: Metadata = {
  title: "Inventory",
  description: "This is login page for Azahir dashboard",
};

const fetchProducts = async (params?: IParams) => {
  const data = await productService.getProducts(params);

  return data;
};

interface Props {
  searchParams: { page: string };
}

const Inventory = async ({ searchParams }: Props) => {
  const {
    data,
    success,
    meta: { total_pages },
  } = await fetchProducts(searchParams);

  if (total_pages === 0) {
    return <EmptyState message="You do not have any products yet!" />;
  }

  return (
    <div className="mx-auto max-w-270">
      <Breadcrumb list={breadCrumbList} />
      <div className="grid grid-cols-5 gap-8">
        <ul>
          {data.map(product => (
            <li key={product._id}>{product.name}</li>
          ))}
        </ul>
        <Buttonawd />
      </div>
    </div>
  );
};

export default Inventory;
