//↓↓ SCRIPTS PRIMORDIAIS
window.addEventListener('DOMContentLoaded', () => {
    /*REFERÊNCIA DE TEMA*/
    if(localStorage.getItem('temaDaPagina') != null){alterarTema(0)} else{localStorage.setItem('temaDaPagina', 'Claro')}})

function alterarTema(interacao=0){
    let icone = document.querySelector("#alteraTemaPagina > i")

    if(localStorage.getItem('temaDaPagina') === 'Escuro'){
        if(interacao === 1){setTimeout(() => {
            document.body.classList.remove('modo_escuro'); localStorage.setItem('temaDaPagina', 'Claro'); icone.className = 'ph-sun-fill'; icone.style.transform = 'scaleX(1)';
        }, 125);} else {document.body.classList.add('modo_escuro'); icone.className = 'ph-moon-fill'; icone.style.transform = 'scaleX(-1)';}}
        
        else {if(interacao ===1){setTimeout(() => {
            document.body.classList.add('modo_escuro'); localStorage.setItem('temaDaPagina', 'Escuro'); icone.className = 'ph-moon-fill'; icone.style.transform = 'scaleX(-1)';
        }, 125);} else {document.body.classList.remove('modo_escuro'); icone.className = 'ph-sun-fill'; icone.style.transform = 'scaleX(1)';}
    }

    document.querySelectorAll('meta').forEach(meta => {if(meta.name === 'theme-color'){meta.content = localStorage.getItem('temaDaPagina') === 'Escuro' ? '#333333' : '#FDFBEE'}})
}

//↓↓ POPUPS
function abrirPopup(id){
    //Fecha todos os Popups anteriores (evitar erros)
    document.querySelectorAll('*[id^="popup_"]').forEach(popup => {popup.style.display = 'none'})

    //Aplica os estilos ao respectivo Popup
    setTimeout(() => {
        document.querySelector('html').style.overflow = 'hidden';
        document.querySelector('#container_popup').style.display = 'flex';
        document.querySelector(id).style.display = 'block';
    }, 125);

    //Atalho de teclado para fechar Popup
    window.addEventListener('keyup', tecla => {if(tecla.code === 'Escape'){fecharPopup(id)}})
}

function fecharPopup(id){
    document.querySelector(id).style.animation = 'popupDesaparecer 250ms ease-out';

    //Aplica os estilos ao respectivo Popup
    setTimeout(() => {
        document.querySelector(id).style.display = 'none';
        document.querySelector('#container_popup').style.display = 'none';
        document.querySelector('html').style.overflow = 'scroll'
        document.querySelector(id).style.animationName = 'popupAparecer'
    }, 250);
}