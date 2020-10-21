$(document).ready(function(){
 $('.pick-menu_teaware').click(function(){
    $('.pick').siblings().hide();
    $('.pick-menu_tea').css({background:' rgba(0, 0, 0, 0.1)'});
    $('.pick-menu_dessert').css({background:' rgba(0, 0, 0, 0.1)'});
    $('.pick-menu_teaware').css({background:' var(--light_brown'});
    $('#pick-teaware').show();
 });
 $('.pick-menu_dessert').click(function(){
    $('.pick').siblings().hide();
    $('.pick-menu_tea').css({background:' rgba(0, 0, 0, 0.1)'});
    $('.pick-menu_teaware').css({background:' rgba(0, 0, 0, 0.1)'});
    $('.pick-menu_dessert').css({background:' var(--light_brown'});
    $('#pick-dessert').show();
    
});
$('.pick-menu_tea').click(function(){
    $('.pick').siblings().hide();
    $('.pick-menu_teaware').css({background:' rgba(0, 0, 0, 0.1)'});
    $('.pick-menu_dessert').css({background:' rgba(0, 0, 0, 0.1)'});
    $('.pick-menu_tea').css({background:' var(--light_brown'});
    $('#pick-tea').show();

 });




});