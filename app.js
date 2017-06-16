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
  var shopTr = document.createElement('tr');
  var shopTable = document.getElementById('shops');
  shopTable.appendChild(shopTr);

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
function header(){
  var shopTable = document.getElementById('shops');
  var scheduleTr = document.createElement('tr');
  shopTable.appendChild(scheduleTr);

  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  scheduleTr.appendChild(thEl);
  for (var i = 0; i < hoursOpen.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hoursOpen[i];
    scheduleTr.appendChild(thEl);
  };
};

function FooterRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Total daily';
  trEl.appendChild(thEl);

  var totalOfTotals = 0;
  var hourlyTotal = 0;

  for (var i = 0; i < hours.length; i++) {
    hourlyTotal = 0;
    for (var j = 0; j < shopSales.length; j++){
      hourlyTotal += shopSales.cookiesEachHour[i];
      totalOfTotals += shopSales.cookiesEachHour[i];
    }
    thEl = document.createElement('th');
    thEl.textContent = totalDaily;
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = totalDaily;
  trEl.appendChild(thEl);

  schedule.appendChild(trEl);
};

new cookieShops('pikeShop', 23, 65, 6.3);
new cookieShops('SeaTac', 3, 24, 1.2);
new cookieShops('downTown', 11, 38, 3.7);
new cookieShops('capitolHill', 20, 38, 2.3);
new cookieShops('alkiShop', 2, 16, 4.6);

function renderAllLocations(){
  for (var i = 0; i < shopSales.length; i++) {
    shopSales[i].render();
  };
}

function manageForm(e){
  e.preventDefault();
  var storeName = e.target.storeName.value;
  var minCookies = parseInt(e.target.minNumCookies.value);
  var maxCookies = parseInt(e.target.maxNumCookies.value);
  var avg = parseFloat(e.target.average.value);

  new cookieShops(storeName, minCookies, maxCookies, avg);
  e.target.storeName.value = null;
  e.target.minNumCookies.value = null;
  e.target.maxNumCookies.value = null;
  e.target.average.value = null;

  var scheduleTr = document.getElementById('shops');
  scheduleTr.innerHTML = '';
  header();
  renderAllLocations();
}
header();
renderAllLocations();
var storeForm = document.getElementById('storeForm');
storeForm.addEventListener('submit', manageForm);

  // forms= from here I did somthing that broke the code.
  // I need a footer function to put the totalCookies*hoursOpen*cookieShops
  //
  // document.getElementById('Submit').addEventListener('Submit', shopSales);
  // function newStore()
  //   event.preventDefault();
  //   var userText = getElementById('form');
  //   if (!event.target.storeName || !event.target.minNumCookies || !event.target.maxNumCookies) {
  //     return alert('Field cannot be empty');
  //   } if (!event.target.minNumCookies){
  //
  //   } if (!event.target.maxNumCookies){
  //
  //   } else (!event.target.storeName)
  //     userText.textContent =
  //   };
  //
  //     var firstField = storeName;
  //     var secondField = minNumCookies;
  //     var thirdField = maxNumCookies;
  // newStore.prototype.render = function(){
  //   var liEl = document.createElement(li);
  //   liEl.textContent = '';
  //   liEl.innerHTML = '';
  // };
  // var Stores  = function(storeLocation, text) {
  //   this.storeLocation = storeLocation;
  //   this.text = text;
  // };
