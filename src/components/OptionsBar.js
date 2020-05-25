import React from 'react';

const OptionsBar = ({handleFilterGames, handleOpenModal, handleOpenScoreModal}) => {

    
    return (
        <div className="bar">

				<input 
					type="text" 
					className="filter-input" 
					placeholder="filter"
					onChange={handleFilterGames}

				/>

				<div>
					<button 
						className="button" 
						onClick={handleOpenModal}
					>
						Add new game
					</button>
					<button 
						className="button" 
						onClick={handleOpenScoreModal}
					>
						Calculate Score
					</button>
				</div>
		</div>
    )
}

export default OptionsBar;