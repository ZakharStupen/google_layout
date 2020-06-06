$(function(){
    $('.button').click(function(){
        $(this).toggleClass('is-active');

        if($(this).hasClass('is-active')){
            $('#services').show();
        }else{
            $('#services').hide();
        }
    });
});