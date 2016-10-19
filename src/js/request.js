import $ from "jquery";

var API_DATA = $.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  data: {
    results: 13
  }
});

export { API_DATA };
