'use strict';

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//1st shop 1st and Pike	23	65	6.3
var pikeShop = {
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookieSalePerHour: 6.3,
  totalCookies: 0,
  totalCookiePerHour: [],
  customerPerHours:[],
  numCustomerPerHour: function() {
    var temporary = [];
    for (var i = 0; i < hoursOpen.length; i++) {
      temporary.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour));
    }
    this.customerPerHours = temporary;
  },
  // cookiesPerHour: [],
  calCookieSoldEachHour: function() {
    this.numCustomerPerHour();
    var temporary = [];
    for (var i = 0; i < hoursOpen.length; i++) {
      temporary.push(Math.floor(this.avgCookieSalePerHour * this.customerPerHours[i]));
    }
    this.totalCookiePerHour = temporary;
  },
  render: function() {
    this.calCookieSoldEachHour();
    var pikeUl = document.getElementById('pikeShop');
    for (var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.totalCookiePerHour[i];
      pikeUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
  },
};

pikeShop.render();
console.log(pikeShop);

// 2nd shop SeaTac Airport	3	24	1.2
var SeaTac = {
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookieSalePerHour: 1.2,
  totalCookies:[],
  customerPerHours: [],
  numCustomerPerHour: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      return Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour;
    }
  },
  // cookiesPerHour:[],
  calCookieSoldEachHour: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      var totalCookiesSeaTac = SeaTac.avgCookieSalePerHour * SeaTac.numCustomerPerHour();
      SeaTac.totalCookies[i] = [totalCookiesSeaTac, hoursOpen[i]];
    }
  },
  render: function() {
    this.calCookieSoldEachHour();
    var SeaTacUl = document.getElementById('SeaTac');
    for (var i = 0; i < hours.length; i++) {
      //create an element
      var liEl = document.createElement('li');
      //give it content
      liEl.textContent = this.CookieSoldEachHour[i];
      //liEl.textContent = hours[i] + ': ' +this.CookieSoldEachHour[i] + 'cookies';
      //apend it to the DOM
      parent.appendChild(liEl);
    }
    //total
    //createElement
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    //
  },
};
SeaTac.render();
console.log(SeaTac);

//Seattle down	11	38	3.7
var downTown = {
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  avgCookieSalePerHour: 3.7,
  totalCookies:[],
  customerPerHours:[],
  numCustomerPerHour: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      return Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour;
    }
  },
  // cookiesPerHour:[],
  calCookieSoldEachHour: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      var totalCookies = downTown.avgCookieSalePerHour * downTown.numCustomerPerHour();
      downTown.totalCookies[i] = [totalCookies, hoursOpen[i]];
    }
  },
  render: function() {
    this.calCookieSoldEachHour();
    var downTownUl = document.getElementById('SeaTac');
    for (var i = 0; i < hours.length; i++) {
      //create an element
      var liEl = document.createElement('li');
      //give it content
      liEl.textContent = this.CookieSoldEachHour[i];
      //liEl.textContent = hours[i] + ': ' +this.CookieSoldEachHour[i] + 'cookies';
      //apend it to the DOM
      parent.appendChild(liEl);
    }
    //total
    //createElement
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    //
  },
};
downTown.render();
console.log(downTown);

//Capitol Hill	20	38	2.3
var capitolHill = {
  minCustomerPerHour: 20,
  maxCustomerPerHour: 38,
  avgCookieSalePerHour: 2.3,
  totalCookies:[],
  customerPerHours:[],
  numCustomerPerHour: function() {
    return Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour;
  },
  // cookiesPerHour:[],
  calCookieSoldEachHour: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      var totalCookiesCh = capitolHill.avgCookieSalePerHour * capitolHill.numCustomerPerHour();
      capitolHill.totalCookies[i] = [totalCookiesCh, hoursOpen[i]];
    }
  },
  render: function() {
    this.calCookieSoldEachHour();
    var capitolHillUl = document.getElementById('capitolHill');
    for (var i = 0; i < hours.length; i++) {
      //create an element
      var liEl = document.createElement('li');
      //give it content
      liEl.textContent = this.CookieSoldEachHour[i];
      //liEl.textContent = hours[i] + ': ' +this.CookieSoldEachHour[i] + 'cookies';
      //apend it to the DOM
      parent.appendChild(liEl);
    }
    //total
    //createElement
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    //
  },
};
capitolHill.render();
console.log(capitolHill);

//Alki	2	16	4.6
var alkiShop = {
  minCustomerPerHour: 2,
  maxCustomerPerHour: 16,
  avgCookieSalePerHour: 4.6,
  totalCookies:[],
  customerPerHours: [],
  numCustomerPerHour: function() {
    return Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour;
  },
  // cookiesPerHour:[],
  calCookieSoldEachHour: function(){
    for (var i = 0; i < hoursOpen.length; i++) {
      var totalCookiesAlki = alkiShop.avgCookieSalePerHour * alkiShop.numCustomerPerHour();
      alkiShop.totalCookies[i] = [totalCookiesAlki, hoursOpen[i]];
    }
  },
  render: function() {
    this.calCookieSoldEachHour();
    var alkiShopUl = document.getElementById('alkiShop');
    for (var i = 0; i < hours.length; i++) {
      //create an element
      var liEl = document.createElement('li');
      //give it content
      liEl.textContent = this.CookieSoldEachHour[i];
      //liEl.textContent = hours[i] + ': ' +this.CookieSoldEachHour[i] + 'cookies';
      //apend it to the DOM
      parent.appendChild(liEl);
    }
    //total
    //createElement
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    //
  },
};
alkiShop.render();
console.log(alkiShop);
