/*!
 * flipGallery - jQuery Powered Animated Photo Gallery
 * version: 1.1.1
 * @requires jQuery v1.5 or later
 *
 * License at http://flipgallery.net/#download
 * 
 * Example at http://flipgallery.net
 *
 * Copyright 2014 flipGallery.net
 *
 */

// BEFORE YOU START
// ----------------

// In this document you can add your images, adjust the layout,
// co-ordination and speed of flipGallery. flipGallery does not
// require an external CSS file and all elements of flipGallery
// can be controlled from here. flipGallery's background is
// transparent, so it will overlay the color and/or images set
// in your html document. Please follow the annotations and in
// a few minutes you will be up and running.

// YOUR CONTENT
// ------------

// To get flipGallery up and running you will need to insert 
// your content:

var fg_my_content = {
        
        content_master: {
                
                gallery_master_folder: 'img/gallery_images',
                
                // This is the main folder where the images are
                // kept in relation to your html file
                // (for example: gallery_master_folder: 'images',).
                // If all the images are kept in different folders
                // on the main directory level, then simply leave
                // this empty (like so: gallery_master_folder: '',).
                
                main_menu_title: '',
                
                // This is the main title for your galleries menu.
                
                // You can also insert html in here. Please be sure
                // to use double quotes ("), as opposed to single
                // quotes (') to avoid any output errors.
                
        },
               
        gallery_1: {
                
                cover_thumb: 'graduation_photos/graduation1tn.jpg',
                gallery_title: 'Congrats to our graduates',
                image_1: { thumb: 'graduation_photos/graduation1tn.jpg', enlarged: 'graduation_photos/graduation1.jpg', text: ''},
                image_2: { thumb: 'graduation_photos/graduation2tn.png', enlarged: 'graduation_photos/graduation2.jpg', text: ''},
                image_3: { thumb: 'graduation_photos/graduation3tn.png', enlarged: 'graduation_photos/graduation3.jpg', text: ''},
                image_4: { thumb: 'graduation_photos/graduation4tn.png', enlarged: 'graduation_photos/graduation4.jpg', text: ''},
                image_5: { thumb: 'graduation_photos/graduation5tn.png', enlarged: 'graduation_photos/graduation5.jpg', text: ''},
                image_6: { thumb: 'graduation_photos/graduation6tn.png', enlarged: 'graduation_photos/graduation6.jpg', text: ''},
                image_7: { thumb: 'graduation_photos/graduation7tn.png', enlarged: 'graduation_photos/graduation7.jpg', text: ''},
                image_8: { thumb: 'graduation_photos/graduation8tn.png', enlarged: 'graduation_photos/graduation8.jpg', text: ''},
                image_9: { thumb: 'graduation_photos/graduation9tn.png', enlarged: 'graduation_photos/graduation9.jpg', text: ''},
                image_10: { thumb: 'graduation_photos/graduation10tn.png', enlarged: 'graduation_photos/graduation10.jpg', text: ''},
                image_11: { thumb: 'graduation_photos/graduation11tn.png', enlarged: 'graduation_photos/graduation11.jpg', text: ''},
                image_12: { thumb: 'graduation_photos/graduation12tn.png', enlarged: 'graduation_photos/graduation12.jpg', text: ''},
                image_13: { thumb: 'graduation_photos/graduation13tn.png', enlarged: 'graduation_photos/graduation13.jpg', text: ''},
                image_14: { thumb: 'graduation_photos/graduation14tn.png', enlarged: 'graduation_photos/graduation14.jpg', text: ''},
                image_15: { thumb: 'graduation_photos/graduation15tn.png', enlarged: 'graduation_photos/graduation15.jpg', text: ''},
                image_16: { thumb: 'graduation_photos/graduation16tn.png', enlarged: 'graduation_photos/graduation16.jpg', text: ''},
                image_17: { thumb: 'graduation_photos/graduation17tn.png', enlarged: 'graduation_photos/graduation17.jpg', text: ''},
                image_18: { thumb: 'graduation_photos/graduation18tn.png', enlarged: 'graduation_photos/graduation18.jpg', text: ''},
                image_19: { thumb: 'graduation_photos/graduation19tn.png', enlarged: 'graduation_photos/graduation19.jpg', text: ''},
                image_20: { thumb: 'graduation_photos/graduation20tn.png', enlarged: 'graduation_photos/graduation20.jpg', text: ''},
                image_21: { thumb: 'graduation_photos/graduation21tn.png', enlarged: 'graduation_photos/graduation21.jpg', text: ''},
                image_22: { thumb: 'graduation_photos/graduation22tn.png', enlarged: 'graduation_photos/graduation22.jpg', text: ''}
                
        },
    
        gallery_2: {
                
                cover_thumb: 'alumni_game/alumni14tn.png',
                gallery_title: 'Alumni Game',
                image_1: { thumb: 'alumni_game/alumni1.jpg', enlarged: 'alumni_game/alumni1.jpg', text: '' },
                image_2: { thumb: 'alumni_game/alumni2tn.png', enlarged: 'alumni_game/alumni2.jpg', text: '' },
                image_3: { thumb: 'alumni_game/alumni3tn.png', enlarged: 'alumni_game/alumni3.jpg', text: '' },
                image_4: { thumb: 'alumni_game/alumni4tn.png', enlarged: 'alumni_game/alumni4.jpg', text: '' },
                image_5: { thumb: 'alumni_game/alumni5tn.png', enlarged: 'alumni_game/alumni5.jpg', text: '' },
                image_6: { thumb: 'alumni_game/alumni6tn.png', enlarged: 'alumni_game/alumni6.jpg', text: '' },
                image_7: { thumb: 'alumni_game/alumni7tn.png', enlarged: 'alumni_game/alumni7.jpg', text: '' },
                image_8: { thumb: 'alumni_game/alumni8tn.png', enlarged: 'alumni_game/alumni8.jpg', text: '' },
                image_9: { thumb: 'alumni_game/alumni9tn.png', enlarged: 'alumni_game/alumni9.jpg', text: '' },
                image_10: { thumb: 'alumni_game/alumni10tn.png', enlarged: 'alumni_game/alumni10.jpg', text: '' },
                image_11: { thumb: 'alumni_game/alumni11tn.png', enlarged: 'alumni_game/alumni11.jpg', text: '' },
                image_12: { thumb: 'alumni_game/alumni12tn.png', enlarged: 'alumni_game/alumni12.jpg', text: '' },
                image_13: { thumb: 'alumni_game/alumni13tn.png', enlarged: 'alumni_game/alumni13.jpg', text: '' },
                image_14: { thumb: 'alumni_game/alumni14tn.png', enlarged: 'alumni_game/alumni14.jpg', text: '' },
                image_15: { thumb: 'alumni_game/alumni15tn.png', enlarged: 'alumni_game/alumni15.jpg', text: '' },
                image_16: { thumb: 'alumni_game/alumni16tn.png', enlarged: 'alumni_game/alumni16.jpg', text: '' },
                image_17: { thumb: 'alumni_game/alumni17tn.png', enlarged: 'alumni_game/alumni17.jpg', text: '' },
                image_18: { thumb: 'alumni_game/alumni18tn.png', enlarged: 'alumni_game/alumni18.jpg', text: '' },
                image_19: { thumb: 'alumni_game/alumni19tn.png', enlarged: 'alumni_game/alumni19.jpg', text: '' },
                image_20: { thumb: 'alumni_game/alumni20tn.png', enlarged: 'alumni_game/alumni20.jpg', text: '' },
                image_21: { thumb: 'alumni_game/alumni21tn.png', enlarged: 'alumni_game/alumni21.jpg', text: '' },
                image_22: { thumb: 'alumni_game/alumni22tn.png', enlarged: 'alumni_game/alumni22.jpg', text: '' }
                
        },
    
        gallery_3: {
                
                cover_thumb: 'lb_tournament/lb4tn.png',
                gallery_title: 'Long Beach Tournament',
                image_1: { thumb: 'lb_tournament/lb1tn.png', enlarged: 'lb_tournament/lb1.jpg', text: '' },
                image_2: { thumb: 'lb_tournament/lb2tn.png', enlarged: 'lb_tournament/lb2.jpg', text: '' },
                image_3: { thumb: 'lb_tournament/lb3tn.png', enlarged: 'lb_tournament/lb3.jpg', text: '' },
                image_4: { thumb: 'lb_tournament/lb4tn.png', enlarged: 'lb_tournament/lb4.jpg', text: '' },
                image_5: { thumb: 'lb_tournament/lb5tn.png', enlarged: 'lb_tournament/lb5.jpg', text: '' },
                image_6: { thumb: 'lb_tournament/lb6tn.png', enlarged: 'lb_tournament/lb6.jpg', text: '' },
                image_7: { thumb: 'lb_tournament/lb7tn.png', enlarged: 'lb_tournament/lb7.jpg', text: '' },
                image_8: { thumb: 'lb_tournament/lb8tn.png', enlarged: 'lb_tournament/lb8.jpg', text: '' },
                image_9: { thumb: 'lb_tournament/lb9tn.png', enlarged: 'lb_tournament/lb9.jpg', text: '' },
                image_10: { thumb: 'lb_tournament/lb10tn.png', enlarged: 'lb_tournament/lb10.jpg', text: '' },
                image_11: { thumb: 'lb_tournament/lb11tn.png', enlarged: 'lb_tournament/lb11.jpg', text: '' },
                image_12: { thumb: 'lb_tournament/lb12tn.png', enlarged: 'lb_tournament/lb12.jpg', text: '' },
                image_13: { thumb: 'lb_tournament/lb13tn.png', enlarged: 'lb_tournament/lb13.jpg', text: '' },
                image_14: { thumb: 'lb_tournament/lb14tn.png', enlarged: 'lb_tournament/lb14.jpg', text: '' },
                image_15: { thumb: 'lb_tournament/lb15tn.png', enlarged: 'lb_tournament/lb15.jpg', text: '' },
                image_16: { thumb: 'lb_tournament/lb16tn.png', enlarged: 'lb_tournament/lb16.jpg', text: '' },
                image_17: { thumb: 'lb_tournament/lb17tn.png', enlarged: 'lb_tournament/lb17.jpg', text: '' },
                image_18: { thumb: 'lb_tournament/lb18tn.png', enlarged: 'lb_tournament/lb18.jpg', text: '' },
                image_19: { thumb: 'lb_tournament/lb19tn.png', enlarged: 'lb_tournament/lb19.jpg', text: '' },
                image_20: { thumb: 'lb_tournament/lb20tn.png', enlarged: 'lb_tournament/lb20.jpg', text: '' }
                
        },
    
        gallery_4: {
                
                cover_thumb: 'social/social4tn.png',
                gallery_title: 'Social and Random Practices',
                image_1: { thumb: 'social/social1tn.png', enlarged: 'social/social1.jpg', text: '' },
                image_2: { thumb: 'social/social2tn.png', enlarged: 'social/social2.jpg', text: '' },
                image_3: { thumb: 'social/social3tn.png', enlarged: 'social/social3.jpg', text: '' },
                image_4: { thumb: 'social/social4tn.png', enlarged: 'social/social4.jpg', text: '' },
                image_5: { thumb: 'social/social5tn.png', enlarged: 'social/social5.jpg', text: '' },
                image_6: { thumb: 'social/social6tn.png', enlarged: 'social/social6.jpg', text: '' },
                image_7: { thumb: 'social/social7tn.png', enlarged: 'social/social7.jpg', text: '' },
                image_8: { thumb: 'social/social8tn.png', enlarged: 'social/social8.jpg', text: '' },
                image_9: { thumb: 'social/social9tn.png', enlarged: 'social/social9.jpg', text: '' },
                image_10: { thumb: 'social/social10tn.png', enlarged: 'social/social10.jpg', text: '' },
                image_11: { thumb: 'social/social11tn.png', enlarged: 'social/social11.jpg', text: '' },
                image_12: { thumb: 'social/social12tn.png', enlarged: 'social/social12.png', text: '' }
                
        }, 
        gallery_5: {
                
                cover_thumb: 'uc_tournament/uc6tn.png',
                gallery_title: 'UC Tournament',
                image_1: { thumb: 'uc_tournament/uc1tn.png', enlarged: 'uc_tournament/uc1.JPG', text: '' },
                image_2: { thumb: 'uc_tournament/uc2tn.png', enlarged: 'uc_tournament/uc2.JPG', text: '' },
                image_3: { thumb: 'uc_tournament/uc3tn.png', enlarged: 'uc_tournament/uc3.JPG', text: '' },
                image_4: { thumb: 'uc_tournament/uc4tn.png', enlarged: 'uc_tournament/uc4.JPG', text: '' },
                image_5: { thumb: 'uc_tournament/uc5tn.png', enlarged: 'uc_tournament/uc5.JPG', text: '' },
                image_6: { thumb: 'uc_tournament/uc6tn.png', enlarged: 'uc_tournament/uc6.JPG', text: '' },
                image_7: { thumb: 'uc_tournament/uc7tn.png', enlarged: 'uc_tournament/uc7.JPG', text: '' },
                image_8: { thumb: 'uc_tournament/uc8tn.png', enlarged: 'uc_tournament/uc8.JPG', text: '' },
                image_9: { thumb: 'uc_tournament/uc9tn.png', enlarged: 'uc_tournament/uc9.JPG', text: '' },
                image_10: { thumb: 'uc_tournament/uc10tn.png', enlarged: 'uc_tournament/uc10.JPG', text: '' },
                image_11: { thumb: 'uc_tournament/uc11tn.png', enlarged: 'uc_tournament/uc11.JPG', text: '' },
                image_12: { thumb: 'uc_tournament/uc12tn.png', enlarged: 'uc_tournament/uc12.JPG', text: '' },
                image_13: { thumb: 'uc_tournament/uc13tn.png', enlarged: 'uc_tournament/uc13.JPG', text: '' },
                image_14: { thumb: 'uc_tournament/uc14tn.png', enlarged: 'uc_tournament/uc14.JPG', text: '' },
                image_15: { thumb: 'uc_tournament/uc15tn.png', enlarged: 'uc_tournament/uc15.JPG', text: '' },
                image_16: { thumb: 'uc_tournament/uc16tn.png', enlarged: 'uc_tournament/uc16.JPG', text: '' },
                image_17: { thumb: 'uc_tournament/uc17tn.png', enlarged: 'uc_tournament/uc17.JPG', text: '' }
                
        },


};

