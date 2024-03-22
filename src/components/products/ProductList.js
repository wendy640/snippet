//to map out item: import data,useState,map the component,attach props,integrate data,*create search,  filter search
import React, { useState, useEffect } from "react";
import "./ProductList.css";
import Search from "../search/Search";
import Categories from "../categories/Categories";
import Product from "./Product";
import { ProductData } from "../../ProductData";
const allCategorys = [
	"all",
	...new Set(ProductData.map((item) => item.category)),
];
const ProductList = () => {
	const [items, setItems] = useState(ProductData);
	const [search, setSearch] = useState("");
	const [searchFilter, setSearchFilter] = useState([]);
	const [categories, setCategories] = useState(allCategorys);
	const handleSearch = (e) => {
		setSearch(e.target.value);
	};
	const filterProduct = (category) => {
		if (category === "all") {
			setItems(ProductData);
			return;
		}
		const newProduct = ProductData.filter(
			(product) => product.category === category
		);
		setItems(newProduct);
	};
	useEffect(() => {
		setSearchFilter(
			items.filter((item) =>
				item.title.toLowerCase().includes(search.toLowerCase())
			)
		);
		console.log(allCategorys);
	}, [search, items]);
	return (
		<>
			<div className="header">
				<header className="container">
					<h1 className="--color-white --text-center">
						<span className="--color-orange">Product</span> Filter
					</h1>
					<div className="--flex-between --flex-dir-column --py">
						<Search handleSearch={handleSearch} search={search} />

						<Categories categories={categories} filterProduct={filterProduct} />
					</div>
				</header>

				<div className="product-container">
					<div className="products container --grid-25 --py2">
						{searchFilter.length === 0 ? (
							<h3>No Poduct Found</h3>
						) : (
							searchFilter.map((item) => <Product item={item} />)
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductList;
