(function($) {
    var slide = function(ele,options) {
        var $ele = $(ele);
        var setting = {
        		
            speed: 1000,
    
            interval: 2000,
            
        };
       
        $.extend(true, setting, options);
        var states = [
            { $zIndex: 1, width: 220, height: 300, top: 89, left: 350},
            { $zIndex: 2, width: 230, height: 350, top: 59, left: 230},
            { $zIndex: 3, width: 270, height: 400, top: 35, left: 0}
           
        
        ];
    

        var $lis = $ele.find('li');
        var timer = null;

        // 事件
        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

      
        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }
})(jQuery);
function myFunction(x) {
  if (x.matches) { // If media query matches
    (function($) {
    var slide = function(ele,options) {
        var $ele = $(ele);
        var setting = {
                
            speed: 1000,
    
            interval: 2000,
            
        };
       
        $.extend(true, setting, options);
        var states = [
            { $zIndex: 1, width: 220, height: 300, top: 89, left: 70},
            { $zIndex: 2, width: 230, height: 350, top: 59, left: 75},
            { $zIndex: 3, width: 270, height: 400, top: 35, left: 0}
           
        
        ];
    

        var $lis = $ele.find('li');
        var timer = null;

        // 事件
        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

      
        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }
})(jQuery);
    
  } else {
   (function($) {
    var slide = function(ele,options) {
        var $ele = $(ele);
        var setting = {
                
            speed: 1000,
    
            interval: 2000,
            
        };
       
        $.extend(true, setting, options);
        var states = [
            { $zIndex: 1, width: 220, height: 300, top: 89, left: 350},
            { $zIndex: 2, width: 230, height: 350, top: 59, left: 230},
            { $zIndex: 3, width: 270, height: 400, top: 35, left: 0}
           
    
        ];
    

        var $lis = $ele.find('li');
        var timer = null;

        // 事件
        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

      
        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }
})(jQuery);
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

