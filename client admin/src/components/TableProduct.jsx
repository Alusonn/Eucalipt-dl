import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useProductsStore } from "../hooks/useProductsStore";
import { Link } from "react-router-dom";

export const TableProduct = (props) => {
  const { name, price, sold, _id } = props;

  const { setActiveProduct, startDeletingProduct } = useProductsStore();

  const handleDelete = () => {
    startDeletingProduct(_id);
  };

  const handleEdit = () => {};

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
          <Link
            to={`/${_id}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <AiOutlineEdit size={25} onClick={handleEdit} />
          </Link>
          &nbsp;&nbsp;
          <AiOutlineDelete size={25} onClick={handleDelete} />
        </td>
      </tr>
    </>
  );
};
