import React, {useState, useEffect} from 'react';
import * as firebase from "firebase/app";
import 'firebase/firestore';
import AddModal from './components/Modals/AddModal';
import CalculateScoreModal from './components/Modals/CalculateScoreModal';
import OptionsBar from './components/OptionsBar';
import Table from './components/Table/Table';
import './App.css';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIIjwskKxiwAg3DJm1j6slaKuFCedc0sE",
    authDomain: "gaming-shelter.firebaseapp.com",
    databaseURL: "https://gaming-shelter.firebaseio.com",
    projectId: "gaming-shelter",
    storageBucket: "gaming-shelter.appspot.com",
    messagingSenderId: "100475060109",
    appId: "1:100475060109:web:df9d472cfbb5f2dbd587c4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const App = () => {

	const [gamingShelter, setGamingShelter] = useState([]);
	const [filteredGames, setFilteredGames] = useState([]);

	useEffect(() => {
		const docRef = db.collection('games');
		
		docRef.onSnapshot(querySnapshot => {
			const games = [];

			querySnapshot.forEach(doc => {
				// console.log(doc.data().id);
				games.push(doc.data());
			})

			setGamingShelter(games);
			setFilteredGames(games);
			// console.log(games);
		})
	}, [])


	const handleAddGame = (e) => {
		e.preventDefault();

		let platform = e.target.childNodes[0].value;
		let developer = e.target.childNodes[1].value;
		let genre = e.target.childNodes[2].value;
		let releaseDate = parseInt(e.target.childNodes[3].value);
		let gameplayHours = parseInt(e.target.childNodes[4].value);
		let title = e.target.childNodes[5].value;
		let score = parseInt(e.target.childNodes[6].value);
		let favGame = e.target.childNodes[7].value;
		let hofGame = e.target.childNodes[8].value;

		if(Number.isInteger(releaseDate) && Number.isInteger(gameplayHours) && Number.isInteger(score)) {
			const newGame = {
				id: Date.now(),
				platform,
				developer,
				genre,
				releaseDate,
				gameplayHours,
				title,
				score,
				favGame,
				hofGame
			};

			const newShelter = [...gamingShelter, newGame];
			setGamingShelter(newShelter);

			db.collection("games").add(newGame).then(docRef => {
				console.log('game written with id: ', docRef.id);
			})
			.catch(err => {
				console.log('error adding game: ', err);
			})

		} else {
			console.log('typing error: releaseDate, gplayhours and score must be numbers');
		}

		e.target.childNodes[0].value = '';
		e.target.childNodes[1].value = '';
		e.target.childNodes[2].value = '';
		e.target.childNodes[3].value = '';
		e.target.childNodes[4].value = '';
		e.target.childNodes[5].value = '';
		e.target.childNodes[6].value = '';
		e.target.childNodes[7].value = '';
		e.target.childNodes[8].value = '';
		e.target.childNodes[9].value = '';
	}


	const handleUpdateGame = (e) => {
		e.preventDefault();

		const gameID = parseInt(e.target.id);
		const docRef = db.collection('games');

		let platform = e.target.childNodes[0].childNodes[0].value;
		let developer = e.target.childNodes[0].childNodes[1].value;
		let genre = e.target.childNodes[0].childNodes[2].value;
		let releaseDate = parseInt(e.target.childNodes[0].childNodes[3].value);
		let gameplayHours = parseInt(e.target.childNodes[0].childNodes[4].value);
		let title = e.target.childNodes[0].childNodes[5].value;
		let score = parseInt(e.target.childNodes[0].childNodes[6].value);
		let favGame = e.target.childNodes[0].childNodes[7].value;
		let hofGame = e.target.childNodes[0].childNodes[8].value;

		if(Number.isInteger(releaseDate) && Number.isInteger(gameplayHours) && Number.isInteger(score)) {

			docRef.onSnapshot(querySnapshot => {
				querySnapshot.forEach(doc => {
					if(doc.data().id === gameID) {
						let key = doc.id;
						console.log(key);

						docRef.doc(key).set({
							id: gameID,
							platform,
							developer,
							genre,
							releaseDate,
							gameplayHours,
							title,
							score,
							favGame,
							hofGame
						})

					};
				});				
			});
		} else {
			console.log('typing error: releaseDate, gplayhours and score must be numbers');
		}

	};


	const handleDeleteGame = (e) => {
		const gameID = parseInt(e.target.parentNode.parentNode.id);
		const docRef = db.collection('games');

		docRef.onSnapshot(querySnapshot => {
			querySnapshot.forEach(doc => {
				if(doc.data().id === gameID) {
					let key = doc.id;

					docRef.doc(key).delete().then(() => {
						console.log('deleted: ', key);
					}).catch(err => {
						console.log('error');
					})

				};
			});			
		});

	};


	const handleSortGames = (e) => {
		const newShelter = [...filteredGames];
		let sortBy = e.target.textContent.toLowerCase();
		if (sortBy === 'release date') sortBy = 'releaseDate';

		newShelter.sort((a, b) => a[sortBy]> b[sortBy] ? 1 : -1);
		setFilteredGames(newShelter);
	};



	const handleFilterGames = (e) => {
		let value = e.target.value;
		const filteredArray = [];

		gamingShelter.filter( data => {
			if(data.title.toLowerCase().includes(value.toLowerCase()) ||
			data.platform.toLowerCase().includes(value.toLowerCase()) ||
			data.developer.toLowerCase().includes(value.toLowerCase()) ||
			data.genre.toLowerCase().includes(value.toLowerCase()) ) {
				filteredArray.push(data);
				setFilteredGames(filteredArray);
			
			}			
		})
		
	}

	const handleFilterByClick = (e) => {
		let filterBy = e.target.parentNode.className;
		const DocRef = db.collection('games');
		const filteredArray = [];

		gamingShelter.filter(game => {
			// push all matches in filteredArray
			if(game.platform.toLowerCase() === filterBy.toLowerCase()) {
				filteredArray.push(game);
				setFilteredGames(filteredArray);
			} 

			// check if all filteredGames arr have the same platform
			// if(game.platform.toLowerCase() )
		});


	}


	const [toggle, setToggle] = useState(false);
	
	const handleOpenModal = () => {
		setToggle(true);
	}

	const handleCloseModal = () => {
		setToggle(false);
	}

	const [scoreModal, setScoreModal] = useState(false);
	
	const handleOpenScoreModal = () => {
		setScoreModal(true);
	}

	const handleCloseScoreModal = () => {
		setScoreModal(false);
	}

	

  	return (
		<div className="App">

			<AddModal 
				toggleModal={toggle}
				handleCloseModal={handleCloseModal}
				handleAddGame={handleAddGame}
			/>

			<CalculateScoreModal
				toggleModal={scoreModal}
				handleCloseScoreModal={handleCloseScoreModal}

			/>
			

			<OptionsBar
				handleFilterGames={handleFilterGames}
				handleOpenModal={handleOpenModal}
				handleOpenScoreModal={handleOpenScoreModal}

			/>


			<Table
				handleUpdateGame={handleUpdateGame}
				gamingShelter={gamingShelter}
				filteredGames={filteredGames}
				handleDeleteGame={handleDeleteGame}
				handleSortGames={handleSortGames}
				handleFilterByClick={handleFilterByClick}
			
			/>

		</div>
  	);
}

export default App;
