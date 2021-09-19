import Contact from './contact.js';
import Home from './Home.js';
import Product from './Product.js';
import { select, classNames, settings, titles } from './settings.js';

// TO DO LIST:
//   dodanie wyświetlania <h1>
//   handlebard nie działa !!! :)
//   dodanie aby widać było {{names}}
//   ustawienie wszystkiego

const app = {
  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    
    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);

        window.location.hash = '#/' + id;
      });
    }

    
  },

  activatePage: function(pageId){
    const thisApp = this;
    console.log(titles[pageId]);
    const titleWrapper = document.querySelector('#pages .title h2');
    titleWrapper.innerHTML = titles[pageId];
    //add class "active" to matching links
    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    for (let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
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
    console.log(thisApp.data.products);
    for(let productData in thisApp.data.products){
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }

  },

  initHome: function(){
    const thisApp = this;

    const homeWidget = document.querySelector(select.containerOf.home);
    thisApp.home = new Home(homeWidget);
  },

  initContact: function(){
    const thisApp = this;

    const contactWidget = document.querySelector(select.containerOf.contact);
    thisApp.contact = new Contact(contactWidget);

  },

  init: function() {
    const thisApp = this;

    thisApp.initPages();
    thisApp.initData();
    thisApp.initMenu();
    thisApp.initHome();
    thisApp.initContact();
  },


};

app.init ();