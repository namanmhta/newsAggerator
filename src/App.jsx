import { useState } from "react"
import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"

const App = () => {
  const[category, setCategory] = useState("genral");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard Category={category}/>
    </div>
  )
}

export default App