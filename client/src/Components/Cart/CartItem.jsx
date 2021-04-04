import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { imageUrl } from '../../globalConstants'
import SelectQuantity from './SelectQuantity';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  productImage : {
    height:'50px',
    width:'50px'
  },
  tableCell: {
    textAlign:'center'
  }
});

function CartItem(props) {
  let { cartItem } = props
  const classes = useStyles();

  return (
    <TableRow key={cartItem.productId}>
    <TableCell className={classes.tableCell}>
      <img className={classes.productImage} src={`${imageUrl}/${cartItem.image}`} alt={'s'}/>
    </TableCell>
    <TableCell component="th" scope="row" className={classes.tableCell}>
      {cartItem.name}
    </TableCell>
    <TableCell className={classes.tableCell} align="center">{cartItem.discountedPrice}</TableCell>
    <TableCell className={classes.tableCell} align="center">
      <SelectQuantity quantity={cartItem.quantity} productId={cartItem.productId}/>
    </TableCell>
    <TableCell className={classes.tableCell} align="center">{cartItem.discountedPrice * cartItem.quantity}</TableCell>
  </TableRow>
  )
}

export default CartItem