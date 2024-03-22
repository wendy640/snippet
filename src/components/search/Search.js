import React from "react";
import "./Search.css";
const Search = ({ handleSearch, search }) => {
	return (
		<div className="--form-control">
			<input
				type="text"
				placeholder="Search Products"
				value={search}
				onChange={handleSearch}
			/>
		</div>
	);
};

export default Search;
