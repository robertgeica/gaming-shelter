import React from 'react';

const TableHead = ({handleSortGames}) => (
    <thead>
		<tr>
			<th>#</th>
			<th onClick={handleSortGames}>Platform</th>
			<th onClick={handleSortGames}>Developer</th>
			<th onClick={handleSortGames}>Genre</th>
			<th onClick={handleSortGames}>Release Date</th>
			<th >GPlay Hours</th>
			<th id="title" onClick={handleSortGames}>Title</th>
			<th onClick={handleSortGames}>Score</th>
			<th onClick={handleSortGames}>Fav Game</th>
			<th onClick={handleSortGames}>HOF</th>
			<th>#</th>
		</tr>
	</thead>
)

export default TableHead;