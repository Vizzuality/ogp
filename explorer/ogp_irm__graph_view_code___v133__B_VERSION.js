


var print_hellow = function(){

	[ 0, 1, 2,3 ,4, 5, 6 ].map( function(d){ 

		console.log("______ hellow world! _________!!!!");
	});

}







var setup_graph_view_object__object = function(){     


	/////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////
	//////////////////////
	//////////////////////   object modifications 
	//////////////////////
	//////////////////////
	/////////////////////////////////////////////////



	/////////////   set up the column description objects to suit
	//					the graph view - commitment data - elements

	this.setup_relevant_column_description_objects__graph_view_commitment_data_edition = function( root_this_ ){  


		// hellow 
		//console.log(">>>>  setup_relevant_column_description_objects__graph_view_commitment_data_edition() ");


		/////////////  modify what's in the column description object model
		root_this_.column_description_obj.random_value_that_could_be_useful = true;



		/////////////  initialise the table column objects
		root_this_.initialise__table_column_objects__commitment_data();

		/// change the country listing column to be a basic filter
		//		as far as the filtering algorithm is concerned!
		////////  change it to be a basic filter column 
		///				in the eyes of the data processing algorthm
		//			- 
		////////////   root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.commitment_data__country_name_index ].column_type = "basic_filter_column";

	}




	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	//////////////////////////////////
	//////////////////////////////////  add various graph object bits



	this.add_relevant_functions_to_graph_view_obj = function( graph_view_obj ){ 



		//
		root_this_ = graph_view_obj;


		// parent this
		/////  this.main_parent_object_this = main_parent_object_this__reference;
		root_this_.main_parent_object_this ;


		////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////  various general variables
		////////////////////////////////////////////////////////



		///////////////////								  ////////////////
		///////////////////		various data variables    /////////////////
		///////////////////					      			////////////////




		////////   DATA PROCESSINGS variables

		root_this_.sort__dispay_areas__mode__alphabetic_regular_order = "alphabetic__regular_order";
		root_this_.sort__dispay_areas__mode__alphabetic_REVERSED_order = "alphabetic__REVERSED_order";
		root_this_.sort__dispay_areas__mode__score__HIGH_to_low = "score__HIGH_to_low";
		root_this_.sort__dispay_areas__mode__score__low_to_HIGH = "score__low_to_HIGH";

		root_this_.sort__curr_default_value = root_this_.sort__dispay_areas__mode__alphabetic_regular_order;

		root_this_.sort__curr_display_areas_sorting_mode = root_this_.sort__curr_default_value;



		/////// filteirng : some|all modes
		///
		/////// tags filtering modes
		root_this_.tags_filering__CURRENT_mode___true_is_ALL__false_is_SOME  = root_this_.tags_filtering__mode__SOME;

		/////  vlaues filtering modes
		root_this_.basicValues_filering__CURRENT_mode___true_is_ALL__false_is_SOME = root_this_.basicValues_filtering__mode__SOME;




		///// assigned data keys names
		//
		root_this_.data_key_for_menu_item_num = "data_key_for_menu_item_num";

		root_this_.data_key_for_display_area_num = "data_key_for_display_area_num";

		root_this_.data_key_for_display_area_country_iso_code = "data_key_for_display_area_country_iso_code";

		root_this_.data_key_for_bar_within_bar__index = "data_key_for_bar_within_bar__index";


		//// country menu 

		//  - key for region items indicies
		root_this_.data_key_for_country_menu__regions_indicies  = "data_key_for_country_menu__regions_indicies";

		//  - key for the first column values of the values menu
		root_this_.data_key_for_values_menu__first_col_value_choices_indicies  = "data_key_for_values_menu__first_col_value_choices_indicies";
		//  - and the key for which item the current item is in the menu
		root_this_.data_key_for_values_menu__which_index_of_selectable_item_i  = "data_key_for_values_menu__which_index_of_selectable_item_i";

		//  - key for country names indicies
		root_this_.data_key_for_country_menu__country_indicies  = "data_key_for_country_menu__country_indicies";

		///////////////////						  ////////////////
		///////////////////		menu variables    /////////////////
		///////////////////					      ////////////////


		////////// variables to indicate which menu has recently been opened
		//			( so know what kind of processing to do, when the time comes )

		root_this_.menues_listing__txt__display_by_menu = "menues_listing__txt__display_by_menu";
		root_this_.menues_listing__txt__values_menu = "menues_listing__txt__display_by_menu";
		root_this_.menues_listing__txt__regions_menu = "menues_listing__txt__display_by_regions";
		root_this_.menues_listing__txt__sorting_menu = "menues_listing__txt__sorting_menu";

		/// set which the last opened menu was
		//	- just set it to one which is involved with a lot of calculations
		//	... initially. so if a recalc is triggered, it does the whole deal
		root_this_.menues_listing__last_opened_menu = root_this_.menues_listing__txt__values_menu;




		//////////   display by meu 

		// STARTUP OPTION FOR DISPLAY BY MENU
		//	- refers to the col number in the col info objects in the main object ( eg. table: commitments data )
		//
		// which column (info obj number) is used for 
		//	the display by menu?
		root_this_.curr_col_info_column_num_used_for_display_by_menu__index = 23;
		// just the raw value of which item is selected
		root_this_.display_by_menu__which_curr_item_is_selected_i = 0;

		// default selected value
		root_this_.display_by_menu__default_selected_meta_data_and_menu_item_index = 0;



		//////////   regions menu

		//  how many country entires per column? 
		root_this_.regions_menu__num_country_names_per_column = [ 11, 19, 19, 19 ];


		//////////  something

		////   index of the country column in the usual 
		//			column information objects
		///  root_this_.main_col_info_objects__index_of_country_column = 0;
		root_this_.main_col_info_objects__index_of_values_column = 0;
		root_this_.regions__meta_options_col_info_objects__index_of_meta_options = 0;

		//// 
		root_this_.menu__display_by__number_of_col_info_objects = 1;

		//// 
		root_this_.graph_view__display_by_menu__values_index = 0;



		//// where are the action plan cycles in the col information objects 
		// // USED?
		root_this_.index_of_the_Action_Plan_Cycles_column_in_formatted_data_rows = 2;



		////////// meta-data objects for various menus

		// for the display by menu
		root_this_.column_information_object_for__display_by__menu_choices = [];
		// for the values and tags menu
		root_this_.column_information_object_for__values_and_tags__menu_choices = [];
		// for the regions menu
		root_this_.column_information_object_for__regions_menu__regionsMetaOptions = [];




		///////////////////									////////////////
		///////////////////		visual elements variables  	/////////////////
		///////////////////									////////////////

		//// how far off the top left do the graph units start from?
		root_this_.graphing__first_graph_position__offset_x = 0;
		root_this_.graphing__first_graph_position__offset_y = 0;

		//// width of graph areas
		//		used for calculating the position
		//		- not necessarily the same as the CSS width of the element
		root_this_.graphing__width_of_graphing_elements_x = 30;

		////// bar graph units

		//// max height of bars
		root_this_.graphing__CURR_height_of_bars_y = 600;

		//// vertical margin between text elements and the bars
		root_this_.graphing__vertical_separation_btw_bar_top_and_above_bar_text_element_bottom = 00;

		///  what's the gap between bars within bars
		root_this_.graphing__vertical_gap_in_px__btw_value_bars = 2;

		///	 what is the size of zero-commitment/element bars?
		root_this_.graphing__zero_value_bar_vertical_size_px_v = 10;

		/// what's the minimal size of blocks?
		root_this_.graphing__minimal_vertical_size_of_value_blocks = 2;


		//// height of text elements
		root_this_.graphing__height_of_text_elements_above_bars = 00;


		//// bar animation
		root_this_.graphing__bar_animation__duration_ms = 600;
		root_this_.graphing__bar_animation__duration_ms__faster = 300;
		root_this_.graphing__bar_animation__duration_ms__slower = 1200;


		//// graph vertical axis  bits


		// ready texts
		root_this_.vertical_axis__showing_percentages__text = "showing_percentages";
		root_this_.vertical_axis__showing_absolute_count__text = "showing_absolute_count";

		/// are we showing percentage values or absolute num of commitments/
		root_this_.vertical_axis__are_we_showing_percentagae_or_abs_commitment_count__values = root_this_.vertical_axis__showing_percentages__text;


		// number of axis items/marks/numbers
		root_this_.vertical_axis__num_of_marks = 5;

		//  how wide is the div...with axis marks leading to the graphing area
		root_this_.vertical_axis__outer_outer_area__horiz_dist_to_graphin_area_edge = 114;



		/////// mouseover region
		///////

		///// the setTimeout object numbers related to the mouseovers

		// for setTimeout related to the appearing and disappearing of the mouseover
		root_this_.mouseover__setTimeout_num__for_APPearing = 0;
		root_this_.mouseover__setTimeout_num__for_DISappearing = 0;
		
		//// timings for how long it takes before there'sa fade in/out
		root_this_.mouseover__delay_before_fade_IN_in_ms__general = 50;
		root_this_.mouseover__delay_before_fade_OUT_in_ms__general = 10;
		// for quick disappearances
		root_this_.mouseover__delay_before_fade_OUT_in_ms__QUICKLY = 0;

		/// timings for fade-in/out
		root_this_.mouseover__fade_IN_time_in_ms__general = 500;
		root_this_.mouseover__fade_OUT_time_in_ms__general = 0;

		/// distance from the mousecursor to the mouseover
		root_this_.mouseover__distance_from_mouseover_to_mousecursor__horiz_x = 5;
		root_this_.mouseover__distance_from_mouseover_to_mousecursor__smaller__horiz_x = 5;
		root_this_.mouseover__distance_from_mouseover_to_mousecursor__vert_y = -60;

		/// distances if the mouse is near the screen edge
		root_this_.mouseover__distance_from_mouseover_to_mousecursor__IF_MOUSE_NEAR_SCREEN_EDGE__horiz_x = 5;
		root_this_.mouseover__distance_from_mouseover_to_mousecursor__IF_MOUSE_NEAR_SCREEN_EDGE__vert_y = -35;






		///// exporting data 
		/////


		// filename for exporting data
		root_this_.export_data__filename_of_exported_data = "ogp_exporer__graph_data_export";



		///////////////////						////////////////
		///////////////////		html variables  /////////////////
		///////////////////						////////////////

		/* ---- outer area ----- */
		/* ---- outer area ----- */
		/* ---- outer area ----- */
		/* ---- outer area ----- */

		root_this_.graph_view__outer_area_id = "graph_view__outer_area_id";



		/* ---- inner main areas ----- */
		/* ---- inner main areas ----- */
		/* ---- inner main areas ----- */
		/* ---- inner main areas ----- */

		/* menu area */
		root_this_.graph_view__inner_areas__menu_options_area__id = "graph_view__inner_areas__menu_options_area__id";

		/* graphing area */
		root_this_.graph_view__inner_areas__graphing_area__id = "graph_view__inner_areas__graphing_area__id";




		/* ---- inner area : menu area  ----- */
		/* ---- inner area : menu area  ----- */
		/* ---- inner area : menu area  ----- */


		/* - general menu items, valid for all menus - */
		root_this_.graph_view__inner_areas__menu_options_area__menu_options__header_item = "graph_view__inner_areas__menu_options_area__menu_options__header_item";

		root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__REGION = "graph_view__inner_areas__menu_options_area__menu_options__selectable_item__REGION";

		root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item = "graph_view__inner_areas__menu_options_area__menu_options__selectable_item";

		root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED = "graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED";

		/* general drop down menu */
		root_this_.graph_view__inner_areas__menu_options_area__menu_options__drop_down_menu_top_part__CLASS = "graph_view__inner_areas__menu_options_area__menu_options__drop_down_menu_top_part__CLASS";
		/* that down arrow at the right of drop down meus */
		root_this_.graph_view__inner_areas__menu_options_area__displayByMenu__general_drop_down_menu_DOWN_ARROW = "graph_view__inner_areas__menu_options_area__displayByMenu__general_drop_down_menu_DOWN_ARROW";



		/* - the header text - */
		root_this_.graph_view__inner_areas__menu_options_area__text_at_top = "graph_view__inner_areas__menu_options_area__text_at_top";
		/* and the text styles of the texts on top */
		root_this_.graph_view__inner_areas__menu_options_area__text_at_top__numerator_txt = "graph_view__inner_areas__menu_options_area__text_at_top__numerator_txt";
		root_this_.graph_view__inner_areas__menu_options_area__text_at_top__DEnominator_txt = "graph_view__inner_areas__menu_options_area__text_at_top__DEnominator_txt";
		root_this_.graph_view__inner_areas__menu_options_area__text_at_top__slash_txt = "graph_view__inner_areas__menu_options_area__text_at_top__slash_txt";
		root_this_.graph_view__inner_areas__menu_options_area__text_at_top__regularUpperPart_txt = "graph_view__inner_areas__menu_options_area__text_at_top__regularUpperPart_txt";
		root_this_.graph_view__inner_areas__menu_options_area__text_at_top__regularLowerPart_txt = "graph_view__inner_areas__menu_options_area__text_at_top__regularLowerPart_txt";


		/* -- menu area : Display By Menu -- */

		root_this_.graph_view__inner_areas__menu_options_area__displayByMenu__outer_area = "graph_view__inner_areas__menu_options_area__displayByMenu__outer_area";

		root_this_.graph_view__inner_areas__menu_options_area__displayByMenu__outer_top_option_static = "graph_view__inner_areas__menu_options_area__displayByMenu__outer_top_option_static";

		root_this_.graph_view__inner_areas__menu_options_area__displayByMenu__outer_list_of_menu_options_outer = "graph_view__inner_areas__menu_options_area__displayByMenu__outer_list_of_menu_options_outer";



		/* -- menu area : Values -- */

		root_this_.graph_view__inner_areas__menu_options_area__Values__outer_area = "graph_view__inner_areas__menu_options_area__Values__outer_area";

		root_this_.graph_view__inner_areas__menu_options_area__Values__outer_top_option_static = "graph_view__inner_areas__menu_options_area__Values__outer_top_option_static";

		root_this_.graph_view__inner_areas__menu_options_area__Values__outer_list_of_menu_options_outer = "graph_view__inner_areas__menu_options_area__Values__outer_list_of_menu_options_outer";

		root_this_.graph_view__inner_areas__menu_options_area__Values__drop_down__single_column = "graph_view__inner_areas__menu_options_area__Values__drop_down__single_column";

		/* the title for the tags */
		root_this_.graph_view__inner_areas__menu_options_area__Values__drop_down__div_for_TAGS_AREA_title = "graph_view__inner_areas__menu_options_area__Values__drop_down__div_for_TAGS_AREA_title";

		root_this_.graph_view__inner_areas__menu_options_area__Values__drop_down__single_column__FOR_TAGS = "graph_view__inner_areas__menu_options_area__Values__drop_down__single_column__FOR_TAGS";

		// select all/none
		root_this_.graph_view__inner_areas__select_none__values_menu = "graph_view__inner_areas__select_none__values_menu";
		root_this_.graph_view__inner_areas__select_all__values_menu = "graph_view__inner_areas__select_all__values_menu";

		//// search all or some 
		root_this_.graph_view__inner_areas__SEARCHallsometags = "graph_view__inner_areas__SEARCHallsometags";
		root_this_.graph_view__inner_areas__searchALLsometags = "graph_view__inner_areas__searchALLsometags";
		root_this_.graph_view__inner_areas__searchallSOMEtags = "graph_view__inner_areas__searchallSOMEtags";
		root_this_.graph_view__inner_areas__searchallsomeTAGS = "graph_view__inner_areas__searchallsomeTAGS";
		root_this_.graph_view__inner_areas__SEARCHallsometags__SELECTED_ITEM = "graph_view__inner_areas__SEARCHallsometags__SELECTED_ITEM";



		/* -- menu area : Regions -- */

		root_this_.graph_view__inner_areas__menu_options_area__regions__outer_area = "graph_view__inner_areas__menu_options_area__regions__outer_area";

		root_this_.graph_view__inner_areas__menu_options_area__regions__outer_top_option_static = "graph_view__inner_areas__menu_options_area__regions__outer_top_option_static";

		root_this_.graph_view__inner_areas__menu_options_area__regions__outer_list_of_menu_options_outer = "graph_view__inner_areas__menu_options_area__regions__outer_list_of_menu_options_outer";

		root_this_.graph_view__inner_areas__menu_options_area__regions__drop_down__single_column = "graph_view__inner_areas__menu_options_area__regions__drop_down__single_column";

		root_this_.graph_view__inner_areas__select_none = "graph_view__inner_areas__select_none";

		root_this_.graph_view__inner_areas__select_all = "graph_view__inner_areas__select_all";


		/* -- menu area : Sort by -- */

		root_this_.graph_view__inner_areas__menu_options_area__SortBy__outer_area = "graph_view__inner_areas__menu_options_area__SortBy__outer_area";

		root_this_.graph_view__inner_areas__menu_options_area__SortBy__outer_top_option_static = "graph_view__inner_areas__menu_options_area__SortBy__outer_top_option_static";

		root_this_.graph_view__inner_areas__menu_options_area__SortBy__outer_list_of_menu_options_outer = "graph_view__inner_areas__menu_options_area__SortBy__outer_list_of_menu_options_outer";

		/* sorting options */

		root_this_.graph_view__inner_areas__menu_options_area__SortBy__option__sort__alphabetically_normally = "graph_view__inner_areas__menu_options_area__SortBy__option__sort__alphabetically_normally";

		root_this_.graph_view__inner_areas__menu_options_area__SortBy__option__sort__alphabetically_REVERSED_ORDER = "graph_view__inner_areas__menu_options_area__SortBy__option__sort__alphabetically_REVERSED_ORDER";

		root_this_.graph_view__inner_areas__menu_options_area__SortBy__option__sort__HIGH_to_low = "graph_view__inner_areas__menu_options_area__SortBy__option__sort__HIGH_to_low";

		root_this_.graph_view__inner_areas__menu_options_area__SortBy__option__sort__low_to_HIGH = "graph_view__inner_areas__menu_options_area__SortBy__option__sort__low_to_HIGH";


		/* -- buttons -- */

		root_this_.graph_view__inner_areas__menu_options_area__export_data__button = "graph_view__inner_areas__menu_options_area__export_data__button";

		root_this_.graph_view__inner_areas__menu_options_area__export_pdf__button = "graph_view__inner_areas__menu_options_area__export_pdf__button";

		root_this_.graph_view__inner_areas__menu_options_area__reset_settings = "graph_view__inner_areas__menu_options_area__reset_settings";




		/* --- inner area : graphing area  ---- */
		/* --- inner area : graphing area  ---- */
		/* --- inner area : graphing area  ---- */


		/* graph title area */
		root_this_.graph_view__inner_areas__graphing_area__graph_title_area = "graph_view__inner_areas__graphing_area__graph_title_area";


		/* vertical axis */
		root_this_.graph_view__inner_areas__graphing_area__vertical_axis_outer_block = "graph_view__inner_areas__graphing_area__vertical_axis_outer_block";


		/* actual graphing/bars area */
		root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area = "graph_view__inner_areas__graphing_area__actual_graphing_area";


		/* - graphing area's graphing area - */


		/* - visible/invisible area for catching mouseclicks when opening menus - */
		root_this_.graph_view__invisible_area_for_catching_mouse_clickis_below_menu = "graph_view__invisible_area_for_catching_mouse_clickis_below_menu";



		/* outer group : single bar */
		root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph_outer_element = "graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph_outer_element";

		/* actual single bar */
		root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__outer_bar = "graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__outer_bar";

		/* the bars within the outer bar */
		root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__individual_bar_within_the_outer_bar = "graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__individual_bar_within_the_outer_bar";

		/* text on top of bar */
		root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__text_on_top = "graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__text_on_top";

		/* text on the bottom - countryname - */
		root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__text_on_bottom_countryname = "graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__text_on_bottom_countryname";


		/* - graph legend area - */
		root_this_.graph_view__inner_areas__graphing_legends__id = "graph_view__inner_areas__graphing_legends__id";

		/* single legend item - outer area */
		root_this_.graph_view__inner_areas__graphing_legends__single_legend_item__outer_area = "graph_view__inner_areas__graphing_legends__single_legend_item__outer_area";

		/* the inside text */
		root_this_.graph_view__inner_areas__graphing_legends__single_legend_item__inner_area__legend_text = "graph_view__inner_areas__graphing_legends__single_legend_item__inner_area__legend_text";

		/* single legend item - colour box */
		root_this_.graph_view__inner_areas__graphing_legends__single_legend_item__inner_area__colour_box = "graph_view__inner_areas__graphing_legends__single_legend_item__inner_area__colour_box";


		/* vertical axis, more */

		root_this_.graph_view__vertical_axis__single_mark__outer = "graph_view__vertical_axis__single_mark__outer";

		root_this_.graph_view__vertical_axis__single_mark__inner__text_div = "graph_view__vertical_axis__single_mark__inner__text_div";

		root_this_.graph_view__vertical_axis__single_mark__inner__mark_div = "graph_view__vertical_axis__single_mark__inner__mark_div";



		/* - mouseovers - */

		root_this_.mousevoer_graphPg__outer_region = "mousevoer_graphPg__outer_region";
		root_this_.mousevoer_graphPg__inner__region__header = "mousevoer_graphPg__inner__region__header";
		root_this_.mousevoer_graphPg__inner__statistics__region = "mousevoer_graphPg__inner__statistics__region";		

		////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////  various functions
		////////////////////////////////////////////////////////


		////////////////////
		////////////////////	test function
		////////////////////


		///// a hellow-world function ;) 
		graph_view_obj.test_print = function( root_this_, print_this ){

			//console.log(" >>>> test_print ... printing |"+print_this+"|" );
		}










		//////////////////////
		//////////////////////   add the main html bits
		//////////////////////

		graph_view_obj.add_main_html_outline_bits = function( root_this_ ){

			//console.log(">>>> add_main_html_outline_bits() of object |"+root_this_.name_of_this_object+"|" );

			// this is where it all goes
			this.graph_page_html = "";

			/////


			// add the outer area
			this.graph_page_html += "<div id='"+root_this_.graph_view__outer_area_id+"'>";



			// add the outer menu area
			this.graph_page_html += "<div id='"+root_this_.graph_view__inner_areas__menu_options_area__id+"'>";

			// close the oter menu area
			this.graph_page_html += "</div>";


			// add the outer plotting/bar/graphing area
			this.graph_page_html += "<div id='"+root_this_.graph_view__inner_areas__graphing_area__id+"'>";

			// close the outer plotting/bar/graphing area
			this.graph_page_html += "</div>";

			// add the graph legends area 
			this.graph_page_html += "<div id='"+root_this_.graph_view__inner_areas__graphing_legends__id+"'>";

			// close the graph lengends area
			this.graph_page_html += "</div>";			


			// add an invisible layer for closing menus
			//				- the layer is below the drop down meus 
			//				and the rest of the page, 
			//				used for catching mouse-clicks outside the menu
			this.graph_page_html += "<div id='"+root_this_.graph_view__invisible_area_for_catching_mouse_clickis_below_menu+"'></div>" ;
			//


			/// AND..... add the mouse-over area
			//   invisible by default
			this.graph_page_html += "<div id='"+root_this_.mouseover_div__outer_div_dom_element__id_name+"' class='"+root_this_.mouseover_div__outer_div_dom_element__IS_INVISIBLE+"'></div>";

			// close the outer area
			this.graph_page_html += "</div>"



			/////////////

			// and finallement - add the resulting html to the page

			$( "body" ).append( this.graph_page_html );

		}





		//////////////
		//////////////   add  menu area  :  menu area outer bits
		//////////////							- incl floating texts, drop downs
		//////////////



		graph_view_obj.add_menu_area_texts_n_outer_menu_area_bits = function( root_this_ ){

			//console.log(">>>> add_menu_area_texts_n_outer_menu_area_bits() of object |"+root_this_.name_of_this_object+"|" );


			/// select the menu area once
			// 
			this.graphing_area__menu_area__dom = $( "#"+root_this_.graph_view__inner_areas__menu_options_area__id );


			//////////   add the text at the top of the menu area
			//
			this.graphing_area__menu_area__dom.append( "<div id='"+root_this_.graph_view__inner_areas__menu_options_area__text_at_top+"'><span id='"+root_this_.graph_view__inner_areas__menu_options_area__text_at_top__numerator_txt+"'>0</span> <span id='"+root_this_.graph_view__inner_areas__menu_options_area__text_at_top__slash_txt+"'>&nbsp;/&nbsp;</span> <span id='"+root_this_.graph_view__inner_areas__menu_options_area__text_at_top__DEnominator_txt+"'>0 <br/></span> <br/> <span id='"+root_this_.graph_view__inner_areas__menu_options_area__text_at_top__regularUpperPart_txt+"'>Commitments Selected<br/> Use filters below to refine your query</span> <br/><br/><br/> <span id='"+root_this_.graph_view__inner_areas__menu_options_area__text_at_top__regularLowerPart_txt+"'>Please select options to filter the countries being compared</span> </div>");



			/////////    add the Display By OGP Value.... drop down menu

			//
			// the outer part, that's always visible
			this.graphing_area__menu_area__dom.append( "<div id='"+root_this_.graph_view__inner_areas__menu_options_area__displayByMenu__outer_top_option_static+"' class='"+root_this_.graph_view__inner_areas__menu_options_area__menu_options__drop_down_menu_top_part__CLASS+"'>Select performance area</div>" );

			// and
			// the drop down part
			this.graphing_area__menu_area__dom.append( "<div id='"+root_this_.graph_view__inner_areas__menu_options_area__displayByMenu__outer_list_of_menu_options_outer+"'></div>" );



			/////////    add the DValues, etc.... drop down menu

			//
			// the outer part, that's always visible
			this.graphing_area__menu_area__dom.append( "<div id='"+root_this_.graph_view__inner_areas__menu_options_area__Values__outer_top_option_static+"' class='"+root_this_.graph_view__inner_areas__menu_options_area__menu_options__drop_down_menu_top_part__CLASS+"'>Select filters </div>" );

			// and
			// the drop down part
			///   this.graphing_area__menu_area__dom.append( "<div id='"+root_this_.graph_view__inner_areas__menu_options_area__Values__outer_list_of_menu_options_outer+"'><div class='"+root_this_.graph_view__inner_areas__menu_options_area__Values__drop_down__single_column+"'></div><div class='"+root_this_.graph_view__inner_areas__menu_options_area__Values__drop_down__single_column__FOR_TAGS+"'></div><div class='"+root_this_.graph_view__inner_areas__menu_options_area__Values__drop_down__single_column__FOR_TAGS+"'></div><div class='"+root_this_.graph_view__inner_areas__menu_options_area__Values__drop_down__single_column__FOR_TAGS+"'></div></div>" );


			this.graphing_area__menu_area__dom.append( "<div id='"+root_this_.graph_view__inner_areas__menu_options_area__Values__outer_list_of_menu_options_outer+"'><div class='"+root_this_.graph_view__inner_areas__menu_options_area__Values__drop_down__single_column+"'></div><div class='"+root_this_.graph_view__inner_areas__menu_options_area__Values__drop_down__div_for_TAGS_AREA_title+"'>Tags</div><div class='"+root_this_.graph_view__inner_areas__menu_options_area__Values__drop_down__single_column__FOR_TAGS+"'></div><div class='"+root_this_.graph_view__inner_areas__menu_options_area__Values__drop_down__single_column__FOR_TAGS+"'></div><div class='"+root_this_.graph_view__inner_areas__menu_options_area__Values__drop_down__single_column__FOR_TAGS+"'></div></div>" );


			/////////    add the Regions etc.... drop down menu

			//
			// the outer part, that's always visible
			this.graphing_area__menu_area__dom.append( "<div id='"+root_this_.graph_view__inner_areas__menu_options_area__regions__outer_top_option_static+"' class='"+root_this_.graph_view__inner_areas__menu_options_area__menu_options__drop_down_menu_top_part__CLASS+"'>Select country/region </div>" );

			// and
			// the drop down part
			this.graphing_area__menu_area__dom.append( "<div id='"+root_this_.graph_view__inner_areas__menu_options_area__regions__outer_list_of_menu_options_outer+"'><div class='"+root_this_.graph_view__inner_areas__menu_options_area__regions__drop_down__single_column+"'></div><div class='"+root_this_.graph_view__inner_areas__menu_options_area__regions__drop_down__single_column+"'></div><div class='"+root_this_.graph_view__inner_areas__menu_options_area__regions__drop_down__single_column+"'></div><div class='"+root_this_.graph_view__inner_areas__menu_options_area__regions__drop_down__single_column+"'></div></div>" );



			/////////    add the Sort by.... drop down menu

			//
			// the outer part, that's always visible
			this.graphing_area__menu_area__dom.append( "<div id='"+root_this_.graph_view__inner_areas__menu_options_area__SortBy__outer_top_option_static+"' class='"+root_this_.graph_view__inner_areas__menu_options_area__menu_options__drop_down_menu_top_part__CLASS+"'>Sort by </div>" );

			// and
			// the drop down part
			this.graphing_area__menu_area__dom.append( "<div id='"+root_this_.graph_view__inner_areas__menu_options_area__SortBy__outer_list_of_menu_options_outer+"'></div>" );




			//////////////  (add) buttons!  ////////////////

			//		button : Export data
			// 
			this.graphing_area__menu_area__dom.append( "<div id='"+root_this_.graph_view__inner_areas__menu_options_area__export_data__button+"'>Export as data</div>" );


			//		button : Save graph as pdf
			// 
			this.graphing_area__menu_area__dom.append( "<div id='"+root_this_.graph_view__inner_areas__menu_options_area__reset_settings+"'>Reset all settings</div>" );


		}





		//////////////
		//////////////   add  graphing area  :  title region, vertical axis
		//////////////							+ actual graphing region
		//////////////



		graph_view_obj.add_actual_graphing_area_bits = function( root_this_ ){

			//console.log(">>>> add_actual_graphing_area_bits() of object |"+root_this_.name_of_this_object+"|" );


			/// select the menu area once
			// 
			this.graphing_area__graphing_area__dom = $( "#"+root_this_.graph_view__inner_areas__graphing_area__id );


			//////////   add the title area
			//
			this.graphing_area__graphing_area__dom.append( "<div id='"+root_this_.graph_view__inner_areas__graphing_area__graph_title_area+"'>Graph title something</div>" );


			//////////   add the vertical axis area
			//
			this.graphing_area__graphing_area__dom.append( "<div id='"+root_this_.graph_view__inner_areas__graphing_area__vertical_axis_outer_block+"'></div>" );


			//////////   add the actual graphing area
			//
			this.graphing_area__graphing_area__dom.append( "<div id='"+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area+"'></div>" );


		}






		//////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////
		//////////////////////////////////
		//////////////////////////////////		setup Display By menu + interactions
		//////////////////////////////////





		//////////////////////////////////
		//////////////////////////////////		setup menu / col information objects
		//////////////////////////////////



		root_this_.setup_col_information_object_for__menu__display_by = function( root_this_ ){

			//console.log(">>>>> setup_col_information_object_for__menu__display_by() ");


			////////////


			// initialise the column description objects array
			root_this_.column_information_object_for__display_by__menu_choices = new Array( root_this_.menu__display_by__number_of_col_info_objects );



			//////////  set the actual parameters






			//////   Display By [0] /////// 
			//
			root_this_.column_information_object_for__display_by__menu_choices[ 0 ] = new this.column_description_obj(); 

			// what kind fo column type is it? 
			root_this_.column_information_object_for__display_by__menu_choices[ 0 ].column_type = "basic_filter_column";

			// set which column, of the imported data, the data is in 
			root_this_.column_information_object_for__display_by__menu_choices[ 0 ].which_column_num_to_fetch_data_for_for_this_column = "not applicable for this menu ;O"; 

			// set the column class name 
			root_this_.column_information_object_for__display_by__menu_choices[ 0 ].column_class_name = "display_by_menu";

			// the id for the outer header div
			root_this_.column_information_object_for__display_by__menu_choices[ 0 ].column_header_outer_containing_div_id_name = "display_by_menu";	

			// set the column title name
			root_this_.column_information_object_for__display_by__menu_choices[ 0 ].column_title__text = "Display By:";

			// set the column title class anme  
			root_this_.column_information_object_for__display_by__menu_choices[ 0 ].column_title__class_name = "column_title column_header_text__val_no_1";

			// and the header choices… in order of appearance
			root_this_.column_information_object_for__display_by__menu_choices[ 0 ].header__value_choice_categories__listed_in_order_of_appearance = [ 

											{ type : "value_choice",
											// header_category_text : "Starred (old)", 
											header_category_text : "Star Commitments (pre-June 2014 assessments)",
											value_id_name_in_menu : "starred_old_percent",
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* which main column info object does this refer to? */
											this_refers_to_main_column_information_object_num_i : 23,
											this_refers_to_value_i_in_given_main_col_info_obj : -999,
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 

											{ type : "value_choice",
											// header_category_text : "Starred (new)", 
											header_category_text : "Star Commitments (2015 only)",
											value_id_name_in_menu : "starred_new_percent",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* which main column info object does this refer to? */
											this_refers_to_main_column_information_object_num_i : 22,
											this_refers_to_value_i_in_given_main_col_info_obj : -999,
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 

											{ type : "value_choice",
											header_category_text : "Completion (Progress Report)", 
											value_id_name_in_menu : "completion_ProgressReport__percent",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* which main column info object does this refer to? */
											// this_refers_to_main_column_information_object_num_i : 9,
											this_refers_to_main_column_information_object_num_i : 15,
											this_refers_to_value_i_in_given_main_col_info_obj : -999,
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 
							
											{ type : "value_choice",
											header_category_text : "Completion (End of Term)", 
											value_id_name_in_menu : "completion__end_of_term",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											this_refers_to_main_column_information_object_num_i : 19,
											this_refers_to_value_i_in_given_main_col_info_obj : -999,
											header__class_name_selected : "header_values__colours_1_of_7",
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 
							
											{ type : "value_choice",
											header_category_text : "Potential Impact", 
											value_id_name_in_menu : "potential_impact__percent",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* which main column info object does this refer to? */
											this_refers_to_main_column_information_object_num_i : 14,
											this_refers_to_value_i_in_given_main_col_info_obj : -999,
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 

											{ type : "value_choice",
											header_category_text : "Specificity", 
											value_id_name_in_menu : "specificity__percent",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* which main column info object does this refer to? */
											this_refers_to_main_column_information_object_num_i : 13,
											this_refers_to_value_i_in_given_main_col_info_obj : -999,
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 

											{ type : "value_choice",
											header_category_text : "Relevance to OGP values", 
											value_id_name_in_menu : "relevance_to_ogp_values__percent",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* which main column info object does this refer to? */
											this_refers_to_main_column_information_object_num_i : 8,
											this_refers_to_value_i_in_given_main_col_info_obj : -999,
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 

													];



			// compressed
			//////// root_this_.column_information_object_for__display_by__menu_choices[ 0 ].whole_column_compressed_width__in_px_x = 50;

			//// the mouseover text
			root_this_.column_information_object_for__display_by__menu_choices[ 0 ].mouse_over_text_reference  = "Indicates which Action Plan the commitments belong too. The latest Action Plan will be tagged by the OGP Support Unit, but are not yet assessed by the IRM researcher.";

		}





		//////////////////////////////////
		//////////////////////////////////		setup display by menu + interactions
		//////////////////////////////////

		/* ... how? 
		
			- show/hide the menu
			- loop through the relevant col information object values
			- make div
			- assign data
			- bind interactions

		*/

		root_this_.setup_display_by_menu_html_and_interactions = function( root_this_ ){


			//console.log(">>>>>>>>  setup_display_by_menu_html_and_interactions() ");

			this.display_by_menu__drop_down_part__outer = $("#"+root_this_.graph_view__inner_areas__menu_options_area__displayByMenu__outer_list_of_menu_options_outer );



			//////////  loop through the relevant col info objects and insert menu options 
			///				and bind data to them… and maybe even interactions

			for( this.curr_display_by_menu_item_i = 0; this.curr_display_by_menu_item_i < root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_display_by_menu_item_i++ ){

				//console.log("-- working on menu item #"+this.curr_display_by_menu_item_i+" which has this id name |"+root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_display_by_menu_item_i ].value_id_name_in_menu+"|" );

				this.display_by_menu__drop_down_part__outer.append("<div id='"+root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_display_by_menu_item_i ].value_id_name_in_menu+"' class='"+root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item+"'>"+root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_display_by_menu_item_i ].header_category_text+"</div>" );

				// assign the data - i.e. which item number /index this is 
				$("#"+root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_display_by_menu_item_i ].value_id_name_in_menu ).data( root_this_.data_key_for_menu_item_num, this.curr_display_by_menu_item_i );


				//console.log(" the assigned data to item #"+this.curr_display_by_menu_item_i+" is "+$("#"+root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_display_by_menu_item_i ].value_id_name_in_menu ).data( root_this_.data_key_for_menu_item_num )  );

			}


			///////////  bind the show/hide the drop down menu please ;)
			////
			$( "#"+root_this_.graph_view__inner_areas__menu_options_area__displayByMenu__outer_top_option_static ).click( function(){ 

					$("#"+root_this_.graph_view__inner_areas__menu_options_area__displayByMenu__outer_list_of_menu_options_outer ).toggle();


					// and setup the background mouse-catching area
					root_this_.graphing_area__open_menu_operations__eg_set_up_mouse_catching_area( root_this_, root_this_.menues_listing__txt__display_by_menu );

			});



			/////// /////// do the initial selection
			root_this_.update_display_by_menu_options_according_to_data( root_this_ );


		}








		//////////////
		//////////////		bind interactions to the display by menu 
		//////////////


		root_this_.bind_interactions_to_the_display_by_menu = function( root_this_ ){

			//console.log(">>>>> bind_interactions_to_the_display_by_menu ");


			//// select the selectable items in the display by drop down menu 
			this.display_by_selectable_items = $("#"+root_this_.graph_view__inner_areas__menu_options_area__displayByMenu__outer_list_of_menu_options_outer+" ."+root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item );

			this.display_by_selectable_items.click(function(){

				this.data_of_curr_item = $(this).data( root_this_.data_key_for_menu_item_num ) ;
				//console.log("ehllow! + "+this.data_of_curr_item );

				// update the meta data object for this menu
				root_this_.set_display_by_col_info_obj_val_acc_to_data( root_this_, this.data_of_curr_item );


				//// and then update the menu please :) 
				root_this_.update_display_by_menu_options_according_to_data( root_this_ );
				//console.log("text!");

				/// and start the counter updates, please!
				/////////////////   root_this_.display_by_menu__start_relevant_counting_and_bars_plus_text_updates__following_menu_action( root_this_ );


				/// set the global variable as to which 
				//		col info object is selected
				root_this_.set_which_col_info_obj_is_CURR_being_used_for_the_graph_bars( root_this_, this.data_of_curr_item );



				//////// redisplay please

				//// update the counter please! 
				root_this_.do_value_counting_for_matching_commitments_for_graph_view( root_this_ );

				/// finally… redisplay items
				root_this_.change_update__display_areas__bars_and_bars_within_main_bar__according_to_data( root_this_ );

				/// and update the legends too please ;) 
				root_this_.update_legend_display_given_current_view( root_this_ );

				//// bind interactive elemnts to the bars
				////// /// and bind interactive things to the bars ( eg. mouseovers acc to data )
				root_this_.graph_view__bind_interactions_to_bars_within_bars( root_this_ );


				///// resort and reposition the bars if doing numeric sorting
				root_this_.sorting___sort_and_calc_relev_bar_position_and_move_bars__if_high_low_sorting_setting_active( root_this_ );				


				////////  aaaaand ..... update the graph header please
				root_this_.graph_title__update_please( root_this_ );


			});			


		}



		//////////////
		//////////////		helper function :
		//////////////			(- input meta data col number )
		//////////////			(- output : set root level var … )
		//////////////			set which column number in the column info object
		//////////////			is used for the display by menu and the bars
		//////////////


		root_this_.set_which_col_info_obj_is_CURR_being_used_for_the_graph_bars = function( root_this_, display_by_meta_data_col_obj_i_of_current_selection ){

			//console.log(">>>>set_which_col_info_obj_is_CURR_being_used_for_the_graph_bars - clicked menu item  #"+display_by_meta_data_col_obj_i_of_current_selection+" - which is |"+root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance[ display_by_meta_data_col_obj_i_of_current_selection ].header_category_text+"|" );

			/// set the raw menu item number
			root_this_.display_by_menu__which_curr_item_is_selected_i = display_by_meta_data_col_obj_i_of_current_selection; 

			// set the global variable
			root_this_.curr_col_info_column_num_used_for_display_by_menu__index = root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance[ display_by_meta_data_col_obj_i_of_current_selection ].this_refers_to_main_column_information_object_num_i; 

			// final feedback
			//console.log(" \t - the current relevant/main final column is #"+root_this_.curr_col_info_column_num_used_for_display_by_menu__index+" - |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].column_title__text+"|");
		}





		//////////////
		//////////////		helper function to the above : set display by data col info obj 
		//////////////			selected val according to the menu
		//////////////


		root_this_.set_display_by_col_info_obj_val_acc_to_data = function( root_this_, value_index ){


			//console.log(">>>>  set_display_by_col_info_obj_val_acc_to_data - value num |"+value_index+"|  - the current col info obj value is |"+root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance[ value_index ].current_selection__selectedTrueFalse+"|" );

			/// set all the menu options to false
			//		so only the right one is selected
			root_this_.set_all_col_info_obj_items_n_values_for_the_display_by_menu_to_this_value( root_this_, false );

			// inverse the value 
			// (it's only a boolean… )
			root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance[ value_index ].current_selection__selectedTrueFalse = !root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance[ value_index ].current_selection__selectedTrueFalse;

			// reprint the value
			//console.log("-- the value is now |"+root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance[ value_index ].current_selection__selectedTrueFalse+"|" );

		}




		//////////////
		//////////////		helper function to the above : set all the display by menu col info 
		//////////////			object values to a given value
		//////////////

		root_this_.set_all_col_info_obj_items_n_values_for_the_display_by_menu_to_this_value = function( root_this_, given_value ){

			//console.log(">>>>>  set_all_col_info_obj_values_for_the_display_by_menu_to_this_value - value -> "+given_value+" <- value");

				for( this.curr_display_by_menu_item_i = 0; this.curr_display_by_menu_item_i < root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_display_by_menu_item_i++ ){

					// set the correct value
					root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_display_by_menu_item_i ].current_selection__selectedTrueFalse = given_value;

				}
		}




		//////////////
		//////////////		helper function to the above : set the visual display of the
		//////////////				menu according to the data
		//////////////

		root_this_.update_display_by_menu_options_according_to_data = function( root_this_ ){

			//console.log( "test function!!!!!" );

			//// hello!
			//console.log(">>>>> set_display_by_menu_items_according_to_col_info_objs_data() ");

			////  seleect all of them
			this.display_by_selectable_items = $("#"+root_this_.graph_view__inner_areas__menu_options_area__displayByMenu__outer_list_of_menu_options_outer+" ."+root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item );

			// remove the selected class for all of them
			this.display_by_selectable_items.removeClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );

			//// loop through the col info obj values and set the menu accordingly
			for( this.curr_display_by_menu_item_i = 0; this.curr_display_by_menu_item_i < root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_display_by_menu_item_i++ ){

				//console.log(" working on item #"+this.curr_display_by_menu_item_i );

				if( root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_display_by_menu_item_i ].current_selection__selectedTrueFalse === true ){

					//console.log("-- selecting the menu item |"+root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_display_by_menu_item_i ].current_selection__selectedTrueFalse+"|");

					//
					$( "#"+root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_display_by_menu_item_i ].value_id_name_in_menu ).addClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );


				} // end if


			}

		}





		//////////////
		//////////////		display by meun:
		//////////////				- find relevant display by option
		//////////////				- start display by commitment counting operations
		//////////////				- and update the bars + other relevant texts
		//////////////


		root_this_.display_by_menu__start_relevant_counting_and_bars_plus_text_updates__following_menu_action = function( root_this_ ){

			//console.log(">>>>> display_by_menu__start_relevant_counting_and_bars_plus_text_updates__following_menu_action() ");


			//// find the clicked item!

			//////////  loop through the relevant col info objects and insert menu options 
			///				and find the relevant col item! 

			for( this.curr_display_by_menu_item_i = 0; this.curr_display_by_menu_item_i < root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_display_by_menu_item_i++ ){

				if( root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_display_by_menu_item_i ].current_selection__selectedTrueFalse === true ){

					this.curr_col_num = root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_display_by_menu_item_i ].this_refers_to_main_column_information_object_num_i ;

					//console.log("\t\t - the value item #"+this.curr_display_by_menu_item_i+" ("+root_this_.column_information_object_for__display_by__menu_choices[ root_this_.graph_view__display_by_menu__values_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_display_by_menu_item_i ].header_category_text +") is selected (col info obj #"+this.curr_col_num );



					//// send things off to do things

					//  update the count of matching commitments, according to the display by menu					
					////   root_this_.count_relevant_commitments_for_display_by_menu__and_update_relev_counter( root_this_, this.curr_col_num, "unfiltered" );


					/// do a sort, just in case…?
					// sort - only if doing the numeric values 
					//		( changing the display by values shouldn't change the alphabetic sorting )
								/////// if sorting by numeric measures
					if(  root_this_.sort__curr_display_areas_sorting_mode === root_this_.sort__dispay_areas__mode__score__HIGH_to_low || root_this_.sort__curr_display_areas_sorting_mode === root_this_.sort__dispay_areas__mode__score__low_to_HIGH ){

						root_this_.sort_display_area_objects_according_to_current_settings( root_this_ );

					}
					

					// update the dispay of objects … now we have a new count
					/////  root_this_.graphing_ara__set_bar_areas_locations_according_to_order_of_display_areas( root_this_ );
					root_this_.graphing_ara__set_bar_areas_locations_according_to_order_of_display_areas__NEW( root_this_ );


				}

			}
		}









		//////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////
		//////////////////////////////////
		//////////////////////////////////		setup Values, Challenges, Tags, etc.. menu + interactions
		//////////////////////////////////


		///// general setup for the values menu


		root_this_.setup__values_challenges_tags__menu__general_setup = function( root_this_ ){

			//console.log(">>>>>>> setup__values_challenges_tags__menu__general_setup() ");

			/// set up the meta-data
			// ( only do this is it hasn't been set up before )
			if( root_this_.has_this_object_been_set_up_visuall_before === false ){			
				root_this_.setup_col_information_object_for__values_challenges_and_tags__menu( root_this_ );
			}

			/// set up the values, challenges, ap menu items (the tags come later)
			root_this_.setup_html_for_values_challenges_n_action_plans__for_the___values_challenges_and_tags__menu( root_this_ );
			/// and then set up the tags
			root_this_.setup_html_for_TAGS__for_the__values_challenges_and_tags__menu( root_this_ );
			/// and then the select all / none buttons
			root_this_.values_menu__populate_with__select_none_and_select_all_button( root_this_ );
			/// populate with the search ALL/SOME tags texts+buttons
			root_this_.values_menu__populate_with__search_SOME_ALL_tags__texts_n_buttons( root_this_ );
			/// and set the above according to the data
			root_this_.values_menu__set_visual_attributes_according_to_data__in_searchallSOMEtags__options( root_this_ );


			/// and bind the data + interactions
			// for the regular values, gc, ap's
			root_this_.bind_data_and_interactions_for__values_challenges_and_tags__menu( root_this_ );

			//  and for the tags
			root_this_.bind_interactions_and_data_for_TAGS__for_the__values_challenges_and_tags__menu( root_this_ );

			///  set the tags values to false and update their display
			// ( only do this is it hasn't been set up before )
			if( root_this_.has_this_object_been_set_up_visuall_before === false ){	
				root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_TRUE__and__update_display( root_this_ );
			}else if(  root_this_.has_this_object_been_set_up_visuall_before === true ){

				//// and if it's been displayed before, set the menu according to the data 
				//	please
				/// update the menu appearance, according to the data
				root_this_.set_visual_appearance_of_ALL_values_in_values_gc_and_tags_menu__according_to_data( root_this_ );
				// and for the tags too please
				root_this_.set_visual_appearance_of_ALL_TAGS_in_values_menu__according_to_data( root_this_ );
			}
			
			// c'cest tout!
		}




		//////////////////////////////////
		//////////////////////////////////		reset all values + tags to false
		//////////////////////////////////		+ update the display
		//////////////////////////////////


		root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_false__and__update_display = function( root_this_ ){

			//console.log(">>>>>. values_menu__reset_all_values_gc_ap_and_tags__to_false__and__update_display() ");


			//// the function below
			root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_false__and__NO_DISPLAY_UPDATE( root_this_ );


			/// and update the commitments filtering please
			root_this_.start_filtering_and_commitments_listing_process__given_user_interaction__graph_edition( root_this_, true, true, true );
		}


		// as above, but setting all values to true… 

		root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_TRUE__and__update_display = function( root_this_ ){

			//console.log(">>>>>. values_menu__reset_all_values_gc_ap_and_tags__to_false__and__update_display() ");


			//// the function below
			root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_TRUE__and__NO_DISPLAY_UPDATE( root_this_ );


			/// and update the commitments filtering please
			root_this_.start_filtering_and_commitments_listing_process__given_user_interaction__graph_edition( root_this_, true, true, true );

		}		



		// as above but don't update the display ( it'll happen later, in the context it's used in )
		// - for use in the alternative selection mode of the given menu,
		//   such that the first click on any item, if all is selected, 
		//	 then only the clicked item is selected
		root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_false__BUT_NO_DISPLAY_UPDATE = function( root_this_ ){

			//console.log(">>>>>. values_menu__reset_all_values_gc_ap_and_tags__to_false__and__update_display() ");


			//// the function below
			root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_false__and__NO_DISPLAY_UPDATE( root_this_ );


			/// and update the commitments filtering please
			///////   root_this_.start_filtering_and_commitments_listing_process__given_user_interaction__graph_edition( root_this_, true, true, true );
		}



		//// as above, but don't recount the found commitments
		//					- this will be done later in any event!
		root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_false__and__update_display__BUT_DONT_RECOUNT = function( root_this_ ){

			//console.log(">>>>>. values_menu__reset_all_values_gc_ap_and_tags__to_false__and__update_display() ");


			//// the function below
			root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_false__and__NO_DISPLAY_UPDATE( root_this_ );


			/// and update the commitments filtering please
			root_this_.start_filtering_and_commitments_listing_process__given_user_interaction__graph_edition( root_this_, true, false, true );

		}
		

		//////////   PROBLEMS WITH THIS! 
		//// set all to true - version of the above
		//
		//// as above, but don't recount the found commitments
		//					- this will be done later in any event!
		root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_TRUE__and__update_display__BUT_DONT_RECOUNT = function( root_this_ ){

			//console.log(">>>>>. values_menu__reset_all_values_gc_ap_and_tags__to_false__and__update_display() ");


			//// the function below
			root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_TRUE__and__NO_DISPLAY_UPDATE( root_this_ );


			/// and update the commitments filtering please
			root_this_.start_filtering_and_commitments_listing_process__given_user_interaction__graph_edition( root_this_, true, false, true );

		}
		


		//// variation on the above without the values redraw
		root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_false__and__NO_DISPLAY_UPDATE = function( root_this_ ){

			//console.log(">>>>>. values_menu__reset_all_values_gc_ap_and_tags__to_false__and__update_display() ");


			/// set all the values to false in the values data
			root_this_.values_menu__set_all_meta_data_values_of_the_values_menu__to_this_value( root_this_, false );
			// ..and in the tags data
			root_this_.set_ALL_TAGS_in_values_gc_and_tags_menu__according_to_desired_value( root_this_, false );

			/// update the menu appearance, according to the data
			// - values
			root_this_.set_visual_appearance_of_ALL_values_in_values_gc_and_tags_menu__according_to_data( root_this_ );
			// and for the tags too please
			root_this_.set_visual_appearance_of_ALL_TAGS_in_values_menu__according_to_data( root_this_ );


			/// and update the commitments filtering please
			/////////   root_this_.start_filtering_and_commitments_listing_process__given_user_interaction__graph_edition( root_this_, true, true, true );

		}



		//// variation on the above without the values redraw
		root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_TRUE__and__NO_DISPLAY_UPDATE = function( root_this_ ){

			//console.log(">>>>>. values_menu__reset_all_values_gc_ap_and_tags__to_false__and__update_display() ");


			/// set all the values to false in the values data
			root_this_.values_menu__set_all_meta_data_values_of_the_values_menu__to_this_value( root_this_, true );
			// ..and in the tags data
			root_this_.set_ALL_TAGS_in_values_gc_and_tags_menu__according_to_desired_value( root_this_, true );

			/// update the menu appearance, according to the data
			// - values
			root_this_.set_visual_appearance_of_ALL_values_in_values_gc_and_tags_menu__according_to_data( root_this_ );
			// and for the tags too please
			root_this_.set_visual_appearance_of_ALL_TAGS_in_values_menu__according_to_data( root_this_ );


			/// and update the commitments filtering please
			/////////   root_this_.start_filtering_and_commitments_listing_process__given_user_interaction__graph_edition( root_this_, true, true, true );

		}		


		// // // // // //   for teh |search all some tags| buttons
		// // // // // //   for teh |search all some tags| buttons

		// click ALL
		root_this_.values_menu__click_ALL__in_searchALLsometags__options = function( root_this_ ){

			console.log(">>> values_menu__click_ALL__in_searchALLsometags__options() ");

			// set the TAGs filtering MODE to ALL
			root_this_.tags_filering__CURRENT_mode___true_is_ALL__false_is_SOME  = root_this_.tags_filtering__mode__ALL;

			// set the values filtering mode to ALL 
			root_this_.basicValues_filering__CURRENT_mode___true_is_ALL__false_is_SOME = root_this_.basicValues_filtering__mode__ALL ;

			root_this_.values_menu__set_visual_attributes_according_to_data__in_searchallSOMEtags__options( root_this_ );
		}

		// click SOME
		root_this_.values_menu__click_SOME__in_searchallSOMEtags__options = function( root_this_ ){

			console.log(">>> values_menu__click_SOME__in_searchallSOMEtags__options() ");

			// set the tags filtering mode to SOME 
			root_this_.tags_filering__CURRENT_mode___true_is_ALL__false_is_SOME  = root_this_.tags_filtering__mode__SOME;

			// set the values filtering mode to SOME 
			root_this_.basicValues_filering__CURRENT_mode___true_is_ALL__false_is_SOME = root_this_.basicValues_filtering__mode__SOME ;


			root_this_.values_menu__set_visual_attributes_according_to_data__in_searchallSOMEtags__options( root_this_ );
		}		

		// reset! 
		root_this_.values_menu__RESET_DATA_AND_VISUAL_APPEARANCE__in_searchallSOMEtags__options = function( root_this_ ){

			console.log(">>> values_menu__RESET_DATA_AND_VISUAL_APPEARANCE__in_searchallSOMEtags__options() ");

			// root_this_.tags_filering__CURRENT_mode___true_is_ALL__false_is_SOME  = root_this_.values_menu__click_ALL__in_searchALLsometags__options;
			root_this_.values_menu__click_SOME__in_searchallSOMEtags__options( root_this_ );

			root_this_.values_menu__set_visual_attributes_according_to_data__in_searchallSOMEtags__options( root_this_ );

		}		


		// update according to data
		root_this_.values_menu__set_visual_attributes_according_to_data__in_searchallSOMEtags__options = function( root_this_ ){

			console.log(">>> values_menu__set_visual_attributes_according_to_data__in_searchallSOMEtags__options() && root_this_.tags_filering__CURRENT_mode___true_is_ALL__false_is_SOME === |"+root_this_.tags_filering__CURRENT_mode___true_is_ALL__false_is_SOME+"| root_this_.basicValues_filering__CURRENT_mode___true_is_ALL__false_is_SOME === |"+root_this_.basicValues_filering__CURRENT_mode___true_is_ALL__false_is_SOME+"|" );

			console.log( root_this_ );

			// preselect
			this.SOME_tags_button = $("."+root_this_.graph_view__inner_areas__searchallSOMEtags ).removeClass( root_this_.graph_view__inner_areas__SEARCHallsometags__SELECTED_ITEM );
			this.ALL_tags_button = $("."+root_this_.graph_view__inner_areas__searchALLsometags ).removeClass( root_this_.graph_view__inner_areas__SEARCHallsometags__SELECTED_ITEM );


			if( root_this_.tags_filering__CURRENT_mode___true_is_ALL__false_is_SOME === root_this_.tags_filtering__mode__ALL ){

				this.ALL_tags_button.addClass( root_this_.graph_view__inner_areas__SEARCHallsometags__SELECTED_ITEM );

			}else if( root_this_.tags_filering__CURRENT_mode___true_is_ALL__false_is_SOME === root_this_.tags_filtering__mode__SOME ){

				this.SOME_tags_button.addClass( root_this_.graph_view__inner_areas__SEARCHallsometags__SELECTED_ITEM );

			}

		}		





		//////////////////////////////////
		//////////////////////////////////		setup meta object for OGP Grand Challenhes, Values and action plan numbers
		//////////////////////////////////



		root_this_.setup_col_information_object_for__values_challenges_and_tags__menu = function( root_this_ ){

			//console.log(">>>>> setup_col_information_object_for__menu__display_by() ");


			////////////


			// initialise the column description objects array
			root_this_.column_information_object_for__values_and_tags__menu_choices = new Array( root_this_.menu__display_by__number_of_col_info_objects );



			//////////  set the actual parameters



			//////   Display By [0] /////// 
			//
			root_this_.column_information_object_for__values_and_tags__menu_choices[ 0 ] = new this.column_description_obj(); 

			// what kind fo column type is it? 
			root_this_.column_information_object_for__values_and_tags__menu_choices[ 0 ].column_type = "basic_filter_column";

			// set which column, of the imported data, the data is in 
			root_this_.column_information_object_for__values_and_tags__menu_choices[ 0 ].which_column_num_to_fetch_data_for_for_this_column = "not applicable for this menu ;O"; 

			// set the column class name 
			root_this_.column_information_object_for__values_and_tags__menu_choices[ 0 ].column_class_name = "display_by_menu";

			// the id for the outer header div
			root_this_.column_information_object_for__values_and_tags__menu_choices[ 0 ].column_header_outer_containing_div_id_name = "display_by_menu";	

			// set the column title name
			root_this_.column_information_object_for__values_and_tags__menu_choices[ 0 ].column_title__text = "Values, Grand Challens, Action Plan Cycles and Tags";

			// set the column title class anme  
			root_this_.column_information_object_for__values_and_tags__menu_choices[ 0 ].column_title__class_name = "column_title column_header_text__val_no_1";

			// and the header choices… in order of appearance
			root_this_.column_information_object_for__values_and_tags__menu_choices[ 0 ].header__value_choice_categories__listed_in_order_of_appearance = [ 

									/*
											{ type : "heading_1",
											header_category_text : "Grand Challenge", 
											value_id_name_in_menu : "grand_challenge",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											this_refers_to_main_column_information_object_num_i : -99,
											this_refers_to_value_i_in_given_main_col_info_obj : 0 },

											{ type : "value_choice",
											header_category_text : "Public Integrity", 
											value_id_name_in_menu : "public_integrity",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											this_refers_to_main_column_information_object_num_i : 18,
											this_refers_to_value_i_in_given_main_col_info_obj : 0 }, 

											{ type : "value_choice",
											header_category_text : "Public Resources", 
											value_id_name_in_menu : "public_resources",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											this_refers_to_main_column_information_object_num_i : 19,
											this_refers_to_value_i_in_given_main_col_info_obj : 0 }, 

											{ type : "value_choice",
											header_category_text : "Public Services", 
											value_id_name_in_menu : "public_services",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											this_refers_to_main_column_information_object_num_i : 20,
											this_refers_to_value_i_in_given_main_col_info_obj : 0 }, 

											{ type : "value_choice",
											header_category_text : "Corporate Social Accountability", 
											value_id_name_in_menu : "corporate_social_accountability",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											this_refers_to_main_column_information_object_num_i : 21,
											this_refers_to_value_i_in_given_main_col_info_obj : 0 }, 


											{ type : "value_choice",
											header_category_text : "Safer Communities", 
											value_id_name_in_menu : "safer_communities",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											this_refers_to_main_column_information_object_num_i : 22,
											this_refers_to_value_i_in_given_main_col_info_obj : 0 }, 
									*/

											{ type : "heading_1",
											header_category_text : "OGP Value", 
											value_id_name_in_menu : "ogp_value_heading",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* which main column info object does this refer to? */
											this_refers_to_main_column_information_object_num_i : -99,
											this_refers_to_value_i_in_given_main_col_info_obj : 0 },

											{ type : "value_choice",
											header_category_text : "Access to Information", 
											value_id_name_in_menu : "access_to_information",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* which main column info object does this refer to? */
											this_refers_to_main_column_information_object_num_i : 9,
											this_refers_to_value_i_in_given_main_col_info_obj : 0 }, 

											{ type : "value_choice",
											header_category_text : "Civic Participation", 
											value_id_name_in_menu : "civic_participation",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* which main column info object does this refer to? */
											this_refers_to_main_column_information_object_num_i : 10,
											this_refers_to_value_i_in_given_main_col_info_obj : 0 }, 

											{ type : "value_choice",
											header_category_text : "Public Accountability", 
											value_id_name_in_menu : "public_accountability",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* which main column info object does this refer to? */
											this_refers_to_main_column_information_object_num_i : 11,
											this_refers_to_value_i_in_given_main_col_info_obj : 0 }, 

											{ type : "value_choice",
											header_category_text : "Technology and innovation for civic participation", 
											value_id_name_in_menu : "technology_and_innovation_for_civic_participation",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* which main column info object does this refer to? */
											this_refers_to_main_column_information_object_num_i : 12,
											this_refers_to_value_i_in_given_main_col_info_obj : 0 }, 
								/*															
											{ type : "heading_1",
											header_category_text : "Action Plan", 
											value_id_name_in_menu : "action_plan_heading",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											this_refers_to_main_column_information_object_num_i : 17,
											this_refers_to_value_i_in_given_main_col_info_obj : 0 }, 

											{ type : "value_choice",
											header_category_text : "First action plan", 
											value_id_name_in_menu : "first_action_plan",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											this_refers_to_main_column_information_object_num_i : 3,
											this_refers_to_value_i_in_given_main_col_info_obj : 0 }, 																		
											{ type : "value_choice",
											header_category_text : "Second action plan", 
											value_id_name_in_menu : "second_action_plan",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											this_refers_to_main_column_information_object_num_i : 3,
											this_refers_to_value_i_in_given_main_col_info_obj : 1 }, 

											{ type : "value_choice",
											header_category_text : "Third action plan", 
											value_id_name_in_menu : "third_action_plan",
											current_selection__selectedTrueFalse : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											this_refers_to_main_column_information_object_num_i : 3,
											this_refers_to_value_i_in_given_main_col_info_obj : 2 }, 	
								*/
													];



			// compressed
			//////// root_this_.column_information_object_for__values_and_tags__menu_choices[ 0 ].whole_column_compressed_width__in_px_x = 50;

			//// the mouseover text
			root_this_.column_information_object_for__values_and_tags__menu_choices[ 0 ].mouse_over_text_reference  = "Indicates which Action Plan the commitments belong too. The latest Action Plan will be tagged by the OGP Support Unit, but are not yet assessed by the IRM researcher.";

		}










		//////////////////////////////////
		//////////////////////////////////		setup the values, challenges, ap menu html bits - BUT NOT TAGS (that's in the nect function )
		//////////////////////////////////		for the values, challenges, ap + tags menu
		//////////////////////////////////



		root_this_.setup_html_for_values_challenges_n_action_plans__for_the___values_challenges_and_tags__menu = function( root_this_ ){

			//console.log(">>>>> setup_html_for_values_challenges_n_action_plans__for_the___values_challenges_and_tags__menu() ");

			/// select the relevant column
			this.relev_menu_col = $("."+root_this_.graph_view__inner_areas__menu_options_area__Values__drop_down__single_column ).eq(0);


			for( this.curr_values_menu_item = 0 ; this.curr_values_menu_item < root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_values_menu_item++ ){


				// default class 
				this.relevant_item_class = root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item ;


				if( root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[this.curr_values_menu_item].type === "heading_1"){

					// add a heading class
					this.relevant_item_class = root_this_.graph_view__inner_areas__menu_options_area__menu_options__header_item;

				} // else, well, it's just a regular selectable item


				this.relev_menu_col.append("<div class='"+this.relevant_item_class+"'>"+root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[this.curr_values_menu_item].header_category_text+"</div>");

			}

		}




		//////////////////////////////
		//////////////////////////////		as above but for the tags in col #2-#4

		root_this_.setup_html_for_TAGS__for_the__values_challenges_and_tags__menu = function( root_this_ ){

			//console.log(">>>>>>  setup_html_for_TAGS__for_the__values_challenges_and_tags__menu() ");


			//// loop and insert

			// keep track of which selectable dom item this is
			this.curr_selectable_item_i = 0;

			for( this.curr_tag_metadata_obj_i = 0; this.curr_tag_metadata_obj_i < root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_tag_metadata_obj_i++  ){

				/// set things up differently according to whether it's a header or selectable value (tag )

				// the default value - selectable item
				this.curr_relevant_class = root_this_.graph_view__inner_areas__menu_options_area__menu_options__header_item;

				// or is it a selectable item? 
				if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_metadata_obj_i ].type === "value_choice" ){

					// make it a heading class instead
					this.curr_relevant_class = root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item;
				}	

				//// check which column it goes into
				// PLEASE NOTE THE '+1' - as the first column num for tags is number 2
				this.relevant_col_num_for_curr_tag = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_metadata_obj_i ].in_column_num ;

				$( "#"+root_this_.graph_view__inner_areas__menu_options_area__Values__outer_list_of_menu_options_outer+" ."+root_this_.graph_view__inner_areas__menu_options_area__Values__drop_down__single_column__FOR_TAGS ).eq( this.relevant_col_num_for_curr_tag ).append("<div class='"+this.curr_relevant_class+"'>"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_metadata_obj_i ].header_category_text+"</div>");

			}

		}




		/////////////////
		/////////////////  values menu helper function:
		/////////////////		- add SELECT ALL and SELECT NONE
		/////////////////		
		/////////////////


		root_this_.values_menu__populate_with__select_none_and_select_all_button = function( root_this_ ){

			//console.log(">>>> regions_menu__populate_with__select_all__and__select_none() ");


			/// select the menu
			this.values_menu__drop_down_outer = $("#"+root_this_.graph_view__inner_areas__menu_options_area__Values__outer_list_of_menu_options_outer );

			////// add the select none button
			this.values_menu__drop_down_outer.append("<div id='"+root_this_.graph_view__inner_areas__select_none__values_menu+"'>Select none</div>");

			////// add the select none button
			this.values_menu__drop_down_outer.append("<div id='"+root_this_.graph_view__inner_areas__select_all__values_menu+"'>Select all</div>");

			/*
			////// add the select all button
			this.values_menu__drop_down_outer.append("<div id='"+root_this_.graph_view__inner_areas__select_all+"'>Select all</div>");
			*/

		}



		/////////////////
		/////////////////  values menu helper function:
		/////////////////		- search ALL / SOME options
		/////////////////		
		/////////////////


		root_this_.values_menu__populate_with__search_SOME_ALL_tags__texts_n_buttons = function( root_this_ ){

			//console.log(">>>> regions_menu__populate_with__select_all__and__select_none() ");


			/// select the menu
			this.values_menu__drop_down_outer = $("#"+root_this_.graph_view__inner_areas__menu_options_area__Values__outer_list_of_menu_options_outer );

			////// add 'search' test
			this.values_menu__drop_down_outer.append("<div class='"+root_this_.graph_view__inner_areas__SEARCHallsometags+"'>Match </div>");

			////// add the ALL button
			this.values_menu__drop_down_outer.append("<div class='"+root_this_.graph_view__inner_areas__searchALLsometags+"'>all</div>");

			////// add the SOME button
			this.values_menu__drop_down_outer.append("<div class='"+root_this_.graph_view__inner_areas__searchallSOMEtags+"'>any</div>");

			////// add the tags text
			this.values_menu__drop_down_outer.append("<div class='"+root_this_.graph_view__inner_areas__searchallsomeTAGS+"'>selected tags</div>");

		}



		//////////////////////////////////
		//////////////////////////////////		values menu : bind interactions for values, gc's
		//////////////////////////////////			- BUT NOT THE TAGS!



		root_this_.bind_data_and_interactions_for__values_challenges_and_tags__menu = function( root_this_ ){

			//console.log(">>>>> bind_data_and_interactions_for__values_challenges_and_tags__menu() ");


			////////  show / hide the menu 

			$("#"+root_this_.graph_view__inner_areas__menu_options_area__Values__outer_top_option_static ).click( function(){

					$( "#"+root_this_.graph_view__inner_areas__menu_options_area__Values__outer_list_of_menu_options_outer ).toggle();

					// and setup the background mouse-catching area
					root_this_.graphing_area__open_menu_operations__eg_set_up_mouse_catching_area( root_this_, root_this_.menues_listing__txt__values_menu );					
			});



			////// select none button

			$("#"+root_this_.graph_view__inner_areas__select_none__values_menu).click( function(){

				//console.log("click select none!");

				///  set the tags values to false and update their display
				root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_false__and__update_display( root_this_ );

			});


			////// select all button

			$("#"+root_this_.graph_view__inner_areas__select_all__values_menu).click( function(){

				//console.log("click select none!");

				///  set the tags values to false and update their display
				root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_TRUE__and__update_display( root_this_ );

			});



			////////////// the  | search ALL/SOME tags |  test + buttons


			///// searchALLsometags

			$("."+root_this_.graph_view__inner_areas__searchALLsometags ).click( function(){

				root_this_.values_menu__click_ALL__in_searchALLsometags__options( root_this_ );


				/// and update the commitments filtering please
				root_this_.start_filtering_and_commitments_listing_process__given_user_interaction__graph_edition( root_this_, true, true, true );


				/////////////////
				////////// update the visual meta-data please ;)

				/// set up and update the bars moueovers
				root_this_.graph_view__bind_interactions_to_bars_within_bars( root_this_ );

				///// resort and reposition if doing numeric sorting
				root_this_.sorting___sort_and_calc_relev_bar_position_and_move_bars__if_high_low_sorting_setting_active( root_this_ );	

			});


			//////  searchallSOMEtags

			$("."+root_this_.graph_view__inner_areas__searchallSOMEtags ).click( function(){

				root_this_.values_menu__click_SOME__in_searchallSOMEtags__options( root_this_ );


				/////////////////
				////////// update the visual meta-data please ;)

				/// and update the commitments filtering please
				root_this_.start_filtering_and_commitments_listing_process__given_user_interaction__graph_edition( root_this_, true, true, true );

				/// set up and update the bars moueovers
				root_this_.graph_view__bind_interactions_to_bars_within_bars( root_this_ );

				///// resort and reposition if doing numeric sorting
				root_this_.sorting___sort_and_calc_relev_bar_position_and_move_bars__if_high_low_sorting_setting_active( root_this_ );	

			});


			////////// set up values column

			/// select the relevant column
			this.relevant_options_in_first_column = $(" ."+root_this_.graph_view__inner_areas__menu_options_area__Values__drop_down__single_column ).eq(0).find( " ."+root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item );

			// for keeping track of which selectable item is which
			//	- vs. the indexing of the list we're going through, 
			//	which has *both* headings and selectable items
			this.curr_selectable_item_i = 0;			

			//
			for( this.curr_values_menu_item = 0 ; this.curr_values_menu_item < root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_values_menu_item++ ){



				if( root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[this.curr_values_menu_item].type === "value_choice"){

					///// do various thigns

					// select
					this.curr_item = this.relevant_options_in_first_column.eq( this.curr_selectable_item_i );

					// bind data - which meta col info object index is this item??
					this.curr_item.data( root_this_.data_key_for_values_menu__first_col_value_choices_indicies, this.curr_values_menu_item );

					// bind data - which selectable menu item is this? 
					this.curr_item.data( root_this_.data_key_for_values_menu__which_index_of_selectable_item_i, this.curr_selectable_item_i );


					// bind interactions
					this.curr_item.click( function(){

						this.curr_item_data = $(this).data( root_this_.data_key_for_values_menu__first_col_value_choices_indicies );

						//console.log(" just clicked an data item in the display by menu |"+this.curr_item_data+"|" );

						/// are we in the alternative selection method? and is everything selectedd?
						// - if so, then the first click on anything only selects that tiem
						if( root_this_.valuesGCsAPsTags_menu__selection_mode___traditional_or_new === root_this_.valuesGCsAPsTags_menu__selection_modes_as_text__new && root_this_.valuesGCsAPsTags_menu__selection_mode___in_initial_mode === true  ){

							// deselect all
							root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_false__BUT_NO_DISPLAY_UPDATE( root_this_ );

							// remember that we're exiting that mode now… 
							////// root_this_.valuesGCsAPsTags_menu__selection_mode___in_initial_mode === false;
							root_this_.valuesGCsAPsTags_menu__selection_mode___in_initial_mode = false ;
						}



						root_this_.set_main_col_info_obj_data_according_to_valuesMenu_user_interaction( root_this_, this.curr_item_data );

						root_this_.set_visual_appearance_of_SINGLE_value_in_values_gc_and_tags_menu__according_to_data( root_this_, this.curr_item_data );

						//// update the valeus+tags filtering
						root_this_.start_filtering_and_possibly_graph_redraw_when_clicking_values_and_tags_menu( root_this_, true );



						/////////////////
						////////// update the visual meta-data please ;)

						//// update the legend please
						root_this_.update_legend_display_given_current_view( root_this_ );

						/// set up and update the bars moueovers
						root_this_.graph_view__bind_interactions_to_bars_within_bars( root_this_ );



						///// resort and reposition if doing numeric sorting
						root_this_.sorting___sort_and_calc_relev_bar_position_and_move_bars__if_high_low_sorting_setting_active( root_this_ );						

					});

					////////////////
					//// AT THE END , advance the count(er) of found value choices
					this.curr_selectable_item_i++ ;


				} // else, well, it's just a regular selectable item

			}

		}








		//////////////////////////////		bind interactions and data!
		//////////////////////////////		as above but for the tags in col #2-#4
		//////////////////////////////

		root_this_.bind_interactions_and_data_for_TAGS__for_the__values_challenges_and_tags__menu = function( root_this_ ){

			//console.log(">>>>>>  bind_interactions_and_data_for_TAGS__for_the__values_challenges_and_tags__menu() ");



			//// select the relevant items
			this.selectable_tags_items = $("."+root_this_.graph_view__inner_areas__menu_options_area__Values__drop_down__single_column__FOR_TAGS+" ."+root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item );


			//// loop and bind

			// keep track of which selectable dom item this is
			this.curr_selectable_item_i = 0;

			for( this.curr_tag_metadata_obj_i = 0; this.curr_tag_metadata_obj_i < root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_tag_metadata_obj_i++ ){

				/// set things up differently according to whether it's a header or selectable value (tag )

				// the default value - selectable item
				this.curr_relevant_class = root_this_.graph_view__inner_areas__menu_options_area__menu_options__header_item;

				// or is it a selectable item? 
				if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_metadata_obj_i ].type === "value_choice" ){

					// make it a heading class instead
					this.curr_relevant_class = root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item;

					// select
					this.curr_selectable_dom_item = this.selectable_tags_items.eq( this.curr_selectable_item_i );

					// bind data
					this.curr_selectable_dom_item.data( root_this_.data_key_for_values_menu__first_col_value_choices_indicies, this.curr_tag_metadata_obj_i );

					// bind interactions
					this.curr_selectable_dom_item.click( function(){

						this.curr_tag_metadata_obj_i = $( this ).data( root_this_.data_key_for_values_menu__first_col_value_choices_indicies );

						//console.log("click! on tag with meta data object i "+this.curr_tag_metadata_obj_i  );


						/// are we in the alternative selection method? and is everything selectedd?
						// - if so, then the first click on anything only selects that tiem
						if( root_this_.valuesGCsAPsTags_menu__selection_mode___traditional_or_new === root_this_.valuesGCsAPsTags_menu__selection_modes_as_text__new && root_this_.valuesGCsAPsTags_menu__selection_mode___in_initial_mode === true  ){

							// deselect all
							root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_false__BUT_NO_DISPLAY_UPDATE( root_this_ );

							// remember that we're exiting that mode now… 
							////// root_this_.valuesGCsAPsTags_menu__selection_mode___in_initial_mode === false;
							root_this_.valuesGCsAPsTags_menu__selection_mode___in_initial_mode = false ;
						}


						// modify the data
						root_this_.set_main_col_info_obj_data_according_to_valuesMenu_TAG_ITEM__user_interaction( root_this_, this.curr_tag_metadata_obj_i );

						// update the visual display of this menu item
						root_this_.set_visual_appearance_of_a_SINGLE_ITEM_in_values_menu__according_to_data( root_this_, this.curr_tag_metadata_obj_i );


						//// update the valeus+tags filtering
						root_this_.start_filtering_and_possibly_graph_redraw_when_clicking_values_and_tags_menu( root_this_, true );



						/////////////////
						////////// update the visual meta-data please ;)

						//// update the legend please
						root_this_.update_legend_display_given_current_view( root_this_ );

						/// set up and update the bars moueovers
						root_this_.graph_view__bind_interactions_to_bars_within_bars( root_this_ );



						///// resort and reposition if doing numeric sorting
						root_this_.sorting___sort_and_calc_relev_bar_position_and_move_bars__if_high_low_sorting_setting_active( root_this_ );


					});


					///////////// and, at the end
					///// advance count of found selectable items
					// ( useful for selecting them from the dom :)
					this.curr_selectable_item_i++ ;

				}	

			}
		}







		//////////////////////////////////
		//////////////////////////////////	set data according to interaction, on tags
		//////////////////////////////////


		root_this_.set_main_col_info_obj_data_according_to_valuesMenu_TAG_ITEM__user_interaction = function( root_this_, item_clicked_index ){

			//console.log(">>>> set_main_col_info_obj_data_according_to_valuesMenu_TAG_ITEM__user_interaction - item #"+item_clicked_index );


			//console.log(" the current value is "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ item_clicked_index ].current_selection__selectedTrueFalse );

			/// inverse the value 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ item_clicked_index ].current_selection__selectedTrueFalse = !root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ item_clicked_index ].current_selection__selectedTrueFalse;

			/// reprint
			//console.log(" the current value is "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ item_clicked_index ].current_selection__selectedTrueFalse );

		}




		////// and the same as above, but for all tag metadata values

		root_this_.set_ALL_TAGS_in_values_gc_and_tags_menu__according_to_desired_value = function( root_this_, desired_value ){

			//console.log(">>>> set_ALL_TAGS_in_values_gc_and_tags_menu__according_to_desired_value - item #" );


			for( this.curr_tag_metadata_obj_i = 0; this.curr_tag_metadata_obj_i  < root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_tag_metadata_obj_i++ ){

				//console.log(" the current value is "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_metadata_obj_i ].current_selection__selectedTrueFalse );

				/// set the current value according to the desired value
				root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_metadata_obj_i ].current_selection__selectedTrueFalse = desired_value;

				/// reprint
				//console.log(" the current value is "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_metadata_obj_i ].current_selection__selectedTrueFalse );

			}

		}



		/////////////////////////////////
		/////////////////////////////////		values menu - set visual appearance of A SINGLE ITEM according to the data
		/////////////////////////////////


		root_this_.set_visual_appearance_of_a_SINGLE_ITEM_in_values_menu__according_to_data = function( root_this_, relevant_metadata_item_i ){

			//console.log(">>>> set_visual_appearance_of_a_SINGLE_ITEM_in_values_menu__according_to_data() of item #"+relevant_metadata_item_i );

			//// select the relevant items
			this.selectable_tags_items = $("."+root_this_.graph_view__inner_areas__menu_options_area__Values__drop_down__single_column__FOR_TAGS+" ."+root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item );


			//// loop through the metadata and update the dom

			// keep track of which selectable dom item this is
			this.curr_selectable_item_i = 0;

			for( this.curr_tag_metadata_obj_i = 0; this.curr_tag_metadata_obj_i < root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_tag_metadata_obj_i++ ){


				// or is it a selectable item? 
				// AND CHECK (the bits after the &&) if it's the 
				//		current relevant item
				if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_metadata_obj_i ].type === "value_choice"  ){

					/// check if the current metadata obj is the same
					//		number as the one clicked
					//	- and that this be the one we should change

					if( this.curr_tag_metadata_obj_i === relevant_metadata_item_i ){

						/// select the itme
						this.curr_selectable_dom_item = this.selectable_tags_items.eq( this.curr_selectable_item_i );

						//console.log("setting a visual change on selectable item # & dom item #"+this.curr_selectable_item_i);

						/// set different styles depending on whether it's selected or not
						if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_metadata_obj_i ].current_selection__selectedTrueFalse === true ){

							this.curr_selectable_dom_item.addClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );

						}else{

							this.curr_selectable_dom_item.removeClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );

						}

					}

					///////////// and, at the end
					///// advance count of found selectable items
					// ( useful for selecting them from the dom :)
					this.curr_selectable_item_i++ ;

				}	

			}

		}




		/////////////////////////////////
		/////////////////////////////////		values menu - set visual appearance of all items according to the data
		/////////////////////////////////


		root_this_.set_visual_appearance_of_ALL_TAGS_in_values_menu__according_to_data = function( root_this_ ){


			//// select the relevant items
			this.selectable_tags_items = $("."+root_this_.graph_view__inner_areas__menu_options_area__Values__drop_down__single_column__FOR_TAGS+" ."+root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item );


			//// loop through the metadata and update the dom

			// keep track of which selectable dom item this is
			this.curr_selectable_item_i = 0;

			for( this.curr_tag_metadata_obj_i = 0; this.curr_tag_metadata_obj_i < root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_tag_metadata_obj_i++ ){

				/// set things up differently according to whether it's a header or selectable value (tag )

				/// select the itme
				this.curr_selectable_dom_item = this.selectable_tags_items.eq( this.curr_selectable_item_i );


				// or is it a selectable item? 
				if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_metadata_obj_i ].type === "value_choice" ){

					/// set different styles depending on whether it's selected or not
					if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_metadata_obj_i ].current_selection__selectedTrueFalse === true ){

						this.curr_selectable_dom_item.addClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );

					}else{

						this.curr_selectable_dom_item.removeClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );

					}

					///////////// and, at the end
					///// advance count of found selectable items
					// ( useful for selecting them from the dom :)
					this.curr_selectable_item_i++ ;

				}	

			}

		}



		//////////////////////////////////
		//////////////////////////////////		values menu : set data according to interaction
		//////////////////////////////////


		root_this_.set_main_col_info_obj_data_according_to_valuesMenu_user_interaction = function( root_this_, item_clicked_index ){


			//console.log( ">>>>> set_main_col_info_obj_data_according_to_valuesMenu_user_interaction - item #"+item_clicked_index );


			////////////

			this.curr_relv_col_info_obj_item_index = root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[ item_clicked_index ].this_refers_to_main_column_information_object_num_i ;


			this.curr_relv_col_info_obj_item__relev_value_index = root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[ item_clicked_index ].this_refers_to_value_i_in_given_main_col_info_obj ;


			//console.log("changing the value of menu item #"+item_clicked_index+", which is "+root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[ item_clicked_index ].header_category_text+" / "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_relv_col_info_obj_item_index ].column_title__text+" / and value "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_relv_col_info_obj_item_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_relv_col_info_obj_item__relev_value_index ].header_category_text+" / currently selected? -> "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_relv_col_info_obj_item_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_relv_col_info_obj_item__relev_value_index ].current_selection__selectedTrueFalse+" <--" );

			// inverse selection please
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_relv_col_info_obj_item_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_relv_col_info_obj_item__relev_value_index ].current_selection__selectedTrueFalse = !root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_relv_col_info_obj_item_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_relv_col_info_obj_item__relev_value_index ].current_selection__selectedTrueFalse;

			//console.log(" - new value === "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_relv_col_info_obj_item_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_relv_col_info_obj_item__relev_value_index ].current_selection__selectedTrueFalse );

		}





		//////////////////////////////////
		//////////////////////////////////		values menu : the menu items according to the data
		//////////////////////////////////


		root_this_.set_visual_appearance_of_SINGLE_value_in_values_gc_and_tags_menu__according_to_data = function( root_this_, item_clicked_index ){

			//
			//console.log(">>>>>>>  set_visual_appearance_of_SINGLE_value_in_values_gc_and_tags_menu__according_to_data() - clicked meta data obj item #"+item_clicked_index );



			/// loop and go through the col info objects

			// set up a counter for the relevant selectable value dom element
			this.curr_selectable_values_menu_item = 0;

			for( this.curr_menu_info_obj_i = 0 ; this.curr_menu_info_obj_i < root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_menu_info_obj_i++ ){

				//console.log("-- checking item num #"+this.curr_menu_info_obj_i+" in value meta data obj, which has a type of "+root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_menu_info_obj_i ].type+" and name of |"+root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_menu_info_obj_i ].header_category_text+"|" );

				//
				if( root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_menu_info_obj_i ].type === "value_choice" ){

					if( item_clicked_index === this.curr_menu_info_obj_i  ){

						/// check what value it is and set the value appropriately

						//////////  find the relev menu items col info obj index
						this.curr_relv_col_info_obj_item_index = root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_menu_info_obj_i ].this_refers_to_main_column_information_object_num_i ;

						//////////  find the relev menu items col info obj index >> value index
						this.curr_relv_col_info_obj_item__relev_value_index = root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_menu_info_obj_i ].this_refers_to_value_i_in_given_main_col_info_obj ;

						/// and the value 
						this.current_value = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_relv_col_info_obj_item_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_relv_col_info_obj_item__relev_value_index ].current_selection__selectedTrueFalse; 

						//console.log(" the current item value is "+this.current_value+" | on menu item #"+this.curr_menu_info_obj_i+" | menu item #"+this.curr_selectable_values_menu_item );

						/// select the relevant dom item and do something to it
						this.curr_selectable_dom_item = $( "#"+root_this_.graph_view__inner_areas__menu_options_area__Values__outer_list_of_menu_options_outer+" ."+root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item ).eq( this.curr_selectable_values_menu_item );


						/// set the dom markup
						if( this.current_value === true ){

							this.curr_selectable_dom_item.addClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );

						}else if( this.current_value === false ){

							this.curr_selectable_dom_item.removeClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );
						}

					}

					/// and then advance the counter
					this.curr_selectable_values_menu_item++ ;
				}

			}

		}





		//////////////////////////////////
		//////////////////////////////////		values menu : as above, but for all values
		//////////////////////////////////


		root_this_.set_visual_appearance_of_ALL_values_in_values_gc_and_tags_menu__according_to_data = function( root_this_ ){

			//
			//console.log(">>>>>>>  set_visual_appearance_of_ALL_values_in_values_gc_and_tags_menu__according_to_data() - clicked meta data obj item #" );



			/// loop and go through the col info objects

			// set up a counter for the relevant selectable value dom element
			this.curr_selectable_values_menu_item = 0;

			for( this.curr_menu_info_obj_i = 0 ; this.curr_menu_info_obj_i < root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_menu_info_obj_i++ ){

				//console.log("-- checking item num #"+this.curr_menu_info_obj_i+" in value meta data obj, which has a type of "+root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_menu_info_obj_i ].type+" and name of |"+root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_menu_info_obj_i ].header_category_text+"|" );

				//
				if( root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_menu_info_obj_i ].type === "value_choice" ){

					////  if( item_clicked_index === this.curr_menu_info_obj_i  ){

					/// check what value it is and set the value appropriately

					//////////  find the relev menu items col info obj index
					this.curr_relv_col_info_obj_item_index = root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_menu_info_obj_i ].this_refers_to_main_column_information_object_num_i ;

					//////////  find the relev menu items col info obj index >> value index
					this.curr_relv_col_info_obj_item__relev_value_index = root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_menu_info_obj_i ].this_refers_to_value_i_in_given_main_col_info_obj ;

					/// and the value 
					this.current_value = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_relv_col_info_obj_item_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_relv_col_info_obj_item__relev_value_index ].current_selection__selectedTrueFalse; 

					//console.log(" the current item value is "+this.current_value+" | on menu item #"+this.curr_menu_info_obj_i+" | menu item #"+this.curr_selectable_values_menu_item );


					//// debug 
					////////   $(" ."+root_this_.graph_view__inner_areas__menu_options_area__Values__drop_down__single_column ).css("border", "1px dashed red");
					
					/// select the relevant dom item and do something to it
					this.curr_selectable_dom_item = $(" ."+root_this_.graph_view__inner_areas__menu_options_area__Values__drop_down__single_column ).find( " ."+root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item ).eq( this.curr_selectable_values_menu_item );

					// TEST
					//////////////this.curr_selectable_dom_item.css('border', '1px solid blue');

					/// set the dom markup
					if( this.current_value === true ){

						this.curr_selectable_dom_item.addClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );

					}else if( this.current_value === false ){

						this.curr_selectable_dom_item.removeClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );
					}

					/////}

					/// and then advance the counter
					this.curr_selectable_values_menu_item++ ;
				}

			}

		}




		//////////////////////////////////
		//////////////////////////////////		values menu : set all the original meta data values 
		//////////////////////////////////			of the values menu to a particular value
		//////////////////////////////////


		root_this_.values_menu__set_all_meta_data_values_of_the_values_menu__to_this_value = function( root_this_, set_orignal_values_to_this_value ){

			//
			//console.log(">>>>>>>  values_menu__set_all_meta_data_values_of_the_values_menu__to_this_value() - value being set === "+set_orignal_values_to_this_value );


			//////
			for( this.curr_menu_info_obj_i = 0 ; this.curr_menu_info_obj_i < root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_menu_info_obj_i++ ){

				//console.log("-- checking item num #"+this.curr_menu_info_obj_i+" in value meta data obj, which has a type of "+root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_menu_info_obj_i ].type+" and name of |"+root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_menu_info_obj_i ].header_category_text+"|" );

				//
				if( root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_menu_info_obj_i ].type === "value_choice" ){

					////  if( item_clicked_index === this.curr_menu_info_obj_i  ){

					/// check what value it is and set the value appropriately

					//////////  find the relev menu items col info obj index
					this.curr_relv_col_info_obj_item_index = root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_menu_info_obj_i ].this_refers_to_main_column_information_object_num_i ;

					//////////  find the relev menu items col info obj index >> value index
					this.curr_relv_col_info_obj_item__relev_value_index = root_this_.column_information_object_for__values_and_tags__menu_choices[ root_this_.main_col_info_objects__index_of_values_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_menu_info_obj_i ].this_refers_to_value_i_in_given_main_col_info_obj ;

					/// and the value 
					this.current_value = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_relv_col_info_obj_item_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_relv_col_info_obj_item__relev_value_index ].current_selection__selectedTrueFalse; 


					//console.log(" the current value is [before change] |"+this.current_value+"|");


					/// change it
					/// and the value 
					root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_relv_col_info_obj_item_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_relv_col_info_obj_item__relev_value_index ].current_selection__selectedTrueFalse = set_orignal_values_to_this_value;


					/// refresh what it is
					//console.log(" the changed value is now |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_relv_col_info_obj_item_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_relv_col_info_obj_item__relev_value_index ].current_selection__selectedTrueFalse+"|");

				}

			}

		}







		//////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////
		//////////////////////////////////
		//////////////////////////////////		setup Regions menu + interactions
		//////////////////////////////////

		/* ... how? 
		
			- show/hide the menu
			- loop through the relevant col information object values
			- make div
			- assign data
			- bind interactions

		*/

		///// general setup for the regions menu


		root_this_.setup_regions_menu__general_setup = function( root_this_ ){

			//console.log(">>>>>>> setup_regions_menu__general_setup() ");

			/// set up the meta-data
			// ( only do this is it hasn't been set up before )
			if( root_this_.has_this_object_been_set_up_visuall_before === false ){			
				root_this_.setup_col_information_object_for__menu__regions_menu( root_this_ );
			}

			// 		make the select all/none buttons
			root_this_.regions_menu__populate_with__select_all__and__select_none( root_this_ );

			////    make the custom ergions html elements
			root_this_.regions_menu__populate_with_CONTINENTS_and_custom_regions( root_this_ );

			////    make the countries html lements
			root_this_.regions_menu__populate_with_countries( root_this_ );

			////   bind data and interactions
			root_this_.bind_interactions_to_the_regions_menu( root_this_ );


			////   set all menu items according to the data values			
			root_this_.set_ALL_country_menu_items_according_to_the_data( root_this_ );

			////   and then the same for the display area objects
			root_this_.regions__set_display_area_obj_visibility_flags_according_to_country_col_info_obj_data( root_this_ );

			// c'cest tout!
		}






		//////////////////////////////////
		//////////////////////////////////		setup menu / col information objects for Country Menus
		//////////////////////////////////



		root_this_.setup_col_information_object_for__menu__regions_menu = function( root_this_ ){

			//console.log(">>>>> setup_col_information_object_for__menu__regions_menu() ");


			////////////


			// initialise the column description objects array
			root_this_.column_information_object_for__regions_menu__regionsMetaOptions = new Array( root_this_.menu__display_by__number_of_col_info_objects );



			//////   Display By [0] /////// 
			//
			root_this_.column_information_object_for__regions_menu__regionsMetaOptions[ 0 ] = new this.column_description_obj(); 

			// what kind fo column type is it? 
			root_this_.column_information_object_for__regions_menu__regionsMetaOptions[ 0 ].column_type = "basic_filter_column";

			// set which column, of the imported data, the data is in 
			root_this_.column_information_object_for__regions_menu__regionsMetaOptions[ 0 ].which_column_num_to_fetch_data_for_for_this_column = "not applicable for this menu ;O"; 

			// set the column class name 
			root_this_.column_information_object_for__regions_menu__regionsMetaOptions[ 0 ].column_class_name = "display_by_menu";

			// the id for the outer header div
			root_this_.column_information_object_for__regions_menu__regionsMetaOptions[ 0 ].column_header_outer_containing_div_id_name = "display_by_menu";	

			// set the column title name
			root_this_.column_information_object_for__regions_menu__regionsMetaOptions[ 0 ].column_title__text = "Regions menu continents and regions options";

			// set the column title class anme  
			root_this_.column_information_object_for__regions_menu__regionsMetaOptions[ 0 ].column_title__class_name = "regions_menu__continents_and_regions_choices";

			// and the header choices… in order of appearance
			root_this_.column_information_object_for__regions_menu__regionsMetaOptions[ 0 ].header__value_choice_categories__listed_in_order_of_appearance = [ 

										/* the simple version --

											{ type : "value_choice",
											header_category_text : "Africa", 
											value_id_name_in_menu : "region_Africa",
											current_selection__selectedTrueFalse : false,
											refers_to_the_following_countries : [ "ZA", "TZ", "KE" ] ,

											{ type : "value_choice",
											header_category_text : "Asia", 
											value_id_name_in_menu : "region_Asia",
											current_selection__selectedTrueFalse : false,
											refers_to_the_following_countries : [ "ID", "PH", "KR", "AZ", "AM", "IL", "JO"  ] ,

											{ type : "value_choice",
											header_category_text : "Americas", 
											value_id_name_in_menu : "region_Americas",
											current_selection__selectedTrueFalse : false,
											refers_to_the_following_countries : [ "BR", "CL", "CO", "DO", "SV", "GT", "HN", "MX", "PY", "PE", "US", "CA", "UY"  ] ,

											{ type : "value_choice",
											header_category_text : "Europe", 
											value_id_name_in_menu : "region_Europe",
											current_selection__selectedTrueFalse : false,
											refers_to_the_following_countries : [ "AL", "HR", "CZ", "DK", "EE", "GE", "GR", "IT", "LV", "MK", "MD", "ME", "RO", "SK", "ES", "SE", "GB", "UA"  ] ,

											{ type : "value_choice",
											header_category_text : "OECD Countries", 
											value_id_name_in_menu : "region_OECD_countries",
											current_selection__selectedTrueFalse : false,
											refers_to_the_following_countries : [ "??" ] 											

											];

										*/

										// the fuller version 

											{ type : "value_choice",
											header_category_text : "Africa", 
											value_id_name_in_menu : "region_Africa",
											current_selection__selectedTrueFalse : false,
											refers_to_the_following_countries : [ "DZ", "AO", "BJ", "BW", "BF", "BI", "CM", "CV", "CF", "TD", "KM", "CG", "CD", "CI", "DJ", "EG", "GQ", "ER", "ET", "GA", "GM", "GH", "GN", "GW", "KE", "LS", "LR", "LY", "MG", "MW", "ML", "MR", "MU", "MA", "MZ", "NA", "NE", "RE", "RW", "ST", "SN", "SC", "SL", "SO", "ZA", "SD", "SZ", "TZ", "TO", "TN", "UG", "ZN", "ZW" ] },

											{ type : "value_choice",
											header_category_text : "Asia", 
											value_id_name_in_menu : "region_Asia",
											current_selection__selectedTrueFalse : false,
											refers_to_the_following_countries : [ "AF", "AS", "AM", "AU", "AZ", "BH", "BD", "BT", "BN", "KH", "CN", "CK", "CY", "FJ", "GE", "GU", "IN", "ID", "IR", "IQ", "IL", "JP", "JO", "KZ", "KI", "KP", "KR", "KW", "KG", "LA", "LB","MY", "MV", "MH", "FM", "MN", "MMM", "NR", "NP", "NZ", "NU", "OM", "PK", "PW", "PG", "PH", "QA", "WS", "SA", "SG", "SB", "LK", "SY", "TJ", "TH", "TL", "TO", "TR", "TM", "TV", "UM", "UZ", "VU", "VN", "YE", "PS" ] },

											{ type : "value_choice",
											header_category_text : "Americas", 
											value_id_name_in_menu : "region_Americas",
											current_selection__selectedTrueFalse : false,
											refers_to_the_following_countries : [ "AI", "AG", "AR", "AW", "BM", "BB", "BZ", "BM", "BO", "BR", "CA", "KY", "CL", "CO", "CR", "CU", "DM", "DO", "EC", "SV", "GF", "GL", "GD", "GT", "GY", "HT", "HN", "JM", "MQ", "MX", "AN", "NI", "PA", "PY", "PE", "PR", "KN", "LC", "VC", "SR", "TT", "US", "UY", "VE", "VG", "VI"  ] },

											{ type : "value_choice",
											header_category_text : "Europe", 
											value_id_name_in_menu : "region_Europe",
											current_selection__selectedTrueFalse : false,
											refers_to_the_following_countries : [ "AL", "AT", "BY", "BE", "BA", "BG", "HR", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IS", "IE", "IT", "XK", "LV", "LT", "LU", "MK", "MT", "MD", "MC", "ME", "NL", "NO", "PL", "PT", "RO", "RU", "SM", "RS", "SK", "SI", "ES", "SE", "CH", "UA", "GB" ] },

											{ type : "value_choice",
											header_category_text : "OECD Countries", 
											value_id_name_in_menu : "region_OECD_countries",
											current_selection__selectedTrueFalse : false,
											refers_to_the_following_countries : [ "AU", "AT", "BE", "CA", "CL", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IS", "IL", "IR", "IT", "JP", "KR", "LU", "MX", "NL", "NZ", "NO", "PL", "PT", "SK", "SI", "ES", "SE", "CH", "TR", "GB", "US" ] 	}										
											];

		}








		/////////////////
		/////////////////  helper function: Country Menus
		/////////////////		- add the CONTINENTS meta-meta options to the regions menu
		/////////////////


		root_this_.regions_menu__populate_with_CONTINENTS_and_custom_regions = function( root_this_ ){

			//console.log(">>>> regions_menu__populate_with_CONTINENTS_and_custom_regions() ");

			/// select the columns the countries go into
			this.region_menu_columns = $("."+root_this_.graph_view__inner_areas__menu_options_area__regions__drop_down__single_column);


			// just put it into the first column!
			this.relevant_col_num_for_curr_meta_option_item = 0;

			//// inser the regions header! 
			this.region_menu_columns.eq( this.relevant_col_num_for_curr_meta_option_item ).append( "<div class='"+root_this_.graph_view__inner_areas__menu_options_area__menu_options__header_item+"'>Region</div>" );


			//// loop through the country column information object
			//		and fill the menu
			//		... in the right column and all 
			for( this.curr_meta_option_i = 0; this.curr_meta_option_i < root_this_.column_information_object_for__regions_menu__regionsMetaOptions[ root_this_.regions__meta_options_col_info_objects__index_of_meta_options ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_meta_option_i++ ){

				//console.log("working on inserting regoins menu meta option i |"+root_this_.column_information_object_for__regions_menu__regionsMetaOptions[ root_this_.regions__meta_options_col_info_objects__index_of_meta_options ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_meta_option_i ].header_category_text+"|");

				//// append the country entry 
				this.region_menu_columns.eq( this.relevant_col_num_for_curr_meta_option_item ).append( "<div class='"+root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__REGION+"'>"+root_this_.column_information_object_for__regions_menu__regionsMetaOptions[ root_this_.regions__meta_options_col_info_objects__index_of_meta_options ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_meta_option_i ].header_category_text+"</div>" );


				/// bind the data 
				/////////   $( "."+root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__REGION+" ."+root_this_.column_information_object_for__regions_menu__regionsMetaOptions[ root_this_.regions__meta_options_col_info_objects__index_of_meta_options ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_meta_option_i ].country_name_as_iso_code ).css('border', "1px dashed green");

			}
		}






		/////////////////
		/////////////////  countries menu helper function:
		/////////////////		- add SELECT ALL and SELECT NONE
		/////////////////		
		/////////////////


		root_this_.regions_menu__populate_with__select_all__and__select_none = function( root_this_ ){

			//console.log(">>>> regions_menu__populate_with__select_all__and__select_none() ");


			/// select the menu
			this.region_menu__drop_down_outer = $("#"+root_this_.graph_view__inner_areas__menu_options_area__regions__outer_list_of_menu_options_outer );

			////// add the select none button
			this.region_menu__drop_down_outer.append("<div id='"+root_this_.graph_view__inner_areas__select_none+"'>Select none</div>");

			////// add the select all button
			this.region_menu__drop_down_outer.append("<div id='"+root_this_.graph_view__inner_areas__select_all+"'>Select all</div>");

		}






		/////////////////
		/////////////////  helper function:  Country Menus
		/////////////////		- add countries to the drop down menu
		/////////////////		according to the col info object
		/////////////////


		root_this_.regions_menu__populate_with_countries = function( root_this_ ){

			//console.log(">>>> regions_menu__populate_with_countries() ");



			//////////////////////  countries and regions
			///////////////

			/// select the columns the countries go into
			this.region_menu_columns = $("."+root_this_.graph_view__inner_areas__menu_options_area__regions__drop_down__single_column);

			// just put it into the first column!
			this.relevant_col_num_for_curr_meta_option_item = 0;

			//// inser the regions header! 
			this.region_menu_columns.eq( this.relevant_col_num_for_curr_meta_option_item ).append( "<br/></div><div class='"+root_this_.graph_view__inner_areas__menu_options_area__menu_options__header_item+"'>Countries</div>" );




			//// loop through the country column information object
			//		and fill the menu
			//		... in the right column and all 
			for( this.curr_country_i = 0; this.curr_country_i < root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_country_i++ ){

				//console.log("working on country |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_country_i ].header_category_text+"|");


				////  ----  figure out which the relevant column number is for
				//		the curent item
				this.relevant_col_num_for_curr_country_item = 0;

				// a counter that keeps track of how many items 
				//	the current combination of columns can hold
				this.curr_num_of_items_for_curr_col = 0;

				// loop and figure out which column to put things into 
				for( this.curr_col_num = 0; this.curr_col_num  < root_this_.regions_menu__num_country_names_per_column.length; this.curr_col_num++ ){

					this.curr_num_of_items_for_curr_col += root_this_.regions_menu__num_country_names_per_column[ this.curr_col_num ];

					//// is the cumulative current number of items per column 
					//		larger than 
					if( this.curr_num_of_items_for_curr_col > this.curr_country_i){

						this.relevant_col_num_for_curr_country_item = this.curr_col_num;
						break
					}
		
				}

				//// append the country entry 
				this.region_menu_columns.eq( this.relevant_col_num_for_curr_country_item ).append( "<div class='"+root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_country_i ].country_name_as_iso_code+"'>"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_country_i ].header_category_text+"</div>" );


				/// bind the data 
				/////////   $( "."+root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_country_i ].country_name_as_iso_code ).css('border', "1px dashed green");

			}

		}




		/////////////////
		/////////////////  helper function: for Country Menu
		/////////////////		- bind interactions ot the country menu
		/////////////////
		/////////////////


		root_this_.bind_interactions_to_the_regions_menu = function( root_this_ ){

			//console.log(">>>>>>> bind_interactions_to_the_regions_menu() ");


			//////// toggle the display of the drop down menu
			//
			//
			$("#"+root_this_.graph_view__inner_areas__menu_options_area__regions__outer_top_option_static ).click( function(){

				//console.log("click menu");

				$("#"+root_this_.graph_view__inner_areas__menu_options_area__regions__outer_list_of_menu_options_outer ).toggle();

				// and setup the background mouse-catching area
				root_this_.graphing_area__open_menu_operations__eg_set_up_mouse_catching_area( root_this_, root_this_.menues_listing__txt__display_by_regions );					

			});


			//////////////////////   SELECT ALL / NONE
			///
			//

			//  select none
			$("#"+root_this_.graph_view__inner_areas__select_none ).click( function(){

				//console.log("click : select none ");

				// set the relevant values
				root_this_.set_ALL_country_column_info_objects_to_this_value( root_this_, false );

				// update the display of the country values
				root_this_.set_ALL_country_menu_items_according_to_the_data( root_this_ );

				// update the visibility index of the country display areas
				root_this_.regions__set_display_area_obj_visibility_flags_according_to_country_col_info_obj_data( root_this_ );	

				// update the locations of the bars according to in/visible regions
				root_this_.graphing_ara__set_bar_areas_locations_according_to_order_of_display_areas__NEW( root_this_ );

				//// and update the count of the metaching/total num of commitments
				root_this_.recount_and_redisplay__matching_and_total_num_of_commitments( root_this_ );

			});


			//  select all
			//  select none
			$("#"+root_this_.graph_view__inner_areas__select_all ).click( function(){

				//console.log("click : select none ");

				// set the relevant values
				root_this_.set_ALL_country_column_info_objects_to_this_value( root_this_, true );

				// update the display of the country values
				root_this_.set_ALL_country_menu_items_according_to_the_data( root_this_ );

				// update the visibility index of the country display areas
				root_this_.regions__set_display_area_obj_visibility_flags_according_to_country_col_info_obj_data( root_this_ );		

				// update the locations of the bars according to in/visible regions
				root_this_.graphing_ara__set_bar_areas_locations_according_to_order_of_display_areas__NEW( root_this_ );		

				//// and update the count of the metaching/total num of commitments
				root_this_.recount_and_redisplay__matching_and_total_num_of_commitments( root_this_ );


				/////   then set the initial selection mode to true
				//			- so if someone clicks a single country then only that item is selected
				//			
				root_this_.country_operations_menu__selection_mode___in_initial_mode = true;
			});



			//////////////////////   REGIONS INTERACTIONS
			///
			///		loop and assign
			//	

			this.curr_regions_menu_items = $("."+root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__REGION )	;

			for( this.curr_region_i = 0; this.curr_region_i < root_this_.column_information_object_for__regions_menu__regionsMetaOptions[ root_this_.regions__meta_options_col_info_objects__index_of_meta_options ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_region_i++ ){

				//// select the relevant region item 
				this.curr_region_menu_item = this.curr_regions_menu_items.eq( this.curr_region_i );


				/// bind data to it
				this.curr_region_menu_item.data( root_this_.data_key_for_country_menu__regions_indicies, this.curr_region_i );

				/// bind interactions to it 
				this.curr_region_menu_item.click( function(){

					this.curr_region_index = $(this).data( root_this_.data_key_for_country_menu__regions_indicies) ;

					//console.log("click on region! - num "+this.curr_region_index );


					/// if we're in the alternative selection mode
					//		- where, if we're starting and/or have all countries selected
					//		THEN a click on the regions menu ( or a country ) selects
					//		only that entity
					if(  root_this_.country_operations_menu__selection_mode___traditional_or_new === root_this_.country_operations_menu__selection_modes_as_text__new && root_this_.country_operations_menu__selection_mode___in_initial_mode === true ){

							// set all country values to false
							root_this_.set_ALL_country_column_info_objects_to_this_value( root_this_, false );		

							/////   then set the initial selection mode to false,
							//	     as we're no longer in it 
							root_this_.country_operations_menu__selection_mode___in_initial_mode = false;				
					}


					// select the relevant countries
					root_this_.set_REGION_col_info_acc_to_mouse_click_on_country_menu( root_this_, this.curr_region_index );

					// update the display according to the data?
					root_this_.set_ALL_country_menu_items_according_to_the_data( root_this_ );

					// update the visibility index of the country display areas
					root_this_.regions__set_display_area_obj_visibility_flags_according_to_country_col_info_obj_data( root_this_ );	

					// update the locations of the bars according to in/visible regions
					root_this_.graphing_ara__set_bar_areas_locations_according_to_order_of_display_areas__NEW( root_this_ );	

					//// and update the count of the metaching/total num of commitments
					root_this_.recount_and_redisplay__matching_and_total_num_of_commitments( root_this_ );													

				});

			}




			//////////////////////   COUNTRIES INTERACTIONS
			////////////////// do the countries
			//// loop through the country column information object
			//		and fill the menu
			//		... in the right column and all 
			for( this.curr_country_i = 0; this.curr_country_i < root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_country_i++ ){

				/// select and bind
				this.curr_country_name = $( "#"+root_this_.graph_view__inner_areas__menu_options_area__regions__outer_list_of_menu_options_outer+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_country_i  ].country_name_as_iso_code );

				/// bind the data!
				this.curr_country_name.data( root_this_.data_key_for_country_menu__country_indicies, this.curr_country_i);

				// bind the interaction
				this.curr_country_name.click( function(){

					this.curr_country_index = $( this ).data( root_this_.data_key_for_country_menu__country_indicies );

					//console.log(" click! on item "+this.curr_country_index+" - "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_country_index ].country_name_as_iso_code );


					//// AlTERANTE SELECTION MODES?!
					// whether we're doing alternative initial selection 
					//	modes or not

					// if in the new mode
					// ( i.e. if all countries are selected, as they might be initially,
					//  	then a click will deselect all countries and then select the
					//		clicked country. )
					//
					//   THEN deselect all countries
					//	and CONTINUE as usual

					if(  root_this_.country_operations_menu__selection_mode___traditional_or_new === root_this_.country_operations_menu__selection_modes_as_text__new && root_this_.country_operations_menu__selection_mode___in_initial_mode === true ){

						console.log("country selection menu - new - in mode |"+root_this_.country_operations_menu__selection_mode___traditional_or_new+"|" );

						// set all country values to false
						root_this_.set_ALL_country_column_info_objects_to_this_value( root_this_, false );

						/////   then set the initial selection mode to false,
						//	     as we're no longer in it 
						root_this_.country_operations_menu__selection_mode___in_initial_mode = false;
					}


					// update the col info data for this country item
					root_this_.set_country_col_info_acc_to_mouse_click_on_country_menu( root_this_, this.curr_country_index );


					/// update all countries selection bits in the menu
					root_this_.set_ALL_country_menu_items_according_to_the_data( root_this_ );



					/////// then back to usual way of selecting and dealing with things
					//

					// update the visibility index of the country display areas
					root_this_.regions__set_display_area_obj_visibility_flags_according_to_country_col_info_obj_data( root_this_ );		

					// update the locations of the bars according to in/visible regions
					root_this_.graphing_ara__set_bar_areas_locations_according_to_order_of_display_areas__NEW( root_this_ );		

					//// and update the count of the metaching/total num of commitments
					root_this_.recount_and_redisplay__matching_and_total_num_of_commitments( root_this_ );											
				});

			}			
		}




		/////////////////
		/////////////////  helper function:
		/////////////////		- set the country meta data info according to a click on a country
		/////////////////		(they're boolean values, so it's just a question of inversing them)
		/////////////////
		/////////////////


		root_this_.set_country_col_info_acc_to_mouse_click_on_country_menu = function( root_this_, clicked_country_index ){

			//console.log(">>>>> set_country_col_info_acc_to_mouse_click_on_country_menu() ");

			//console.log("-- clicked country item #"+clicked_country_index+" ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ clicked_country_index ].country_name_as_iso_code+") with a value of |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ clicked_country_index ].current_selection__selectedTrueFalse+"|" );

			/// inverse the current value 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ clicked_country_index ].current_selection__selectedTrueFalse = !root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ clicked_country_index ].current_selection__selectedTrueFalse;

			//console.log(" - the current value is now "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ clicked_country_index ].current_selection__selectedTrueFalse );

		}



		//////   same as above but set to a particular value

		root_this_.set_country_col_info_acc_to_specific_value = function( root_this_, clicked_country_index, specific_value ){

			console.log(">>>>> set_country_col_info_acc_to_specific_value() ");

			console.log("-- clicked country item #"+clicked_country_index+" ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ clicked_country_index ].country_name_as_iso_code+") with a value of |"+specific_value+"|" );

			/// inverse the current value 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ clicked_country_index ].current_selection__selectedTrueFalse = specific_value;

			console.log(" - the current value is now "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ clicked_country_index ].current_selection__selectedTrueFalse );

		}		






		/////////////////
		/////////////////  helper function:
		/////////////////		- select the countries of the given pressed region		
		////   
		////   So… 
		////   		- loop through the different countries in the the given region info object, 
		////   		- check if they're in the relevant col info country listing object
		////   		- if they are, select them
		////		- then update the viusal appearance of the country menu 
		////
		/////////////////


		root_this_.set_REGION_col_info_acc_to_mouse_click_on_country_menu = function( root_this_, clicked_region_index ){


			/// then loop through each country within the region
			//
			for( this.curr_country_in_curr_region_i = 0; this.curr_country_in_curr_region_i < root_this_.column_information_object_for__regions_menu__regionsMetaOptions[ root_this_.regions__meta_options_col_info_objects__index_of_meta_options ].header__value_choice_categories__listed_in_order_of_appearance[ clicked_region_index ].refers_to_the_following_countries.length; this.curr_country_in_curr_region_i++ ){



				/// and compare the country with the countries in the country information objcet... phew
				//console.log(" looking at region |"+root_this_.column_information_object_for__regions_menu__regionsMetaOptions[ root_this_.regions__meta_options_col_info_objects__index_of_meta_options ].header__value_choice_categories__listed_in_order_of_appearance[ clicked_region_index ].header_category_text+"| and country |"+root_this_.column_information_object_for__regions_menu__regionsMetaOptions[ root_this_.regions__meta_options_col_info_objects__index_of_meta_options ].header__value_choice_categories__listed_in_order_of_appearance[ clicked_region_index ].refers_to_the_following_countries[ this.curr_country_in_curr_region_i ]+"|" );

				
				//// loop through the countries in the country column
				//		of the column information object
				for( this.curr_country_i_in_col_info_objs = 0; this.curr_country_i_in_col_info_objs < root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_country_i_in_col_info_objs++ ){

					//console.log("\t - comparing it it's the same iso code… as col info obj… |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_country_i_in_col_info_objs ].country_name_as_iso_code+"|");

					if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_country_i_in_col_info_objs ].country_name_as_iso_code === root_this_.column_information_object_for__regions_menu__regionsMetaOptions[ root_this_.regions__meta_options_col_info_objects__index_of_meta_options ].header__value_choice_categories__listed_in_order_of_appearance[ clicked_region_index ].refers_to_the_following_countries[ this.curr_country_in_curr_region_i ] ){

						//console.log(" ---- whoa - we have a match! between country in col info obj |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_country_i_in_col_info_objs ].country_name_as_iso_code+"| and one of the countries in the current region |"+root_this_.column_information_object_for__regions_menu__regionsMetaOptions[ root_this_.regions__meta_options_col_info_objects__index_of_meta_options ].header__value_choice_categories__listed_in_order_of_appearance[ clicked_region_index ].refers_to_the_following_countries[ this.curr_country_in_curr_region_i ]+"|");

						/// set the value of the given country to true
						root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_country_i_in_col_info_objs ].current_selection__selectedTrueFalse = true;


					}

				}

			} /// end loop countries within current region


		} // end function





		//////////
		//////////		companion function 
		//////////		- set the visual markup of a country 
		//////////		item according to the data
		//////////		
		//////////

		root_this_.set_a_SINGLE_country_menu_item_according_to_the_data = function( root_this_, clicked_country_index ){

			//console.log(">>>> set_a_SINGLE_country_menu_item_according_to_the_data of #"+clicked_country_index+" which is |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ clicked_country_index  ].country_name_as_iso_code+"|" );

			// select the relevant item
			/// select and bind
			this.curr_country_name_menu_item = $( "#"+root_this_.graph_view__inner_areas__menu_options_area__regions__outer_list_of_menu_options_outer+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ clicked_country_index  ].country_name_as_iso_code );	
			
			//// do different things depending on whether 
			// the given data value is true or fale
			if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ clicked_country_index  ].current_selection__selectedTrueFalse === true  ){

				this.curr_country_name_menu_item.addClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );

			}else{

				this.curr_country_name_menu_item.removeClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );

			}

		}




		//////////
		//////////		companion function 
		//////////		- set the visual markup of a country 
		//////////		item according to the data
		//////////		
		//////////

		root_this_.set_ALL_country_menu_items_according_to_the_data = function( root_this_ ){

			/// hellow
			//console.log(">>>>>>  set_ALL_country_menu_items_according_to_the_data()");


			///// loop and set the items according to the data
			//

			for( this.curr_country_i = 0; this.curr_country_i < root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_country_i++ ){

					/// select and bind
					this.curr_country_name = $( "#"+root_this_.graph_view__inner_areas__menu_options_area__regions__outer_list_of_menu_options_outer+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_country_i  ].country_name_as_iso_code );

					//// set selected or not selected depending on 
					//		whether the item is selected/unselected | true/false in the data
					// 
					if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_country_i ].current_selection__selectedTrueFalse === true  ){

						this.curr_country_name.addClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );

					}else{

						this.curr_country_name.removeClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );

					}

			}

		}






		//////////
		//////////		companion function 
		//////////		- set ALL the countries in the country info col 
		//////////		to a particular value
		//////////		
		//////////		
		//////////

		root_this_.set_ALL_country_column_info_objects_to_this_value = function( root_this_, relevant_value_to_set ){

			/// hellow
			//console.log(">>>>>>  set_ALL_country_column_info_objects_to_this_value() - setting value |"+relevant_value_to_set+"|" );


			///// loop and set the items according to the data
			//

			for( this.curr_country_i = 0; this.curr_country_i < root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_country_i++ ){

					root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_country_i ].current_selection__selectedTrueFalse = relevant_value_to_set ;

			}

		}





		//////////
		//////////		regions
		//////////		- set display area objects visibility flag according to country col info data
		//////////		
		//////////		


		root_this_.regions__set_display_area_obj_visibility_flags_according_to_country_col_info_obj_data = function( root_this_ ){

			//console.log(">>>>. regions__set_display_area_obj_visibility_flags_according_to_country_col_info_obj_data() ");


			//// loop through the col info metadata for the country
			for( this.curr_country_i_in_col_info_objs = 0; this.curr_country_i_in_col_info_objs < root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_country_i_in_col_info_objs++ ){

				/// loop through the dislpay areas
				for( this.curr_display_area_i = 0; this.curr_display_area_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.curr_display_area_i++ ){ 

					/// check if the current col info country && the given display area the same!?
					if(  root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_country_i_in_col_info_objs ].country_name_as_iso_code === root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].country_name_as_iso_code ){

							//console.log("success! - matched "+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].country_name_as_iso_code );

							// now set it to visible/invisible
							// according to the country col info country meta data objects
							root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].is_selected = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_country_i_in_col_info_objs ].current_selection__selectedTrueFalse; 

					} // end check if country col obj && display object country match

				} // end display area loop

			} /// end country col info object country loop


		} // end function





		/////////
		//////////			debugging function : 
		////////				- print the select/not-selected (true/false)
		////////				values of all the countries in the 
		////////				country col of the column info object 
		////////

		root_this_.print_all_countries_selection_values_of_the_graph_obj_col_info_obj = function( root_this_ ){

			//console.log(">>>>. print_all_countries_selection_values_of_the_graph_obj_col_info_obj() - "+root_this_.name_of_this_object+"| got "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance.length+" countries" );

			for( this.curr_country_i = 0; this.curr_country_i < root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_country_i++ ){

				//console.log( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_country_i ].country_name_as_iso_code+" : "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.main_col_info_objects__index_of_country_column ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_country_i ].current_selection__selectedTrueFalse );

			}
		}



		//////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////
		//////////////////////////////////
		//////////////////////////////////		menues - opening/closing helper functions
		//////////////////////////////////




		/////// opening meus - set up the mouse-catching region AND 
		//								record which menu is open

		root_this_.graphing_area__open_menu_operations__eg_set_up_mouse_catching_area = function( root_this_, which_menu_is_this ){

			//console.log(">>>>> graphing_area__opening_menu_operations__eg_set_up_mouse_catching_area() ");


			//// remember which menu is open
			root_this_.sort__curr_display_areas__curr_open_menu = which_menu_is_this;


			/////// and show the clickable area + attach a function to catch 
			//			mouseclicks ( which causes all menus to close )
			//
			$("#"+root_this_.graph_view__invisible_area_for_catching_mouse_clickis_below_menu ).show();


			$("#"+root_this_.graph_view__invisible_area_for_catching_mouse_clickis_below_menu ).click( function(){
					root_this_.graping_area__close_all_menus( root_this_ );
			});

		}



		////////  closing menus - when clicking on the mouse-catching region
		root_this_.graping_area__close_all_menus = function( root_this_ ){

			
			//console.log(">>>>> graping_area__close_all_menus()");

			$("#"+root_this_.graph_view__inner_areas__menu_options_area__displayByMenu__outer_list_of_menu_options_outer ).hide();

			/////// and hide the clickable area 
			//
			$("#"+root_this_.graph_view__inner_areas__menu_options_area__Values__outer_list_of_menu_options_outer ).hide();

			$("#"+root_this_.graph_view__inner_areas__menu_options_area__regions__outer_list_of_menu_options_outer ).hide();

			$("#"+root_this_.graph_view__inner_areas__menu_options_area__SortBy__outer_list_of_menu_options_outer ).hide();


			/// and then hide the invisible area, please

			$("#"+root_this_.graph_view__invisible_area_for_catching_mouse_clickis_below_menu ).hide();

		}





		//////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////
		//////////////////////////////////
		//////////////////////////////////		setup sorting menu + interactions
		//////////////////////////////////

		///// general setup for the regions menu


		root_this_.setup_sorting_menu__general_setup = function( root_this_ ){

			//console.log(">>>>>>> setup_sorting_menu__general_setup() ");

			/// set up the options
			root_this_.sorting_menu__setup_options__in_html( root_this_);


			/// bind interactions
			root_this_.sorting_menu__bind_interactions__to_options( root_this_ );


			/// update the menu according to the data
			root_this_.sorting_menu__set_sort_by_menu_according_to_data( root_this_ );

			// c'cest tout!
		}




		//////////
		//////////		sorting menu  : companion function 
		//////////		- set up html options
		//////////		
		//////////	


		root_this_.sorting_menu__setup_options__in_html = function( root_this_ ){


			//console.log(">>>>>> sorting_menu__setup_options__in_html() ");

			// select the drop down region
			this.setup_menu_drop_down_outer_area = $("#"+root_this_.graph_view__inner_areas__menu_options_area__SortBy__outer_list_of_menu_options_outer );


			/// append : the sort alphabeticall, high to low option
			this.setup_menu_drop_down_outer_area.append("<div id='"+root_this_.graph_view__inner_areas__menu_options_area__SortBy__option__sort__alphabetically_normally+"' class='"+root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item+"'>Alphabetically (A-Z)</div>");


			/// append : the sort alphabeticall, low to high option
			this.setup_menu_drop_down_outer_area.append("<div id='"+root_this_.graph_view__inner_areas__menu_options_area__SortBy__option__sort__alphabetically_REVERSED_ORDER+"' class='"+root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item+"'>Alphabetically (Z-A)</div>");

			/// append : the sort by score, high to low option
			this.setup_menu_drop_down_outer_area.append("<div id='"+root_this_.graph_view__inner_areas__menu_options_area__SortBy__option__sort__HIGH_to_low+"' class='"+root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item+"'>High to Low</div>");

			/// append : the sort by score, low to high option 
			this.setup_menu_drop_down_outer_area.append("<div id='"+root_this_.graph_view__inner_areas__menu_options_area__SortBy__option__sort__low_to_HIGH+"' class='"+root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item+"'>Low to High</div>");

		}




		//////////
		//////////		sorting menu  : bind interactions
		//////////	

		root_this_.sorting_menu__bind_interactions__to_options = function( root_this_ ){

			//console.log(">>>>>> sorting_menu__bind_interactions__to_options() ");


			///  show/hide the drop down menu

			$("#"+root_this_.graph_view__inner_areas__menu_options_area__SortBy__outer_top_option_static ).click( function(){

				$("#"+root_this_.graph_view__inner_areas__menu_options_area__SortBy__outer_list_of_menu_options_outer ).toggle();

				// and setup the background mouse-catching area
				root_this_.graphing_area__open_menu_operations__eg_set_up_mouse_catching_area( root_this_, root_this_.menues_listing__txt__sorting_menu );	
			});


			/// set up the clicking of this item
			$("#"+root_this_.graph_view__inner_areas__menu_options_area__SortBy__option__sort__alphabetically_normally ).click( function(){

				root_this_.sort__curr_display_areas_sorting_mode = root_this_.sort__dispay_areas__mode__alphabetic_regular_order;

				root_this_.sorting_menu__set_sort_by_menu_according_to_data( root_this_ );
				//// root_this_.sorting_menu__deselect_all_items_visually( root_this_ );

				//// $(this).addClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );


				// sort
				root_this_.sort_display_area_objects_according_to_current_settings( root_this_ );

				// display
				root_this_.graphing_ara__set_bar_areas_locations_according_to_order_of_display_areas__NEW( root_this_ );

			});

			/// set up the clicking of this item
			$("#"+root_this_.graph_view__inner_areas__menu_options_area__SortBy__option__sort__alphabetically_REVERSED_ORDER ).click( function(){

				root_this_.sort__curr_display_areas_sorting_mode = root_this_.sort__dispay_areas__mode__alphabetic_REVERSED_order;

				root_this_.sorting_menu__set_sort_by_menu_according_to_data( root_this_ );
				//// root_this_.sorting_menu__deselect_all_items_visually( root_this_ );

				//// $(this).addClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );


				// sort
				root_this_.sort_display_area_objects_according_to_current_settings( root_this_ );

				// display
				root_this_.graphing_ara__set_bar_areas_locations_according_to_order_of_display_areas__NEW( root_this_ );				
			});

			/// set up the clicking of this item
			$("#"+root_this_.graph_view__inner_areas__menu_options_area__SortBy__option__sort__HIGH_to_low ).click( function(){

				root_this_.sort__curr_display_areas_sorting_mode = root_this_.sort__dispay_areas__mode__score__HIGH_to_low;

				root_this_.sorting_menu__set_sort_by_menu_according_to_data( root_this_ );
				//// root_this_.sorting_menu__deselect_all_items_visually( root_this_ );

				//// $(this).addClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );


				// sort
				root_this_.sort_display_area_objects_according_to_current_settings( root_this_ );

				// display
				root_this_.graphing_ara__set_bar_areas_locations_according_to_order_of_display_areas__NEW( root_this_ );				
			});

			/// set up the clicking of this item
			$("#"+root_this_.graph_view__inner_areas__menu_options_area__SortBy__option__sort__low_to_HIGH ).click( function(){

				root_this_.sort__curr_display_areas_sorting_mode = root_this_.sort__dispay_areas__mode__score__low_to_HIGH;

				root_this_.sorting_menu__set_sort_by_menu_according_to_data( root_this_ );
				//// root_this_.sorting_menu__deselect_all_items_visually( root_this_ );

				//// $(this).addClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );


				// sort
				root_this_.sort_display_area_objects_according_to_current_settings( root_this_ );

				// display
				root_this_.graphing_ara__set_bar_areas_locations_according_to_order_of_display_areas__NEW( root_this_ );
			});

		}




		//////////
		//////////		sorting menu  : deselect all items visually
		//////////	


		root_this_.sorting_menu__deselect_all_items_visually = function( root_this_ ){

			//console.log(">>>> sorting_menu__deselect_all_items_visually() ");

			// deslect all menu items
			$("#"+root_this_.graph_view__inner_areas__menu_options_area__SortBy__outer_list_of_menu_options_outer+" ."+root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item ).removeClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );

		}



		//////////
		//////////		sorting menu  : reset sort by menu to default value
		//////////	


		root_this_.sorting_menu__reset_values_and_display = function( root_this_ ){

			// hello
			//console.log(">>>> sorting_menu__reset_values_and_display() ");

			// set it back to the dfault value
			root_this_.sort__curr_display_areas_sorting_mode = root_this_.sort__curr_default_value;

			// update the menu
			root_this_.sorting_menu__set_sort_by_menu_according_to_data( root_this_ );

			// sort
			root_this_.sort_display_area_objects_according_to_current_settings( root_this_ );

			// display
			root_this_.graphing_ara__set_bar_areas_locations_according_to_order_of_display_areas__NEW( root_this_ );
		}




		//////////
		//////////		sorting menu  : set menu according to data
		//////////	


		root_this_.sorting_menu__set_sort_by_menu_according_to_data = function( root_this_ ){

			//console.log(">>>> sorting_menu__set_sort_by_menu_according_to_data - currently selected sorting mode is |"+root_this_.sort__curr_display_areas_sorting_mode+"|" );

			/// deselect all 
			root_this_.sorting_menu__deselect_all_items_visually( root_this_ );


			////// select the relevant item

			if( root_this_.sort__curr_display_areas_sorting_mode === root_this_.sort__dispay_areas__mode__alphabetic_regular_order ){

				// select the relevant item
				$("#"+root_this_.graph_view__inner_areas__menu_options_area__SortBy__option__sort__alphabetically_normally ).addClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );

			}else if( root_this_.sort__curr_display_areas_sorting_mode === root_this_.sort__dispay_areas__mode__alphabetic_REVERSED_order  ){

				// select the relevant item
				$("#"+root_this_.graph_view__inner_areas__menu_options_area__SortBy__option__sort__alphabetically_REVERSED_ORDER ).addClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );


			}else if( root_this_.sort__curr_display_areas_sorting_mode === root_this_.sort__dispay_areas__mode__score__HIGH_to_low  ){

				// select the relevant item
				$("#"+root_this_.graph_view__inner_areas__menu_options_area__SortBy__option__sort__HIGH_to_low ).addClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );

			}else if( root_this_.sort__curr_display_areas_sorting_mode === root_this_.sort__dispay_areas__mode__score__low_to_HIGH  ){

				// select the relevant item
				$("#"+root_this_.graph_view__inner_areas__menu_options_area__SortBy__option__sort__low_to_HIGH ).addClass( root_this_.graph_view__inner_areas__menu_options_area__menu_options__selectable_item__SELECTED );

			}

		}



		///////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////
		///////////////////////
		///////////////////////		sorting display area objects!
		///////////////////////			
		///////////////////////



		root_this_.sort_display_area_objects_according_to_current_settings = function( root_this_ ){

			//console.log(">>>> sort_display_area_objects_according_to_current_settings() sorting more => |"+root_this_.sort__curr_display_areas_sorting_mode+"|" );


			/////// /////// sortings 



			////// if sorting alphabetically
			if( root_this_.sort__curr_display_areas_sorting_mode === root_this_.sort__dispay_areas__mode__alphabetic_regular_order || root_this_.sort__curr_display_areas_sorting_mode === root_this_.sort__dispay_areas__mode__alphabetic_REVERSED_order ){

				root_this_.commitment_display__n_filterning_n_sorting_areas.sort( root_this_.sorting__display_area_country_name_comparison );

			}


			/////// if sorting by numeric measures
			if(  root_this_.sort__curr_display_areas_sorting_mode === root_this_.sort__dispay_areas__mode__score__HIGH_to_low || root_this_.sort__curr_display_areas_sorting_mode === root_this_.sort__dispay_areas__mode__score__low_to_HIGH ){

				root_this_.commitment_display__n_filterning_n_sorting_areas.sort( root_this_.sorting__display_area_calculated_score_comparison );

			}


			/////// reverse the display area objects if reverse sorts
			if( root_this_.sort__curr_display_areas_sorting_mode === root_this_.sort__dispay_areas__mode__alphabetic_REVERSED_order ||  root_this_.sort__curr_display_areas_sorting_mode === root_this_.sort__dispay_areas__mode__score__low_to_HIGH ){

				root_this_.commitment_display__n_filterning_n_sorting_areas.reverse();

			}


			//////////// and that's it good folks!
		}





		/////////
		/////////		sort functions : comparison functions
		/////////


		// for alphabetic comparisons based on the coountry name
		root_this_.sorting__display_area_country_name_comparison = function( a, b ){

			if( a.country_name > b.country_name ){
				return 1;
			}
			if( a.country_name < b.country_name ){
				return -1;
			}
			if( a.country_name === b.country_name ){
				return 0;
			}

		}

