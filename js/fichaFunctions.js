export function selectJogadores(List, SectionId) {
    const selectElement = document.getElementById(SectionId);

    // Limpa o conteúdo atual do select
    selectElement.innerHTML = '';

    // Itera sobre o array de personagens e cria uma opção para cada jogador
    List.forEach((personagem, index) => {
        const option = document.createElement("option");
        option.value = personagem.player;
        option.text = personagem.player;
        selectElement.appendChild(option);

        // Define o primeiro jogador como selecionado por padrão
        if (index === 0) {
            option.selected = true;
        }
    });

    // Função para preencher os campos com os dados do personagem selecionado
    function preencherCampos(jogadorSelecionado) {
        // Busca o personagem correspondente ao jogador selecionado
        const personagem = List.find(p => p.player === jogadorSelecionado);

        if (personagem) {
            // Preenche os campos básicos com os dados do personagem
            document.getElementById("nome").value = personagem.nome;
            document.getElementById("nacao").value = personagem.nacao;
            document.getElementById("classe").value = personagem.bild.classe;
            document.getElementById("gene").value = personagem.bild.gene;
            document.getElementById("elemento").value = personagem.bild.elemento;
            document.getElementById("xp").value = personagem.progresso.xp;
            document.getElementById("nivel").value = personagem.progresso.nivel;

            // Preenche os atributos e seus modificadores
            const atributos = personagem.atributos;

            // Mapeia os atributos para os inputs com base no nome dos atributos
            const atributosMap = {
                hp: atributos.hp,
                forca: atributos.forca,
                defesa: atributos.defesa,
                pdf: atributos.pdf,
                sdef: atributos.sdef,
                speed: atributos.speed,
            };

            Object.keys(atributosMap).forEach(nomeAtributo => {
                const inputAtributo = document.querySelector(`input[name="valores_${nomeAtributo}"]`);

                if (inputAtributo) {
                    inputAtributo.value = atributosMap[nomeAtributo];  // Preenche o valor do atributo
                }
            });
        } else {
            // Se o personagem não for encontrado, limpa os campos
            document.getElementById("nome").value = '';
            document.getElementById("nacao").value = '';
            document.getElementById("classe").value = '';
            document.getElementById("gene").value = '';
            document.getElementById("elemento").value = '';
            document.getElementById("xp").value = '';
            document.getElementById("nivel").value = '';

            // Limpa os inputs de atributos e modificadores
            Object.keys(atributosMap).forEach(nomeAtributo => {
                const inputAtributo = document.querySelector(`input[name="atributos_${nomeAtributo}"]`);
                if (inputAtributo) {
                    inputAtributo.value = '';
                }
            });
        }
    }

    // Adiciona um evento de mudança no select para atualizar os campos
    selectElement.addEventListener('change', function() {
        preencherCampos(selectElement.value);
    });

    // Preenche os campos com o primeiro valor por padrão
    if (List.length > 0) {
        preencherCampos(selectElement.value); // Agora o primeiro jogador será preenchido por padrão
    }

}

export function criarTabela(dados, idTabela) {
    const tabela = document.getElementById(idTabela);

    // Limpar o conteúdo da tabela
    tabela.innerHTML = '';

    // Adicionar cabeçalho
    const thead = tabela.createTHead();
    const headerRow = thead.insertRow();
    
    // Adiciona cabeçalhos dinamicamente baseado nas colunas
    dados.colunas.forEach(coluna => {
        const th = document.createElement('th');
        th.textContent = coluna.charAt(0).toUpperCase() + coluna.slice(1);
        headerRow.appendChild(th);
    });

    // Adicionar corpo da tabela
    const tbody = tabela.createTBody();
    dados.linhas.forEach(linha => {
        const tr = tbody.insertRow();
        const nomeAtributo = linha.charAt(0).toUpperCase() + linha.slice(1);

        // Adicionar células para cada coluna especificada
        dados.colunas.forEach(coluna => {
            const td = tr.insertCell();
            if (coluna === 'atributos') {
                td.textContent = nomeAtributo; // Nome do atributo para a coluna 'atributos'
            } else {
                const input = document.createElement('input');
                input.type = 'number';
                input.name = `${coluna}_${linha}`;
                input.readOnly = true;
                td.appendChild(input);
            }
        });
    });
}