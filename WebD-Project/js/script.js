
let navbar = document.querySelector('.navbar');
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

function register(){
	x.style.left ="-400px";
	y.style.left="50px";
	z.style.left ="110px";
}
function login(){
	x.style.left ="50px";
	y.style.left="450px";
	z.style.left ="0";
}
