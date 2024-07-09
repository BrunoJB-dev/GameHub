const app = {
    gridSize: 8,
    pixelSize: 15,
    pixelClass: "empty-color",
    init: function() {
      console.log('initialization in progress ...');
      app.displayGrid();
      app.displayForm();
      // écrire du code pour créer le formulaire
  
      const buttonColorElList = document.querySelectorAll('.button-color');
      for (const currentButtonColor of buttonColorElList)
      {
        currentButtonColor.addEventListener('click', app.handleColorBtnClick);
      }
    },
    displayForm: function() {
      const headerEl = document.createElement('header');
  
      const formEl = document.createElement('form');
      formEl.addEventListener('submit', app.handleConfigFormSubmit)
      formEl.classList.add('configuration');
  
      const sizeInputEl = document.createElement('input');
      sizeInputEl.type = 'number';
      sizeInputEl.id = 'size-grid';
      sizeInputEl.placeholder = 'Taille de la grille';
  
      const widthInputEl = document.createElement('input');
      widthInputEl.type = 'number';
      widthInputEl.id = 'width-pixel';
      widthInputEl.placeholder = 'Taille des pixels';
  
      const buttonEl = document.createElement('button');
      buttonEl.innerText = 'Valider';
  
      formEl.append(sizeInputEl, widthInputEl, buttonEl);
  
      headerEl.appendChild(formEl);
  
      const bodyEl = document.querySelector('body');
      bodyEl.prepend(headerEl);
    },
    displayGrid: function() {
      // on ajoutera nos ligne dans la div#invader
      const divInvaderEl = document.querySelector('#invader');
      // vider le contenu
      divInvaderEl.innerHTML = "";
  
  
      // créer la grille
  
      // ajouter une ligne
      for (let currentRowNumber = 0; currentRowNumber < app.gridSize; currentRowNumber++)
      {
        // création d'une ligne
        const divRowEl = document.createElement('div');
        divRowEl.classList.add('row');
    
        /* ( code exécuté 1 fois avant la boucle ;  condition d'exécution du code  ;  code exécuté à la fin de la boucle ) */
        for (let currentPixelNumber = app.gridSize; currentPixelNumber > 0; currentPixelNumber--)
        {
          // création de plusieurs pixels ( grace à la boucle )
          // dans une ligne
          const pixelSpanEl = app.createPixel();
  
          // ajout du pixel à la ligne que l'on est en train de créer
          divRowEl.appendChild(pixelSpanEl);
        }
    
          // ajouter la ligne à la div#invader
        divInvaderEl.appendChild(divRowEl);
      }
    },
    createPixel: function() {
      const newPixel = document.createElement('span');
      newPixel.classList.add('pixel');
      newPixel.addEventListener('click', app.handlePixelClick);
  
      newPixel.style.width = app.pixelSize + "px";
      newPixel.style.height = app.pixelSize + "px";
  
      return newPixel;
    },
    handleColorBtnClick: function(e) {
      const clickedColorBtnEl = e.currentTarget;
      app.pixelClass = clickedColorBtnEl.id;
  
      const buttonColorElList = document.querySelectorAll('.button-color');
      for (const currentButtonColor of buttonColorElList)
      {
        currentButtonColor.classList.remove('current-color');
      }
      clickedColorBtnEl.classList.add('current-color');
    },
    handleConfigFormSubmit: function(evt) {
      console.log('soumission du formulaire');
      // evt.preventDefault empeche le comportement par défaut
      // ici pour la soumission d'un formulaire
      // on empeche le navigateur d'envoyer les données et donc de recharger la page
      // ( si il n'y a pas de propriété c'est la page actuelle qui est rechargée )
      evt.preventDefault();
      // récupérer l'élément input
      const inputGridSizeEl = document.querySelector('#size-grid');
  
      // modifier app.gridSize avec la valeur saisie dans l'input
      app.gridSize = inputGridSizeEl.value;
      
      const inputPixelWidthEl = document.querySelector('#width-pixel');
  
      // modifier app.gridSize avec la valeur saisie dans l'input
      app.pixelSize = inputPixelWidthEl.value;
  
      // todo vérifier les valeurs saisies 
      app.displayGrid();
    },
    handlePixelClick: function(event) {
      console.log('clicked');
      // currentTarget nous permet de récupérer l'élément, 
      // sur lequel on a ajouté l'eventListener 
      // et qui a déclenché l'exécution du code
      const clickedPixelEl = event.currentTarget;
  
      // supprimer toutes les classes
      clickedPixelEl.className = '';
  
      clickedPixelEl.classList.add('pixel');
      clickedPixelEl.classList.add(app.pixelClass);
      // si la case est noire ( il n'y a la classe plain-color )
      // if (clickedPixelEl.classList.contains("plain-color")) {
      //   clickedPixelEl.classList.remove('plain-color');
      // }
      // else {
      //   // sinon on ajoute la classe
      //   clickedPixelEl.classList.add('plain-color');
      // }
    }
  };
  
  app.init();