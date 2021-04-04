import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { Input } from '@material-ui/core'

function TextInput(props) {
  const { setTerm, searchVal } = props

  return (
    <FormControl>
      <InputLabel htmlFor="standard-adornment-password">Search</InputLabel>
      <Input
        id="standard-adornment-password"
        type="text"
        value={searchVal}
        onChange={setTerm}
        endAdornment={
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

export default TextInput

