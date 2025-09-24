import Counter from "./features/counter/Counter"
import RandomList from "./features/random/RandomList"
import "./App.css"
import DarkLight from "./features/darkLight/DarkLight"
import ChangeInterface from "./features/changeInterface/ChangeInterface"
import MenuSideBar from "./features/menuSideBar/MenuSideBar"
import LanguageSelector from "./features/languageSelector/LanguageSelector"
import FavoritesList from "./features/FavoritesList/FavoritesList"

function App() {

  return (
    <>
      <Counter></Counter>
      <RandomList></RandomList>
      <DarkLight></DarkLight>
      <ChangeInterface></ChangeInterface>
      <MenuSideBar></MenuSideBar>
      <LanguageSelector></LanguageSelector>
      <FavoritesList></FavoritesList>
    </>
  )
}

export default App
