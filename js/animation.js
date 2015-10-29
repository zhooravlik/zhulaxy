/**
 * Created by Aliaksandr_Zhuraulio on 10/27/2015.
 */
$.widget('custom.animator', {
    options: {
        maxHue: 359
    },

    _init: function () {
        console.log('Animator: Initialization completed');
    },

    _animator: function (interval) {
        var $this = this.element,
            self = this;

        $this.animate({
            /*color: $.Color({hue: Math.random() * self.options.maxHue}),*/
            backgroundColor: $.Color({
                    hue: Math.random() * self.options.maxHue,
                    saturation: Math.random(),
                     lightness: Math.random(),
                     alpha: Math.random()
                    //alpha: 0.5
                }),
        }, interval);
    },

    animation: function (interval) {
        var $this = this.element,
            self = this;

        self._animator(interval);
        setInterval(function () {
            self._animator(interval);
        }, interval)
    },

    moveCenter: function () {
        var $this = this.element,
            delta = 50,
            flag = true;

        setInterval(function () {
            if (flag) {
                delta++;
                if (delta == 100) {
                    flag = false;
                }
            } else {
                delta--;
                if (delta == 0) {
                    flag = true;
                }
            }

            $this.css(
                'background',
                //'radial-gradient(' + deltaX + '% ' + deltaY + '%, transparent 0%, #090a0f 100%)'
                'radial-gradient(at ' + delta + '% bottom, transparent 0%, #090a0f 100%)'
                //'radial-gradient(at right ' + delta + '%, transparent 0%, #090a0f 100%)'
            );
            //console.log(deltaX + '||' + deltaY);
        }, 500);
    },

    pulsator: function (interval) {
        var $this = this.element,
            self = this;

        setInterval(function () {
            $this.effect('pulsate', {}, 500, function () {
                $this.removeAttr("style");//.hide().fadeIn();
            });
        }, interval)
    }
});

$(document).ready(function () {
    var html = $('html');
    html.animator();
    html.animator("animation", 5000);
    //html.animator("moveCenter");

    $("body").animator().animator("moveCenter");

    $('span').animator().animator("animation", 3000);
    $('.pulsator').animator().animator("pulsator", 3000);
});
