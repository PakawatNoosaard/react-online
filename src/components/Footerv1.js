import React from 'react'
import PropTypes from 'prop-types';


const Footer = ({title,website,address,postcode,isOpen} ) => {
 //   const {title,website,address,postcode} =props;
    return (
        <div>
            <h1 style={styles.title}> {title} &copy; {new Date().getFullYear()}</h1>
            <p style={{color:'green',fontSize:18}}>{website} {address} {postcode} {isOpen.toString()} </p>
            <p  style={styles.title}>Pakawat Noosaard</p>
        </div>
    )
}

const styles = {
title :{
    color : 'red'
}

}








Footer.propTypes = {
    title: PropTypes.string,
    website: PropTypes.string,
    address: PropTypes.string,
    postcode: PropTypes.number,
    isOpen: PropTypes.bool,
  };
export default Footer
