function CardsController() {

  var marvelService = new MarvelService()

  this.add = function add(id){
    // debugger
    console.log('characterId', id)
    if(marvelService.getMyCharacters() <= 5) {
      marvelService.addToMyCharacters(id);
    } else {
      console.log("You can only have 6 people on your team!");
    }
    var data = marvelService.getMarvelCharacters();
    // debugger
    ready(data);
  }

  marvelService.getCharacters(ready)

  function ready(data) {

    updateMarvel(data)
    
    function updateMarvel(list) {
      var elem = document.getElementById('marvel-characters')
      elem.innerHTML = ''
      var marvelTemplate = ''
      for (var i in list) {
        var character = list[i];
        character.thumbnail.path = character.thumbnail.path.replace('http:', '')
        marvelTemplate += `
        <div class="card float-left" style="width:200px; height:350px">
        <img class="card-img-top rounded-top" src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="card image">
        <div class="card-body">
        <h5 class="card-title">${character.name}</h5>
        </div>
        <button class="btn btn-primary" id="${character.id}" onclick="app.controllers.marvelController.add('${character.id}')">Add to Team</button>
        </div>
        `
        
      }
      elem.innerHTML = marvelTemplate
    }
  }
}
