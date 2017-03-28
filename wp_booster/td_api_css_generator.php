<?php
/**
 * Created by PhpStorm.
 * User: andromeda
 * Date: 3/27/2017
 * Time: 5:07 PM
 */

class td_api_css_generator {

    private static $css_buffer = '';
    private static $used = false;


    static function add($css_id, $css = '') {
        if (self::$used === true) {
            td_util::error(__FILE__, 'td_api_css_generator::add - the get_all method was already called');
            die;
        }
        self::$css_buffer .= "\n" . $css . "\n";

    }


    static function get_all() {
        self::$used = true;
        return self::$css_buffer;
    }


}