import { useNavigate } from "react-router-dom";
import "../../styles/nav/Nav.scss";

const Nav = () => {
  const nav = useNavigate();

  return (
    <div className="nav-container">
      <span className="nav-home" onClick={() => nav("/")}>HOME</span>
      <span className="nav-abouther" onClick={() => nav("/abouther")}>ABOUT HER</span>
      <span className="nav-aboutbooks" onClick={() => nav("/aboutbooks")}>ABOUT BOOKS</span>
    </div>
  );
};

export default Nav;