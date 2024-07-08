
const user_create_form = document.getElementById('user_create_form');
// user_create_form.addEventListener('submit', () =>{
//     alert();
// })//addEventListener event o use korte pari.
const msg = document.querySelector('.msg');
const name_req = document.querySelector('.name-req');
const email_req = document.querySelector('.email-req');
const cellnumber_req = document.querySelector('.cellnumber-req');
const username_req = document.querySelector('.username-req');


user_create_form.onsubmit = (event) => {
   event.preventDefault();//ai event use kore submit button click korar por bar bar page relode houa off hobe.

   let name = document.getElementById('name');
   let email = document.getElementById('email');
   let cn = document.getElementById('cellnumber');
   let un = document.getElementById('username');

   if (name.value == '') {
      name_req.innerHTML =  `<span style = "color:red;">*Required</span>`;
      name.style.borderColor = 'red';
   }else{
      name_req.innerHTML = ``;
      name.style.borderColor = 'rgb(218, 224, 229)';
   }

   if (email.value == '') {
      email_req.innerHTML =  `<span style = "color:red;">*Required</span>`;
      email.style.borderColor = 'red';
   }else{
      email_req.innerHTML = ``;
      email.style.borderColor = 'rgb(218, 224, 229)';
   }

   if (cellnumber.value == '') {
      cellnumber_req.innerHTML =  `<span style = "color:red;">*Required</span>`;
      cellnumber.style.borderColor = 'red';
   }else{
      cellnumber_req.innerHTML = ``;
      cellnumber.style.borderColor = 'rgb(218, 224, 229)';
   }

   if (username.value == '') {
      username_req.innerHTML =  `<span style = "color:red;">*Required</span>`;
      username.style.borderColor = 'red';
   }else{
      username_req.innerHTML = ``;
      username.style.borderColor = 'rgb(218, 224, 229)';
   }


   if(name.valu == ''|| email.valu == '' || cn.value == '' || un.value == ''){
       msg.innerHTML = setAlert('All fildes are required!');
   }else if(emailCheck(email.value) == false){
       msg.innerHTML = setAlert('Invalid email address!', 'warning');
    }
    else if(cellCheck(cellnumber.value) == false){
       msg.innerHTML = setAlert('Invalid phone number!', 'warning');
    }
    else{
       msg.innerHTML = setAlert('Successfull data!','success');
   }
}
