//Alteração com mutação

var player = {score: 1, name: "José"};
player.score = 2;
//{score: 2, name: "José"}

//------------------------------------------------------------------------------------
//Alteração sem mutação

var player = {score: 1, name: "José"};
 
var newPlayer = {...player, score:2};
//{score: 2, name: "José"}
