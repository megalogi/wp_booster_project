<?php

/**
 * Class td_block - base class for blocks
 * v 5.1 - td-composer edition :)
 */


class td_block {
	var $block_uid; // the block unique id on the page, it changes on every render
	var $td_query; //the query used to rendering the current block
	protected $td_block_template_data;

	private $atts = array(); //the atts used for rendering the current block
	private $td_block_template_instance; // the current block template instance that this block is using


	// by default all the blocks are loop blocks
	private $is_loop_block = true; // if it's a loop block, we will generate AJAX js, pulldown items and other stuff




    /**
     * the base render function. This is called by all the child classes of this class
     * @param $atts
     * @param $content
     * @return string ''
     */
    function render($atts, $content = null) {
	    // build the $this->atts

	    // print_r($atts);

	    $atts = $this->add_live_filter_atts($atts); // add live filter atts


	    // WARNING! all the atts MUST BE DEFINED HERE !!! It's easier to maintain and we always have a list of them all
	    $this->atts = shortcode_atts ( // add defaults (if an att is not in this list, it will be removed!)
		    array(
			    'limit' => 5,  // @todo trebuie refactoriata partea cu limita, in paginatie e hardcodat tot 5 si deja este setat in constructor aici
			    'sort' => '',
			    'post_ids' => '', // post id's filter (separated by commas)
			    'tag_slug' => '', // tag slug filter (separated by commas)
			    'autors_id' => '', // filter by authors ID ?
			    'installed_post_types' => '', // filter by custom post types
			    'category_id' => '',
			    'category_ids' => '',
			    'custom_title' => '',       // used in td_block_template_1.php
			    'custom_url' => '',         // used in td_block_template_1.php
			    'show_child_cat' => '',
			    'sub_cat_ajax' => '',
			    'ajax_pagination' => '',
			    'header_color' => '',       // used in td_block_template_1.php + here for js -> loading color
			    'header_text_color' => '',  // used in td_block_template_1.php

			    'ajax_pagination_infinite_stop' => '',
			    'td_column_number' => td_global::vc_get_column_number(), // if no column number passed, get from VC

			    // ajax preloader
			    'td_ajax_preloading' => '',


			    // drop down list + other live filters?
			    'td_ajax_filter_type' => '',
                'td_ajax_filter_ids' => '',
                'td_filter_default_txt' => __td('All', TD_THEME_NAME),

			    // classes?  @see get_block_classes
			    'color_preset' => '',
			    'border_top' => '',
			    'class' => '',
			    'el_class' => '',
			    'offset' => '', // the offset

			    'css' => '', //custom css - used by VC

			    'tdc_css' => '', //custom css - used by TagDiv Composer
			    'tdc_css_class' => '', // unique css class - used by TagDiv Composer to add inline css ('class' could not be used because it's not unique)
			    'tdc_css_class_style' => '', // unique css class - used by get_css to add inline css on td-element-style ('class' could not be used because it's not unique)

			    // live filters
			    // $atts['live_filter'] is set by the 'user'. cur_post_same_tags | cur_post_same_author | cur_post_same_categories
			    'live_filter' => '',

			    // the two live filters are set by @see td_block::add_live_filter_atts
			    'live_filter_cur_post_id' => '',      /** @see td_block::add_live_filter_atts */
			    'live_filter_cur_post_author' => '',  /** @see td_block::add_live_filter_atts */

			    'block_template_id' => '', // used to load a different block template on this specific block. By default the block will load the global block template from the panel
		    ),
		    $atts
	    );




		/*// @todo vezi daca e necesara chestia asta! si daca merge cum trebuie
	    if (!empty($this->atts['custom_title'])) {
		    $this->atts['custom_title'] = htmlspecialchars($this->atts['custom_title'], ENT_QUOTES );
	    }
	    if (!empty($this->atts['custom_url'])) {
			$this->atts['custom_url'] = htmlspecialchars($this->atts['custom_url'], ENT_QUOTES );
		}*/


	    //update unique id on each render
        $this->block_uid = td_global::td_generate_unique_id();

	    /** add the unique class to the block. The _rand class is used by the blocks js. @see tdBlocks.js  */
	    $unique_block_class = $this->block_uid . '_rand';
	    $this->add_class($unique_block_class);

	    // Set the 'tdc_css_class' parameter
	    $this->atts['tdc_css_class'] = $unique_block_class;

	    /** The _rand_style class is used by td-element-style to add style */
	    $unique_block_class_style = $this->block_uid . '_rand_style';
	    $this->atts['tdc_css_class_style'] = $unique_block_class_style;





	    $td_pull_down_items = array();




	    // do the query and make the AJAX filter only on loop blocks
		if ($this->is_loop_block() === true) {

			//by ref do the query
			$this->td_query = &td_data_source::get_wp_query($this->atts);

			// get the pull down items
			$td_pull_down_items = $this->block_loop_get_pull_down_items();
		}





        /**
         * Make a new block template instance (NOTE: ON EACH RENDER WE GENERATE A NEW BLOCK TEMPLATE)
         * td_block_template_x - Loaded via autoload
         * @see td_autoload_classes::loading_classes
         */

	    if (td_util::is_mobile_theme()) {

		    // The mobile theme uses only 'td_block_template_1' (in api this is the only registered block template)
		    $td_block_template_id = 'td_block_template_1';

	    } else {
		    $td_block_template_id = $this->atts['block_template_id'];
		    if ( empty( $td_block_template_id ) ) {
			    $td_block_template_id = td_options::get( 'tds_global_block_template', 'td_block_template_1' );
		    }

		    /**
	         * This allows us to overwrite the block templates that are in the theme on each demo.
	         * it loads the block template from the demo folder ONLY IF it exists
	         * @since 7/12/2016
	         */
	        $demo_id = td_util::get_loaded_demo_id();
	        if ($demo_id !== false) {
		        $custom_block_template_path = td_global::$demo_list[$demo_id]['folder']  . $td_block_template_id . '.php';
	            if (file_exists($custom_block_template_path)) {
	                require_once $custom_block_template_path;
	            }
	        }
	    }


        $this->td_block_template_data = array(
            'atts' => $atts,
            'block_uid' => $this->block_uid,
            'unique_block_class' => $unique_block_class,
            'td_pull_down_items' => $td_pull_down_items,
        );
        $this->td_block_template_instance = new $td_block_template_id($this->td_block_template_data);






        return '';
    }


