import React from "react"
import { useLocation } from "react-router-dom"
import { Login } from "../components/login"
export const Home = () => {
  const location = useLocation()

  return (
    <div>
      <Login class="bg-white ; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) ; padding: 20px ; width: 0 auto ; margin-top: 50px;" />
    </div>
  )
}
