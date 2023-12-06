async function getEat() {
	
	const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';
	const options = {
		method: 'GET'
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		const arr = Object.entries(result)
		for(item in arr[0][1]) {
			const meals = arr[0][1].map(item => `<li>${item.strMeal}</li>`).join(' ')
			console.log(meals)
			document.getElementById("haveSomething").innerHTML = meals
		}
	} catch (error) {
		console.error(error);
	}

}

getEat();