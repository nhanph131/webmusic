import { Outlet } from "react-router-dom";
import Header from "./components/layout/header";
import AppFooter from "./components/footer/app.footer";
import "./assets/styles/global.css";


const App = () => {
  return (
    <>
          <Header />
          <Outlet />
          <AppFooter/>
    </>
  )
}

export default App;