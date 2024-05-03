import React from 'react';

function Boton(props) {
  const { toggleModal } = props;
  return <i onClick={toggleModal} className="btn-brands btn-show-nav" title="Mostrar opciones"><i class="fa-solid fa-bars"></i></i>
}

export default Boton;
