import React, { useState } from "react";
import "./style.css";
import API from "./utils/getApiCaller";
import Card from "./components/card";
import SearchBar from "./components/searchBar";
import search from "./assets/images/search.svg";
import loader from "./assets/images/loader.svg";

const Cinema = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [cinemaData, setCinemaData] = useState("");
	const [loading, setLoading] = useState(false);

	// handleChange
	const handleChange = (e) => {
		setSearchQuery(e.target.value);
	};

	// handleSearch
	const handleSearch = () => {
		setLoading(true);
		API(`&search=${searchQuery}`)
			.then((res) => {
				setCinemaData(res.data);
				setLoading(false);
			})
			.catch((err) => {
				alert(err);
				setLoading(false);
			});
	};

	return (
		<>
			<div className='mainWrapper'>
				<div className='container'>
					<div className='searchHeader'>
						<input
							value={searchQuery}
							className='formInput'
							placeholder='Search cinema...'
							onChange={(e) => handleChange(e)}
						/>
						<button className='btn' onClick={() => handleSearch()}>
							{loading ? (
								<img src={loader} alt='loader' />
							) : (
								<img src={search} alt='search' />
							)}
						</button>
					</div>
					<SearchBar searchQuery={searchQuery} />
					<Card cinemaData={cinemaData} />
				</div>
			</div>
		</>
	);
};

export default Cinema;