// Now you have inserted your content, flipGallery is now ready to try.

// After you have given it a test, the next step is to take a look
// at the settings and adjust where needed:

// MODE SETTINGS
// -------------

var fg_mode_settings = {
        
        edit_mode: 1,
        
        // 1 = On & 0 = Off.
        
        // ***IMPORTANT***: It is recommended to leave this
        // option switched on during assembly of your galleries
        // as it will prevent your images from caching.
        // Once published online, it is then recommended that you
        // switch it off, as it will result in the reduction of
        // workload on your hosting.
        
}

// VISUAL SETTINGS
// ---------------

var fg_visual_settings = {
        
        // *Content Visual Settings*
        
        position_property: 'float: left;',
        
        // How you wish to 'position' or 'float' flipGallery
        // within your html document (for example: 'float: right;'
        // or 'position: fixed; left: 10px; top: 10px;' or
        // 'margin:auto; position:relative;').
        
        // *Gallery Navigation Visual Settings*
        
        gallery_navigation_bar_margin_top: 10, // (pixels)
        
        gallery_navigation_bar_height: 30, // (pixels)
    
        // *Thumbnail Visual Settings*

        thumbnail_columns: 4, 
    
        thumbnail_rows: 3, 
    
        thumbnail_width: 230, // (pixels)
    
        thumbnail_height: 230, // (pixels)
    
        thumbnail_space_top: 5, // (pixels)
    
        thumbnail_space_left: 5, // (pixels)
    
        thumbnail_space_right: 5, // (pixels)
    
        thumbnail_space_bottom: 5, // (pixels)
    
        // *Lightbox Visual Settings*
    
        lightbox_background_opacity: 0.8,
    
        lightbox_border_width: 10, // (pixels)
    
        lightbox_border_color: '#fff'
    
}

