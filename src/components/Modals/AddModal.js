import React from 'react';
import './Modal.scss';
import Modal from 'react-modal';

const AddModal = ({toggleModal, handleCloseModal, handleAddGame}) => (

    <Modal
        isOpen={!!toggleModal}
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
        style={{overlay:{backgroundColor: "rgba(0, 0, 0, 0)"}}}
    >

    
    
        <form className="modal-form" onSubmit={handleAddGame}>
				<input className="modal-input" placeholder="platform" />
				<input className="modal-input" placeholder="developer" />
				<input className="modal-input" placeholder="genre" />
				<input className="modal-input" placeholder="releaseDate" />
				<input className="modal-input" placeholder="gameplayHours" />
				<input className="modal-input" placeholder="title" />
				<input className="modal-input" placeholder="score" />
				<input className="modal-input" placeholder="favGame" />
				<input className="modal-input" placeholder="hofGame" />

				<button type="submit">Add Game</button>
		</form>

        
        <div className="modal-buttons">

            <button 
                onClick={handleCloseModal}
                className="button close-button"
            >
                Close modal
            </button>

            </div>

    </Modal>



);

export default AddModal;