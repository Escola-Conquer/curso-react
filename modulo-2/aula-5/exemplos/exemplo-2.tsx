//Classes
class Greeter {
    name: string;
 
    constructor() {
        this.name = "Hello"
    }
}

//----------------------------------------------------------------------------------------
//Herança

class ClasseBase {
    nome: string;
 
    constructor(nome: string) {
        this.nome = nome;
    }
 
    print(msg: string = "Classe Base") {
        console.log(msg)
    }
}
 
class ClasseHerdeira extends ClasseBase {
 
    constructor(nome: string) {
        super(nome)
    }
 
    print(msg: string = "Classe Herdeira") {
        super.print(msg)
    }
}

//----------------------------------------------------------------------------------------
//Encapsulamento

class ClasseQualquer {
    private _nome: string;
 
    constructor(nome1: string) {
        this._nome = nome1;
    }
 
    get nome(): string {
        return this._nome;
    }
 
    set nome(nome2: string) {
        this._nome = nome2;
    }
}

//----------------------------------------------------------------------------------------
//Interfaces

interface InterfaceExemplo {
    atributo1: string;
    atributo2: number;
 
    print(): void;
}
 
class ClasseFilha implements InterfaceExemplo {
    atributo1: string = "Classe filha implementado InterfaceExemplo";
    atributo2: number = 42;
 
    print(): void {
        console.log(this.atributo1)
    }
}
