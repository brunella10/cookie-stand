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
    this.totalCookies = this.totalCookiePerHour.reduce(
      function(total, num){
        return total + num;
      }
  , 0);
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
  totalCookiePerHour: [],
  customerPerHours: [],
  numCustomerPerHour: function() {
    var temporary = [];
    for (var i = 0; i < hoursOpen.length; i++) {
      temporary.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour));
    }
    this.customerPerHours = temporary;
  },
  calCookieSoldEachHour: function() {
    this.numCustomerPerHour();
    var temporary = [];
    for (var i = 0; i < hoursOpen.length; i++) {
      temporary.push(Math.floor(this.avgCookieSalePerHour * this.customerPerHours[i]));
    }
    this.totalCookiePerHour = temporary;
    this.totalCookies = this.totalCookiePerHour.reduce(
      function(total, num){
        return total + num;
      }
  , 0);
  },
  render: function() {
    this.calCookieSoldEachHour();
    var SeaTacUl = document.getElementById('SeaTac');
    for (var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.totalCookiePerHour[i];
      SeaTacUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
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
  totalCookiePerHour: [],
  customerPerHours:[],
  numCustomerPerHour: function() {
    var temporary = [];
    for (var i = 0; i < hoursOpen.length; i++) {
      temporary.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour));
    }
    this.customerPerHours = temporary;
  },
  calCookieSoldEachHour: function() {
    this.numCustomerPerHour();
    var temporary = [];
    for (var i = 0; i < hoursOpen.length; i++) {
      temporary.push(Math.floor(this.avgCookieSalePerHour * this.customerPerHours[i]));
    }
    this.totalCookiePerHour = temporary;
    this.totalCookies = this.totalCookiePerHour.reduce(
      function(total, num){
        return total + num;
      }
  , 0);
  },
  render: function() {
    this.calCookieSoldEachHour();
    var downTownUl = document.getElementById('downTown');
    for (var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.totalCookiePerHour[i];
      downTownUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
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
    this.totalCookies = this.totalCookiePerHour.reduce(
      function(total, num){
        return total + num;
      }
  , 0);
  },
  render: function() {
    this.calCookieSoldEachHour();
    var capitolHillUl = document.getElementById('capitolHill');
    for (var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.totalCookiePerHour[i];
      capitolHillUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
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
  totalCookiePerHour:[],
  customerPerHours: [],
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
    this.totalCookies = this.totalCookiePerHour.reduce(
      function(total, num){
        return total + num;
      }
  , 0);
  },
  render: function() {
    this.calCookieSoldEachHour();
    var alkiShopUl = document.getElementById('alkiShop');
    for (var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.totalCookiePerHour[i];
      alkiShopUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
  },
};
alkiShop.render();
console.log(alkiShop);

var ShopSales = [];
function cookieShops(minCustomerPerHour, maxCustomerPerHour, avgCookieSalePerHour) {
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookieSalePerHour = avgCookieSalePerHour;
  this.totalCookies = 0;
  this.totalCookiePerHour = [];
  this.customerPerHours = [];
  ShopSales.push(this);
};
cookieShops.prototype.newCustomerPerHour = function() {
  var temporary = [];
  for (var i = 0; i < hoursOpen.length; i++) {
    temporary.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour));
  }
  this.customerPerHours = temporary;
};
cookieShops.prototype.calCookieSoldEachHour = function() {
  this.numCustomerPerHour();
  var temporary = [];
  for (var i = 0; i < hoursOpen.length; i++) {
    temporary.push(Math.floor(this.avgCookieSalePerHour * this.customerPerHours[i]));
  }
  this.totalCookiePerHour = temporary;
  this.totalCookies = this.totalCookiePerHour.reduce(
    function(total, num){
      return total + num;
    }
, 0);
};
cookieShops.prototype.render = function() {
  this.calCookieSoldEachHour();
  var pikeUl = document.getElementById('pikeShop');
  for (var i = 0; i < hoursOpen.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = this.totalCookiePerHour[i];
    pikeUl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
};
