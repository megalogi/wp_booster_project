/*
    tagDiv wp-admin js
    used on posts meta options and in different places in the theme
 */

/* global jQuery:{} */

//init the variable if it's undefined, sometimes wordpress will not run the wp_footer hooks in wp-admin (in modals for example)
if (typeof td_get_template_directory_uri === 'undefined') {
    td_get_template_directory_uri = '';
}


function td_widget_attach_color_picker() {
    //hide all colorpickers
    jQuery('.td-color-picker-widget').hide();

    // tagdiv widget colorpicker
    jQuery('.widgets-php .td-color-picker-widget').each(function(){
        var $this = jQuery(this);
        var id = $this.attr('rel');
        $this.farbtastic('#' + id);
    });

    jQuery('.td-color-picker-field').click(function(){
        jQuery('#' + jQuery(this).data('td-w-color')).fadeIn();
    });


    jQuery(document).mousedown(function() {
        jQuery('.td-color-picker-widget').each(function() {
            var display = jQuery(this).css('display');
            if ( display == 'block' )
                jQuery(this).fadeOut();
        });
    });
}


function td_theme_update() {
    "use strict";
    if (typeof tdUpdateAvailable !== 'undefined' && tdUpdateAvailable !== null) {
        //appearance menu
        var updateCount = ' <span class="update-plugins"><span class="update-count">1</span></span>';
        jQuery('#menu-appearance .wp-menu-name').append(updateCount);

        var themeContainer = jQuery('.theme.active'),
            themeScreenshot = themeContainer.find('.theme-screenshot');

        //theme notice
        if (themeScreenshot.length > 0) {
            var updateBanner = '<div class="update-ionmag notice inline notice-warning notice-alt"><p>New version available. <a target="_blank" href="' + tdUpdateUrl + '"><button class="button-link" type="button">Update now</button></a></p></div>';
            themeScreenshot.after(updateBanner);
        }
        //overlay single (when only one theme is available)
        var themeOverlay = jQuery('.theme-overlay.active .theme-author');
        if (themeOverlay.length > 0) {
            var overlayBanner = '<div class="notice notice-warning notice-alt notice-large"><h3 class="notice-title">Update Available</h3><p><strong>There is a new version of ionMag available. <a target="_blank" href="' + tdUpdateUrl + '">View version ' + tdUpdateAvailable + ' details</a> or <a target="_blank" href="' + tdUpdateUrl + '">update now</a>.</strong></p></div>';
            themeOverlay.after(overlayBanner);
        }
        //overlay general (when multiple themes are available)
        themeContainer.on('click', function() {
            setTimeout(function() {
                var overlayAuthor = jQuery('.theme-overlay .theme-author');
                if (overlayAuthor.length > 0) {
                    var overlayGeneral = '<div class="notice notice-warning notice-alt notice-large"><h3 class="notice-title">Update Available</h3><p><strong>There is a new version of ionMag available. <a target="_blank" href="' + tdUpdateUrl + '">View version ' + tdUpdateAvailable + ' details</a> or <a target="_blank" href="' + tdUpdateUrl + '">update now</a>.</strong></p></div>';
                    overlayAuthor.after(overlayGeneral);
                }
            }, 50);
        });
    }
}
document.addEventListener("DOMContentLoaded", td_theme_update);


