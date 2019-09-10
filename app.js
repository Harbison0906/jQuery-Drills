$(function () {
  $('#text-field').keyup(function () {
    if ($('#text-field').val().length > 0) {
      $('#btnSubmit').removeAttr('disabled');
    }
  })

});

$('#btnSubmit').click(function () {
  let text = $('#text-field').val();
  alert(text);
})