	/**
	 * Returns the block css.
	 *
	 * !!WARNING - blocks that don't use this will not work with the TD composer design tab when Visual Composer is disabled
	 *              BUT the block will work just fine when VC is enabled
	 * @since 30 may 2016 - before it was echoed on render - no bueno
	 */
	protected function get_block_css() {
		$buffy = $this->block_template()->get_css();

		$css = $this->get_att('css');

		// VC adds the CSS att automatically so we don't have to do it
		if (!td_util::is_vc_installed() && !empty($css)) {
			$buffy .= PHP_EOL . '/* inline css att */' . PHP_EOL . $css;
		}


		$tdcCss = $this->get_att('tdc_css');
		$clearfixColumns = false;
		$cssOutput = '';
		$beforeCssOutput = '';
		$afterCssOutput = '';

		if (!empty($tdcCss)) {
			$buffy .= $this->generate_css($tdcCss, $clearfixColumns, $cssOutput, $beforeCssOutput, $afterCssOutput );
		}


		if (!empty($buffy)) {
			$buffy = PHP_EOL . '<style>' . PHP_EOL . $buffy . PHP_EOL . '</style>';
		}

		$tdcElementStyleCss = '';
		if ( !empty($cssOutput) || !empty($beforeCssOutput) || !empty($afterCssOutput) ) {
			$tdcElementStyleCss = PHP_EOL . '<div class="' . $this->get_att( 'tdc_css_class_style' ) . ' td-element-style"><style>' . $cssOutput . ' ' . $beforeCssOutput . ' ' . $afterCssOutput . '</style></div>';
		}

		if (!empty($buffy)) {

			if (!empty($tdcElementStyleCss)) {
				return $buffy . $tdcElementStyleCss;
			}
			return $buffy;
		} else if (!empty($tdcElementStyleCss)) {
			return $tdcElementStyleCss;
		}

		return '';
	}



	private function getBorderWidth($borderWidthCssProps) {

		$borderWidthCss = '';

		$borderSet = false;
		$borderSettings = array(
			'border-top-width' => '0px',
			'border-right-width' => '0px',
			'border-bottom-width' => '0px',
			'border-left-width' => '0px',
		);

		foreach ($borderWidthCssProps as $key => $val) {
			switch ($key) {
				case 'border-top-width':
					if (!empty($val)) {
						$borderSet = true;
						$borderSettings[$key] = $val;
					}
					break;

				case 'border-right-width':
					if (!empty($val)) {
						$borderSet = true;
						$borderSettings[$key] = $val;
					}
					break;

				case 'border-bottom-width':
					if (!empty($val)) {
						$borderSet = true;
						$borderSettings[$key] = $val;
					}
					break;

				case 'border-left-width':
					if (!empty($val)) {
						$borderSet = true;
						$borderSettings[$key] = $val;
					}
					break;
			}
		}

		if ($borderSet) {

			$borderWidthCss = 'border-width:';
			foreach ($borderSettings as $key => $val) {
				$borderWidthCss .= ' ' . $val;
			}
			$borderWidthCss .= ' !important;' . PHP_EOL;
		}

		return $borderWidthCss;
	}


