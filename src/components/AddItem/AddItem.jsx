import styles from './AddItem.module.scss'
import ItemForm from '../ItemForm/ItemForm'

function AppItem(props) {

  return (
    <div>
      <div className={styles.additem}></div>
      <h2>Uusi ostos</h2>
      <ItemForm />

    </div> 
  )

}

export default AppItem
