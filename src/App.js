import React, { useState } from 'react';
import { Route, HashRouter, Redirect } from 'react-router-dom';
import { addDateToLocalStorage, getDateFromLocalStorage } from './api/api';
import './App.scss';
import LoginPage from './components/pages/LoginPage';
import QuestionsPage from './components/QuestionsPage/QuestionsPage';
import StartPage from './components/StartPage/StartPage';

function App() {
	const [amountOfTime, setAmountOfTime] = useState(6)
	const [timerOn, setTimerOn] = useState(getDateFromLocalStorage('timerOn'))
	const [user, setUser] = useState({})
	const changeTimer = () => {
		if (timerOn) {
			addDateToLocalStorage(false, 'timerOn')
			setTimerOn(false)
		} else {
			addDateToLocalStorage(true, 'timerOn')
			setTimerOn(true)
		}
	}
	const handleSubmit = (login, password) => {
		setUser({
			'login': login,
			'password': password,
			'name': login,
		})
	}
	console.log('user', user)
	return (
		<HashRouter>
			<div className='wrapper'>
				<div className='container'>
					{!user.login ? <LoginPage handleSubmit={handleSubmit} /> :
						<>
							<Redirect from='/' to='/startPage' />
							<Route
								exact path='/startPage'
								render={() => <StartPage
									amountOfTime={amountOfTime}
									timerOn={timerOn}
									changeTimer={changeTimer}
									user={user}
									setUser={setUser}
								/>
								}
							/>
						</>
					}
				</div>
			</div>
		</HashRouter>
	);
}

export default App;
