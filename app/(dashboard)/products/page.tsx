import Breadcrumb from "@/lib/ui/components/Breadcrumbs/Breadcrumb";

const Products = () => {
  return (
    <div className="mx-auto max-w-270">
      <Breadcrumb pageName="Products" />
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-5 xl:col-span-3">Content 1</div>
        <div className="col-span-5 xl:col-span-3">Content 2</div>
      </div>
    </div>
  );
};

export default Products;
