import styles from './ItemForm.module.scss'
import useForm from '../../shared/useform/useform'
import Button from '../../shared/buttons'
import { useNavigate } from 'react-router-dom'

function ItemForm(props) {
  const navigate = useNavigate()
  const submit = () => {
    console.log(values)
    alert("SUBMIT")
  }
  const initialState = {
    type: "",
    amount: 0,
    paymentDate: "",
    periodStart: "",
    periodEnd: "",
    receiver: ""
  }
  const {values, handleChange, handleSubmit } = useForm(submit, initialState, false)
  const handleCancel = () => {
    navigate(-1)
  }


  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className={styles.itemform}>
        <div className={styles.itemform_row}>
            <div>
            <label htmlFor='type'>Mitä ostit?</label>
            <select name='type' onChange={handleChange} value={values.type}>
                <option>Ruokakulut</option>
                <option>Vaatekulut</option>
                <option>Ravintolakulut</option>
                <option>Bensiinikulut</option>
              </select>


            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='amount'>Summa</label>
              <input type='number' name='amount' step='0.01' onChange={handleChange} value={values.amount} />
            </div>
            <div>
              <label htmlFor='paymentDate'>Ostopäivä</label>
              <input type='date' name='paymentDate' onChange={handleChange} value={values.paymentDate} />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='periodStart'>Laskutuskauden alku</label>
              <input type='date' name='periodStart' onChange={handleChange} value={values.periodStart} />
            </div>
            <div>
              <label htmlFor='periodEnd'>Laskutuskauden loppu</label>
              <input type='date' name='periodEnd' onChange={handleChange} value={values.periodEnd} />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='receiver'>Myyjä</label>
              <input type='text' name='receiver' onChange={handleChange} value={values.receiver} />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <Button onClick={handleCancel}>PERUUTA TAKAISIN</Button>
            </div>
            <div>
              <Button primary type='submit'>LISÄÄ OSTOS</Button>
            </div>
          </div>

        </div>
      </form>
    </div>
  )

}
export default ItemForm


       
