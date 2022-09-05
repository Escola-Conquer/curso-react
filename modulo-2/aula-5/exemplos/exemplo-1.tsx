let numero: number;
numero = 10.5;

 //----------------------------------------------------------------------------------------

 let numero: number;
 numero = "frase"; //erro

 //----------------------------------------------------------------------------------------

 let fraseComum = "Frase que é uma string";
fraseComum = 42; //erro

//----------------------------------------------------------------------------------------
//Arrays

let varList: number[] = [1,2,3,4];

let varList: Array<number> = [1,2,3,4];

let varList: [number, string]
varList = [1,"Olá"];

//----------------------------------------------------------------------------------------
//Enum

enum Cor {
    AMARELO,
    AZUL,
    VERMELHO,
}
 
let color: Cor;
color = Cor.AZUL

//----------------------------------------------------------------------------------------
//Unknown

valorDesconhecido = 3;
valorDesconhecido = false;
valorDesconhecido = "Hello"

//----------------------------------------------------------------------------------------
//Null e Undefined

let u: undefined = undefined;
 
let m: null = null;

//----------------------------------------------------------------------------------------
//Void

function myFunction(): void {
    console.log("Eu não retorno valor algum")
}