// SPEED SETTINGS
// --------------

var fg_speed_settings = {
    
        thumbnail_flip_speed: 800,
    
        // Speed of complete thumbnail flip (milliseconds).
    
        initial_time_gap_between_thumbnails: 200,
    
        // Time gap between each thumbnail flipping in when the
        // page first loads (milliseconds).
    
        normal_time_gap_between_thumbnails: 50
    
        // Time gap between each thumbnail flipping round after
        // page load (milliseconds).

}

// TEXT SETTINGS
// -------------

var fg_text_settings = {
        
        // *Gallery Title Text Settings*
    
        gallery_title_text_style: 'font-size: 18px; color: #000; font-weight: bold;',
    
        // *Gallery Navigation Text Settings*
    
        return_to_main_gallery_text: '&lsaquo;&lsaquo; Back To Main Gallery',
    
        return_to_main_gallery_text_style: 'font-size: 14px; color: #333; font-weight: bold; text-decoration: none;',
    
        next_gallery_text: 'Next &rsaquo;&rsaquo;',
    
        back_gallery_text: '&lsaquo;&lsaquo; Back',
    
        next_and_back_text_style: 'font-size: 14px; color: #333; font-weight: bold; text-decoration: none;',
    
        page_number_page: 'Page',
    
        page_number_of: 'of',
    
        page_number_text_style: 'font-size: 13px; color: #999;',
    
        // *Picture/Lightbox Text Settings*
    
        lightbox_text_style: 'font-size: 14px; line-height: 1.4; color: #000; text-align: center;',
    
        lightbox_text_background_style: 'background-color: #fff; opacity:0.8;',
    
        // *Picture/Lightbox Navigation Text Settings*
    
        next_image_text: 'Next &rsaquo;&rsaquo;',
    
        back_image_text: '&lsaquo;&lsaquo; Back',
    
        next_and_back_image_text_style: 'font-weight: bold; color: #000;',
    
        image_number_page: 'Image',
    
        image_number_of: 'of',
    
        image_number_text_style: 'color: #999;',

        // *Image Streaming Text Settings*

        loading_text_color: '#fff',
    
        loading_text_opacity: '0.3'
    
}

// A NOTE FOR DEVELOPERS
// ---------------------

// Only the variables in this document are global. They are all
// prefixed with 'fg_'to help them not to conflict with any
// other javascript variables that may be included in your document.

// AND FINALLY
// -----------

// Please feel free to remove all the annotations but be sure to
// keep the header (containing the ownership and copyright) intact.

// Thanks,

// The flipGallery Team