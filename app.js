'use strict';

//1st shop 1st and Pike	23	65	6.3
var pikeShop = {
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookieSalePerHour: 6.3,
  numCustomerPerHour: function() {
    return Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour;
  }
};

// 2nd shop SeaTac Airport	3	24	1.2
var SeaTac = {
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookieSalePerHour: 1.2,
  numCustomerPerHour: function() {
    return Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour;
  }
};

//Seattle Center	11	38	3.7
var downTown = {
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  avgCookieSalePerHour: 3.7,
  numCustomerPerHour: function() {
    return Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour;
  }
};

//Capitol Hill	20	38	2.3
var capitolHill = {
  minCustomerPerHour: 20,
  maxCustomerPerHour: 38,
  avgCookieSalePerHour: 2.3,
  numCustomerPerHour: function() {
    return Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour;
  }
};

//Alki	2	16	4.6
var alkiShop = {
  minCustomerPerHour: 2,
  maxCustomerPerHour: 16,
  avgCookieSalePerHour: 4.6,
  numCustomerPerHour: function() {
    return Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour;
  }
};
