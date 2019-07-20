const myForm = document.querySelector("#my-form"); // id of my-form
const nameInput = document.querySelector("#name"); // id of name
const emailInput = document.querySelector("#email"); // id of email
const msg = document.querySelector(".msg"); // .msg class which is an empty div
const userList = document.querySelector("#users"); // id of users which is an empty ul

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    // alert("Pleae enter fields"); //tutor don't use as it stops your code
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000); // 3000 is 3 seconds
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`) // template literal
    );
    userList.appendChild(li);
    nameInput.value = "";
    emailInput.value = "";
  }
}
