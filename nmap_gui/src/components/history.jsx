import React, { useEffect, useState, useeffect } from "react"
import axios from "axios"

const MyComponent = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get("mongodb://localhost:27017/nmap")
      setData(response.data)
    } catch (error) {
      console.error("Error during data collect:", error)
    }
  }
  return (
    <div class="bg-white ; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) ; margin: 0 auto ; border-radius: 10px">
      {data.map((item) => (
        <div key={item._id}>
          <h3 class="font-semibold">{item.title}</h3>
          <P class="font-light">{item.summary}</P>
        </div>
      ))}
    </div>
  )
}
//Je n'ai pas fait d'historique specifique pour chaque compte parce que je vois pas comment formuler la donnée
