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

        _$infoContent: undefined,

        init: function() {

            if ( tdConfirm._isInitialized ) {
                return;
            }

            tdConfirm._$content = jQuery( '<div id="td-confirm" style="display: none;"></div>' );
            tdConfirm._$confirmYes = jQuery( '<button type="button" class="td-confirm-yes">Yes</button>' );
            tdConfirm._$confirmNo = jQuery( '<button type="button" class="td-confirm-no">No</button>' );
            tdConfirm._$infoContent = jQuery( '<div class="td-confirm-info"></div>' );

            jQuery( 'body' ).append( tdConfirm._$content );

            tdConfirm._$content.append( tdConfirm._$infoContent );
            tdConfirm._$content.append( tdConfirm._$confirmYes );
            tdConfirm._$content.append( tdConfirm._$confirmNo );

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
         */
        showModal: function( caption, objectContext, callbackYes, argsYes, htmlInfoContent, url, callbackNo, argsNo ) {

            tdConfirm.init();

            if ( 'undefined' === typeof url ) {
                url = '#TB_inline?inlineId=td-confirm';
            }

            if ( 'undefined' === typeof objectContext ) {
                objectContext = window;
            }

            if ( 'undefined' === typeof htmlInfoContent ) {
                htmlInfoContent = '';
            }
            tdConfirm._$infoContent.html( htmlInfoContent );


            // Remove any bound callback
            tdConfirm._$confirmYes.unbind();

            if ( 'undefined' === typeof callbackYes ) {
                tdConfirm._$confirmYes.click( function() {
                    tb_remove();
                    return true;
                });
            } else {
                if ( 'undefined' === typeof argsYes ) {
                    argsYes = [];
                }
                tdConfirm._$confirmYes.click( function() {
                    callbackYes.apply( objectContext, argsYes );
                });
            }


            // Remove any bound callback
            tdConfirm._$confirmNo.unbind();
            if ( 'undefined' === typeof callbackNo ) {
                tdConfirm._$confirmNo.click( function() {
                    tb_remove();
                    return false;
                });
            } else {
                tdConfirm._$confirmNo.click( function() {
                    callbackNo.apply( objectContext, argsNo );
                });
            }

            tb_show( caption, url );
        }
    };

    // Important! 'init' can't be called here because it ads content in DOM (eventually onReady or onLoad, but it's enough if it's called on showModal)
    // tdConfirm.init();


})( jQuery );

