import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300
  },
  text: {
    display: 'flex',
    alignItems: 'center'
  },
  '.MuiSlider-root': {
    width: '500px'
  }
});

function SliderFilter(props) {
  const { min, max, step, tileText, onCommitChange } = props
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getFilteredData = (event, newValue) => {
      onCommitChange(newValue)
  }

  return (
    <div className={classes.root}>

      <Grid container spacing={2}>
        <Typography className={classes.text} id="continuous-slider" gutterBottom>
          {tileText}
        </Typography>

        <Grid item xs>
          <Slider
            value={value}
            onChange={handleChange}
            onChangeCommitted={getFilteredData}
            min={min}
            max={max}
            step={step}
            def
            valueLabelDisplay="auto"
            aria-labelledby="continuous-slider" />
        </Grid>
      </Grid>
    </div>
  )
}

export default SliderFilter

