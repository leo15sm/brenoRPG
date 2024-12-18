import { Atributos, Bild, Progresso, Personagem } from './class.js';

export const atributos = [
    {
        colunas: ["atributos", "valores"],
        linhas: ["hp", "forca", "defesa", "pdf", "sdef",  "speed"],
    },
];
//nivel, xp, skill, upgrade, missao, gold
//forc, vit, des, int, sab, car
export const players = [
    new Personagem(
     "Player", "Nome", "Nação",
     new Bild("classe", "elemento", "gene"),
     new Atributos(0, 0, 0, 0, 0, 0),
     //hp, forc, defesa, pdf, sdef, speed
     new Progresso(0, 0)
     //nivel, xp
    ),
     /*###########################################*/
    new Personagem(
        "Leo", "Erebus", "Trevas",
        new Bild("Necromante", "Vento", "Trevas"),
        new Atributos(300, 2, 4, 10, 4, 10),
        //hp, forc, defesa, pdf, sdef, speed
        new Progresso(0, 0)
        //nivel, xp
    ),
    new Personagem(
        "Leo", "Depende", "Nação",
        new Bild("classe", "elemento", "gene"),
        new Atributos(1000, 100, 100, 100, 100, 100),
        //hp, forc, defesa, pdf, sdef, speed
        new Progresso(10, 100)
        //nivel, xp
    ),
    new Personagem(
        "Leo", "Depende", "Nação",
        new Bild("classe", "elemento", "gene"),
        new Atributos(1000, 100, 100, 100, 100, 100),
        //hp, forc, defesa, pdf, sdef, speed
        new Progresso(10, 100)
        //nivel, xp
    ),
];
