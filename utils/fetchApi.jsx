import axios from "axios";


export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async( url) =>{
	const {data} = await axios.get( (url) , {
		headers: {
			'x-rapidapi-host': 'bayut.p.rapidapi.com',
			'x-rapidapi-key': 'ad703ff5a3msh5d08604ce1af136p182729jsn884d9336de6c'
		}
	})
	return data
}
