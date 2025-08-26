import Space from "./components/Space"
import SubjectList from "./components/SubjectList"
import LoginStatus from "./components/LoginStatus"
import Button from "./components/Button"
import ClickCounter from "./components/ClickCounter"
import Ex5 from "./components/Ex5"
import ThemeSwitcher from "./components/ThemeSwitcher"
import ShoppingCart from "./components/ShoppingCart/src/ShoppingCart"

function App() {

  return (
    <>
      <SubjectList />
      <Space />
      <LoginStatus />
      <Space />
      <Button />
      <Space />
      <ClickCounter />
      <Space />
      <Ex5 />
      <Space />
      <ThemeSwitcher />
      <Space />
      <ShoppingCart />
    </>
  )
}

export default App

