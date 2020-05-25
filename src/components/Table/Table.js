import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';


const Table = ({handleSortGames, handleUpdateGame, gamingShelter, filteredGames, handleDeleteGame, handleFilterByClick}) => {

    return (
        <div className="tableContainer">
			<table>

			<TableHead
				handleSortGames={handleSortGames}
			/>

			<TableBody
				handleUpdateGame={handleUpdateGame}
				gamingShelter={gamingShelter}
				filteredGames={filteredGames}
				handleDeleteGame={handleDeleteGame}
				handleFilterByClick={handleFilterByClick}

			/>

			</table>
		</div>
    )
}

export default Table;