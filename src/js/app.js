import Product from './Product.js';
import { article, classNames, select, settings } from './settings.js';



const app = {

  initPages: function () {


    const links = document.querySelectorAll(select.nav.links);


    const articleAbout = document.querySelector(article.about);
    const articleProduct = document.querySelector(article.products);
    const articleContact = document.querySelector(article.contact);

    

    for (let link of links) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const clickedElement = this;
        
        articleAbout.classList.remove(classNames.pages.active);
        articleProduct.classList.remove(classNames.pages.active);
        articleContact.classList.remove(classNames.pages.active);
        
        const href = clickedElement.getAttribute('href');

        if (href == '#products') {
          articleProduct.classList.add(classNames.pages.active);
        } if (href == '#home') {
          articleAbout.classList.add(classNames.pages.active);
          articleProduct.classList.add(classNames.pages.active);
        } if (href == '#contact') {
          articleContact.classList.add(classNames.pages.active);
        }


        
      });

    }

  


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

    thisApp.initPages();
    thisApp.initData();
    thisApp.initMenu();
    //thisApp.initHome();
    //thisApp.initContact();
    thisApp.initHamburger();
  },



};

app.init ();