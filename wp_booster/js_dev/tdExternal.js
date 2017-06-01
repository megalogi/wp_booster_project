
// jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return jQuery.easing[jQuery.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a+c:-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a+c:
    b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a+c:-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a*a+c:b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,a,c,b,d){return-b*Math.cos(a/
    d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return 0==a?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){return 0==a?c:a==d?c+b:1>(a/=d/2)?b/2*Math.pow(2,10*(a-1))+c:b/2*(-Math.pow(2,-10*--a)+2)+c},easeInCirc:function(e,a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*
    a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){return 1>(a/=d/2)?-b/2*(Math.sqrt(1-a*a)-1)+c:b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==a)return c;if(1==(a/=d))return c+b;f||(f=0.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f))+c},easeOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==a)return c;if(1==
    (a/=d))return c+b;f||(f=0.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==a)return c;if(2==(a/=d/2))return c+b;f||(f=d*0.3*1.5);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return 1>a?-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+c:0.5*g*Math.pow(2,-10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInBack:function(e,a,c,b,d,f){void 0==
    f&&(f=1.70158);return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return 1>(a/=d/2)?b/2*a*a*(((f*=1.525)+1)*a-f)+c:b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-jQuery.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=d)<1/2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?
    b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(e,a,c,b,d){return a<d/2?0.5*jQuery.easing.easeInBounce(e,2*a,0,b,d)+c:0.5*jQuery.easing.easeOutBounce(e,2*a-d,0,b,d)+0.5*b+c}});



/*
 * Supersubs v0.3b - jQuery plugin
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 *
 * This plugin automatically adjusts submenu widths of suckerfish-style menus to that of
 * their longest list item children. If you use this, please expect bugs and report them
 * to the jQuery Google Group with the word 'Superfish' in the subject line.
 *
 */

(function($){ // $ will refer to jQuery within this closure

    $.fn.supersubs = function(options){
        var opts = $.extend({}, $.fn.supersubs.defaults, options);
        // return original object to support chaining
        return this.each(function() {
            // cache selections
            var $$ = $(this);
            // support metadata
            var o = $.meta ? $.extend({}, opts, $$.data()) : opts;
            // cache all ul elements and show them in preparation for measurements
            var $ULs = $$.find('ul').show();
            // get the font size of menu.
            // .css('fontSize') returns various results cross-browser, so measure an em dash instead
            var fontsize = $('<li id="menu-fontsize">&#8212;</li>').css({
                'padding' : 0,
                'position' : 'absolute',
                'top' : '-999em',
                'width' : 'auto'
            }).appendTo($$)[0].clientWidth; //clientWidth is faster than .width()
            // remove em dash
            $('#menu-fontsize').remove();
            // loop through each ul in menu
            $ULs.each(function(i) {
                // cache this ul
                var $ul = $(this);
                // get all (li) children of this ul
                var $LIs = $ul.children();
                // get all anchor grand-children
                var $As = $LIs.children('a');
                // force content to one line and save current float property
                var liFloat = $LIs.css('white-space','nowrap').css('float');
                // remove width restrictions and floats so elements remain vertically stacked
                $ul.add($LIs).add($As).css({
                    'float' : 'none',
                    'width'	: 'auto'
                });
                // this ul will now be shrink-wrapped to longest li due to position:absolute
                // so save its width as ems.
                var emWidth = $ul[0].clientWidth / fontsize;
                // add more width to ensure lines don't turn over at certain sizes in various browsers
                emWidth += o.extraWidth;
                // restrict to at least minWidth and at most maxWidth
                if (emWidth > o.maxWidth)		{ emWidth = o.maxWidth; }
                else if (emWidth < o.minWidth)	{ emWidth = o.minWidth; }
                emWidth += 'em';
                // set ul to width in ems
                $ul.css('width',emWidth);
                // restore li floats to avoid IE bugs
                // set li width to full width of this ul
                // revert white-space to normal
                $LIs.css({
                    'float' : liFloat,
                    'width' : '100%',
                    'white-space' : 'normal'
                })
                // update offset position of descendant ul to reflect new width of parent.
                // set it to 100% in case it isn't already set to this in the CSS
                    .each(function(){
                        var $childUl = $(this).children('ul');
                        var offsetDirection = $childUl.css('left') !== undefined ? 'left' : 'right';
                        $childUl.css(offsetDirection,'100%');
                    });
            }).hide();

        });
    };
    // expose defaults
    $.fn.supersubs.defaults = {
        minWidth		: 9,		// requires em unit.
        maxWidth		: 25,		// requires em unit.
        extraWidth		: 0			// extra width can ensure lines don't sometimes turn over due to slight browser differences in how they round-off values
    };

})(jQuery); // plugin code ends




/*
 * iosSlider - http://iosscripts.com/iosslider/
 *
 * Touch Enabled, Responsive jQuery Horizontal Content Slider/Carousel/Image Gallery Plugin
 *
 * A jQuery plugin which allows you to integrate a customizable, cross-browser
 * content slider into your web presence. Designed for use as a content slider, carousel,
 * scrolling website banner, or image gallery.
 *
 * Copyright (c) 2013 Marc Whitbread
 *
 * Version: v1.3.43 (06/17/2014)
 * Minimum requirements: jQuery v1.4+
 *
 * Advanced requirements:
 * 1) jQuery bind() click event override on slide requires jQuery v1.6+
 *
 * Terms of use:
 *
 * 1) iosSlider is licensed under the Creative Commons – Attribution-NonCommercial 3.0 License.
 * 2) You may use iosSlider free for personal or non-profit purposes, without restriction.
 *	  Attribution is not required but always appreciated. For commercial projects, you
 *	  must purchase a license. You may download and play with the script before deciding to
 *	  fully implement it in your project. Making sure you are satisfied, and knowing iosSlider
 *	  is the right script for your project is paramount.
 * 3) You are not permitted to make the resources found on iosscripts.com available for
 *    distribution elsewhere "as is" without prior consent. If you would like to feature
 *    iosSlider on your site, please do not link directly to the resource zip files. Please
 *    link to the appropriate page on iosscripts.com where users can find the download.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/*
 * iosSlider - http://iosscripts.com/iosslider/
 *
 * Touch Enabled, Responsive jQuery Horizontal Content Slider/Carousel/Image Gallery Plugin
 *
 * A jQuery plugin which allows you to integrate a customizable, cross-browser
 * content slider into your web presence. Designed for use as a content slider, carousel,
 * scrolling website banner, or image gallery.
 *
 * Copyright (c) 2013 Marc Whitbread
 *
 * Version: v1.3.43 (06/17/2014)
 * Minimum requirements: jQuery v1.4+
 *
 * Advanced requirements:
 * 1) jQuery bind() click event override on slide requires jQuery v1.6+
 *
 * Terms of use:
 *
 * 1) iosSlider is licensed under the Creative Commons – Attribution-NonCommercial 3.0 License.
 * 2) You may use iosSlider free for personal or non-profit purposes, without restriction.
 *	  Attribution is not required but always appreciated. For commercial projects, you
 *	  must purchase a license. You may download and play with the script before deciding to
 *	  fully implement it in your project. Making sure you are satisfied, and knowing iosSlider
 *	  is the right script for your project is paramount.
 * 3) You are not permitted to make the resources found on iosscripts.com available for
 *    distribution elsewhere "as is" without prior consent. If you would like to feature
 *    iosSlider on your site, please do not link directly to the resource zip files. Please
 *    link to the appropriate page on iosscripts.com where users can find the download.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 */

