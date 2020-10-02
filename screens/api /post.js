import axios from 'axios'

//create account 
export const createAccount = (user) => {
     axios.post(`${baseUrl}/users/create`, user) 
     // user is the object that as name number and password 
}
//make payment 
export const sendMoneyTo = (value, userNumber) => {
     axios.post(`${baseUrl}/users/send/`,{
          id:userNumber,
          value, //same as value:value 
     })
}
//login
export const login = (number, password) => {
     axios.post(`${baseUrl}users/login`,{
          number,
          password
     })
}