	/**
	 * Generate css for blocks, inner columns, inner rows, columns and rows
	 * For inner rows and rows a new '.tdc-css' child element is added and its css is generated (This solution was adopted because we need an ::after element, and rows and inner rows already have an ::after element)
	 *
	 * @param $tdcCss - the property that will be decoded and parsed
	 * @param bool $clearfixColumns - flag used to know outside if the '.clearfix' element is added as last child in vc_row and vc_row_inner
	 * @param string $cssOutput - css output for td-element-style
	 * @param string $beforeCssOutput - css output for td-element-style::before
	 * @param string $afterCssOutput - css output for td-element-style::after
	 *
	 * @return string
	 */
	protected function generate_css( $tdcCss, &$clearfixColumns = false, &$cssOutput = '', &$beforeCssOutput = '', &$afterCssOutput = '' ) {

		//
		// Very Important! For stretched rows move the 'border' css settings on ::before, for all viewport settings
		//
		$moveBorderSettingsOnBefore = false;

		if (class_exists('vc_row') && $this instanceof vc_row) {
			$attFullWidth = $this->get_att( 'full_width' );
			if ($attFullWidth !== '') {
				$moveBorderSettingsOnBefore = true;
			}
		}





		$buffy = '';

		$tdcCssDecoded = base64_decode($tdcCss);

		if ( $tdcCssDecoded !== false ) {
			$tdcCssArray = json_decode( $tdcCssDecoded, true );

			if (!is_null($tdcCssArray) && is_array($tdcCssArray)) {
				$tdcCssProcessed = '';



				// Values of these properties must be numeric
				$numericCssProps = array(
					'border-radius',

					'margin-top',
					'margin-right',
					'margin-bottom',
					'margin-left',

					'border-top-width',
					'border-right-width',
					'border-bottom-width',
					'border-left-width',

					'padding-top',
					'padding-right',
					'padding-bottom',
					'padding-left',
				);

				$borderWidthCssProps = array(
					'border-top-width' => '',
					'border-right-width' => '',
					'border-bottom-width' => '',
					'border-left-width' => '',
				);

				$beforeCssProps = array(
					'background-image',
					'background-size',
					'background-position',
					'background-repeat',
					'opacity',
				);

				$elementStyleProps = array(
					'background-color',
				);

				if ($moveBorderSettingsOnBefore) {
					$beforeCssProps[] = 'border-style';
                    $beforeCssProps[] = 'border-color';
                    $beforeCssProps[] = 'border-width';
					$beforeCssProps[] = 'border-top-width';
					$beforeCssProps[] = 'border-right-width';
					$beforeCssProps[] = 'border-bottom-width';
					$beforeCssProps[] = 'border-left-width';
				}

				$afterCssProps = array(
					'color-1-overlay',
					'color-2-overlay',
				);

				$cssBeforeSettings =
					"content:'' !important;" . PHP_EOL .
			        "width:100% !important;" . PHP_EOL .
			        "height:100% !important;" . PHP_EOL .
			        "position:absolute !important;" . PHP_EOL .
			        "top:0 !important;" . PHP_EOL .
			        "left:0 !important;" . PHP_EOL .
			        "display:block !important;" . PHP_EOL .
			        "z-index:-1 !important;" . PHP_EOL;

				$cssAfterSettings =
					"content:'' !important;" . PHP_EOL .
				    "width:100% !important;" . PHP_EOL .
				    "height:100% !important;" . PHP_EOL .
				    "position:absolute !important;" . PHP_EOL .
				    "top:0 !important;" . PHP_EOL .
				    "left:0 !important;" . PHP_EOL .
				    "z-index:-1 !important;" . PHP_EOL .
				    "display:block !important;" . PHP_EOL;


				$mediaCssAll = '';
				$cssBeforeAll = '';
				$cssElementStyleAll = '';
				$cssAfterAll = array();

				$borderInAll = false;
				$backgroundInAll = false;

				// 'all' css settings
				if (array_key_exists('all', $tdcCssArray)) {

					foreach ($tdcCssArray['all'] as $k1 => $v1) {

						if (in_array($k1, $numericCssProps) && is_numeric($v1)) {
							$v1 .= 'px';
						}

						// Check for 'border'
						// Default values are added!
						if (!$borderInAll && strpos($k1, 'border') !== false) {
							$borderInAll = true;
						}

						// Check for 'background'
						// Default values are added!
						if (!$backgroundInAll && strpos($k1, 'background') !== false) {
							$backgroundInAll = true;
						}

						if ('background-style' === $k1) {
							$setting = 'background-size';
							if ($v1 === 'repeat' || $v1 === 'no-repeat') {
								$setting = 'background-repeat';
							}
							$cssBeforeAll .= $setting . ':' . $v1 . ' !important;' . PHP_EOL;
							continue;
						}

						if (array_key_exists($k1, $borderWidthCssProps)) {
							$borderWidthCssProps[$k1] = $v1;
							continue;
						}

//						if (array_key_exists($k1, $beforeCssProps)) {
//							$beforeCssProps[$k1] = $v1;
//							continue;
//						}

						if (in_array($k1, $elementStyleProps)) {
							$cssElementStyleAll .= $k1 . ':' . $v1 . ' !important;' . PHP_EOL;
							continue;
						}

						if (in_array($k1, $beforeCssProps)) {
							$cssBeforeAll .= $k1 . ':' . $v1 . ' !important;' . PHP_EOL;
							continue;
						}

						if (in_array($k1, $afterCssProps)) {
							$cssAfterAll[$k1] = $v1;
							continue;
						}

						$mediaCssAll .= $k1 . ':' . $v1 . ' !important;' . PHP_EOL;
					}



					// Add default value for 'border-style'
					// Add default value for 'border-color'
					if ($borderInAll) {
						if (!isset($tdcCssArray['all']['border-style'])) {
							if ($moveBorderSettingsOnBefore) {
								$cssBeforeAll .= 'border-style:solid !important;' . PHP_EOL;
							} else {
								$mediaCssAll .= 'border-style:solid !important;' . PHP_EOL;
							}
						}
						if (!isset($tdcCssArray['all']['border-color'])) {
							if ($moveBorderSettingsOnBefore) {
								$cssBeforeAll .= 'border-color:#888888 !important;' . PHP_EOL;
							} else {
								$mediaCssAll .= 'border-color:#888888 !important;' . PHP_EOL;
							}
						}
						if (!isset($tdcCssArray['all']['border-top-width']) &&
							!isset($tdcCssArray['all']['border-right-width']) &&
							!isset($tdcCssArray['all']['border-bottom-width']) &&
							!isset($tdcCssArray['all']['border-left-width'])) {
							if ($moveBorderSettingsOnBefore) {
								$cssBeforeAll .= 'border-width:0 !important;' . PHP_EOL;
							} else {
								$mediaCssAll .= 'border-width:0 !important;' . PHP_EOL;
							}
						}
					}




					// Set border width css for 'all'
					$borderCss = $this->getBorderWidth($borderWidthCssProps);

					if ($borderCss !== '') {
						if ($moveBorderSettingsOnBefore) {
							$cssBeforeAll .= $borderCss;
						} else {
							$mediaCssAll .= $borderCss;
						}
					}




					$positionElement = false;

					// all td-element-style
					if ($cssElementStyleAll !== '') {
						$cssOutput .= PHP_EOL . '.' . $this->get_att( 'tdc_css_class_style' ) . '{' . PHP_EOL . $cssElementStyleAll . '}' . PHP_EOL;

						$positionElement = true;
					}


					// all td-element-style::before
					if ($cssBeforeAll !== '') {

						// Add default value for 'background-size'
						if ($backgroundInAll) {
							if (!isset($tdcCssArray['all']['background-style'])) {
								$cssBeforeAll .= 'background-size:cover !important;' . PHP_EOL;
							}
							if (!isset($tdcCssArray['all']['background-position'])) {
								$cssBeforeAll .= 'background-position:center top !important;' . PHP_EOL;
							}
						}

						//$tdcCssProcessed .= PHP_EOL . '.' . $this->get_att( 'tdc_css_class' ) . '::before{' . PHP_EOL . $cssBeforeSettings . $cssBeforeAll . '}' . PHP_EOL;
						$beforeCssOutput .= PHP_EOL . '.' . $this->get_att( 'tdc_css_class_style' ) . '::before {' . PHP_EOL . $cssBeforeSettings . $cssBeforeAll . '}' . PHP_EOL;

						$positionElement = true;
					}

					// all td-element-style::after
					if (!empty($cssAfterAll)) {

						$css = '';


						if (array_key_exists('color-1-overlay', $cssAfterAll) && array_key_exists('color-2-overlay', $cssAfterAll)) {
							$css .= 'background: linear-gradient(' . $cssAfterAll['color-1-overlay'] . ', '  . $cssAfterAll['color-2-overlay'] . ') !important;' . PHP_EOL;
						} else if (array_key_exists('color-1-overlay', $cssAfterAll)) {
							$css .= 'background: ' . $cssAfterAll['color-1-overlay'] .' !important;' . PHP_EOL;
						} else if (array_key_exists('color-2-overlay', $cssAfterAll)) {
							$css .= 'background: ' . $cssAfterAll['color-2-overlay'] .' !important;' . PHP_EOL;
						}

						if (array_key_exists('opacity', $cssAfterAll)) {
							$css .= 'opacity: ' . $cssAfterAll['opacity'] .' !important;' . PHP_EOL;
						}


						if ( '' !== $css ) {

							// Important!
							if ( $this instanceof vc_row || $this instanceof vc_row_inner ) {
								$clearfixColumns = true;
							}

							//$tdcCssProcessed .= PHP_EOL . '.' . $this->get_att( 'tdc_css_class' ) . $childElement . '::after{' . PHP_EOL . $cssAfterSettings . $css . '}' . PHP_EOL;
							$afterCssOutput .= PHP_EOL . '.' . $this->get_att( 'tdc_css_class_style' ) . '::after {' . PHP_EOL . $cssAfterSettings . $css . '}' . PHP_EOL;

							$positionElement = true;
						}
					}

					if ($positionElement) {
						$mediaCssAll .= 'position:relative;' . PHP_EOL;
					}

					// all css
					if ($mediaCssAll !== '') {
						$tdcCssProcessed .= PHP_EOL . '.' . $this->get_att( 'tdc_css_class' ) . '{' . PHP_EOL . $mediaCssAll . '}' . PHP_EOL;
					}

					unset($tdcCssArray['all']);
				}


				// @todo The css media queries must be output in reverse order. Maybe this generated css should be managed all at once, in page.
				// Multiple solutions have been tested to sort them in reverse order at creation. Issues: json.stringify work well only with object, and an object does not keep the order of its properties.
				// For this, javascript array should be used, but in that case, an array with undefined elements it would be created by json_decode php function. So, not good.

				$limits = array();
				foreach ($tdcCssArray as $key => $val) {

					if (stripos($key, '_max_width') !== false) {

						$new_key = str_replace('_max_width', '', $key);

						if ( !isset($limits[$new_key])) {
							$limits[$new_key] = array();
						}
						$limits[$new_key]['max_width'] = $val;
					}

					if (stripos($key, '_min_width') !== false) {

						$new_key = str_replace( '_min_width', '', $key);

						if (!isset($limits[$new_key])) {
							$limits[$new_key] = array();
						}
						$limits[$new_key]['min_width'] = $val;
					}
				}



				foreach ($limits as $key => $val) {

					$mediaArray = $tdcCssArray[ $key ];

					$mediaCss = '';
					$cssBefore = '';
					$cssElementStyle = '';
					$cssAfter = array();

					$borderInLimit = false;
					$backgroundInLimit = false;


					// Reset $beforeCss
					foreach ($borderWidthCssProps as $borderCssKey => $borderCssValue) {
						$borderWidthCssProps[$borderCssKey] = '';
					}

//					// Reset $beforeCssProps
//					foreach ($beforeCssProps as $beforeCssKey => $beforeCssValue) {
//						$beforeCssProps[$beforeCssKey] = '';
//					}


					foreach ($mediaArray as $k2 => $v2) {

						if (in_array($k2, $numericCssProps) && is_numeric($v2)) {
							$v2 .= 'px';
						}

						// Check for 'border'
						// Default values are added!
						if (!$borderInLimit && strpos($k2, 'border') !== false) {
							$borderInLimit = true;
						}

						// Check for 'background'
						// Default values are added!
						if (!$backgroundInLimit && strpos($k2, 'background') !== false) {
							$backgroundInLimit = true;
						}

						if ('background-style' === $k2) {
							$setting = 'background-size';
							if ($v2 === 'repeat' || $v2 === 'no-repeat') {
								$setting = 'background-repeat';
							}
							$cssBeforeAll .= $setting . ':' . $v2 . ' !important;' . PHP_EOL;
							continue;
						}

						if (array_key_exists($k2, $borderWidthCssProps)) {
							$borderWidthCssProps[$k2] = $v2;
							continue;
						}


						// Change to 'transparent' for 'border-color: no_value'
						// Change to 'transparent' for 'background-color: no_value'
						// Change to 'transparent' for 'color-1-overlay: no_value'
						// Change to 'transparent' for 'color-2-overlay: no_value'
						// Change to 'none' for 'background-image: no_value'
						if ($v2 === 'no_value') {
							switch ($k2) {
								case 'border-color':
								case 'background-color':
								case 'color-1-overlay':
								case 'color-2-overlay': $v2 = 'transparent'; break;
								case 'background-image': $v2 = 'none'; break;
							}
						}


//							if (array_key_exists($k2, $beforeCssProps)) {
//								$beforeCssProps[$k2] = $v2;
//								continue;
//							}

						if (in_array($k2, $elementStyleProps)) {
							$cssElementStyle .= $k2 . ':' . $v2 . ' !important;' . PHP_EOL;
							continue;
						}

						if (in_array($k2, $beforeCssProps)) {
							$cssBefore .= $k2 . ':' . $v2 . ' !important;' . PHP_EOL;
							continue;
						}

						if (in_array($k2, $afterCssProps)) {
							$cssAfter[$k2] = $v2;
							continue;
						}



						$mediaCss .= $k2 . ':' . $v2 . ' !important;' . PHP_EOL;
					}


					// Add default value for 'border-style'
					// Add default value for 'border-color'
					if ($borderInLimit && !$borderInAll) {
						if (!isset($mediaArray['border-style'])) {
							if ($moveBorderSettingsOnBefore) {
								$cssBefore .= 'border-style:solid !important;' . PHP_EOL;
							} else {
								$mediaCss .= 'border-style:solid !important;' . PHP_EOL;
							}
						}
						if (!isset($mediaArray['border-color'])) {
							if ($moveBorderSettingsOnBefore) {
								$cssBefore .= 'border-color:#888888 !important;' . PHP_EOL;
							} else {
								$mediaCss .= 'border-color:#888888 !important;' . PHP_EOL;
							}
						}
					}





					// Set border width css for 'all'
					$borderCss = $this->getBorderWidth($borderWidthCssProps);

					if ($borderCss !== '') {
						if ($moveBorderSettingsOnBefore) {
							$cssBefore .= $borderCss;
						} else {
							$mediaCss .= $borderCss;
						}
					}




//					// Set background css for limit
//					$backgroundCss = $this->getBackground($beforeCssProps);
//
//					if ($backgroundCss !== '') {
//						$mediaCss .= $backgroundCss;
//					}




					if ( $cssElementStyle !== '' || $cssBefore !== '' || $cssAfter !== '') {

						$mediaQuery = '';
						if ( isset( $val['min_width'] ) ) {
							$mediaQuery = '(min-width: ' . $val['min_width'] . 'px)';
						}

						if ( isset( $val['max_width'] ) ) {

							if ( '' !== $mediaQuery ) {
								$mediaQuery .= ' and ';
							}
							$mediaQuery .= '(max-width: ' . $val['max_width'] . 'px)';
						}

						if ( '' !== $mediaQuery ) {

							$positionElement = false;

							if ($cssElementStyle !== '') {
								$cssOutput .= PHP_EOL . '/* ' . $key . ' */' . PHP_EOL;
								$cssOutput .= '@media ' . $mediaQuery . PHP_EOL;
								$cssOutput .= '{'. PHP_EOL;
								$cssOutput .= '.' . $this->get_att('tdc_css_class_style') . '{' . PHP_EOL . $cssElementStyle . '}' . PHP_EOL;
								$cssOutput .= '}'. PHP_EOL;

								$positionElement = true;
							}

							if ($cssBefore !== '') {

								// Add default value for 'background-style'
								if ($backgroundInLimit && !$backgroundInAll) {
									if (!isset($mediaArray['background-style'])) {
										$cssBefore .= 'background-size:cover !important;' . PHP_EOL;
									}
									if (!isset($mediaArray['background-position'])) {
										$cssBefore .= 'background-position:center top !important;' . PHP_EOL;
									}
								}

								//$tdcCssProcessed .= '.' . $this->get_att('tdc_css_class') . '::before{' . PHP_EOL . $cssBeforeSettings . $cssBefore . '}' . PHP_EOL;

								$beforeCssOutput .= PHP_EOL . '/* ' . $key . ' */' . PHP_EOL;
								$beforeCssOutput .= '@media ' . $mediaQuery . PHP_EOL;
								$beforeCssOutput .= '{'. PHP_EOL;
								$beforeCssOutput .= '.' . $this->get_att('tdc_css_class_style') . '::before{' . PHP_EOL . $cssBeforeSettings . $cssBefore . '}' . PHP_EOL;
								$beforeCssOutput .= '}'. PHP_EOL;

								$positionElement = true;
							}

							if (!empty($cssAfter)) {

								$css = '';


								if (array_key_exists('color-1-overlay', $cssAfter) && array_key_exists('color-2-overlay', $cssAfter)) {
									$css .= 'background: linear-gradient(' . $cssAfter['color-1-overlay'] . ', '  . $cssAfter['color-2-overlay'] . ') !important;' . PHP_EOL;
								} else if (array_key_exists('color-1-overlay', $cssAfter)) {
									if (array_key_exists('color-2-overlay', $cssAfterAll)) {
										$css .= 'background: linear-gradient(' . $cssAfter['color-1-overlay'] . ', ' . $cssAfterAll['color-2-overlay'] . ') !important;' . PHP_EOL;
									} else {
										$css .= 'background: ' . $cssAfter['color-1-overlay'] .' !important;' . PHP_EOL;
									}
								} else if (array_key_exists('color-2-overlay', $cssAfter)) {
									if (array_key_exists('color-1-overlay', $cssAfterAll)) {
										$css .= 'background: linear-gradient(' . $cssAfterAll['color-1-overlay'] . ', ' . $cssAfter['color-2-overlay'] . ') !important;' . PHP_EOL;
									} else {
										$css .= 'background: ' . $cssAfter['color-2-overlay'] .' !important;' . PHP_EOL;
									}
								}

								if (array_key_exists('opacity', $cssAfter)) {
									$css .= 'opacity: ' . $cssAfter['opacity'] .' !important;' . PHP_EOL;
								}

								if ( '' !== $css ) {

									// Important!
									if ( $this instanceof vc_row || $this instanceof vc_row_inner ) {
										$clearfixColumns = true;
									}

									//$tdcCssProcessed .= PHP_EOL . '.' . $this->get_att( 'tdc_css_class' ) . $childElement . '::after{' . PHP_EOL . $cssAfterSettings . $css . '}' . PHP_EOL;
									$afterCssOutput .= PHP_EOL . '/* ' . $key . ' */' . PHP_EOL;
									$afterCssOutput .= '@media ' . $mediaQuery . PHP_EOL;
									$afterCssOutput .= '{'. PHP_EOL;
									$afterCssOutput .= PHP_EOL . '.' . $this->get_att( 'tdc_css_class_style' ) . '::after{' . PHP_EOL . $cssAfterSettings . $css . '}' . PHP_EOL;
									$afterCssOutput .= '}'. PHP_EOL;

									$positionElement = true;
								}
							}

							if ($positionElement) {
								$mediaCss .= 'position:relative;' . PHP_EOL;
							}

							if ($mediaCss !== '') {
								$tdcCssProcessed .= PHP_EOL . '/* ' . $key . ' */' . PHP_EOL;
								$tdcCssProcessed .= '@media ' . $mediaQuery . PHP_EOL;
								$tdcCssProcessed .= '{' . PHP_EOL;
								$tdcCssProcessed .= '.' . $this->get_att( 'tdc_css_class' ) . '{' . PHP_EOL . $mediaCss . '}' . PHP_EOL;
								$tdcCssProcessed .= '}' . PHP_EOL;
							}
						}
					}
				}
				if (!empty($tdcCssProcessed)) {
					$buffy .= PHP_EOL . '/* inline tdc_css att */' . PHP_EOL . $tdcCssProcessed;
				}
			}
		}

		return $buffy;
	}



