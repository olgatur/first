$(document).ready(function() {

    $('.col-sm-7:last a:eq(1)').on('click', function(){
         $('.overlay').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            ,},2000
        );
        $('.modal').animate(
            { opacity: 'toggle',
            height: 'toggle',
            marginTop: '150px'
        }, 3000
        )
    });
    
    $('.col-sm-3:not(.main_tel)').on('click', function(){
        $('.overlay').animate(
           {
               opacity: 'toggle',
               height: 'toggle'
           ,},2000
       );
       $('.modal').animate(
           { opacity: 'toggle',
           height: 'toggle',
           marginTop: '150px'
       }, 3000
       )
    });

    $('.close').on('click', function(){
        $('.overlay').animate({
            opacity: 'hide',
               height: 'hide'
           },3000
        );
        
       $('.modal').animate(
           { opacity: 'hide',
           height: 'hide',
           marginTop: '150px'
       }, 2500
       )
      
    });

});