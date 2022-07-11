import "./App.css";
import React,{ useState } from "react";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import Starrating from "./Components/Starrating";

function App() {
  let [cartValue,setCartValue]=useState(0);
  let [toggle,setToggle]=useState(false)
  let [toggle1,setToggle1]=useState(false)
  let [toggle2,setToggle2]=useState(false)
  let [toggle3,setToggle3]=useState(false)
  let [toggle4,setToggle4]=useState(false)
  let [toggle5,setToggle5]=useState(false)
  let [toggle6,setToggle6]=useState(false)
  let [toggle7,setToggle7]=useState(false)
  return (
    <>
      <div>
        <Navigation data={{cartValue:cartValue}} />
        <Header />
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                 <div  className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Iphone 13 pro</h5>
                                    {/* <!-- Product price--> */}
                                    Rs.1,13,000
                                    <div className="card-body p-2 mx-5 text-center">
                                  
                                    <Starrating/>
                                
                                    </div>
                                </div>
                            </div>
                            
                           
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle((prev)=>!prev)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue+1)
                                    setToggle((prev)=>!prev)
                                  }}>Add to cart</button>
                                  
                                }
                                   </div>
                            </div>
                        </div>
                        </div>
                        <div  className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Iphone 11</h5>
                                    {/* <!-- Product price--> */}
                                    Rs.78,000
                                    <div className="card-body p-2 mx-5 text-center">
                                  
                                    <Starrating/>
                                
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle1?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle1((prev)=>!prev)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue+1)
                                    setToggle1((prev)=>!prev)
                                  }}>Add to cart</button>
                                  
                                }
                                   </div>
                            </div>
                        </div>
                        </div>
                        <div  className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">IQOO 3</h5>
                                    {/* <!-- Product price--> */}
                                    Rs.25,000
                                    <div className="card-body p-2 mx-5 text-center">
                                  
                                    <Starrating/>
                                
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle2?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle2((prev)=>!prev)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue+1)
                                    setToggle2((prev)=>!prev)
                                  }}>Add to cart</button>
                                  
                                }
                                   </div>
                            </div>
                        </div>
                        </div>
                        
                        <div  className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Xiomie 11</h5>
                                    {/* <!-- Product price--> */}
                                    Rs.28,000
                                    <div className="card-body p-2 mx-5 text-center">
                                  
                                    <Starrating/>
                                
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle3?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle3((prev)=>!prev)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue+1)
                                    setToggle3((prev)=>!prev)
                                  }}>Add to cart</button>
                                  
                                }
                                   </div>
                            </div>
                        </div>
                        </div>
                        <div  className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Onelus 5</h5>
                                    {/* <!-- Product price--> */}
                                    Rs.28,000
                                    <div className="card-body p-2 mx-5 text-center">
                                  
                                    <Starrating/>
                                
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle4?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle4((prev)=>!prev)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue+1)
                                    setToggle4((prev)=>!prev)
                                  }}>Add to cart</button>
                                  
                                }
                                   </div>
                            </div>
                        </div>
                        </div>
                        <div  className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Onelpus 10</h5>
                                    {/* <!-- Product price--> */}
                                    Rs.48,000
                                    <div className="card-body p-2 mx-5 text-center">
                                  
                                    <Starrating/>
                                
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle5?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle5((prev)=>!prev)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue+1)
                                    setToggle5((prev)=>!prev)
                                  }}>Add to cart</button>
                                  
                                }
                                   </div>
                            </div>
                        </div>
                        </div>
                        <div  className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Samsung M35</h5>
                                    {/* <!-- Product price--> */}
                                    Rs.18,000
                                    <div className="card-body p-2 mx-5 text-center">
                                  
                                    <Starrating/>
                                
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle6?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle6((prev)=>!prev)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue+1)
                                    setToggle6((prev)=>!prev)
                                  }}>Add to cart</button>
                                  
                                }
                                   </div>
                            </div>
                        </div>
                        </div>
                        <div  className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Samsung M40</h5>
                                    {/* <!-- Product price--> */}
                                    Rs.21,000
                                    <div className="card-body p-2 mx-5 text-center">
                                  
                                    <Starrating/>
                                
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle7?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle7((prev)=>!prev)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue+1)
                                    setToggle7((prev)=>!prev)
                                  }}>Add to cart</button>
                                  
                                }
                                   </div>
                            </div>
                        </div>
                        </div>
                        
                    
            </div>
          </div>
        </section>

        <footer className="py-5 bg-dark">
          <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
