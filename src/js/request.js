import $ from "jquery";

var API_DATA = $.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  data: {
    results: 12
  }
});

export { API_DATA };
