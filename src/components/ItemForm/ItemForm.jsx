import styles from './ItemForm.module.scss'

function ItemForm(props) {

  return (
    <div>
            <form>
        <div className={styles.itemform}>
        <div className={styles.itemform_row}>
            <div>
            <label htmlFor='type'>Mitä ostit?</label>
              <select name='type'>
                <option>Ruoka</option>
                <option>Vaatteet</option>
                <option>Ravintolakulut</option>
                <option>Bensiini</option>
              </select>

            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='amount'>Summa</label>
              <input type='number' name='amount' step='0.01' />
            </div>
            <div>
              <label htmlFor='paymentDate'>Ostopäivä</label>
              <input type='date' name='paymentDate' />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='periodStart'>Laskutuskauden alku</label>
              <input type='date' name='periodStart' />
            </div>
            <div>
              <label htmlFor='periodEnd'>Laskutuskauden loppu</label>
              <input type='date' name='periodEnd' />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='receiver'>Saaja</label>
              <input type='text' name='receiver' />
            </div>
          </div>
        </div>
      </form>
    </div>
  )

}
export default ItemForm


       
