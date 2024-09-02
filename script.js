// call api
//weather api 'https://api.openweathermap.org/data/2.5/weather?q=sabalgarh&appid=4d8fb5b93d4af21d66a2948710284366&units=metric'
const url = "https://hindi-jokes-api.onrender.com/jokes?api_key=078a738bcb9bf36766b7b1f24088";
const para = document.querySelector("#para");
const btn = document.querySelector("#btn");
const getFacts = async () =>{
	let response = await fetch(url);
	let result = await response.json();
	para.innerText = (result.jokeContent);
}

btn.addEventListener("click", getFacts);