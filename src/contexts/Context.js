import React, { createContext, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from 'react-native-dotenv'


export const Context = createContext()

export default function ContextProvider(props) {

  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState('')

  const login = async (data) => {
    console.log('login')
    try {
      const response = await axios.get(BASE_URL)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const register = () => {
    console.log('register')
  }

  const logout = () => {
    console.log('logout')
  }

  return (
    <Context.Provider value={{
      isLoading, isLoggedIn, token,
      login, register, logout
    }}>
      { props.children }
    </Context.Provider>
  )
}