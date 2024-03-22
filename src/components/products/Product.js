import React from "react";
import "./Product.css";



const Product = ({item}) => {
 
	return (
		<div key={item.id}className="product --card">
			<img src={item.img} alt="product img" />
			<div className="--bg-success --center-all --p">
				<h3 className="--text-light">{item.title}</h3>
				<div className="--flex-between --width-100">
					<p className="--text-light">${item.price}</p>
					<button className="--btn --btn-orange">Add To Cart</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
