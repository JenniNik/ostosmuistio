import styles from './AddItem.module.scss'
import ItemForm from '../ItemForm/ItemForm'

function AppItem(props) {

  return (
    <div>
      <h1>Ostosmuistio</h1>
      <div className={styles.additem}></div>
      <h2>Uusi ostos</h2>
      <ItemForm onItemSubmit={props.onItemSubmit} typelist={props.typelist} />



    </div> 
  )

}

export default AppItem
