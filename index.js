const texto = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab incidunt dolores sint velit! Non odio vel quam suscipit consectetur corrupti. Ea numquam neque culpa similique, ab expedita assumenda non ipsa unde nihil, autem doloribus earum reiciendis tempora.',
    'Accusamus eaque voluptate, minus dolorem quia, fugit atque minima consequuntur qui at vel magnam quo assumenda inventore cumque, neque quaerat incidunt. Sunt iusto quasi explicabo asperiores ad magni, amet odio. Temporibus dolorem voluptatum ipsum. Suscipit totam tempora nesciunt voluptas, quam ut optio autem vel consequuntur!',
    'At, ducimus nisi soluta vel autem suscipit tempore labore odio quas est quos excepturi. Odit illo magni asperiores pariatur nemo tempora veritatis quisquam provident ad eaque, sunt culpa reprehenderit a animi quam ullam fuga unde doloribus quo rerum voluptatem vel! Quia ullam soluta voluptatum quis quod perferendis nesciunt, tempora error quo nihil, recusandae nemo.',
    'Saepe aliquid, voluptatum quam facilis nihil maiores cupiditate id impedit sapiente ea aliquam dicta velit quas assumenda. Facilis itaque aspernatur modi quis. Quisquam exercitationem, accusantium doloribus veniam tempora laborum sapiente minus minima mollitia sunt excepturi quia aspernatur cum aliquam ipsam totam ullam tenetur beatae sed voluptatum ut laboriosam, aliquid temporibus aperiam.',
    'Dicta cum quasi error, nostrum repudiandae accusantium quos? Unde tempora, nesciunt libero cupiditate officia sapiente animi cumque recusandae, numquam ipsam hic ullam maxime molestias. Numquam libero at eveniet voluptas ipsa dicta quae maiores, necessitatibus corrupti optio suscipit quo quod iste odio hic laboriosam facilis delectus a beatae ad aliquam provident, veritatis doloribus consequuntur.',
    'Quia quasi voluptatum itaque ullam est sunt facere dignissimos totam a nulla. Rem ducimus, est sequi repellendus quod quae veniam tempora aliquam ea voluptate a quos atque maiores voluptates facilis explicabo assumenda vero dolore commodi nisi fugit facere laborum excepturi?',
    'Expedita similique autem adipisci totam quam numquam asperiores voluptatem corporis qui? Vero amet libero doloribus laboriosam excepturi molestiae illo cupiditate veritatis facilis deleniti quas eligendi nisi voluptatum tempora a saepe debitis, eum ipsa similique labore nulla voluptate vitae officia quo.',
    'Dicta facere est corporis similique optio libero perferendis ducimus magnam, unde laborum a ad quasi error suscipit excepturi architecto, beatae iste quisquam molestias, perspiciatis quia! Nostrum consequuntur, ex nisi laborum dolor perspiciatis, quae doloremque excepturi assumenda molestiae laboriosam ut voluptates beatae non?',
    'Fugit, officia consectetur voluptatem, est recusandae illo vel repellat, voluptatibus magni dolores amet aspernatur nemo. Vero molestiae odit unde, debitis, consectetur incidunt pariatur quidem velit ipsam voluptas iure veniam dolor quibusdam ab illum, aliquam error voluptatum labore perspiciatis quam.',
    'Consequatur, veniam numquam nemo delectus fugiat quas aut minima commodi. Placeat quaerat iste pariatur ex fuga aspernatur sit, earum consequuntur est, inventore nobis quisquam eos hic doloremque nesciunt tempora cum voluptatem repellat.'
]

let quantidadeTexto = document.querySelector('#quantidade_txt');
let tamanhoTexto = document.querySelector('#tamanho_txt')
let opcoesTamanhoTexto = document.querySelectorAll("#tamano_txt > option").length
let saida = document.querySelector('#saida_txt')
//↑↑ CONFIGURAÇÕES

//↓↓ ACIONADORES
document.querySelector('#alteraTemaPagina').addEventListener('click', ()=>{alterarTema(1)})
document.querySelector('#icone_Ajustes').addEventListener('click', ()=>{abrirPopup('#popup_ajustes')})
document.querySelector('#icone_Info').addEventListener('click', ()=>{abrirPopup('#popup_sobre')})
document.querySelector('#gerar_lorem').addEventListener('click', ()=>{
    quantidadeTexto = document.querySelector('#quantidade_txt');
    tamanhoTexto = document.querySelector('#tamanho_txt');
    gerarLorem(quantidadeTexto.value, tamanhoTexto.value);
})

/*
quantidadeTexto.addEventListener('change', () => {if(quantidadeTexto = 1){for(i=0;i<opcoesTamanhoTexto;i++){let opcao = document.querySelectorAll("#tamanho_txt > option")[i]; opcao.innerHTML = opcao.innerHTML.substring(0, opcao.innerHTML.length - 1)}} else {}})
*/


function gerarLorem(quantidade,tamanho) {
    const n = Array.from(new Array(Number(quantidade)),Math.random).map(value => {return Number((value*10).toString().split('.',1))})
    saida.value = '';

    switch (tamanho) {
        case 'palavra':
            for(i=0;i<quantidade;i++){saida.value += `${texto[n[i]].split(' ',1).toString()} `}
            break;
        case 'frase':
            for(i=0;i<quantidade;i++){saida.value += `${texto[n[i]].split('.',1).toString()}. `}
            break;
        case 'paragrafo':
            for(i=0;i<quantidade;i++){saida.value += `${texto[n[i]]} `;}
            break;
        default:
            saida.value = texto[0]
            break;
    }
}