import React from 'react'

export const ProductList = ({name = "Remera", price = 400,  }) => {
  return (
    <>
    <div className="d-inline-block col-4 text-center px-2 py-2">
      <div>{name}</div>
      <div>{price}</div>
    </div>
    </>
  )
}
