import React, { useState } from 'react'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Modal from "react-modal"

const EditModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen)
  }
  return (<div>
    <BorderColorOutlinedIcon className='editButton' onClick={toggleModal} />

    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
    >
      <div>My modal dialog.</div>
      <button onClick={toggleModal}>Close modal</button>
    </Modal>
  </div>
  )
}

export default EditModal