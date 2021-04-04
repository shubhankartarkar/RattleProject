import { makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

const useStyles = makeStyles({
  sliderImage: {
    width: '100%',
    height: '100px'
  },
  leftSlider : {
    position: 'absolute',
    top: '50%'

  },
  rightSlider : {
    position: 'absolute',
    top: '50%'
  }
})

function Index() {
  let classes = useStyles()
  const [images, setImages] = useState(['banner1.jpg', 'banner2.jpg', 'banner3.jpg', 'banner4.jpg'])
  const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0

  useEffect(() => {
    let slideInterval = setInterval(() => {
      slideRight()
    }, 4000)

    return () => {
      clearInterval(slideInterval)
    }
  }, [index])

  const slideRight = () => {
    setIndex((index + 1) % images.length); // increases index by 1
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1); // returns last index of images array if index is less than 0
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    images.length > 0 && (
      <div>
        <div className={classes.leftSlider}>
          <button onClick={slideLeft}>{"<"}</button>
        </div>
        <div>
          <img className={classes.sliderImage} src={`./${images[index]}`} alt={index} />
        </div>
        <div className={classes.rightSlider}>
          <button onClick={slideRight}>{">"}</button>
        </div>
      </div>
    )
  );
}

export default Index

