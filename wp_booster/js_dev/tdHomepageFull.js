/**
 * Created by tagdiv on 30.05.2016.
 */

/* global jQuery: {} */

var tdHomepageFull = {};

(function( jQuery, undefined ) {

    'use strict';

    tdHomepageFull = {

        items: [],

        item: function() {

            // OPTIONAL - here we store the block Unique ID. This enables us to delete the item via this id @see tdHomepageFull.deleteItem
            this.blockUid = '';

            this.$tmplBlock = undefined;
        },

        /**
         *
         * @param item tdHomepageFull.item
         */
        addItem: function( item ) {
            if ( tdHomepageFull.items.length ) {
                return;
            }

            switch ( item.theme_name ) {
                case 'Newsmag': tdHomepageFull._addNewsmagItem( item );
                    break;
                default:
                    tdHomepageFull._addItem( item );
                    break;
            }
        },


        deleteItem: function( blockUid ) {

            for (var i = 0; i < tdHomepageFull.items.length; i++) {

                var currentItem = tdHomepageFull.items[ i ];

                if ( currentItem.blockUid === blockUid ) {

                    switch ( currentItem.theme_name ) {
                        case 'Newsmag': tdHomepageFull._deleteNewsmagItem( currentItem, i );
                            break;
                        default:
                            tdHomepageFull._deleteItem( currentItem, i );
                            break;
                    }
                }
            }
            return false;
        },

        _addItem: function( item ) {
            // The block template script
            item.$tmplBlock = jQuery( '#' + item.blockUid + '_tmpl' );

            // add the template
            jQuery( '.td-header-wrap' ).after( item.$tmplBlock.html() );

            // make the wrapper and the image -> and add the image inside
            var td_homepage_full_bg_image_wrapper = jQuery( '<div class="backstretch"></div>' );
            var td_homepage_full_bg_image = jQuery( '<img class="td-backstretch not-parallax" src="' + item.postFeaturedImage + '"/>' );
            td_homepage_full_bg_image_wrapper.append( td_homepage_full_bg_image );

            // add to body
            jQuery( 'body' ).prepend( td_homepage_full_bg_image_wrapper );

            // run the backstracher
            var tdBackstrItem = new tdBackstr.item();
            tdBackstrItem.wrapper_image_jquery_obj = td_homepage_full_bg_image_wrapper;
            tdBackstrItem.image_jquery_obj = td_homepage_full_bg_image;
            tdBackstr.add_item( tdBackstrItem );


            // The DOM article reference (article has already been inserted)
            item.$article = jQuery( '#post-' + item.postId );

            // The background image
            item.$bgImageWrapper = td_homepage_full_bg_image_wrapper;

            // The backstretch item
            item.backstrItem = tdBackstrItem;

            tdHomepageFull.items.push( item );
        },

        _addNewsmagItem: function( item ) {

            /// The block template script
            item.$tmplBlock = jQuery( '#' + item.blockUid + '_tmpl' );

            jQuery('body').addClass('single_template_6'); // add single_template_6 to space the content
            jQuery('#td-outer-wrap').prepend( item.$tmplBlock.html());

            //'jQuery(\'body\').prepend(\'<div class="td-full-screen-header-image-wrap"><div id="td-full-screen-header-image" class="td-image-gradient"></div></div>\');' . "\r\n" .

            var td_homepage_full_bg_image_wrapper1 = jQuery('<div class="td-full-screen-header-image-wrap"></div>');
            var td_homepage_full_bg_image_wrapper2 = jQuery('<div id="td-full-screen-header-image" class="td-image-gradient"></div>');
            var td_homepage_full_bg_image = jQuery('<img class="td-backstretch" src="' + item.postFeaturedImage + '"/>');

            td_homepage_full_bg_image_wrapper1.append(td_homepage_full_bg_image_wrapper2);
            td_homepage_full_bg_image_wrapper2.append(td_homepage_full_bg_image);

            // add to body
            jQuery('#td-outer-wrap').prepend(td_homepage_full_bg_image_wrapper1);

            // The background image
            item.$bgImageWrapper = td_homepage_full_bg_image_wrapper1;

            // run the backstracher
            var tdBackstrItem = new tdBackstr.item();
            tdBackstrItem.wrapper_image_jquery_obj = td_homepage_full_bg_image_wrapper1;
            tdBackstrItem.image_jquery_obj = td_homepage_full_bg_image;

            tdBackstr.add_item(tdBackstrItem);

            // The backstretch item
            item.backstrItem = tdBackstrItem;

            jQuery('.td-read-down a').click(function(event){
                event.preventDefault();
                tdUtil.scrollToPosition(jQuery('.td-full-screen-header-image-wrap').height(), 1200);
            });

            tdHomepageFull.items.push( item );
        },


        _deleteItem: function( item, index ) {

            // Remove the block template script
            item.$tmplBlock.remove();

            // Remove the article
            item.$article.remove();

            // Remove the background image
            item.$bgImageWrapper.remove();

            tdHomepageFull.items.splice(index, 1); // remove the item from the "array"

            if ( tdBackstr.deleteItem( item.blockUid ) ) {

                item.backstrItem = undefined;
            }

            var existingClassName = document.body.className;

            existingClassName = existingClassName.replace(/td-boxed-layout/g, '');
            existingClassName = existingClassName.replace(/single_template_8/g, '');
            existingClassName = existingClassName.replace(/homepage-post/g, '');

            document.body.className = existingClassName;
        },

        _deleteNewsmagItem: function(item, index) {

            // Remove the block template script
            item.$tmplBlock.remove();

            // Remove the article
            //item.$article.remove();

            // Remove the background image
            item.$bgImageWrapper.remove();

            tdHomepageFull.items.splice(index, 1); // remove the item from the "array"

            if ( tdBackstr.deleteItem( item.blockUid ) ) {

                item.backstrItem = undefined;
            }

            var existingClassName = document.body.className;

            existingClassName = existingClassName.replace(/single_template_6/g, '');

            document.body.className = existingClassName;
        }
    };

})( jQuery );
