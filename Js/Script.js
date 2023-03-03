$(document).ready(function(){
    // Nav
    $('img.Nav-icon').on('click', function(){
        $('.nav').addClass('active').toggle();
    });
    //tableMenu
    $('.tableMenu').each(function(){
        var $this = $(this);
        var $tab = $this.find('li.active');
        var $link = $tab.find('a');
        var $panel =$($link.attr('href'));

        $this.on('click', '.tableControl', function(e){
            e.preventDefault();
            var $link =$(this);
            var id =this.hash
           if(id && !$link.is('active')){
            $panel.removeClass('active');
            $tab.removeClass('active');

            $panel = $(id).addClass('active');
            $tab = $($link.parent().addClass('active'));
           }
        });
    });
    //Counter
    var a = 0;
$(window).scroll(function () {
    var oTop = $("#counter-box").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },

                {
                    duration: 950,
                    easing: "swing",
                    step: function () {
                        //$this.text(Math.ceil(this.countNum));
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en") + '+'
                        );
                        //alert('finished');
                    }
                }
            );
        });
        a = 1;
    }
});
 
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.fade').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},900);
                    
            }
            
        }); 
    
    });

});