import { useEffect, useState } from "react";
import { ChooseSize } from "../components/ChooseSize";
import { ProductList } from "../components/ProductList";
import { useProductStore } from "../hooks/useProductsStore";

export const HomePage = () => {
  const {
    products,
    startLoadingProducts,
    startFilteredProducts,
    startSelectingSize,
    selectedSize,
  } = useProductStore();

  useEffect(() => {
    const fetchData = async () => {
      await startLoadingProducts();
    };

    fetchData();
  }, []);

  const handleChange = async (event) => {
    const selectSize = event.target.value;
    await startSelectingSize(selectSize);
    const filteredProducts = selectedSize
      ? products.filter((product) => product.size !== selectedSize)
      : products;
      
    startFilteredProducts(filteredProducts);
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

  console.log(products.length);
  const cantidadProducts = products.length;

  return (
    <>
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
