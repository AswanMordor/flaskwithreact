import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 150,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: 'XS',
  },
  {
    value: 25,
    label: 'S',
  },
  {
    value: 50,
    label: 'M',
  },
  {
    value: 75,
    label: 'L',
  },
  {
    value: 100,
    label: 'XL',
  },
];

function valueText(value) {
  return `${value}`;
}

export default function SizeSlider(){
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider 
        defaultValue={"XS"}
        getAriaValueText={valueText}
        aria-labelledby="size-slider"
        valueLabelDisplay="auto"
        step={25}
        marks
        min={0}
        max={100}
      />
    </div>
  )
}