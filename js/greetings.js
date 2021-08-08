// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginBUtton = document.querySelector("#login-form button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const logOut = document.querySelector(".log-out");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // console.log("hello",loginInput.value);
  event.preventDefault();
  // console.log(loginInput.value);
  // if (username == "") {
  //   alert("Please write your name");
  // } else if (username.length > 15) {
  //   alert("Your name is too long.");
  // }

  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // greeting.innerText = "Hello " + username;
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
// function handleLinkClick(event) {
//   event.preventDefault();
//   console.log(event);
// }
// loginBUtton.addEventListener("click", onLoginBtnClick);
// loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

function deletedUsername() {
  localStorage.removeItem(USERNAME_KEY);
  greeting.innerText = "";
  greeting.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}

logOut.addEventListener("click", deletedUsername);
