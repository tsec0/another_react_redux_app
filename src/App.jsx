import './App.css'

// import AllProducts from './components/AllProducts';
// import SpecificProduct from './components/SpecificProduct';
// import AddNewProduct from './components/AddNewProduct';
//import UpdateProduct from './components/UpdateProduct';
import DeleteProduct from './components/DeleteProduct';

// import Counter from './components/Counter';

function App() {

  return (
    <>
      <div>
        {/* <AllProducts /> */}
        {/* <SpecificProduct /> */}
        {/* <AddNewProduct /> */}
        {/* <UpdateProduct productId = {4}/> */}
        <DeleteProduct productId = {2} />
      </div>
    </>
  )
}

export default App;
