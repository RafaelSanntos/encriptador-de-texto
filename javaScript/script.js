//Seleção de elementos
const encryptButton = document.querySelector(".encrypt-button");
const textareaInput = document.querySelector(".input");
const alert = document.querySelector(".text-alert");
const decryptButton = document.querySelector(".decrypt-button");

const textareaOutput = document.querySelector(".output-message");
const resultContainerContent = document.querySelector(".result-container__content");
const copyButton = document.querySelector(".copy-button");

//Botão de encripitar

encryptButton.addEventListener("click", e=>{
    e.preventDefault();

    let text = textareaInput.value;

    let inputsNotAccepted = text.normalize("NFD")
      // Remove acentos simples e outros caracteres especiais
      .replace(/[-+$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "")
      // Remove números
      .replace(/[0-9]/g, "");

    if(text == ""){
        alert.classList.add("vibrar");
        alert.style.color = "#FF0000";
        alert.textContent = "Digite um texto para criptografar!";

        setTimeout(() => {
          alert.classList.remove("vibrar");
          alert.removeAttribute("style");
          alert.textContent = "Apenas letras minúsculas sem acento.";
        },1500);
    } 
    
    else if(text !== inputsNotAccepted) {
        alert.classList.add("vibrar");
        alert.style.color = "#FF0000";
        alert.textContent = "Não deve ter acentos, caracteres especiais ou números!";

        setTimeout(() => {
          alert.classList.remove("vibrar");
          alert.removeAttribute("style");
          alert.textContent = "Apenas letras minúsculas sem acento!";
        },1500);
    }

    else if(text !== text.toLowerCase()){
        alert.classList.add("vibrar");
        alert.style.color = "#FF0000";
        alert.textContent = "Apenas letras minúsculas sem acento!";

        setTimeout(() => {
          alert.classList.remove("vibrar");
          alert.removeAttribute("style");
        },1500);
    }

    else{
        text = text.replace(/e/mg, "enter");
        text = text.replace(/i/mg, "imes");
        text = text.replace(/a/mg, "ai");
        text = text.replace(/o/mg, "ober");
        text = text.replace(/u/mg, "ufat");

        textareaOutput.innerHTML = text;
        copyButton.style.visibility = "inherit";
        resultContainerContent.remove(); 
    }
})

//Botão de desencriptar

decryptButton.addEventListener("click", e=>{
    e.preventDefault();

    let text = textareaInput.value;

    let inputsNotAccepted = text.normalize("NFD")
      // Remove acentos simples e outros caracteres especiais
      .replace(/[-+$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "")
      // Remove números
      .replace(/[0-9]/g, "");

    if(text == ""){
        alert.classList.add("vibrar");
        alert.style.color = "#FF0000";
        alert.textContent = "Digite um texto para descriptografar!";

        setTimeout(() => {
          alert.classList.remove("vibrar");
          alert.removeAttribute("style");
          alert.textContent = "Apenas letras minúsculas sem acento.";
        },1500);
    } 
    
    else if(text !== inputsNotAccepted) {
        alert.classList.add("vibrar");
        alert.style.color = "#FF0000";
        alert.textContent = "Não deve ter acentos, caracteres especiais ou números!";

        setTimeout(() => {
          alert.classList.remove("vibrar");
          alert.removeAttribute("style");
          alert.textContent = "Apenas letras minúsculas sem acento!";
        },1500);
    }

    else if(text !== text.toLowerCase()){
        alert.classList.add("vibrar");
        alert.style.color = "#FF0000";
        alert.textContent = "Apenas letras minúsculas sem acento!";

        setTimeout(() => {
          alert.classList.remove("vibrar");
          alert.removeAttribute("style");
        },1500);
    }

    else{
        text = text.replace(/enter/mg, "e");
        text = text.replace(/imes/mg, "i");
        text = text.replace(/ai/mg, "a");
        text = text.replace(/ober/mg, "o");
        text = text.replace(/ufat/mg, "u")

        textareaOutput.innerHTML = text;
        copyButton.style.visibility = "inherit";
        resultContainerContent.remove(); 
    }
})

//Botão copiar

copyButton.addEventListener("click", e=>{
    e.preventDefault();

    let copyText = textareaOutput;
    copyText.select();
    document.execCommand("copy");
});