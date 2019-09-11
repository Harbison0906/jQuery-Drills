$(function () {
  $('#text-field').keyup(function () {
    if ($('#text-field').val().length > 0) {
      $('#btnSubmit').removeAttr('disabled');
    } else {
      $('#btnSubmit').addAttr('disbled');
    }
  })

});

// $('#btnSubmit').click(function () {
  let text = $('#text-field').val();
// })

$('form').after('<div id="box"></div>');
$('div').css({
  'background-color': 'gray',
  'height': '100px',
  'margin-top': '5px'
});

$('#btnSubmit').click(function() {
  $('<h2></h2>').append(text);
  $('#box').append('<h2></h2>');
  
});
