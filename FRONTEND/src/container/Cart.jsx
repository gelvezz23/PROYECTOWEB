import React,{useState} from 'react';
import Navbar from './../components/Navbar';
import { connect } from 'react-redux'
import Products from './../components/Products';

const Cart = (props) =>{
const {mylist} = props


    return(
        <>
        <Navbar isBlack={true}/>
             <div className="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center" uk-grid="true">
                <div>
                    
                        <div className="uk-card-body">
                           Productos
                           {mylist.length === 0 &&
                            <h3>No hay productos.</h3>
                            }
                                {mylist.length > 0 &&
                                    mylist.map((item) =>{
                                        return(
                                            <Products 
                                                onCart={true}
                                                key={item.id}
                                                id={item.id} 
                                                title={item.title}
                                                precio={item.precio}
                                                cantidadonCart={item.cantidad}
                                                cover={item.cover}
                                                description={item.description}
                                            />
                                        )
                                    })
                                }
                        </div>
                        <div className="uk-width-1-2@s uk-width-2-5@m">
                           Servicios
                        </div>
                    
                </div>
                <div>
                    <div className="uk-padding">Item</div>
                </div>
                <div>
                    <div className="uk-padding">Item</div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return{
        mylist:state.mylist,
    }
}

export default connect(mapStateToProps,null)(Cart);