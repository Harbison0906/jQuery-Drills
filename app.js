$(function () {
  $('#text-field').keyup(function () {
    if ($('#text-field').val().length > 0) {
      $('#btnSubmit').removeAttr('disabled');
    // } else {
    //   $('#btnSubmit').addAttr('disbled');
    }
  })

});

// $('#btnSubmit').click(function () {

// })

$('form').after('<div id="box"></div>');
$('div').css({
  'background-color': 'gray',
  'height': '100px',
  'margin-top': '5px'
});

// $('#btnSubmit').click(function () {
//   let text = $('#text-field').val();
//   $('#box').html('<h2 id="heading"></h2>');
//   $('#heading').text(text);

//   $('#heading').bind('mouseover', function () {
//     let color = $(this).css("background-color");

//     $(this).css("background", "yellow");

//     $(this).bind("mouseout", function () {
//       $(this).css("background", color);
//     })
//   })
// });
let list = '<ul class="list"></ul>';
$('body').append(list);

$('#btnSubmit').click(function () {
  let listText = $('#text-field').val();
  $('.list').append('<li class="item">' + listText + '</li>');

  function rand() {
    return Math.floor(Math.random() * 255);
  }

  $('.item').click(function() {
    $(this).css({'color': 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')'});
  });

  $('.item').dblclick(function() {
    $('.list').remove(this);
  })
});