	/**
	 * This runs only on loop blocks!
	 * @return array the $td_pull_down_items
	 */
	private function block_loop_get_pull_down_items() {



		$td_pull_down_items = array();


		$td_ajax_filter_type   = $this->get_att('td_ajax_filter_type');
		$td_filter_default_txt = $this->get_att('td_filter_default_txt');
		$td_ajax_filter_ids    = $this->get_att('td_ajax_filter_ids');


		// td_block_mega_menu has it's own pull down implementation!
		if (get_class($this) != 'td_block_mega_menu') {
			// prepare the array for the td_pull_down_items, we send this array to the block_template

			if (!empty($td_ajax_filter_type)) {

				// make the default current pull down item (the first one is the default)
				$td_pull_down_items[0] = array (
					'name' => $td_filter_default_txt,
					'id' => ''
				);

				switch($td_ajax_filter_type) {
					case 'td_category_ids_filter': // by category
						$td_categories = get_categories(array(
							'include' => $td_ajax_filter_ids,
							'exclude' => '1',
							'number' => 100 //limit the number of categories shown in the drop down
						));

						// check if there's any id in the list
						if (!empty($td_ajax_filter_ids)) {
							// break the categories string
							$td_ajax_filter_ids = explode(',', $td_ajax_filter_ids);

							// order the categories - match the order set in the block settings
							foreach ($td_ajax_filter_ids as $td_category_id) {
								$td_category_id = trim($td_category_id);

								foreach ($td_categories as $td_category) {

									// retrieve the category
									if ($td_category_id == $td_category->cat_ID) {
										$td_pull_down_items [] = array(
											'name' => $td_category->name,
											'id' => $td_category->cat_ID,
										);
										break;
									}
								}
							}

							// if no category ids are added
						} else {
							foreach ($td_categories as $td_category) {
								$td_pull_down_items [] = array(
									'name' => $td_category->name,
									'id' => $td_category->cat_ID,
								);
							}
						}
						break;

					case 'td_author_ids_filter': // by author
						$td_authors = get_users(array('who' => 'authors', 'include' => $td_ajax_filter_ids));
						foreach ($td_authors as $td_author) {
							$td_pull_down_items []= array (
								'name' => $td_author->display_name,
								'id' => $td_author->ID,
							);
						}
						break;

					case 'td_tag_slug_filter': // by tag slug
						$tag_ids = explode(',', trim($td_ajax_filter_ids));
						$td_tags = get_tags(array(
							'include' => $tag_ids,
							'orderby' => 'include'
						));
						foreach ($td_tags as $td_tag) {
							$td_pull_down_items []= array (
								'name' => $td_tag->name,
								'id' => $td_tag->term_id,
							);
						}
						break;

					case 'td_popularity_filter_fa': // by popularity
						$td_pull_down_items []= array (
							'name' => __td('Featured', TD_THEME_NAME),
							'id' => 'featured',
						);
						$td_pull_down_items []= array (
							'name' => __td('All time popular', TD_THEME_NAME),
							'id' => 'popular',
						);
						break;
				}
			}
		}
		return $td_pull_down_items;
	}




