$('form').submit(function(e) {
  var empty = $(this).parent().find("input").filter(function() {
    return this.value === "";
  });
  if (!empty.length) {
    $('.wrap_popup').show();
    $('form input').not(':button, :submit').val('');
  }
  e.preventDefault();
});
function closePopup(divPopup) {
	$(divPopup).fadeOut(250);
}



$(function (){    
    $(".contact-submit").click(function(){
          var firstname = $('.first-name').val();  
          var secondname = $('.second-name').val(); 
          var email = $('.email').val();

       $(".popup-firstname").text(firstname);
       $(".popup-secondname").text(secondname);  
       $(".popup-email").text(email);  

    });
});


$('form').submit(function(e){
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "./post.php",   
      datatype: "text",
      data: {enter : $("#enter").val() },
      success: function(data) {
        console.log(data);
      }
    });
});
