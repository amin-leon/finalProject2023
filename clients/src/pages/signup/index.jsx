import {useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@material-tailwind/react";


const Register = () => {
  
	const [firstName, setFirstName] = useState('')
	const [secondName, setSecondName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	

	const handleSubmit= async(e)=>{
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:8080/api/register', {
				firstName,
				secondName,
				email,
				password,
			  });
			  console.log('User registered:', response.data);
				// Clear form fields after successful registration
				setFirstName('')
				setSecondName('')
				setEmail('')
				setPassword('')

		} catch (error) {
			console.error('Registration error:', error);
		}
	}

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/">
					    <div className="flex w-max gap-4">
						        <Button variant="outlined" color="black" type="submit" className={styles.green_btn}>Sing in</Button>
							</div>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							value={firstName}
							required
							className={styles.input}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							value={secondName}
							required
							className={styles.input}
							onChange={(e) => setSecondName(e.target.value)}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
						    value={email}
							required
							className={styles.input}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={password}
							required
							className={styles.input}
							onChange={(e) => setPassword(e.target.value)}
						/>
							<div className="flex w-max gap-4">
								<Button color="blue" type="submit" className={styles.green_btn}>Sing Up</Button>
							</div>
						
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
