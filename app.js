'use strict';

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var shopSales = [];
function cookieShops(shopName, minCustomerPerHour, maxCustomerPerHour, avgCookieSalePerHour) {
  this.shopName = shopName;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookieSalePerHour = avgCookieSalePerHour;
  this.totalCookies = 0;
  this.totalCookiePerHour = [];
  this.customerPerHours = [];
  shopSales.push(this);
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
//header
var scheduleTr = document.getElementById('schedule');
var thEl = document.createElement('th');
thEl.textContent = 'Location';
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

for (var i = 0; i < shopSales.length; i++) {
  shopSales[i].render();
}
//forms
// document.getElementById('Add New Store').addEventListener('Submit', shopSales);
// function shopSales() {
//   event.preventDefault();
//   var userText = getElementById('form');
//   if (!event.target.storeName || !event.target.minNumCookies || !event.target.maxNumCookies) {
//     return alert('Field cannot be empty');
//   }
//   var firstField = storeName;
//   var secondField = minNumCookies;
//   var thirdField = maxNumCookies;
//
//   } if (!event.target.minNumCookies){
//
//
//   } if  (!event.target.maxNumCookies){
//
//   } else (!event.target.storeName)
//     elusertext.textContent =

// allNewData.prototype.render = function(){
//   var liEl = document.createElement(li);
//   liEl.textContent = '';
  //liEl.innerHTML??? =  + this.storeName + ' , have' + this.maxNumCookies + ' amount of cookies and this minmun ' + this.minNumCookies + ;
//   return liEl();
// };
// var Stores  = function(storeLocation, text) {
//   this.storeLocation = storeLocation;
//   this.text = text;
// };