;(function($) {

    /* global variables */
    var scrollbarNumber = 0;
    var xScrollDistance = 0;
    var yScrollDistance = 0;
    var scrollIntervalTime = 10;
    var scrollbarDistance = 0;
    var isTouch = 'ontouchstart' in window || (navigator.msMaxTouchPoints > 0);
    var supportsOrientationChange = 'onorientationchange' in window;
    var isWebkit = false;
    var has3DTransform = false;
    var isIe7 = false;
    var isIe8 = false;
    var isIe9 = false;
    var isIe = false;
    var isGecko = false;
    var grabOutCursor = 'pointer';
    var grabInCursor = 'pointer';
    var onChangeEventLastFired = new Array();
    var autoSlideTimeouts = new Array();
    var iosSliders = new Array();
    var iosSliderSettings = new Array();
    var isEventCleared = new Array();
    var slideTimeouts = new Array();
    var activeChildOffsets = new Array();
    var activeChildInfOffsets = new Array();
    var infiniteSliderOffset = new Array();
    var sliderMin = new Array();
    var sliderMax = new Array();
    var sliderAbsMax = new Array();
    var touchLocks = new Array();

    /* private functions */
    var helpers = {

        showScrollbar: function(settings, scrollbarClass) {

            if(settings.scrollbarHide) {
                $('.' + scrollbarClass).css({
                    opacity: settings.scrollbarOpacity,
                    filter: 'alpha(opacity:' + (settings.scrollbarOpacity * 100) + ')'
                });
            }

        },

        hideScrollbar: function(settings, scrollTimeouts, j, distanceOffsetArray, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber) {

            if(settings.scrollbar && settings.scrollbarHide) {

                for(var i = j; i < j+25; i++) {

                    scrollTimeouts[scrollTimeouts.length] = helpers.hideScrollbarIntervalTimer(scrollIntervalTime * i, distanceOffsetArray[j], ((j + 24) - i) / 24, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber, settings);

                }

            }

        },

        hideScrollbarInterval: function(newOffset, opacity, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber, settings) {

            scrollbarDistance = (newOffset * -1) / (sliderMax[sliderNumber]) * (stageWidth - scrollMargin - scrollBorder - scrollbarWidth);

            helpers.setSliderOffset('.' + scrollbarClass, scrollbarDistance);

            $('.' + scrollbarClass).css({
                opacity: settings.scrollbarOpacity * opacity,
                filter: 'alpha(opacity:' + (settings.scrollbarOpacity * opacity * 100) + ')'
            });

        },

        slowScrollHorizontalInterval: function(node, slideNodes, newOffset, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, activeChildOffset, originalOffsets, childrenOffsets, infiniteSliderWidth, numberOfSlides, slideNodeOuterWidths, sliderNumber, centeredSlideOffset, endOffset, settings) {

            if(settings.infiniteSlider) {

                if((newOffset <= (sliderMax[sliderNumber] * -1)) || (newOffset <= (sliderAbsMax[sliderNumber] * -1))) {

                    var scrollerWidth = $(node).width();

                    if(newOffset <= (sliderAbsMax[sliderNumber] * -1)) {

                        var sum = originalOffsets[0] * -1;
                        $(slideNodes).each(function(i) {

                            helpers.setSliderOffset($(slideNodes)[i], sum + centeredSlideOffset);
                            if(i < childrenOffsets.length) {
                                childrenOffsets[i] = sum * -1;
                            }
                            sum = sum + slideNodeOuterWidths[i];

                        });

                        newOffset = newOffset + childrenOffsets[0] * -1;
                        sliderMin[sliderNumber] = childrenOffsets[0] * -1 + centeredSlideOffset;
                        sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;
                        infiniteSliderOffset[sliderNumber] = 0;

                    }

                    while(newOffset <= (sliderMax[sliderNumber] * -1)) {

                        var lowSlideNumber = 0;
                        var lowSlideOffset = helpers.getSliderOffset($(slideNodes[0]), 'x');
                        $(slideNodes).each(function(i) {

                            if(helpers.getSliderOffset(this, 'x') < lowSlideOffset) {
                                lowSlideOffset = helpers.getSliderOffset(this, 'x');
                                lowSlideNumber = i;
                            }

                        });

                        var tempOffset = sliderMin[sliderNumber] + scrollerWidth;
                        helpers.setSliderOffset($(slideNodes)[lowSlideNumber], tempOffset);

                        sliderMin[sliderNumber] = childrenOffsets[1] * -1 + centeredSlideOffset;
                        sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;

                        childrenOffsets.splice(0, 1);
                        childrenOffsets.splice(childrenOffsets.length, 0, tempOffset * -1 + centeredSlideOffset);

                        infiniteSliderOffset[sliderNumber]++;

                    }

                }

                if((newOffset >= (sliderMin[sliderNumber] * -1)) || (newOffset >= 0)) {

                    var scrollerWidth = $(node).width();

                    if(newOffset > 0) {

                        var sum = originalOffsets[0] * -1;
                        $(slideNodes).each(function(i) {

                            helpers.setSliderOffset($(slideNodes)[i], sum + centeredSlideOffset);
                            if(i < childrenOffsets.length) {
                                childrenOffsets[i] = sum * -1;
                            }
                            sum = sum + slideNodeOuterWidths[i];

                        });

                        newOffset = newOffset - childrenOffsets[0] * -1;
                        sliderMin[sliderNumber] = childrenOffsets[0] * -1 + centeredSlideOffset;
                        sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;
                        infiniteSliderOffset[sliderNumber] = numberOfSlides;

                        while(((childrenOffsets[0] * -1 - scrollerWidth + centeredSlideOffset) > 0)) {

                            var highSlideNumber = 0;
                            var highSlideOffset = helpers.getSliderOffset($(slideNodes[0]), 'x');
                            $(slideNodes).each(function(i) {

                                if(helpers.getSliderOffset(this, 'x') > highSlideOffset) {
                                    highSlideOffset = helpers.getSliderOffset(this, 'x');
                                    highSlideNumber = i;
                                }

                            });

                            var tempOffset = sliderMin[sliderNumber] - slideNodeOuterWidths[highSlideNumber];
                            helpers.setSliderOffset($(slideNodes)[highSlideNumber], tempOffset);

                            childrenOffsets.splice(0, 0, tempOffset * -1 + centeredSlideOffset);
                            childrenOffsets.splice(childrenOffsets.length-1, 1);

                            sliderMin[sliderNumber] = childrenOffsets[0] * -1 + centeredSlideOffset;
                            sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;

                            infiniteSliderOffset[sliderNumber]--;
                            activeChildOffsets[sliderNumber]++;

                        }

                    }

                    while(newOffset > (sliderMin[sliderNumber] * -1)) {

                        var highSlideNumber = 0;
                        var highSlideOffset = helpers.getSliderOffset($(slideNodes[0]), 'x');
                        $(slideNodes).each(function(i) {

                            if(helpers.getSliderOffset(this, 'x') > highSlideOffset) {
                                highSlideOffset = helpers.getSliderOffset(this, 'x');
                                highSlideNumber = i;
                            }

                        });

                        var tempOffset = sliderMin[sliderNumber] - slideNodeOuterWidths[highSlideNumber];
                        helpers.setSliderOffset($(slideNodes)[highSlideNumber], tempOffset);

                        childrenOffsets.splice(0, 0, tempOffset * -1 + centeredSlideOffset);
                        childrenOffsets.splice(childrenOffsets.length-1, 1);

                        sliderMin[sliderNumber] = childrenOffsets[0] * -1 + centeredSlideOffset;
                        sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;

                        infiniteSliderOffset[sliderNumber]--;

                    }

                }

            }

            var slideChanged = false;
            var newChildOffset = helpers.calcActiveOffset(settings, newOffset, childrenOffsets, stageWidth, infiniteSliderOffset[sliderNumber], numberOfSlides, activeChildOffset, sliderNumber);
            var tempOffset = (newChildOffset + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;

            if(settings.infiniteSlider) {

                if(tempOffset != activeChildInfOffsets[sliderNumber]) slideChanged = true;

            } else {

                if(newChildOffset != activeChildOffsets[sliderNumber]) slideChanged = true;

            }

            if(slideChanged) {

                var args = new helpers.args('change', settings, node, $(node).children(':eq(' + tempOffset + ')'), tempOffset, endOffset);
                $(node).parent().data('args', args);

                if(settings.onSlideChange != '') {

                    settings.onSlideChange(args);

                }

            }

            activeChildOffsets[sliderNumber] = newChildOffset;
            activeChildInfOffsets[sliderNumber] = tempOffset;

            newOffset = Math.floor(newOffset);

            if(sliderNumber != $(node).parent().data('args').data.sliderNumber) return true;
            helpers.setSliderOffset(node, newOffset);

            if(settings.scrollbar) {

                scrollbarDistance = Math.floor((newOffset * -1 - sliderMin[sliderNumber] + centeredSlideOffset) / (sliderMax[sliderNumber] - sliderMin[sliderNumber] + centeredSlideOffset) * (scrollbarStageWidth - scrollMargin - scrollbarWidth));
                var width = scrollbarWidth - scrollBorder;

                if(newOffset >= (sliderMin[sliderNumber] * -1 + centeredSlideOffset)) {

                    width = scrollbarWidth - scrollBorder - (scrollbarDistance * -1);

                    helpers.setSliderOffset($('.' + scrollbarClass), 0);

                    $('.' + scrollbarClass).css({
                        width: width + 'px'
                    });

                } else if(newOffset <= ((sliderMax[sliderNumber] * -1) + 1)) {

                    width = scrollbarStageWidth - scrollMargin - scrollBorder - scrollbarDistance;

                    helpers.setSliderOffset($('.' + scrollbarClass), scrollbarDistance);

                    $('.' + scrollbarClass).css({
                        width: width + 'px'
                    });

                } else {

                    helpers.setSliderOffset($('.' + scrollbarClass), scrollbarDistance);

                    $('.' + scrollbarClass).css({
                        width: width + 'px'
                    });

                }

            }

        },

        slowScrollHorizontal: function(node, slideNodes, scrollTimeouts, scrollbarClass, xScrollDistance, yScrollDistance, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, currentEventNode, snapOverride, centeredSlideOffset, settings) {

            var nodeOffset = helpers.getSliderOffset(node, 'x');
            var distanceOffsetArray = new Array();
            var xScrollDistanceArray = new Array();
            var snapDirection = 0;
            var maxSlideVelocity = 25 / 1024 * stageWidth;
            var changeSlideFired = false;
            frictionCoefficient = settings.frictionCoefficient;
            elasticFrictionCoefficient = settings.elasticFrictionCoefficient;
            snapFrictionCoefficient = settings.snapFrictionCoefficient;

            if((xScrollDistance > settings.snapVelocityThreshold) && settings.snapToChildren && !snapOverride) {
                snapDirection = 1;
            } else if((xScrollDistance < (settings.snapVelocityThreshold * -1)) && settings.snapToChildren && !snapOverride) {
                snapDirection = -1;
            }

            if(xScrollDistance < (maxSlideVelocity * -1)) {
                xScrollDistance = maxSlideVelocity * -1;
            } else if(xScrollDistance > maxSlideVelocity) {
                xScrollDistance = maxSlideVelocity;
            }

            if(!($(node)[0] === $(currentEventNode)[0])) {
                snapDirection = snapDirection * -1;
                xScrollDistance = xScrollDistance * -2;
            }

            var tempInfiniteSliderOffset = infiniteSliderOffset[sliderNumber];

            if(settings.infiniteSlider) {

                var tempSliderMin = sliderMin[sliderNumber];
                var tempSliderMax = sliderMax[sliderNumber];

            }

            var tempChildrenOffsets = new Array();
            var tempSlideNodeOffsets = new Array();

            for(var i = 0; i < childrenOffsets.length; i++) {

                tempChildrenOffsets[i] = childrenOffsets[i];

                if(i < slideNodes.length) {
                    tempSlideNodeOffsets[i] = helpers.getSliderOffset($(slideNodes[i]), 'x');
                }

            }

            while((xScrollDistance > 1) || (xScrollDistance < -1)) {

                xScrollDistance = xScrollDistance * frictionCoefficient;
                nodeOffset = nodeOffset + xScrollDistance;

                if(((nodeOffset > (sliderMin[sliderNumber] * -1)) || (nodeOffset < (sliderMax[sliderNumber] * -1))) && !settings.infiniteSlider) {
                    xScrollDistance = xScrollDistance * elasticFrictionCoefficient;
                    nodeOffset = nodeOffset + xScrollDistance;
                }

                if(settings.infiniteSlider) {

                    if(nodeOffset <= (tempSliderMax * -1)) {

                        var scrollerWidth = $(node).width();

                        var lowSlideNumber = 0;
                        var lowSlideOffset = tempSlideNodeOffsets[0];
                        for(var i = 0; i < tempSlideNodeOffsets.length; i++) {

                            if(tempSlideNodeOffsets[i] < lowSlideOffset) {
                                lowSlideOffset = tempSlideNodeOffsets[i];
                                lowSlideNumber = i;
                            }

                        }

                        var newOffset = tempSliderMin + scrollerWidth;
                        tempSlideNodeOffsets[lowSlideNumber] = newOffset;

                        tempSliderMin = tempChildrenOffsets[1] * -1 + centeredSlideOffset;
                        tempSliderMax = tempSliderMin + scrollerWidth - stageWidth;

                        tempChildrenOffsets.splice(0, 1);
                        tempChildrenOffsets.splice(tempChildrenOffsets.length, 0, newOffset * -1 + centeredSlideOffset);

                        tempInfiniteSliderOffset++;

                    }

                    if(nodeOffset >= (tempSliderMin * -1)) {

                        var scrollerWidth = $(node).width();

                        var highSlideNumber = 0;
                        var highSlideOffset = tempSlideNodeOffsets[0];
                        for(var i = 0; i < tempSlideNodeOffsets.length; i++) {

                            if(tempSlideNodeOffsets[i] > highSlideOffset) {
                                highSlideOffset = tempSlideNodeOffsets[i];
                                highSlideNumber = i;
                            }

                        }

                        var newOffset = tempSliderMin - slideNodeOuterWidths[highSlideNumber];
                        tempSlideNodeOffsets[highSlideNumber] = newOffset;

                        tempChildrenOffsets.splice(0, 0, newOffset * -1 + centeredSlideOffset);
                        tempChildrenOffsets.splice(tempChildrenOffsets.length-1, 1);

                        tempSliderMin = tempChildrenOffsets[0] * -1 + centeredSlideOffset;
                        tempSliderMax = tempSliderMin + scrollerWidth - stageWidth;

                        tempInfiniteSliderOffset--;

                    }

                }

                distanceOffsetArray[distanceOffsetArray.length] = nodeOffset;
                xScrollDistanceArray[xScrollDistanceArray.length] = xScrollDistance;

            }

            var slideChanged = false;
            var newChildOffset = helpers.calcActiveOffset(settings, nodeOffset, tempChildrenOffsets, stageWidth, tempInfiniteSliderOffset, numberOfSlides, activeChildOffsets[sliderNumber], sliderNumber);

            var tempOffset = (newChildOffset + tempInfiniteSliderOffset + numberOfSlides)%numberOfSlides;

            if(settings.snapToChildren) {

                if(settings.infiniteSlider) {

                    if(tempOffset != activeChildInfOffsets[sliderNumber]) {
                        slideChanged = true;
                    }

                } else {

                    if(newChildOffset != activeChildOffsets[sliderNumber]) {
                        slideChanged = true;
                    }

                }

                if((snapDirection < 0) && !slideChanged) {

                    newChildOffset++;

                    if((newChildOffset >= childrenOffsets.length) && !settings.infiniteSlider) newChildOffset = childrenOffsets.length - 1;

                } else if((snapDirection > 0) && !slideChanged) {

                    newChildOffset--;

                    if((newChildOffset < 0) && !settings.infiniteSlider) newChildOffset = 0;

                }

            }

            if(settings.snapToChildren || (((nodeOffset > (sliderMin[sliderNumber] * -1)) || (nodeOffset < (sliderMax[sliderNumber] * -1))) && !settings.infiniteSlider)) {

                if(((nodeOffset > (sliderMin[sliderNumber] * -1)) || (nodeOffset < (sliderMax[sliderNumber] * -1))) && !settings.infiniteSlider) {
                    distanceOffsetArray.splice(0, distanceOffsetArray.length);
                } else {
                    distanceOffsetArray.splice(distanceOffsetArray.length * 0.10, distanceOffsetArray.length);
                    nodeOffset = (distanceOffsetArray.length > 0) ? distanceOffsetArray[distanceOffsetArray.length-1] : nodeOffset;
                }

                while((nodeOffset < (tempChildrenOffsets[newChildOffset] - 0.5)) || (nodeOffset > (tempChildrenOffsets[newChildOffset] + 0.5))) {

                    nodeOffset = ((nodeOffset - (tempChildrenOffsets[newChildOffset])) * snapFrictionCoefficient) + (tempChildrenOffsets[newChildOffset]);
                    distanceOffsetArray[distanceOffsetArray.length] = nodeOffset;

                }

                distanceOffsetArray[distanceOffsetArray.length] = tempChildrenOffsets[newChildOffset];
            }

            var jStart = 1;
            if((distanceOffsetArray.length%2) != 0) {
                jStart = 0;
            }

            var lastTimeoutRegistered = 0;
            var count = 0;

            for(var j = 0; j < scrollTimeouts.length; j++) {
                clearTimeout(scrollTimeouts[j]);
            }

            var endOffset = (newChildOffset + tempInfiniteSliderOffset + numberOfSlides)%numberOfSlides;

            var lastCheckOffset = 0;
            for(var j = jStart; j < distanceOffsetArray.length; j = j + 2) {

                if((j == jStart) || (Math.abs(distanceOffsetArray[j] - lastCheckOffset) > 1) || (j >= (distanceOffsetArray.length - 2))) {

                    lastCheckOffset	= distanceOffsetArray[j];

                    scrollTimeouts[scrollTimeouts.length] = helpers.slowScrollHorizontalIntervalTimer(scrollIntervalTime * j, node, slideNodes, distanceOffsetArray[j], scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, newChildOffset, originalOffsets, childrenOffsets, infiniteSliderWidth, numberOfSlides, slideNodeOuterWidths, sliderNumber, centeredSlideOffset, endOffset, settings);

                }

            }

            var slideChanged = false;
            var tempOffset = (newChildOffset + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;

            if(settings.infiniteSlider) {

                if(tempOffset != activeChildInfOffsets[sliderNumber]) {
                    slideChanged = true;
                }

            } else {

                if(newChildOffset != activeChildOffsets[sliderNumber]) {
                    slideChanged = true;
                }

            }

            if(settings.onSlideComplete != '' && (distanceOffsetArray.length > 1)) {

                scrollTimeouts[scrollTimeouts.length] = helpers.onSlideCompleteTimer(scrollIntervalTime * (j + 1), settings, node, $(node).children(':eq(' + tempOffset + ')'), endOffset, sliderNumber);

            }

            scrollTimeouts[scrollTimeouts.length] = helpers.updateBackfaceVisibilityTimer(scrollIntervalTime * (j + 1), slideNodes, sliderNumber, numberOfSlides, settings);

            slideTimeouts[sliderNumber] = scrollTimeouts;

            helpers.hideScrollbar(settings, scrollTimeouts, j, distanceOffsetArray, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber);

        },

        onSlideComplete: function(settings, node, slideNode, newChildOffset, sliderNumber) {

            var isChanged = (onChangeEventLastFired[sliderNumber] != newChildOffset) ? true : false;
            var args = new helpers.args('complete', settings, $(node), slideNode, newChildOffset, newChildOffset);
            $(node).parent().data('args', args);

            if(settings.onSlideComplete != '') {
                settings.onSlideComplete(args);
            }

            onChangeEventLastFired[sliderNumber] = newChildOffset;

        },

        getSliderOffset: function(node, xy) {

            var sliderOffset = 0;
            xy = (xy == 'x') ? 4 : 5;

            if(has3DTransform && !isIe7 && !isIe8) {

                var transforms = new Array('-webkit-transform', '-moz-transform', 'transform');
                var transformArray;

                for(var i = 0; i < transforms.length; i++) {

                    if($(node).css(transforms[i]) != undefined) {

                        if($(node).css(transforms[i]).length > 0) {

                            transformArray = $(node).css(transforms[i]).split(',');

                            break;

                        }

                    }

                }

                sliderOffset = (transformArray[xy] == undefined) ? 0 : parseInt(transformArray[xy], 10);

            } else {

                sliderOffset = parseInt($(node).css('left'), 10);

            }

            return sliderOffset;

        },

        setSliderOffset: function(node, sliderOffset) {

            sliderOffset = parseInt(sliderOffset, 10);

            if(has3DTransform && !isIe7 && !isIe8) {

                $(node).css({
                    'msTransform': 'matrix(1,0,0,1,' + sliderOffset + ',0)',
                    'webkitTransform': 'matrix(1,0,0,1,' + sliderOffset + ',0)',
                    'MozTransform': 'matrix(1,0,0,1,' + sliderOffset + ',0)',
                    'transform': 'matrix(1,0,0,1,' + sliderOffset + ',0)'
                });

            } else {

                $(node).css({
                    left: sliderOffset + 'px'
                });

            }

        },

        setBrowserInfo: function() {

            if(navigator.userAgent.match('WebKit') != null) {
                isWebkit = true;
                grabOutCursor = '-webkit-grab';
                grabInCursor = '-webkit-grabbing';
            } else if(navigator.userAgent.match('Gecko') != null) {
                isGecko = true;
                grabOutCursor = 'move';
                grabInCursor = '-moz-grabbing';
            } else if(navigator.userAgent.match('MSIE 7') != null) {
                isIe7 = true;
                isIe = true;
            } else if(navigator.userAgent.match('MSIE 8') != null) {
                isIe8 = true;
                isIe = true;
            } else if(navigator.userAgent.match('MSIE 9') != null) {
                isIe9 = true;
                isIe = true;
            }

        },

        has3DTransform: function() {

            var has3D = false;

            var testElement = $('<div />').css({
                'msTransform': 'matrix(1,1,1,1,1,1)',
                'webkitTransform': 'matrix(1,1,1,1,1,1)',
                'MozTransform': 'matrix(1,1,1,1,1,1)',
                'transform': 'matrix(1,1,1,1,1,1)'
            });

            if(testElement.attr('style') == '') {
                has3D = false;
            } else if(isGecko && (parseInt(navigator.userAgent.split('/')[3], 10) >= 21)) {
                //bug in v21+ which does not render slides properly in 3D
                has3D = false;
            } else if(testElement.attr('style') != undefined) {
                has3D = true;
            }

            return has3D;

        },

        getSlideNumber: function(slide, sliderNumber, numberOfSlides) {

            return (slide - infiniteSliderOffset[sliderNumber] + numberOfSlides) % numberOfSlides;

        },

        calcActiveOffset: function(settings, offset, childrenOffsets, stageWidth, infiniteSliderOffset, numberOfSlides, activeChildOffset, sliderNumber) {

            var isFirst = false;
            var arrayOfOffsets = new Array();
            var newChildOffset;

            if(offset > childrenOffsets[0]) newChildOffset = 0;
            if(offset < (childrenOffsets[childrenOffsets.length-1])) newChildOffset = numberOfSlides - 1;

            for(var i = 0; i < childrenOffsets.length; i++) {

                if((childrenOffsets[i] <= offset) && (childrenOffsets[i] > (offset - stageWidth))) {

                    if(!isFirst && (childrenOffsets[i] != offset)) {

                        arrayOfOffsets[arrayOfOffsets.length] = childrenOffsets[i-1];

                    }

                    arrayOfOffsets[arrayOfOffsets.length] = childrenOffsets[i];

                    isFirst = true;

                }

            }

            if(arrayOfOffsets.length == 0) {
                arrayOfOffsets[0] = childrenOffsets[childrenOffsets.length - 1];
            }

            var distance = stageWidth;
            var closestChildOffset = 0;

            for(var i = 0; i < arrayOfOffsets.length; i++) {

                var newDistance = Math.abs(offset - arrayOfOffsets[i]);

                if(newDistance < distance) {
                    closestChildOffset = arrayOfOffsets[i];
                    distance = newDistance;
                }

            }

            for(var i = 0; i < childrenOffsets.length; i++) {

                if(closestChildOffset == childrenOffsets[i]) {
                    newChildOffset = i;

                }

            }

            return newChildOffset;

        },

        changeSlide: function(slide, node, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings) {

            helpers.autoSlidePause(sliderNumber);

            for(var j = 0; j < scrollTimeouts.length; j++) {
                clearTimeout(scrollTimeouts[j]);
            }

            var steps = Math.ceil(settings.autoSlideTransTimer / 10) + 1;
            var startOffset = helpers.getSliderOffset(node, 'x');
            var endOffset = childrenOffsets[slide];
            var offsetDiff = endOffset - startOffset;
            var direction = slide - (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;

            if(settings.infiniteSlider) {

                slide = (slide - infiniteSliderOffset[sliderNumber] + numberOfSlides * 2)%numberOfSlides;

                var appendArray = false;
                if((slide == 0) && (numberOfSlides == 2)) {

                    slide = numberOfSlides;
                    childrenOffsets[slide] = childrenOffsets[slide-1] - $(slideNodes).eq(0).outerWidth(true);
                    appendArray = true;

                }

                endOffset = childrenOffsets[slide];
                offsetDiff = endOffset - startOffset;

                var offsets = new Array(childrenOffsets[slide] - $(node).width(), childrenOffsets[slide] + $(node).width());

                if(appendArray) {
                    childrenOffsets.splice(childrenOffsets.length-1, 1);
                }

                for(var i = 0; i < offsets.length; i++) {

                    if(Math.abs(offsets[i] - startOffset) < Math.abs(offsetDiff)) {
                        offsetDiff = (offsets[i] - startOffset);
                    }

                }

            }

            if((offsetDiff < 0) && (direction == -1)) {
                offsetDiff += $(node).width();
            } else if((offsetDiff > 0) && (direction == 1)) {
                offsetDiff -= $(node).width();
            }

            var stepArray = new Array();
            var t;
            var nextStep;

            helpers.showScrollbar(settings, scrollbarClass);

            for(var i = 0; i <= steps; i++) {

                t = i;
                t /= steps;
                t--;
                nextStep = startOffset + offsetDiff*(Math.pow(t,5) + 1);

                stepArray[stepArray.length] = nextStep;

            }

            var tempOffset = (slide + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;

            var lastCheckOffset = 0;
            for(var i = 0; i < stepArray.length; i++) {

                if((i == 0) || (Math.abs(stepArray[i] - lastCheckOffset) > 1) || (i >= (stepArray.length - 2))) {

                    lastCheckOffset	= stepArray[i];

                    scrollTimeouts[i] = helpers.slowScrollHorizontalIntervalTimer(scrollIntervalTime * (i + 1), node, slideNodes, stepArray[i], scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, slide, originalOffsets, childrenOffsets, infiniteSliderWidth, numberOfSlides, slideNodeOuterWidths, sliderNumber, centeredSlideOffset, tempOffset, settings);

                }

                if((i == 0) && (settings.onSlideStart != '')) {

                    var tempOffset2 = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;
                    settings.onSlideStart(new helpers.args('start', settings, node, $(node).children(':eq(' + tempOffset2 + ')'), tempOffset2, slide));

                }

            }

            var slideChanged = false;

            if(settings.infiniteSlider) {

                if(tempOffset != activeChildInfOffsets[sliderNumber]) {
                    slideChanged = true;
                }

            } else {

                if(slide != activeChildOffsets[sliderNumber]) {
                    slideChanged = true;
                }

            }

            if(slideChanged && (settings.onSlideComplete != '')) {

                scrollTimeouts[scrollTimeouts.length] = helpers.onSlideCompleteTimer(scrollIntervalTime * (i + 1), settings, node, $(node).children(':eq(' + tempOffset + ')'), tempOffset, sliderNumber);

            }

            /*scrollTimeouts[scrollTimeouts.length] = setTimeout(function() {
             activeChildOffsets[sliderNumber] = activeChildOffsets[sliderNumber];
             }, scrollIntervalTime * (i + 1));*/

            slideTimeouts[sliderNumber] = scrollTimeouts;

            helpers.hideScrollbar(settings, scrollTimeouts, i, stepArray, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber);

            helpers.autoSlide(node, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);

        },

        changeOffset: function(endOffset, node, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings) {

            helpers.autoSlidePause(sliderNumber);

            for(var j = 0; j < scrollTimeouts.length; j++) {
                clearTimeout(scrollTimeouts[j]);
            }

            if(!settings.infiniteSlider) {
                endOffset = (endOffset > (sliderMin[sliderNumber] * -1 + centeredSlideOffset)) ? sliderMin[sliderNumber] * -1 + centeredSlideOffset : endOffset;
                endOffset = (endOffset < (sliderMax[sliderNumber] * -1)) ? sliderMax[sliderNumber] * -1 : endOffset;
            }

            var steps = Math.ceil(settings.autoSlideTransTimer / 10) + 1;
            var startOffset = helpers.getSliderOffset(node, 'x');
            var slide = (helpers.calcActiveOffset(settings, endOffset, childrenOffsets, stageWidth, infiniteSliderOffset, numberOfSlides, activeChildOffsets[sliderNumber], sliderNumber) + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;
            var testOffsets = childrenOffsets.slice();

            if(settings.snapToChildren && !settings.infiniteSlider) {
                endOffset = childrenOffsets[slide];
            } else if(settings.infiniteSlider && settings.snapToChildren) {
                while(endOffset >= testOffsets[0]) {
                    testOffsets.splice(0, 0, testOffsets[numberOfSlides-1] + $(node).width());
                    testOffsets.splice(numberOfSlides, 1);
                }

                while(endOffset <= testOffsets[numberOfSlides-1]) {
                    testOffsets.splice(numberOfSlides, 0, testOffsets[0] - $(node).width());
                    testOffsets.splice(0, 1);
                }

                slide = helpers.calcActiveOffset(settings, endOffset, testOffsets, stageWidth, infiniteSliderOffset, numberOfSlides, activeChildOffsets[sliderNumber], sliderNumber);
                endOffset = testOffsets[slide];

            }

            var offsetDiff = endOffset - startOffset;

            var stepArray = new Array();
            var t;
            var nextStep;

            helpers.showScrollbar(settings, scrollbarClass);

            for(var i = 0; i <= steps; i++) {

                t = i;
                t /= steps;
                t--;
                nextStep = startOffset + offsetDiff*(Math.pow(t,5) + 1);

                stepArray[stepArray.length] = nextStep;

            }

            var tempOffset = (slide + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;

            var lastCheckOffset = 0;
            for(var i = 0; i < stepArray.length; i++) {

                if((i == 0) || (Math.abs(stepArray[i] - lastCheckOffset) > 1) || (i >= (stepArray.length - 2))) {

                    lastCheckOffset	= stepArray[i];

                    scrollTimeouts[i] = helpers.slowScrollHorizontalIntervalTimer(scrollIntervalTime * (i + 1), node, slideNodes, stepArray[i], scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, slide, originalOffsets, childrenOffsets, infiniteSliderWidth, numberOfSlides, slideNodeOuterWidths, sliderNumber, centeredSlideOffset, tempOffset, settings);

                }

                if((i == 0) && (settings.onSlideStart != '')) {
                    var tempOffset = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;

                    settings.onSlideStart(new helpers.args('start', settings, node, $(node).children(':eq(' + tempOffset + ')'), tempOffset, slide));
                }

            }

            var slideChanged = false;

            if(settings.infiniteSlider) {

                if(tempOffset != activeChildInfOffsets[sliderNumber]) {
                    slideChanged = true;
                }

            } else {

                if(slide != activeChildOffsets[sliderNumber]) {
                    slideChanged = true;
                }

            }

            if(slideChanged && (settings.onSlideComplete != '')) {

                scrollTimeouts[scrollTimeouts.length] = helpers.onSlideCompleteTimer(scrollIntervalTime * (i + 1), settings, node, $(node).children(':eq(' + tempOffset + ')'), tempOffset, sliderNumber);
            }

            slideTimeouts[sliderNumber] = scrollTimeouts;

            helpers.hideScrollbar(settings, scrollTimeouts, i, stepArray, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber);

            helpers.autoSlide(node, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);

        },

        autoSlide: function(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings) {

            if(!iosSliderSettings[sliderNumber].autoSlide) return false;

            helpers.autoSlidePause(sliderNumber);

            autoSlideTimeouts[sliderNumber] = setTimeout(function() {

                if(!settings.infiniteSlider && (activeChildOffsets[sliderNumber] > childrenOffsets.length-1)) {
                    activeChildOffsets[sliderNumber] = activeChildOffsets[sliderNumber] - numberOfSlides;
                }

                var nextSlide = activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + 1;

                helpers.changeSlide(nextSlide, scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);

                helpers.autoSlide(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);

            }, settings.autoSlideTimer + settings.autoSlideTransTimer);

        },

        autoSlidePause: function(sliderNumber) {

            clearTimeout(autoSlideTimeouts[sliderNumber]);

        },

        isUnselectable: function(node, settings) {

            if(settings.unselectableSelector != '') {
                if($(node).closest(settings.unselectableSelector).length == 1) return true;
            }

            return false;

        },

        /* timers */
        slowScrollHorizontalIntervalTimer: function(scrollIntervalTime, node, slideNodes, step, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, slide, originalOffsets, childrenOffsets, infiniteSliderWidth, numberOfSlides, slideNodeOuterWidths, sliderNumber, centeredSlideOffset, endOffset, settings) {

            var scrollTimeout = setTimeout(function() {
                helpers.slowScrollHorizontalInterval(node, slideNodes, step, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, slide, originalOffsets, childrenOffsets, infiniteSliderWidth, numberOfSlides, slideNodeOuterWidths, sliderNumber, centeredSlideOffset, endOffset, settings);
            }, scrollIntervalTime);

            return scrollTimeout;

        },

        onSlideCompleteTimer: function(scrollIntervalTime, settings, node, slideNode, slide, scrollbarNumber) {

            var scrollTimeout = setTimeout(function() {
                helpers.onSlideComplete(settings, node, slideNode, slide, scrollbarNumber);
            }, scrollIntervalTime);

            return scrollTimeout;

        },

        hideScrollbarIntervalTimer: function(scrollIntervalTime, newOffset, opacity, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber, settings) {

            var scrollTimeout = setTimeout(function() {
                helpers.hideScrollbarInterval(newOffset, opacity, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber, settings);
            }, scrollIntervalTime);

            return scrollTimeout;

        },

        updateBackfaceVisibilityTimer: function(scrollIntervalTime, slideNodes, sliderNumber, numberOfSlides, settings) {

            var scrollTimeout = setTimeout(function() {
                helpers.updateBackfaceVisibility(slideNodes, sliderNumber, numberOfSlides, settings);
            }, scrollIntervalTime);

            return scrollTimeout;

        },

        updateBackfaceVisibility: function(slideNodes, sliderNumber, numberOfSlides, settings) {

            var slide = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;
            var usedSlideArray = Array();

            //loop through buffered slides
            for(var i = 0; i < (settings.hardwareAccelBuffer * 2); i++) {

                var slide_eq = helpers.mod(slide+i-settings.hardwareAccelBuffer, numberOfSlides);

                //check if backface visibility applied
                if($(slideNodes).eq(slide_eq).css('-webkit-backface-visibility') == 'visible') {

                    usedSlideArray[usedSlideArray.length] = slide_eq;

                    var eq_h = helpers.mod(slide_eq+settings.hardwareAccelBuffer*2, numberOfSlides);
                    var eq_l = helpers.mod(slide_eq-settings.hardwareAccelBuffer*2, numberOfSlides);

                    //buffer backface visibility
                    $(slideNodes).eq(slide_eq).css('-webkit-backface-visibility', 'hidden');

                    if(usedSlideArray.indexOf(eq_l) == -1)
                        $(slideNodes).eq(eq_l).css('-webkit-backface-visibility', '');

                    if(usedSlideArray.indexOf(eq_h) == -1)
                        $(slideNodes).eq(eq_h).css('-webkit-backface-visibility', '');

                }

            }

        },

        mod: function(x, mod) {

            var rem = x % mod;

            return rem < 0 ? rem + mod : rem;

        },

        args: function(func, settings, node, activeSlideNode, newChildOffset, targetSlideOffset) {

            this.prevSlideNumber = ($(node).parent().data('args') == undefined) ? undefined : $(node).parent().data('args').prevSlideNumber;
            this.prevSlideObject = ($(node).parent().data('args') == undefined) ? undefined : $(node).parent().data('args').prevSlideObject;
            this.targetSlideNumber = targetSlideOffset + 1;
            this.targetSlideObject = $(node).children(':eq(' + targetSlideOffset + ')');
            this.slideChanged = false;

            if(func == 'load') {
                this.targetSlideNumber = undefined;
                this.targetSlideObject = undefined;
            } else if(func == 'start') {
                this.targetSlideNumber = undefined;
                this.targetSlideObject = undefined;
            } else if(func == 'change') {
                this.slideChanged = true;
                this.prevSlideNumber = ($(node).parent().data('args') == undefined) ? settings.startAtSlide : $(node).parent().data('args').currentSlideNumber;
                this.prevSlideObject = $(node).children(':eq(' + this.prevSlideNumber + ')');
            } else if(func == 'complete') {
                this.slideChanged = $(node).parent().data('args').slideChanged;
            }

            this.settings = settings;
            this.data = $(node).parent().data('iosslider');
            this.sliderObject = node;
            this.sliderContainerObject = $(node).parent();

            this.currentSlideObject = activeSlideNode;
            this.currentSlideNumber = newChildOffset + 1;
            this.currentSliderOffset = helpers.getSliderOffset(node, 'x') * -1;

        },

        preventDrag: function(event) {
            event.preventDefault();
        },

        preventClick: function(event) {
            event.stopImmediatePropagation();
            return false;
        },

        enableClick: function() {
            return true;
        }

    }

    helpers.setBrowserInfo();

    var methods = {

        init: function(options, node) {

            has3DTransform = helpers.has3DTransform();

            var settings = $.extend(true, {
                'elasticPullResistance': 0.6,
                'frictionCoefficient': 0.92,
                'elasticFrictionCoefficient': 0.6,
                'snapFrictionCoefficient': 0.92,
                'snapToChildren': false,
                'snapSlideCenter': false,
                'startAtSlide': 1,
                'scrollbar': false,
                'scrollbarDrag': false,
                'scrollbarHide': true,
                'scrollbarPaging': false,
                'scrollbarLocation': 'top',
                'scrollbarContainer': '',
                'scrollbarOpacity': 0.4,
                'scrollbarHeight': '4px',
                'scrollbarBorder': '0',
                'scrollbarMargin': '5px',
                'scrollbarBackground': '#000',
                'scrollbarBorderRadius': '100px',
                'scrollbarShadow': '0 0 0 #000',
                'scrollbarElasticPullResistance': 0.9,
                'desktopClickDrag': false,
                'keyboardControls': false,
                'tabToAdvance': false,
                'responsiveSlideContainer': true,
                'responsiveSlides': true,
                'navSlideSelector': '',
                'navPrevSelector': '',
                'navNextSelector': '',
                'autoSlideToggleSelector': '',
                'autoSlide': false,
                'autoSlideTimer': 5000,
                'autoSlideTransTimer': 750,
                'autoSlideHoverPause': true,
                'infiniteSlider': false,
                'snapVelocityThreshold': 5,
                'slideStartVelocityThreshold': 0,
                'horizontalSlideLockThreshold': 5,
                'verticalSlideLockThreshold': 3,
                'hardwareAccelBuffer': 5,
                'stageCSS': {
                    position: 'relative',
                    top: '0',
                    left: '0',
                    overflow: 'hidden',
                    zIndex: 1
                },
                'unselectableSelector': '',
                'onSliderLoaded': '',
                'onSliderUpdate': '',
                'onSliderResize': '',
                'onSlideStart': '',
                'onSlideChange': '',
                'onSlideComplete': ''
            }, options);

            if(node == undefined) {
                node = this;
            }

            return $(node).each(function(i) {

                scrollbarNumber++;
                var sliderNumber = scrollbarNumber;
                var scrollTimeouts = new Array();
                iosSliderSettings[sliderNumber] = $.extend({}, settings);
                sliderMin[sliderNumber] = 0;
                sliderMax[sliderNumber] = 0;
                var minTouchpoints = 0;
                var xCurrentScrollRate = new Array(0, 0);
                var yCurrentScrollRate = new Array(0, 0);
                var scrollbarBlockClass = 'scrollbarBlock' + scrollbarNumber;
                var scrollbarClass = 'scrollbar' + scrollbarNumber;
                var scrollbarNode;
                var scrollbarBlockNode;
                var scrollbarStageWidth;
                var scrollbarWidth;
                var containerWidth;
                var containerHeight;
                var centeredSlideOffset = 0;
                var stageNode = $(this);
                var stageWidth;
                var stageHeight;
                var slideWidth;
                var scrollMargin;
                var scrollBorder;
                var lastTouch;
                var isFirstInit = true;
                var newChildOffset = -1;
                var webkitTransformArray = new Array();
                var childrenOffsets;
                var originalOffsets = new Array();
                var scrollbarStartOpacity = 0;
                var xScrollStartPosition = 0;
                var yScrollStartPosition = 0;
                var currentTouches = 0;
                var scrollerNode = $(this).children(':first-child');
                var slideNodes;
                var slideNodeWidths;
                var slideNodeOuterWidths;
                var numberOfSlides = $(scrollerNode).children().not('script').length;
                var xScrollStarted = false;
                var lastChildOffset = 0;
                var isMouseDown = false;
                var currentSlider = undefined;
                var sliderStopLocation = 0;
                var infiniteSliderWidth;
                infiniteSliderOffset[sliderNumber] = 0;
                var shortContent = false;
                onChangeEventLastFired[sliderNumber] = -1;
                var isAutoSlideToggleOn = false;
                iosSliders[sliderNumber] = stageNode;
                isEventCleared[sliderNumber] = false;
                var currentEventNode;
                var intermediateChildOffset = 0;
                var tempInfiniteSliderOffset = 0;
                var preventXScroll = false;
                var snapOverride = false;
                var clickEvent = 'touchstart.iosSliderEvent click.iosSliderEvent';
                var scrollerWidth;
                var anchorEvents;
                var onclickEvents;
                var allScrollerNodeChildren;
                touchLocks[sliderNumber] = false;
                slideTimeouts[sliderNumber] = new Array();
                if(settings.scrollbarDrag) {
                    settings.scrollbar = true;
                    settings.scrollbarHide = false;
                }
                var $this = $(this);
                var data = $this.data('iosslider');
                if(data != undefined) return true;

                if(parseInt($().jquery.split('.').join(''), 10) >= 14.2) {
                    $(this).delegate('img', 'dragstart.iosSliderEvent', function(event) { event.preventDefault(); });
                } else {
                    $(this).find('img').bind('dragstart.iosSliderEvent', function(event) { event.preventDefault(); });
                }

                if(settings.infiniteSlider) {
                    settings.scrollbar = false;
                }

                if(settings.infiniteSlider && (numberOfSlides == 1)) {
                    settings.infiniteSlider = false;
                }

                if(settings.scrollbar) {

                    if(settings.scrollbarContainer != '') {
                        $(settings.scrollbarContainer).append("<div class = '" + scrollbarBlockClass + "'><div class = '" + scrollbarClass + "'></div></div>");
                    } else {
                        $(scrollerNode).parent().append("<div class = '" + scrollbarBlockClass + "'><div class = '" + scrollbarClass + "'></div></div>");
                    }

                }

                if(!init()) return true;

                $(this).find('a').bind('mousedown', helpers.preventDrag);
                $(this).find("[onclick]").bind('click', helpers.preventDrag).each(function() {

                    $(this).data('onclick', this.onclick);

                });

                var newChildOffset = helpers.calcActiveOffset(settings, helpers.getSliderOffset($(scrollerNode), 'x'), childrenOffsets, stageWidth, infiniteSliderOffset[sliderNumber], numberOfSlides, undefined, sliderNumber);
                var tempOffset = (newChildOffset + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;

                var args = new helpers.args('load', settings, scrollerNode, $(scrollerNode).children(':eq(' + tempOffset + ')'), tempOffset, tempOffset);
                $(stageNode).data('args', args);

                if(settings.onSliderLoaded != '') {

                    settings.onSliderLoaded(args);

                }

                onChangeEventLastFired[sliderNumber] = tempOffset;

                function init() {

                    helpers.autoSlidePause(sliderNumber);

                    anchorEvents = $(scrollerNode).find('a');
                    onclickEvents = $(scrollerNode).find('[onclick]');
                    allScrollerNodeChildren = $(scrollerNode).find('*');

                    $(stageNode).css('width', '');
                    $(stageNode).css('height', '');
                    $(scrollerNode).css('width', '');
                    slideNodes = $(scrollerNode).children().not('script').get();
                    slideNodeWidths = new Array();
                    slideNodeOuterWidths = new Array();

                    if(settings.responsiveSlides) {
                        $(slideNodes).css('width', '100%');
                    }

                    sliderMax[sliderNumber] = 0;
                    childrenOffsets = new Array();
                    containerWidth = $(stageNode).parent().width();
                    stageWidth = $(stageNode).outerWidth(true);

                    if(settings.responsiveSlideContainer) {
                        stageWidth = ($(stageNode).outerWidth(true) > containerWidth) ? containerWidth : $(stageNode).width();
                    }

                    $(stageNode).css({
                        position: settings.stageCSS.position,
                        top: settings.stageCSS.top,
                        left: settings.stageCSS.left,
                        overflow: settings.stageCSS.overflow,
                        zIndex: settings.stageCSS.zIndex,
                        'webkitPerspective': 1000,
                        'webkitBackfaceVisibility': 'hidden',
                        'msTouchAction': 'pan-y',
                        width: stageWidth
                    });

                    $(settings.unselectableSelector).css({
                        cursor: 'default'
                    });

                    for(var j = 0; j < slideNodes.length; j++) {

                        slideNodeWidths[j] = $(slideNodes[j]).width();
                        slideNodeOuterWidths[j] = $(slideNodes[j]).outerWidth(true);
                        var newWidth = slideNodeOuterWidths[j];

                        if(settings.responsiveSlides) {

                            if(slideNodeOuterWidths[j] > stageWidth) {

                                newWidth = stageWidth + (slideNodeOuterWidths[j] - slideNodeWidths[j]) * -1;
                                slideNodeWidths[j] = newWidth;
                                slideNodeOuterWidths[j] = stageWidth;

                            } else {

                                newWidth = slideNodeWidths[j];

                            }

                            $(slideNodes[j]).css({
                                width: newWidth
                            });

                        }

                        $(slideNodes[j]).css({
                            overflow: 'hidden',
                            position: 'absolute'
                        });

                        childrenOffsets[j] = sliderMax[sliderNumber] * -1;

                        sliderMax[sliderNumber] = sliderMax[sliderNumber] + newWidth + (slideNodeOuterWidths[j] - slideNodeWidths[j]);

                    }

                    if(settings.snapSlideCenter) {
                        centeredSlideOffset = (stageWidth - slideNodeOuterWidths[0]) * 0.5;

                        if(settings.responsiveSlides && (slideNodeOuterWidths[0] > stageWidth)) {
                            centeredSlideOffset = 0;
                        }
                    }

                    sliderAbsMax[sliderNumber] = sliderMax[sliderNumber] * 2;

                    for(var j = 0; j < slideNodes.length; j++) {

                        helpers.setSliderOffset($(slideNodes[j]), childrenOffsets[j] * -1 + sliderMax[sliderNumber] + centeredSlideOffset);

                        childrenOffsets[j] = childrenOffsets[j] - sliderMax[sliderNumber];

                    }

                    if(!settings.infiniteSlider && !settings.snapSlideCenter) {

                        for(var i = 0; i < childrenOffsets.length; i++) {

                            if(childrenOffsets[i] <= ((sliderMax[sliderNumber] * 2 - stageWidth) * -1)) {
                                break;
                            }

                            lastChildOffset = i;

                        }

                        childrenOffsets.splice(lastChildOffset + 1, childrenOffsets.length);
                        childrenOffsets[childrenOffsets.length] = (sliderMax[sliderNumber] * 2 - stageWidth) * -1;

                    }

                    for(var i = 0; i < childrenOffsets.length; i++) {
                        originalOffsets[i] = childrenOffsets[i];
                    }

                    if(isFirstInit) {

                        iosSliderSettings[sliderNumber].startAtSlide = (iosSliderSettings[sliderNumber].startAtSlide > childrenOffsets.length) ? childrenOffsets.length : iosSliderSettings[sliderNumber].startAtSlide;
                        if(settings.infiniteSlider) {
                            iosSliderSettings[sliderNumber].startAtSlide = (iosSliderSettings[sliderNumber].startAtSlide - 1 + numberOfSlides)%numberOfSlides;
                            activeChildOffsets[sliderNumber] = (iosSliderSettings[sliderNumber].startAtSlide);
                        } else {
                            iosSliderSettings[sliderNumber].startAtSlide = ((iosSliderSettings[sliderNumber].startAtSlide - 1) < 0) ? childrenOffsets.length-1 : iosSliderSettings[sliderNumber].startAtSlide;
                            activeChildOffsets[sliderNumber] = (iosSliderSettings[sliderNumber].startAtSlide-1);
                        }
                        activeChildInfOffsets[sliderNumber] = activeChildOffsets[sliderNumber];
                    }

                    sliderMin[sliderNumber] = sliderMax[sliderNumber] + centeredSlideOffset;

                    $(scrollerNode).css({
                        position: 'relative',
                        cursor: grabOutCursor,
                        'webkitPerspective': '0',
                        'webkitBackfaceVisibility': 'hidden',
                        width: sliderMax[sliderNumber] + 'px'
                    });

                    scrollerWidth = sliderMax[sliderNumber];
                    sliderMax[sliderNumber] = sliderMax[sliderNumber] * 2 - stageWidth + centeredSlideOffset * 2;

                    shortContent = (((scrollerWidth + centeredSlideOffset) < stageWidth) || (stageWidth == 0)) ? true : false;

                    if(shortContent) {

                        $(scrollerNode).css({
                            cursor: 'default'
                        });

                    }

                    containerHeight = $(stageNode).parent().outerHeight(true);
                    stageHeight = $(stageNode).height();

                    if(settings.responsiveSlideContainer) {
                        stageHeight = (stageHeight > containerHeight) ? containerHeight : stageHeight;
                    }

                    $(stageNode).css({
                        height: stageHeight
                    });

                    helpers.setSliderOffset(scrollerNode, childrenOffsets[activeChildOffsets[sliderNumber]]);

                    if(settings.infiniteSlider && !shortContent) {

                        var currentScrollOffset = helpers.getSliderOffset($(scrollerNode), 'x');
                        var count = (infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides * -1;

                        while(count < 0) {

                            var lowSlideNumber = 0;
                            var lowSlideOffset = helpers.getSliderOffset($(slideNodes[0]), 'x');
                            $(slideNodes).each(function(i) {

                                if(helpers.getSliderOffset(this, 'x') < lowSlideOffset) {
                                    lowSlideOffset = helpers.getSliderOffset(this, 'x');
                                    lowSlideNumber = i;
                                }

                            });

                            var newOffset = sliderMin[sliderNumber] + scrollerWidth;
                            helpers.setSliderOffset($(slideNodes)[lowSlideNumber], newOffset);

                            sliderMin[sliderNumber] = childrenOffsets[1] * -1 + centeredSlideOffset;
                            sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;

                            childrenOffsets.splice(0, 1);
                            childrenOffsets.splice(childrenOffsets.length, 0, newOffset * -1 + centeredSlideOffset);

                            count++;

                        }

                        while(((childrenOffsets[0] * -1 - scrollerWidth + centeredSlideOffset) > 0) && settings.snapSlideCenter && isFirstInit) {

                            var highSlideNumber = 0;
                            var highSlideOffset = helpers.getSliderOffset($(slideNodes[0]), 'x');
                            $(slideNodes).each(function(i) {

                                if(helpers.getSliderOffset(this, 'x') > highSlideOffset) {
                                    highSlideOffset = helpers.getSliderOffset(this, 'x');
                                    highSlideNumber = i;
                                }

                            });

                            var newOffset = sliderMin[sliderNumber] - slideNodeOuterWidths[highSlideNumber];
                            helpers.setSliderOffset($(slideNodes)[highSlideNumber], newOffset);

                            childrenOffsets.splice(0, 0, newOffset * -1 + centeredSlideOffset);
                            childrenOffsets.splice(childrenOffsets.length-1, 1);

                            sliderMin[sliderNumber] = childrenOffsets[0] * -1 + centeredSlideOffset;
                            sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;

                            infiniteSliderOffset[sliderNumber]--;
                            activeChildOffsets[sliderNumber]++;

                        }

                        while(currentScrollOffset <= (sliderMax[sliderNumber] * -1)) {

                            var lowSlideNumber = 0;
                            var lowSlideOffset = helpers.getSliderOffset($(slideNodes[0]), 'x');
                            $(slideNodes).each(function(i) {

                                if(helpers.getSliderOffset(this, 'x') < lowSlideOffset) {
                                    lowSlideOffset = helpers.getSliderOffset(this, 'x');
                                    lowSlideNumber = i;
                                }

                            });

                            var newOffset = sliderMin[sliderNumber] + scrollerWidth;
                            helpers.setSliderOffset($(slideNodes)[lowSlideNumber], newOffset);

                            sliderMin[sliderNumber] = childrenOffsets[1] * -1 + centeredSlideOffset;
                            sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;

                            childrenOffsets.splice(0, 1);
                            childrenOffsets.splice(childrenOffsets.length, 0, newOffset * -1 + centeredSlideOffset);

                            infiniteSliderOffset[sliderNumber]++;
                            activeChildOffsets[sliderNumber]--;

                        }

                    }

                    helpers.setSliderOffset(scrollerNode, childrenOffsets[activeChildOffsets[sliderNumber]]);

                    helpers.updateBackfaceVisibility(slideNodes, sliderNumber, numberOfSlides, settings);

                    if(!settings.desktopClickDrag) {

                        $(scrollerNode).css({
                            cursor: 'default'
                        });

                    }

                    if(settings.scrollbar) {

                        $('.' + scrollbarBlockClass).css({
                            margin: settings.scrollbarMargin,
                            overflow: 'hidden',
                            display: 'none'
                        });

                        $('.' + scrollbarBlockClass + ' .' + scrollbarClass).css({
                            border: settings.scrollbarBorder
                        });

                        scrollMargin = parseInt($('.' + scrollbarBlockClass).css('marginLeft')) + parseInt($('.' + scrollbarBlockClass).css('marginRight'));
                        scrollBorder = parseInt($('.' + scrollbarBlockClass + ' .' + scrollbarClass).css('borderLeftWidth'), 10) + parseInt($('.' + scrollbarBlockClass + ' .' + scrollbarClass).css('borderRightWidth'), 10);
                        scrollbarStageWidth = (settings.scrollbarContainer != '') ? $(settings.scrollbarContainer).width() : stageWidth;
                        scrollbarWidth = (stageWidth / scrollerWidth) * (scrollbarStageWidth - scrollMargin);

                        if(!settings.scrollbarHide) {
                            scrollbarStartOpacity = settings.scrollbarOpacity;
                        }

                        $('.' + scrollbarBlockClass).css({
                            position: 'absolute',
                            left: 0,
                            width: scrollbarStageWidth - scrollMargin + 'px',
                            margin: settings.scrollbarMargin
                        });

                        if(settings.scrollbarLocation == 'top') {
                            $('.' + scrollbarBlockClass).css('top', '0');
                        } else {
                            $('.' + scrollbarBlockClass).css('bottom', '0');
                        }

                        $('.' + scrollbarBlockClass + ' .' + scrollbarClass).css({
                            borderRadius: settings.scrollbarBorderRadius,
                            background: settings.scrollbarBackground,
                            height: settings.scrollbarHeight,
                            width: scrollbarWidth - scrollBorder + 'px',
                            minWidth: settings.scrollbarHeight,
                            border: settings.scrollbarBorder,
                            'webkitPerspective': 1000,
                            'webkitBackfaceVisibility': 'hidden',
                            'position': 'relative',
                            opacity: scrollbarStartOpacity,
                            filter: 'alpha(opacity:' + (scrollbarStartOpacity * 100) + ')',
                            boxShadow: settings.scrollbarShadow
                        });

                        helpers.setSliderOffset($('.' + scrollbarBlockClass + ' .' + scrollbarClass), Math.floor((childrenOffsets[activeChildOffsets[sliderNumber]] * -1 - sliderMin[sliderNumber] + centeredSlideOffset) / (sliderMax[sliderNumber] - sliderMin[sliderNumber] + centeredSlideOffset) * (scrollbarStageWidth - scrollMargin - scrollbarWidth)));

                        $('.' + scrollbarBlockClass).css({
                            display: 'block'
                        });

                        scrollbarNode = $('.' + scrollbarBlockClass + ' .' + scrollbarClass);
                        scrollbarBlockNode = $('.' + scrollbarBlockClass);

                    }

                    if(settings.scrollbarDrag && !shortContent) {
                        $('.' + scrollbarBlockClass + ' .' + scrollbarClass).css({
                            cursor: grabOutCursor
                        });
                    }

                    if(settings.infiniteSlider) {

                        infiniteSliderWidth = (sliderMax[sliderNumber] + stageWidth) / 3;

                    }

                    if(settings.navSlideSelector != '') {

                        $(settings.navSlideSelector).each(function(j) {

                            $(this).css({
                                cursor: 'pointer'
                            });

                            $(this).unbind(clickEvent).bind(clickEvent, function(e) {

                                if(e.type == 'touchstart') {
                                    $(this).unbind('click.iosSliderEvent');
                                } else {
                                    $(this).unbind('touchstart.iosSliderEvent');
                                }
                                clickEvent = e.type + '.iosSliderEvent';

                                helpers.changeSlide(j, scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);

                            });

                        });

                    }

                    if(settings.navPrevSelector != '') {

                        $(settings.navPrevSelector).css({
                            cursor: 'pointer'
                        });

                        $(settings.navPrevSelector).unbind(clickEvent).bind(clickEvent, function(e) {

                            if(e.type == 'touchstart') {
                                $(this).unbind('click.iosSliderEvent');
                            } else {
                                $(this).unbind('touchstart.iosSliderEvent');
                            }
                            clickEvent = e.type + '.iosSliderEvent';

                            var slide = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;

                            if((slide > 0) || settings.infiniteSlider) {
                                helpers.changeSlide(slide - 1, scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);
                            }
                        });

                    }

                    if(settings.navNextSelector != '') {

                        $(settings.navNextSelector).css({
                            cursor: 'pointer'
                        });

                        $(settings.navNextSelector).unbind(clickEvent).bind(clickEvent, function(e) {

                            if(e.type == 'touchstart') {
                                $(this).unbind('click.iosSliderEvent');
                            } else {
                                $(this).unbind('touchstart.iosSliderEvent');
                            }
                            clickEvent = e.type + '.iosSliderEvent';

                            var slide = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;

                            if((slide < childrenOffsets.length-1) || settings.infiniteSlider) {
                                helpers.changeSlide(slide + 1, scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);
                            }
                        });

                    }

                    if(settings.autoSlide && !shortContent) {

                        if(settings.autoSlideToggleSelector != '') {

                            $(settings.autoSlideToggleSelector).css({
                                cursor: 'pointer'
                            });

                            $(settings.autoSlideToggleSelector).unbind(clickEvent).bind(clickEvent, function(e) {

                                if(e.type == 'touchstart') {
                                    $(this).unbind('click.iosSliderEvent');
                                } else {
                                    $(this).unbind('touchstart.iosSliderEvent');
                                }
                                clickEvent = e.type + '.iosSliderEvent';

                                if(!isAutoSlideToggleOn) {

                                    helpers.autoSlidePause(sliderNumber);
                                    isAutoSlideToggleOn = true;

                                    $(settings.autoSlideToggleSelector).addClass('on');

                                } else {

                                    helpers.autoSlide(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);

                                    isAutoSlideToggleOn = false;

                                    $(settings.autoSlideToggleSelector).removeClass('on');

                                }

                            });

                        }

                    }

                    helpers.autoSlide(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);

                    $(stageNode).bind('mouseleave.iosSliderEvent', function() {

                        if(isAutoSlideToggleOn) return true;

                        helpers.autoSlide(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);

                    });

                    $(stageNode).bind('touchend.iosSliderEvent', function() {

                        if(isAutoSlideToggleOn) return true;

                        helpers.autoSlide(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);

                    });

                    if(settings.autoSlideHoverPause) {
                        $(stageNode).bind('mouseenter.iosSliderEvent', function() {
                            helpers.autoSlidePause(sliderNumber);
                        });
                    }

                    $(stageNode).data('iosslider', {
                        obj: $this,
                        settings: settings,
                        scrollerNode: scrollerNode,
                        slideNodes: slideNodes,
                        numberOfSlides: numberOfSlides,
                        centeredSlideOffset: centeredSlideOffset,
                        sliderNumber: sliderNumber,
                        originalOffsets: originalOffsets,
                        childrenOffsets: childrenOffsets,
                        sliderMax: sliderMax[sliderNumber],
                        scrollbarClass: scrollbarClass,
                        scrollbarWidth: scrollbarWidth,
                        scrollbarStageWidth: scrollbarStageWidth,
                        stageWidth: stageWidth,
                        scrollMargin: scrollMargin,
                        scrollBorder: scrollBorder,
                        infiniteSliderOffset: infiniteSliderOffset[sliderNumber],
                        infiniteSliderWidth: infiniteSliderWidth,
                        slideNodeOuterWidths: slideNodeOuterWidths,
                        shortContent: shortContent
                    });

                    isFirstInit = false;

                    return true;

                }

                if(settings.scrollbarPaging && settings.scrollbar && !shortContent) {

                    $(scrollbarBlockNode).css('cursor', 'pointer');

                    $(scrollbarBlockNode).bind('click.iosSliderEvent', function(e) {

                        if(this == e.target) {

                            if(e.pageX > $(scrollbarNode).offset().left) {
                                methods.nextPage(stageNode);
                            } else {
                                methods.prevPage(stageNode);
                            }

                        }

                    });

                }

                if(iosSliderSettings[sliderNumber].responsiveSlides || iosSliderSettings[sliderNumber].responsiveSlideContainer) {

                    var orientationEvent = supportsOrientationChange ? 'orientationchange' : 'resize';

                    $(window).bind(orientationEvent + '.iosSliderEvent-' + sliderNumber, function() {

                        if(!init()) return true;

                        var args = $(stageNode).data('args');

                        if(settings.onSliderResize != '') {
                            settings.onSliderResize(args);
                        }

                    });

                }

                if((settings.keyboardControls || settings.tabToAdvance) && !shortContent) {

                    $(document).bind('keydown.iosSliderEvent', function(e) {

                        if((!isIe7) && (!isIe8)) {
                            var e = e.originalEvent;
                        }

                        if(e.target.nodeName == 'INPUT') return true;

                        if(touchLocks[sliderNumber]) return true;

                        if((e.keyCode == 37) && settings.keyboardControls) {

                            e.preventDefault();

                            var slide = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;

                            if((slide > 0) || settings.infiniteSlider) {
                                helpers.changeSlide(slide - 1, scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);
                            }

                        } else if(((e.keyCode == 39) && settings.keyboardControls) || ((e.keyCode == 9) && settings.tabToAdvance)) {

                            e.preventDefault();

                            var slide = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;

                            if((slide < childrenOffsets.length-1) || settings.infiniteSlider) {
                                helpers.changeSlide(slide + 1, scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);
                            }

                        }

                    });

                }

                if(isTouch || settings.desktopClickDrag) {

                    var touchStartFlag = false;
                    var touchEndFlag = false;
                    var touchSelection = $(scrollerNode);
                    var touchSelectionMove = $(scrollerNode);
                    var preventDefault = null;
                    var isUnselectable = false;

                    if(settings.scrollbarDrag) {

                        touchSelection = touchSelection.add(scrollbarNode);
                        touchSelectionMove = touchSelectionMove.add(scrollbarBlockNode);

                    }

                    $(touchSelection).bind('mousedown.iosSliderEvent touchstart.iosSliderEvent', function(e) {

                        //if scroll starts, unbind dom from slider touch override
                        $(window).one('scroll.iosSliderEvent', function(e) { touchStartFlag = false; });

                        if(touchStartFlag) return true;
                        touchStartFlag = true;
                        touchEndFlag = false;

                        if(e.type == 'touchstart') {
                            $(touchSelectionMove).unbind('mousedown.iosSliderEvent');
                        } else {
                            $(touchSelectionMove).unbind('touchstart.iosSliderEvent');
                        }

                        if(touchLocks[sliderNumber] || shortContent) {
                            touchStartFlag = false;
                            xScrollStarted = false;
                            return true;
                        }

                        isUnselectable = helpers.isUnselectable(e.target, settings);

                        if(isUnselectable) {
                            touchStartFlag = false;
                            xScrollStarted = false;
                            return true;
                        }

                        currentEventNode = ($(this)[0] === $(scrollbarNode)[0]) ? scrollbarNode : scrollerNode;

                        if((!isIe7) && (!isIe8)) {
                            var e = e.originalEvent;
                        }

                        helpers.autoSlidePause(sliderNumber);

                        allScrollerNodeChildren.unbind('.disableClick');

                        if(e.type == 'touchstart') {

                            eventX = e.touches[0].pageX;
                            eventY = e.touches[0].pageY;

                        } else {

                            if (window.getSelection) {
                                if (window.getSelection().empty) {
                                    window.getSelection().empty();
                                } else if (window.getSelection().removeAllRanges) {
                                    window.getSelection().removeAllRanges();
                                }
                            } else if (document.selection) {
                                if(isIe8) {
                                    try { document.selection.empty(); } catch(e) { /* absorb ie8 bug */ }
                                } else {
                                    document.selection.empty();
                                }
                            }

                            eventX = e.pageX;
                            eventY = e.pageY;

                            isMouseDown = true;
                            currentSlider = scrollerNode;

                            $(this).css({
                                cursor: grabInCursor
                            });

                        }

                        xCurrentScrollRate = new Array(0, 0);
                        yCurrentScrollRate = new Array(0, 0);
                        xScrollDistance = 0;
                        xScrollStarted = false;

                        for(var j = 0; j < scrollTimeouts.length; j++) {
                            clearTimeout(scrollTimeouts[j]);
                        }

                        var scrollPosition = helpers.getSliderOffset(scrollerNode, 'x');

                        if(scrollPosition > (sliderMin[sliderNumber] * -1 + centeredSlideOffset + scrollerWidth)) {

                            scrollPosition = sliderMin[sliderNumber] * -1 + centeredSlideOffset + scrollerWidth;

                            helpers.setSliderOffset($('.' + scrollbarClass), scrollPosition);

                            $('.' + scrollbarClass).css({
                                width: (scrollbarWidth - scrollBorder) + 'px'
                            });

                        } else if(scrollPosition < (sliderMax[sliderNumber] * -1)) {

                            scrollPosition = sliderMax[sliderNumber] * -1;

                            helpers.setSliderOffset($('.' + scrollbarClass), (scrollbarStageWidth - scrollMargin - scrollbarWidth));

                            $('.' + scrollbarClass).css({
                                width: (scrollbarWidth - scrollBorder) + 'px'
                            });

                        }

                        var scrollbarSubtractor = ($(this)[0] === $(scrollbarNode)[0]) ? (sliderMin[sliderNumber]) : 0;

                        xScrollStartPosition = (helpers.getSliderOffset(this, 'x') - eventX - scrollbarSubtractor) * -1;
                        yScrollStartPosition = (helpers.getSliderOffset(this, 'y') - eventY) * -1;

                        xCurrentScrollRate[1] = eventX;
                        yCurrentScrollRate[1] = eventY;

                        snapOverride = false;

                    });

                    $(document).bind('touchmove.iosSliderEvent mousemove.iosSliderEvent', function(e) {

                        if((!isIe7) && (!isIe8)) {
                            var e = e.originalEvent;
                        }

                        if(touchLocks[sliderNumber] || shortContent || isUnselectable || !touchStartFlag) return true;

                        var edgeDegradation = 0;

                        if(e.type == 'touchmove') {

                            eventX = e.touches[0].pageX;
                            eventY = e.touches[0].pageY;

                        } else {

                            if(window.getSelection) {
                                if(window.getSelection().empty) {
                                    //window.getSelection().empty(); /* removed to enable input fields within the slider */
                                } else if(window.getSelection().removeAllRanges) {
                                    window.getSelection().removeAllRanges();
                                }
                            } else if(document.selection) {
                                if(isIe8) {
                                    try { document.selection.empty(); } catch(e) { /* absorb ie8 bug */ }
                                } else {
                                    document.selection.empty();
                                }
                            }

                            eventX = e.pageX;
                            eventY = e.pageY;

                            if(!isMouseDown) {
                                return true;
                            }

                            if(!isIe) {
                                if((typeof e.webkitMovementX != 'undefined' || typeof e.webkitMovementY != 'undefined') && e.webkitMovementY === 0 && e.webkitMovementX === 0) {
                                    return true;
                                }
                            }

                        }

                        xCurrentScrollRate[0] = xCurrentScrollRate[1];
                        xCurrentScrollRate[1] = eventX;
                        xScrollDistance = (xCurrentScrollRate[1] - xCurrentScrollRate[0]) / 2;

                        yCurrentScrollRate[0] = yCurrentScrollRate[1];
                        yCurrentScrollRate[1] = eventY;
                        yScrollDistance = (yCurrentScrollRate[1] - yCurrentScrollRate[0]) / 2;

                        if(!xScrollStarted) {

                            var slide = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;
                            var args = new helpers.args('start', settings, scrollerNode, $(scrollerNode).children(':eq(' + slide + ')'), slide, undefined);
                            $(stageNode).data('args', args);

                            if(settings.onSlideStart != '') {
                                settings.onSlideStart(args);
                            }

                        }

                        if(((yScrollDistance > settings.verticalSlideLockThreshold) || (yScrollDistance < (settings.verticalSlideLockThreshold * -1))) && (e.type == 'touchmove') && (!xScrollStarted)) {

                            preventXScroll = true;

                        }

                        if(((xScrollDistance > settings.horizontalSlideLockThreshold) || (xScrollDistance < (settings.horizontalSlideLockThreshold * -1))) && (e.type == 'touchmove')) {

                            e.preventDefault();

                        }

                        if(((xScrollDistance > settings.slideStartVelocityThreshold) || (xScrollDistance < (settings.slideStartVelocityThreshold * -1)))) {

                            xScrollStarted = true;

                        }

                        if(xScrollStarted && !preventXScroll) {

                            var scrollPosition = helpers.getSliderOffset(scrollerNode, 'x');
                            var scrollbarSubtractor = ($(currentEventNode)[0] === $(scrollbarNode)[0]) ? (sliderMin[sliderNumber]) : centeredSlideOffset;
                            var scrollbarMultiplier = ($(currentEventNode)[0] === $(scrollbarNode)[0]) ? ((sliderMin[sliderNumber] - sliderMax[sliderNumber] - centeredSlideOffset) / (scrollbarStageWidth - scrollMargin - scrollbarWidth)) : 1;
                            var elasticPullResistance = ($(currentEventNode)[0] === $(scrollbarNode)[0]) ? settings.scrollbarElasticPullResistance : settings.elasticPullResistance;
                            var snapCenteredSlideOffset = (settings.snapSlideCenter && ($(currentEventNode)[0] === $(scrollbarNode)[0])) ? 0 : centeredSlideOffset;
                            var snapCenteredSlideOffsetScrollbar = (settings.snapSlideCenter && ($(currentEventNode)[0] === $(scrollbarNode)[0])) ? centeredSlideOffset : 0;

                            if(e.type == 'touchmove') {
                                if(currentTouches != e.touches.length) {
                                    xScrollStartPosition = (scrollPosition * -1) + eventX;
                                }

                                currentTouches = e.touches.length;
                            }

                            if(settings.infiniteSlider) {

                                if(scrollPosition <= (sliderMax[sliderNumber] * -1)) {

                                    var scrollerWidth = $(scrollerNode).width();

                                    if(scrollPosition <= (sliderAbsMax[sliderNumber] * -1)) {

                                        var sum = originalOffsets[0] * -1;
                                        $(slideNodes).each(function(i) {

                                            helpers.setSliderOffset($(slideNodes)[i], sum + centeredSlideOffset);
                                            if(i < childrenOffsets.length) {
                                                childrenOffsets[i] = sum * -1;
                                            }
                                            sum = sum + slideNodeOuterWidths[i];

                                        });

                                        xScrollStartPosition = xScrollStartPosition - childrenOffsets[0] * -1;
                                        sliderMin[sliderNumber] = childrenOffsets[0] * -1 + centeredSlideOffset;
                                        sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;
                                        infiniteSliderOffset[sliderNumber] = 0;

                                    } else {

                                        var lowSlideNumber = 0;
                                        var lowSlideOffset = helpers.getSliderOffset($(slideNodes[0]), 'x');
                                        $(slideNodes).each(function(i) {

                                            if(helpers.getSliderOffset(this, 'x') < lowSlideOffset) {
                                                lowSlideOffset = helpers.getSliderOffset(this, 'x');
                                                lowSlideNumber = i;
                                            }

                                        });

                                        var newOffset = sliderMin[sliderNumber] + scrollerWidth;
                                        helpers.setSliderOffset($(slideNodes)[lowSlideNumber], newOffset);

                                        sliderMin[sliderNumber] = childrenOffsets[1] * -1 + centeredSlideOffset;
                                        sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;

                                        childrenOffsets.splice(0, 1);
                                        childrenOffsets.splice(childrenOffsets.length, 0, newOffset * -1 + centeredSlideOffset);

                                        infiniteSliderOffset[sliderNumber]++;

                                    }

                                }

                                if((scrollPosition >= (sliderMin[sliderNumber] * -1)) || (scrollPosition >= 0)) {

                                    var scrollerWidth = $(scrollerNode).width();

                                    if(scrollPosition >= 0) {

                                        var sum = originalOffsets[0] * -1;
                                        $(slideNodes).each(function(i) {

                                            helpers.setSliderOffset($(slideNodes)[i], sum + centeredSlideOffset);
                                            if(i < childrenOffsets.length) {
                                                childrenOffsets[i] = sum * -1;
                                            }
                                            sum = sum + slideNodeOuterWidths[i];

                                        });

                                        xScrollStartPosition = xScrollStartPosition + childrenOffsets[0] * -1;
                                        sliderMin[sliderNumber] = childrenOffsets[0] * -1 + centeredSlideOffset;
                                        sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;
                                        infiniteSliderOffset[sliderNumber] = numberOfSlides;

                                        while(((childrenOffsets[0] * -1 - scrollerWidth + centeredSlideOffset) > 0)) {

                                            var highSlideNumber = 0;
                                            var highSlideOffset = helpers.getSliderOffset($(slideNodes[0]), 'x');
                                            $(slideNodes).each(function(i) {

                                                if(helpers.getSliderOffset(this, 'x') > highSlideOffset) {
                                                    highSlideOffset = helpers.getSliderOffset(this, 'x');
                                                    highSlideNumber = i;
                                                }

                                            });

                                            var newOffset = sliderMin[sliderNumber] - slideNodeOuterWidths[highSlideNumber];
                                            helpers.setSliderOffset($(slideNodes)[highSlideNumber], newOffset);

                                            childrenOffsets.splice(0, 0, newOffset * -1 + centeredSlideOffset);
                                            childrenOffsets.splice(childrenOffsets.length-1, 1);

                                            sliderMin[sliderNumber] = childrenOffsets[0] * -1 + centeredSlideOffset;
                                            sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;

                                            infiniteSliderOffset[sliderNumber]--;
                                            activeChildOffsets[sliderNumber]++;

                                        }

                                    } else {

                                        var highSlideNumber = 0;
                                        var highSlideOffset = helpers.getSliderOffset($(slideNodes[0]), 'x');
                                        $(slideNodes).each(function(i) {

                                            if(helpers.getSliderOffset(this, 'x') > highSlideOffset) {
                                                highSlideOffset = helpers.getSliderOffset(this, 'x');
                                                highSlideNumber = i;
                                            }

                                        });

                                        var newOffset = sliderMin[sliderNumber] - slideNodeOuterWidths[highSlideNumber];
                                        helpers.setSliderOffset($(slideNodes)[highSlideNumber], newOffset);

                                        childrenOffsets.splice(0, 0, newOffset * -1 + centeredSlideOffset);
                                        childrenOffsets.splice(childrenOffsets.length-1, 1);

                                        sliderMin[sliderNumber] = childrenOffsets[0] * -1 + centeredSlideOffset;
                                        sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;

                                        infiniteSliderOffset[sliderNumber]--;

                                    }

                                }

                            } else {

                                var scrollerWidth = $(scrollerNode).width();

                                if(scrollPosition > (sliderMin[sliderNumber] * -1 + centeredSlideOffset)) {

                                    edgeDegradation = (sliderMin[sliderNumber] + ((xScrollStartPosition - scrollbarSubtractor - eventX + snapCenteredSlideOffset) * -1 * scrollbarMultiplier) - scrollbarSubtractor) * elasticPullResistance * -1 / scrollbarMultiplier;

                                }

                                if(scrollPosition < (sliderMax[sliderNumber] * -1)) {

                                    edgeDegradation = (sliderMax[sliderNumber] + snapCenteredSlideOffsetScrollbar + ((xScrollStartPosition - scrollbarSubtractor - eventX) * -1 * scrollbarMultiplier) - scrollbarSubtractor) * elasticPullResistance * -1 / scrollbarMultiplier;

                                }

                            }

                            helpers.setSliderOffset(scrollerNode, ((xScrollStartPosition - scrollbarSubtractor - eventX - edgeDegradation) * -1 * scrollbarMultiplier) - scrollbarSubtractor + snapCenteredSlideOffsetScrollbar);

                            if(settings.scrollbar) {

                                helpers.showScrollbar(settings, scrollbarClass);

                                scrollbarDistance = Math.floor((xScrollStartPosition - eventX - edgeDegradation - sliderMin[sliderNumber] + snapCenteredSlideOffset) / (sliderMax[sliderNumber] - sliderMin[sliderNumber] + centeredSlideOffset) * (scrollbarStageWidth - scrollMargin - scrollbarWidth) * scrollbarMultiplier);

                                var width = scrollbarWidth;

                                if(scrollbarDistance <= 0) {

                                    width = scrollbarWidth - scrollBorder - (scrollbarDistance * -1);

                                    helpers.setSliderOffset($('.' + scrollbarClass), 0);

                                    $('.' + scrollbarClass).css({
                                        width: width + 'px'
                                    });

                                } else if(scrollbarDistance >= (scrollbarStageWidth - scrollMargin - scrollBorder - scrollbarWidth)) {

                                    width = scrollbarStageWidth - scrollMargin - scrollBorder - scrollbarDistance;

                                    helpers.setSliderOffset($('.' + scrollbarClass), scrollbarDistance);

                                    $('.' + scrollbarClass).css({
                                        width: width + 'px'
                                    });

                                } else {

                                    helpers.setSliderOffset($('.' + scrollbarClass), scrollbarDistance);

                                }

                            }

                            if(e.type == 'touchmove') {
                                lastTouch = e.touches[0].pageX;
                            }

                            var slideChanged = false;
                            var newChildOffset = helpers.calcActiveOffset(settings, (xScrollStartPosition - eventX - edgeDegradation) * -1, childrenOffsets, stageWidth, infiniteSliderOffset[sliderNumber], numberOfSlides, undefined, sliderNumber);
                            var tempOffset = (newChildOffset + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;

                            if(settings.infiniteSlider) {

                                if(tempOffset != activeChildInfOffsets[sliderNumber]) {
                                    slideChanged = true;
                                }

                            } else {

                                if(newChildOffset != activeChildOffsets[sliderNumber]) {
                                    slideChanged = true;
                                }

                            }

                            if(slideChanged) {

                                activeChildOffsets[sliderNumber] = newChildOffset;
                                activeChildInfOffsets[sliderNumber] = tempOffset;
                                snapOverride = true;

                                var args = new helpers.args('change', settings, scrollerNode, $(scrollerNode).children(':eq(' + tempOffset + ')'), tempOffset, tempOffset);
                                $(stageNode).data('args', args);

                                if(settings.onSlideChange != '') {
                                    settings.onSlideChange(args);
                                }

                                helpers.updateBackfaceVisibility(slideNodes, sliderNumber, numberOfSlides, settings);

                            }

                        }

                    });

                    var eventObject = $(window);

                    if(isIe8 || isIe7) {
                        var eventObject = $(document);
                    }

                    $(touchSelection).bind('touchcancel.iosSliderEvent touchend.iosSliderEvent', function(e) {

                        var e = e.originalEvent;

                        if(touchEndFlag) return false;
                        touchEndFlag = true;

                        if(touchLocks[sliderNumber] || shortContent) return true;

                        if(isUnselectable) return true;

                        if(e.touches.length != 0) {

                            for(var j = 0; j < e.touches.length; j++) {

                                if(e.touches[j].pageX == lastTouch) {
                                    helpers.slowScrollHorizontal(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, xScrollDistance, yScrollDistance, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, currentEventNode, snapOverride, centeredSlideOffset, settings);
                                }

                            }

                        } else {

                            helpers.slowScrollHorizontal(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, xScrollDistance, yScrollDistance, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, currentEventNode, snapOverride, centeredSlideOffset, settings);

                        }

                        preventXScroll = false;
                        touchStartFlag = false;

                        return true;

                    });

                    $(eventObject).bind('mouseup.iosSliderEvent-' + sliderNumber, function(e) {

                        if(xScrollStarted) {
                            anchorEvents.unbind('click.disableClick').bind('click.disableClick', helpers.preventClick);
                        } else {
                            anchorEvents.unbind('click.disableClick').bind('click.disableClick', helpers.enableClick);
                        }

                        onclickEvents.each(function() {

                            this.onclick = function(event) {
                                if(xScrollStarted) {
                                    return false;
                                }

                                if($(this).data('onclick')) $(this).data('onclick').call(this, event || window.event);
                            }

                            this.onclick = $(this).data('onclick');

                        });

                        if(parseFloat($().jquery) >= 1.8) {

                            allScrollerNodeChildren.each(function() {

                                var clickObject = $._data(this, 'events');

                                if(clickObject != undefined) {
                                    if(clickObject.click != undefined) {

                                        if(clickObject.click[0].namespace != 'iosSliderEvent') {

                                            if(!xScrollStarted) {
                                                return false;
                                            }

                                            $(this).one('click.disableClick', helpers.preventClick);
                                            var handlers = $._data(this, 'events').click;
                                            var handler = handlers.pop();
                                            handlers.splice(0, 0, handler);

                                        }

                                    }
                                }

                            });

                        } else if(parseFloat($().jquery) >= 1.6) {

                            allScrollerNodeChildren.each(function() {

                                var clickObject = $(this).data('events');

                                if(clickObject != undefined) {
                                    if(clickObject.click != undefined) {

                                        if(clickObject.click[0].namespace != 'iosSliderEvent') {

                                            if(!xScrollStarted) {
                                                return false;
                                            }

                                            $(this).one('click.disableClick', helpers.preventClick);
                                            var handlers = $(this).data('events').click;
                                            var handler = handlers.pop();
                                            handlers.splice(0, 0, handler);

                                        }

                                    }
                                }

                            });

                        }

                        if(!isEventCleared[sliderNumber]) {

                            if(shortContent) return true;

                            if(settings.desktopClickDrag) {
                                $(scrollerNode).css({
                                    cursor: grabOutCursor
                                });
                            }

                            if(settings.scrollbarDrag) {
                                $(scrollbarNode).css({
                                    cursor: grabOutCursor
                                });
                            }

                            isMouseDown = false;

                            if(currentSlider == undefined) {
                                return true;
                            }

                            helpers.slowScrollHorizontal(currentSlider, slideNodes, scrollTimeouts, scrollbarClass, xScrollDistance, yScrollDistance, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, currentEventNode, snapOverride, centeredSlideOffset, settings);

                            currentSlider = undefined;

                        }

                        preventXScroll = false;
                        touchStartFlag = false;

                    });

                }

            });

        },

        destroy: function(clearStyle, node) {

            if(node == undefined) {
                node = this;
            }

            return $(node).each(function() {

                var $this = $(this);
                var data = $this.data('iosslider');
                if(data == undefined) return false;

                if(clearStyle == undefined) {
                    clearStyle = true;
                }

                helpers.autoSlidePause(data.sliderNumber);
                isEventCleared[data.sliderNumber] = true;
                $(window).unbind('.iosSliderEvent-' + data.sliderNumber);
                $(document).unbind('.iosSliderEvent-' + data.sliderNumber);
                $(document).unbind('keydown.iosSliderEvent');
                $(this).unbind('.iosSliderEvent');
                $(this).children(':first-child').unbind('.iosSliderEvent');
                $(this).children(':first-child').children().unbind('.iosSliderEvent');
                $(data.settings.scrollbarBlockNode).unbind('.iosSliderEvent');

                if(clearStyle) {
                    $(this).attr('style', '');
                    $(this).children(':first-child').attr('style', '');
                    $(this).children(':first-child').children().attr('style', '');

                    $(data.settings.navSlideSelector).attr('style', '');
                    $(data.settings.navPrevSelector).attr('style', '');
                    $(data.settings.navNextSelector).attr('style', '');
                    $(data.settings.autoSlideToggleSelector).attr('style', '');
                    $(data.settings.unselectableSelector).attr('style', '');
                }

                if(data.settings.scrollbar) {
                    $('.scrollbarBlock' + data.sliderNumber).remove();
                }

                var scrollTimeouts = slideTimeouts[data.sliderNumber];

                for(var i = 0; i < scrollTimeouts.length; i++) {
                    clearTimeout(scrollTimeouts[i]);
                }

                $this.removeData('iosslider');
                $this.removeData('args');

            });

        },

        update: function(node) {

            if(node == undefined) {
                node = this;
            }

            return $(node).each(function() {

                var $this = $(this);
                var data = $this.data('iosslider');
                if(data == undefined) return false;

                data.settings.startAtSlide = $this.data('args').currentSlideNumber;

                methods.destroy(false, this);

                if((data.numberOfSlides != 1) && data.settings.infiniteSlider) {
                    data.settings.startAtSlide = (activeChildOffsets[data.sliderNumber] + 1 + infiniteSliderOffset[data.sliderNumber] + data.numberOfSlides)%data.numberOfSlides;
                }

                methods.init(data.settings, this);

                var args = new helpers.args('update', data.settings, data.scrollerNode, $(data.scrollerNode).children(':eq(' + (data.settings.startAtSlide - 1) + ')'), data.settings.startAtSlide - 1, data.settings.startAtSlide - 1);
                $(data.stageNode).data('args', args);

                if(data.settings.onSliderUpdate != '') {
                    data.settings.onSliderUpdate(args);
                }

            });

        },

        addSlide: function(slideNode, slidePosition) {

            return this.each(function() {

                var $this = $(this);
                var data = $this.data('iosslider');
                if(data == undefined) return false;

                if($(data.scrollerNode).children().length == 0) {

                    $(data.scrollerNode).append(slideNode);
                    $this.data('args').currentSlideNumber = 1;

                } else if(!data.settings.infiniteSlider) {

                    if(slidePosition <= data.numberOfSlides) {
                        $(data.scrollerNode).children(':eq(' + (slidePosition - 1) + ')').before(slideNode);
                    } else {
                        $(data.scrollerNode).children(':eq(' + (slidePosition - 2) + ')').after(slideNode);
                    }

                    if($this.data('args').currentSlideNumber >= slidePosition) {
                        $this.data('args').currentSlideNumber++;
                    }

                } else {

                    if(slidePosition == 1) {
                        $(data.scrollerNode).children(':eq(0)').before(slideNode);
                    } else {
                        $(data.scrollerNode).children(':eq(' + (slidePosition - 2) + ')').after(slideNode);
                    }

                    if((infiniteSliderOffset[data.sliderNumber] < -1) && (true)) {
                        activeChildOffsets[data.sliderNumber]--;
                    }

                    if($this.data('args').currentSlideNumber >= slidePosition) {
                        activeChildOffsets[data.sliderNumber]++;
                    }

                }

                $this.data('iosslider').numberOfSlides++;

                methods.update(this);

            });

        },

        removeSlide: function(slideNumber) {

            return this.each(function() {

                var $this = $(this);
                var data = $this.data('iosslider');
                if(data == undefined) return false;

                $(data.scrollerNode).children(':eq(' + (slideNumber - 1) + ')').remove();
                if(activeChildOffsets[data.sliderNumber] > (slideNumber - 1)) {
                    activeChildOffsets[data.sliderNumber]--;
                }

                $this.data('iosslider').numberOfSlides--;

                methods.update(this);

            });

        },

        goToSlide: function(slide, duration, node) {

            if(node == undefined) {
                node = this;
            }

            return $(node).each(function() {

                var $this = $(this);
                var data = $this.data('iosslider');

                if((data == undefined) || data.shortContent) return false;

                slide = (slide > data.childrenOffsets.length) ? data.childrenOffsets.length - 1 : slide - 1;

                if(duration != undefined)
                    data.settings.autoSlideTransTimer = duration;

                helpers.changeSlide(slide, $(data.scrollerNode), $(data.slideNodes), slideTimeouts[data.sliderNumber], data.scrollbarClass, data.scrollbarWidth, data.stageWidth, data.scrollbarStageWidth, data.scrollMargin, data.scrollBorder, data.originalOffsets, data.childrenOffsets, data.slideNodeOuterWidths, data.sliderNumber, data.infiniteSliderWidth, data.numberOfSlides, data.centeredSlideOffset, data.settings);

            });

        },

        prevSlide: function(duration) {

            return this.each(function() {

                var $this = $(this);
                var data = $this.data('iosslider');
                if((data == undefined) || data.shortContent) return false;

                var slide = (activeChildOffsets[data.sliderNumber] + infiniteSliderOffset[data.sliderNumber] + data.numberOfSlides)%data.numberOfSlides;

                if(duration != undefined)
                    data.settings.autoSlideTransTimer = duration;

                if((slide > 0) || data.settings.infiniteSlider) {
                    helpers.changeSlide(slide - 1, $(data.scrollerNode), $(data.slideNodes), slideTimeouts[data.sliderNumber], data.scrollbarClass, data.scrollbarWidth, data.stageWidth, data.scrollbarStageWidth, data.scrollMargin, data.scrollBorder, data.originalOffsets, data.childrenOffsets, data.slideNodeOuterWidths, data.sliderNumber, data.infiniteSliderWidth, data.numberOfSlides, data.centeredSlideOffset, data.settings);
                }

                activeChildOffsets[data.sliderNumber] = slide;

            });

        },

        nextSlide: function(duration) {

            return this.each(function() {

                var $this = $(this);
                var data = $this.data('iosslider');
                if((data == undefined) || data.shortContent) return false;

                var slide = (activeChildOffsets[data.sliderNumber] + infiniteSliderOffset[data.sliderNumber] + data.numberOfSlides)%data.numberOfSlides;

                if(duration != undefined)
                    data.settings.autoSlideTransTimer = duration;

                if((slide < data.childrenOffsets.length-1) || data.settings.infiniteSlider) {
                    helpers.changeSlide(slide + 1, $(data.scrollerNode), $(data.slideNodes), slideTimeouts[data.sliderNumber], data.scrollbarClass, data.scrollbarWidth, data.stageWidth, data.scrollbarStageWidth, data.scrollMargin, data.scrollBorder, data.originalOffsets, data.childrenOffsets, data.slideNodeOuterWidths, data.sliderNumber, data.infiniteSliderWidth, data.numberOfSlides, data.centeredSlideOffset, data.settings);
                }

                activeChildOffsets[data.sliderNumber] = slide;

            });

        },

        prevPage: function(duration, node) {

            if(node == undefined) {
                node = this;
            }

            return $(node).each(function() {

                var $this = $(this);
                var data = $this.data('iosslider');
                if(data == undefined) return false;

                var newOffset = helpers.getSliderOffset(data.scrollerNode, 'x') + data.stageWidth;

                if(duration != undefined)
                    data.settings.autoSlideTransTimer = duration;

                helpers.changeOffset(newOffset, $(data.scrollerNode), $(data.slideNodes), slideTimeouts[data.sliderNumber], data.scrollbarClass, data.scrollbarWidth, data.stageWidth, data.scrollbarStageWidth, data.scrollMargin, data.scrollBorder, data.originalOffsets, data.childrenOffsets, data.slideNodeOuterWidths, data.sliderNumber, data.infiniteSliderWidth, data.numberOfSlides, data.centeredSlideOffset, data.settings);

            });

        },

        nextPage: function(duration, node) {

            if(node == undefined) {
                node = this;
            }

            return $(node).each(function() {

                var $this = $(this);
                var data = $this.data('iosslider');
                if(data == undefined) return false;

                var newOffset = helpers.getSliderOffset(data.scrollerNode, 'x') - data.stageWidth;

                if(duration != undefined)
                    data.settings.autoSlideTransTimer = duration;

                helpers.changeOffset(newOffset, $(data.scrollerNode), $(data.slideNodes), slideTimeouts[data.sliderNumber], data.scrollbarClass, data.scrollbarWidth, data.stageWidth, data.scrollbarStageWidth, data.scrollMargin, data.scrollBorder, data.originalOffsets, data.childrenOffsets, data.slideNodeOuterWidths, data.sliderNumber, data.infiniteSliderWidth, data.numberOfSlides, data.centeredSlideOffset, data.settings);

            });

        },

        lock: function() {

            return this.each(function() {

                var $this = $(this);
                var data = $this.data('iosslider');
                if((data == undefined) || data.shortContent) return false;

                $(data.scrollerNode).css({
                    cursor: 'default'
                });
                touchLocks[data.sliderNumber] = true;

            });

        },

        unlock: function() {

            return this.each(function() {

                var $this = $(this);
                var data = $this.data('iosslider');
                if((data == undefined) || data.shortContent) return false;

                $(data.scrollerNode).css({
                    cursor: grabOutCursor
                });
                touchLocks[data.sliderNumber] = false;

            });

        },

        getData: function() {

            return this.each(function() {

                var $this = $(this);
                var data = $this.data('iosslider');
                if((data == undefined) || data.shortContent) return false;

                return data;

            });

        },

        autoSlidePause: function() {

            return this.each(function() {

                var $this = $(this);
                var data = $this.data('iosslider');
                if((data == undefined) || data.shortContent) return false;

                iosSliderSettings[data.sliderNumber].autoSlide = false;

                helpers.autoSlidePause(data.sliderNumber);

                return data;

            });

        },

        autoSlidePlay: function() {

            return this.each(function() {

                var $this = $(this);
                var data = $this.data('iosslider');
                if((data == undefined) || data.shortContent) return false;

                iosSliderSettings[data.sliderNumber].autoSlide = true;

                helpers.autoSlide($(data.scrollerNode), $(data.slideNodes), slideTimeouts[data.sliderNumber], data.scrollbarClass, data.scrollbarWidth, data.stageWidth, data.scrollbarStageWidth, data.scrollMargin, data.scrollBorder, data.originalOffsets, data.childrenOffsets, data.slideNodeOuterWidths, data.sliderNumber, data.infiniteSliderWidth, data.numberOfSlides, data.centeredSlideOffset, data.settings);

                return data;

            });

        }

    }

    /* public functions */
    $.fn.iosSlider = function(method) {

        if(methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('invalid method call!');
        }

    };

}) (jQuery);





/*! Magnific Popup - v0.9.9 - 2013-12-27
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2013 Dmitry Semenov; */
(function(e){var t,n,i,o,r,a,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",h="."+g,v="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,n){t.ev.on(g+e+h,n)},k=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},T=function(n,i){t.ev.triggerHandler(g+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},E=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},S=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=S(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(n){i||(i=e(document.body));var r;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var s,l=n.items;for(r=0;l.length>r;r++)if(s=l[r],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=r;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],a="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):o,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+h,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+h,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(r=0;c.length>r;r++){var d=c[r];d=d.charAt(0).toUpperCase()+d.slice(1),t["init"+d].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,n,i){n.close_replaceWith=E(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(E())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+h,function(e){27===e.keyCode&&t.close()}),I.on("resize"+h,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var u=t.wH=I.height(),m={};if(t.fixedContentPos&&t._hasScrollBar(u)){var g=t._getScrollbarSize();g&&(m.marginRight=g)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):m.overflow="hidden");var C=t.st.mainClass;return t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),T("BuildControls"),e("html").css(m),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||i),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),o.on("focusin"+h,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(u),T(f),n},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var n=C+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}o.off("keyup"+h+" focusin"+h),t.ev.off(h),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=t.st[i]?t.st[i].markup:!1;T("FirstMarkupParse",o),t.currTemplate[i]=o?e(o):!0}r&&r!==n.type&&t.container.removeClass("mfp-"+r+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,T(m,n),r=n.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(E()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;r.length>a;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,T("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(a>I.width())return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};T("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),T(p,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(h+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(h+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var P,O,z,M="inline",B=function(){z&&(O.after(z.addClass(P)).detach(),z=null)};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(M),x(l+"."+M,function(){B()})},getInline:function(n,i){if(B(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(O||(P=o.hiddenClass,O=k(P),P="mfp-"+P),z=r.after(O).detach().removeClass(P)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var F,H="ajax",L=function(){F&&i.removeClass(F)},A=function(){L(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),F=t.st.ajax.cursor,x(l+"."+H,A),x("BeforeChange."+H,A)},getAjax:function(n){F&&i.addClass(F),t.updateStatus("loading");var o=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};T("ParseAjax",a),t.appendContent(e(a.data),H),n.finished=!0,L(),t._setFocus(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){L(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var j,N=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,n=".image";t.types.push("image"),x(f+n,function(){"image"===t.currItem.type&&e.cursor&&i.addClass(e.cursor)}),x(l+n,function(){e.cursor&&i.removeClass(e.cursor),I.off("resize"+h)}),x("Resize"+n,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,j&&clearInterval(j),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){j&&clearInterval(j),j=setInterval(function(){return i.naturalWidth>0?(t._onImageHasSize(e),void 0):(n>200&&clearInterval(j),n++,3===n?o(10):40===n?o(50):100===n&&o(500),void 0)},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:N(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(j&&clearInterval(j),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var W,R=function(){return void 0===W&&(W=void 0!==document.createElement("p").style.MozTransform),W};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return d(),void 0;r=s(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-a-r};return R()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",D=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(Z),x("BeforeChange",function(e,t,n){t!==n&&(t===Z?D():n===Z&&D(!0))}),x(l+"."+Z,function(){D()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},Y=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,i=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,n&&n.enabled?(a+=" mfp-gallery",x(f+i,function(){n.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+i,function(e,n){n.text&&(n.text=Y(n.text,t.currItem.index,t.items.length))}),x(p+i,function(e,i,o,r){var a=t.items.length;o.counter=a>1?Y(n.tCounter,r.index,a):""}),x("BuildControls"+i,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y),s=r?"mfpFastClick":"click";o[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(o.add(a))}}),x(m+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+i,function(){o.off(i),t.wrap.off("click"+i),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;(t.direction?o:i)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?i:o)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),T("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,T("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(x("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),x("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,i=function(){I.off("touchmove"+r+" touchend"+r)},o="mfpFastClick",r="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var l,c,d,u,p,f;s.on("touchstart"+r,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+r,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,i())}).on("touchend"+r,function(e){i(),u||f>1||(a=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){a=!1},t),o())})})}s.on("click"+r,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),n&&I.off("touchmove"+r+" touchend"+r)}}(),_()})(window.jQuery||window.Zepto);


/**
 * placeholder
 */
(function(q,f,d){function r(b){var a={},c=/^jQuery\d+$/;d.each(b.attributes,function(b,d){d.specified&&!c.test(d.name)&&(a[d.name]=d.value)});return a}function g(b,a){var c=d(this);if(this.value==c.attr("placeholder")&&c.hasClass("placeholder"))if(c.data("placeholder-password")){c=c.hide().next().show().attr("id",c.removeAttr("id").data("placeholder-id"));if(!0===b)return c[0].value=a;c.focus()}else this.value="",c.removeClass("placeholder"),this==m()&&this.select()}function k(){var b,a=d(this),c=
    this.id;if(""==this.value){if("password"==this.type){if(!a.data("placeholder-textinput")){try{b=a.clone().attr({type:"text"})}catch(e){b=d("<input>").attr(d.extend(r(this),{type:"text"}))}b.removeAttr("name").data({"placeholder-password":a,"placeholder-id":c}).bind("focus.placeholder",g);a.data({"placeholder-textinput":b,"placeholder-id":c}).before(b)}a=a.removeAttr("id").hide().prev().attr("id",c).show()}a.addClass("placeholder");a[0].value=a.attr("placeholder")}else a.removeClass("placeholder")}
    function m(){try{return f.activeElement}catch(b){}}var h="placeholder"in f.createElement("input"),l="placeholder"in f.createElement("textarea"),e=d.fn,n=d.valHooks,p=d.propHooks;h&&l?(e=e.placeholder=function(){return this},e.input=e.textarea=!0):(e=e.placeholder=function(){this.filter((h?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":g,"blur.placeholder":k}).data("placeholder-enabled",!0).trigger("blur.placeholder");return this},e.input=h,e.textarea=l,e={get:function(b){var a=
        d(b),c=a.data("placeholder-password");return c?c[0].value:a.data("placeholder-enabled")&&a.hasClass("placeholder")?"":b.value},set:function(b,a){var c=d(b),e=c.data("placeholder-password");if(e)return e[0].value=a;if(!c.data("placeholder-enabled"))return b.value=a;""==a?(b.value=a,b!=m()&&k.call(b)):c.hasClass("placeholder")?g.call(b,!0,a)||(b.value=a):b.value=a;return c}},h||(n.input=e,p.value=e),l||(n.textarea=e,p.value=e),d(function(){d(f).delegate("form","submit.placeholder",function(){var b=
        d(".placeholder",this).each(g);setTimeout(function(){b.each(k)},10)})}),d(q).bind("beforeunload.placeholder",function(){d(".placeholder").each(function(){this.value=""})}))})(this,document,jQuery);



// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license
(function(){for(var e=0,b=["ms","moz","webkit","o"],a=0;a<b.length&&!window.requestAnimationFrame;++a)window.requestAnimationFrame=window[b[a]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[a]+"CancelAnimationFrame"]||window[b[a]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,b){var c=(new Date).getTime(),d=Math.max(0,16-(c-e)),f=window.setTimeout(function(){a(c+d)},d);e=c+d;return f});window.cancelAnimationFrame||(window.cancelAnimationFrame=
    function(a){clearTimeout(a)})})();

