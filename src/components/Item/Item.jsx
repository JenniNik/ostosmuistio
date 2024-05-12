import styles from './Item.module.scss'

function Item() {

  return (
    <div className={styles.item}>
      <div className={styles.item_data}>
        <div className={styles.item_type}>Ruokaostokset</div>
        <div className={styles.item_amount}>103,80 €</div>
        <div className={styles.item_date}>12.5.2024</div>
        <div className={styles.item_timespan}>1.12.2022 - 28.2.2023</div>
        <div className={styles.item_receiver}>Näsin S-Market</div>
        <div className={styles.item_average}>145,83 €/kk</div>
      </div>
    </div>
  )

  }
  
  export default Item
  