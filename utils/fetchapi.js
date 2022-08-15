import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
headers: {
    'X-RapidAPI-Key': 'cecbbb7727msh3112eb5b0fc6695p185d82jsn3e39c116e9e5',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }

    })

    return data;
}