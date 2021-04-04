import { makeStyles } from '@material-ui/core';
import './BootstrapCarousel.css'
import React from 'react';

let useStyles = makeStyles({
  carouselImg: {
    height: '350px',
    display:'block',
    width:'100%'
  }
})

function BootstrapCarousel() {
  let classes = useStyles()

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        {
          [1, 2, 3].map(slideNum => {
            return (
              <button key={slideNum} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={slideNum} aria-label={`Slide ${slideNum + 1}`}></button>
            )
          })
        }
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className={classes.carouselImg} src="./banner1.jpg" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        {
          ['banner2', 'banner3', 'banner4'].map(bannerImg => {
            return (
              <div className="carousel-item" key={bannerImg}>
                <img className={classes.carouselImg} src={`./${bannerImg}.jpg`} alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{bannerImg}</h5>
                </div>
              </div>
            )
          })
        }
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default BootstrapCarousel
