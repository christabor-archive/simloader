$.fn.simloader = function(options){
    var phrase   = $(this);
    var defaults = {
        delay: 800,
        transition: 200
    };
    var opts     = $.extend(defaults, options);
    var phrases  = phrase.find('li');
    var count    = phrases.length;
    var current  = 0;
    var advance  = null;
    var height   = parseInt(phrase.css('font-size')
                   .replace('px', ''), 10) + 10 + 'px';

    phrase.show();

    phrase.css({
        'margin': '0 0 0 -50%',
        'left': '50%',
        'height': height,
        'width': '100%',
        'position': 'relative'
    });

    phrases.hide().css({
        'list-style-type': 'none',
        'width': '100%',
        'position': 'absolute'
    });

    advance = setInterval(function(){
        phrases.eq(current).fadeIn(opts.transition);
        phrases.eq(current).prevAll().fadeOut(opts.transition);
        if(count === current) {
            clearInterval(advance);
        }
        // Increment the loader index
        current += 1;
    }, opts.delay);
};
