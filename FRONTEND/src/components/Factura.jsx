import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'



const Factura = (props) =>{
    const { mylist } = props;    

    return(

    <ul className="uk-nav uk-dropdown-nav">
        <li className="uk-nav-header">Tu pedido</li>
        
        <li className="uk-active">
            <div className="uk-grid-small" uk-grid="true">
                <div className="uk-width-expand">Productos</div>
                <div>Precio</div>
                <div>cant</div>
            </div>    
        </li>
        {mylist.length === 0 &&
        <li className="uk-margin"><h3>No hay productos</h3></li>
        }
        {mylist.length > 0 &&
            mylist.map(item =>{
                
                return( 
                    <li key={item.id} className="uk-active">
                        <div className="uk-grid-small" uk-grid="true">
                            <div className="uk-width-expand" uk-leader="true">{item.title}</div>
                            <div>{`$ ${item.precio}`}</div>
                            <div>{`x ${item.cantidad}`}</div>
                        </div>    
                    </li>

                )
            })

        }
        
        <li className="uk-nav-divider"></li>
        
        <li className="uk-margin uk-width-1-1">
            <div className="uk-grid-small uk-width-1-1" uk-grid="true">
                <div className="uk-width-expand uk-width-1-1">
                    <Link to="/Cart" className="uk-button btn-clic2work uk-light uk-width-1-1 uk-text-capitalize">Ver carrito</Link>
                </div>
            </div>         
        </li>
    </ul>
    )

}

const mapStateToProps = state => {
    return {
        mylist : state.mylist,
    }

}


export default connect(mapStateToProps,null)(Factura);