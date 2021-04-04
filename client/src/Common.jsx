import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, CircularProgress, makeStyles } from '@material-ui/core';
import SearchFilter from './Components/SeachFilter/Index.jsx';
import Products from './Components/Products/Index.jsx'
import BootstrapCarousel from './Components/ImageSlider/BootstrapCarousel.jsx';

const useStyles = makeStyles({
  textCenter: {
    textAlign: 'center'
  }
})

function App() {
  const classes = useStyles()

  let [products, setProduct] = useState([])
  let [loading, setLoading] = useState(true)
  let [error, setError] = useState('')
  let [searchTerm, setSearchTerm] = useState('')

  let [discSlider, setDiscSlider] = useState(0)
  let [rateSlider, setRateSlider] = useState(0)
  let [priceSlider, setPriceSlider] = useState(0)

  useEffect(() => {
    fetchProducts()
  }, [])

  const discVal = (val) => {
    setDiscSlider(val)
  }

  const rateVal = (val) => {
    setRateSlider(val)
  }

  const pricVal = (val) => {
    setPriceSlider(val)
  }

  const filterSlider = (data) => {
    if(discSlider > 0 || priceSlider > 0 || rateSlider > 0){
      return data.filter(p => p.discount < discSlider && p.price < priceSlider && p.rating < rateSlider)
    } else {
      return data
    }
  }

  function fetchProducts(){
    axios.get(`http://localhost:3001/api/fetchProducts`)
      .then((res) => {
        console.log(res)
        if (res.data.status === 'success') {
          setLoading(false)
          setProduct(res.data.products)
        } else {
          setError(res.data)
        }
      })
      .catch(err => {
        setError(err)
      })
  }

  const setTerm = (e) => {
    setSearchTerm(e.target.value)
  }

  const filterProductByName = (data) => {
    return data.filter(product => product.name.toLowerCase().indexOf(searchTerm) > -1)
  }


  return (
    <>
      <BootstrapCarousel/>
      <Container maxWidth="lg">
        <SearchFilter setTerm={setTerm} searchVal={searchTerm} discVal={discVal} 
          rateVal={rateVal} pricVal={pricVal}/>
        {loading ? <div className={classes.textCenter}><CircularProgress color="secondary" /></div> 
        : <Products products={filterSlider(filterProductByName(products))}/>}
      </Container>
    </>
  );
}

export default App;
