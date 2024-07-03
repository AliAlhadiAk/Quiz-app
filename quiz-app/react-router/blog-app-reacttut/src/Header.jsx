import { Link } from "react-router-dom";
import {FaLaptop,FaMobileAlt,FaTabletAlt} from 'react-icons/fa';
import { useContext } from "react";
import DataContext from "./DataContext";

const Header = ({ title }) => {
  const {width}=useContext(DataContext);
  return (
      <header className="Header">
        <h1>{title}</h1>
        {width <768 ? <FaMobileAlt/>:
        width<992 ? <FaTabletAlt/>:
        <FaLaptop/>}
      </header>
  )
}

export default Header