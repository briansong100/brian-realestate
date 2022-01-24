import axios from "axios";


// headers: {
// 	'x-rapidapi-host': 'bayut.p.rapidapi.com',
// 	'x-rapidapi-key': 'be3cb6b5f7mshc21da8e4067d7a0p1f225bjsnd18f08a06b59'
// }

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async( url) =>{
	const {data} = await axios.get( (url) , {
		headers: {
			'x-rapidapi-host': 'bayut.p.rapidapi.com',
			'x-rapidapi-key': 'be3cb6b5f7mshc21da8e4067d7a0p1f225bjsnd18f08a06b59'
		}
	})
	return data
}