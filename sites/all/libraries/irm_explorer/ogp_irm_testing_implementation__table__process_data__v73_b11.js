


var print_hellow_2 = function( text_to_print ){

	console.log("______ hellow world! _________- table view : process data edition!!!!  >>> "+text_to_print+" <<<<<");

}


var test_obj = function(){

	console.log(">> >hellow, test object << ");

}




var setup_table_view_process_data_edition_object = function(){


	/////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////
	//////////////////////
	//////////////////////   object modifications 
	//////////////////////
	//////////////////////
	/////////////////////////////////////////////////



	/////////////   set up the column description objects to suit
	//					the graph view - commitment data - elements

	this.setup_relevant_column_description_objects__table_view__process_data__edition = function( root_this_ ){  


		// hellow 
		console.log(">>>>  setup_relevant_column_description_objects__table_view__process_data__edition() ");


		/////////////  modify what's in the column description object model
		root_this_.column_description_obj.random_value_that_could_be_useful = true;



		/////////////  initialise the table column objects
		root_this_.initialise__table_column_objects__PROCESS_data();

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


		console.log(">>>.  new object : add_relevant_functions_to_graph_view_obj() ");



		//
		root_this_ = graph_view_obj;


		// parent this
		/////  this.main_parent_object_this = main_parent_object_this__reference;
		root_this_.main_parent_object_this ;




		////////  data modifications

		root_this_.num_of__column_information_objects_and_columns = 15;

		


		////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////  various general variables
		////////////////////////////////////////////////////////




		////////	name of this object
		////////
		////  root_this_.name_of_this_object = "blank_name";


		///////  
		/////////  modes - general
		////////
		/////////

		//  just to fool-proof the values a bit - for the country/commitment centric setting below
		root_this_.curr_commitment_viewing_mode__commitmentCentric_value = "commitment_centric";
		root_this_.curr_commitment_viewing_mode__countryCentric_value = "country_centric";

		//// indicates the current preference for 
		//		commitment organisation - commitment- or country-centric
		//    possible values include : "commitment_centric" / "country_centric"
		root_this_.curr_commitment_viewing_mode__country_or_commitment_centric_mode = root_this_.curr_commitment_viewing_mode__countryCentric_value;

		///// sorting
		// has the sorting setting been set at all?
		root_this_.are_we_sorting = false;
		// which column are we sorting by
		root_this_.sorting_by_col_num = 0;
		// and in what direction?
		root_this_.direction_of_sorting = "DOWN" ; 



		////////
		//////// objects
		///////////
		///////////

		// the main object
		/////  root_this_.main_parent_object_this = main_parent_object_this__reference;
		root_this_.main_parent_object_this ;


		////  commitment display object(s)
		//		- the container of the dom and the data for 
		//		commitments, whether listed commitment-centrically 
		//		( in which case there's only one object)
		//			or country-centrically
		//			( in which case there is one object per country )
		root_this_.commitment_display__n_filterning_n_sorting_areas = [];




		/////////   
		/////////   data
		//////////////
		///////////////


		/////  is the data loaded…?
		//
		// 	 a flag that indicates whether the data 
		//		for the object has been loaded and formatted
		root_this_.is_relev_data_loaded_and_formatted = false;


		////  the re-formatted data
		// 		...ready to go into either the 
		//		commitments-listed-alphabetiacally-form
		//		or the sorted-alphabetically by country form
		root_this_.table_data__formatted_according_to_relevant_column_order ;

		////  this is the final form of the data
		//		before it ends up in the table
		//		...arranged :
		//			- commitment-centrically ( alphabetically )
		//			- country-centrically ( by country, alphabetically )
		root_this_.table_data_arranged_commitment_or_country_centric;


		/////////   
		/////////   export data
		////////	


		root_this_.export_data__filename_of_exported_data = "selected_irm_data.csv";

		//  different definitions of possible commitments to export in the export data function
		root_this_.export_data__diff_kinds_of_data_to_export__matching = "matching";
		root_this_.export_data__diff_kinds_of_data_to_export__NONmatching = "NONmatching";
		root_this_.export_data__diff_kinds_of_data_to_export__unfiltered = "unfiltered";

		//  and the chosen set of variables is indicated here 
		root_this_.sorts_of_commitments_to_export = root_this_.export_data__diff_kinds_of_data_to_export__matching ;

		//  out data separator symbol
		root_this_.export_data__out_array__variable_separator_symbol = ";";
		//  out data line seprator symbol
		root_this_.export_data__out_array__line_separator_symbol = "\n";



		////////
		////////	DATA
		////////  total matching/absolute number commitment count
		////////

		root_this_.total_commitment_count__matching_commitment_count = 0;
		root_this_.total_commitment_count__all_commitments_count = 0;



	
		////////
		/////////  DOM objects ( for the table view )
		/////////





		/// the header main area
		// -- that badass header with search options as well as the header of the table
		root_this_.table_view_main_header_area__dom_elmt ; 
		root_this_.table_view_main_header_area__dom_id_name =  "table_view_main_header_area__dom_elmt"; 
		// the height
		root_this_.table_view_main_header_area__dom_elmt__height_px_y = -99;
		root_this_.table_view_main_header_area__dom_elmt__top_px_y = -99;

		///// the height that triggers the javascript header manipulation
		root_this_.scrolltop_height_triggering_VERTICAL_javascript_HEADER_REPOSITIONING__offset = -100;

		/// the class name of all the outer DOM elements for this object ( i.e. all the elements below )
		//		- eg. the table header/ country listing / commitment area / search / menu areas
		//  - good for showing/hiding things from this table.
		root_this_.table_view__main_outer_areas__class_name = "table_view_main_outer_areas__dom_elmt";

		// and within this, the search and other options area above the table 
		root_this_.table_view_main_header_area__search_n_options_area__dom_elmt ;
		root_this_.table_view_main_header_area__search_n_options_area__dom_id_name = "table_view_main_header_area__search_n_options_area__dom_elmt" ;

		// and within the main header area, the columns!
		root_this_.table_view_main_header_area__column_headers_area__dom_elmt ;
		root_this_.table_view_main_header_area__column_headers_area__dom_id_name = "table_view_main_header_area__column_headers_area__dom_elmt";

		///// the text search field
		root_this_.table_view_main_header_area__search_n_options_area__text_search_field__id_name = "table_view_main_header_area__search_n_options_area__text_search_field__id_name" ;

		///// the text search field - INPUT AREA
		root_this_.table_view_main_header_area__search_n_options_area__text_search_field__INPUT_AREA__id_name = "table_view_main_header_area__search_n_options_area__text_search_field__INPUT_AREA__id_name" ;

		///// the text search field - SEARCH ICON inside the text area
		root_this_.table_view_main_header_area__search_n_options_area__text_search_field__SEARCH_ICON__id_name = "table_view_main_header_area__search_n_options_area__text_search_field__SEARCH_ICON__id_name";

		///// the reset filters button
		root_this_.table_view_main_header_area__search_n_options_area__reset_settings_button__id_name = "table_view_main_header_area__search_n_options_area__reset_settings_button__id_name" ;

		///// the export data button
		root_this_.table_view_main_header_area__search_n_options_area__export_data_button__id_name = "table_view_main_header_area__search_n_options_area__export_data_button__id_name" ;



		/////// moueover region

		/// the mouseover region 
		// the actual pre-selected mouseover div
		root_this_.mouseover_div__preselected ;

		root_this_.mouseover_div__outer_div_dom_element__id_name = "mouseover_div__outer_div_dom_element__id_name";

		/// the mouseover - header
		root_this_.mouseover_div__header__outer_area = "mouseover_div__header__outer_area";

		/// the mouseover - body 
		root_this_.mouseover_div__body__outer_area = "mouseover_div__body__outer_area";

		/// the class that makes this visible
		root_this_.mouseover_div__outer_div_dom_element__IS_VISIBLE = "mouseover_div__outer_div_dom_element__IS_VISIBLE";

		//// the class that makes this invisible
		root_this_.mouseover_div__outer_div_dom_element__IS_INVISIBLE = "mouseover_div__outer_div_dom_element__IS_INVISIBLE";


		//// within the moueover boxes


		// - summary statistics mouseover

		// an individual detailed breadown outer row
		root_this_.mouseover_summary_statistics__breakdown_statistics_row = "mouseover_summary_statistics__breakdown_statistics_row";

		// the value name
		root_this_.mouseover_summary_statistics__breakdown_statistics_row__value_name = "mouseover_summary_statistics__breakdown_statistics_row__value_name";

		// detailed breakdown row : percent number
		root_this_.mouseover_summary_statistics__breakdown_statistics_row__percent_num = "mouseover_summary_statistics__breakdown_statistics_row__percent_num";

		// detailed breakdown row : absolute found relevant commitments for this value number
		root_this_.mouseover_summary_statistics__breakdown_statistics_row__abs_found_commitments_num = "mouseover_summary_statistics__breakdown_statistics_row__abs_found_commitments_num";

		// detailed breakdown row : absolute number of commitments marching given value
		root_this_.mouseover_summary_statistics__breakdown_statistics_row__abs_num_of_commitments= "mouseover_summary_statistics__breakdown_statistics_row__abs_num_of_commitments";

		



		///// (dom names) Country operations menu

		// country operations - top menu
		root_this_.country_operations_menu__top_item__class_name = "country_operations_menu__top_item";

		// country operations - drop down menu - outer area
		root_this_.country_operations_menu__drop_down_area__outer__class_name = "country_operations_menu__drop_down_area__outer";

		/// general menu item classes 

		// country operations - drop down menu - inner area - general menu option item
		root_this_.country_operations_menu__drop_down_area__menu_item__general_menu_item__class_name = "country_operations_menu__drop_down_area__general_menu_item";

		// country operations - drop down menu - inner area - general menu option item - SELECTED EDITION
		root_this_.country_operations_menu__drop_down_area__menu_item__SELECTED__class_name = "country_operations_menu__drop_down_area__general_menu_item__SELECTED";

		// country operations - drop down menu - inner area - general menu option item - HOVER edition
		root_this_.country_operations_menu__drop_down_area__menu_item__HOVER__class_name = "country_operations_menu__drop_down_area__general_menu_item__HOVER";

		//// special item classes
		//
		// country operations - drop down menu - inner area - show summmary statistics line
		root_this_.country_operations_menu__drop_down_area__menu_item__showSummaryStatistics__class_name = "country_operations_menu__drop_down_area__menu_item__showSummaryStatistics";

		// country operations - drop down menu - inner area - menu_option_num_2
		root_this_.country_operations_menu__drop_down_area__menu_item__menuItemNum_two__class_name = "country_operations_menu__drop_down_area__menu_item__menuItemNum_two";


		// country operations - drop down menu - inner area - menu_option_num_3
		root_this_.country_operations_menu__drop_down_area__menu_item__menuItemNum_three__class_name = "country_operations_menu__drop_down_area__menu_item__menuItemNum_three";

		// country operations - drop down menu - inner area - menu_option_num_4
		root_this_.country_operations_menu__drop_down_area__menu_item__menuItemNum_four__class_name = "country_operations_menu__drop_down_area__menu_item__menuItemNum_four";


		// country operations - drop down menu - inner area - Show only country statistics
		root_this_.country_operations_menu__drop_down_area__menu_item__ShowCountryStatisticsOnly__class_name = "country_operations_menu__drop_down_area__menu_item__ShowCountryStatisticsOnly__class_name";

		// country operations - drop down menu - inner area - Show only commitments
		root_this_.country_operations_menu__drop_down_area__menu_item__ShowCommitmentsOnly__class_name = "country_operations_menu__drop_down_area__menu_item__ShowCommitmentsOnly__class_name";

		// country operations - drop down menu - inner area - Show selected countries only
		root_this_.country_operations_menu__drop_down_area__menu_item__showSelectedCountriesOnly__class_name = "country_operations_menu__drop_down_area__menu_item__showSelectedCountriesOnly__class_name";

		// country operations - drop down menu - inner area - Reset country settings!
		root_this_.country_operations_menu__drop_down_area__menu_item__resetCommitmentDisplaySettings__class_name = "country_operations_menu__drop_down_area__menu_item__resetCommitmentDisplaySettings__class_name";



		// country operations - drop down menu - inner area - menu_option_num_3

		// country operations - drop down menu - inner area - menu_option_num_4

		// country operations - drop down menu - inner area - menu_option_num_5

		// country operations - drop down menu - inner area - menu_option_num_6



		///// country operations : do we have the menu or not?
		//
		root_this_.do_we_have_a_country_operations_menu = false;



		////// do we have a text search field
		root_this_.do_we_have_a_text_search_field = false;



		//// the country names area
		//
		//  BELOW the header
		root_this_.table_view__countryNamesEtAl_area__belowHeadersArea__dom_elmt ; 
		root_this_.table_view__countryNamesEtAl_area__belowHeadersArea__id_name =  "table_view__countryNamesEtAl_area__belowHeadersArea__id_name" ; 
		// the width
		root_this_.table_view__countryNamesEtAl_area__dom_elmt__width = -99;
		// for the 'normal' distance of the country names relative to the header
		root_this_.table_view__countryNamesEtAl_area__dom_elmt__normal_distance_from_header_top__dy = -99;

		// country names area - INSIDE the header area 
		//		- holding the headers for the country listing, 
		//			such that they don't scroll out of view
		// dom element reference
		root_this_.table_view__countryNamesEtAl_area__headersArea__dom_elmt ; 
		//  dom id name
		root_this_.table_view__countryNamesEtAl_area__headersArea__id_name =  "table_view__countryNamesEtAl_area__headersArea__id_name" ; 

		// column description objects WITHIN the country listings header
		root_this_.table_view__countryNamesEtAl_area__headersArea__columnHeader__dom_elmt ; 
		root_this_.table_view__countryNamesEtAl_area__headersArea__columnHeader__id_name = "table_view__countryNamesEtAl_area__headersArea__columnHeader__dom_elmt" ; 



		// main commitments listing area
		root_this_.table_view__main_commitments_listing_area__dom_elmt ; 
		root_this_.table_view__main_commitments_listing_area__id_name =  "table_view__main_commitments_listing_area__id_name" ; 
		// the height difference between the top of the header and the top of the commitments listing
		//	- good for later positioning
		root_this_.table_view__main_commitments_listing_area__dom_elmt__normal_distance_from_header_top__dy = -99;



		////////  column headers 
		////////		- dom thingies
		////////

		root_this_.column_header_outer_object_general_class__class_name = "column_header_outer_object_general_class__class_name";




		////////
		//// data parameters
		///////////
		///////////

		// where is the header?
		root_this_.raw_data__header_row_num = 1;

		// which is the first data row
		root_this_.raw_data__first_data_row_num = 1;

		/// NOTE NOTE NOTE : TEMPORARY 
		// which is the last row one should work on 
		// HOPEFULLY this'll be replaced by some variable/function to check 
		//	for the last row...
		root_this_.raw_data__last_row_to_work_on = 66;


		///// column numbers

		root_this_.parsed_data__col_num_of__commitment_title = 1;
		root_this_.parsed_data__col_num_of__full_commitment_text = 2;


		//// data parameters : text seach related
		//
		//// which column has the commitment title
		root_this_.raw_data__col_num_of__the_commitment_title_col = 1;
		//
		//// which column has the commitment title
		root_this_.raw_data__col_num_of__full_text_col = 2;



		////////
		/////// formatted data
		///////////
		///////////


		// where is the tags column
		root_this_.index_of_tags_column_in_formatted_data_rows = 4;

		///// the index and visibility columns
		// 		 in each formatted data row

		// how far from the data rows is the index column
		root_this_.index_offset_from_a_data_rows_data_columns__of_row_INDEX_col = 1;
		root_this_.final_col_num_of_INDEX_column = -1;

		// how far from the data rows is the visibility column
		root_this_.index_offset_from_a_data_rows_data_columns__of_row_VISIBILITY_col = 2;
		root_this_.final_col_num_of_VISIBILITY_column = -2;




		////////  tags
		////////		-
		////////

		// what's the max number of tags one can have selected?
		root_this_.tag__max_number_of_tags_that_can_be_selected_at_once = 4;
		



		///////////				 			////////////
		///////////  filtering & sorting   ////////////
		///////////						  ////////////


		///////////				
		///////////  filtering settings
		///////////									

		/* - not quite needed given the data processing order-of-processing below --
		root_this_.data_processing__are_we_doing_basic_values_filtering = true;
		root_this_.data_processing__are_we_doing_tags_filtering = true;
		root_this_.data_processing__are_we_doing_text_search_filtering = false;
		*/

		/// the current text search string 
		root_this_.text_search__current_search_string = "";


		// just to make sure these things are spelled right
		root_this_.data_processing__text_search_filtering = "text_search_filtering";
		root_this_.data_processing__basic_value_filtering_value = "basic_value_filteirng";
		root_this_.data_processing__tags_filtering = "tags_filtering_filtering";					
		root_this_.data_processing__sorting = "sorting";

		// the order of which things are processed 
		root_this_.order_of_commitment_data_processing__table_edition = [ root_this_.data_processing__basic_value_filtering_value, root_this_.data_processing__sorting ];
		///////    root_this_.order_of_commitment_data_processing__table_edition = [ root_this_.data_processing__text_search_filtering, root_this_.data_processing__tags_filtering ];
		// and the graph edition of the filtering
		root_this_.order_of_commitment_data_processing__graph_edition = [ root_this_.data_processing__tags_filtering, root_this_.data_processing__basic_value_filtering_value ];

		/// TESTING WITH ONE FILTERING AT A TIME
		///////  root_this_.order_of_commitment_data_processing__graph_edition = [ root_this_.data_processing__basic_value_filtering_value ];
		//////   root_this_.order_of_commitment_data_processing__graph_edition = [ root_this_.data_processing__tags_filtering ];


		///////////			
		///////////   column names  / types 
		///////////			

		// what's a column type for regular filtering? - >> a country name column
		root_this_.column_type_of_just_text = "country_name_column";

		// what's a column type for regular filtering? - >> a Text column
		root_this_.column_type_of_just_text = "text_column";

		// what's a column type for regular filtering? - >> Basic filter column <<
		root_this_.column_type_for_regular_filtering = "basic_filter_column";

		// what's a relevant column type for Tags filtering? 
		root_this_.column_type_for_TAGS_filtering = "tags_column";


		// valid column types for text filtering!
		root_this_.relevant_column_types_for__text_filtering = [ root_this_.column_type_of_just_text ];


		// valid column types for basic column filtering !
		////  root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering = [ root_this_.column_type_for_regular_filtering, root_this_.column_type_for_TAGS_filtering ];
		root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering = [ root_this_.column_type_for_regular_filtering ];

		// valid column types for tags based filtering
		root_this_.relevant_column_types_for__TAGS_column_filtering__not_basic_column_filtering = [ root_this_.column_type_for_TAGS_filtering ];

		// tags filtering : valid tags values for filtering
		root_this_.valid_tag_value_types_for_filtering = [ "value_choice" ];

		// index of data value in individual cell tags data
		root_this_.tags__index_of_data_val_in_individual_tags_data = 0;

		// beta : temporary : HARDCODED : column num of 




		///////////			
		///////////   data indicies
		///////////	

		root_this_.tags_data_in_RAW_DATA__ROW_NUM_of_tags_descriptions = 1;
		root_this_.tags_data_in_parsed_commitment_data__index_of_tag_name = 2;




		///////////						////////////
		///////////  display areas      ////////////
		///////////						////////////

		//// specifying some of the acceptable values in the 
		//     "set_display_areas_isSelected_selected_property_to_particular_value__trueFalseInverse"
		//		function

		// for setting all values to true
		root_this_.display_areas__change_all_display_areas_selection_values__value__true = true;
		// as above but for false
		root_this_.display_areas__change_all_display_areas_selection_values__value__false = false;
		// inverses the current values
		root_this_.display_areas__change_all_display_areas_selection_values__value__inverse = "inverse";




		///////////				////////////
		///////////  text search box, reset, data export area
		///////////				////////////

		////// search box

		// the default search box text
		root_this_.table_view__text_search_box__default_search_field_text = 'search';

		// the search box mouse-over text
		root_this_.table_view__text_search_box__mouseover_text = 'search';


		///////////				////////////
		///////////  headers    ////////////
		///////////				////////////


		///  which columns go where?
		//		- i.e. the leftmost country listing column 
		//		is a separate dom object from the commitments listing
		//		and it will hold one or more columns from the commitments listing
		//		- SO, we need to define which it holds

		root_this_.country_listing_areas__hold_the_following_columns = [ 0 ];

		root_this_.commitments_listing_area__holds_the_following_columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];


		/// slightly hardcoded - useful for when 
		//		binding handlers to commitmnt cells. 					
		root_this_.country_listing__commitment_title_col_num_i = 1;
		//  the index of the full commitment text 
		//	column, in the commitment listing div
		root_this_.commitment_listing__full_commitment_text_i__relative_to_commitment_listing_col_nums = 0;

		//  and the absolute positions of the country name, commitment title / full text, in 
		//	the individual commitemnt data
		root_this_.commitment_data__country_name_index = 0;
		root_this_.commitment_data__commitment_title_text_index = 1;
		root_this_.commitment_data__fullcommitment_text_index = 2;






		///////////				////////////
		///////////  columns    ////////////
		///////////				////////////


		////  arrays of column header description obejcts

		// associative array 
		root_this_.column_information_objects__as_an_associative_array; 

		// linear array - holds info about the columns and the order they're to be in
		root_this_.column_information_objects_listed_in_the_order_of_the_columns = [];

		/// number of positions in the ordered column list 
		// - the index + visibility cols are after these
		root_this_.num_of__column_information_objects_and_columns = 14; 


		/////////   column title area - above the values part of the header

		root_this_.column_title_area__height = 171; 


		////////    header - below column title area

		// standard header area height - i.e. the area below the title
		root_this_.header_where_values_are__height = 100;

		// how far from the bottom area the values allowed to be..?
		root_this_.header_where_values_are__distance_of_values_from_bottom_of_header = 10;


		///////     ?????????


		////////    tags!  ///////

		root_this_.tag_type__tag_value_choice = "value_choice";
		root_this_.tags__key_for_tag_i__inclHeaders = "non_header_tag_i";



		///////////				////////////
		///////////  values     ////////////
		///////////				////////////


		///// for the value data - which are the keys for the data
		root_this_.value_data_obj__key_for_colmn_num = "column_num";
		root_this_.value_data_obj__key_for_value_num = "value_num";
		root_this_.value_data_obj__key_for_display_area_num = "display_area_num";




		///////////							////////////
		///////////  mouse-over data        ////////////
		///////////							////////////

		//// data keys for when embedding data in 
		//		various commitment cells

		// display area i 
		root_this_.commitment_cells_data_keys__curr_display_area_i = "display_area_i";
		// which commitment number? 
		// ( remmber, these are matching commitmetns!)
		root_this_.commitment_cells_data_keys__curr_commitment_i = "commitment_i";
		// which colum number?
		root_this_.commitment_cells_data_keys__curr_commitment_or_summary_statistics_or_header_COLUMN_i = "commitment_or_summary_statistics_cell__COLUMN_i";










		////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////	methods/functions
		////////////////////////////////////////////////////////











		///////////////////////////////////
		///////////// /// very testing
	
		root_this_.print_hellow_2 = function( text_to_print ){

			console.log("______ hellow world! _________- table view : process data edition!!!!  >>> "+text_to_print+" <<<<<");

		}








		////////////////////////  
		////////////////////////  table column objects : initialise   //////////
		/* 
			add new table column description objects ( this.column_description_obj ) 
		*/

		root_this_.initialise__table_column_objects__PROCESS_data = function( root_this_ ){ 

			console.log(">>>>> initialise__table_column_objects__PROCESS_data() - |"+root_this_.name_of_this_object+"| edition");

			// initialise the column description objects array
			root_this_.column_information_objects_listed_in_the_order_of_the_columns = new Array( root_this_.num_of__column_information_objects_and_columns );





			/* - Elements

			|| Basics 
			- Country name - col [ 0 ]
			- Action plan cycle - col???

			|| Process during action plan development (B - K)
			- Timeline and process: Prior availability [ b ][ 1 ]
			- Timeline: Online [ c ][ 2 ]
			- Timeline: other channels [ d ][ 3 ]
			- Advance notice [ e ][ 4 ]
			- Days in advance [ f ][ 5 ]
			- Advance notice: Adequacy [ g ][ 6 ]
			- Awareness-raising activities [ h ][ 7 ]
			- Online consultations [ i ][ 8 ]
			- In-person consultations [ j ][ 9 ]
			- Summary of comments [ k ][ 10 ]

			|| Consultation during implementation (L)
			- Consultation during action plan implementation (regular forum) [ L ][ 11 ]

			|| Self-assessment requirements (M-O)
			- Was annual progress report published? [ M ][ 12 ]
			- Was it done according to schedule? [ N ][ 13 ]
			- Did the government provide a two-week public comment period on draft self-assessment reports? [ O ][ 14 ]




			*/


			//////   Country name [ 0 ] /////// 
			//
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ] = new root_this_.column_description_obj(); 

			// what kind fo column type is it? 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].column_type = "text_column";

			// set which column, of the imported data, the data is in 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].which_column_num_to_fetch_data_for_for_this_column = 0; 

			// set the column class name 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].column_class_name = "country_name";

			// the id for the outer header div
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].column_header_outer_containing_div_id_name = "country_name";	

			// set the column title name
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].column_title__text = "Country name";

			// set the column title class anme  
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].column_title__class_name = "column_title column_header_text__val_no_1";

			// does it have a diagonal line at the right?
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].this_column_has_diagonal_line__on_top_column = true;				
			////  widths compressed / expanded 
			// expanded 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].whole_column_EXPANDED_width__in_px_x = 209;

			// and the header choices… in order of appearance
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].header__value_choice_categories__listed_in_order_of_appearance = [ 
											{ type : "value_choice",
											header_category_text : "ap.1", 
											current_selection__selectedTrueFalse : true,
											relevant_value_for_graph_view_display_by_menu : false,
											numberOrText_in_data_corresponding_to_this_value : "1", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 

											{ type : "value_choice",
											header_category_text : "ap.2", 
											current_selection__selectedTrueFalse : true,
											relevant_value_for_graph_view_display_by_menu : false,
											numberOrText_in_data_corresponding_to_this_value : "2", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_6_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_6_of_7" }
													];

			//// the mouseover text
			this.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].mouse_over_text_reference = "";



			//////   Timeline and process: Prior availability  [ 1 ] /////// 
			//
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 1 ] = new root_this_.column_description_obj(); 

			// what kind fo column type is it? 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].column_type = "basic_filter_column";

			// set which column, of the imported data, the data is in 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].which_column_num_to_fetch_data_for_for_this_column = 1; 

			// set the column class name 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].column_class_name = "timeline_and_process__prior_availability";

			// the id for the outer header div
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].column_header_outer_containing_div_id_name = "timeline_and_process__prior_availability";	

			// set the column title name
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].column_title__text = "Prior availability - timeline and process";

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].column_title__text__multiple_line = [ "NAP development", "Prior availability", "- timeline and process" ];

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].alternate__column_title_name__offset_x = 25;

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].first_line_opacity_val = 0.65;

			/// column header title
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].column_title_name__use_multiline_text_layout = true;				

			// set the column title class anme   
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].column_title__class_name = "column_title column_header_text__val_no_1";


			// does it have a diagonal line at the right?
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].this_column_has_diagonal_line__on_top_column = false;			

			////  widths compressed / expanded 
			// expanded 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].whole_column_EXPANDED_width__in_px_x = 88;

			///// LOOKED UP table value cell text area width
			//
			// do we look up the text area width for this cell?						
			// ( the default value - not shown here - is the right one )
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].look_up_width_for_this_col_table_cell_text_area_width = false;


			// and the header choices… in order of appearance
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].header__value_choice_categories__listed_in_order_of_appearance = [ 

											{ type : "value_choice",
											header_category_text : "Yes", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "Yes", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 

											{ type : "value_choice",
											header_category_text : "No", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "No", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_6_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

											{ type : "value_choice",
											header_category_text : "NR", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "NR", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */	
											header__class_name_selected : "header_values__colours_7_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }
													];

			//// the mouseover text
			this.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].mouse_over_text_reference = "This column shows whether the timeline and process for participating in OGP was made public ahead of public consultation activities.<br/><br/> Possible values: <br/><i><span class='darker_text_for_mouse_overs'>Yes - Timeline was made available prior to public consultation.<br/> No - Timeline was not made available prior to public consultation.<br/> NR - Not reviewed - IRM reports for founding members did not code for timeline prior availability. In all other cases, IRM reports did not verify this information.";


			//////   Timeline online [ 2 ] /////// 
			//
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 2 ] = new root_this_.column_description_obj(); 

			// what kind fo column type is it? 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].column_type = "basic_filter_column";

			// set which column, of the imported data, the data is in 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].which_column_num_to_fetch_data_for_for_this_column = 2; 

			// set the column class name 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].column_class_name = "timeline_online";

			// the id for the outer header div
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].column_header_outer_containing_div_id_name = "timeline_online";	

			// set the column title name
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].column_title__text = "Availability timeline - online";

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].column_title__text__multiple_line = [ "NAP development", "Availability timeline ", "- online" ];

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].first_line_opacity_val = 0.65;

			/// column header title
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].column_title_name__use_multiline_text_layout = true;	

			// set the column title class anme   
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].column_title__class_name = "column_title column_header_text__val_no_1";


			// does it have a diagonal line at the right?
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].this_column_has_diagonal_line__on_top_column = false;			

			////  widths compressed / expanded 
			// expanded 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].whole_column_EXPANDED_width__in_px_x = 125;

			// and the header choices… in order of appearance
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].header__value_choice_categories__listed_in_order_of_appearance = [ 

											{ type : "value_choice",
											header_category_text : "Yes", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "Yes", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 

											{ type : "value_choice",
											header_category_text : "Not Online", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "Not Online", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */	
											header__class_name_selected : "header_values__colours_5_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_5_of_7" },

											{ type : "value_choice",
											header_category_text : "No Timeline", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "No Timeline", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_6_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

											{ type : "value_choice",
											header_category_text : "NR", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "NR", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */	
											header__class_name_selected : "header_values__colours_7_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }
													];

			//// the mouseover text
			this.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].mouse_over_text_reference = "OGP countries are to publish the timeline online. This column shows whether or not the timeline for participation was made available online.<br/><br/> Possible values: <br/><i><span class='darker_text_for_mouse_overs'>Yes - Timeline was made available online. <br/> Not Online - Timeline was not made available online.<br/> No Timeline - There was no timeline made available; therefore, it could not be posted online.<br/> NR - Not reviewed - IRM reports for founding members did not code for timeline availability. In all other cases, IRM reports did not verify this information.";



			//////   Timeline: other channels [ 3 ] /////// 
			//
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 3 ] = new root_this_.column_description_obj(); 

			// what kind fo column type is it? 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].column_type = "basic_filter_column";

			// set which column, of the imported data, the data is in 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].which_column_num_to_fetch_data_for_for_this_column = 3; 

			// set the column class name 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].column_class_name = "timeline_other_channels";

			// the id for the outer header div
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].column_header_outer_containing_div_id_name = "timeline_other_channels";	

			// set the column title name
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].column_title__text = "Availability timeline - other channels";

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].column_title__text__multiple_line = [ "NAP development", "Availability timeline", "- other channels" ];

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].first_line_opacity_val = 0.65;

			/// column header title
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].column_title_name__use_multiline_text_layout = true;	

			// set the column title class anme   
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].column_title__class_name = "column_title column_header_text__val_no_1";

			// does it have a diagonal line at the right?
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].this_column_has_diagonal_line__on_top_column = true;			

			////  widths compressed / expanded 
			// expanded 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].whole_column_EXPANDED_width__in_px_x = 155;

			// and the header choices… in order of appearance
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].header__value_choice_categories__listed_in_order_of_appearance = [ 

											{ type : "value_choice",
											header_category_text : "Yes", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "Yes", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 

											{ type : "value_choice",
											header_category_text : "No other channels", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "No other channels", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */	
											header__class_name_selected : "header_values__colours_5_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_5_of_7" },

											{ type : "value_choice",
											header_category_text : "No Timeline", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "No Timeline", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_6_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

											{ type : "value_choice",
											header_category_text : "NR", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "NR", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */	
											header__class_name_selected : "header_values__colours_7_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }
													];

			//// the mouseover text
			this.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].mouse_over_text_reference = "OGP countries are to publish the timeline through channels other than the Internet. This column shows whether the government made efforts to promote OGP through non-Internet channels (such as radio or public meetings). <br/><br/>Possible responses: <br/><i><span class='darker_text_for_mouse_overs'> Yes - Timeline was made available through other channels. <br/>No other channels - Timeline was not made available through other channels.<br/>No Timeline - There was no timeline made available; therefore, it could not be posted online.<br/>NR - Not reviewed - IRM reports for founding members did not code for timeline availability. In all other cases, IRM reports did not verify this information.";



			//////   Advance notice  [ 4 ] /////// 
			//
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 4 ] = new root_this_.column_description_obj(); 

			// what kind fo column type is it? 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].column_type = "basic_filter_column";

			// set which column, of the imported data, the data is in 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].which_column_num_to_fetch_data_for_for_this_column = 4; 

			// set the column class name 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].column_class_name = "advance_notice";

			// the id for the outer header div
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].column_header_outer_containing_div_id_name = "advance_notice";	

			// set the column title name
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].column_title__text = "Advance notice ";

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].column_title__text__multiple_line = [ "NAP development", "Advance notice" ];

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].first_line_opacity_val = 0.65;

			/// column header title
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].column_title_name__use_multiline_text_layout = true;	

			// set the column title class anme   
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].column_title__class_name = "column_title column_header_text__val_no_3";


			// does it have a diagonal line at the right?
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].this_column_has_diagonal_line__on_top_column = false;			

			////  widths compressed / expanded 
			// expanded 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].whole_column_EXPANDED_width__in_px_x = 88;

			///// LOOKED UP table value cell text area width
			//
			// do we look up the text area width for this cell?						
			// ( the default value - not shown here - is the right one )
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].look_up_width_for_this_col_table_cell_text_area_width = false;


			// and the header choices… in order of appearance
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].header__value_choice_categories__listed_in_order_of_appearance = [ 

										{ type : "value_choice",
											header_category_text : "Yes", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "Yes", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 

											{ type : "value_choice",
											header_category_text : "No", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "No", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_6_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

											{ type : "value_choice",
											header_category_text : "NR", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "NR", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */	
											header__class_name_selected : "header_values__colours_7_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }
													];

			//// the mouseover text
			this.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].mouse_over_text_reference = "OGP participating countries are to give advance notice of opportunities to participate in the action planning process. This column shows whether the government gave advance notice for participation.<br/><br/>Possible responses: <br/><i><span class='darker_text_for_mouse_overs'>Yes - Advance notice of OGP participation opportunities was given.<br/>No - Advance notice of OGP participation opportunities was not given.<br/>NR - Not reviewed - IRM reports for founding members did not code for advance notice.";



			//////   Days_in_advance [ 5 ] /////// 
			//
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 5 ] = new root_this_.column_description_obj(); 

			// what kind fo column type is it? 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].column_type = "text_column";

			// set which column, of the imported data, the data is in 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].which_column_num_to_fetch_data_for_for_this_column = 5; 

			// set the column class name 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].column_class_name = "days_in_advance";

			// the id for the outer header div
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].column_header_outer_containing_div_id_name = "days_in_advance";	

			// set the column title name
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].column_title__text = "Days in advance";

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].column_title__text__multiple_line = [ "NAP development", "Days in advance" ];

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].first_line_opacity_val = 0.65;

			/// column header title
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].column_title_name__use_multiline_text_layout = true;	

			// set the column title class anme   
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].column_title__class_name = "column_title column_header_text__val_no_3";

			// does it have a diagonal line at the right?
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].this_column_has_diagonal_line__on_top_column = false;			

			////  widths compressed / expanded 
			// expanded 
			// root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].whole_column_EXPANDED_width__in_px_x = 88;

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].whole_column_EXPANDED_width__in_px_x = 160;


			///// LOOKED UP table value cell text area width
			//
			// do we look up the text area width for this cell?						
			// ( the default value - not shown here - is the right one )
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].look_up_width_for_this_col_table_cell_text_area_width = true;


			// and the header choices… in order of appearance
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].header__value_choice_categories__listed_in_order_of_appearance = [ 

										{ type : "value_choice",
											header_category_text : "Various numeric values", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "various_numeric_values", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 

											{ type : "value_choice",
											header_category_text : "No advance notice", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "No advance notice", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_6_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

											{ type : "value_choice",
											header_category_text : "NR", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "NR", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */	
											header__class_name_selected : "header_values__colours_7_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }
													];

			//// the mouseover text
			this.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].mouse_over_text_reference = "This column gives the number of days of advance notice. <br/><br/>Possible responses: <br/><i><span class='darker_text_for_mouse_overs'> Number of days in advance.<br/>No advance notice - There was no advance notice of opportunities to participate.<br/> NR - Not reviewed - IRM reports for founding members did not code for advance notice.";



			//////   Advance notice: Adequacy [ 6 ] /////// 
			//
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 6 ] = new root_this_.column_description_obj(); 

			// what kind fo column type is it? 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].column_type = "basic_filter_column";

			// set which column, of the imported data, the data is in 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].which_column_num_to_fetch_data_for_for_this_column = 6; 

			// set the column class name 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].column_class_name = "adequate_notice__adequacy";

			// the id for the outer header div
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].column_header_outer_containing_div_id_name = "adequate_notice__adequacy";	

			// set the column title name
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].column_title__text = "Adequacy of advance notice";

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].column_title__text__multiple_line = [ "NAP development", "Adequacy of advance notice" ];

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].first_line_opacity_val = 0.65;

			/// column header title
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].column_title_name__use_multiline_text_layout = true;	

			// set the column title class anme   
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].column_title__class_name = "column_title column_header_text__val_no_3";


			// does it have a diagonal line at the right?
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].this_column_has_diagonal_line__on_top_column = true;			

			////  widths compressed / expanded 
			// expanded 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].whole_column_EXPANDED_width__in_px_x = 160;

			// and the header choices… in order of appearance
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].header__value_choice_categories__listed_in_order_of_appearance = [ 

										{ type : "value_choice",
											header_category_text : "Yes", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "Yes", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 

											{ type : "value_choice",
											header_category_text : "No", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "No", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */	
											header__class_name_selected : "header_values__colours_5_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_5_of_7" },

											{ type : "value_choice",
											header_category_text : "No advance notice", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "No advance notice", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_6_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

											{ type : "value_choice",
											header_category_text : "NR", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "NR", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */	
											header__class_name_selected : "header_values__colours_7_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }
													];

			//// the mouseover text
			this.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].mouse_over_text_reference = "OGP participating countries are to give at least seven days of advance notice of opportunities to participate in the action planning process. This column shows whether participants found the advance notice to be adequate.<br/><br/>Possible responses: <br/><i><span class='darker_text_for_mouse_overs'>Yes - Advance notice considered adequate.<br/> No - Advance notice was not considered adequate.<br/> No advance notice - There was no advance notice of opportunities to participate.<br/> NR - Not reviewed - IRM reports for founding members did not code for advance notice.";



			//////   Awareness-raising activities [ 7 ] /////// 
			//
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 7 ] = new root_this_.column_description_obj(); 

			// what kind fo column type is it? 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].column_type = "basic_filter_column";

			// set which column, of the imported data, the data is in 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].which_column_num_to_fetch_data_for_for_this_column = 7; 

			// set the column class name 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].column_class_name = "awareness_raising_activities";

			// the id for the outer header div
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].column_header_outer_containing_div_id_name = "awareness_raising_activities";	

			// set the column title name
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].column_title__text = "Awareness-raising activities";

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].column_title__text__multiple_line = [ "NAP development", "Awareness-raising activities" ];

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].first_line_opacity_val = 0.65;

			/// column header title
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].column_title_name__use_multiline_text_layout = true;	

			// set the column title class anme   
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].column_title__class_name = "column_title column_header_text__val_no_8";


			// does it have a diagonal line at the right?
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].this_column_has_diagonal_line__on_top_column = true;			

			////  widths compressed / expanded 
			// expanded 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].whole_column_EXPANDED_width__in_px_x = 88;

			///// LOOKED UP table value cell text area width
			//
			// do we look up the text area width for this cell?						
			// ( the default value - not shown here - is the right one )
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].look_up_width_for_this_col_table_cell_text_area_width = false;


			// and the header choices… in order of appearance
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].header__value_choice_categories__listed_in_order_of_appearance = [ 

											{ type : "value_choice",
											header_category_text : "Yes", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "Yes", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 

											{ type : "value_choice",
											header_category_text : "No", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "No", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											
											header__class_name_selected : "header_values__colours_6_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

											{ type : "value_choice",
											header_category_text : "NR", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "NR", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */	
											header__class_name_selected : "header_values__colours_7_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }
													];

			//// the mouseover text
			this.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].mouse_over_text_reference = "OGP participating countries are to undertake awareness-raising activities to enhance public participation in the consultation. This column shows whether any awareness-raising activities were carried out in advance of the action planning process.<br/><br/>Possible responses: <br/><i><span class='darker_text_for_mouse_overs'>Yes - Awareness-raising activities took place.<br/>No - Awareness-raising activities did not take place.<br/>NR - Not reviewed - IRM reports for founding members did not code for awareness-raising activities.";


			//////   Online consultations  [ 8 ] /////// 
			//
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 8 ] = new root_this_.column_description_obj(); 

			// what kind fo column type is it? 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].column_type = "basic_filter_column";

			// set which column, of the imported data, the data is in 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].which_column_num_to_fetch_data_for_for_this_column = 8; 

			// set the column class name 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].column_class_name = "online_consultations ";

			// the id for the outer header div
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].column_header_outer_containing_div_id_name = "online_consultations";	

			// set the column title name
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].column_title__text = "Online consultations";

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].column_title__text__multiple_line = [ "NAP development", "Online consultations" ];

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].first_line_opacity_val = 0.65;

			/// column header title
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].column_title_name__use_multiline_text_layout = true;	

			// set the column title class anme   
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].column_title__class_name = "column_title column_header_text__val_no_4";


			// does it have a diagonal line at the right?
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].this_column_has_diagonal_line__on_top_column = false;			

			////  widths compressed / expanded 
			// expanded 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].whole_column_EXPANDED_width__in_px_x = 88;

			///// LOOKED UP table value cell text area width
			//
			// do we look up the text area width for this cell?						
			// ( the default value - not shown here - is the right one )
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].look_up_width_for_this_col_table_cell_text_area_width = false;


			// and the header choices… in order of appearance
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].header__value_choice_categories__listed_in_order_of_appearance = [ 

											{ type : "value_choice",
											header_category_text : "Yes", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "Yes", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 

											{ type : "value_choice",
											header_category_text : "No", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "No", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											
											header__class_name_selected : "header_values__colours_6_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

											{ type : "value_choice",
											header_category_text : "NR", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "NR", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */	
											header__class_name_selected : "header_values__colours_7_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }
													];

			//// the mouseover text
			this.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].mouse_over_text_reference = "OGP countries are to carry out online consultations. This column shows whether any online consultation activities were carried out in advance of the action planning process. <br/><br/>Possible responses: <br/><i><span class='darker_text_for_mouse_overs'>Yes - Online consultations took place.<br/>No - Online consultations did not take place.<br/>NR - Not reviewed - IRM reports for founding members did not code for online consultations.";



			//////   in_person_consultations [ 9 ] /////// 
			//
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 9 ] = new root_this_.column_description_obj(); 

			// what kind fo column type is it? 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].column_type = "basic_filter_column";

			// set which column, of the imported data, the data is in 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].which_column_num_to_fetch_data_for_for_this_column = 9; 

			// set the column class name 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].column_class_name = "in_person_consultations";

			// the id for the outer header div
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].column_header_outer_containing_div_id_name = "in_person_consultations";	

			// set the column title name
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].column_title__text = "In-person consultations";

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].column_title__text__multiple_line = [ "NAP development", "In-person consultations" ];

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].first_line_opacity_val = 0.65;

			/// column header title
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].column_title_name__use_multiline_text_layout = true;	

			// set the column title class anme   
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].column_title__class_name = "column_title column_header_text__val_no_4";


			// does it have a diagonal line at the right?
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].this_column_has_diagonal_line__on_top_column = true;			

			////  widths compressed / expanded 
			// expanded 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].whole_column_EXPANDED_width__in_px_x = 88;

			///// LOOKED UP table value cell text area width
			//
			// do we look up the text area width for this cell?						
			// ( the default value - not shown here - is the right one )
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].look_up_width_for_this_col_table_cell_text_area_width = false;


			// and the header choices… in order of appearance
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].header__value_choice_categories__listed_in_order_of_appearance = [ 

											{ type : "value_choice",
											header_category_text : "Yes", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "Yes", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 

											{ type : "value_choice",
											header_category_text : "No", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "No", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											
											header__class_name_selected : "header_values__colours_6_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

											{ type : "value_choice",
											header_category_text : "NR", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "NR", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */	
											header__class_name_selected : "header_values__colours_7_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }
													];

			//// the mouseover text
			this.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].mouse_over_text_reference = "OGP countries are to carry out in-person consultations. This column shows whether any in-person consultation activities were carried out in advance of the action planning process.<br/><br/>Possible responses: <br/><i><span class='darker_text_for_mouse_overs'>Yes - In-person consultations took place.<br/>No - In-person consultations did not take place.<br/>NR - Not reviewed - IRM reports for founding members did not code for in-person consultations.";



			//////   summary_of_comments [ 10 ] /////// 
			//
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 10 ] = new root_this_.column_description_obj(); 

			// what kind fo column type is it? 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].column_type = "basic_filter_column";

			// set which column, of the imported data, the data is in 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].which_column_num_to_fetch_data_for_for_this_column = 10; 

			// set the column class name 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].column_class_name = "summary_of_comments";

			// the id for the outer header div
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].column_header_outer_containing_div_id_name = "summary_of_comments";	

			// set the column title name
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].column_title__text = "Summary of comments";

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].column_title__text__multiple_line = [ "NAP development", "Summary of comments" ];

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].first_line_opacity_val = 0.65;

			/// column header title
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].column_title_name__use_multiline_text_layout = true;		

			// set the column title class anme   
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].column_title__class_name = "column_title column_header_text__val_no_7";


			// does it have a diagonal line at the right?
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].this_column_has_diagonal_line__on_top_column = true;			

			////  widths compressed / expanded 
			// expanded 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].whole_column_EXPANDED_width__in_px_x = 88;

			///// LOOKED UP table value cell text area width
			//
			// do we look up the text area width for this cell?						
			// ( the default value - not shown here - is the right one )
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].look_up_width_for_this_col_table_cell_text_area_width = false;

			// and the header choices… in order of appearance
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].header__value_choice_categories__listed_in_order_of_appearance = [ 

											{ type : "value_choice",
											header_category_text : "Yes", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "Yes", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 

											{ type : "value_choice",
											header_category_text : "No", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "No", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_6_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

											{ type : "value_choice",
											header_category_text : "NR", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "NR", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */	
											header__class_name_selected : "header_values__colours_7_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }
													];

			//// the mouseover text
			this.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].mouse_over_text_reference = "OGP countries are to produce a summary of public comments made during the consultation process. This column shows whether a summary of public comments was published after the action planning process.<br/><br/>Possible responses: <br/><i><span class='darker_text_for_mouse_overs'>Yes - A summary of public comments was published.<br/>No - A summary of public comments was not published.<br/>NR - Not reviewed - IRM reports for founding members did not code for a summary of public comments. In all other cases, IRM reports did not verify this information.";



			//////   Consultation during action plan implementation (regular forum) [ 11 ] /////// 
			//
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 11 ] = new root_this_.column_description_obj(); 

			// what kind fo column type is it? 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].column_type = "basic_filter_column";

			// set which column, of the imported data, the data is in 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].which_column_num_to_fetch_data_for_for_this_column = 11; 

			// set the column class name 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].column_class_name = "consultation_during_action_implementation";

			// the id for the outer header div
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].column_header_outer_containing_div_id_name = "consultation_during_action_implementation";	

			// set the column title name
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].column_title__text = "Forum for regular dialogue";

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].column_title__text__multiple_line = [ "NAP implementation", "Forum for regular dialogue"];

			/// custom start loc
			///////// root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].alternate__column_title_name__offset_x = 25;			
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].first_line_opacity_val = 0.65;

			/// column header title
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].column_title_name__use_multiline_text_layout = true;			

			// set the column title class anme   
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].column_title__class_name = "column_title column_header_text__val_no_1";

			// does it have a diagonal line at the right?
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].this_column_has_diagonal_line__on_top_column = true;			

			////  widths compressed / expanded 
			// expanded 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].whole_column_EXPANDED_width__in_px_x = 88;

			///// LOOKED UP table value cell text area width
			//
			// do we look up the text area width for this cell?						
			// ( the default value - not shown here - is the right one )
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].look_up_width_for_this_col_table_cell_text_area_width = false;			

			// and the header choices… in order of appearance
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].header__value_choice_categories__listed_in_order_of_appearance = [ 

											{ type : "value_choice",
											header_category_text : "Yes", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "Yes", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 

											{ type : "value_choice",
											header_category_text : "No", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "No", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											
											header__class_name_selected : "header_values__colours_6_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

											{ type : "value_choice",
											header_category_text : "NR", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "NR", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */	
											header__class_name_selected : "header_values__colours_7_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }
													];

			//// the mouseover text
			this.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].mouse_over_text_reference = "OGP countries are to provide a regular forum for ongoing dialogue and participation during the implementation process. This column shows whether such a forum took place during the implementation of the national action plan.<br/><br/>Possible responses: <br/><i><span class='darker_text_for_mouse_overs'>Yes - Awareness-raising activities took place.<br/>No - Awareness-raising activities did not take place.<br/>NR - Not reviewed - IRM reports for founding members did not code for awareness-raising activities.";




			//////   Was_annual_progress_report_published [ 12 ] /////// 
			//
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 12 ] = new root_this_.column_description_obj(); 

			// what kind fo column type is it? 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].column_type = "basic_filter_column";

			// set which column, of the imported data, the data is in 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].which_column_num_to_fetch_data_for_for_this_column = 12; 

			// set the column class name 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].column_class_name = "was_annual_progress_report_published";

			// the id for the outer header div
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].column_header_outer_containing_div_id_name = "was_annual_progress_report_published";	

			// set the column title name
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].column_title__text = "Annual progress report published?";

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].column_title__text__multiple_line = [ "NAP self-assessment", "Annual progress report published?" ];

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].first_line_opacity_val = 0.65;

			/// column header title
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].column_title_name__use_multiline_text_layout = true;								

			// set the column title class anme   
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].column_title__class_name = "column_title column_header_text__val_no_5";


			// does it have a diagonal line at the right?
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].this_column_has_diagonal_line__on_top_column = false;			

			////  widths compressed / expanded 
			// expanded 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].whole_column_EXPANDED_width__in_px_x = 88;

			///// LOOKED UP table value cell text area width
			//
			// do we look up the text area width for this cell?						
			// ( the default value - not shown here - is the right one )
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].look_up_width_for_this_col_table_cell_text_area_width = false;

			// and the header choices… in order of appearance
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].header__value_choice_categories__listed_in_order_of_appearance = [ 

											{ type : "value_choice",
											header_category_text : "Yes", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "Yes", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 

											{ type : "value_choice",
											header_category_text : "No", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "No", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											
											header__class_name_selected : "header_values__colours_6_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

											{ type : "value_choice",
											header_category_text : "NR", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "NR", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */	
											header__class_name_selected : "header_values__colours_7_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }
													];

			//// the mouseover text
			this.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].mouse_over_text_reference = "OGP countries are to publish an annual progress report according to a set of standardized guidelines. This column shows whether such a report was published.<br/><br/>Possible responses: <br/><i><span class='darker_text_for_mouse_overs'>Yes - Awareness-raising activities took place.<br/>No - Awareness-raising activities did not take place.<br/>NR - Not reviewed - IRM reports for founding members did not code for awareness-raising activities.";



			//////   was_it_done_according_to_schedule [ 13 ] /////// 
			//
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 13 ] = new root_this_.column_description_obj(); 

			// what kind fo column type is it? 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].column_type = "basic_filter_column";

			// set which column, of the imported data, the data is in 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].which_column_num_to_fetch_data_for_for_this_column = 13; 

			// set the column class name 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].column_class_name = "was_it_done_according_to_schedule";

			// the id for the outer header div
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].column_header_outer_containing_div_id_name = "was_it_done_according_to_schedule";	

			// set the column title name
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].column_title__text = "According to schedule?";

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].column_title__text__multiple_line = [ "NAP self-assessment", "According to schedule?" ];

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].first_line_opacity_val = 0.65;

			/// column header title
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].column_title_name__use_multiline_text_layout = true;					

			// set the column title class anme   
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].column_title__class_name = "column_title column_header_text__val_no_5";


			// does it have a diagonal line at the right?
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].this_column_has_diagonal_line__on_top_column = false;			

			////  widths compressed / expanded 
			// expanded 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].whole_column_EXPANDED_width__in_px_x = 88;

			///// LOOKED UP table value cell text area width
			//
			// do we look up the text area width for this cell?						
			// ( the default value - not shown here - is the right one )
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].look_up_width_for_this_col_table_cell_text_area_width = false;

			// and the header choices… in order of appearance
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].header__value_choice_categories__listed_in_order_of_appearance = [ 

											{ type : "value_choice",
											header_category_text : "Yes", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "Yes", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 

											{ type : "value_choice",
											header_category_text : "No", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "No", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											
											header__class_name_selected : "header_values__colours_6_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

											{ type : "value_choice",
											header_category_text : "NR", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "NR", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */	
											header__class_name_selected : "header_values__colours_7_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }
													];

			//// the mouseover text
			this.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].mouse_over_text_reference = "OGP countries are to publish their self-assessment 3 months after the last day of their first year of implementation. (For the founding 8 countries, this was 30 March 2013 and for the second cohort, this was 30 September 2013.) This column shows whether countries published their reports according to this schedule.<br/><br/>Possible responses: <br/><i><span class='darker_text_for_mouse_overs'>Yes - Awareness-raising activities took place.<br/>No - Awareness-raising activities did not take place.<br/>NR - Not reviewed - IRM reports for founding members did not code for awareness-raising activities.";


			//////   Did the government provide a two-week public comment period on draft self-assessment reports [ 14 ] /////// 
			//
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 14 ] = new root_this_.column_description_obj(); 

			// what kind fo column type is it? 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].column_type = "basic_filter_column";

			// set which column, of the imported data, the data is in 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].which_column_num_to_fetch_data_for_for_this_column = 14; 

			// set the column class name 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].column_class_name = "did_gvmt_provide_two_week_comment_period";

			// the id for the outer header div
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].column_header_outer_containing_div_id_name = "did_gvmt_provide_two_week_comment_period";	

			// set the column title name
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].column_title__text = "Two-week public comment period provided?";

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].column_title__text__multiple_line = [ "NAP self-assessment", "Two-week public comment", "period provided?"];

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].alternate__column_title_name__offset_x = 22;

			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].first_line_opacity_val = 0.65;

			/// column header title
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].column_title_name__use_multiline_text_layout = true;						

			// set the column title class anme   
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].column_title__class_name = "column_title column_header_text__val_no_5";


			// does it have a diagonal line at the right?
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].this_column_has_diagonal_line__on_top_column = false;			

			////  widths compressed / expanded 
			// expanded 
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].whole_column_EXPANDED_width__in_px_x = 88;

			/// the width ofthe top svg area…
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].top_svg_area_width = 207;

			///// LOOKED UP table value cell text area width
			//
			// do we look up the text area width for this cell?						
			// ( the default value - not shown here - is the right one )
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].look_up_width_for_this_col_table_cell_text_area_width = false;

			// and the header choices… in order of appearance
			root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].header__value_choice_categories__listed_in_order_of_appearance = [ 

											{ type : "value_choice",
											header_category_text : "Yes", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "Yes", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											header__class_name_selected : "header_values__colours_1_of_7",
											/* and the cells */
											tableCells__class_name_selected : "tableCell_values__colours_1_of_7" }, 

											{ type : "value_choice",
											header_category_text : "No", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "No", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */
											
											header__class_name_selected : "header_values__colours_6_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

											{ type : "value_choice",
											header_category_text : "NR", 
											current_selection__selectedTrueFalse : true,
											numberOrText_in_data_corresponding_to_this_value : "NR", 
											found_instances_of_this_value : 0,
											value_background_width : 10, 
											/* header cells */	
											header__class_name_selected : "header_values__colours_7_of_7",
											/* and the cells */ 
											tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }
													];

			//// the mouseover text
			this.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].mouse_over_text_reference = "OGP countries are to publish their self-assessment and have a minimum of two weeks of public comment. This column shows whether such a public comment period existed.<br/><br/>Possible responses: <br/><i><span class='darker_text_for_mouse_overs'>Yes - Awareness-raising activities took place.<br/>No - Awareness-raising activities did not take place.<br/>NR - Not reviewed - IRM reports for founding members did not code for awareness-raising activities.";




			///////////////// END OF DESCRIBING COL OBJECTS!
			////////////			- start of rest of the col setting up 

			//////////////////////////   and **then** - make a mapping of the table value objects associatively 
			//////////							such that one can use a data value to fetch the relevant object]

			this.set_up_an_associative_mapping_to_the_column_values__in_each_column();



		} // end header description obj setup










		///////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////
		///////////////////////
		///////////////////////		our own modified verison of : setup Country Centric Display areas
		///////////////////////			
		///////////////////////



		/////// polished version of the above
		/////		- sets things to a country specific listing 
		/////		- sets up the display areas 
		/////		- and prints some basic commitments
		////
		root_this_.set_up_country_centric_display_areas__incl_divs__n__print_commitments = function( root_this_ ){

			console.log(">>>>>  set_up_country_centric_display_areas__incl_divs__n__print_commitments() of object "+root_this_.name_of_this_object );


			////  set the listing to country centric and make the relevant objects
			//////// root_this_.set_commitment_arrangement_to_country_centric( root_this_ );
			root_this_.set_commitment_arrangement_to_commitment_centric( root_this_ );


			////  do some initial data processing
			////////////   this.start_filtering_and_commitments_listing_process__given_user_interaction__table_edition( root_this_, false );


			/// remove the existing divs ... if there are any
			//		in the country display area
			$("#"+root_this_.table_view__countryNamesEtAl_area__belowHeadersArea__id_name ).empty();

			//		in the main commitments listing
			$("#"+root_this_.table_view__main_commitments_listing_area__id_name ).empty();



			// debug
			console.log("\t - there are "+root_this_.commitment_display__n_filterning_n_sorting_areas.length+" num of display areas ");

			//  set up the relevant dom elements
			for( this.i = 0; this.i < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.i++ ){

				// the outer div
				root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ].set_up_OUTER_divs_for_this_display_area_in_country_n_commitment_listing_areas( root_this_ );

				// and then the inner div
				root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ].set_up_INNER_divs_for_this_display_area_in_country_n_commitment_listing_areas( root_this_ );