    /**
     * this function adds the live filters atts when $atts['live_filter'] is set. The attributs are imidiatly available to all
     * after the render method is called
     *   - $atts['live_filter_cur_post_id'] - the current post id
     *   - $atts['live_filter_cur_post_author'] - the current post author
     * @param $atts
     * @return mixed
     */
    private function add_live_filter_atts($atts) {
        if (!empty($atts['live_filter'])) {
            $atts['live_filter_cur_post_id'] = get_queried_object_id(); //add the current post id
            $atts['live_filter_cur_post_author'] =  get_post_field( 'post_author', $atts['live_filter_cur_post_id']); //get the current author
        }
        return $atts;
    }



    /**
     * Used by blocks that need auto generated titles
     * @return string
     */
    function get_block_title() {
        return $this->block_template()->get_block_title();
    }


    /**
     * shows a pull down filter based on the $this->atts
     * @return string
     */
    function get_pull_down_filter() {
        return $this->block_template()->get_pull_down_filter();
    }


	/**
	 * retrivs the block pagination
	 * @return string
	 */
    function get_block_pagination() {

	    $offset = 0;

	    if (isset($this->atts['offset'])) {
		    $offset = (int)$this->atts['offset'];
	    }

	    $buffy = '';


	    $ajax_pagination = $this->get_att('ajax_pagination');
	    $limit = (int)$this->get_att('limit');


        switch ($ajax_pagination) {

            case 'next_prev':
                    $buffy .= '<div class="td-next-prev-wrap">';
                    $buffy .= '<a href="#" class="td-ajax-prev-page ajax-page-disabled" id="prev-page-' . $this->block_uid . '" data-td_block_id="' . $this->block_uid . '"><i class="td-icon-font td-icon-menu-left"></i></a>';

					//if ($this->td_query->found_posts <= $limit) {
					if ($this->td_query->found_posts - $offset <= $limit) {
                        //hide next page because we don't have enough results
                        $buffy .= '<a href="#"  class="td-ajax-next-page ajax-page-disabled" id="next-page-' . $this->block_uid . '" data-td_block_id="' . $this->block_uid . '"><i class="td-icon-font td-icon-menu-right"></i></a>';
                    } else {
                        $buffy .= '<a href="#"  class="td-ajax-next-page" id="next-page-' . $this->block_uid . '" data-td_block_id="' . $this->block_uid . '"><i class="td-icon-font td-icon-menu-right"></i></a>';
                    }

                    $buffy .= '</div>';
                break;

            case 'load_more':
	            //if ($this->td_query->found_posts > $limit) {
	            if ($this->td_query->found_posts - $offset > $limit) {
		            $buffy .= '<div class="td-load-more-wrap">';
                    $buffy .= '<a href="#" class="td_ajax_load_more td_ajax_load_more_js" id="next-page-' . $this->block_uid . '" data-td_block_id="' . $this->block_uid . '">' . __td('Load more', TD_THEME_NAME);
		            $buffy .= '<i class="td-icon-font td-icon-menu-down"></i>';
		            $buffy .= '</a>';
		            $buffy .= '</div>';
	            }
                break;

            case 'infinite':
				// show the infinite pagination only if we have more posts
		        if ($this->td_query->found_posts - $offset > $limit) {
		            $buffy .= '<div class="td_ajax_infinite" id="next-page-' . $this->block_uid . '" data-td_block_id="' . $this->block_uid . '">';
		            $buffy .= ' ';
		            $buffy .= '</div>';


		            $buffy .= '<div class="td-load-more-wrap td-load-more-infinite-wrap" id="infinite-lm-' . $this->block_uid . '">';
                    $buffy .= '<a href="#" class="td_ajax_load_more td_ajax_load_more_js" id="next-page-' . $this->block_uid . '" data-td_block_id="' . $this->block_uid . '">' . __td('Load more', TD_THEME_NAME);
		            $buffy .= '<i class="td-icon-font td-icon-menu-down"></i>';
		            $buffy .= '</a>';
		            $buffy .= '</div>';
	            }
                break;

        }

        return $buffy;
    }















