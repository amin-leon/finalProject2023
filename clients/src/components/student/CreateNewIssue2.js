import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Singup/styles.module.css";

const CreateNewIssue2 = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [assignedTo, setAssignedTo] = useState("");
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState('open');
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = { 
			title,
			description, 
			category, 
			assignedTo,
            priority, 
            status,
		};

		try {
			const url = "http://localhost:8080/api/issues/new-issue";
			const response = await axios.post(url, data);
            const res = response.data;
			navigate("/user-home");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1 className="">Send Your Issue  here</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Provide Issue details</h1>
						<input
							type="text"
							placeholder="Tile"
							name="title"
							onChange={(e) => setTitle(e.target.value)}
							value={title}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="issue details"
							name="description"
							onChange={(e) => setDescription(e.target.value)}
							value={description}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="who is leader"
							name="assignedTo"
							onChange={(e) => setAssignedTo(e.target.value)}
							value={assignedTo}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="category"
							name="category"
							onChange={(e) => setCategory(e.target.value)}
							value={category}
							required
							className={styles.input}
						/>
                        <input
							type="text"
							placeholder="priority"
							name="priority"
							onChange={(e) => setPriority(e.target.value)}
							value={priority}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Send Issue
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CreateNewIssue2;
