import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom" //aide pour les redirections

export const Login = () => {
  const history = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = async (e) => {
    e.preventDefault()

    try {
      await axios
        .post("http://localhost:3000/", {
          email,
          password,
        })
        .then((res) => {
          if ((res.data = "exist")) {
            history("/nmap", { state: { id: email } })
          } // ce sont les exist et notexist
          else if ((res.data = "notexist")) {
            alert("User have not singup")
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
    <div className="login">
      <h1>Login</h1>

      <form action="POST">
        <input
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

        <input type="submit" onClick={submit} />
      </form>

      <br />
      <p>or</p>
      <br />

      <link to="/signup">signup page</link>
    </div>
  )
}
