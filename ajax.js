const button =document.getElementById("button")
const Director =document.getElementById("box")
const Moviename =document.getElementById("box1")
const rating =document.getElementById("box2")
const xhr = new XMLHttpRequest();
button.onclick=function getInputValue() {
	let inputValue = document.getElementById("textInput1").value;
	xhr.open("GET","https://www.omdbapi.com/?t="+inputValue+"&apikey=7aa61871");
	xhr.onloadend = postAjaxFunction;
	xhr.send();
};

let postAjaxFunction = function () {
    if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        let director=response.Director;
        let movie_name=response.Title;
        let Rating=response.Ratings[0].Value
        Director.innerHTML = "Director: "+director 
        Moviename.innerHTML=  "Name: "+movie_name
        rating.innerHTML= "Rating: "+Rating
    } else {
        id3.innerHTML = "Something went wrong.";
    }
}; 

