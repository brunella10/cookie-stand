'use strict';

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//1st shop 1st and Pike	23	65	6.3
var pikeShop = {
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookieSalePerHour: 6.3,
  totalCookies:[],
  numCustomerPerHour: function() {
    return Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour;
  }
};
for (var i = 0; i < hoursOpen.length; i++) {
  var totalCookiesPike = pikeShop.avgCookieSalePerHour * pikeShop.numCustomerPerHour();
  pikeShop.totalCookies[i] = [totalCookiesPike, hoursOpen[i]];
}

// 2nd shop SeaTac Airport	3	24	1.2
var SeaTac = {
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookieSalePerHour: 1.2,
  totalCookies:[],
  numCustomerPerHour: function() {
    return Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour;
  }
};
for (var i = 0; i < hoursOpen.length; i++) {
  var totalCookiesSeaTac = SeaTac.avgCookieSalePerHour * SeaTac.numCustomerPerHour();
  SeaTac.totalCookies[i] = [totalCookiesSeaTac, hoursOpen[i]];
}
//Seattle Center	11	38	3.7
var downTown = {
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  avgCookieSalePerHour: 3.7,
  totalCookies:[],
  numCustomerPerHour: function() {
    return Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour;
  }
};
for (var i = 0; i < hoursOpen.length; i++) {
  var totalCookies = downTown.avgCookieSalePerHour * downTown.numCustomerPerHour();
  downTown.totalCookies[i] = [totalCookies, hoursOpen[i]];
}
//Capitol Hill	20	38	2.3
var capitolHill = {
  minCustomerPerHour: 20,
  maxCustomerPerHour: 38,
  avgCookieSalePerHour: 2.3,
  totalCookies:[],
  numCustomerPerHour: function() {
    return Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour;
  }
};
for (var i = 0; i < hoursOpen.length; i++) {
  var totalCookiesCh = capitolHill.avgCookieSalePerHour * capitolHill.numCustomerPerHour();
  capitolHill.totalCookies[i] = [totalCookiesCh, hoursOpen[i]];
}

//Alki	2	16	4.6
var alkiShop = {
  minCustomerPerHour: 2,
  maxCustomerPerHour: 16,
  avgCookieSalePerHour: 4.6,
  totalCookies:[],
  numCustomerPerHour: function() {
    return Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour;
  }
};
for (var i = 0; i < hoursOpen.length; i++) {
  var totalCookiesAlki = alkiShop.avgCookieSalePerHour * alkiShop.numCustomerPerHour();
  alkiShop.totalCookies[i] = [totalCookiesAlki, hoursOpen[i]];
}
console.log(pikeShop, SeaTac, downTown, capitolHill, alkiShop);