    function get_block_js() {
	    // td-composer PLUGIN uses this hook to call $this->js_callback_ajax
	    // @see tdc_ajax.php -> on_ajax_render_shortcode in td-composer
	    do_action('td_block__get_block_js', array(&$this));

	    // Allow the scripts of mega menu blocks
	    if (!($this instanceof td_block_mega_menu) && td_util::tdc_is_live_editor_iframe()) {
		    td_js_buffer::add_to_footer($this->js_tdc_get_composer_block());
		    return '';
	    }

		// do not run in ajax requests
	    if (td_util::tdc_is_live_editor_ajax()) {
		    return '';
	    }

        //get the js for this block - do not load it in inline mode in visual composer
        if (td_util::vc_is_inline()) {
            return '';
        }


	    // do not output the block js if it's not a loop block
	    if ($this->is_loop_block() === false) {
		    return '';
	    }



	    // new tdBlock() item for ajax blocks / loop_blocks
	    // we don't get here on blocks that are not loop blocks

	    $block_item = 'block_' . $this->block_uid;

	    $buffy = '<script>';
		    $atts = $this->atts;
		    $buffy .= 'var ' . $block_item . ' = new tdBlock();' . "\n";
		    $buffy .= $block_item . '.id = "' . $this->block_uid . '";' . "\n";
		    $buffy .= $block_item . ".atts = '" . str_replace("'", "\u0027", json_encode($this->atts)) . "';" . "\n";
		    $buffy .= $block_item . '.td_column_number = "' . $atts['td_column_number'] . '";' . "\n";
		    $buffy .= $block_item . '.block_type = "' . get_class($this) . '";' . "\n";

		    //wordpress wp query parms
		    $buffy .= $block_item . '.post_count = "' . $this->td_query->post_count . '";' . "\n";
		    $buffy .= $block_item . '.found_posts = "' . $this->td_query->found_posts . '";' . "\n";

		    $buffy .= $block_item . '.header_color = "' . $atts['header_color'] . '";' . "\n"; // the header_color is needed for the animated loader
		    $buffy .= $block_item . '.ajax_pagination_infinite_stop = "' . $atts['ajax_pagination_infinite_stop'] . '";' . "\n";


		    // The max_num_pages is computed so it considers the offset and the limit atts settings
		    // There were necessary these changes because on the user interface there are js scripts that use the max_num_pages js variable to show/hide some ui components
		    if (!empty($this->atts['offset'])) {

			    if ($this->atts['limit'] != 0) {
				    $buffy .= $block_item . '.max_num_pages = "' . ceil( ( $this->td_query->found_posts - $this->atts['offset'] ) / $this->atts['limit'] ) . '";' . "\n";

			    } else if (get_option('posts_per_page') != 0) {
				    $buffy .= $block_item . '.max_num_pages = "' . ceil( ( $this->td_query->found_posts - $this->atts['offset'] ) / get_option('posts_per_page') ) . '";' . "\n";
			    }
		    } else {
			    $buffy .= $block_item . '.max_num_pages = "' . $this->td_query->max_num_pages . '";' . "\n";
		    }

		    $buffy .= 'tdBlocksArray.push(' . $block_item . ');' . "\n";
	    $buffy .= '</script>';





        $td_column_number = $this->get_att('td_column_number');
        if (empty($td_column_number)) {
            $td_column_number = td_global::vc_get_column_number(); // get the column width of the block so we can sent it to the server. If the shortcode already has a user defined column number, we use that
        }







        // ajax subcategories preloader
        // @todo preloading "all" filter content should happen regardless of the setting
        if (
            !empty($this->td_block_template_data['td_pull_down_items'])
            and !empty($this->atts['td_ajax_preloading'])
        ) {


	        /*  -------------------------------------------------------------------------------------
	            add 'ALL' item to the cache
	        */
            // pagination - we need to compute the pagination for each cache entry
            $td_hide_next = false;
            if (!empty($this->atts['offset']) && !empty($this->atts['limit']) && ($this->atts['limit'] != 0)) {
                if (1 >= ceil(($this->td_query->found_posts - $this->atts['offset']) / $this->atts['limit'])) {
                    $td_hide_next = true; //hide link on last page
                }
            } else if (1 >= $this->td_query->max_num_pages) {
                $td_hide_next = true; //hide link on last page
            }

            // this will be send to JS bellow
            $buffyArray = array (
                'td_data' => $this->inner($this->td_query->posts, $td_column_number),
                'td_block_id' => $this->block_uid,
                'td_hide_prev' => true,  // this is the first page
                'td_hide_next' => $td_hide_next
            );



	        /*  -------------------------------------------------------------------------------------
	            add the rest of the items to the local cache
	        */
            ob_start();
            // we need to clone the object to set is_ajax_running to true
            // first we set an object for the all filter
            ?>
            <script>
                var tmpObj = JSON.parse(JSON.stringify(<?php echo $block_item ?>));
                tmpObj.is_ajax_running = true;
                var currentBlockObjSignature = JSON.stringify(tmpObj);
                tdLocalCache.set(currentBlockObjSignature, JSON.stringify(<?php echo json_encode($buffyArray) ?>));
                <?php
                    foreach ($this->td_block_template_data['td_pull_down_items'] as $count => $item) {

                     	//removes the offset on preloading for blocks pull down filter items excepting the "All" filter tab which will load posts with the offset
						if (!empty($this->atts['offset'])){
							unset($this->atts['offset']);
						}

                        if (empty($item['id'])) {
                            continue;
                        }

                        // preload only 6 or 20 items depending on the setting
                        if ($this->atts['td_ajax_preloading'] == 'preload_all' and $count > 20) {
                            break;
                        }
                        else if ($this->atts['td_ajax_preloading'] == 'preload' and $count > 6) {
                            break;
                        }

                        $ajax_parameters = array (
                            'td_atts' => $this->atts,            // original block atts
                            'td_column_number' => $td_column_number,    // should not be 0 (1 - 2 - 3)
                            'td_current_page' => 1,    // the current page of the block
                            'td_block_id' => $this->block_uid,        // block uid
                            'block_type' => get_class($this),         // the type of the block / block class
                            'td_filter_value' => $item['id']     // the id for this specific filter type. The filter type is in the td_atts
                        );
                        ?>
                            tmpObj = JSON.parse(JSON.stringify(<?php echo $block_item ?>));
                            tmpObj.is_ajax_running = true;
                            tmpObj.td_current_page = 1;
                            tmpObj.td_filter_value = <?php echo json_encode($item['id']) ?>;
                            var currentBlockObjSignature = JSON.stringify(tmpObj);
                            tdLocalCache.set(currentBlockObjSignature, JSON.stringify(<?php echo td_ajax::on_ajax_block($ajax_parameters) ?>));
                        <?php
                    }
                ?>
            </script>
            <?php
            //ob_clean();
            $buffy.= ob_get_clean();
        } // end preloader if





        return $buffy;
    }


