import React from 'react';
import './Modal.scss';
import Modal from 'react-modal';


const UpdateBookModal = ({toggleModal, handleCloseModal, handleUpdateGame, updateId, gamingShelter}) => (


    <Modal
        isOpen={!!toggleModal}
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
        style={{overlay:{backgroundColor: "rgba(0, 0, 0, 0)"}}}
    >
    
        <form onSubmit={handleUpdateGame} id={updateId}>
            {
                gamingShelter.map(item => {
                    if(item.id == updateId) {
                        return (
                            <div key="key" className="modal-form">
                            


                            <input className="modal-input" defaultValue={item.platform}/>
                            <input className="modal-input" defaultValue={item.developer} />
                            <input className="modal-input" defaultValue={item.genre}/>
                            <input className="modal-input" defaultValue={item.releaseDate}/>
                            <input className="modal-input" defaultValue={item.gameplayHours}/>
                            <input className="modal-input" defaultValue={item.title} />
                            <input className="modal-input" defaultValue={item.score}/>
                            <input className="modal-input" defaultValue={item.favGame}/>
                            <input className="modal-input" defaultValue={item.hofGame}/>

                                <button type="submit">Update Game</button>
                            </div>
                        )   
                    }
                    
                })
            }

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

export default UpdateBookModal;