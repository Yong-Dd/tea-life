/* hold button click */
$(document).ready(function(){

 $('.menu-hold').click(function(){
    $('.menu-slide').animate({
        "left":"+=200px"
    }).show();
    $('#slide-back').show();
    
 });
 $('#slide-back').click(function(){
     $('.menu-slide').animate({
         "left":"-=200px"
     },'slow');
     $('#slide-back').hide();
 });
 
});






/* inner menu toggle */
$(document).ready(function(){
    $('.menu-list_name1').click(function(){
        $('.menu-inner1').slideToggle('slow');
    });
    $('.menu-list_name2').click(function(){
        $('.menu-inner2').slideToggle('slow');
    });
    $('.menu-list_name3').click(function(){
        $('.menu-inner3').slideToggle('slow');
    });
});

