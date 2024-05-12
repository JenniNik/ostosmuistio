import Header from '../Header'
import Item from '../Item'
import styles from './App.module.scss'
import Menu from '../Menu'
import Content from '../Content'


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
            </Content>
            <Menu />
          </div>
        </>
      )
    
    
    
    
}

export default App