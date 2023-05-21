const nmap = require("node-libnmap")
import React, { useState } from "react"

const scanMap = () => {
  const options = {
    range: [{ ipAdress }],
    ports: "1-1000",
    timeout: 120,
    flags: [options],
  }
  nmap.scan(options, function (err, report) {
    if (err) {
      console.error(err)
      return
    }
    //recupere les resultats du scan
    const scanResults = report.scan
  })
}

export const mapper = () => {
  const [ipAdress, setIpAdress] = useState("")

  const myOption = () => {
    const [selectedOption, setSelectedOption] = useState("")
  }

  const handleInputchange = (event) => {
    setIpAdress(event.target.value)
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }
  const handleScanButtonClick = () => {
    scanMap()
  }

  return (
    <div class="bg-white ; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) ; padding: 20px ; width: 0 auto ; margin-top: 50px;">
      <form action="POST">
        <input
          type="text"
          pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
          placeholder="Enter IP adress"
          value={ipAdress}
          onChange={handleInputchange}
        />
        <label>
          <input
            type="radio"
            value={options}
            placeholder="-Sv"
            checked={options === "-Sv"}
            onChange={handleOptionChange}
          />
          <input
            type="radio"
            value={options}
            placeholder="-Ss"
            checked={options === "-Sv"}
            onChange={handleOptionChange}
          />
        </label>
        <button onClick={this.handleScanButtonClick} placeholder="Scan" />
        <a href="/history">Hitory</a>
      </form>
    </div>
  )
}