	/**
	 * tagDiv composer specific code:
	 * This is a callback that is retrieve and injected into the iFrame by td-composer on Ajax operations
	 * This js runs on the client after a drag and drop operation in td-composer
	 * @return string JS code that is sent straight to an eval() on the client side
	 */
	function js_tdc_callback_ajax() {

		$buffy = '';


		$buffy .= $this->js_tdc_get_composer_block();



		// If this is not a loop block or if we don't have pull down ajax filters, do not run. This is just to fix the pulldown items on
		// content blocks
		if ($this->is_loop_block() === true && !empty($this->td_block_template_data['td_pull_down_items'])) {
			ob_start();
			?>
			<script>

				// block subcategory ajax filters!
				var jquery_object_container = jQuery('.<?php echo $this->block_uid ?>_rand');
				if ( jquery_object_container.length) {
					var horizontal_jquery_obj = jquery_object_container.find('.td-subcat-list:first');

					if ( horizontal_jquery_obj.length) {
						// make a new item
						var pulldown_item_obj = new tdPullDown.item();
						pulldown_item_obj.blockUid = jquery_object_container.data('td-block-uid'); // get the block UID
						pulldown_item_obj.horizontal_jquery_obj = horizontal_jquery_obj;
						pulldown_item_obj.vertical_jquery_obj = jquery_object_container.find('.td-subcat-dropdown:first');
						pulldown_item_obj.horizontal_element_css_class = 'td-subcat-item';
						pulldown_item_obj.container_jquery_obj = horizontal_jquery_obj.closest('.td-block-title-wrap');
						pulldown_item_obj.excluded_jquery_elements = [pulldown_item_obj.container_jquery_obj.find('.td-pulldown-size')];
						tdPullDown.add_item(pulldown_item_obj); // add the item
					}
				}

			</script>
			<?php
			$buffy .= td_util::remove_script_tag(ob_get_clean());
		}



		return $buffy;

	}





	/**
	 * tagDiv composer specific code:
	 *  - it's added to the end of the iFrame when the live editor is active (when @see td_util::tdc_is_live_editor_iframe()  === true)
	 *  - it is injected int he iFrame and evaluated there in the global scoupe when a new block is added to the page via AJAX!
	 * @return string the JS without <script> tags
	 */
	function js_tdc_get_composer_block() {
		ob_start();
		?>
		<script>
			(function () {
				// js_tdc_get_composer_block code for "<?php echo get_class($this) ?>"

				var tdComposerBlockItem = new tdcComposerBlocksApi.item();
				tdComposerBlockItem.blockUid = '<?php echo $this->block_uid ?>';
				tdComposerBlockItem.callbackDelete = function(blockUid) {

					if ( 'undefined' !== typeof window.tdPullDown ) {
						// delete the existing pulldown if it exists
						tdPullDown.deleteItem(blockUid);
					}

					if ( 'undefined' !== typeof window.tdAnimationSprite ) {
						// delete the animation sprite if it exits
						tdAnimationSprite.deleteItem(blockUid);
					}

					if ( 'undefined' !== typeof window.tdTrendingNow ) {
						// delete the animation sprite if it exits
						tdTrendingNow.deleteItem(blockUid);
					}

					if ( 'undefined' !== typeof window.tdHomepageFull ) {
						// delete the homepagefull if it exits
						tdHomepageFull.deleteItem( blockUid );
					}

					// delete the weather item if available NOTE USED YET
					//tdWeather.deleteItem(blockUid);

					tdcDebug.log('td_block.php js_tdc_get_composer_block  -  callbackDelete(' + blockUid + ') - td_block base callback runned');
				};
				tdcComposerBlocksApi.addItem(tdComposerBlockItem);
			})();
		</script>
		<?php
		return td_util::remove_script_tag(ob_get_clean());
	}






