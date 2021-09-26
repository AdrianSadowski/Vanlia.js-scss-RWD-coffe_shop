import Product from './Product.js';
import { settings } from './settings.js';



const app = {

  initPages: function () {
    //const thisApp = this;

  


  },

  initData: function(){
    const thisApp = this;

    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;

    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        thisApp.data.products = parsedResponse;
        thisApp.initMenu();
      });
  },

  initMenu: function(){
    const thisApp = this;
    for(let productData in thisApp.data.products){
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }

  },

 
  initHamburger: function(){
    const hamburger = document.getElementById('hamburger');
    const navUL= document.getElementById('nav-ul');

    hamburger.addEventListener('click', () => {
      navUL.classList.toggle('show');
    });

  },


  init: function() {
    const thisApp = this;

    //thisApp.initPages();
    thisApp.initData();
    thisApp.initMenu();
    //thisApp.initHome();
    //thisApp.initContact();
    thisApp.initHamburger();
  },



};

app.init ();