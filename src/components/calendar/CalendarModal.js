import React from 'react'
import Modal from 'react-modal';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  Modal.setAppElement('#root')

export const CalendarModal = () => {

    const closeModal = () => {

    }

    return (
        <Modal
          isOpen={true}
        //   onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          closeTimeoutMS={200}
          className='modal'
          overlayClassName="modal-fondo"
        >
            <h2>Hola modal</h2>
            <hr />
            <span>Texto </span>
        </Modal>
    )
}
