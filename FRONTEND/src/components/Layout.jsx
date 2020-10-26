import React from 'react'

import Footer from './Footer';
const Layout = (props) => {

    const {children} = props;

    return(
        <>
        
            {children}
        <Footer/>
        </>
    )

}

export default Layout;