	// get atts
	protected function get_block_html_atts() {
		return ' data-td-block-uid="' . $this->block_uid . '" ';
	}


    /**
     * @param $additional_classes_array array - of classes to add to the block
     * @return string
     */
    protected function get_block_classes($additional_classes_array = array()) {


	    $class = $this->get_att('class');
	    $el_class = $this->get_att('el_class');
	    $color_preset = $this->get_att('color_preset');
		$ajax_pagination = $this->get_att('ajax_pagination');
	    $border_top = $this->get_att('border_top');
	    $css = $this->get_att('css');
	    $tdc_css = $this->get_att('tdc_css');
	    $block_template_id = $this->get_att('block_template_id');






        //add the block wrap and block id class
        $block_classes = array(
            'td_block_wrap',
	        get_class($this)
        );


	    // get the design tab css classes
	    $css_classes_array = $this->parse_css_att($css);
	    if ( $css_classes_array !== false ) {
		    $block_classes = array_merge (
			    $block_classes,
			    $css_classes_array
		    );
	    }

	    $css_classes_array = $this->parse_css_att($tdc_css);
	    if ( $css_classes_array !== false ) {
		    $block_classes = array_merge (
			    $block_classes,
			    $css_classes_array
		    );
	    }






	    //add the classes that we receive via shortcode. @17 aug 2016 - this att may be used internally - by ra
        if (!empty($class)) {
            $class_array = explode(' ', $class);
            $block_classes = array_merge (
                $block_classes,
                $class_array
            );
        }

        //marge the additional classes received from blocks code
        if (!empty($additional_classes_array)) {
            $block_classes = array_merge (
                $block_classes,
                $additional_classes_array
            );
        }


        //add the full cell class + the color preset class
        if (!empty($color_preset)) {
            $block_classes[]= 'td-pb-full-cell';
            $block_classes[]= $color_preset;
        }


	    /**
	     * - used to add td_block_loading css class on the blocks having pagination
	     * - the class has a force css transform for lazy devices
	     */
	    if (!empty($ajax_pagination)) {
		    $block_classes[]= 'td_with_ajax_pagination';
	    }


        /**
         * add the border top class - this one comes from the atts
         */
        if (empty($border_top)) {
            $block_classes[]= 'td-pb-border-top';
        }

	    // this is the field that all the shortcodes have (or at least should have)
	    if (!empty($el_class)) {
		    $el_class_array = explode(' ', $el_class);
		    $block_classes = array_merge (
			    $block_classes,
			    $el_class_array
		    );
	    }


	    /**
	     * add block template id - comes from atts
	     */
	    if (empty($block_template_id)) {
		    $block_template_id = td_options::get('tds_global_block_template', 'td_block_template_1');
	    }
	    $block_classes[] = $block_template_id;


	    /**
	     * Add 'tdc-no-posts' class that show info msg for blocks without any modules. Its style is in tagDiv composer
	     */
	    if ( $this->is_loop_block() && empty( $this->td_query->posts ) ) {
		    $block_classes[] = 'tdc-no-posts';
	    }


        //remove duplicates
        $block_classes = array_unique($block_classes);

	    return implode(' ', $block_classes);
    }


    /**
     * adds a class to the current block's ats
     * @param $raw_class_name string the class name is not sanitized, so make sure you send a sanitized one
     */
    private function add_class($raw_class_name) {
        if (!empty($this->atts['class'])) {
            $this->atts['class'] = $this->atts['class'] . ' ' . $raw_class_name;
        } else {
            $this->atts['class'] = $raw_class_name;
        }
    }


    /**
     * gets the current template instance, if no instance it's found throws error
     * @return mixed the template instance
     * @throws ErrorException - no template instance found
     */
    private function block_template() {
        if (isset($this->td_block_template_instance)) {
            return $this->td_block_template_instance;
        } else {
	        td_util::error(__FILE__, "td_block: " . get_class($this) . " did not call render, no td_block_template_instance in td_block");
	        die;
        }
    }


	/**
	 * Safe way to read $this->atts. It makes sure that you read them when they are ready and set! For now, the class is not refactorized to use this
	 * @param $att_name
	 * @return mixed
	 */
	protected function get_att($att_name) {
		if (empty($this->atts)) {
			td_util::error(__FILE__, get_class($this) . '->get_att(' . $att_name . ') Internal error: The atts are not set yet(AKA: the render method was not called yet and the system tried to read an att)');
			die;
		}

		if (!isset($this->atts[$att_name])) {
			var_dump($this->atts);
			td_util::error(__FILE__, 'Internal error: The system tried to use an att that does not exists! class_name: ' . get_class($this) . '  Att name: "' . $att_name . '" The list with available atts is in td_block::render');
			die;
		}

		return $this->atts[$att_name];
	}


	/**
	 * parses a design panel generated css string and get's the classes and the
	 *   - It's not private because it's used by td_block_ad_box because that block uses special classes to avoid adblock
	 *   - it should be the same with @see tdc_composer_block::parse_css_att from the tdc plugin
	 * @param $user_css_att
	 *
	 * @return array|bool - array of results or false if no classes are available
	 */
	protected function parse_css_att($user_css_att) {
		if (empty($user_css_att)) {
			return false;
		}

		$matches = array();
		$preg_match_ret = preg_match_all ( '/\s*\.\s*([^\{]+)\s*\{\s*([^\}]+)\s*\}\s*/', $user_css_att, $matches);


		if ( $preg_match_ret === 0 || $preg_match_ret === false || empty($matches[1]) || empty($matches[2]) ) {
			return false;
		}

		// get only the selectors
		return $matches[1];
	}


	/**
 	 * Disable loop block features. If this is disable, the block does not use a loop and it dosn't need to run a query.
 	 *  - no query
	 *  - no pulldown items lis (ajax filters)
	 *  - no ajax JS ex: NO new tdBlock()
	 */
	protected function disable_loop_block_features() {
		$this->is_loop_block = false;
	}


	private function is_loop_block() {
		return $this->is_loop_block;
	}

}

