/**
 * Created by tagdiv on 03.03.2017.
 */

/* global jQuery:{} */
/* global _:{} */

var tdConfirm;

(function( jQuery, undefined ) {

    'use strict';

    tdConfirm = {

        _isInitialized: false,

        _$content: undefined,
        _$confirmYes: undefined,
        _$confirmNo: undefined,
        _$confirmOk: undefined,

        _$infoContent: undefined,

        _$body: undefined,

        init: function() {

            if ( tdConfirm._isInitialized ) {
                return;
            }

            tdConfirm._$body = jQuery( 'body' );

            tdConfirm._$content = jQuery( '<div id="td-confirm" style="display: none;">' +
                '<div class="td-confirm-info"></div>' +
                '<div class="td-confirm-buttons">' +
                    '<button type="button" class="td-confirm-yes">Yes</button>' +
                    '<button type="button" class="td-confirm-no">No</button>' +
                    '<button type="button" class="td-confirm-ok" style="display: none;">OK</button>' +
                '</div>' +
            '</div>' );

            tdConfirm._$infoContent = tdConfirm._$content.find( '.td-confirm-info' );
            tdConfirm._$confirmYes = tdConfirm._$content.find( 'button.td-confirm-yes' );
            tdConfirm._$confirmNo = tdConfirm._$content.find( 'button.td-confirm-no' );
            tdConfirm._$confirmOk = tdConfirm._$content.find( 'button.td-confirm-ok' );

            tdConfirm._$body.append( tdConfirm._$content );

            tdConfirm._isInitialized = true;
        },

        /**
         *
         * @param caption
         * @param url - optional
         * @param objectContext - optional
         * @param callbackYes - optional
         * @param argsYes - optional
         * @param htmlInfoContent - optional
         * @param callbackNo - optional
         * @param argsNo - optional
         * @param okBox - optional
         */
        showModal: function(caption, objectContext, callbackYes, argsYes, htmlInfoContent, url, okBox, callbackOk) {

            tdConfirm.init();

            if ( 'undefined' === typeof url || null === url) {
                url = '#TB_inline?inlineId=td-confirm&width=480';
            }

            if ( 'undefined' === typeof objectContext || null === objectContext) {
                objectContext = window;
            }

            if ( 'undefined' === typeof htmlInfoContent || null === htmlInfoContent) {
                htmlInfoContent = '';
            }

            tdConfirm._$infoContent.html( htmlInfoContent );

            if ( 'undefined' === typeof okBox ) {

                // Remove any bound callback
                tdConfirm._$confirmYes.unbind();

                if ( 'undefined' === typeof callbackYes || null === callbackYes) {
                    tdConfirm._$confirmYes.click( function() {
                        tb_remove();
                        return true;
                    });
                } else {
                    if ( 'undefined' === typeof argsYes || null === argsYes) {
                        argsYes = [];
                    }
                    tdConfirm._$confirmYes.click( function() {
                        callbackYes.apply( objectContext, argsYes );
                    });
                }

                // Remove any bound callback
                tdConfirm._$confirmNo.unbind();
                tdConfirm._$confirmNo.click( function() {
                    tb_remove();
                    return false;
                });

            } else {
                //hide yes and no buttons
                tdConfirm._$confirmNo.hide();
                tdConfirm._$confirmYes.hide();
                //display ok button
                tdConfirm._$confirmOk.show();

                if ( 'undefined' === typeof callbackOk || null === callbackOk) {
                    tdConfirm._$confirmOk.click( function() {
                        tb_remove();
                        return true;
                    });
                } else {
                    tdConfirm._$confirmOk.click( function() {
                        callbackOk.apply(objectContext);
                    });
                }
            }


            tdConfirm._$body.addClass( 'td-thickbox-loading' );

            tb_show( caption, url );

            var $TBWindow = jQuery( '#TB_window' );

            $TBWindow.addClass( 'td-thickbox' );

            if (tdConfirm._$infoContent.height() > 400) {
                $TBWindow.addClass( 'td-thickbox-fixed' );
            }

            tdConfirm._$body.removeClass( 'td-thickbox-loading' );
        }
    };

    // Important! 'init' can't be called here because it ads content in DOM (eventually onReady or onLoad, but it's enough if it's called on showModal)
    // tdConfirm.init();


})( jQuery );

