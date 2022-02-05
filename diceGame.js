var prompt  = require(`prompt-sync`)();

let rodadas = +prompt(`Digite o número de rodadas: `);
let quantidadeJogadores = +prompt(`Digite a quantidade de jogadores: `);

contador = 0;
let lista = [];
while (contador < quantidadeJogadores){
    const jogador = {
        nome: nome = prompt(`Digite o nome do jogador: `).trim().toLocaleLowerCase(),
        dado: dado = 0, 
        vitoria: 0,
    };
    contador ++;
    lista.push(jogador);
    console.log();
    //console.log(jogador);
}

cont=1;
while (cont <= rodadas){
    console.log(`###Rodada ${cont}###\n`);
    for (i=0; i < quantidadeJogadores; i++){
        lista[i].dado = Math.floor(Math.random() * 6 + 1);
    }
    
    console.log(lista);

    lista.sort(function(a,b) {
        return a.dado - b.dado;
    });
    console.log(lista);

    reverso = lista.reverse();
    //console.log(reverso);

    reverso[0].vitoria = reverso[0].vitoria+1

    console.log(`o vercedor dessa rodade é: `);
    console.log(reverso[0]);
    console.log();

   cont ++
}

let vit=[];
for (i=0; i < quantidadeJogadores; i++){
     vit.push(lista[i].vitoria);
}

//console.log(vit);

var max = Math.max(...vit);

vit.sort(function(a,b) {
    return a - b;
});
//console.log(vit);

reversovit = vit.reverse();
//console.log(reversovit);

if (reversovit[0] == reversovit[1]){
    console.log(`Resultado do jogo!!`);
    console.log(`Empate`);
} else{
    console.log(`Resultado do jogo`);
    console.log(`O vencedor do jogo é: `);
    console.log(lista[vit.indexOf(max)].nome);
}
