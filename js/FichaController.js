import {atributos, players} from './bdFicha.js';
import {criarTabela, selectJogadores} from './fichaFunctions.js';

// Chamar a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    criarTabela(atributos[0], 'atributos');
    selectJogadores(players, 'selectJogador');
});

