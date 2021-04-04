import React from 'react';
import Grid from '@material-ui/core/Grid';
import SingleProduct from './SingleProduct';

function Index(props) {
  let { products } = props
  return (
    <Grid container spacing={3}>
    {products.map(product => {
      return <SingleProduct product={product} key={product.productid}/>
    })}
    {products.length == 0 ? <h1>No Products Found</h1>: null}
    </Grid>
  )
}

export default Index

