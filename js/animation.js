/**
 * Created by Aliaksandr_Zhuraulio on 10/27/2015.
 */

/**
 * Changes background instantly
 * Oblivion: 1 day
 */
$.widget('custom.animateBackground', {
    options: {
        magicValue: 5000,
        maxHue: 359
    },

    /**
     * @private
     */
    _init: function () {
        var $this = this.element,
            self = this;

        self._animator();
        setInterval(function () {
            self._animator();
        }, self.options.magicValue);

        //TODO:add brighter when hovering onto stars/labels/window
    },

    _animator: function () {
        var $this = this.element,
            self = this;

        $this.animate({
                backgroundColor: $.Color({
                    hue: Math.random() * self.options.maxHue,
                    saturation: Math.random(),
                     lightness: Math.random(),
                     alpha: Math.random()
                    //alpha: 0.5
                })
            }, self.options.magicValue
        );
    }
});

$.widget('custom.animateLabel', {
    options: {
        magicValue: 2000,
        maxHue: 359
    },

    _init: function () {
        var $this = this.element,
            self = this;

        self._animator();
        setInterval(function () {
            self._animator();
        }, self.options.magicValue);
    },

    _animator: function () {
        var $this = this.element,
            self = this;

        $this.animate({
            backgroundColor: $.Color({hue: Math.random() * self.options.maxHue})
        }, self.options.magicValue);
    }
});

function pulsator(elem) {
    setInterval(function () {
        $(elem).effect( 'pulsate', {}, 500, function (elem){
            setTimeout(function() {
                $(elem).removeAttr( "style" ).hide().fadeIn();
            }, 1000);
        })
    }, 3000);
}

$(document).ready(function () {
    $('html').animateBackground();
    $('span').animateLabel();
    pulsator(".pulsator");
});
