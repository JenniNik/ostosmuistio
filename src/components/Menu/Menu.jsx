import styles from './Menu.module.scss'
import { FaShoppingCart } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { MdOutlineSettingsSuggest } from "react-icons/md";
function Menu() {

  return (
    <div className={styles.menu}>
    <div><FaShoppingCart /></div>
    <div><FcStatistics /></div>
    <div><MdOutlineSettingsSuggest /></div>
    </div>
  )

}

export default Menu
