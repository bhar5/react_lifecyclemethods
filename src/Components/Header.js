import React from 'react';
import PropTypes from 'prop-types';


function Header(props) {
  return (
    <div>
      {`Hi ${props.name}`}
      <br />
      {`Age ${props.age}`}
    </div>
  )
}

Header.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}


export default Header;
