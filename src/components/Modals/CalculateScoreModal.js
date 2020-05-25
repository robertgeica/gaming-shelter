import React, {useState} from 'react';
import './Modal2.scss';
import Modal from 'react-modal';

const CalculateScoreModal = ({toggleModal, handleCloseScoreModal}) => {

    const [finalScore, setFinalScore] = useState(0);

    const calculateScore = (e) => {
        // e*4+g*3+v*2+s
        e.preventDefault();

        let enj = parseInt(e.target.parentNode.childNodes[0].value);
        let gmp = parseInt(e.target.parentNode.childNodes[1].value);
        let vis = parseInt(e.target.parentNode.childNodes[2].value);
        let snd = parseInt(e.target.parentNode.childNodes[3].value);
        
        console.log(enj, gmp, vis, snd);
        console.log(typeof(enj));
        let fsc = (enj * 4) + (gmp * 3) + (vis * 2) + (snd * 1);

        console.log(fsc);
        setFinalScore(fsc);
    }

    return (

    <Modal
        isOpen={!!toggleModal}
        onRequestClose={handleCloseScoreModal}
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal modal2"
        style={{overlay:{backgroundColor: "rgba(0, 0, 0, 0)"}}}
    >

    
        <div className="modal-form modal-form2" >
				<input className="modal-input modal-input2" placeholder="enj" />
				<input className="modal-input modal-input2" placeholder="gmp" />
				<input className="modal-input modal-input2" placeholder="vis" />
				<input className="modal-input modal-input2" placeholder="snd" />
                
                <div className="final-score">
                    <h4>Final Score:</h4>
                    <h3>{finalScore}</h3>
                </div>

				<button 
                    onClick={calculateScore}
                    className="button"
                >
                    Calculate
                </button>
                
                
                <button 
                    onClick={handleCloseScoreModal}
                    className="button close-button"
                >
                    Close modal
                </button>
		</div>

        

    </Modal>

    );

}
export default CalculateScoreModal;