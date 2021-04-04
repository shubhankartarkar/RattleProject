import { Grid } from '@material-ui/core';
import React from 'react'
import TextInput from './TextInput'
import SliderFilter from './SliderFilter'

function Index(props) {
  let { setTerm, searchVal, discVal, rateVal, pricVal } = props

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <TextInput setTerm={setTerm} searchVal={searchVal}
        pricVal
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <SliderFilter min={0} max={100} step={1} tileText="Discount" onCommitChange={discVal}/>
        <SliderFilter min={0} max={5000} step={100} tileText="Price" onCommitChange={pricVal}/>
        <SliderFilter min={0} max={5} step={0.1} tileText="Rating" onCommitChange={rateVal}/>
      </Grid>
    </Grid>
  )
}

export default Index
