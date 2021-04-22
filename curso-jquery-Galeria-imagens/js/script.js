$(document).ready(function(){
    
    $('a.galeria').click(function(){
         var img = $(this).find('img').attr('src');
         $('.divbox img').attr('src', img);

         $('.bgbox').fadeIn('fast');
         $('.divbox').fadeIn('fast');
        
         $('.divbox').css('height', '290px');
    });

    $('.bgbox, .divbox #fechar').click(function(){
        $('.bgbox').fadeOut('fast');
        $('.divbox').fadeOut('fast');
    });
});