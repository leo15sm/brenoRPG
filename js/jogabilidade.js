export const personalidades = [
    "Inabalável", "Trapaceiro", "Introvertido", "Carismático", "Servo", "Indeciso", "Procrastinador", "Imparcial",
    "Modesto", "Corajoso", "Determinado", "Tímido", "Gentil", "Atencioso", "Irritado", "Patriota", "Indiferente",
    "Sonolento", "Apostador", "Esportista", "Sociopata", "Misterioso", "Espalhafatoso", "Idol", "Simplista", "Sério",
    "Diligente", "Calmo", "Justo", "Sarcástico", "Leal", "Companheirismo", "Questionador", "Criativo",
    "Protetor", "Desastrado", "Aproveitador", "Fofoqueiro", "Anti-social", "Apaixonado", "Reservado", "Traiçoeiro",
    "Narcisista", "Competidor", "Pacifista", "Compreensivo", "Materialista", "Briguento", "Preguiçoso", "Determinado",
    "Impulsivo", "Inocente", "Altruísta", "Heróico", "Alegre", "Humilde", "Resiliente", "Honesto", "Dedicado", "Derrotista",
    "Falador", "Galanteador", "Palhaço", "Provocador", "Líder", "Empático", "Honrado", "Precavido", "Audacioso", "Respeitoso",
    "Teimoso", "Distraído", "Inquieto", "Arrogante", "Esperançoso", "Enganador", "Ciumento", "Ambicioso", "Vaidoso",
    "Astuto", "Devoto", "Glutão", "Ingrato", "Falso", "Exibido", "Meticuloso", "Curioso", "Generoso",
    "Rude", "Refinado", "Companheiro", "Complexado", "Infantil", "Naturalista", "Inseguro", "Reservado", "Pragmático",
    "Aventureiro", "Estratégico", "Confiante", "Moralista", "Vingativo", "Sonhador", "Inovador", "Amante da liberdade", 
    "Observador", "Espiritualista"
];

export const genex = [
        "Vento",
        "Fogo",
        "Água",
        "Terra",
        "Luz",
        "Trevas",

        "Gelo",
        "Madeira",
        "Magma",
        "Veneno",
        "Cura",
        "Profano",
        "Raio",
        
        "Cosplay de habilidade",
        "Campo interno",
        "Telepata de memória",
        "Aline de deus",
        "Marionete humana",
        "Segredo do obscuro",
        "Exorcismo",
        "Prever o futuro",

        "4 braços espectral",
        "Gravidade",
        "Viagens portais",
        "Olhos do criador",
        "As armas do obscuro",

        "Máscara universal",
        "Campos",
        "Caos",
        "Obscuro da guerra"
];

document.addEventListener("DOMContentLoaded", function() {
    sortear(personalidades, 'personalidade', 3);
    sortear(genex, 'genex', 3);
});

// Função para sortear sem repetições com ícones
function sortear(dadosImport, SectionId, quantidadeSorteios) {
    const SelectSectionID = document.getElementById(SectionId);
    const btnSortear = SelectSectionID.querySelector('.botao');
    const resultado = SelectSectionID.querySelector('.resultado');

    // Evento para sortear uma personalidade
    btnSortear.addEventListener("click", function() {
        resultado.innerHTML = ''; // Limpa o resultado anterior

        // Cria uma cópia do array original para evitar modificar o original
        let dadosDisponiveis = [...dadosImport];

        for (let i = 0; i < quantidadeSorteios; i++) {
            if (dadosDisponiveis.length === 0) {
                // Se não houver mais itens disponíveis, para o loop
                break;
            }

            const indice = Math.floor(Math.random() * dadosDisponiveis.length);
            const itemSorteado = dadosDisponiveis[indice];

            // Remove o item sorteado do array
            dadosDisponiveis.splice(indice, 1);

            // Cria um novo elemento para o resultado
            const elemento = document.createElement('p');

            // Adiciona o ícone e o texto
            elemento.innerHTML = `<i class="fas fa-fire"></i> ${itemSorteado}`;
            resultado.appendChild(elemento); // Adiciona ao contêiner de resultados
        }
    });
}
