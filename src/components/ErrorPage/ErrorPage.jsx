import styles from './ErrorPage.module.scss'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {

  const error = useRouteError();
  return (
    <div className={styles.errorpage}>
      <h2>Ou nou!</h2>
      <p>Homma seis! Nyt tuli joku errori!.</p>
      <p>{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage
