import Breadcrumb from "@/lib/ui/components/Breadcrumbs/Breadcrumb";
import ProductForm from "./components/ProductForm";

const AddProduct = () => {
  return (
    <div className="mx-auto max-w-270">
      <Breadcrumb pageName="Add" />
      <div className="grid grid-cols-1 gap-8">
        <ProductForm />
      </div>
    </div>
  );
};

export default AddProduct;
