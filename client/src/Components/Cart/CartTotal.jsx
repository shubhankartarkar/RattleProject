import React from 'react';
import { TableCell, TableRow, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { shippingCharges, taxPercent } from '../../globalConstants';

const useStyles = makeStyles({
  tableCell: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

function CartTotal(props) {
  let { cart } = props
  const classes = useStyles();
  
  const calculateTotal = () => {
    return cart.map(item => item.discountedPrice * item.quantity).reduce((a, b) => a + b, 0).toFixed(0)
  }

  const calculateTax = () => {
    return ((cart.map(item => item.discountedPrice * item.quantity).reduce((a, b) => a + b, 0)) * (taxPercent / 100)).toFixed(0)
  }

  const calculateGrand = () => {
    let total = cart.map(item => item.discountedPrice * item.quantity).reduce((a, b) => a + b, 0).toFixed(0)

    return (+total + (total * (taxPercent/100)) + shippingCharges).toFixed(0)
  }

  return (
    <>
      <TableRow>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell component="th" scope="row" className={classes.tableCell}>
          Total
        </TableCell>
        <TableCell component="th" scope="row" className={classes.tableCell}>
          &#8377;{calculateTotal()}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell component="th" scope="row" className={classes.tableCell}>
          Shipping
        </TableCell>
        <TableCell component="th" scope="row" className={classes.tableCell}>
          &#8377;{shippingCharges}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell component="th" scope="row" className={classes.tableCell}>
          Tax
        </TableCell>
        <TableCell component="th" scope="row" className={classes.tableCell}>
          &#8377;{calculateTax()}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell component="th" scope="row" className={classes.tableCell}>
          Grand Total
        </TableCell>
        <TableCell component="th" scope="row" className={classes.tableCell}>
          &#8377;{calculateGrand()}
        </TableCell>
      </TableRow>
    </>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(CartTotal)