/*  - we'll try to integrate this with the filtering
				//  add the summary statistics line
				root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ].add_display_area_summary_statistics_line__to_commitments_listing_area( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ], "keep", this.i );
				
				// test print the commitments
				root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ].add_commitments_to_commitment_listing_area( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ], "unfiltered", "keep" );
*/							
			}


			///  filter/sort n draw the commitments
			root_this_.start_filtering_and_commitments_listing_process__given_user_interaction__table_edition( root_this_, true );

		}




		///////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////
		///////////////////////
		///////////////////////		our own modified verison of : setup COMMITMENT Centric Display areas
		///////////////////////			
		///////////////////////



		/////// set commitment listing to commitment centric
		/////		 
		/////		- as the function above but commitment centric (i.e. just one dispay area)
		/////		
		////
		root_this_.set_up_commitment_centric_display_areas__incl_divs__n__print_commitments = function( root_this_ ){

			console.log(">>>>>  set_up_commitment_centric_display_areas__incl_divs__n__print_commitments() ");


			////  set the listing to country centric and make the relevant objects
			root_this_.set_commitment_arrangement_to_commitment_centric( root_this_ );



			////  do some initial data processing
			root_this_.start_filtering_and_commitments_listing_process__given_user_interaction__table_edition( root_this_, false );


			/// remove the existing divs ... if there are any
			//		in the country display area
			$("#"+root_this_.table_view__countryNamesEtAl_area__belowHeadersArea__id_name ).empty();

			//		in the main commitments listing
			$("#"+root_this_.table_view__main_commitments_listing_area__id_name ).empty();



			// debug
			console.log("\t - there are "+root_this_.commitment_display__n_filterning_n_sorting_areas.length+" num of display areas ");

			//  set up the relevant dom elements
			for( this.i = 0; this.i < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.i++ ){

				// the outer div
				root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ].set_up_OUTER_divs_for_this_display_area_in_country_n_commitment_listing_areas( root_this_ );

				// and then the inner div
				root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ].set_up_INNER_divs_for_this_display_area_in_country_n_commitment_listing_areas( root_this_ );

