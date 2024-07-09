const app = {
    tailleGrille: 7,  // 2
    init: function() {
      app.tailleGrille = 2;
      console.log("coucou");
    },
    afficheGrille: function() {
      console.log(app.tailleGrille);
    }
  };
  
  
  
  app.afficheGrille(); // > affiche 7
  app.init();          // > affiche coucou ! la valeur de app.tailleGrille a changée
  app.afficheGrille(); // > affiche 2
  
  
  
  
  
  
  const greg = [
    true,
    42,
    false,
  ];
  
  greg[0]; 
  
  const objGreg = {
    likeHawaiennePizza: true,
    age: 42,
    hasHair: false,
    hobbies: ["pizza", "ananas", "capoeira"]
  };
  
  objGreg.age
  
  const objMarc = {
    likeHawaiennePizza: false,
    age: 23,
    hasHair: true,
    hobbies: ["sport", "farniente", "dev"]
  };
  
  const gregLikePizza = true;
  const gregAge = 42;
  const gregHasHair = false;
  const gregHobby1 = "Kenobi";
  const gregHobby2 = "pizza";
  
  
  
  const listePersonne = [
    objGreg,
    objMarc
  ];