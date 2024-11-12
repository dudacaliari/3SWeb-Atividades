class Animal{
    constructor(){
        this.nome = '';
        this.idade = '';
        this.cor = '';
    } 

    Nomear(nome){
        this.nome = nome;
    }
    
    AtribuirIdade(idade){
        this.idade = idade;
    }
    
    SetCor(cor){
        this.cor = cor;
    }
    
    ApresentarDados(){
        console.log('Nome: '+this.nome);
        console.log('Idade: '+this.idade);
        console.log('Cor: '+this.cor);
    }
}

class Vaca extends Animal{
    interagir()
    {
        console.log("Vou puxar uma arena")
    }
}

class Cavalo extends Animal{
    interagir()
    {
        console.log("Muito dificil dar aula para voces")
    }
}

let animal1 = new Animal();
animal1.SetCor('Marrom');
animal1.Nomear('Vaca');
animal1.AtribuirIdade('Bezerro');

animal1.ApresentarDados();


