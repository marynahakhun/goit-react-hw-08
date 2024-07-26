import { NavLink} from "react-router-dom";
import css from "./navigation.module.css"

import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
    const isLoggedIn = useSelector(selectLoggedIn)
  return (
    <div className={css.boxNavigation}>
      
      <nav className={css.navigation}>
       
      <NavLink to="/" className={css.buildLinkClass}>
          Home
        </NavLink>
        {isLoggedIn && <NavLink to="/contacts" className={css.buildLinkClass}>
          Contacts
        </NavLink>}
        
        
      </nav></div>
  )
}

export default Navigation