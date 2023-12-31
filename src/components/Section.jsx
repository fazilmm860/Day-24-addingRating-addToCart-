import { useState } from 'react';
import React from 'react'
import StarRating from './Rating'; 
import Button from './Button';

import './Rating.css'   
                   

function Section() {
    
        
   

    
  return (
    <div>
      <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="">
       
                                           
                            <div  className="card ">
                                
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           
                            <div className="card-body ">
                                <div className="text-center">
                                  
                                    <h5 className="fw-bolder">fancy product</h5>

                                    <div className="d-flex justify-content-center small text-warning ">
                                  <StarRating/>
                                    </div>
                                   400
                                </div>
                                
                            </div>
                                
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><Button className="btn btn-outline-dark mt-auto" href="#" initialState='Cart' >
                              
                                </Button>
                                </div>
                            </div>
                        </div>
                     
                   
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                        
                            <div className="badge bg-dark text-white position-absolute" >Sale</div>
                           
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                      
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Special Item</h5>
                                    
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                       
                                        
                                    </div>
                                   
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                    <StarRating />
                                    </div>
                                    $18.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><Button className="btn btn-outline-dark mt-auto" href="#" initialState='Cart' >
                              
                              </Button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                      
                            <div className="badge bg-dark text-white position-absolute" >Sale</div>
                          
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                   
                                    <h5 className="fw-bolder">Sale Item</h5>
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                    <StarRating />
                                    </div>
                                    
                                    <span className="text-muted text-decoration-line-through">$50.00</span>

                                    $25.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><Button className="btn btn-outline-dark mt-auto" href="#" initialState='Cart' >
                              
                              </Button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                           
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                   
                                    <h5 className="fw-bolder">Popular Item</h5>
                                   
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                    <StarRating />
                                    </div>
                                   
                                    $40.00
                                </div>
                            </div>
                           
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><Button className="btn btn-outline-dark mt-auto" href="#" initialState='Cart' >
                              
                                </Button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                           
                            <div className="badge bg-dark text-white position-absolute" >Sale</div>
                         
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                   
                                    <h5 className="fw-bolder">Sale Item</h5>
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                    <StarRating />
                                    </div>
                                    
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                           
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><Button className="btn btn-outline-dark mt-auto" href="#" initialState='Cart' >
                              
                                </Button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                          
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                   
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                    <StarRating />
                                    </div>
                                    
                                    $120.00 - $280.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><button className="btn btn-outline-dark mt-auto" href="#">View options</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute" >Sale</div>
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                          
                            <div className="card-body p-4">
                                <div className="text-center">
                                 
                                    <h5 className="fw-bolder">Special Item</h5>
                                   
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                    <StarRating />
                                    </div>
                                    
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                         
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><Button className="btn btn-outline-dark mt-auto" href="#" initialState='Cart' >
                              
                                </Button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
             
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Popular Item</h5>
                                    
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                    <StarRating />
                                    </div>
                                    
                                    $40.00
                                </div>
                            </div>
                           
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><Button className="btn btn-outline-dark mt-auto" href="#" initialState='Cart' >
                              
                                </Button></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Section
