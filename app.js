
// Creates initial 'app' object
// Which creates a 'marvelController' object from
// CardsController constructor

var app = {
  // this is here to demonstrate that we "could" have
  // a collection of controllers, not just one
 controllers: {
   marvelController: new CardsController()
 }
}
