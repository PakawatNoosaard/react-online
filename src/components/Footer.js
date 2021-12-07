import React from 'react'
import PropTypes from 'prop-types';

const Footer = ({title, website,address,postcode,isOpen}) => {

    //const{title,website,address,postcode} = props;
    return (  <>
        <footer className="container">
        <p>© Pakawat Noosaard 2000-{new Date().getFullYear()} </p>
        </footer>
    </>
)

}
const styles = {
title:{
    color:'red'
}
}
Footer.propTypes = {
title: PropTypes.string,
website: PropTypes.string,
address: PropTypes.string,
isOpen:PropTypes.bool,
postcode:PropTypes.number
};
export default Footer