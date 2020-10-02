import axios from 'axios'

const  baseUrl = ''

//get all users to home page, that are on my contacts
export const getUsers = () =>{
     axios.get(`${baseUrl}/users`)
}
//get a specific user 
export const getUser = (id) =>{
     axios.get(`${baseUrl}/users/:${id}`)
}
//sget account status
export const getStatusAccount = (id) => {
     axios.get(`${baseUrl}/:${id}/status`)
}
