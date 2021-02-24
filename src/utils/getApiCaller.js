import axios from "axios";

const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=bf848acb";

const getApiCaller = async (url, authorization) => {
	return axios
		.get(`${URL}${url}`)
		.then((response) => response)
		.catch((error) => {
			throw error;
		});
};

export default getApiCaller;
