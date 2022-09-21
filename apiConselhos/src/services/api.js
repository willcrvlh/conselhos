import axios from 'axios'

export const api = axios.create({
    baseURL: "https://api.adviceslip.com/advice"
})

export const getConselho = async () =>{
     const response = await api.get()
     return response.id
}