jQuery().ready(function() {



    td_widget_attach_color_picker();

    //alert(td_get_template_directory_uri);


    /*  ----------------------------------------------------------------------------
        Sidebar manager
     */
    jQuery('.td_rename').click(function(event){
        event.preventDefault();
        jQuery('.td-modal').hide('fast');
        jQuery(jQuery(this).attr('href')).show('fast');
    });


    jQuery('.td_modal_cancel').click(function(event){
        event.preventDefault();
        jQuery('.td-modal').hide('fast');
    });


    jQuery( 'body' ).on( 'click', '.tdc-tabs > a', function( event ) {

        event.preventDefault();

        var $this = jQuery( this ),
            $tdWidgetTabs =  $this.parent( '.tdc-tabs' ),
            $tdWidgetTabsContent =  $tdWidgetTabs.siblings( '.tdc-tab-content-wrap' );

        if ( $this.hasClass( 'tdc-tab-active' ) ) {
            return;
        }

        $tdWidgetTabs.find( 'a' ).removeClass( 'tdc-tab-active' );
        $this.addClass( 'tdc-tab-active' );

        // content - remove all visible classes
        $tdWidgetTabsContent.find( '.tdc-tab-content' ).removeClass( 'tdc-tab-content-visible' );

        // add the class to the good content
        var tabContentId = $this.data( 'tab-id' ),
            $currentWidgetTabsContent = $tdWidgetTabsContent.find( '.' + tabContentId );

        $currentWidgetTabsContent.addClass( 'tdc-tab-content-visible' );

        if ( 'tdc-tab-css' === tabContentId ) {

            var dataTdcCss = $currentWidgetTabsContent.data( 'tdc_css' );

            tdcCssEditor.init();

            $currentWidgetTabsContent.html(
                tdcCssEditor.addWidgetCssEditor(
                    {
                        param_name: 'tdc_css'
                    },
                    dataTdcCss
                )
            );

            tdcCssEditor.doActionPanelRender();
        }
    });

    jQuery( 'body' ).on( 'change', '.tdc-tab-content-wrap select[name$="[block_template_id]"]', function( event ) {

        event.preventDefault();

        var $this = jQuery( this ),
            $saveWidget = $this.closest( 'form' ).find( 'input[name="savewidget"]' );

        $saveWidget.trigger( 'click' );
    });


    /**
     * Used on widgets.php
     */
    jQuery( 'body' ).on( 'click', '.td-widget-attach-image', function(event) {

        var $this = jQuery( this );

        window.original_send_to_editor = window.send_to_editor;
        wp.media.editor.open( $this );

        //hide Create Gallery
        jQuery('.media-menu .media-menu-item:nth-of-type(2)').addClass('hidden');
        //hide Create Audio Playlist
        jQuery('.media-menu .media-menu-item:nth-of-type(3)').addClass('hidden');
        //Create Video Playlist
        jQuery('.media-menu .media-menu-item:nth-of-type(4)').addClass('hidden');


        window.send_to_editor = function( html ) {

            var imgLink = jQuery('img', html).attr('src'),
                imgClass = '';

            if ('undefined' === typeof imgLink) {
                imgLink = jQuery(html).attr('src');
                imgClass = jQuery(html).attr('class');
            } else {
                imgClass = jQuery('img', html).attr('class');
            }

            var regex = /wp-image-(\d+)/gi,
                matches = regex.exec(imgClass);

            var imgId = matches[1];

            //console.log(matches);
            //console.log(imgId);

            $this.attr( 'style', 'background-image: url( \'' + imgLink + '\') ');
            $this.data( 'image_link', imgLink );
            $this.data( 'image_id', imgId );

            $this.parent().find('input[type=hidden]').val(imgId);
            $this.parent().find('.td-widget-remove-image').removeClass( 'td-hidden-button' );

            //reset the send_to_editor function to its original state
            window.send_to_editor = window.original_send_to_editor;
        };

        return false;
    });


    /**
     * Used on widgets.php
     */
    jQuery( 'body' ).on( 'click', '.td-widget-remove-image', function(event) {
        var $this = jQuery( this ),
            $input = $this.siblings('input[type=hidden]'),
            $attachImage = $this.siblings('.td-widget-attach-image');

        $this.addClass( 'td-hidden-button' );

        $input.val('');

        $attachImage.attr( 'style', 'background-image: url("' + td_get_template_directory_uri + '/includes/wp_booster/wp-admin/images/no_img.png") ');
        $attachImage.data( 'image_link', '' );
        $attachImage.data( 'image_id', '' );
    });




    // mini detector - add css class to 'html' element on wp-admin (as td_js_generator does)
    (function(){
        var htmlTag = document.getElementsByTagName("html")[0];

        if ( navigator.userAgent.indexOf("MSIE 10.0") > -1 ) {
            htmlTag.className += ' ie10';
        }

        if ( !!navigator.userAgent.match(/Trident.*rv\:11\./) ) {
            htmlTag.className += ' ie11';
        }

        if ( /(iPad|iPhone|iPod)/g.test(navigator.userAgent) ) {
            htmlTag.className += ' td-md-is-ios';
        }

        var user_agent = navigator.userAgent.toLowerCase();
        if ( user_agent.indexOf("android") > -1 ) {
            htmlTag.className += ' td-md-is-android';
        }

        if ( -1 !== navigator.userAgent.indexOf('Mac OS X')  ) {
            htmlTag.className += ' td-md-is-os-x';
        }

        if ( /chrom(e|ium)/.test(navigator.userAgent.toLowerCase()) ) {
           htmlTag.className += ' td-md-is-chrome';
        }

        if ( -1 !== navigator.userAgent.indexOf('Firefox') ) {
            htmlTag.className += ' td-md-is-firefox';
        }

        if ( -1 !== navigator.userAgent.indexOf('Safari') && -1 === navigator.userAgent.indexOf('Chrome') ) {
            htmlTag.className += ' td-md-is-safari';
        }

        if( -1 !== navigator.userAgent.indexOf('IEMobile') ){
            htmlTag.className += ' td-md-is-iemobile';
        }

    })();

});