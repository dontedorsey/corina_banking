/*global $, jQuery, alert*/
var main = function () {
  "use strict";
  $('.btn').click(function (event) {
    $('.jumbo-text').fadeOut(500, function () {
      $(this).fadeIn(700).text('Use the menu below to get started');
    });
  });
};

$(document).ready(main);
