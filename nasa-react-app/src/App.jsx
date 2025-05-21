import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"
import { useState } from "react"


function App() {
  const [showModal, setShowModal] = useState(false)
  const handleToggleModal = () => {
    setShowModal(!showModal)
  }
  return (
    <>
      <Main />
      {showModal && (
        <SideBar handleToggleModal={handleToggleModal}></SideBar>
      )}
      <Footer handleToggleModal={handleToggleModal}/>
    </>
  )
}

export default App
