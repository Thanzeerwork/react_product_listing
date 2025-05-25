import React from 'react'

const ProductCard = (props) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm ">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.products.name}</h2>
    <h3>{props.products.price}</h3>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <h4>{props.products.category}</h4>
    <h3>Rating:{props.products.rating}</h3>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>console.log(props.products.name)}>Add to Cart</button>
    </div>
  </div>
</div>
  )
}

export default ProductCard