import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: `${theme.spacing(1)}px 0`
  }
}))

function TextInput(props) {
  const { name, label, onChange, value, type = "text" , ...other} = props
  const classes = useStyles()

  return (
    <>
      <TextField className={classes.root} autoComplete="off"
            name={name}
            label={label}
            type={type}
            fullWidth
            variant="standard"
            value={value}
            onChange={e => onChange(e)}
            {...other}
          />
    </>
  )
}

export default TextInput