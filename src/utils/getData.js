const API_URL = "https://rickandmortyapi.com/api/character"; //Endpoint de los personajes

const getData = async (id) => {
	const apiUrl = id ? `${API_URL}/${id}` : API_URL;
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Fetch Error:", error);
	}
};

export default getData;
