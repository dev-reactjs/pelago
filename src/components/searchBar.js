import React from "react";

const SearchBar = ({ searchQuery }) => {
	return (
		<>
			<div className='headerTitleWrap'>
				<h2>{searchQuery ? searchQuery : "Search Title"}</h2>
				<h4>cinema</h4>
			</div>
		</>
	);
};

export default SearchBar;
