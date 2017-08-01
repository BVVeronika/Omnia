var clock;
        
$(document).ready(function() {
            
    var clock;

            clock = $('.block-counter-clock').FlipClock({
                clockFace: 'MinuteCounter',
                autoStart: false,
                callbacks: {
                    stop: function() {
                        $('.message').html('The clock has stopped!')
                    }
                }
            });
                    
            clock.setTime(194);
            clock.setCountdown(true);
            clock.start();
});