/*
		// for numeric comparisons based on the computed score
		root_this_.sorting__display_area_calculated_score_comparison = function( a, b ){

			if( a.calculated_graph_area_score__decimal < b.calculated_graph_area_score__decimal ){
				return 1;
			}
			if( a.calculated_graph_area_score__decimal > b.calculated_graph_area_score__decimal ){
				return -1;
			}
			if( a.calculated_graph_area_score__decimal === b.calculated_graph_area_score__decimal ){
				return 0;
			}

		}
*/

		// for numeric comparisons based on the computed score
		root_this_.sorting__display_area_calculated_score_comparison = function( a, b ){

			this.root_this_ = our_irm_vis.our_graph_view_obj__commitments_data_edition;

			//console.log(">>> comparing object a/b : of col num |"+this.root_this_.curr_col_info_column_num_used_for_display_by_menu__index+"|");
			//console.log("\t\t - ... which has "+a.values_counter_obj_for_this_display_obj[ this.root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance.length+" / "+b.values_counter_obj_for_this_display_obj[ this.root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance.length );

			/// lookup the values, saving ourselves long long lines below

			// a score
			this.a_score = a.values_counter_obj_for_this_display_obj[ this.root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance[ 0 ].found_instances_of_this_value__as_a_decimal__of_total_commitments_for_this_column;

			// b score
			this.b_score = b.values_counter_obj_for_this_display_obj[ this.root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance[ 0 ].found_instances_of_this_value__as_a_decimal__of_total_commitments_for_this_column;


			if( this.a_score < this.b_score ){
				return 1;
			}
			if( this.a_score > this.b_score ){
				return -1;
			}
			if( this.a_score === this.b_score ){
				return 0;
			}

		}








		///////////////////
		///////////////////		sort and relocate if doing sorting by high/low score
		///////////////////


		root_this_.sorting___sort_and_calc_relev_bar_position_and_move_bars__if_high_low_sorting_setting_active = function( root_this_ ){


			//console.log(">>> sorting___sort_and_calc_relev_bar_position_and_move_bars__if_high_low_sorting_setting_active() ");



			/////// if sorting by numeric measures
			if(  root_this_.sort__curr_display_areas_sorting_mode === root_this_.sort__dispay_areas__mode__score__HIGH_to_low || root_this_.sort__curr_display_areas_sorting_mode === root_this_.sort__dispay_areas__mode__score__low_to_HIGH ){

				root_this_.commitment_display__n_filterning_n_sorting_areas.sort( root_this_.sorting__display_area_calculated_score_comparison );


				//// if reversed…
				//
				/////// reverse the display area objects if reverse sorts
				if(  root_this_.sort__curr_display_areas_sorting_mode === root_this_.sort__dispay_areas__mode__score__low_to_HIGH ){

					root_this_.commitment_display__n_filterning_n_sorting_areas.reverse();

				}

				/// and recalculate + reposition
				root_this_.graphing_ara__set_bar_areas_locations_according_to_order_of_display_areas__NEW( root_this_ );

			}
		}


		///////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////
		///////////////////////
		///////////////////////		graphing!
		///////////////////////			
		///////////////////////


		//////////
		////////////  graphing area : function to set up the actual graphic bar elements 
		//////////


		root_this_.graphing_area__set_up_bar_html_elements = function( root_this_ ){

			//console.log(">>>>> graphing_area__set_up_bar_html_elements() ");


			//// select the area they go into
			this.graphing_area = $("#"+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area );


			//// build the html that goes into a graphing element
			//      WITHOUT THE OPENING DIV

			/*  - potential start
			this.single_graphing_element_start = "<div id='"+root_this_.+graph_view__inner_areas__graphing_area__actual_graphing_area ;
			*/

			//// add the enclosing area 
			this.single_graphing_element__without_start_div_and_end = "";

			// add the bar 
			this.single_graphing_element__without_start_div_and_end += "<div class='"+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__outer_bar+"'></div>";			

			/*
			// add the text above the bar area 
			this.single_graphing_element__without_start_div_and_end += "<div class='"+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__text_on_top+"'>050%</div>";			
			*/

			// add the text above the bar area 
			this.single_graphing_element__without_start_div_and_end += "<div class='"+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__text_on_bottom_countryname+"'>";



			//// loop through the country display areas 
			//		and add relevant areas

			for( this.curr_display_area_i = 0; this.curr_display_area_i  < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.curr_display_area_i ++ ){

				this.curr_html__ending_bits = root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ]. country_name+"</div></div>";

				this.curr_graphing_element__complete = "<div class='"+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph_outer_element+" "+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ]. country_name_as_iso_code+"'>"+this.single_graphing_element__without_start_div_and_end+this.curr_html__ending_bits ;

				this.graphing_area.append( this.curr_graphing_element__complete );

			}

		}




		//////////
		////////////  graphing area : function to set the location of the 
		//////////					bars according to the order of the display areas 
		//////////


		root_this_.graphing_ara__set_bar_areas_locations_according_to_order_of_display_areas = function( root_this_ ){

			//console.log(">>>>> graphing_ara__set_bar_areas_locations_according_to_order_of_display_areas() ");

						//// loop through the country display areas 
			//		and add relevant areas

			for( this.curr_display_area_i = 0; this.curr_display_area_i  < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.curr_display_area_i ++ ){

				////  //console.log("working on bar group item #"+this.curr_display_area_i+" | "+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].country_name_as_iso_code+" | general class = "+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph_outer_element );

				// calculate the relevant position
				this.curr_bar_loc_x = this.curr_display_area_i * this.graphing__width_of_graphing_elements_x;

				// select the area and do a nice little transition
				this.curr_graph_outer_area = $( "."+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph_outer_element).filter( " ."+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].country_name_as_iso_code );

				// animate the outer unit position
				this.curr_graph_outer_area.animate({
							position: "absolute",
						    left: this.curr_bar_loc_x,						    
						  }, root_this_.graphing__bar_animation__duration_ms );

				// select the bar inside and change its height
				this.curr_graph_outer_area.find( "."+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__outer_bar ).animate({
					//
					//// height: root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].calculated_graph_area_score__decimal * root_this_.graphing__CURR_height_of_bars_y,
					height : root_this_.graphing__CURR_height_of_bars_y,
				}, root_this_.graphing__bar_animation__duration_ms );

				/*
				// select the text on top of the bar and update it 
				this.curr_graph_outer_area.find( "."+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__text_on_top ).animate({
					// note the offset from the bar height
					bottom: root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].calculated_graph_area_score__decimal * root_this_.graphing__CURR_height_of_bars_y + root_this_.graphing__height_of_text_elements_above_bars,
				}, root_this_.graphing__bar_animation__duration_ms ).text( (parseInt( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].calculated_graph_area_score__decimal*1000)/10)+"%" );
				*/


					
			}

		}



		//////////		UPDATED VERSION
		////////////  graphing area : function to set the location AND VISIBILITY of the 
		//////////					bars according to the order of the display areas 
		//////////


		root_this_.graphing_ara__set_bar_areas_locations_according_to_order_of_display_areas__NEW = function( root_this_ ){

			//console.log(">>>>> graphing_ara__set_bar_areas_locations_according_to_order_of_display_areas__NEW() ");

						//// loop through the country display areas 
			//		and add relevant areas

			//// cumulative count of the left x
			//		this is only updated when a visible display area is found
			this.curr_bar_loc_x = 0;

			for( this.curr_display_area_i = 0; this.curr_display_area_i  < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.curr_display_area_i ++ ){

				////  //console.log("working on bar group item #"+this.curr_display_area_i+" | "+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].country_name_as_iso_code+" | general class = "+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph_outer_element );

				//console.log("working on positioning display area #"+this.curr_display_area_i+" which is selected |"+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].is_selected+"|" );

				if( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].is_selected === true ){

					////  //console.log("\t - the display area is indeed selected" );

					if( this.curr_display_area_i === 0 ){
						//// //console.log("\t\t\t - the current display area is #"+this.curr_display_area_i );
						this.curr_bar_loc_x = 0;

					}else{

						this.curr_bar_loc_x += this.graphing__width_of_graphing_elements_x;

					}
				}

/*
				if( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].is_selected === true ){

					// if it's the first item, this doesn't quite work :( - so we need to make special arrangements 
					if( this.curr_display_area_i === 0 ){
						this.curr_bar_loc_x = 0;
					}else{
						this.curr_display_area_i += this.graphing__width_of_graphing_elements_x;
					}

				}
*/
				// select the area and do a nice little transition
				this.curr_graph_outer_area = $( "."+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph_outer_element).filter( " ."+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].country_name_as_iso_code );


				////// animate the outer unit position

				// do different things depending on visibility

				if( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].is_selected === true ){

					// for when an element is visible
					this.curr_graph_outer_area.animate({
								display: "inline",
								position: "absolute",
								opacity: 1.0,
							    left: this.curr_bar_loc_x,	
							    //////// TESTING
							    "z-index" : 2,
							  }, root_this_.graphing__bar_animation__duration_ms );

				}else{

					// for elements one wants to hide
					this.curr_graph_outer_area.animate({
								position: "absolute",
								opacity: 0.0,
							    left: this.curr_bar_loc_x,						    
							    /////////// TESTING
							    "z-index" : 0,
							  }, root_this_.graphing__bar_animation__duration_ms ), function(){
										$(this).css("display", "none");
									};
				}


				// select the bar inside and change its height
				this.curr_graph_outer_area.find( "."+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__outer_bar ).animate({
					//
					///// height: root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].calculated_graph_area_score__decimal * root_this_.graphing__CURR_height_of_bars_y,
					height: root_this_.graphing__CURR_height_of_bars_y,
				}, root_this_.graphing__bar_animation__duration_ms );

				/* --- don't quite have text right now :( - it was there in an earlier version ) 
				// select the bar inside and change its height
				this.curr_graph_outer_area.find( "."+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__text_on_top ).animate({
					// note the offset from the bar height
					bottom: root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].calculated_graph_area_score__decimal * root_this_.graphing__CURR_height_of_bars_y + root_this_.graphing__height_of_text_elements_above_bars,
				}, root_this_.graphing__bar_animation__duration_ms ).text( (parseInt( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].calculated_graph_area_score__decimal*1000)/10)+"%" );
				*/


					
			}

		}






		//////////////
		//////////////		in short:   animate the bars according to data
		//////////////		country/bar areas : change outer bar : change bars within outer bar
		//////////////		according to data
		//////////////
		//////////////


		root_this_.change_update__display_areas__bars_and_bars_within_main_bar__according_to_data = function( root_this_ ){

			//console.log(">>>>>>> change_update__display_areas__bars_and_bars_within_main_bar__according_to_data() ");


			//// loop over each of the display areas
			//
			for( this.curr_display_area_i = 0; this.curr_display_area_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.curr_display_area_i ++ ){

				//// select the current bar area
				//
				this.current_outer_bar_area = $( "."+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].country_name_as_iso_code ).find( "."+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__outer_bar ).css("height", root_this_.graphing__CURR_height_of_bars_y );


				//// select the bars within bars
				//console.log("|root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__outer_bar === "+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__outer_bar );



				/// select the bars within the main bar, if there are any
				this.curr_bars_within_outer_bar = this.current_outer_bar_area.find("."+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__individual_bar_within_the_outer_bar );

				// look up the count of bars within the main bars
				this.curr_num_of_bars_within_outer_bar = this.curr_bars_within_outer_bar.length;

				//console.log("\t - just found "+this.curr_num_of_bars_within_outer_bar+" bars within the outer bar");

				/////////////	bar operations
				/////////////
				/////////////  do different things depending on whether 
				////				the number of existing bars are higher | lower | equal to 
				//					the number of values of this col info obj

				// look up the number of values in the current information column selected
				//	in the display by menu
				this.curr_relv_col_info_obj_item__num_of_values = root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance.length; 

				/////// //console.log("\t - the relevant col info obj ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].column_title__text+") has "+this.curr_relv_col_info_obj_item__num_of_values+" values");

				//////  //console.log("\t - the relevant col info obj ("+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].column_title__text+") has "+this.curr_relv_col_info_obj_item__num_of_values+" values");		



				/////// if there are MORE BARS THAN NEEDED
				//			- remove the excessive ones
				if( this.curr_num_of_bars_within_outer_bar > this.curr_relv_col_info_obj_item__num_of_values  ){

					//////// //console.log(" \t\t - the current number of bars ("+this.curr_num_of_bars_within_outer_bar+") is HIGHER than the needed number of bars ("+this.curr_relv_col_info_obj_item__num_of_values+")");

					// remove the excessive bars
					for( this.curr_bar_num = this.curr_relv_col_info_obj_item__num_of_values; this.curr_bar_num < this.curr_num_of_bars_within_outer_bar; this.curr_bar_num++ ){

						// this.curr_bars_within_outer_bar.eq( this.curr_bar_num ).css("border", "1px solid red");

						this.curr_bars_within_outer_bar.eq( this.curr_bar_num ).animate({ 
																					opacity: 0.5,
																					top: root_this_.graphing__CURR_height_of_bars_y,
																					height: 0,
																					}, root_this_.graphing__bar_animation__duration_ms, function(){
																						$(this).remove();
																					} );
					}
				}
				/////// if there are FEWER BARS THAN NEEEDED
				//			- add the needed bars
				else if( this.curr_num_of_bars_within_outer_bar < this.curr_relv_col_info_obj_item__num_of_values  ){
					
					/////  //console.log(" \t\t - the current number of bars ("+this.curr_num_of_bars_within_outer_bar+") is LOWER than the needed number of bars ("+this.curr_relv_col_info_obj_item__num_of_values+")");

					// remove the excessive bars
					for( this.curr_bar_num = this.curr_num_of_bars_within_outer_bar; this.curr_bar_num < this.curr_relv_col_info_obj_item__num_of_values ; this.curr_bar_num++ ){

						// add one more
						this.current_outer_bar_area.append( "<div class="+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__individual_bar_within_the_outer_bar+" style='top:"+root_this_.graphing__CURR_height_of_bars_y+"px'></div>");

					}
				}


				///////////// if there's just the RIGHT NUNBER OF BARS
				//				(which would be the case if the above conditions are met 
				//					… hence, this updates the above things too )		
				//					then update them according to the relevant values!


				//// reselect the bars within the outer bars
				/// test select which was just appended
				this.reselected_curr_bars_within_outer_bar = this.current_outer_bar_area.find("."+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__individual_bar_within_the_outer_bar );
				//console.log("- display area #"+this.curr_display_area_i +" - we've now got "+this.reselected_curr_bars_within_outer_bar.length+" bars in the outer bar ");

				///  this.reselected_curr_bars_within_outer_bar.css("border", "1px solid green");



				///////////  precalculating positions
				///////////  precalculating positions
				///////////  precalculating positions

				this.cumulative_size_of_value_blocks = 0;

				/// trying to count the objects larger
				//	than the min distance, and need to be used for the length reductions
				this.count_of_objects_larger_than_min_distance = root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance.length;

				// to calculate the right object lengths… to generate the right object distance change later
				// find the zero commitment values for this display area object/country/col
				for( this.curr_value_i = 0; this.curr_value_i < root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance.length ; this.curr_value_i++ ){

					// get the current ideal blocksize
					this.curr_value_block_size = root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_value_i ].found_instances_of_this_value__as_a_decimal__of_total_commitments_for_this_column * root_this_.graphing__CURR_height_of_bars_y;


					/// check if the block size is smaller than the smallest size threshold
					if( this.curr_value_block_size < root_this_.graphing__minimal_vertical_size_of_value_blocks ){

						// set the current size to the minimum size
						// - rather than the real size (which'd be very ver smmall)
						// - fix the length discrpancy later
						this.curr_value_block_size = root_this_.graphing__minimal_vertical_size_of_value_blocks;

						// help make the count of objects needed
						//	to be used for length reductions.
						//	i.e. if there's a min distnace object found
						//	it doesn't need to be used for length reductions
						//	.... only the longer objects need to be used for this
						this.count_of_objects_larger_than_min_distance--;
					}

					/// add to the lengths 
					this.cumulative_size_of_value_blocks += this.curr_value_block_size + root_this_.graphing__vertical_gap_in_px__btw_value_bars;
				}

 
				///  find the total excess length, begond the graph length, 
				//		of the cumulative object lengths
				//		NOTE - remove one gap distance length
				this.curr_excess_length = ( this.cumulative_size_of_value_blocks - root_this_.graphing__CURR_height_of_bars_y ) - root_this_.graphing__vertical_gap_in_px__btw_value_bars ;

				//	&  find:
				//// object shortening needed for the distances to add up
				//		and for the objects+desired_gaps to fit within the bar length
				/////// this.object_length_reduction_required_to_fix_length_excess = ( this.curr_excess_length / root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance.length );

				this.object_length_reduction_required_to_fix_length_excess = this.curr_excess_length / this.count_of_objects_larger_than_min_distance;




				// figure out how much smaller each non-zero bar should be to fit the zero-value bars
				/////////  this.individual_non_zero_bar_v_size_reduction_due_to_zero_sized_bars = ( this.curr_num_of_zero_item_values * root_this_.graphing__zero_value_bar_vertical_size_px_v) / ( this.curr_relv_col_info_obj_item__num_of_values - this.curr_num_of_zero_item_values ) ;


				// feedback
				/////////  //console.log(" \t - found a distance of |"+this.individual_non_zero_bar_v_size_reduction_due_to_zero_sized_bars+"| for the size reduction of the |"+this.curr_num_of_zero_item_values+"| / |"+this.curr_relv_col_info_obj_item__num_of_values+"| zero value areas for this country column");



				/////////// calculate the final positions! 
				/////////// calculate the final positions! 
				/////////// calculate the final positions! 

				//// setup a cumulateive y distance counter
				// 		( good for dealing with zero value areas, etc )
				this.cumulative_y_distance_counter_px_y = root_this_.graphing__CURR_height_of_bars_y + root_this_.graphing__vertical_gap_in_px__btw_value_bars;


				//// loop through the bars within bars and set them to the right height
				////// for( this.reselected_curr_bars_within_outer_bar_i = 0; this.reselected_curr_bars_within_outer_bar_i < this.curr_relv_col_info_obj_item__num_of_values; this.reselected_curr_bars_within_outer_bar_i++ ){

				//// loop BACKWARDS through the bars within bars and set them to the right height
				for( this.reselected_curr_bars_within_outer_bar_i = this.curr_relv_col_info_obj_item__num_of_values-1; this.reselected_curr_bars_within_outer_bar_i >= 0 ; this.reselected_curr_bars_within_outer_bar_i-- ){


					//////   //console.log("changing bar #"+this.reselected_curr_bars_within_outer_bar_i+" of display obj "+this.curr_display_area_i+" ( "+this.curr_relv_col_info_obj_item__num_of_values+" are needed to be changed, accordingly to how many values there are )" );

					/// this.reselected_curr_bars_within_outer_bar.eq( this.reselected_curr_bars_within_outer_bar_i ).css("border", "1px solid brown");

					// this.reselected_curr_bars_within_outer_bar.eq( this.reselected_curr_bars_within_outer_bar_i ).switchClass

					// change the class - to get the right colour of the value area
					/// NOTE- this is where you could add an alternative class name!
					this.reselected_curr_bars_within_outer_bar.eq( this.reselected_curr_bars_within_outer_bar_i ).attr("class", root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__individual_bar_within_the_outer_bar+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance[ this.reselected_curr_bars_within_outer_bar_i ].header__class_name_selected );

					// dirty hack to get the colour of the color, to use for the background color
					// NOTE : THIS SHOUDL BE DONE MORE DIRECTLY  FIX FIX FIX FIX ME
					// NOTE : THIS SHOUDL BE DONE MORE DIRECTLY  FIX FIX FIX FIX ME
					// NOTE : THIS SHOUDL BE DONE MORE DIRECTLY  FIX FIX FIX FIX ME
					this.bg_colour = this.reselected_curr_bars_within_outer_bar.eq( this.reselected_curr_bars_within_outer_bar_i ).css("color");

					/////  //console.log("the found background color is |"+this.bg_colour+"|");



					///// find the height of the current object 

					// placeholder to be filled
					this.relevant_element_vertical_height = ( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance[ this.reselected_curr_bars_within_outer_bar_i ].found_instances_of_this_value__as_a_decimal__of_total_commitments_for_this_column * root_this_.graphing__CURR_height_of_bars_y ) ;

					/////   //console.log("\t -- the initial found height is "+this.relevant_element_vertical_height );

					/////  check if the found height is
					//		 smaller than the smallest size threshold
					//		- and fix the size if necessary 
					if( this.relevant_element_vertical_height < root_this_.graphing__minimal_vertical_size_of_value_blocks ){
						// set the current size to the minimum size
						//////// this.relevant_element_vertical_height = root_this_.graphing__minimal_vertical_size_of_value_blocks -this.object_length_reduction_required_to_fix_length_excess ;
						this.relevant_element_vertical_height = root_this_.graphing__minimal_vertical_size_of_value_blocks ;

						///////   //console.log("\t\t\t --- oh no, the found height ("+this.relevant_element_vertical_height+") was smaller than the minimum height ("+root_this_.graphing__minimal_vertical_size_of_value_blocks+")");
					}else {

						// reduce the excess length
						this.relevant_element_vertical_height -= this.object_length_reduction_required_to_fix_length_excess;
					}

					////////   //console.log("\t -- the new hieght is "+this.relevant_element_vertical_height+" | after the length fixing addition ("+this.object_length_reduction_required_to_fix_length_excess+")" );
	

					////   - update the cumulative y position! 
					//			- reduce the current object's height 
					//			from the start graphing point
					this.cumulative_y_distance_counter_px_y -= ( this.relevant_element_vertical_height + root_this_.graphing__vertical_gap_in_px__btw_value_bars );


					// and finally, change the length!
					this.reselected_curr_bars_within_outer_bar.eq( this.reselected_curr_bars_within_outer_bar_i ).animate(
							{ /* width: "5px", */
							height: this.relevant_element_vertical_height ,
							/* bottom : "", */
							border: "",
							top: this.cumulative_y_distance_counter_px_y,
							opacity: 1.0,
							 }, root_this_.graphing__bar_animation__duration_ms 
						);


					//// and set the background-color
					this.reselected_curr_bars_within_outer_bar.eq( this.reselected_curr_bars_within_outer_bar_i ).css("background-color", this.bg_colour );





				} // end loop




			}

		}



		//////////////
		//////////////		set up graph legend objects depending on the curent 
		//////////////		selected values, etc…
		//////////////
		//////////////


		root_this_.update_legend_display_given_current_view = function( root_this_ ){

			//console.log(">>>> update_legend_display_given_current_view() ");

			//// figure out which values are relevant… 

			this.curr_num_of_values = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance.length;

			//console.log("setting up legend objects for the values of col #"+root_this_.curr_col_info_column_num_used_for_display_by_menu__index+" which is col name "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].column_title__text+"| ... which has |"+this.curr_num_of_values+"| values. " );


			//////
			//////


			//// select relevant graph legend objects

			this.current_legend_objects = $("#"+root_this_.graph_view__inner_areas__graphing_legends__id ).find("."+root_this_.graph_view__inner_areas__graphing_legends__single_legend_item__outer_area );

			//console.log("\t - found "+this.current_legend_objects.length+" legend objects ");


			//// add or reduce legend objects depending on the need
			////

			/// if we've got more legend objects than values
			//		- REMOVE LEGEND OBJECTS the excess
			if( this.current_legend_objects.length > this.curr_num_of_values ){

				//console.log("\t\t - found too many legend objects - removing! ");

				for( this.curr_legend_obj_i = this.curr_num_of_values; this.curr_legend_obj_i < this.current_legend_objects.length; this.curr_legend_obj_i++ ){

					//console.log("\t\t\t - removing legend object #"+this.curr_legend_obj_i );

					this.current_legend_objects.eq( this.curr_legend_obj_i ).animate({ 
																					opacity: 0.0,
																					}, root_this_.graphing__bar_animation__duration_ms, function(){
																						$(this).remove();
																					} );
				} // end for loop of excessive legend objects

			}

			/// if we've got too few legend objects, compared to the needed values
			//		- ADD NEW LEGEND OBJECTS
			else if( this.current_legend_objects.length < this.curr_num_of_values ){				

				//console.log("\t\t - found too FEW legend objects - removing! ");

				for( this.curr_legend_obj_i = this.current_legend_objects.length; this.curr_legend_obj_i < this.curr_num_of_values; this.curr_legend_obj_i++ ){		

					//console.log("\t\t\t - adding legend object #"+this.curr_legend_obj_i );	

					$("#"+root_this_.graph_view__inner_areas__graphing_legends__id ).append("<div class='"+root_this_.graph_view__inner_areas__graphing_legends__single_legend_item__outer_area+"'><div class='"+root_this_.graph_view__inner_areas__graphing_legends__single_legend_item__inner_area__colour_box+"'></div><span class='"+root_this_.graph_view__inner_areas__graphing_legends__single_legend_item__inner_area__legend_text+"'></span></div>");
				}

			}


			//////////////// set values inside final objects
			//
			//

			// reselect the relevant items
			this.reselected__current_legend_objects = $("#"+root_this_.graph_view__inner_areas__graphing_legends__id ).find("."+root_this_.graph_view__inner_areas__graphing_legends__single_legend_item__outer_area );

			// and the texts
			this.reselected__current_legend_objects__texts = this.reselected__current_legend_objects.find("."+root_this_.graph_view__inner_areas__graphing_legends__single_legend_item__inner_area__legend_text );

			/// and then find+select the boxes within these
			this.reselected__current_legend_objects__colour_boxes = this.reselected__current_legend_objects.find("."+root_this_.graph_view__inner_areas__graphing_legends__single_legend_item__inner_area__colour_box );

			

			/// loop and set 
			for( this.curr_legend_obj_i = 0; this.curr_legend_obj_i < this.curr_num_of_values; this.curr_legend_obj_i++ ){


/*
				//// set the text classes right 
				this.reselected__current_legend_objects__texts.eq( this.curr_legend_obj_i ).attr("class", root_this_.graph_view__inner_areas__graphing_legends__single_legend_item__inner_area__legend_text+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_legend_obj_i ].header__class_name_selected );
*/

				//// set the text classes right 
				this.reselected__current_legend_objects.eq( this.curr_legend_obj_i ).attr("class", root_this_.graph_view__inner_areas__graphing_legends__single_legend_item__outer_area+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_legend_obj_i ].header__class_name_selected );

				// fetch the current colour and use it as a background color
				this.curr_background_colour = this.reselected__current_legend_objects.eq( this.curr_legend_obj_i ).css("color");


				// and set the background-color ... form the colour
				// YES YES - FIX THIS PLEASE! 
				this.reselected__current_legend_objects__colour_boxes.eq( this.curr_legend_obj_i ).css("background-color", this.curr_background_colour );



				//// set the text text right, according to the value text
				//
				this.reselected__current_legend_objects__texts.eq( this.curr_legend_obj_i ).text( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_legend_obj_i ].header_category_text );

				/// set the text colour right
				/////   this.reselected__current_legend_objects__texts.eq( this.curr_legend_obj_i ).css('color', this.curr_background_colour );



				//////////////  and…
				///// 				fade in 
				this.reselected__current_legend_objects.eq( this.curr_legend_obj_i ).animate({ 
																					opacity: 1.0,
																					}, root_this_.graphing__bar_animation__duration_ms__slower );
			}


			//// modify the existing graph objects to reflect current values
			////
		}






		//////////////
		//////////////		bind interactions to graph bars within bars
		//////////////		provide mouse-overs and the like  :) 
		//////////////
		
		root_this_.graph_view__bind_interactions_to_bars_within_bars = function( root_this_ ){

			//console.log(">>>> graph_view__bind_interactions_to_bars_within_bars() ");


			///// 
			/////  loop through the display area objects
			//// loop over each of the display areas
			//
			for( this.curr_display_area_i = 0; this.curr_display_area_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.curr_display_area_i ++ ){

				//////  //console.log("| - working on display area #"+this.curr_display_area_i );

				//// select the current bar area
				//
				this.current_outer_bar_area = $( "."+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].country_name_as_iso_code ).find( "."+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__outer_bar ).css("height", root_this_.graphing__CURR_height_of_bars_y );

				/// select the bars within the main bar, if there are any
				this.curr_bars_within_outer_bar = this.current_outer_bar_area.find("."+root_this_.graph_view__inner_areas__graphing_area__actual_graphing_area__single_bar_graph__inner_element__individual_bar_within_the_outer_bar );

				/// remove mouse-overs
				this.curr_bars_within_outer_bar.off();

				// look up the count of bars within the main bars
				this.curr_num_of_bars_within_outer_bar = this.curr_bars_within_outer_bar.length;

				////// //console.log("\t - just found "+this.curr_num_of_bars_within_outer_bar+" bars within the outer bar");

				/////////////	bar operations
				/////////////
				/////////////  do different things depending on whether 
				////				the number of existing bars are higher | lower | equal to 
				//					the number of values of this col info obj

				// look up the number of values in the current information column selected
				//	in the display by menu
				this.curr_relv_col_info_obj_item__num_of_values = root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance.length; 

				/// loop through the bats
				//		( make sure you only go through the bars of the given values )
				//		( as we might still have some disappearing/fading-out bars around still…)

				for( this.curr_bar_within_bar_index = 0; this.curr_bar_within_bar_index < this.curr_relv_col_info_obj_item__num_of_values ; this.curr_bar_within_bar_index++ ){

					////// //console.log('working on bar within bar #'+this.curr_bar_within_bar_index );

					/// bind data - eg. the display iso code
					this.curr_bars_within_outer_bar.eq( this.curr_bar_within_bar_index ).data( root_this_.data_key_for_display_area_country_iso_code, root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].country_name_as_iso_code );

					/// bind data - eg. the value number
					this.curr_bars_within_outer_bar.eq( this.curr_bar_within_bar_index ).data( root_this_.data_key_for_bar_within_bar__index, this.curr_bar_within_bar_index );
					

					/// bind interactions
					///
					this.curr_bars_within_outer_bar.eq( this.curr_bar_within_bar_index ).hover( function(){

						this.curr_display_area_iso_code_num = $(this).data( root_this_.data_key_for_display_area_country_iso_code );

						/// find the display area number with the same iso code
						this.relev_display_area_num = 0;

						/// loop and find
						for( this.curr_display_area_i = 0; this.curr_display_area_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.curr_display_area_i++ ){

							// check if the object's coutnry iso code is the same as the curr display objects iso code
							if( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].country_name_as_iso_code === this.curr_display_area_iso_code_num ){

								this.relev_display_area_num = this.curr_display_area_i;
								break;
							}
						}


						// find which bar number this is
						this.curr_bar_within_bar_index = $(this).data( root_this_.data_key_for_bar_within_bar__index );

						////// //console.log("- mouseover on display area #"+this.relev_display_area_num+" / country code "+this.curr_display_area_iso_code_num+" - ie. ("+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.relev_display_area_num ].country_name+") and bar num "+this.curr_bar_within_bar_index );

						//// and....
						//// send it of to do things externally
						root_this_.generate_mouseover_for_graph_bars_within_bars_mouseovers( root_this_, "show_and_generate_mouseover", this.relev_display_area_num, this.curr_bar_within_bar_index );

						},

						function(){

							// this effectively hides the mouseover
							root_this_.generate_mouseover_for_graph_bars_within_bars_mouseovers( root_this_, "HIDE_mouseover", this.relev_display_area_num, this.curr_bar_within_bar_index );

						}


					);

					/// mousemove the mosueover area 
					/// also make the mouseover area follow the mouseloc, when over the bars
					this.curr_bars_within_outer_bar.eq( this.curr_bar_within_bar_index ).mousemove( function(  ){

						////// //console.log(">>> mousemove over bars within bars!");

						root_this_.mouseover_div__preselected.css("left", root_this_.main_parent_object_this.curr_mouse_X_rel_to_body+root_this_.mouseover__distance_from_mouseover_to_mousecursor__horiz_x );
						root_this_.mouseover_div__preselected.css("top", root_this_.main_parent_object_this.curr_mouse_Y_rel_to_body+root_this_.mouseover__distance_from_mouseover_to_mousecursor__vert_y );

						////  find a good position for it
						root_this_.mouseover__find_mouseoverposition_that_isnt_offscreen( root_this_, root_this_.mouseover_div__preselected );

					});					

				}

			}

		}




		//////////   
		//////////   generate a mouseover 
		//////////   	
		//////////   



		///////  new version

		root_this_.generate_mouseover_for_graph_bars_within_bars_mouseovers__NEW = function(root_this_, show_or_hide_mouseover, relev_display_area_num, relevant_display_area_iso_code, relev_value_num ){


			if( show_or_hide_mouseover === "show_and_generate_mouseover" ){

				/// select the mouseover area
				root_this_.mouseover_div__preselected = $("#"+this.mouseover_div__outer_div_dom_element__id_name );


				//console.log( ">>>> generate_mouseover_for_graph_bars_within_bars_mouseovers |"+show_or_hide_mouseover+"|for display area #"+relev_display_area_num+" ("+root_this_.commitment_display__n_filterning_n_sorting_areas[ relev_display_area_num ].country_name+") | col info obj #"+root_this_.curr_col_info_column_num_used_for_display_by_menu__index+" ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[root_this_.curr_col_info_column_num_used_for_display_by_menu__index].column_title__text+") | and value num "+relev_value_num+" ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[root_this_.curr_col_info_column_num_used_for_display_by_menu__index].header__value_choice_categories__listed_in_order_of_appearance[ relev_value_num ].header_category_text+")" );


				// col info obj name
				this.curr_col_info_obj_name = root_this_.column_information_objects_listed_in_the_order_of_the_columns[root_this_.curr_col_info_column_num_used_for_display_by_menu__index].column_title__text;

				// col info obj class
				this.curr_col_info_obj_class = root_this_.column_information_objects_listed_in_the_order_of_the_columns[root_this_.curr_col_info_column_num_used_for_display_by_menu__index].column_title__class_name;


				// curr value name
				this.curr_value_name = root_this_.column_information_objects_listed_in_the_order_of_the_columns[root_this_.curr_col_info_column_num_used_for_display_by_menu__index].header__value_choice_categories__listed_in_order_of_appearance[ relev_value_num ].header_category_text;

				// curr value class 
				this.curr_value_class = root_this_.column_information_objects_listed_in_the_order_of_the_columns[root_this_.curr_col_info_column_num_used_for_display_by_menu__index].header__value_choice_categories__listed_in_order_of_appearance[ relev_value_num ].header__class_name_selected;


				// total number of matching commitments for this display area 
				this.curr_abs_count_of_matching_commitments_for_this_display_area = root_this_.commitment_display__n_filterning_n_sorting_areas[ relev_display_area_num ].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].total_num_of_commitments ;


				// how many matching commitments, as an absolute count?
				this.curr_abs_commitments_count_for_given_value__as_absolute_count = root_this_.commitment_display__n_filterning_n_sorting_areas[ relev_display_area_num ].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance[ relev_value_num ].found_instances_of_this_value ;

				//  how many matching commitments, as a percent of all commitments for this value
				this.curr_abs_commitments_count_for_given_value__as_percent_of_all_commitmnets = root_this_.commitment_display__n_filterning_n_sorting_areas[ relev_display_area_num ].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance[ relev_value_num ].found_instances_of_this_value__as_a_decimal__of_total_commitments_for_this_column ;

				// and to convert the above variable into a proper percentage + decimal
				this.curr_abs_commitments_count_for_given_value__as_percent_of_all_commitmnets = parseInt( this.curr_abs_commitments_count_for_given_value__as_percent_of_all_commitmnets * 1000 )/10;

				//console.log("\t - found "+this.curr_abs_commitments_count_for_given_value__as_absolute_count+" ( "+(this.curr_abs_commitments_count_for_given_value__as_percent_of_all_commitmnets*100)+"% ) / "+this.curr_abs_count_of_matching_commitments_for_this_display_area+" matching commitments for this value …!");





				///////// generate the mouseover
				////////

				this.graph_mouseover_html = "";

				/////// add the outer sheell
				this.graph_mouseover_html += "<div id='"+root_this_.mousevoer_graphPg__outer_region+"'>";


				//// add the inner header area
				this.graph_mouseover_html += "<div id='"+root_this_.mousevoer_graphPg__inner__region__header+"'>";

				// add the header text : country
				this.graph_mouseover_html += "<span class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.commitment_data__country_name_index ].column_title__class_name+"'>"+root_this_.commitment_display__n_filterning_n_sorting_areas[ relev_display_area_num ].country_name+" : <br/>"+"</span>";

				// add the header text : col name
				this.graph_mouseover_html += "<span class='"+this.curr_col_info_obj_class+"'>"+this.curr_col_info_obj_name+" : <br/>"+"</span>";

				// add the header text : value name
				this.graph_mouseover_html += "<span class='"+this.curr_value_class+"'>"+this.curr_value_name+" : "+"</span>";






				//// close the header area
				this.graph_mouseover_html += "</div>";

				//// add the inner footer area
				this.graph_mouseover_html += "<div id='"+root_this_.mousevoer_graphPg__inner__statistics__region+"' class='"+this.curr_value_class+"'>";

				// add the footer text : percentage value
				this.graph_mouseover_html += this.curr_abs_commitments_count_for_given_value__as_percent_of_all_commitmnets+"% - ";

				// add the footer text : abs matching commtiment count
				this.graph_mouseover_html += this.curr_abs_commitments_count_for_given_value__as_absolute_count+" / ";

				// add the footer text : abs total commtiment count				
				this.graph_mouseover_html += this.curr_abs_count_of_matching_commitments_for_this_display_area+" commitments";

				//// close the footer area
				this.graph_mouseover_html += "</div>";

				/////// close teh outer shell
				this.graph_mouseover_html += "</div>";



				///// and finally, add html bits  ///

				// empty and fill it
				root_this_.mouseover_div__preselected.empty();
				//  and fill it 
				root_this_.mouseover_div__preselected.append( this.graph_mouseover_html );


				/// and then finally, show the mouseover
				//console.log("///// hiding mouseover");
				//// root_this_.mouseover_div__preselected.css("display", "block");
				root_this_.mouseover_div__SHOW( root_this_ );



			} /// hide the mouseover
			else{

				//console.log("///// hiding mouseover");
				////  root_this_.mouseover_div__preselected.css("display", "none");

				root_this_.mouseover_div__HIDE( root_this_ );
			}



		}





		//////// old version

		root_this_.generate_mouseover_for_graph_bars_within_bars_mouseovers = function(root_this_, show_or_hide_mouseover, relev_display_area_num, relev_value_num ){


			if( show_or_hide_mouseover === "show_and_generate_mouseover" ){

				/// select the mouseover area
				root_this_.mouseover_div__preselected = $("#"+this.mouseover_div__outer_div_dom_element__id_name );


				//console.log( ">>>> generate_mouseover_for_graph_bars_within_bars_mouseovers |"+show_or_hide_mouseover+"|for display area #"+relev_display_area_num+" ("+root_this_.commitment_display__n_filterning_n_sorting_areas[ relev_display_area_num ].country_name+") | col info obj #"+root_this_.curr_col_info_column_num_used_for_display_by_menu__index+" ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[root_this_.curr_col_info_column_num_used_for_display_by_menu__index].column_title__text+") | and value num "+relev_value_num+" ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[root_this_.curr_col_info_column_num_used_for_display_by_menu__index].header__value_choice_categories__listed_in_order_of_appearance[ relev_value_num ].header_category_text+")" );


				// col info obj name
				this.curr_col_info_obj_name = root_this_.column_information_objects_listed_in_the_order_of_the_columns[root_this_.curr_col_info_column_num_used_for_display_by_menu__index].column_title__text;

				// col info obj class
				this.curr_col_info_obj_class = root_this_.column_information_objects_listed_in_the_order_of_the_columns[root_this_.curr_col_info_column_num_used_for_display_by_menu__index].column_title__class_name;


				// curr value name
				this.curr_value_name = root_this_.column_information_objects_listed_in_the_order_of_the_columns[root_this_.curr_col_info_column_num_used_for_display_by_menu__index].header__value_choice_categories__listed_in_order_of_appearance[ relev_value_num ].header_category_text;

				// curr value class 
				this.curr_value_class = root_this_.column_information_objects_listed_in_the_order_of_the_columns[root_this_.curr_col_info_column_num_used_for_display_by_menu__index].header__value_choice_categories__listed_in_order_of_appearance[ relev_value_num ].header__class_name_selected;


				// total number of matching commitments for this display area 
				this.curr_abs_count_of_matching_commitments_for_this_display_area = root_this_.commitment_display__n_filterning_n_sorting_areas[ relev_display_area_num ].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].total_num_of_commitments ;


				// how many matching commitments, as an absolute count?
				this.curr_abs_commitments_count_for_given_value__as_absolute_count = root_this_.commitment_display__n_filterning_n_sorting_areas[ relev_display_area_num ].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance[ relev_value_num ].found_instances_of_this_value ;

				//  how many matching commitments, as a percent of all commitments for this value
				this.curr_abs_commitments_count_for_given_value__as_percent_of_all_commitmnets = root_this_.commitment_display__n_filterning_n_sorting_areas[ relev_display_area_num ].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance[ relev_value_num ].found_instances_of_this_value__as_a_decimal__of_total_commitments_for_this_column ;

				// and to convert the above variable into a proper percentage + decimal
				this.curr_abs_commitments_count_for_given_value__as_percent_of_all_commitmnets = parseInt( this.curr_abs_commitments_count_for_given_value__as_percent_of_all_commitmnets * 1000 )/10;

				//console.log("\t - found "+this.curr_abs_commitments_count_for_given_value__as_absolute_count+" ( "+(this.curr_abs_commitments_count_for_given_value__as_percent_of_all_commitmnets*100)+"% ) / "+this.curr_abs_count_of_matching_commitments_for_this_display_area+" matching commitments for this value …!");





				///////// generate the mouseover
				////////

				this.graph_mouseover_html = "";

				/////// add the outer sheell
				this.graph_mouseover_html += "<div id='"+root_this_.mousevoer_graphPg__outer_region+"'>";


				//// add the inner header area
				this.graph_mouseover_html += "<div id='"+root_this_.mousevoer_graphPg__inner__region__header+"'>";

				// add the header text : country
				this.graph_mouseover_html += "<span class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.commitment_data__country_name_index ].column_title__class_name+"'>"+root_this_.commitment_display__n_filterning_n_sorting_areas[ relev_display_area_num ].country_name+" : <br/>"+"</span>";

				// add the header text : col name
				this.graph_mouseover_html += "<span class='"+this.curr_col_info_obj_class+"'>"+this.curr_col_info_obj_name+" : <br/>"+"</span>";

				// add the header text : value name
				this.graph_mouseover_html += "<span class='"+this.curr_value_class+"'>"+this.curr_value_name+" : "+"</span>";






				//// close the header area
				this.graph_mouseover_html += "</div>";

				//// add the inner footer area
				this.graph_mouseover_html += "<div id='"+root_this_.mousevoer_graphPg__inner__statistics__region+"' class='"+this.curr_value_class+"'>";

				// add the footer text : percentage value
				this.graph_mouseover_html += this.curr_abs_commitments_count_for_given_value__as_percent_of_all_commitmnets+"% - ";

				// add the footer text : abs matching commtiment count
				this.graph_mouseover_html += this.curr_abs_commitments_count_for_given_value__as_absolute_count+" / ";

				// add the footer text : abs total commtiment count				
				this.graph_mouseover_html += this.curr_abs_count_of_matching_commitments_for_this_display_area+" commitments";

				//// close the footer area
				this.graph_mouseover_html += "</div>";

				/////// close teh outer shell
				this.graph_mouseover_html += "</div>";



				///// and finally, add html bits  ///

				// empty and fill it
				root_this_.mouseover_div__preselected.empty();
				//  and fill it 
				root_this_.mouseover_div__preselected.append( this.graph_mouseover_html );


				/// and then finally, show the mouseover
				//console.log("///// hiding mouseover");
				//// root_this_.mouseover_div__preselected.css("display", "block");
				root_this_.mouseover_div__SHOW( root_this_ );



			} /// hide the mouseover
			else{

				//console.log("///// hiding mouseover");
				////  root_this_.mouseover_div__preselected.css("display", "none");

				root_this_.mouseover_div__HIDE( root_this_ );
			}



		}




		///////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////
		///////////////////////
		///////////////////////		bind interactions to the export data and reset buttons
		///////////////////////		


		root_this_.bind_interactions_to_export_data_and_reset_settings_buttons = function( root_this_ ){

			//console.log(">>>> bind_interactions_to_export_data_and_reset_settings_buttons() ");

			//////// bind something to the export data button
			$("#"+root_this_.graph_view__inner_areas__menu_options_area__export_data__button ).click( function(){

				//console.log("CLICK : export data button ");

				root_this_.graph_view__export_data_as_csv( root_this_ );

			});

			//////// bind something to the reset settings button
			$("#"+root_this_.graph_view__inner_areas__menu_options_area__reset_settings ).click( function(){

				//console.log("CLICK : reset graph settings button ");

				root_this_.graph_view__reset_graph_settings( root_this_ );


			});

		}



		///////////////////////
		///////////////////////		helper function : EXPORT DATA - as csv
		///////////////////////		


		root_this_.graph_view__export_data_as_csv = function( root_this_ ){

			//console.log(">>> graph_view__export_data_as_csv() ");


			/// put somewhere to put the data
			this.out_data_for_graph_view = [];

			// fetch the header
			this.out_data_for_graph_view.push( root_this_.graph_view__export_data_as_csv__export_header( root_this_) );



			////////  loop through the relevant counter object 
			//			and export the data

			/// loop through countries


			for( this.curr_display_area_i = 0; this.curr_display_area_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.curr_display_area_i++ ){

				//console.log(" -- working on country num "+this.curr_display_area_i+" - "+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].country_name );

				/// skip this country if it isn't visible
				if( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].is_selected === false ){
					continue;
				}

				// set up somewhere to hold things
				this.curr_country_export_data = [];

				//// add the country name 
				this.curr_country_export_data.push( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].country_name );


				/// loop through the values
				for( this.curr_counter_value_i = 0; this.curr_counter_value_i < root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance.length ; this.curr_counter_value_i++ ){


					/// add the count of found matching commitment instances
					this.curr_country_export_data.push(  root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_counter_value_i ].found_instances_of_this_value );


					/// add the total count of commitments
					this.curr_country_export_data.push(  root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].total_num_of_commitments );


					/// add the percentage of found matching commitments
					//		(generate a percentage with the parseInt( *1000)/10 )
					this.curr_country_export_data.push(  parseInt( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_counter_value_i ].found_instances_of_this_value__as_a_decimal__of_total_commitments_for_this_column*1000)/10 );

					///////////// this.curr_country_export_data.push(  parseInt(root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].found_instances_of_this_value__as_a_decimal__of_total_commitments_for_this_column*1000)/10 );

				}


				// then add the generated country line to the out array 
				this.out_data_for_graph_view.push( this.curr_country_export_data.join( root_this_.export_data__out_array__variable_separator_symbol )  );
			}


			// save as an out blob
			this.out_data__blob = new Blob( [ this.out_data_for_graph_view.join( root_this_.export_data__out_array__line_separator_symbol ) ], { type : "text/plain;charset=utf-8"} );

			// and send to browser
			/////  saveAs( this.out_data_for_graph_view, root_this_.export_data__filename_of_exported_data );
			saveAs( this.out_data__blob, root_this_.export_data__filename_of_exported_data );

			//////  return this.out_data_for_graph_view;

		}



		///////////
		/////////// helper function for export data - export header


		root_this_.graph_view__export_data_as_csv__export_header = function( root_this_ ){

			//console.log(">>>>> graph_view__export_data_as_csv__export_header() ");

			this.generated_header_data = [];

			// add the first item
			this.generated_header_data.push("Country name");

			////// curr col info obj col num 
			// curr_col_info_column_num_used_for_display_by_menu__index

			/// go through the value counter object of the first display area
			//		and fetch the header values from there
			for( this.curr_counter_value_i = 0; this.curr_counter_value_i < root_this_.commitment_display__n_filterning_n_sorting_areas[0].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance.length ; this.curr_counter_value_i++ ){

					// the found count 
					this.generated_header_data.push( root_this_.commitment_display__n_filterning_n_sorting_areas[0].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_counter_value_i  ].header_category_text+" - matching commitments count" );

					// the total count 
					this.generated_header_data.push( root_this_.commitment_display__n_filterning_n_sorting_areas[0].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_counter_value_i  ].header_category_text+" - total commitments count" );

					// the percentage
					this.generated_header_data.push( root_this_.commitment_display__n_filterning_n_sorting_areas[0].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_counter_value_i  ].header_category_text+" - matching commitments as percentage" );
			}


			return this.generated_header_data.join( this.export_data__out_array__variable_separator_symbol );

		}


		///////////////////////
		///////////////////////		helper function : RESET GRAPH SETTINGS
		///////////////////////	


		root_this_.graph_view__reset_graph_settings = function( root_this_ ){

			//console.log(">>> graph_view__reset_graph_settings() ");


			///////
			/////// reset Select Performance Area

			// change the display by meta data object to the default choice
			root_this_.set_display_by_col_info_obj_val_acc_to_data( root_this_, root_this_.display_by_menu__default_selected_meta_data_and_menu_item_index );
			//// and then update the menu please :) 
			root_this_.update_display_by_menu_options_according_to_data( root_this_ );
			/// set the global variable as to which 
			//		col info object is selected
			root_this_.set_which_col_info_obj_is_CURR_being_used_for_the_graph_bars( root_this_, root_this_.display_by_menu__default_selected_meta_data_and_menu_item_index );

			/// finally… redisplay items
			//////////   root_this_.change_update__display_areas__bars_and_bars_within_main_bar__according_to_data( root_this_ );
			/// and update the legends too please ;) 
			//////////// root_this_.update_legend_display_given_current_view( root_this_ );
			//// bind interactive elemnts to the bars
			////// /// and bind interactive things to the bars ( eg. mouseovers acc to data )
			///////////// root_this_.graph_view__bind_interactions_to_bars_within_bars( root_this_ );
			////////  aaaaand ..... update the graph header please
			////////////// root_this_.graph_title__update_please( root_this_ );




			///////
			/////// reset Select Filters

			//////////// root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_false__and__NO_DISPLAY_UPDATE( root_this_ );
			//// alternative
			///////  root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_false__and__update_display( root_this_ );
			/// a version of the abouve the doesn't recount the matchign commitments
			root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_false__and__update_display__BUT_DONT_RECOUNT( root_this_ );
			// setting things to true instead… 
			////root_this_.values_menu__reset_all_values_gc_ap_and_tags__to_TRUE__and__update_display__BUT_DONT_RECOUNT( root_this_ );

			// and reset the search all/some buttons
			root_this_.values_menu__RESET_DATA_AND_VISUAL_APPEARANCE__in_searchallSOMEtags__options( root_this_ );


			///////
			/////// reset Select country/region

			// set the relevant values
			root_this_.set_ALL_country_column_info_objects_to_this_value( root_this_, true );
			// update the display of the country values
			root_this_.set_ALL_country_menu_items_according_to_the_data( root_this_ );
			// update the visibility index of the country display areas
			root_this_.regions__set_display_area_obj_visibility_flags_according_to_country_col_info_obj_data( root_this_ );		
			// update the locations of the bars according to in/visible regions
			///////////  root_this_.graphing_ara__set_bar_areas_locations_according_to_order_of_display_areas__NEW( root_this_ );		
			//// and update the count of the metaching/total num of commitments
			root_this_.recount_and_redisplay__matching_and_total_num_of_commitments( root_this_ );





			///////
			/////// reset Sort by
			root_this_.sorting_menu__reset_values_and_display( root_this_ );




			

			////////////// and then 
			//////// redraw / redisplay please

			//// update the counter please! 
			////////////// root_this_.do_value_counting_for_matching_commitments_for_graph_view( root_this_ );
			///// resort and reposition the bars if doing numeric sorting
			//////////////  root_this_.sorting___sort_and_calc_relev_bar_position_and_move_bars__if_high_low_sorting_setting_active( root_this_ );	


			////////// and finally... redisplay according to data
			root_this_.update_graph_content_according_to_menu_settings( root_this_ );			

		}



		///////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////
		///////////////////////
		///////////////////////		update the graph title 
		///////////////////////		



		root_this_.graph_title__update_please = function( root_this_ ){

			//console.log(">>>> graph_title__update_please() ");


			///// select
			this.graph_title = $("#"+root_this_.graph_view__inner_areas__graphing_area__graph_title_area );


			//// update 
			this.graph_title.text( root_this_.column_information_object_for__display_by__menu_choices[0].header__value_choice_categories__listed_in_order_of_appearance[ root_this_.display_by_menu__which_curr_item_is_selected_i ].header_category_text  );
		}




		///////////////////////////////////////////////////////////////
		///////////////////////
		///////////////////////		generate vertical axis items
		///////////////////////		


		root_this_.setup_vertical_axis_bits = function( root_this_ ){

			//console.log(">>>>> setup_vertical_axis_bits() ");

			// where we keep things
			this.axis_marks_html = "";

			for( this.curr_vert_axis_mark = 0 ; this.curr_vert_axis_mark < root_this_.vertical_axis__num_of_marks ; this.curr_vert_axis_mark++ ){
				
				////// add the outer div
				this.axis_marks_html += "<div class='"+root_this_.graph_view__vertical_axis__single_mark__outer+"'>";				


				// add the text div
				this.axis_marks_html += "<div class='"+root_this_.graph_view__vertical_axis__single_mark__inner__text_div+"'>123%";				

				/// close the text div
				this.axis_marks_html += "</div>";

				// add the mark div
				this.axis_marks_html += "<div class='"+root_this_.graph_view__vertical_axis__single_mark__inner__mark_div+"'>";		

				/// close the mark div
				this.axis_marks_html += "</div>";


				//////  close the outer div
				this.axis_marks_html += "</div>";

			}

			////   //console.log("\t - appending |"+this.axis_marks_html+"|");

			// append it to the outer area 
			$("#"+root_this_.graph_view__inner_areas__graphing_area__vertical_axis_outer_block).append( this.axis_marks_html );

		}



		//////////////
		//////////////		update vertical axis items
		//////////////


		root_this_.update_vertical_axis_marks = function( root_this_ ){

			//console.log(">>>> update_vertical_axis_marks() ");

			// select the marks
			this.vertical_axis_marks = $("#"+root_this_.graph_view__inner_areas__graphing_area__vertical_axis_outer_block ).find( " ."+root_this_.graph_view__vertical_axis__single_mark__outer );

			// select the texts
			this.vertical_axis_mark__text_areas = $("#"+root_this_.graph_view__inner_areas__graphing_area__vertical_axis_outer_block ).find( " ."+root_this_.graph_view__vertical_axis__single_mark__inner__text_div );


			//// loop and set them up 
			for( this.curr_vert_axis_mark_i = 0; this.curr_vert_axis_mark_i < this.vertical_axis_marks.length; this.curr_vert_axis_mark_i++ ){

				// fetch the bottom height
				/// this.curr_bottom_height_y = this.curr_vert_axis_mark_i * 50;
				this.curr_bottom_height_y = (( (this.vertical_axis_marks.length-1) - this.curr_vert_axis_mark_i)/(this.vertical_axis_marks.length-1) ) * root_this_.graphing__CURR_height_of_bars_y;

				this.curr_percentage = parseInt((( (this.vertical_axis_marks.length-1) - this.curr_vert_axis_mark_i)/(this.vertical_axis_marks.length-1) ) * 100 ) ;

				///  this.curr_bottom_height_y = (( this.vertical_axis_marks.length - this.curr_vert_axis_mark_i )*root_this_.graphing__CURR_height_of_bars_y)  );
				//console.log("working on mark #"+this.curr_vert_axis_mark_i+" | suggesting bottom height of "+this.curr_bottom_height_y );


				/// set the location
				this.vertical_axis_marks.eq( this.curr_vert_axis_mark_i ).animate(
											{ 	bottom: this.curr_bottom_height_y+"px",
												opacity: 0.5,
												width: root_this_.vertical_axis__outer_outer_area__horiz_dist_to_graphin_area_edge,
											}, root_this_.graphing__bar_animation__duration_ms  );

				// change the text
				this.vertical_axis_mark__text_areas.eq( this.curr_vert_axis_mark_i ).text( this.curr_percentage+"%" );
			}

		}




		//////////////////////////////////////////////////
		///////////////////////
		///////////////////////		functino to update bars display
		///////////////////////		according to display settings
		///////////////////////		incl:
		//								- do values counting
		//								- change the display areas within bars
		//								- update legend
		//								- bind bars mouseovers
		//								- do the sorting and reposition bars
		//								- update graph title		

		root_this_.update_graph_content_according_to_menu_settings = function( root_this_){

			//console.log(">>>> update_graph_content_according_to_menu_settings() ");

			//////// redisplay please

			//// update the counter please! 
			root_this_.do_value_counting_for_matching_commitments_for_graph_view( root_this_ );

			/// finally… redisplay items
			root_this_.change_update__display_areas__bars_and_bars_within_main_bar__according_to_data( root_this_ );

			/// and update the legends too please ;) 
			root_this_.update_legend_display_given_current_view( root_this_ );

			//// bind interactive elemnts to the bars
			////// /// and bind interactive things to the bars ( eg. mouseovers acc to data )
			root_this_.graph_view__bind_interactions_to_bars_within_bars( root_this_ );


			///// resort  the bars if doing numeric sorting
			root_this_.sorting___sort_and_calc_relev_bar_position_and_move_bars__if_high_low_sorting_setting_active( root_this_ );				

			//// reposition the bars
			root_this_.graphing_ara__set_bar_areas_locations_according_to_order_of_display_areas__NEW( root_this_ );

			////////  aaaaand ..... update the graph header please
			root_this_.graph_title__update_please( root_this_ );
		}



		///////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////
		///////////////////////
		///////////////////////		the main data loading function
		///////////////////////			
		///////////////////////


		root_this_.setup_this_object__basic__on_load = function(){

			// hello
			//console.log(">>>> setup_this_object__basic__on_load for object |"+root_this_.name_of_this_object+"|");

			//// finds the relevant column numbers of the index+visibility columns
			this.find_the_relevant_col_numbers_for_the_index_and_visibility_cols();

			//// set up objects describing the content of the columns
			this.initialise__table_column_objects__commitment_data();

			//// set up the helper obejct … 
			////////// this.set_up_and_initialise__local_version_of_helper_object_and_functionality( this );
			
		}





		/////////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////////
		///////////////////////
		///////////////////////		the main html and display setup & 
		///////////////////////			removal function
		///////////////////////


		//// setup 

		root_this_.setup_this_object__for_display__ie_load_and_parse_data__and__draw_html = function( root_this_ ){

			// hello!
			//console.log(">>>>>> setup_this_object__for_display__ie_load_and_parse_data__and__draw_html() of object |"+root_this_.name_of_this_object+"|");


			// the CURRENTLY SELECTED views and datasets
			root_this_.curr_desired_display_obj_as_text = root_this_.possible_objects__graph_view ;
			root_this_.curr_desired_dataset_as_text = root_this_.possible_datasets__commitments;		



			/// and… SET which class and view we've got an
			root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS_process__CURRENT_class_name = root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS_commitments__dom_elmt__class_name ;
			// and set the views 
			$("#"+root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS__dom_elmt__id_name).attr("class", root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS_graph_commitments__dom_elmt__class_name );





			///    load the data?
			////////////////  actual data laoding and display !
			///
			/// if the data's not loaded and parsed, do load it!
			if( root_this_.is_relev_data_loaded_and_formatted === true ){

				/// skip the loading and just do the drawing

				////  get the commitment display going
				//		- set listing to country-specific 
				//		- print some commitments
				//////////////  root_this_.set_up_country_centric_display_areas__incl_divs__n__print_commitments( root_this_ );		

				/// help area : set up relevant div areas 
				//////  root_this_.our__help_functionality_object.help_area__set_up__main_html_bits__and_remove_previous_html_bits_from_before( root_this_.our__help_functionality_object );		
				//////  console.log( root_this_.our__help_functionality_object );					

			}// if the data's not loaded
			// then load it and draw the html
			else if( root_this_.is_relev_data_loaded_and_formatted === false ){

				//// load and draw the data ( though this is done in the parent element, for some reason )
				///////////////////////   root_this_.main_parent_object_this.load_table_data__for_PLEASE_PLEASE_SPECIFY_data( root_this_.main_parent_object_this, false );
				//
				/// parse the loaded data 
				//
				// The last argument is the last is whether to use 
				//	NR commitments or not.				
				root_this_.format_loaded_data_according_to_the_relevant_column_order__NEW( root_this_, root_this_.main_parent_object_this.table_data__RAW__commitmentData_edition, false );

				/// set up country centric display area objects
				// ( we won't do commitment centric doings here - not quite needed ;)
				root_this_.set_commitment_arrangement_to_country_centric( root_this_ );


				/// set the country column values to include
				//		the different found countries 
				//		( as extracted from the list of display area objects )
				root_this_.set_country_info_col_obj_values_to_display_area_countries( root_this_ );


				//// set up the helper obejct … 
				///////// this.set_up_and_initialise__local_version_of_helper_object_and_functionality( this );


			}



			/// check if the graph page is already set up…!
			/// 	and only set this up if if it DOES NOT EXIST!
			//
			if( $("#"+root_this_.graph_view__outer_area_id).length === 0 ){

				////// set up the main outer areas
				root_this_.add_main_html_outline_bits( root_this_ );	

				/// and add the menu area 
				root_this_.add_menu_area_texts_n_outer_menu_area_bits( root_this_ );

				/// add bits to the graphing area
				root_this_.add_actual_graphing_area_bits( root_this_ );

				/// set up the DISPLAY BY col description obejcts please 
				// ( only do this is it hasn't been set up before )
				if( root_this_.has_this_object_been_set_up_visuall_before === false ){
					root_this_.setup_col_information_object_for__menu__display_by( root_this_ );
				}



				////////// zero the value choices please
				// set all values to false 
				// ( only do this is it hasn't been set up before )
				if( root_this_.has_this_object_been_set_up_visuall_before === false ){
					root_this_.set_all_filtering_values__to_given_value( root_this_, false );
				}



				///////// Display by menu setup

				//// setup the display by menu
				root_this_.setup_display_by_menu_html_and_interactions( root_this_ );
				/// and bind the interactive things to it!…please
				root_this_.bind_interactions_to_the_display_by_menu( root_this_ );



				//////// Values, challenges, tags, etc.. menu

				/// set up the basic bits
				root_this_.setup__values_challenges_tags__menu__general_setup( root_this_ );


				////////  Regions menu setup

				root_this_.setup_regions_menu__general_setup( root_this_ );


				///////  Sorting menu setup

				root_this_.setup_sorting_menu__general_setup( root_this_ );



				///// set up the bars

				root_this_.graphing_area__set_up_bar_html_elements( root_this_ );


				//// set up the graph title please
				root_this_.graph_title__update_please( root_this_ );


				/// and set up the vertical axis bits
				root_this_.setup_vertical_axis_bits( root_this_ );
				// update the vertical marks
				root_this_.update_vertical_axis_marks( root_this_ );



				///// and give them an initial position 

				///   root_this_.graphing_ara__set_bar_areas_locations_according_to_order_of_display_areas( root_this_ );
				/////////  root_this_.graphing_ara__set_bar_areas_locations_according_to_order_of_display_areas__NEW( root_this_ );
							// update the graph items…
				root_this_.update_graph_content_according_to_menu_settings( root_this_ );


				/// updat the legend text too please
				root_this_.recount_and_redisplay__matching_and_total_num_of_commitments( root_this_ );


				//// bind interactions to the export data and reset settings buttons

				root_this_.bind_interactions_to_export_data_and_reset_settings_buttons( root_this_ );
				


				///////////////   at the end
				//
				/////// indicate that this has been set up visually earlier
				// 			( useful to know so one doesn't reset the filters )
				root_this_.has_this_object_been_set_up_visuall_before = true;


			} else{
				//console.log("--- sorry, not setting up the graph page, as bits of it already EXIST!... sorrys!");
			}

		}


		//// remove

		root_this_.remove_basic_html_elements_for_this_view = function( root_this_ ){

			// hello!
			//console.log(">>>>>> remove_basic_html_elements_for_this_view() of object |"+root_this_.name_of_this_object+"|");


			//  remove the main object 
			$( "#"+root_this_.graph_view__outer_area_id ).off();
			$( "#"+root_this_.graph_view__outer_area_id ).remove();

		}


		// }

	}






	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	//////////////////////////////////
	//////////////////////////////////  INITIALISE various set up bits!





	////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////
	///////////////////////////
	///////////////////////////		initialisations
	///////////////////////////
	/////////////////////////////////////////////////////////


	// finalyl…
	//console.log("_________ setting up graph view! ________ ");

	our_irm_vis.our_graph_view_obj__commitments_data_edition = new our_irm_vis.table_view_obj();
	our_irm_vis.our_graph_view_obj__commitments_data_edition.main_parent_object_this = our_irm_vis;
	our_irm_vis.our_graph_view_obj__commitments_data_edition.name_of_this_object = "graph view : commitment view edition";	

	this.setup_relevant_column_description_objects__graph_view_commitment_data_edition( our_irm_vis.our_graph_view_obj__commitments_data_edition );

	/// set up some functions in the graph view object
	this.add_relevant_functions_to_graph_view_obj( our_irm_vis.our_graph_view_obj__commitments_data_edition );

	// and then run it :) 
	our_irm_vis.our_graph_view_obj__commitments_data_edition.test_print( our_irm_vis.our_graph_view_obj__commitments_data_edition, "hellow : graph view commitment data edition!" );

}