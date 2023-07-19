import React from 'react';

const Header = ({title= 'header title'}) => {
    return (
        
        <header>
            <h1>{title}</h1>
        </header>
    );

    Header.propTypes = {
        title: PropTypes.string,
    }    
}

export default Header;
