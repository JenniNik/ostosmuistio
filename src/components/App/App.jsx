import Header from '../Header'
import Item from '../Item'
import styles from './App.module.scss'
import Menu from '../Menu'
import Content from '../Content'
import Button from '../../shared/buttons'


function App() {

    return (
        <>
          <div className={styles.app}>
            <Header />
            <Content>
              <Item />
              <Item />
              <Item />
              <Item />
              <Button>UUSI OSTOS</Button>
            </Content>
            <Menu />
          </div>
        </>
      )
    
    
    
    
}

export default App