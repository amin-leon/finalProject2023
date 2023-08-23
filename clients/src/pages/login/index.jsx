import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@material-tailwind/react";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {


	const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'http://localhost:8080/api/login', {email, password})
        .then(result => {
            console.log(result);
            if(result.data.message === "Login successful."){
				const token = result.data.token
				localStorage.setItem("Token", token)
                console.log("Login Success");
                navigate('/user-homepage');
            }
            else{
                alert('Incorrect password! Please try again.');
            }
        })
        .catch(err => console.log(err));
    }
	
	
	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							value={email}
							required
							className={styles.input}
							onChange={(e)=>setEmail(e.target.value)}
						
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={password}
							required
							className={styles.input}
							onChange={(e)=> setPassword(e.target.value)}
						/>
							<div className="flex w-max gap-4">
								<Button color="blue" type="submit" className={styles.green_btn}>Singin</Button>
							</div>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/register">
					<div className="flex w-max gap-4">
								<Button color="black" type="submit" className={styles.green_btn}>Sing Up</Button>
							</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
