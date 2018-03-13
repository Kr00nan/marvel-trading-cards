function MarvelService(){
  var key = '?apikey=e44062bbc76b37176b08325d5265a0f3';
  var baseUrl = 'http://gateway.marvel.com/v1/public/'
  
  var marvelCharacters = [];
  var myCharacters = [];
  
  
  this.getMarvelCharacters = function(){
    //what should this function return
    return marvelCharacters;
  }
  
  this.getMyCharacters = function(){
    //what should this function return
    return myCharacters.length;
  }
  
  this.addToMyCharacters = function(id){
    // Finds character in 'marvelCharacters' array
    // and adds them to 'myCharacters' array
    debugger
    console.log(myCharacters);
    if(myCharacters.includes(id)) {
      console.log(`${id} is already a part of your team.`);
    } else {
      var index = marvelCharacters.indexOf(id);
      myCharacters.push(marvelCharacters.splice(index, 1));
    }
  }
  
  this.removeMyCharacter = function(id){
    // Finds character by id within 'myCharacter' array
    // and removes it.
    if(myCharacters.indexOf(id) != -1) {
      var index = myCharacters.indexOf(id);
      myCharacters.splice(index, 1);
      marvelCharacters.push(id);
    } else {
      console.log("Character not found!");
    }
  }
  
  
  this.getCharacters = function(callWhenDone){
    //Use &offset=Number to add pagination
    $.get(baseUrl + 'characters'+ key, function(response){
      marvelCharacters = response.data.results;
      // reference CallBack:
      // CardsController.ready(data)
      callWhenDone(marvelCharacters)
    })
  }
  
  
}
