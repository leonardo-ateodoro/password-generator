const sliderElement = document.querySelector('.app.pwd__slider'); 
const buttonElement = document.querySelector('app-pwd__button');
const clearButton = document.querySelector('.app-pwd__button--clear');
const sizePassword = document.querySelector('.app-pwd__size');
const password = document.querySelector('.app-pwd__output'); 
const containerPassword = document.querySelector('.app-pwd__result');
const welcomeElement = document.querySelector('.app-pwd__welcome');
const datetimeElement = document.querySelector ('.app-pwd__datetime');

const charsets = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    special: '!@#$%&*'
};

let novaSenha = '';
let historicoSenhas = [];

const getSaudacao = () =>  {                        
    const hora = new Date().getHours();
    if (hora < 12) return 'Bom dia';
    if (hora < 18) return 'Boa tarde';
    return 'Boa noite';
};

const formatarDataHora =() => {
    const agora = new Date();
    const diasSemana = [
        'Domingo', 
        'Segunda-feira', 
        'Terça-feira', 
        'Quarta-feira',
        'Quinta-feira', 
        'Sexta-feira', 
        'Sábado'
    ];

    const diaSemana = diasSemana [agora.getDay()];
    const dia = agora.getDate().toString().padStart(2, '0');
    const mes = (agora.getDate()+1).toString().padStart(2, '0');
    const ano = agora.getFullYear();

    const hora = agora.getHours().toString().padStart(2,'0');
    const minuto = agora.getMinutes().toString().padStart(2,'0');
    const segundo = agora.getSeconds().toString().padStart(2,'0');

    return `${diaSemana}, ${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
};


const atualizarHeader = () => {
    welcomeElement.textContent = `${getSaudacao}!`;
    datetimeElement.textContent = formatarDataHora();
};

setInterval(atualizarHeader, 1000);
atualizarHeader();

sizePassword.textContent = sliderElement.value;

sliderElement.addEventListener('input', (e) => {
    sizePassword.textContent = e.target.value;
});

const generatePassword = () => {
    let selectedCharset = '';

    const uppercaseChecked = document.querySelector('.uppercase-check').checked;
    const lowercaseChecked = document.querySelector('.lowercase-check').checked;
    const cnumbersChecked = document.querySelector ('.numbers-check').checked;
    const specialChecked = document.querySelector('.special-check').checked;

    if (uppercaseChecked) selectedCharset += charsets.uppercase;
    if (lowercaseChecked) selectedCharset += charsets.lowercase;
    if (cnumbersChecked) selectedCharset += charsets.numbers;
    if (specialChecked) selectedCharset += charsets.special;
    
    if (!selectedCharset) {
        selectedCharset = Object.values (charsets).join('');
        document.querySelector ('.uppercase-check').checked = true;
        document.querySelector('.lowercase-check').checked = true;
        document.querySelector('.numbweas-check'). checked = true;
        document.querySelector('.special-check').checked = true;
    }

    let pass = '';

    for (let i = 0; i < sliderElement.value; ++i) {
     pass += selectedCharset.charAt(Math.floor(Math.random() * selectedCharset.length));   
    }

    containerPassword.classList.remove('hide');

    password.textContent = pass;

    novaSenha = pass;

    historicoSenhas.unshift(pass);

    if (historicoSenhas.length > 3) {
        historicoSenhas.pop();
    }

    const historico = document.querySelector('.app-pwd__history');
    if (historico) {
        historico.style.display = 'block';

        historico.querySelector('.app-pwd__history-list').innerHTML = historicoSenhas
            .map(senha => `<li class="app-pwd__history-item">${senha}</li>`)
            .join('');
    }
};

const copyPassword = () => {
    alert ('Senha copiada com sucesso!'); 
    navigator.clipboard.writeText(novaSenha);
};

buttonElement.addEventListener('click', g)



