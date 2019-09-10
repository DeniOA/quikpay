$('.otp input').on('keyup change', function(){
  $t = $(this);
  if ($t.val().length > 0) {
    $t.next().focus();
  }
});