/*	- we'll draw this separately
				//  add the summary statistics line
				root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ].add_display_area_summary_statistics_line__to_commitments_listing_area( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ], "keep", this.i );
				
				// test print the commitments
				root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ].add_commitments_to_commitment_listing_area( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ], "unfiltered", "keep" );
*/							
			}


			///  filter/sort + draw the commitments
			root_this_.start_filtering_and_commitments_listing_process__given_user_interaction__table_edition( root_this_, true );

		}






		////////////////////////
		////////////////////////	modeified verison of the commitment centric setup, to allow the top of
		////////////////////////		the commitments area to be called "Countries" rather than "Commitments"
		////////////////////////



		//// the main function taking care of things
		///
		//
		root_this_.change_commitment_organisation_according_to_curr_settings = function( root_this_ ){

			console.log(">>>>  change_commitment_organisation_according_to_curr_settings() to "+root_this_.curr_commitment_viewing_mode__country_or_commitment_centric_mode );


			////// rearrange the commitments data structure to suit
			//		- i.e. as one long one-dimensional array
			//				OR as a associative array w/ country-names as keys ( with the commitments inside)
			//
			root_this_.arrange_formatted_commitment_arrays_into_country_or_commitment_centric_ordering( root_this_, root_this_.curr_commitment_viewing_mode__country_or_commitment_centric_mode );


			// TO DO TO DO TO DO 
			////// get the display areas to fade out before 
			//		removing them?


			////// remove display area objects please
			//
			root_this_.commitment_display__n_filterning_n_sorting_areas = [];


			///// create relevant commitment display objects
			//	
			//
			// Commitment-centric setup
			if( root_this_.curr_commitment_viewing_mode__country_or_commitment_centric_mode === root_this_.curr_commitment_viewing_mode__commitmentCentric_value ){
				
				// create only one commitment display object
				console.log("\t - setting up a commitment centric display area object ");

				// set up a new display area
				root_this_.commitment_display__n_filterning_n_sorting_areas.push( new root_this_.commitment_display__n_filtering_n_sorting_object( root_this_, root_this_.table_data_arranged_commitment_or_country_centric, "Countries" ) );

				// assign name
				////   root_this_.commitment_display__n_filterning_n_sorting_areas[0].country_name = "commitment_land";

				// assign data
				///////// root_this_.commitment_display__n_filterning_n_sorting_areas[0].all_commitments__unfiltered = root_this_.table_data_arranged_commitment_or_country_centric ;

				// assign this please
				///////// root_this_.commitment_display__n_filterning_n_sorting_areas[0].main_parent_object_this = this ;


			}
			//
			//  Country centric setups 
			else if( root_this_.curr_commitment_viewing_mode__country_or_commitment_centric_mode === root_this_.curr_commitment_viewing_mode__countryCentric_value ){

				// go through the keys and make display area objects
				console.log("\t - setting up a country centric display area object ");		

				for( key in root_this_.table_data_arranged_commitment_or_country_centric ){

					console.log(" \t\t - setting up a display area for "+root_this_.table_data_arranged_commitment_or_country_centric[ key ].country_name );

					// g732
					root_this_.commitment_display__n_filterning_n_sorting_areas.push( new root_this_.commitment_display__n_filtering_n_sorting_object( root_this_, root_this_.table_data_arranged_commitment_or_country_centric[ key ].matching_commitments, root_this_.table_data_arranged_commitment_or_country_centric[ key ].country_name ) );

				}

				///  sort the commitments alphabetically please
				root_this_.sort_display_commitments_objects__alphabetically();


				//
			} //  end country-centric setups



			//// build the text search index for all 
			//		diplsay areas please!
			root_this_.text_search__build_text_search_index_for_all_commitment_areas( root_this_ );



		} /// end method





		///////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////
		///////////////////////
		///////////////////////		the main data loading function
		///////////////////////			
		///////////////////////


		root_this_.setup_this_object__basic__on_load = function(){

			// hello
			console.log(">>>> setup_this_object__basic__on_load for object |"+root_this_.name_of_this_object+"|");

			//// finds the relevant column numbers of the index+visibility columns
			this.find_the_relevant_col_numbers_for_the_index_and_visibility_cols();

			//// set up objects describing the content of the columns
			this.initialise__table_column_objects__commitment_data();
			

		}





		/////////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////////
		///////////////////////
		///////////////////////		the main html and display setup & 
		///////////////////////			removal function
		///////////////////////





		root_this_.setup_this_object__for_display__ie_load_and_parse_data__and__draw_html = function( root_this_ ){

			console.log(">>>>>> setup_this_object__for_display__ie_load_and_parse_data__and__draw_html() of object |"+root_this_.name_of_this_object+"| is the data loaded? |"+root_this_.is_relev_data_loaded_and_formatted+"|");

			// the CURRENTLY SELECTED views and datasets
			root_this_.curr_desired_display_obj_as_text = root_this_.possible_objects__table_view ;
			root_this_.curr_desired_dataset_as_text = root_this_.possible_datasets__process;	
			// and in class equivalents - for the main vis outline 

			/// set the views dom class according to the current view
			/////////   root_this_.set_main_view_area_class_according_to_view_and_dataset( root_this_ )	;


			/////// mouseovers

			// for summary statistics
			root_this_.bind_mouse_overs_to_summary_statistics_lines = true;
					
			// for the titles and full commitment titles
			root_this_.bind_mouse_overs_to_commitment_titles_and_full_commitment_texts = false;		


			/// set which class and view we've got an
			root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS_process__CURRENT_class_name = root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS_process__dom_elmt__class_name ;
			// and set the views 
			$("#"+root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS__dom_elmt__id_name).attr("class", root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS_process__CURRENT_class_name );


			/// check if the graph page is already set up…!
			/// 	and only set this up if if it DOES NOT EXIST!
			//
			if( $("#"+root_this_.table_view_main_header_area__dom_id_name ).length === 0 ){

				console.log("\t - doesn't look like the Table View Process page has been set up - setting up basic elements + binding interactions!");

				/// set up the relevant html dom elements
				root_this_.initialise_basic_html_table_relevant_areas__n_look_up_key_tableOuterElement_distances__please( root_this_ );

				// set up handlers for moving outer divs when the window scrolls
				root_this_.bind_handlers_n__update_outer_divs_for_this_table_view_when_scrolling_etc( root_this_ );



				/// if the data's not loaded and parsed, do load it!
				if( root_this_.is_relev_data_loaded_and_formatted === true ){

					console.log("\t\t- aha - the data has been loaded.....  setting up the data listing/rows!" );

					/// skip the loading and just do the drawing

					////  get the commitment display going
					//		- set listing to country-specific 
					//		- print some commitments
					root_this_.set_up_country_centric_display_areas__incl_divs__n__print_commitments( root_this_ );							

				}// if the data's not loaded
				// then load it and draw the html
				else if( root_this_.is_relev_data_loaded_and_formatted === false ){

					console.log("\t\t- aha - the data hasn't been loaded.....  loading data for the table view : PROCESS DATA!" );

					//// load and draw the data ( though this is done in the parent element, for some reason )
					root_this_.main_parent_object_this.load_data__SPECIFIC_FOR__CURRENT_OBJECT__and_maybe_update_visual_data_display( root_this_.main_parent_object_this, root_this_.curr_desired_dataset_as_text, true );
				}



				//// set the visual filtering interface elements to correspond to the current meta-data
				root_this_.set_all_basic_filtering_values_according_to_data( root_this_ );




			} else{
				console.log("--- sorry, not setting up the TABLE page, as bits of it already EXIST!... sorrys!");
			}

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
	console.log("_________ setting up table view - process data edition! ________ ");

	our_irm_vis.our_table_view_obj__process_data_edition = new our_irm_vis.table_view_obj();
	our_irm_vis.our_table_view_obj__process_data_edition.main_parent_object_this = our_irm_vis;
	our_irm_vis.our_table_view_obj__process_data_edition.name_of_this_object = "table view : process view edition";




	/// sets up the column metadata
	////////////////  this.setup_relevant_column_description_objects__table_view__process_data__edition( our_irm_vis.our_table_view_obj__process_data_edition );

	/// set up some functions in the graph view object
	this.add_relevant_functions_to_graph_view_obj( our_irm_vis.our_table_view_obj__process_data_edition );

	our_irm_vis.our_table_view_obj__process_data_edition.initialise__table_column_objects__PROCESS_data( our_irm_vis.our_table_view_obj__process_data_edition );

	our_irm_vis.our_table_view_obj__process_data_edition.print_hellow_2("table view : process data (test print)");
	// and then run it :) 
	//////////////   our_irm_vis.our_table_view_obj__process_data_edition.test_print( our_irm_vis.our_table_view_obj__process_data_edition, "hellow : table view process data edition!" );

}