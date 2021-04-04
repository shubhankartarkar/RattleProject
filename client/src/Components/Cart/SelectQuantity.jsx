import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { updateQuantity } from '../../Store/Cart/CartAction'
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SelectQuantity(props) {
  let { quantity, productId, updateQuantity } = props
  
  let classes = useStyles()

  const currValue = (e) => {
    updateQuantity(productId, e.target.value)
  }
  
  return (
    <FormControl className={classes.formControl}>
      <Select labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={quantity}
        onChange={currValue}>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
            return <MenuItem key={num} value={num}>{num}</MenuItem>
          })
        }
      </Select>
    </FormControl>

  )
}

const mapDispatchToProps = dispatch => {
  return {
    updateQuantity: ( prodId , qty) => dispatch(updateQuantity(prodId,qty))
  }
}

export default connect(null, mapDispatchToProps)(SelectQuantity)
