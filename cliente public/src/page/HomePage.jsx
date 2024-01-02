import { useEffect, useState } from "react";
import { ChooseSize } from "../components/ChooseSize";
import { ProductList } from "../components/ProductList";
import { useProductStore } from "../hooks/useProductsStore";
import { CartButton } from "../components/CartButton";

export const HomePage = () => {
  const {
    products,
    startLoadingProducts,
    startFilteredProducts,
    filteredProducts,
  } = useProductStore();

  useEffect(() => {
    const fetchData = async () => {
      await startLoadingProducts();
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (filteredProducts.length === 0) {
      startFilteredProducts();
    }
  }, [products]);

  const handleChange = async ({ target }) => {
    const selectSize = await target.value;
    startFilteredProducts(selectSize);
  };

  // const filteredData = (products, selected) => {

  //   let filteredProducts = products;

  //   if (selected) {
  //     filteredProducts = filteredProducts.filter(
  //       ({ sizes }) => sizes === selected
  //     );
  //   }
  //   const onAddCart = () => {};

  //   return filteredProducts.map((props) => (
  //     <div className="card d-inline-block text-center">
  //       <img
  //         src={props.image.secure_url}
  //         alt={props.name}
  //         className="cardImg"
  //       />
  //       <div className="card-body">
  //         <div className="card-title">{props.name}</div>
  //         <div className="cardTextPrice">$ {props.price}</div>
  //         <hr />
  //         <div className="addCart" onClick={onAddCart}>
  //           <div className="card-text">Añadir al carrito</div>
  //         </div>
  //       </div>
  //     </div>
  //   ));

  // };

  // const result = filteredData(products, selectedSize);

  const cantidadProducts = filteredProducts.length;

  return (
    <>
      <CartButton />
      <div className="d-block">
        <div className="main">
          <div className="chooseSize">
            <ChooseSize key={Math.random()} handleChange={handleChange} />
          </div>
          <div className="products-list">
            <div className="contadorProductos">
              <p> {cantidadProducts} Producto(s) encontrados</p>
            </div>
            <div className="productsLayout">
              {filteredProducts.map((product) => (
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
