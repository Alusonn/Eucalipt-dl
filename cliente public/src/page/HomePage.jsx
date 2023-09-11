import { ChooseSize } from "../components/ChooseSize";
import { ProductList } from "../components/ProductList";

export const HomePage = () => {
  return (
    <>
      <div className="container py-5 px-5">
        <div className="row d-flex">
          <div className="col-2">
            <ChooseSize />
          </div>
          <div className="col-10">
            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
};
