import $ from 'jquery';

import { API_DATA } from './request'

function storeInfo(data) {
    console.log(data);
    for (var count = 1; count <= data.results.length; count++) {
        var image = data.results[count].picture.large;
        var firstname = data.results[count].name.first;
        var lastname = data.results[count].name.last;
        var email = data.results[count].email;
        var street = data.results[count].location.street;
        var city = data.results[count].location.city;
        var state = data.results[count].location.state
        var postcode = data.results[count].location.postcode;
        var phone = data.results[count].phone;
        var ssn = data.results[count].cell;

        var newHTML = `
            <div class="eachresult">
              <img src="${image}" alt="pic"/>
              <div class="name">${firstname} ${lastname}</div>
              <div class="email">${email}</div>
              <div class="address">${street}</div>
              <div class="address">${city}, ${state} ${postcode}</div>
              <div class="address" id="phone">${phone}</div>
              <div class="social">${ssn}</div>
            </div>        `;
        $(".randomusers").append(newHTML);
      };
};

function getInfo() {
  API_DATA.then(storeInfo);
};

getInfo();
