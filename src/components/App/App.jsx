import Header from '../Header'
import Item from '../Item'
import styles from './App.module.scss'
import Menu from '../Menu'


function App() {

    return (
        <>
          <div className={styles.app}>
            <Header />
            <Item />
            <Item />
            <Item />
            <Item />
            <Menu />
          </div>
        </>
      )
    
    
    
}

export default App