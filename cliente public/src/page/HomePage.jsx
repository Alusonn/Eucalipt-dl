import { useEffect } from "react";
import { ChooseSize } from "../components/ChooseSize";
import { ProductList } from "../components/ProductList";
import { useProductStore } from "../hooks/useProductsStore";

export const HomePage = () => {
  const { products, startLoadingProducts } = useProductStore();

  useEffect(() => {
    startLoadingProducts();
  }, []);

  console.log(startLoadingProducts);
  return (
    <>
      <div className="d-block">
        <div className="main">
          <div className="chooseSize">
            <ChooseSize />
          </div>

          <div className="products-list">
            <div className="contadorProductos">
              <p> 16 Producto(s) encontrados</p>
            </div>
            <div className="productsLayout">
              {products.map((product) => (
                <ProductList key={product._id} {...product}>
                  {" "}
                </ProductList>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
