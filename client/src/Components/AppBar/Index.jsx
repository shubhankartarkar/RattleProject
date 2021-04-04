import React from 'react'
import { Button, IconButton, AppBar, Toolbar, Typography, makeStyles, Badge } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  loginStatus: {
    textTransform: 'capitalize',
    fontSize: '1.2rem'
  },
  badge: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display:'none'
  }
}));

function Index(props) {
  const classes = useStyles()
 
  const { title, cart } = props

  const cartCount = () => {
    console.log('Cart', cart.length)
    if(cart.length > 0){
      return cart.length
    } else {
      return null
    }
  }
  
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Badge badgeContent={cartCount()} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Index)
