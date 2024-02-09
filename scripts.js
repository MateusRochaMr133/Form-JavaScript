const form = document.getElementById("form");
const yourname = document.getElementById("yourname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phonenumber");
const date = document.getElementById("date");
const time = document.getElementById("time");
const amountofpeople = document.getElementById("amountofpeople");
const message = document.getElementById("message");
const ulElement = document.querySelector("ul");

form.addEventListener ("submit", (e) => {
    /* Impede a ação do evento que foi capturado no caso sera a de reccaregar a pagina */
    e.preventDefault();

    checkInputs();

});

// hoisting
function checkInputs (){
    const yournameValue = yourname.value;
    const emailValue = email.value;
    const phoneNumberValue = phoneNumber.value;
    const dateValue = date.value;
    const timeValue = time.value;
    const amountofpeopleValue = amountofpeople.value;
    const messageValue = message.value;
    let verificator = 0;


    if (yournameValue === ""){
        setErrorFor(yourname, "O nome é obrigatório.");
    }
    else{
        setSuccessFor(yourname);
        verificator ++
        /* A cada campo preenchido será somado +1 ao contador e ao final será verificado se o contaador poossuio o  numero 7 que é a quantidade de campos que estao prreenchidos. Se estiver o numero 7 as informaçoes digitadas no formulario irao aparecer no quadro branco do lado direito , caso contrario , nao irao aparecer */
    }



    if (emailValue === ""){
        setErrorFor(email, "O email é obrigatório.");
    }
    // ! = nega a condição especificada ou seja, verifica o contrário da condição
    else if (!checkEmail(emailValue)){
        setErrorFor(email, "Por favor, insira um email válido.");
    }
    else {
        setSuccessFor(email);
        verificator ++

    }



    if (phoneNumberValue === ""){
        setErrorFor(phoneNumber, "O número é obrigatório.");
    }
    else if (phoneNumberValue.length != 9){
        setErrorFor(phoneNumber, "Digite o número completo (sem DDD).");
    }
    else{
        setSuccessFor(phoneNumber);
        verificator ++
    }



    if (dateValue === ""){
        setErrorFor(date, "A data é obrigatória.");
    }
    else{
        setSuccessFor(date);
        verificator ++
    }

    if (timeValue === ""){
        setErrorFor(time, "O horário é obrigatório.");
    }
    else{
        setSuccessFor(time);
        verificator ++
    }

    if (amountofpeopleValue === ""){
        setErrorFor(amountofpeople, "A data é obrigatória.");
    }
    else{
        setSuccessFor(amountofpeople);
        verificator ++
    }

    if (messageValue === ""){
        setErrorFor(message, "O horário é obrigatório.");
    }
    else{
        setSuccessFor(message);
        verificator ++
    }

    if (verificator === 7){

        const yournameElement = document.createElement("span");
        const emailElement = document.createElement("span");
        const phoneNumberElement = document.createElement("span")
        const dateElement = document.createElement("span")
        const timeElement = document.createElement("span")
        const amountofpeopleElement = document.createElement("span")
        const messageElement = document.createElement("span")

        yournameElement.setAttribute("class", "name")
        emailElement.setAttribute("class", "email")
        phoneNumberElement.setAttribute("class", "phonenumber")
        dateElement.setAttribute("class", "date")
        timeElement.setAttribute("class", "time")
        amountofpeopleElement.setAttribute("class", "amountofpeople")
        messageElement.setAttribute("class", "message")

        yournameElement.innerHTML = yourname.value;
        emailElement.innerHTML = email.value;
        phoneNumberElement.innerHTML = phoneNumber.value;
        dateElement.innerHTML = date.value;
        timeElement.innerHTML = time.value;
        amountofpeopleElement.innerHTML = amountofpeople.value;
        messageElement.innerHTML = message.value;

        const btnElement = document.createElement("button");
        btnElement.innerHTML = "Remover";

        const liElement = document.createElement("li");
        liElement.appendChild(yournameElement)
        liElement.appendChild(emailElement)
        liElement.appendChild(phoneNumberElement)
        liElement.appendChild(dateElement)
        liElement.appendChild(timeElement)
        liElement.appendChild(amountofpeopleElement)
        liElement.appendChild(messageElement)
        liElement.appendChild(btnElement)

        ulElement.appendChild(liElement);

        btnElement.onclick = () => {

            ulElement.removeChild(liElement)  
      
        }

    }
    
    else{
        verificator = 0
    }
    
    yourname.value = "";
    email.value = "";
    phoneNumber.value = "";
    date.value = "";
    time.value = "";
    amountofpeople.value = "";
    message.value = "";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}

function setErrorFor (input, message){
    // retorna a div que é pai do input
    const formControl = input.parentElement;
    // querySelector = retorna apenas o primeiro elemento especificado dentro do elemento pai
    const small = formControl.querySelector("small");

    // Adiciona a mensagem de errso
    small.innerText = message;

    // Adiciona a classe de erro
    formControl.className = "form-control error";
}

function setSuccessFor (input) {
    // parentElement = seleciona o pai direto do elemento especificado
    const formControl = input.parentElement;

    // Adicionar a classe de sucesso que ja está editada no css
    formControl.className = "form-control success";

}