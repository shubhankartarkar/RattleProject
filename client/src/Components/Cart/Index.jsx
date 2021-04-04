import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import CustomerForm from '../PlaceOrder/Index';
import AlertBar from '../PlaceOrder/AlertBar';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  placeOrderBtn : {
    float: 'right',
    marginTop:'10px'
  }
});

function Index(props) {
  let { cart } = props
  const classes = useStyles()

  //Modal Prop
  const [open, setOpen] = useState(false)

  const toggleDialog = () => {
    setOpen(!open)
  }

  return (
    <>
      {cart.length > 0 ? (
        <Container maxWidth="lg">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">Unit Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">SubTotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((row) => {
                return <CartItem cartItem={row} />
              })}
              <CartTotal />
            </TableBody>
          </Table>
        </TableContainer>
        
        <Button className={classes.placeOrderBtn} 
          color="secondary" variant="contained" onClick={toggleDialog}>Place Order</Button>
      </Container>
      ) : <h1>No Items in Cart</h1>}
      <CustomerForm open={open} toggleDialog={toggleDialog}/>
      <AlertBar/>
    </>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Index)

