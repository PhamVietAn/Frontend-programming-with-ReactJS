import "./style.css"
import Ex01 from "./components/Ex01"
import Ex02 from "./components/Ex02"
import Ex03 from "./components/Ex03"
import Ex04 from "./components/Ex04"
import Ex05 from "./components/Ex05"
import Ex06 from "./components/Ex06"
import Ex07 from "./components/Ex07"
import Ex08 from "./components/Ex08"

function App() {

  return (
    <>
      <div className="p-[40px]">
        <Ex01></Ex01>
        <hr style={{margin: "30px 0"}}/>
        <Ex02></Ex02>
        <hr style={{margin: "30px 0"}}/>
        <Ex03></Ex03>
        <hr style={{margin: "30px 0"}}/>
        <Ex04></Ex04>
        <hr style={{margin: "30px 0"}}/>
        <Ex05></Ex05>
        <hr style={{margin: "30px 0"}}/>
        <Ex06></Ex06>
        <hr style={{margin: "30px 0"}}/>
        <Ex07></Ex07>
        <hr style={{margin: "30px 0"}}/>
        <Ex08></Ex08>
      </div>
    </>
  )
}

export default App
