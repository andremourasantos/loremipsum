let quantidadeTexto = document.querySelector('#quantidade_txt');
let tamanhoTexto = document.querySelector('#tamanho_txt')
let opcoesTamanhoTexto = document.querySelectorAll("#tamano_txt > option").length
//↑↑ CONFIGURAÇÕES

quantidadeTexto.addEventListener('change', () => {if(quantidadeTexto = 1){for(i=0;i<opcoesTamanhoTexto;i++){let opcao = document.querySelectorAll("#tamano_txt > option")[i]; opcao.innerHTML = opcao.innerHTML.substring(0, opcao.innerHTML.length - 1)}} else {}})