import React, {useState} from 'react';
import UpdateModal from '../Modals/UpdateModal';


import pc from '../../Assets/pc.png';
import x360 from '../../Assets/x360.png';
import xone from '../../Assets/xone.png';
import ps1 from '../../Assets/ps1.png';
import ps2 from '../../Assets/ps2.png';
import ps3 from '../../Assets/ps3.png';
import ps4 from '../../Assets/ps4.png';

import pc_controller from '../../Assets/pc-controller.png';
import xone_controller from '../../Assets/xone-controller.png';
import x360_controller from '../../Assets/x360-controller.png';
import ps1_controller from '../../Assets/ps1-controller.png';
import ps2_controller from '../../Assets/ps2-controller.png';
import ps3_controller from '../../Assets/ps3-controller.png';
import ps4_controller from '../../Assets/ps4-controller.png';



const TableBody = ({handleUpdateGame, gamingShelter, filteredGames, handleDeleteGame, handleFilterByClick}) => {


    const [updateModal, setUpdateModal] = useState(false);
	const [updateId, setUpdateId] = useState(undefined);

	const handleOpenUpdateModal = (e) => {
		setUpdateModal(true);
		setUpdateId(e.target.parentNode.parentNode.id);
	}

	const handleCloseUpdateModal = () => {
		setUpdateModal(false);
	}

	// check value input
	const handlePlatformImage = (item) => {

		if(item.platform === 'PC') return <img src={pc} alt="pc"/>;
		if(item.platform === 'xone') return <img src={xone} alt="xone"/>;
		if(item.platform === 'x360') return <img src={x360} alt="x360"/>;
		if(item.platform === 'ps1') return <img src={ps1} alt="ps1"/>;
		if(item.platform === 'ps2') return <img src={ps2} alt="ps2"/>;
		if(item.platform === 'ps3') return <img src={ps3} alt="ps3"/>;
		if(item.platform === 'ps4') return <img src={ps4} alt="ps4"/>;

	}

	const handleFavGame = (item) => {
		
		if(item.platform === 'PC' && item.favGame === 'x')
			return <img src={pc_controller} alt="controller"/>

		if(item.platform === 'xone' && item.favGame === 'x')
			return <img src={xone_controller} alt="controller"/>

		if(item.platform === 'x360' && item.favGame === 'x')
			return <img src={x360_controller} alt="controller"/>

		if(item.platform === 'ps1' && item.favGame === 'x')
			return <img src={ps1_controller} alt="controller"/>

		if(item.platform === 'ps2' && item.favGame === 'x')
			return <img src={ps2_controller} alt="controller"/>

		if(item.platform === 'ps3' && item.favGame === 'x')
			return <img src={ps3_controller} alt="controller"/>

		if(item.platform === 'ps4' && item.favGame === 'x')
			return <img src={ps4_controller} alt="controller"/>

		return '-';
	}

	const handleHOFGame = (item) => {
		if(item.platform === 'PC' && item.hofGame === 'x')
			return <img src={pc_controller} alt="controller"/>

		if(item.platform === 'xone' && item.hofGame === 'x')
			return <img src={xone_controller} alt="controller"/>

		if(item.platform === 'x360' && item.hofGame === 'x')
			return <img src={x360_controller} alt="controller"/>

		if(item.platform === 'ps1' && item.hofGame === 'x')
			return <img src={ps1_controller} alt="controller"/>

		if(item.platform === 'ps2' && item.hofGame === 'x')
			return <img src={ps2_controller} alt="controller"/>

		if(item.platform === 'ps3' && item.hofGame === 'x')
			return <img src={ps3_controller} alt="controller"/>

		if(item.platform === 'ps4' && item.hofGame === 'x')
			return <img src={ps4_controller} alt="controller"/>

		return '-';
	}


    return (
            <tbody>

				<UpdateModal 
					toggleModal={updateModal}
					handleCloseModal={handleCloseUpdateModal}
					handleUpdateGame={handleUpdateGame}
					gamingShelter={gamingShelter}
					updateId={updateId}
				/>

				{
					filteredGames.map((item, key) => {
						
						return (
							<tr key={item.id} id={item.id}>
								<td>{key}</td>

								<td onClick={handleFilterByClick} className={item.platform}>{handlePlatformImage(item)}</td>

								<td>{item.developer}</td>
								<td >{item.genre}</td>
								<td>{item.releaseDate}</td>
								<td>{item.gameplayHours}</td>
								<td id="title">{item.title}</td>
								<td>{item.score}</td>
								<td>{handleFavGame(item)}</td>
								<td>{handleHOFGame(item)}</td>
								<td className="td-actions">
									<i className="far fa-edit icon" onClick={handleOpenUpdateModal}></i>
									<i className="far fa-trash-alt icon" onClick={handleDeleteGame}></i>
								</td>


							</tr>

						)
					})
				}
			</tbody>
    )
}

export default TableBody;