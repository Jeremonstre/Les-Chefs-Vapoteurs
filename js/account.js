
const user = [
    {
    mail: "lucasrosay42@gmail.com",
    uname: "Luke42",
    birth: "05/03/2001",
    psw: "Bird2001",
    },
    {
    mail:"jeremydierickx@gmail.com",
    uname: "Jeremonstre",
    birth: "?",
    psw:"Jeremy2023",
    },
    {
    mail:"frederixdecottignies@gmail.com",
    uname: "Fredlivraison",
    birth: "?",
    psw:"Frederic2023",
    },
   ];

   console.log(user)


   
   
   const myForm = document.querySelector("#my-form");
   const nameInput = document.querySelector("#name");
   const emailInput = document.querySelector("#email");
   const birthInput = document.querySelector("#birth");
   const passInput = document.querySelector("#psw");
   const msg = document.querySelector(".msg");
   const userList = document.querySelector("#users");
   myForm.addEventListener("submit", onSubmit);
   
   function onSubmit(e) { 
       e.preventDefault(); 
       if (nameInput.value === "" || emailInput.value === "" || birthInput.value === "" || passInput.value === "") { 
           msg.classList.add("error");
           msg.innerHTML = "Merci de compléter tous les champs"; 
           setTimeout(() => { 
               msg.classList.remove("error");
               msg.innerHTML = ""; 
            }, 2000);
        } 
        else { 
                let newuser = ({
                    mail :  `${emailInput.value}`,
                    uname:  `${nameInput.value}` ,
                    birth:  `${birthInput.value}`,
                    psw:    `${passInput.value}`,
                 });
                user.push(newuser)
 console.log(nameInput.value)
 console.log(emailInput.value)
 console.log(birthInput.value)
 console.log(passInput.value)
 console.log(user)
 } 
}