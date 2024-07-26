import { useSelector } from "react-redux"
import AuthNav from "../AuthNav/AuthNav"
import Navigation from "../Navigation/Navigation"
import { selectLoggedIn } from "../../redux/auth/selectors"

import css from "./appBar.module.css"
import UserMenu from "../UserMenu/UserMenu"


const AppBar = () => {

  const isLoggedIn = useSelector(selectLoggedIn)
  return (
    <div className={css.boxNavigation}><Navigation />
      
    {isLoggedIn ? <UserMenu/> : <AuthNav />}
    </div>
  )
}

export default AppBar