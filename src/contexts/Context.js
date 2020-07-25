import React, { createContext, useState } from 'react'


export const Context = createContext()

export default function ContextProvider(props) {

  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState('')

  const login = () => {
    console.log('login')
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