import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useProductsStore } from "../hooks/useProductsStore";

export const TableProduct = (props) => {
  const { name, price, sold, _id } = props;

  const { setActiveProduct, startDeletingProduct } = useProductsStore();

  const handleDelete = () => {
    startDeletingProduct(_id);
  };

  const handleEdit = () => {
    onclick = setActiveProduct(props);
  };

  const handleOnClick = () => {
    setActiveProduct(props);
  };

  return (
    <>
      <tr onClick={handleOnClick}>
        <th scope="row">{_id}</th>
        <td>{name}</td>
        <td>$ {price}</td>
        <td>{sold}</td>
        <td>
          <AiOutlineEdit size={25} onClick={handleEdit} />
          &nbsp;&nbsp;
          <AiOutlineDelete size={25} onClick={handleDelete} />
        </td>
      </tr>
    </>
  );
};
