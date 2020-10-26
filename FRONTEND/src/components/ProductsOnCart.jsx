import React, { Component } from 'react'

const ProductsOnCart= () => {
   
        return (
            
        <div className="uk-card uk-card-hover uk-card-body uk-border-rounded uk-box-shadow-small">           
            <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                <div className="uk-width-auto">
                    <img className="uk-border-circle" 
                    alt="..." 
                    width="50"
                    height="50" 
                    src={cover}/>
                </div>
                <div className="uk-width-expand">
                    <h3 className="uk-card-title">{title}</h3>
                    <p className="uk-margin-remove-top">{`Precio: ${precio}`}</p>
                    <p className="uk-margin-remove-top">

                         
                                    <div className="uk-button-group">
                                        <button className="uk-button btn-clic2work uk-light 
                                            uk-text-capitalize uk-width-auto"
                                            > 
                                            - 
                                        </button>
                                        <input className="uk-input uk-form-blank uk-form-width-xsmall" 
                                                type="text" 
                                                onChange={handleCantidad}
                                                name="cantidad"
                                                value={cantidad}
                                        /> 
                                        <button className="uk-button btn-clic2work 
                                            uk-light uk-text-capitalize uk-width-auto"
                                            
                                            > 
                                            + 
                                        </button>
                                    </div>
                             
                    
                    </p>
                </div>
            </div>  
        </div>

   
    
        )
    
}
export default ProductsOnCart;
