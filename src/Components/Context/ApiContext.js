// import React, { createContext ,useState ,useEffect} from 'react'
// import axios from 'axios';
// // import CardList from '../Card/CardList';

// const Context = createContext([]);

// export const ApiContext = ({Children}) => {
//   const url = `http://assessment.api.vweb.app/rides`;

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get(url)
//       .then(response => {
//         setProducts(response.data)
//       })  
//       .catch(err=>console.log(err))
//     },[url])

//   return (
//     <Context.Provider value={{products}}>
//         {Children}
//       </Context.Provider>
//   )
// }

// export default Context