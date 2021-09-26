const app = {

  initHamburger: function(){ 
    const hamburger = document.getElementById('hamburger');
    const navUL= document.getElementById('nav-ul');

    hamburger.addEventListener('click', () => {
      navUL.classList.toggle('show');
    });
  },
  

  init: function(){
    const thisApp = this;

    thisApp.initHamburger();
  }

};

app.init ();