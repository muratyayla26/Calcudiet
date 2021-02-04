// BMR, VKE ve günlük kalori gereksinimini hesaplar.

export const bmrData = (weight, height, age, gender, pal) => {
	let palCoef;
	let genderCoef = (gender) => {
		if (gender === "woman") {
			return -161;
		} else {
			return +5;
		}
	};

	switch (pal) {
		case "1":
			palCoef = 1.2;
			break;
		case "2":
			palCoef = 1.375;
			break;
		case "3":
			palCoef = 1.55;
			break;
		case "4":
			palCoef = 1.725;
			break;
		case "5":
			palCoef = 1.9;
			break;
		case "6":
			palCoef = 2.3;
			break;
		default:
			palCoef = 1.2;
			break;
	}

	let bmr = 10 * weight + 6.25 * height - 5 * age + genderCoef(gender);

	let vke = weight / (height / 100) ** 2;

	const calories = bmr * palCoef;
	console.log(calories, vke);
	return calories;
};
