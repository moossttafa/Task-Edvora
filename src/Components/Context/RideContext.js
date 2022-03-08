// import React, { createContext ,useState ,useEffect} from 'react'
// import axios from 'axios';
// import CardList from '../Card/CardList'; 

// const Context = createContext([]);

// const RideProvider = () => {
//   const url = `http://assessment.api.vweb.app/rides`;
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get(url)
//       .then(response => {
//         setProducts(response.data)
//       })  
//       .catch(err=>console.log(err))
//     },[url])
    
//     // console.log("products",products)

//   return(
//       <Context.Provider value={products}>
//         <CardList />
//       </Context.Provider>
//   )
// } 
// export default RideProvider