export class Atributos{
    constructor(hp, forc, defesa, pdf, sdef, speed){
        this.hp = hp;
        this.forca = forc;
        this.defesa = defesa;
        this.pdf = pdf;
        this.sdef = sdef;
        this.speed = speed;
    }
}

export class Bild{
    constructor(classe, elemento, gene){
        this.classe = classe;
        this.gene = gene;
        this.elemento = elemento;
    }
}

export class Progresso{
    constructor(nivel, xp){
        this.nivel = nivel;
        this.xp = xp;
    }
}

export class Personagem{
    constructor(player, nome, nacao, bild, atributos, progresso){
        this.player = player;
        this.nome = nome;
        this.nacao = nacao;
        this.bild = bild;
        this.atributos = atributos; 
        this.progresso = progresso;
    }
}
