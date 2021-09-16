export const select = {
  templateof: {
    homeWidget: '#template-home-widget',
    productList: '#template-products-widget',
    contactList: '#template-contact-widget',
  },
  containerOf: {
    menu: '#product-list',
    pages: '#pages',
    home: '.home-wrapper',
    contact: '.contact',
  },
  nav: {
    links: '.main-nav a',
  },
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
};

export const templates = {
  homeWidget: Handlebars.compile(document.querySelector(select.templateOf.homeWidget).innerHTML),
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.productList).innerHTML),
  contactList: Handlebars.compile(document.querySelector(select.templateOf.contactList).innerHTML),
};