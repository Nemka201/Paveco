import React from 'react';

function Boton(props) {
  const { toggleModal } = props;
  return <i onClick={toggleModal} className="btn-brands" title="ShowOptions"><i class="fa-solid fa-bars"></i></i>
}

export default Boton;
