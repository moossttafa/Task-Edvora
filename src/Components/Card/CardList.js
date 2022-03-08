import React, { Fragment, useEffect, useState } from 'react'
import Card from './Card'
import classes from "./CardList.module.css"
// import RideContext from "../Context/RideContext" 
// import Context from '../Context/ApiContext'
import axios from 'axios' 

const CardList = () => {

  const url = `http://assessment.api.vweb.app/rides`;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setProducts(response.data)
      })  
      .catch(err=>console.log(err))
    },[url])

  return (
    <Fragment>    
    {products && products.map((product , item) => {
      return  <Card key={item} className={classes.lists}>
          <article  className={classes.details}>
            <img src={product.map_url} alt='pic' />
            <div className={classes.info}>
              <p>
                <span>Ride Id : </span>
                {product.id}
              </p>
              <p>
                <span>Origin Station : </span>
                20
              </p>
              <p>
                <span>station_path: </span>
                  {product.station_path}  
              </p>
              <p>
                <span>Date: </span>
                {product.date}
              </p>
              <p>
                <span>Distance : </span>
                {product.destination_station_code}
              </p>
            </div>
            <div className={classes.city}>
              <div className='d-flex'>
                <span>{product.city}</span>
                <span>{product.state}</span>
              </div>
            </div> 
          </article>
        </Card> 
    })}
    </Fragment>
  )
}

export default CardList;