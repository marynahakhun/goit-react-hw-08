import { Link } from "react-router-dom";
import css from "./authNav.module.css"

const AuthNav = () => {
  return (
    <div className={css.navigation}>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Registration</Link>
    </div>
  );
};

export default AuthNav;
