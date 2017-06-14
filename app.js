'use strict';

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var ShopSales = [];
function cookieShops(shopName, minCustomerPerHour, maxCustomerPerHour, avgCookieSalePerHour) {
  this.shopName = shopName;
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
  this.newCustomerPerHour();
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
  var shopTr = document.getElementById(this.shopName);
  var tdEl = document.createElement('td');
  tdEl.textContent = this.shopName;
  shopTr.appendChild(tdEl);
  for (var i = 0; i < hoursOpen.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiePerHour[i];
    shopTr.appendChild(tdEl);
  }
};

var scheduleTr = document.getElementById('schedule');
var thEl = document.createElement('th');
thEl.textContent = '';
scheduleTr.appendChild(thEl);
for (var i = 0; i < hoursOpen.length; i++) {
  var thEl = document.createElement('th');
  thEl.textContent = hoursOpen[i];
  scheduleTr.appendChild(thEl);
}

new cookieShops('pikeShop', 23, 65, 6.3);
new cookieShops('SeaTac', 3, 24, 1.2);
new cookieShops('downTown', 11, 38, 3.7);
new cookieShops('capitolHill', 20, 38, 2.3);
new cookieShops('alkiShop', 2, 16, 4.6);

for (var i = 0; i < ShopSales.length; i++) {
  ShopSales[i].render();
}
