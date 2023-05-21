import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const signup = () => {
  const history = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = async (e) => {
    e.preventDefault()

    try {
      await axios
        .post("http://localhost:3000/signup", {
          email,
          password,
        })
        .then((res) => {
          if ((res.data = "exist")) {
            alert("user already exists")
          } // pour savoir si l'user existe deja ou non
          else if ((res.data = "notexist")) {
            history("/nmap", { state: { id: email } })
          }
        })
        .catch((e) => {
          alert("wrong details")
          console.log(e)
        })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div
      className="signup"
      class="bg-white ; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) ; padding: 20px ; width: 0 auto ; margin-top: 50px;"
    >
      <h1 class="font-semibold">signup</h1>

      <form action="POST">
        <input
          class="border-radius: 10px"
          type="email"
          onChange={(e) => {
            setEmail(e.target)
          }}
          placeholder="Email"
        />

        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target)
          }}
          placeholder="Password"
        />

        <input
          class="border-radius: 5px font-light"
          type="submit"
          onClick={submit}
        />
      </form>

      <br />
      <p>or</p>
      <br />

      <link to="/login">login page</link>
    </div>
  )
}
