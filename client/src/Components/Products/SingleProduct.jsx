import React from 'react';
import { Paper, Grid , makeStyles, Button  } from '@material-ui/core';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { addToCart } from '../../Store/Cart/CartAction';
import StarRateIcon from '@material-ui/icons/StarRate';
import { imageUrl } from '../../globalConstants';

const useStyle = makeStyles({
  productName: {
    fontWeight: 'bold',
    fontSize:'1.2rem'
  },
  productImage : {
    height:'120px',
    width:'120px',
    border: '1px solid #ccc'
  },
  rating: {
    color:'#fff',
    padding:'5px',
    background: '#4caf50',
    borderRadius: '5px'
  },
  discount: {
    color:'#fff',
    padding:'5px',
    background: 'blue',
    borderRadius: '5px'
  },
  paperWrapper : {
    display:'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '4px'
  },
  productDetails : {
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
    width: '100%',
    gap: '10px'
  },
  productPricing: {
    display:'flex',
    justifyContent: 'space-evenly',
    alignItems:'center',
    width: '100%'
  },
  price: {
    color:'#fff',
    padding:'5px',
    background: '#3f51b5',
    borderRadius: '5px'
  },
  strikeOut: {
    textDecoration: 'line-through',
    fontSize:'0.8rem'
  }, 
  discountedPrice: {
    marginLeft: '10px',
    fontSize: '1rem'
  }
})

function SingleProduct(props) {
  const { product, cart , addToCart  } = props
  const classes = useStyle()
  const history = useHistory()

  function addProduct(){
    let newProduct = {
      ...product,
      quantity:1
    }
    addToCart(newProduct)
  }

  const chkIfAdded = (prodId) => {
    
    if(cart.map(a => a.productId).includes(prodId)){
      return (<Button variant="contained" color="secondary" onClick={() => history.push('/Mycart')}>
                Go to Cart
              </Button>)
    } else {
      return (<Button variant="contained" color="secondary" onClick={addProduct}>
                <ShoppingCartIcon />
              </Button>)
    }
  }

  return (
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paperWrapper}>
      <div>
        <img className={classes.productImage} src={`${imageUrl}/${product.image}`} alt={'s'}/>
      </div>
      <div className={classes.productDetails}>
        <div className={classes.productName}>
          {product.name}
        </div>
        <div className={classes.productPricing}>
          <div className={classes.rating}>
          <StarRateIcon/>
            {product.rating}
          </div>
          <div className={classes.discount}>
            {product.discount}% Off
          </div>
          <div className={classes.price}>
            <span className={classes.strikeOut}>
              Mrp: &#8377;{product.price}
            </span>
            <span className={classes.discountedPrice}>
              Mrp: &#8377;
            {product.discountedPrice}</span>
          </div>
        </div>
      </div>
      <div>
      {chkIfAdded(product.productId)}
      </div>
      </Paper>
      
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    cart : state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart : (product) => dispatch(addToCart(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
