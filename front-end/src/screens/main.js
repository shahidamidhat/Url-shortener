import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../App.css';
import validator from 'validator';
import { useHistory, useParams } from 'react-router';

function Main() {

	const history = useHistory();
	const params = useParams();
    const [longURL, setlongURL] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [urldata, seturlData] = useState([]);
	const [length, setlength] = useState(0);
    const [username,setusername] = useState("")
    
	const validate = (value) => {  
		if (validator.isURL(value)) {
			setErrorMessage('Valid')
		} 
		else {
			setErrorMessage('Invalid')
		}
	}

	useEffect(() => {
		async function fetchData(){
			let response = await axios.get(`https://url-shortener-ak.herokuapp.com/urls/${params.id}`, {
				headers : {
					Accept: 'application/json',
					Authorization : window.localStorage.getItem('login_token')
				}
			})
			seturlData(response.data.links);
			setlength(response.data.links.length)
            setusername(response.data.username)
		}	
		fetchData();
	}, [params.id, length])


	const handleSubmit = (e) => {
		e.preventDefault();
		if(errorMessage === 'Valid'){
			const url = { longURL }
			async function postURL(){
				await axios.post(`https://url-shortener-ak.herokuapp.com/urls/${params.id}`, url, {
					headers : {
						Accept: 'application/json',
						Authorization : window.localStorage.getItem('login_token')
					}
				})
			}
			postURL();
			setlongURL('');
		}
		else{
			alert('Please enter valid URL');
		}
	}

	const handleLogout = () => {
		window.localStorage.removeItem('login_token');
		history.push('/login');
	}

    return (
		<div className="container">
            <div className="row justify-content-between">
                <div className="col-3 welcome">Hi! {username}</div>
                <div className="col-3">
                <button className="btn btn-primary" onClick={() => {handleLogout()}}>Logout</button>
                </div>
            </div>
            
			<div className="shorten">
				<div className="shorten_container">
					
					<form onSubmit={(e) => {handleSubmit(e);}}>
						<input required type="text" onChange={(e) => {validate(e.target.value); setlongURL(e.target.value)}} value={ longURL } placeholder='Paste URL here'/>
						<button className="btn btn-danger" type='submit'>Shorten URL</button>
						<div className="message">{errorMessage}</div>
					</form>
                    <table className="table table-dark mt-5">
                        <thead>
                            <th>Long URL</th>
                            <th>Short URL</th>
                        </thead>
					{
						urldata.length!==0 && urldata.map((item, index) => (
						<tr  key={index}>
							<td>{item.longURL} </td>
							<td><a href={`https://url-shortener-ak.herokuapp.com/${item.shortURL}+${index}`} target="_blank" rel="noopener noreferrer">{item.shortURL}</a> </td>
						</tr>
					))}
                    </table>
				</div>
			</div>
		</div>
    )
}

export default Main