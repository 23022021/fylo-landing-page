
const email = document.querySelector(".email-input");
const error = document.getElementById("error-div");
const submitBut = document.getElementById("submit-email");

const emailBottom = document.querySelector(".email-input2");
const error2 = document.querySelector("#error-div2");
const submitBut2 = document.getElementById("submit-email2");



let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


function testMail(input){

  if(emailRegex.test(input.value)){
    console.log("this is true");
    input.classList.add('success');
    input.classList.remove('error');
    error.firstElementChild.style.display = "none";
    error.lastElementChild.style.display = "block";

  } else if(!emailRegex.test(input.value)){
    console.log('this is false');
    input.classList.add('error');
    input.classList.remove('success');
    error.firstElementChild.style.display = "block";
    error.lastElementChild.style.display = "none"; 
  }

}

function testMail2(input){

  if(emailRegex.test(input.value)){
    console.log("this is true");
    input.classList.add('success');
    input.classList.remove('error2');
    error2.firstElementChild.style.display = "none";
    error2.lastElementChild.style.display = "block";

  } else if(!emailRegex.test(input.value)){
    console.log('this is false');
    input.classList.add('error2');
    input.classList.remove('success');
    error2.firstElementChild.style.display = "block";
    error2.lastElementChild.style.display = "none"; 
  }

}



submitBut.addEventListener('click', (event) =>{
  event.preventDefault();
  testMail(email);
  console.log("clicked");

})

submitBut2.addEventListener('click',(event)=>{
  event.preventDefault();
  testMail2(emailBottom);
  console.log("clicked");
})




