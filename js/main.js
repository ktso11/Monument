console.log("js is loaded")
$(function(){

var inputField = $('.inputField').html('*');


$('form.leaveComment').on('submit', function(e){
    e.preventDefault();
    var inputF = $('.nameEmail input, .leaveComment textarea');
    console.log("Form working.")
    inputF.each(function(){
      if (inputF.val() === "") {
        $(this).addClass('error');
        $(this).next('p').css('display', 'inline');
      }
    })
})


  });




