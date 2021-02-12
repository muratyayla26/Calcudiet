import React, { useState, useContext } from "react";
import styles from "./UserInfo.module.scss";
import { bmrData } from "../../../utility/BMR";
import { AuthContext } from "../../../utility/AuthContext";
import { userInfoUpdater } from "../../../utility/userInfoUpdater";

export const UserInfo = () => {
	const { currentUser } = useContext(AuthContext);
	const [userData, setUserData] = useState({});
	const [isChanged, setIsChanged] = useState(false);

	//componendidmount -> getUserInfo -> firebase data cek -> setUserData(data)

	const handleChange = (e) => {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		setUserData({ ...userData, [name]: value });
	};

	const formHandler = (e) => {
		e.preventDefault();
		console.log("USERDATA: ", userData);
		if (!isFormValid()) {
			return;
		}
		const { weight, height, age, gender, pal } = userData;
		setIsChanged(true);
		console.log(bmrData(weight, height, age, gender, pal));
		userInfoUpdater(weight, height, age, gender, pal, currentUser);
	};

	const isFormValid = () => {
		const { weight, height, age, gender, pal } = userData;
		return (
			weight > 10 &&
			weight < 300 &&
			height > 50 &&
			height < 250 &&
			age > 0 &&
			age < 120 &&
			gender !== "Select" &&
			pal !== "Select"
		);
	};

	return (
		<div id="form_container" className={styles.formContainer}>
			<form id="form_14697" className="appnitro" onSubmit={formHandler}>
				<div className="form_description">
					{isChanged ? (
						<h2 className={styles.settingsUpdate}>Your BMR settings updated</h2>
					) : (
						""
					)}
					<h2>User Info</h2>
					<p>You can set your info in this form.</p>
				</div>
				{/* <label className="description" htmlFor="weight">
					Weight (kg)
				</label> */}
				<div>
					<input
						id="weight"
						name="weight"
						type="number"
						onChange={handleChange}
						placeholder="Weight"
					/>
				</div>
				{/* <label className="description" htmlFor="height">
					Height (cm)
				</label> */}
				<div>
					<input
						id="height"
						name="height"
						type="number"
						placeholder="height"
						onChange={handleChange}
					/>
				</div>
				{/* <label className="description" htmlFor="age">
					Age
				</label> */}
				<div>
					<input
						id="age"
						name="age"
						type="number"
						placeholder="Age"
						onChange={handleChange}
					/>
				</div>
				{/* <label className="description" htmlFor="gender">
					Gender
				</label> */}
				<div>
					<select
						id="gender"
						name="gender"
						onChange={handleChange}
					>
						<option defaultValue="select">Gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</div>
				{/* <label className="description" htmlFor="pal">
					Physical Activity Level
				</label> */}
				<div>
					<select
						id="pal"
						name="pal"
						onChange={handleChange}
					>
						<option defaultValue="select">Physical Activity Level</option>
						<option value="1">
							Little / No Excercise (sedentary lifestyle)
						</option>
						<option value="2">Light Exercise (1 - 2 times a week)</option>
						<option value="3">Moderate Exercise (2 - 3 times a week)</option>
						<option value="4">Hard Exercise (4 - 5 times a week)</option>
						<option value="5">
							Physical Job or Hard Exercise (6 - 7 times a week)
						</option>
						<option value="6">Proffessional Athlete</option>
					</select>
				</div>
				<input type="hidden" name="form_id" value="14697" />
				<input
					type="submit"
					name="submit"
					value="Submit"
					disabled={!isFormValid()}
				/>
			</form>
		</div>
	);
};

export default UserInfo;
