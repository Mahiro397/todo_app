import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import PostFrom from './PostFrom';
import axios from 'axios'; 




function EditBtn() {

  
  const [editData, setEditData] = useState({id: '',task_name: '',content: '',deadline: '',priority: '',});
  
   
    //モーダル開閉
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
      //console.log(setEditData);
    };
    const closeModal = () => {
        // Define your close modal logic
        setModalOpen(false);
         
      };

  
      

  return (
    <>  
     <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal} 
      >編集</button>

    <Modal isOpen={modalOpen} closeModal={closeModal}>
    <div>
      <PostFrom  />
      
    </div>
  </Modal>

  </>
  )
}

export default EditBtn