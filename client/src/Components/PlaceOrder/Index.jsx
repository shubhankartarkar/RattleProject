import React, { useState , useEffect} from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import axios from 'axios';
import TextInput from './TextInput';
import { serverUrl } from '../../globalConstants';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AlertBar from './AlertBar';
import { shippingCharges, taxPercent } from '../../globalConstants';
import { emptyCart } from '../../Store/Cart/CartAction';

function Index(props) {

  const { open, toggleDialog, cart, emptyCart } = props
  const [ alertOpen, setAlertOpen ] = useState(false)
  const [ alertMsg, setAlertMsg ] = useState('')
  const [orderSuccess, setOrderSuccess] = useState(false)
  const history = useHistory()

  useEffect(() => {
    setForm({
      ...form,
      cartTotal: calculateGrand(),
      totalTax: calculateTax()
    })
  },[open])
  
  const calculateTax = () => {
    return ((cart.map(item => item.discountedPrice * item.quantity).reduce((a, b) => a + b, 0)) * (taxPercent / 100)).toFixed(0)
  }

  const calculateGrand = () => {
    let total = cart.map(item => item.discountedPrice * item.quantity).reduce((a, b) => a + b, 0).toFixed(0)

    return (+total + (total * (taxPercent/100)) + shippingCharges).toFixed(0)
  }

  const [form, setForm] = useState({
    name: '',
    address: '',
    mobile: '',
    cartTotal: calculateGrand(),
    totalTax: calculateTax(),
  })
  
  const setAlert = () => {
    setAlertOpen(!alertOpen)
  }

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submitOrder = () => {
    let { name, address, mobile } = form
    
    if(name.trim().length == 0 || mobile.trim().length == 0 || address.trim().length == 0){
      setAlertOpen(true)
      setAlertMsg('Please fill all the information')
      return;
    } else if(mobile.trim().length !== 10){
      setAlertOpen(true)
      setAlertMsg('Mobile Number must be 10 digits')
      return;
    } else {
      axios.post(`${serverUrl}/api/confirmOrder`, {
        userInfo: form,
        cart
      }).then(res => {
        if(res.data.status === 'success'){
          setAlertOpen(true)
          setAlertMsg('Order Placed Succesfully')
          setForm({
            ...form,
            mobile:'',
            address:'',
            name:''
          })
          emptyCart()
          setOrderSuccess(true)

        } else {
          setAlertOpen(true)
          setAlertMsg('Some Error Occured')
        }
      })
    }
  }

  return (
    <>
      <Dialog fullWidth disableBackdropClick open={open} onClose={toggleDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enter Delivery Details</DialogTitle>
        <DialogContent>
          <TextInput name="name" label="Customer Name"
            value={form.name} onChange={handleInput} />
          <TextInput name="mobile" label="Mobile number"
            value={form.mobile} onChange={handleInput} type="number"/>

          <TextInput name="address" label="Address"
            value={form.address} onChange={handleInput} multiline rowsMax={5} />

        </DialogContent>
        <DialogActions>
          {orderSuccess ? (
            <Button color="secondary" variant="contained" onClick={() => history.push('/')}>
              Go to Homepage
            </Button>
          ): (
            <Button color="secondary" variant="contained" onClick={submitOrder}>
             Confirm Order
          </Button>
          )}
          
          <AlertBar alertOpen={alertOpen} setAlertOpen={setAlert} alertMsg={alertMsg}/>
        </DialogActions>
      </Dialog>
      
    </>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    emptyCart: () => dispatch(emptyCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
