import React from 'react'
import { PiAlignCenterHorizontalSimpleDuotone } from 'react-icons/pi'

const Cart = ({cart, setCart}) => {
  return (
   <>
   <div className="container">
    {cart.map((product)=>{
      return(
        <>
            <div class="card mb-3" style={{maxWidth: '540px'}} key={product.Book_id} >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={product.ImageUrl}class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{product.Title}</h5>
        <p class="card-text">{product.Description}</p>
        <button
                  className='btn btn-warning'
                  
                >
                  Rental Now {product.Rental_Price}
                </button>
                <button
                  className='btn btn-warning'
                 
                >
                  Buy Now {product.Price}
                </button>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </>
      )
    })}

</div>
   </>
  )
}

export default Cart