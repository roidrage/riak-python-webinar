setTimeout(function() {
  $('pre').wrap('<div style="width: 100%; text-align: center;"/>');
  $('pre').css('display', 'inline-block').css('margin', '20px auto').css('text-align', 'left');

  $('.new-feature').parent().css('background', 'url(/file/new_and_improved.jpg) no-repeat').css('background-position', 'top right').css('background-size', '15%');
}, 2000);
