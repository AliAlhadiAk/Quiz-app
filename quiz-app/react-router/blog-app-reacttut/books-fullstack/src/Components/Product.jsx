import React from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ items, cart, setCart }) => {
  const addToCart = (id, price, title, description, imgsrc, rentalPrice) => {
    const obj = { id, price, title, description, imgsrc, rentalPrice };
    setCart([...cart, obj]);
    toast.success(' Your Item is added to Cart AL5aaaaaaaaaaaaaaal', {
      position: "top-right",
      autoClose: 1498,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce
    });
  };

  // Debugging: Check if items are being passed correctly
  console.log('Items:', items);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      
      <div className="row" style={{backgroundImage : 'https://images.deepai.org/art-image/467ab5d4846d450f8f48d98409a6be6c/an-image-for-a-back-ground-of-and-eccomerce-book-stor.jpg'}}>
        {items.map((product) => (
          <div key={product.Book_id} className="product-container col-lg-4 my-3 text-center">
            <div className="card" style={{ width: '18rem' }}>
              <Link to={`/product/${product.Book_id}`} style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <img src={product.ImageUrl} className="card-img-top" alt={product.Title} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{product.Title}</h5>
                <p className="card-text">{product.Description}</p>
                <button className='btn btn-primary mx-3'>{product.Price} $</button>
                <button
                  className='btn btn-warning'
                  onClick={() => addToCart(product.Book_id, product.Price, product.Title, product.Description, product.ImageUrl, product.Rental_Price)}
                >
                  Add To Cart
                </button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
   
    </>
  );
};

export default Product;
