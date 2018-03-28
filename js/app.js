var scores = {};// llevara el registro de los jugadores y sus puntos.
console.log(scores);
function createPlayer(object,name){
  object[name.toLowerCase()] = 0;
  console.log(object);

}

function addpoints(name, ponints){
scores[name.toLowerCase()] += ponints;
console.log(scores);
}

function printAllPoints() {
  var arrayPlayers = Object.keys(scores);
  var result = "";
  for(var k = 0; k < arrayPlayers.length; k++) {
    if(k === arrayPlayers.length - 1) { //Se verifica que estemos en el último index
      result += arrayPlayers[k] + ": " + scores[arrayPlayers[k]];//Si es el último índice no se deja la coma
    } else {
      result += arrayPlayers[k] + ": " + scores[arrayPlayers[k]] + ", ";//Si no es el último índice se deja la coma de separación
    }
  }
  return result;
}


createPlayer(scores, "ana");
addpoints("ana", 20);
addpoints("ana",30);

createPlayer(scores,"silvana");
addpoints("silvana", 30);
printAllPoints();
console.log(printAllPoints());
