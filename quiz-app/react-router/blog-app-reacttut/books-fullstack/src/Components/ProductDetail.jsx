import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import {items} from '../data.jsx'
import { ToastContainer, toast, Bounce } from 'react-toastify';



const ProductDetail = ({cart,setCart}) => {
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
    const {id} = useParams();
    const [product,setProduct] =useState([]);
    const [relatedProducts, setRelatedProducts] = useState([])

    useEffect(()=>{
     const filterProduct = items.filter((product)=>product.Book_id ==id);
     console.log(filterProduct);
     setProduct(filterProduct[0]);
     const relatedProducts = items.filter((p)=>product.Title === p.Title)
    },[id])

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
    <div className="container con">
        <div className="img">
         <img src={product.ImageUrl} alt=''/>
        </div>
        <div className='text-center'>
        <h1 className="card-title">{product.Title}</h1>
    <p className="card-text">{product.Description}</p>
    <button className='btn btn-primary mx-3'>{product.Price} $</button>
    <button className='btn btn-warning' onClick={() => addToCart(product.Book_id, product.Price, product.Title, product.Description, product.ImageUrl, product.Rental_Price)}>Add toCart</button>
        </div>
    </div>
    
    <div class="card-group gap-3">
  <div class="card">
  <img src={product.ImageUrl} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{product.Title}</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src={product.ImageUrl} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{product.Title}</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
  <img src={product.ImageUrl} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{product.Title}</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
    </>
  )
}

export default ProductDetail