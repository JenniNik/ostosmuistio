import styles from './Menu.module.scss'
import { FaShoppingCart } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { NavLink } from 'react-router-dom'


function Menu() {

  return (

    <div className={styles.menu}>
    <div><NavLink to=""><FaShoppingCart /></NavLink></div>
    <div><NavLink to="/stats"><FcStatistics /></NavLink></div>
    <div><NavLink to="/settings"><MdOutlineSettingsSuggest /></NavLink></div>
  </div>

   
  )

}

export default Menu
