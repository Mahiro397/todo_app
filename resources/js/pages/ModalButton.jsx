// src/App.js

import React, { useState } from 'react';
import Modal from './Modal';
import PostFrom from './PostFrom';

function ModalButton() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <button onClick={openModal} className="bg-blue-500 text-white p-2">
        Open Modal
      </button>

      <Modal isOpen={modalOpen} closeModal={closeModal}>
        <div>
          <PostFrom/>
          
        </div>
      </Modal>
    </div>
  );
}

export default ModalButton;
