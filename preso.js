setTimeout(function() {
  $('pre').wrap('<div style="width: 100%; text-align: center;"/>');
  $('pre').css('display', 'inline-block').css('margin', '20px auto').css('text-align', 'left');

  $('.new-feature').parent().css('background', 'url(/file/new_and_improved.jpg) no-repeat').css('background-position', '98% 2%').css('background-size', '15%');

  $('div.slide').append('<img src="/file/basho.png" class="bottom-left"/>')
  $('div.slide').append('<img src="/file/riak.png" class="bottom-right"/>')
}, 2000);
