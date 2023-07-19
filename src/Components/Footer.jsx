import React from 'react';

const Footer = ( {title= 'footer title'} ) => {
    return (
            <footer>{title}</footer>
    );

    Footer.propTypes = {
        title: PropTypes.string,
    }  
}

export default Footer;
