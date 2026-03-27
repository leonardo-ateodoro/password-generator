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