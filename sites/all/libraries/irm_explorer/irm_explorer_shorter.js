console.log("hellow world!");




var irm_vis_obj = function(){


    ////// root this reference
    this.local_this = this;



    /////////     		   ///////////
    /////////     modes    ///////////
    /////////     		    ///////////




    ///////////				 ////////////
    ///////////   objects?   ////////////
    ///////////				 ////////////


    // alias to the CURRENT DISPLAY OBJECT
    // - useful for when switching objects
    this.curr_display_object ;


    // the actual objects - 

    // for the table view - commitments edition
    this.our_table_view_obj__commitents_data_edition ;

    // for the table view - process data edition

    // for the graph view
    this.our_graph_view_obj_ ;


    //// display objects by text				

    // the possible objects
    this.possible_objects__table_view = "table_view";
    this.possible_objects__graph_view = "graph_view";
    this.possible_objects__facsheet_view = "factsheet_view";

    // the possible datasets
    this.possible_datasets__commitments = "commitments";
    this.possible_datasets__process = "process";

    // the CURRENTLY SELECTED views and datasets
    this.curr_desired_display_obj_as_text = this.possible_objects__table_view ;
    this.curr_desired_dataset_as_text = this.possible_datasets__commitments;




    ///////////				     ////////////
    ///////////   DOM objects   ////////////
    ///////////				   ////////////

    //// quick references to these


    // header - where the logo is
    this.page_header__dom_elmt_name = "page_header";
    this.page_header__dom_elmt__lookedup_height = 0;

    //  where one selects what to view
    this.irm_vizes_viewing_options__dom_elmt_id_name = "main_viz_viewing_options_area";
    this.irm_vizes_viewing_options__dom_elmt__lookedup_height = 0;


    /// where the views things go 
    this.page_pseudo_body__FOR_VIEWS__dom_elmt = 0;
    this.page_pseudo_body__FOR_VIEWS__dom_elmt__id_name = "page_pseudo_body__FOR_VIEWS__dom_elmt__id_name";
    this.page_pseudo_body__FOR_VIEWS_commitments__dom_elmt__class_name = "page_pseudo_body__FOR_VIEWS_commitments__dom_elmt__class_name";
    this.page_pseudo_body__FOR_VIEWS_process__dom_elmt__class_name = "page_pseudo_body__FOR_VIEWS_process__dom_elmt__class_name";
    this.page_pseudo_body__FOR_VIEWS_graph_commitments__dom_elmt__class_name = "page_pseudo_body__FOR_VIEWS_graph_commitments__dom_elmt__class_name";
    // and the current class name of the main outer area?
    this.page_pseudo_body__FOR_VIEWS_process__CURRENT_class_name = this.page_pseudo_body__FOR_VIEWS_commitments__dom_elmt__class_name;


    // general class for selected items
    // ( just changes the background colour and maybe the font markup )
    this.views_switching_area__SELECTED_views_menu_item = "views_switching_area__SELECTED_views_menu_item";



    //// the (top) main items bar
    this.views_switching_area__main_items__outer_area = "views_switching_area__main_items__outer_area";

    // a general item in the menu ( except the first)
    this.views_switching_area__main_items__link_items_item = "views_switching_area__main_items__link_items_item";


    // first text ( "view" )
    this.views_switching_area__main_items__view_text = "views_switching_area__main_items__view_text";

    // the table link item
    this.views_switching_area__main_items__table_link_n_text = "views_switching_area__main_items__table_link_n_text"

    // 
    this.views_switching_area__main_items__graph_link_n_text = "views_switching_area__main_items__graph_link_n_text";

    // factsheet text
    this.views_switching_area__main_items__factsheet_link_n_text = "views_switching_area__main_items__factsheet_link_n_text";



    //////////  IDRC LOGO AREA  //////////
    //////////  IDRC LOGO AREA  //////////
    //////////  IDRC LOGO AREA  //////////

    this.idrc_logo_outer_box = "idrc_logo_outer_box";
    this.idrc_logo_inner_text_box = "idrc_logo_inner_text_box";
    this.idrc_logo_inner_logo_box = "idrc_logo_inner_logo_box";



    //// the (lower) sub items 
    //		- eg. with the name of different datasets
    //  this name stays constant, the others change
    this.views_switching_area__subitems_items__outer_area = "views_switching_area__subitems_items__outer_area";

    //// submenu type specifying classes
    //		- switch these depending on whether a 
    //		table / graph / face sheet submenu is desired
    //
    //	FOR THE TABLE VIEW 
    this.views_switching_area__submenu__table_view = "views_switching_area__submenu__table_view";
    //
    //	FOR THE GRAPH VIEW 
    this.views_switching_area__submenu__graph_view = "views_switching_area__submenu__graph_view";
    //
    //	FOR THE FACT SHEET VIEW 
    this.views_switching_area__submenu__factSheet_view = "views_switching_area__submenu__factSheet_view";



    this.views_switching_area__subitems_items__dataset__text = "views_switching_area__subitems_items__dataset__text";

    // generall class for links items
    this.views_switching_area__subitems__link_items_item = "views_switching_area__subitems__link_items_item";

    // and the selected version of the above
    this.views_switching_area__subitems__link_items_item__SELECTED = "views_switching_area__subitems__link_items_item__SELECTED";

    // links + texts
    this.views_switching_area__subitems_items__commitments__text = "views_switching_area__subitems_items__commitments__text";
    this.views_switching_area__subitems_items__process__text = "views_switching_area__subitems_items__process__text";



    ///////////			 ////////////
    ///////////   data   ////////////
    ///////////			 ////////////


    ///  Commitments data
    this.table_data__commitment_data__url = "/sites/default/files/irm_explorer/data/Combined_Database_1_-_Sheet1___edition20150515__COPY.csv";


    /// and the same for Process data 
    //// this.table_data__process_data__url = "data/google_sheet_csv_fetch/Process_Database_for_web_new_version__20150325__with_col_nums.csv";
    /* this.table_data__process_data__url = "data/Process_Database_for_web_new_version__20150325__with_col_nums___modified20150422.csv";*/
    // this.table_data__process_data__url = "data/Process_Database_for_web_new_version__version20150429.csv";
    this.table_data__process_data__url = "/sites/default/files/irm_explorer/data/Process_Database_for_web_new_version__20150514.csv";

    ///  initiallly loaded data
    // commitment data
    this.table_data__RAW__commitmentData_edition = [];
    // process data
    this.table_data__RAW__processData_edition = [];





    ////////  lookup table for country names
    ////////
    ////////	- we'll use it to convert country names
    ////////		into letter codes








    /////////////////////////////////////////////  
    /////////////////////////////////////////////   objects 
    /////////////////////////////////////////////   objects 
    /////////////////////////////////////////////




    /* 

     to keep the graph types separate?
     - the data and its processing is with each object
     */

    // this.table_view_obj = function( main_parent_object_this__reference ){

    this.table_view_obj = function( ){


        ////////	name of this object
        ////////
        this.name_of_this_object = "blank_name";



        // the possible objects
        this.possible_objects__table_view = "table_view";
        this.possible_objects__graph_view = "graph_view";
        this.possible_objects__factsheet_view = "factsheet_view";

        // the possible datasets
        this.possible_datasets__commitments = "commitments";
        this.possible_datasets__process = "process";

        // the CURRENTLY SELECTED views and datasets
        this.curr_desired_display_obj_as_text = this.possible_objects__table_view ;
        this.curr_desired_dataset_as_text = this.possible_datasets__commitments;





        ///////  
        /////////  modes - general
        ////////
        /////////


        /////  has this object been set up before?
        //		( good to know if want to avoid resetting filtering settings
        //			if one sees this object again )
        this.has_this_object_been_set_up_visuall_before = false;

        ///// country or commitment centric filtering?
        //  just to fool-proof the values a bit - for the country/commitment centric setting below
        this.curr_commitment_viewing_mode__commitmentCentric_value = "commitment_centric";
        this.curr_commitment_viewing_mode__countryCentric_value = "country_centric";

        //// indicates the current preference for 
        //		commitment organisation - commitment- or country-centric
        //    possible values include : "commitment_centric" / "country_centric"
        this.curr_commitment_viewing_mode__country_or_commitment_centric_mode = this.curr_commitment_viewing_mode__countryCentric_value;

        ///// sorting
        // has the sorting setting been set at all?
        this.are_we_sorting = false;
        // which column are we sorting by
        this.sorting_by_col_num = 0;
        // and in what direction?
        this.direction_of_sorting = "DOWN" ;



        ////////
        //////// objects
        ///////////
        ///////////

        // the main object
        /////  this.main_parent_object_this = main_parent_object_this__reference;
        this.main_parent_object_this ;


        ////  commitment display object(s)
        //		- the container of the dom and the data for 
        //		commitments, whether listed commitment-centrically 
        //		( in which case there's only one object)
        //			or country-centrically
        //			( in which case there is one object per country )
        this.commitment_display__n_filterning_n_sorting_areas = [];




        /////////   
        /////////   data
        //////////////
        ///////////////


        /////  is the data loaded…?
        //
        // 	 a flag that indicates whether the data 
        //		for the object has been loaded and formatted
        this.is_relev_data_loaded_and_formatted = false;


        ////  the re-formatted data
        // 		...ready to go into either the 
        //		commitments-listed-alphabetiacally-form
        //		or the sorted-alphabetically by country form
        this.table_data__formatted_according_to_relevant_column_order ;

        ////  this is the final form of the data
        //		before it ends up in the table
        //		...arranged :
        //			- commitment-centrically ( alphabetically )
        //			- country-centrically ( by country, alphabetically )
        this.table_data_arranged_commitment_or_country_centric;


        /////////   
        /////////   export data
        ////////	


        this.export_data__filename_of_exported_data = "selected_irm_data.csv";

        //  different definitions of possible commitments to export in the export data function
        this.export_data__diff_kinds_of_data_to_export__matching = "matching";
        this.export_data__diff_kinds_of_data_to_export__NONmatching = "NONmatching";
        this.export_data__diff_kinds_of_data_to_export__unfiltered = "unfiltered";

        //  and the chosen set of variables is indicated here 
        this.sorts_of_commitments_to_export = this.export_data__diff_kinds_of_data_to_export__matching ;

        //  out data separator symbol
        this.export_data__out_array__variable_separator_symbol = ";";
        //  out data line seprator symbol
        this.export_data__out_array__line_separator_symbol = "\n";



        ////////
        ////////	DATA
        ////////  total matching/absolute number commitment count
        ////////

        this.total_commitment_count__matching_commitment_count = 0;
        this.total_commitment_count__all_commitments_count = 0;




        ////////
        /////////  DOM objects ( for the table view )
        /////////





        /// the header main area
        // -- that badass header with search options as well as the header of the table
        this.table_view_main_header_area__dom_elmt ;
        this.table_view_main_header_area__dom_id_name =  "table_view_main_header_area__dom_elmt";
        // the height
        this.table_view_main_header_area__dom_elmt__height_px_y = -99;
        this.table_view_main_header_area__dom_elmt__top_px_y = -99;

        ///// the height that triggers the javascript header manipulation
        this.scrolltop_height_triggering_VERTICAL_javascript_HEADER_REPOSITIONING__offset = -100;

        /// the class name of all the outer DOM elements for this object ( i.e. all the elements below )
        //		- eg. the table header/ country listing / commitment area / search / menu areas
        //  - good for showing/hiding things from this table.
        this.table_view__main_outer_areas__class_name = "table_view_main_outer_areas__dom_elmt";

        // and within this, the search and other options area above the table 
        this.table_view_main_header_area__search_n_options_area__dom_elmt ;
        this.table_view_main_header_area__search_n_options_area__dom_id_name = "table_view_main_header_area__search_n_options_area__dom_elmt" ;

        // and within the main header area, the columns!
        this.table_view_main_header_area__column_headers_area__dom_elmt ;
        this.table_view_main_header_area__column_headers_area__dom_id_name = "table_view_main_header_area__column_headers_area__dom_elmt";

        ///// the text search field
        this.table_view_main_header_area__search_n_options_area__text_search_field__id_name = "table_view_main_header_area__search_n_options_area__text_search_field__id_name" ;

        ///// the text search field - INPUT AREA
        this.table_view_main_header_area__search_n_options_area__text_search_field__INPUT_AREA__id_name = "table_view_main_header_area__search_n_options_area__text_search_field__INPUT_AREA__id_name" ;

        ///// the text search field - SEARCH ICON inside the text area
        this.table_view_main_header_area__search_n_options_area__text_search_field__SEARCH_ICON__id_name = "table_view_main_header_area__search_n_options_area__text_search_field__SEARCH_ICON__id_name";

        ///// the reset filters button
        this.table_view_main_header_area__search_n_options_area__reset_settings_button__id_name = "table_view_main_header_area__search_n_options_area__reset_settings_button__id_name" ;

        ///// the export data button
        this.table_view_main_header_area__search_n_options_area__export_data_button__id_name = "table_view_main_header_area__search_n_options_area__export_data_button__id_name" ;



        /////// moueover region

        /// the mouseover region 
        // the actual pre-selected mouseover div
        this.mouseover_div__preselected ;

        this.mouseover_div__outer_div_dom_element__id_name = "mouseover_div__outer_div_dom_element__id_name";

        /// the mouseover - header
        this.mouseover_div__header__outer_area = "mouseover_div__header__outer_area";

        /// the mouseover - body 
        this.mouseover_div__body__outer_area = "mouseover_div__body__outer_area";

        /// the class that makes this visible
        this.mouseover_div__outer_div_dom_element__IS_VISIBLE = "mouseover_div__outer_div_dom_element__IS_VISIBLE";

        //// the class that makes this invisible
        this.mouseover_div__outer_div_dom_element__IS_INVISIBLE = "mouseover_div__outer_div_dom_element__IS_INVISIBLE";


        //// within the moueover boxes


        // - summary statistics mouseover

        // an individual detailed breadown outer row
        this.mouseover_summary_statistics__breakdown_statistics_row = "mouseover_summary_statistics__breakdown_statistics_row";

        // the value name
        this.mouseover_summary_statistics__breakdown_statistics_row__value_name = "mouseover_summary_statistics__breakdown_statistics_row__value_name";

        // detailed breakdown row : percent number
        this.mouseover_summary_statistics__breakdown_statistics_row__percent_num = "mouseover_summary_statistics__breakdown_statistics_row__percent_num";

        // detailed breakdown row : absolute found relevant commitments for this value number
        this.mouseover_summary_statistics__breakdown_statistics_row__abs_found_commitments_num = "mouseover_summary_statistics__breakdown_statistics_row__abs_found_commitments_num";

        // detailed breakdown row : absolute number of commitments marching given value
        this.mouseover_summary_statistics__breakdown_statistics_row__abs_num_of_commitments= "mouseover_summary_statistics__breakdown_statistics_row__abs_num_of_commitments";





        ///// (dom names) Country operations menu

        // country operations - top menu
        this.country_operations_menu__top_item__class_name = "country_operations_menu__top_item";

        // country operations - drop down menu - outer area
        this.country_operations_menu__drop_down_area__outer__class_name = "country_operations_menu__drop_down_area__outer";

        /// general menu item classes 

        // country operations - drop down menu - inner area - general menu option item
        this.country_operations_menu__drop_down_area__menu_item__general_menu_item__class_name = "country_operations_menu__drop_down_area__general_menu_item";

        // country operations - drop down menu - inner area - general menu option item - SELECTED EDITION
        this.country_operations_menu__drop_down_area__menu_item__SELECTED__class_name = "country_operations_menu__drop_down_area__general_menu_item__SELECTED";

        // country operations - drop down menu - inner area - general menu option item - HOVER edition
        this.country_operations_menu__drop_down_area__menu_item__HOVER__class_name = "country_operations_menu__drop_down_area__general_menu_item__HOVER";

        //// special item classes
        //
        // country operations - drop down menu - inner area - show summmary statistics line
        this.country_operations_menu__drop_down_area__menu_item__showSummaryStatistics__class_name = "country_operations_menu__drop_down_area__menu_item__showSummaryStatistics";

        // country operations - drop down menu - inner area - menu_option_num_2
        this.country_operations_menu__drop_down_area__menu_item__menuItemNum_two__class_name = "country_operations_menu__drop_down_area__menu_item__menuItemNum_two";


        // country operations - drop down menu - inner area - menu_option_num_3
        this.country_operations_menu__drop_down_area__menu_item__menuItemNum_three__class_name = "country_operations_menu__drop_down_area__menu_item__menuItemNum_three";

        // country operations - drop down menu - inner area - menu_option_num_4
        this.country_operations_menu__drop_down_area__menu_item__menuItemNum_four__class_name = "country_operations_menu__drop_down_area__menu_item__menuItemNum_four";


        // country operations - drop down menu - inner area - Show only commitments
        this.country_operations_menu__drop_down_area__menu_item__ShowCommitmentsOrganisedByCountry__class_name = "country_operations_menu__drop_down_area__menu_item__ShowCommitmentsOrganisedByCountry__class_name";

        // country operations - drop down menu - inner area - Show only commitments
        this.country_operations_menu__drop_down_area__menu_item__ShowCommitmentsOnly__class_name = "country_operations_menu__drop_down_area__menu_item__ShowCommitmentsOnly__class_name";

        // country operations - drop down menu - inner area - Show only country statistics
        this.country_operations_menu__drop_down_area__menu_item__ShowCountryStatisticsOnly__class_name = "country_operations_menu__drop_down_area__menu_item__ShowCountryStatisticsOnly__class_name";



        // country operations - drop down menu - inner area - Show selected countries only
        this.country_operations_menu__drop_down_area__menu_item__showSelectedCountriesOnly__class_name = "country_operations_menu__drop_down_area__menu_item__showSelectedCountriesOnly__class_name";

        // country operations - drop down menu - inner area - Reset country settings!
        this.country_operations_menu__drop_down_area__menu_item__resetCommitmentDisplaySettings__class_name = "country_operations_menu__drop_down_area__menu_item__resetCommitmentDisplaySettings__class_name";



        // country operations - drop down menu - inner area - menu_option_num_3

        // country operations - drop down menu - inner area - menu_option_num_4

        // country operations - drop down menu - inner area - menu_option_num_5

        // country operations - drop down menu - inner area - menu_option_num_6

        ///// country operations : do we have the menu or not?
        //
        this.do_we_have_a_country_operations_menu = true;



        ////// do we have a text search field
        this.do_we_have_a_text_search_field = true;




        //// the country names area
        //
        //  BELOW the header
        this.table_view__countryNamesEtAl_area__belowHeadersArea__dom_elmt ;
        this.table_view__countryNamesEtAl_area__belowHeadersArea__id_name =  "table_view__countryNamesEtAl_area__belowHeadersArea__id_name" ;
        // the width
        this.table_view__countryNamesEtAl_area__dom_elmt__width = -99;
        // for the 'normal' distance of the country names relative to the header
        this.table_view__countryNamesEtAl_area__dom_elmt__normal_distance_from_header_top__dy = -99;

        // country names area - INSIDE the header area 
        //		- holding the headers for the country listing, 
        //			such that they don't scroll out of view
        // dom element reference
        this.table_view__countryNamesEtAl_area__headersArea__dom_elmt ;
        //  dom id name
        this.table_view__countryNamesEtAl_area__headersArea__id_name =  "table_view__countryNamesEtAl_area__headersArea__id_name" ;

        // column description objects WITHIN the country listings header
        this.table_view__countryNamesEtAl_area__headersArea__columnHeader__dom_elmt ;
        this.table_view__countryNamesEtAl_area__headersArea__columnHeader__id_name = "table_view__countryNamesEtAl_area__headersArea__columnHeader__dom_elmt" ;



        // main commitments listing area
        this.table_view__main_commitments_listing_area__dom_elmt ;
        this.table_view__main_commitments_listing_area__id_name =  "table_view__main_commitments_listing_area__id_name" ;
        // the height difference between the top of the header and the top of the commitments listing
        //	- good for later positioning
        this.table_view__main_commitments_listing_area__dom_elmt__normal_distance_from_header_top__dy = -99;



        ////////  column headers 
        ////////		- dom thingies
        ////////

        this.column_header_outer_object_general_class__class_name = "column_header_outer_object_general_class__class_name";




        ////////
        //// data parameters
        ///////////
        ///////////

        // where is the header?
        this.raw_data__header_row_num = 2;

        // which is the first data row
        this.raw_data__first_data_row_num = 3;

        /// NOTE NOTE NOTE : TEMPORARY 
        // which is the last row one should work on 
        // HOPEFULLY this'll be replaced by some variable/function to check 
        //	for the last row...
        this.raw_data__last_row_to_work_on = 1980;


        ///// column numbers

        // raw data
        // where does one find the column with information 
        //	whether a commitment has bene revieewed or no
        this.raw_data__col_num_of_NR_info_col = 0;
        this.raw_data__NotReviewed_data_item_as_string = "NR";

        // parsed data
        this.parsed_data__col_num_of__commitment_title = 1;
        this.parsed_data__col_num_of__full_commitment_text = 2;


        //// data parameters : text seach related
        //
        //// which column has the commitment title
        this.raw_data__col_num_of__the_commitment_title_col = 1;
        //
        //// which column has the commitment title
        this.raw_data__col_num_of__full_text_col = 2;



        ////////
        /////// formatted data
        ///////////
        ///////////


        // where is the tags column
        this.index_of_tags_column_in_formatted_data_rows = 4;

        ///// the index and visibility columns
        // 		 in each formatted data row

        // how far from the data rows is the index column
        this.index_offset_from_a_data_rows_data_columns__of_row_INDEX_col = 1;
        this.final_col_num_of_INDEX_column = -1;

        // how far from the data rows is the visibility column
        this.index_offset_from_a_data_rows_data_columns__of_row_VISIBILITY_col = 2;
        this.final_col_num_of_VISIBILITY_column = -2;




        ////////  tags
        ////////		-
        ////////

        // what's the max number of tags one can have selected?
        this.tag__max_number_of_tags_that_can_be_selected_at_once = 4;




        ///////////				 			////////////
        ///////////  filtering & sorting   ////////////
        ///////////						  ////////////


        ///////////				
        ///////////  filtering settings
        ///////////									

        /* - not quite needed given the data processing order-of-processing below --
         this.data_processing__are_we_doing_basic_values_filtering = true;
         this.data_processing__are_we_doing_tags_filtering = true;
         this.data_processing__are_we_doing_text_search_filtering = false;
         */

        /// the current text search string 
        this.text_search__current_search_string = "";


        // just to make sure these things are spelled right
        this.data_processing__text_search_filtering = "text_search_filtering";
        this.data_processing__basic_value_filtering_value = "basic_value_filteirng";
        this.data_processing__tags_filtering = "tags_filtering_filtering";
        this.data_processing__sorting = "sorting";

        // the order of which things are processed 
        this.order_of_commitment_data_processing__table_edition = [ this.data_processing__text_search_filtering, this.data_processing__tags_filtering, this.data_processing__basic_value_filtering_value, this.data_processing__sorting ];
        ///////    this.order_of_commitment_data_processing__table_edition = [ this.data_processing__text_search_filtering, this.data_processing__tags_filtering ];
        // and the graph edition of the filtering
        this.order_of_commitment_data_processing__graph_edition = [ this.data_processing__tags_filtering, this.data_processing__basic_value_filtering_value ];

        /// TESTING WITH ONE FILTERING AT A TIME
        ///////  this.order_of_commitment_data_processing__graph_edition = [ this.data_processing__basic_value_filtering_value ];
        //////   this.order_of_commitment_data_processing__graph_edition = [ this.data_processing__tags_filtering ];


        ///////////			
        ///////////   column names  / types 
        ///////////			

        // what's a column type for regular filtering? - >> a country name column
        this.column_type_of_just_text = "country_name_column";

        // what's a column type for regular filtering? - >> a Text column
        this.column_type_of_just_text = "text_column";

        // what's a column type for regular filtering? - >> Basic filter column <<
        this.column_type_for_regular_filtering = "basic_filter_column";

        // what's a relevant column type for Tags filtering? 
        this.column_type_for_TAGS_filtering = "tags_column";


        // valid column types for text filtering!
        this.relevant_column_types_for__text_filtering = [ this.column_type_of_just_text ];


        // valid column types for basic column filtering !
        ////  this.relevant_column_types_for__basic_column_filtering__not_tags_filtering = [ this.column_type_for_regular_filtering, this.column_type_for_TAGS_filtering ];
        this.relevant_column_types_for__basic_column_filtering__not_tags_filtering = [ this.column_type_for_regular_filtering ];

        // valid column types for tags based filtering
        this.relevant_column_types_for__TAGS_column_filtering__not_basic_column_filtering = [ this.column_type_for_TAGS_filtering ];

        // tags filtering : valid tags values for filtering
        this.valid_tag_value_types_for_filtering = [ "value_choice" ];

        // index of data value in individual cell tags data
        this.tags__index_of_data_val_in_individual_tags_data = 0;

        // beta : temporary : HARDCODED : column num of 




        ///////////			
        ///////////   data indicies
        ///////////	

        this.tags_data_in_RAW_DATA__ROW_NUM_of_tags_descriptions = 1;
        this.tags_data_in_parsed_commitment_data__index_of_tag_name = 2;




        ///////////						////////////
        ///////////  display areas      ////////////
        ///////////						////////////

        //// specifying some of the acceptable values in the 
        //     "set_display_areas_isSelected_selected_property_to_particular_value__trueFalseInverse"
        //		function

        // for setting all values to true
        this.display_areas__change_all_display_areas_selection_values__value__true = true;
        // as above but for false
        this.display_areas__change_all_display_areas_selection_values__value__false = false;
        // inverses the current values
        this.display_areas__change_all_display_areas_selection_values__value__inverse = "inverse";




        ///////////				////////////
        ///////////  text search box, reset, data export area
        ///////////				////////////

        ////// search box

        // the default search box text
        this.table_view__text_search_box__default_search_field_text = 'search';

        // the search box mouse-over text
        this.table_view__text_search_box__mouseover_text = 'search';


        ///////////				////////////
        ///////////  headers    ////////////
        ///////////				////////////


        ///  which columns go where?
        //		- i.e. the leftmost country listing column 
        //		is a separate dom object from the commitments listing
        //		and it will hold one or more columns from the commitments listing
        //		- SO, we need to define which it holds

        this.country_listing_areas__hold_the_following_columns = [0, 1];

        this.commitments_listing_area__holds_the_following_columns = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];


        /// slightly hardcoded - useful for when 
        //		binding handlers to commitmnt cells. 					
        this.country_listing__commitment_title_col_num_i = 1;
        //  the index of the full commitment text 
        //	column, in the commitment listing div
        this.commitment_listing__full_commitment_text_i__relative_to_commitment_listing_col_nums = 0;

        //  and the absolute positions of the country name, commitment title / full text, in 
        //	the individual commitemnt data
        this.commitment_data__country_name_index = 0;
        this.commitment_data__commitment_title_text_index = 1;
        this.commitment_data__fullcommitment_text_index = 2;






        ///////////				////////////
        ///////////  columns    ////////////
        ///////////				////////////


        ////  arrays of column header description obejcts

        // associative array 
        this.column_information_objects__as_an_associative_array;

        // linear array - holds info about the columns and the order they're to be in
        this.column_information_objects_listed_in_the_order_of_the_columns = [];

        /// number of positions in the ordered column list 
        // - the index + visibility cols are after these
        this.num_of__column_information_objects_and_columns = 22;


        /////////   column title area - above the values part of the header

        this.column_title_area__height = 171;


        ////////    header - below column title area

        // standard header area height - i.e. the area below the title
        this.header_where_values_are__height = 100;

        // how far from the bottom area the values allowed to be..?
        this.header_where_values_are__distance_of_values_from_bottom_of_header = 10;


        ///////     ?????????


        ////////    tags!  ///////

        this.tag_type__tag_value_choice = "value_choice";
        this.tags__key_for_tag_i__inclHeaders = "non_header_tag_i";



        ///////////				////////////
        ///////////  values     ////////////
        ///////////				////////////


        ///// for the value data - which are the keys for the data
        this.value_data_obj__key_for_colmn_num = "column_num";
        this.value_data_obj__key_for_value_num = "value_num";
        this.value_data_obj__key_for_display_area_num = "display_area_num";




        ///////////										////////////
        ///////////  mouse-overs + mouseover data        ////////////
        ///////////										////////////

        //// which mouseovers do we do?

        // table view : summary statistics?
        this.bind_mouse_overs_to_summary_statistics_lines = true;

        // table view : commitment titles and full commitment texts
        this.bind_mouse_overs_to_commitment_titles_and_full_commitment_texts = true;


        //// data keys for when embedding data in 
        //		various commitment cells

        // display area i 
        this.commitment_cells_data_keys__curr_display_area_i = "display_area_i";
        // which commitment number? 
        // ( remmber, these are matching commitmetns!)
        this.commitment_cells_data_keys__curr_commitment_i = "commitment_i";
        // which colum number?
        this.commitment_cells_data_keys__curr_commitment_or_summary_statistics_or_header_COLUMN_i = "commitment_or_summary_statistics_cell__COLUMN_i";


        ///////////							////////////
        ///////////  menus - closing areas mostly        ////////////
        ///////////							////////////

        /* - table : commitments view : menus
         variables to keep track of which menu is open
         */

        this.menus__name__tags_menu = "tags_menu";
        this.menus__name__country_operations_menu = "country_operations_menu";
        // and which menu is currenly open
        this.menus__currently_open_menu_name = "";


        /*  table : commitments view : which options are clicked
         */

        // the country centric organisation
        this.menus__tableCommitments_viewingOptions__option_as_txt__view_country_centric_commitment_organisation = "menus__tableCommitments_viewingOptions__option_as_txt__view_country_centric_commitment_organisation";

        // commitment centric organisation
        this.menus__tableCommitments_viewingOptions__option_as_txt__view_commitment_centric_commitment_organisation = "menus__tableCommitments_viewingOptions__option_as_txt__view_commitment_centric_commitment_organisation";

        // show summary statistics only
        this.menus__tableCommitments_viewingOptions__option_as_txt__view_summary_statistics_of_country_centric_commitment_organisation = "menus__tableCommitments_viewingOptions__option_as_txt__view_summary_statistics_of_country_centric_commitment_organisation";


        //// which is the current option?
        this.menus__tableCommitments_viewingOptions__current_option = "menus__tableCommitments_viewingOptions__option_as_txt__view_country_centric_commitment_organisation";


        ////////////////////////  
        ////////////////////////   various objects   ////////////
        ////////////////////////   various objects   ////////////
        ////////////////////////



        //  Commitments display (and filtering) 
        /*
         This object holds the commitment data and dom references for displaying commitments,
         whether the listing is:
         - commitment centric (in which case there's only one of these objects)
         or
         - country centric ( in which case there's an object per country )

         ___ Each object holds:

         Data:
         - all relevant commitments ( unfiltered )

         - all matching commitments ( from the nearest filter & search)
         - all non-marching commitments

         - counter for number of matching column values ( a copy of the col descr obj but with valeu counts)

         - relevant filtering functions/methods ( even if external )

         DOM:
         - refernces to the containing object for this area in the main commitments listing area + country listing area
         - also in the inner areas of these objects

         Methods:
         - for creating the relevant objects within the country listing + main commitments listing area.


         */

        this.commitment_display__n_filtering_n_sorting_object = function( parent_this, relevant_commitments_for_this_obj, country_name_ ){


            ///  the this of the parent
            this.parent_this_ ;




            ///////  identity etc 
            ///////

            this.country_name = "unknown_country_name__maybe_commitment_centric";

            // and the iso code equivalent
            this.country_name_as_iso_code = "no_iso_country_code";



            ///////   falgs

            /// are we selected ?
            //		- ie did we click on us in the interface?
            this.is_selected = false;




            //////  Data   /////
            //////

            ///  this is where the commitments, in their 'raw' form, are,
            //		though formatted correctly re: columns and all
            this.all_commitments__unfiltered = [];

            /// this is for the commitments that pass throught the current filter
            //
            this.curr_filter_n_sort__MATCHING_commitments = [];

            // and this is for the ones that don't pass through the filter
            //
            this.curr_filter_n_sort__NOT_MATCHING_commitments = [];




            /////  graph view : a list of columns with selected values
            //		( good for filtering only those columns… in the graph view )
            this.list_of_col_info_objs_with_selected_Values = [];


            /////////  SHOWING / DISPLAY
            ////		- flags for 
            ////			showing or not showing different parts
            ////			of the display area object.
            ////			EG - (not) showing the whole display area
            ////			EG - (not) showing the commitments
            ////		- THESE FLAGS ARE INTERPRETED 
            ////		by the draw-me commands


            ////  Show this display area?
            //
            this.show_this_display_area = true;

            ////  Show this areas commitments?
            //
            this.show_this_display_areas_commitments = true;


            ////////  NOT USED |  NOT USED  |  NOTE USED
            ////////  NOT USED |  NOT USED  |  NOTE USED
            ////////  NOT USED |  NOT USED  |  NOTE USED
            /////  Commitemnts display metadata
            //
            //  flag to whether non-matching commitments are displayed too
            //	- if they are being shown, well, then add the non-filtered entries too!
            //	THIS IS GOOD FOR figuring out whether to have a 'show all'
            //	button or not in the visual display of the area
            this.showing_non_matching_commitments__true_false = false;





            ////  graph area data

            // this is where we put the value
            // that results from the graph area filtering
            this.calculated_graph_area_score__decimal = 0.0;





            ////  data indicies


            /////  values counter object
            //
            //			- help keep track of how values of various 
            //			column values have been found in the commitments of this
            //			display area
            //
            //			that is, this object is a copy of the col headers object
            //			but with values counters for each value...
            //			such that the number of commitments with a particular value
            //			can be counted in the filteirng process
            //
            //			based on the column description object
            this.values_counter_obj_for_this_display_obj ;




            /////  index for text searches of the commitments
            //
            //		- it's made out of an associative array with 
            //			- enough (horizontal / top level) entries for unique words
            //			- with each word entry/object holding an array 
            //			the length of the commitment count, 
            //			- each cell in the lastmentioned array holds indicies as to 
            //			where in the commitment array a word was found
            //		- the array of the same length as the [which????!] commitments
            //		is in the same order as the commitments one is searching through
            //		and refers to these. so, the second entry is for the second array

            //// the text search indexes
            //
            // for the commitment titles
            this.text_search_index = { a: -99 };




            ////   DOM elements   /////
            ////  


            /* - outer display area classes - */

            // for the outer area of this display area
            this.curr_display_area__outer_div__dom_reference = "display_area_div_outer";

            // for the completely outer area 
            //	- holding the contract-expand buttons etc...
            //  --- for the main commitments area
            this.curr_commitment_display_area__main_area__outer_area_DOM_reference ;
            this.curr_commitment_display_area__main_area__outer_area_DOM_reference__class_name = "commitment_display_area__in_main_commitment_listing_area";

            //  --- and the equivalent
            //		 in the country listing area
            this.curr_commitment_display_area__country_listing_area__outer_area_DOM_reference;
            this.curr_commitment_display_area__country_listing_area__outer_area_DOM_reference__class_name = "commitment_display_area__in_country_listing_area";


            /* - inner display area classes - */

            //  display area : INNER : div above commitments listing
            this.display_area__inner__area_above_commitments_listing__class_name = "display_area__inner__area_above_commitments_listing";

            //  display area : INNER : COMMITMENTS LISTING
            this.display_area__inner__commitments_listing_area__class_name = "display_area__inner__commitments_listing_area";

            //  display area : INNER : div after commitments listing
            this.display_area__inner__area_below_commitments_listing__class_name = "display_area__inner__area_below_commitments_listing";



            ////   inside the commitments listing area - 

            //  standard outer summary statistics outer div
            this.display_area__commitments_listing_area__summary_statistics_row_outer_div__class_name = "individual_summary_statistics_ROW";

            ////  the special things for the country name 

            //  country name area : the outer cell containing the click box and the text+underlinge
            this.display_area__commitments_listing_area__summary_statistics___countryNameCell__outer_cell = "summary_statistics_row___country_name__outer_area";

            // country name area : the click box
            this.display_area__commitments_listing_area__summary_statistics___countryNameCell__click_box = "summary_statistics_row___country_name__clickbox";

            // clickbox selection class
            this.display_area__commitments_listing_area__summary_statistics___countryNameCell__click_box__SELECTED_class = "summary_statistics_row___country_name__clickbox__SELECTED";

            // country name area : the actual text (and underline) area 
            this.display_area__commitments_listing_area__summary_statistics___countryNameCell__text_box = "summary_statistics_row___country_name__country_name_text";

            //  summary statistics inner cell class
            this.display_area__commitments_listing_area__summary_statistics_row_inner_div__class_name = "summary_statistics_row___value_cell__inner_cell";

            //  summary statistics : percentage makup
            this.display_area__commitments_listing_area__summary_statistics__perentage_markup__class_name = "summary_statistics_row___value_cell__percent_markup";

            //  summary statistics : absolute numbers makup
            this.display_area__commitments_listing_area__summary_statistics__absolute_numbers_markup__class_name = "summary_statistics_row___value_cell__absolute_numbers_markup";

            //  standard Commitment row OUTER div
            this.display_area__commitments_listing_area__commitment_row_outer_div__class_name = "individual_commitment_ROW";




            ////  Cells - commitment row

            //// Commitment cell : OUTER div
            this.commitment_cell__value_cell__outer_div__class_name = "individual_commitment_cell__outer_div";


            //// Inner cells 
            //

            // Country name column : inner text cell
            this.country_col__inner_text_cell__class_name = "individual_commitment_cell__country_col_cell__inner_cell";

            // Commitment title and/or Full commitment text
            this.commitment_title_andOr_full_commitment_text__inner_cell__class_name = "individual_commitment_cell__commitment_title_andOr_full_commitment_text__inner_cell";

            /// tags inner cells
            this.tags__tags_value__inner_cell__class_name = "individual_tags_cell__inner_tag_value_cell";
            // and the "+N more" tags cell
            this.tags__tags_value__plusNmoreTagsCell__class_name = "individual_tags_cell__plusNmoreTags_cell";


            // Commitment cell : inner value area of value cell
            this.commitment_cell__value_cell__inner_value_txt_area__class_name = "individual_commitment_cell__inner_value_cell_txt_area";








            ////   Visual parameters   /////
            ////



            ///////////////////					////////////////////////////////////////////
            ///////////////////  	Methods 	////////////////////////////////////////////   
            ///////////////////					////////////////////////////////////////////





            // // //  set up outer dom areas for this display area
            //			 in the country listing and the commitment display areaas

            this.set_up_OUTER_divs_for_this_display_area_in_country_n_commitment_listing_areas = function( relev_table_obj__this ){

                // hellow!
                //////   console.log(">>>> set_up_outer_divs_for_this_display_area_in_country_n_commitment_listing_areass()");

                ////  for the country listing area - below the header
                $( "#"+relev_table_obj__this.table_view__countryNamesEtAl_area__belowHeadersArea__id_name ).append( "<div class='"+this.curr_display_area__outer_div__dom_reference+" "+this.country_name_as_iso_code+"'><div class='countryname'></div></div>");

                ///// for the main commitments listing area
                $( "#"+relev_table_obj__this.table_view__main_commitments_listing_area__id_name ).append( "<div class='"+this.curr_display_area__outer_div__dom_reference+" "+this.country_name_as_iso_code+"'></div>" );

            }




            // // // set up the inner divs of a display area 

            this.set_up_INNER_divs_for_this_display_area_in_country_n_commitment_listing_areas = function( relev_table_obj__this ){

                // hellow
                /////  console.log(">>>> set_up_INNER_divs_for_this_display_area_in_country_n_commitment_listing_areas() ");


                ///// Set up the AREA ABOVE THE COMMITMENTS
                /// the area above the commitments - in the country names listing
                $( "#"+relev_table_obj__this.table_view__countryNamesEtAl_area__belowHeadersArea__id_name ).find( "."+this.country_name_as_iso_code ).append("<div class="+this.display_area__inner__area_above_commitments_listing__class_name+"></div>");

                /// the area above the commitments - in the commitemnts listing
                $( "#"+relev_table_obj__this.table_view__main_commitments_listing_area__id_name ).find( "."+this.country_name_as_iso_code ).append("<div class="+this.display_area__inner__area_above_commitments_listing__class_name+"></div>");



                //// SET UP THE COMMITENTS LISTING AREA
                ///    - in the country names listing
                $( "#"+relev_table_obj__this.table_view__countryNamesEtAl_area__belowHeadersArea__id_name ).find( "."+this.country_name_as_iso_code ).append("<div class="+this.display_area__inner__commitments_listing_area__class_name+"></div>");

                ///    - in the commitemnts listing
                $( "#"+relev_table_obj__this.table_view__main_commitments_listing_area__id_name ).find( "."+this.country_name_as_iso_code ).append("<div class="+this.display_area__inner__commitments_listing_area__class_name+"></div>");



                //// Set up the area below the commitments listing areas
                ///    - in the country names listing
                $( "#"+relev_table_obj__this.table_view__countryNamesEtAl_area__belowHeadersArea__id_name ).find( "."+this.country_name_as_iso_code ).append("<div class="+this.display_area__inner__area_below_commitments_listing__class_name+"></div>");

                ///    - in the commitemnts listing
                $( "#"+relev_table_obj__this.table_view__main_commitments_listing_area__id_name ).find( "."+this.country_name_as_iso_code ).append("<div class="+this.display_area__inner__area_below_commitments_listing__class_name+"></div>");


            }




            //  // //  test : print unfiltered commitments in the current display object commitments showing aera

            this.test__add_all_unfiltered_commitments_in_curr_display_obj_area = function( relev_table_obj__this ){

                // 
                console.log(">>>>> test__add_all_unfiltered_commitments_in_curr_display_obj_area() ");

                // select the relavant country listing display area 
                this.curr_display_area__country_listing_area__country_listing_area = $( "#"+relev_table_obj__this.table_view__countryNamesEtAl_area__belowHeadersArea__id_name+" ."+this.country_name_as_iso_code+" ."+this.display_area__inner__commitments_listing_area__class_name );

                // select the relavant commitment display area 
                this.curr_display_area__country_listing_area__commitments_listing_area = $( "#"+relev_table_obj__this.table_view__main_commitments_listing_area__id_name+" ."+this.country_name_as_iso_code+" ."+this.display_area__inner__commitments_listing_area__class_name );


                ///$( "."+this.country_name_as_iso_code ).find( "."+this.display_area__inner__commitments_listing_area__class_name );

                ////////  this.curr_display_area__country_listing_area__country_listing_area.css("border", "1px solid red");
                ////////  this.curr_display_area__country_listing_area__commitments_listing_area.css("border", "1px solid red");

                //// loop through the current commitments and add them 
                for( this.i = 0; this.i < this.all_commitments__unfiltered.length; this.i++ ){

                    // convert the commitment to a string and be merry...appending
                    this.curr_display_area__country_listing_area__country_listing_area.append( "<div class='commitment i"+this.i+"'>"+String( this.all_commitments__unfiltered[this.i].slice(0,1) )+"</div>");
                    //
                    this.curr_display_area__country_listing_area__commitments_listing_area.append( "<div class='commitment i"+this.i+"'>"+String( this.all_commitments__unfiltered[this.i].slice(1,2) )+"</div>");



                    //// select the most current outer commitment area
                    this.curr_commitment_area__commitment_listing_area = $( "#"+relev_table_obj__this.table_view__main_commitments_listing_area__id_name+" ."+this.country_name_as_iso_code+" .commitment" ).filter( ":last" );

                    ////////// this.curr_commitment_area__commitment_listing_area = this.curr_display_area__country_listing_area__commitments_listing_area.filter(".commitment").filter(":last");

                    // add some elements in the commitment areas
                    for( this.j = 2; this.j < this.all_commitments__unfiltered[ this.i ].length; this.j++ ){

                        this.curr_commitment_area__commitment_listing_area.append("<div class='commitment_cell'>"+this.all_commitments__unfiltered[this.i][this.j]+"</div>");

                    }

                    $(".commitment_cell").css( { "position" : "relative", "float" : "left", "border" : "1px dashed purple", "width" : "30px", "height" : "13px", "overflow" : "hidden" } );


                }

                // add a border
                $(".commitment").css( { "border" : "1px dashed red", "height" : "15px" } );

            }






            ///////////////////////////   summary statistics row adding
            //
            //
            //


            /////////////   add a display area/country level summary statistics line
            ////////			

            this.add_display_area_summary_statistics_line__to_commitments_listing_area = function( root_this_, remove_or_keep_existing_commitments, curr_display_area_i ){

                // hellow
                console.log( ">>>>>  add_display_area_summary_statistics_line__to_commitments_listing_area() - for |"+this.country_name+"| - adding a summary statistics line" );




                ////////// select the commitments listing areas

                // select the relavant country listing display area 
                this.curr_display_area__country_listing_area__commitments_listing_area = $( "#"+root_this_.parent_this_.table_view__countryNamesEtAl_area__belowHeadersArea__id_name+" ."+this.country_name_as_iso_code+" ."+this.display_area__inner__commitments_listing_area__class_name );

                // select the relavant commitment display area 
                this.curr_display_area__main_commitment_listing__commitments_listing_area = $( "#"+root_this_.parent_this_.table_view__main_commitments_listing_area__id_name+" ."+this.country_name_as_iso_code+" ."+this.display_area__inner__commitments_listing_area__class_name );


                ////////  remove existing commitemnts depending on setting
                if( remove_or_keep_existing_commitments === "remove" ){
                    /// .empty() works better than .remove()
                    this.curr_display_area__country_listing_area__commitments_listing_area.empty();
                    this.curr_display_area__main_commitment_listing__commitments_listing_area.empty();
                }
                // else : well, do nothing




                //// add the outer summary statistics row 
                //
                //     - to the country listing column
                this.curr_display_area__country_listing_area__commitments_listing_area.append("<div class="+root_this_.display_area__commitments_listing_area__summary_statistics_row_outer_div__class_name+"></div>");
                //     - to the commitment listing column
                this.curr_display_area__main_commitment_listing__commitments_listing_area.append("<div class="+root_this_.display_area__commitments_listing_area__summary_statistics_row_outer_div__class_name+"></div>");



                ////  select the current commitment row in the country listing area
                //
                //////  this.curr_commitment_row__in__country_listing_area =  this.curr_summary_statistics_row__in_country_listing_area.find( "."+root_this_.display_area__commitments_listing_area__commitment_row_outer_div__class_name ).eq( this.curr_commitment_to_add_i );
                this.curr_summary_statistics_row__in__country_listing_area = this.curr_display_area__country_listing_area__commitments_listing_area.find( "."+root_this_.display_area__commitments_listing_area__summary_statistics_row_outer_div__class_name );

                ////  select the current commitment row in the main commitments listing area
                //
                this.curr_summary_statistics_row__in__main_commitments_listing_area =  this.curr_display_area__main_commitment_listing__commitments_listing_area.find( "."+root_this_.display_area__commitments_listing_area__summary_statistics_row_outer_div__class_name );


                /// modify them to test that they're selected
                /////////    this.curr_summary_statistics_row__in__country_listing_area.css("border", "1px solid green");
                /////////    this.curr_summary_statistics_row__in__main_commitments_listing_area.css("border", "1px solid green");

                /// bind data to the country name area
                //		- so a button click will help reveal which display area clicks +
                //		menu options affect
                this.curr_summary_statistics_row__in__country_listing_area.data( root_this_.parent_this_.value_data_obj__key_for_display_area_num, curr_display_area_i );

                //// DEBUG - print what we just stored.
                ///// console.log(" /// curr summary statistics row data - key === "+root_this_.parent_this_.value_data_obj__key_for_display_area_num );
                ///// console.log( this.curr_summary_statistics_row__in__country_listing_area.data( root_this_.parent_this_.value_data_obj__key_for_display_area_num ) );


                ////   add the table cells that go into the country listing area
                //
                for( this.column_i_in_country_listing_area = 0; this.column_i_in_country_listing_area < root_this_.parent_this_.country_listing_areas__hold_the_following_columns.length ; this.column_i_in_country_listing_area++  ){

                    /// do different things depending on the cell/column type

                    /// just to make this a bit clearer
                    this.curr_real_col_num = root_this_.parent_this_.country_listing_areas__hold_the_following_columns[ this.column_i_in_country_listing_area ];


                    // try inserting the generated cell into the current commitment row
                    this.curr_summary_statistics_row__in__country_listing_area.append( this.generate_relevant_cell_text_to_add_to_the_current_summary_statistics_row_given_relevant_column_num( root_this_, this.curr_real_col_num  ) );


                    // && attach a data value which references the relevant column number
                    //	
                    ///////  this.curr_summary_statistics_row__in__country_listing_area.find( ":last-child" ).data(  root_this_.parent_this_.value_data_obj__key_for_colmn_num, this.column_i_in_country_listing_area );
                    ///////  this.curr_summary_statistics_row__in__country_listing_area.find( ":last-child" ).css("border", "1px dashed blue");									
                }



                ////   add the table cells that go into the main commitment listing area
                //

                for( this.column_i_in_commitments_listing_area = 0; this.column_i_in_commitments_listing_area < root_this_.parent_this_.commitments_listing_area__holds_the_following_columns.length ; this.column_i_in_commitments_listing_area++  ){

                    /// do different things depending on the cell/column type

                    /// just to make this a bit clearer
                    this.curr_real_col_num = root_this_.parent_this_.commitments_listing_area__holds_the_following_columns[ this.column_i_in_commitments_listing_area ];

                    ///// console.log("\t\t looping commitment #"+this.curr_commitment_to_add_i+" / col #"+this.column_i_in_country_listing_area+" in the commitments listing area, which is a real col #"+this.curr_real_col_num+" / with cell value "+this.curr_cell_value );

                    ///////// OUTSOURCE THE CELL GENERATION FROM HERE PLEASE!
                    ///// console.log(" and the cell to insert is… "+this.generate_relevant_cell_text_to_add_to_the_current_commitment_given_cell_value_n_column_num( root_this_, this.curr_cell_value, this.curr_real_col_num  ) );

                    // try inserting the generated cell into the current commitment row
                    this.curr_summary_statistics_row__in__main_commitments_listing_area.append( this.generate_relevant_cell_text_to_add_to_the_current_summary_statistics_row_given_relevant_column_num( root_this_, this.curr_real_col_num  ) );

                    //// attach a data value which references the relevant column number
                    //
                    //  fetch the rlevant column count
                    this.curr_column_num_given_commitment_listing_area_loc = this.column_i_in_commitments_listing_area + root_this_.parent_this_.country_listing_areas__hold_the_following_columns.length ;

                    ///////  this.curr_summary_statistics_row__in__main_commitments_listing_area.find( ":last-child" ).data(  root_this_.parent_this_.value_data_obj__key_for_colmn_num, this.curr_column_num_given_commitment_listing_area_loc );
                    //////  this.curr_summary_statistics_row__in__main_commitments_listing_area.find( ":last-child" ).css("border", "1px dashed red");
                }



            }








            ///////////   generate the relevant cell to insert into the current commitment row
            ///////////
            ///////////

            this.generate_relevant_cell_text_to_add_to_the_current_summary_statistics_row_given_relevant_column_num = function( root_this_, curr_col_num ){

                // hello
                ////////   console.log(">>>>  generate_relevant_cell_text_to_add_to_the_current_summary_statistics_row_given_relevant_column_num");



                ////// add the outer cell
                //			+ configure its left loc and width 
                this.inner_cell_txt = "";


                /////  do different things depending on the cell type

                //
                // for the commitments name / country name listing
                if( root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].column_header_outer_containing_div_id_name === "country_name" ){

                    //// for the country name
                    // 		- basic div with a border on the bottom
                    //		- right aligned

                    //////  this.inner_cell_txt = "<div class='"+root_this_.display_area__commitments_listing_area__summary_statistics___countryNameCell__text_box+"'>"+root_this_.country_name+"</div>";
                    this.inner_cell_txt = "<div class='"+root_this_.display_area__commitments_listing_area__summary_statistics___countryNameCell__outer_cell+"'><div class='"+root_this_.display_area__commitments_listing_area__summary_statistics___countryNameCell__click_box+"'></div><div class='"+root_this_.display_area__commitments_listing_area__summary_statistics___countryNameCell__text_box+"'>"+root_this_.country_name+"</div></div>";

                }
                //
                // for the commitment title or commitment full text
                else if( root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].column_header_outer_containing_div_id_name === "commitment_title_text" || root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].column_header_outer_containing_div_id_name === "full_commitment_text" ){

                    //// 
                    //	  nothing to add for the country level statistic
                    //			for the commitment title / full text columns

                }
                //
                // for the tags column
                else if( root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].column_type === "tags_column" ){

                    //// 
                    //	  nothing to add for the country level statistic
                    //			for the tags column


                }
                //
                //  and if it's not one of these, then it's a basic value cell!
                //		- which should be rich in summary statistics 
                else{


                    ///////   console.log("\t\t - working on col num "+curr_col_num );
                    ////   set the width according to the looked up width
                    /////////   this.text_area_width = root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].this_col_table_cell_text_area_width__looked_up ;

                    // add the value area 
                    ///////   this.inner_cell_txt = "<div class='"+root_this_.commitment_cell__value_cell__inner_value_txt_area__class_name+"' style='width: "+this.text_area_width+"px' >"+curr_cell_value+"</div>"
                    ////////////   this.inner_cell_txt = "<div class='"+this.relev_class_name_for_this_value+" "+root_this_.commitment_cell__value_cell__inner_value_txt_area__class_name+"' style='width: "+this.text_area_width+"px' >summary stats</div>"

                    /////   console.log(" found/non found commitments === "+root_this_.curr_filter_n_sort__MATCHING_commitments.length+" / "+root_this_.curr_filter_n_sort__NOT_MATCHING_commitments.length );

                    /////this.total_num_of_commitments = root_this_.curr_filter_n_sort__MATCHING_commitments.length+root_this_.curr_filter_n_sort__NOT_MATCHING_commitments.length ;
                    this.total_num_of_commitments = root_this_.all_commitments__unfiltered.length;

                    this.found_vs_total_percentage = parseInt( (root_this_.curr_filter_n_sort__MATCHING_commitments.length / root_this_.all_commitments__unfiltered.length ) *1000 )/10  ;


                    /// this.inner_cell_txt = "<div class='"+root_this_.commitment_title_andOr_full_commitment_text__inner_cell__class_name+"' style='width: 100%' ><span class='"+root_this_.display_area__commitments_listing_area__summary_statistics__perentage_markup__class_name+"'>"+this.found_vs_total_percentage+"%</span> <span class='"+root_this_.display_area__commitments_listing_area__summary_statistics__absolute_numbers_markup__class_name+"'>("+root_this_.curr_filter_n_sort__MATCHING_commitments.length+"/"+this.total_num_of_commitments+")</span></div>";

                    this.inner_cell_txt = "<div class='"+root_this_.commitment_title_andOr_full_commitment_text__inner_cell__class_name+"' style='width: 100%' ><span class='"+root_this_.display_area__commitments_listing_area__summary_statistics__absolute_numbers_markup__class_name+"'>"+root_this_.curr_filter_n_sort__MATCHING_commitments.length+"/"+root_this_.all_commitments__unfiltered.length+"</span> <span class='"+root_this_.display_area__commitments_listing_area__summary_statistics__perentage_markup__class_name+"'>("+this.found_vs_total_percentage+"%)</span></div>";

                }


                //// the outer cell, with the inner cell text
                this.outer_cell_text = "<div class='"+root_this_.commitment_cell__value_cell__outer_div__class_name+"' style='left:"+root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].this_col_lookedUp_left_lox__px_x+"px; width:"+root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].this_col_lookedUp__regular_width__given_if_its_expandedOrCompressed+"px' >"+this.inner_cell_txt+"<div>";


                ////////// and return someting nice
                return this.outer_cell_text;

            }





            ///////////////////////////   commitments row adding
            //
            //
            //



            /////////////   add commitments to the display area's commitment listing area
            ////////			( do note this function can add both matching and non-matching commitments)

            this.add_commitments_to_commitment_listing_area__NEW_inserts_more_html_in_one_bit = function( root_this_, remove_or_keep_existing_commitments ){

                // hellow
                console.log( ">>>>>  add_commitments_to_commitment_listing_area__NEW_inserts_more_html_in_one_bit() - "+this.country_name+" - and are we showing the commitments of this display area object? |"+root_this_.show_this_display_areas_commitments+"| commitments to the" );

                //////// check/sort out which commitments to add
                //

                // commitments go here
                this.commitments_to_add = [];

                /// if showing commitments
                if(  root_this_.show_this_display_areas_commitments === true ){
                    //
                    this.commitments_to_add = this.curr_filter_n_sort__MATCHING_commitments ;
                }
                // if not showing commitments
                else if( root_this_.show_this_display_areas_commitments === false ){
                    //
                    this.commitments_to_add = this.curr_filter_n_sort__MATCHING_commitments = [];
                }

                /*
                 //// add non-matching commitments
                 else if( add_matching_or_nonmatching_commitments === "not_matching" ){
                 this.commitments_to_add = this.curr_filter_n_sort__NOT_MATCHING_commitments ;
                 }
                 //// add all unfiltered commitments
                 else if( add_matching_or_nonmatching_commitments === "unfiltered" ){
                 this.commitments_to_add = this.all_commitments__unfiltered ;
                 }
                 //// add no commitments
                 else if( add_matching_or_nonmatching_commitments === "none" ){
                 this.commitments_to_add = this.all_commitments__unfiltered ;
                 }
                 */


                // more feedback
                ///// console.log(" adding "+this.commitments_to_add.length+" no of commitments to the display area of "+this.country_name );



                ////////// select the commitments listing areas

                // select the current display area's commitment listing area in the country listing column 
                this.curr_display_area__country_listing_area__commitments_listing_area = $( "#"+root_this_.parent_this_.table_view__countryNamesEtAl_area__belowHeadersArea__id_name+" ."+this.country_name_as_iso_code+" ."+this.display_area__inner__commitments_listing_area__class_name );

                // select the current display area's commitment listing area in the commitment listing column
                this.curr_display_area__main_commitment_listing__commitments_listing_area = $( "#"+root_this_.parent_this_.table_view__main_commitments_listing_area__id_name+" ."+this.country_name_as_iso_code+" ."+this.display_area__inner__commitments_listing_area__class_name );


                ////////  remove existing commitemnts depending on setting
                if( remove_or_keep_existing_commitments === "remove" ){
                    /// .empty() works better than .remove()
                    this.curr_display_area__country_listing_area__commitments_listing_area.empty();
                    this.curr_display_area__main_commitment_listing__commitments_listing_area.empty();
                }
                // else : well, do nothing




                ////////  commitments texts
                ///			- instead of adding them to the dom directly, we put them together bit by bit

                // for the country listing area
                this.curr_display_obj__country_listing_area___comittment_listings_as_html_txt = "";
                // for the comittment listing area
                this.curr_display_obj__comittment_listing_area___comittment_listings_as_html_txt = "";



                //// loop and add
                for( this.curr_commitment_to_add_i = 0; this.curr_commitment_to_add_i < this.commitments_to_add.length; this.curr_commitment_to_add_i++  ){

                    // feedback
                    ///// console.log("\t\t - working on commitment num "+this.curr_commitment_to_add_i+" / "+this.commitments_to_add.length );


                    //// add the outer commitment row cells
                    //
                    //     - to the country listing column
                    ////	this.curr_display_area__country_listing_area__commitments_listing_area.append("<div class="+root_this_.display_area__commitments_listing_area__commitment_row_outer_div__class_name+"></div>");
                    //     - to the commitment listing column
                    ////	this.curr_display_area__main_commitment_listing__commitments_listing_area.append("<div class="+root_this_.display_area__commitments_listing_area__commitment_row_outer_div__class_name+"></div>");


                    //// ADD/open the outer commitment row cells
                    //
                    // to the country listing area
                    this.curr_display_obj__country_listing_area___comittment_listings_as_html_txt += "<div class="+root_this_.display_area__commitments_listing_area__commitment_row_outer_div__class_name+">";
                    // to the comittment listing area
                    this.curr_display_obj__comittment_listing_area___comittment_listings_as_html_txt += "<div class="+root_this_.display_area__commitments_listing_area__commitment_row_outer_div__class_name+">";



                    ////  select the current commitment row in the country listing area
                    //
                    //////  this.curr_commitment_row__in__country_listing_area =  this.curr_display_area__country_listing_area__commitments_listing_area.find( "."+root_this_.display_area__commitments_listing_area__commitment_row_outer_div__class_name ).eq( this.curr_commitment_to_add_i );
                    //  COMMENT OUT  COMMENT OUT  COMMENT OUT  COMMENT OUT
                    this.curr_commitment_row__in__country_listing_area =  this.curr_display_area__country_listing_area__commitments_listing_area.find( "."+root_this_.display_area__commitments_listing_area__commitment_row_outer_div__class_name ).last();

                    ////  select the current commitment row in the main commitments listing area
                    //
                    //  COMMENT OUT  COMMENT OUT  COMMENT OUT  COMMENT OUT
                    this.curr_commitment_row__in__main_commitments_listing_area =  this.curr_display_area__main_commitment_listing__commitments_listing_area.find( "."+root_this_.display_area__commitments_listing_area__commitment_row_outer_div__class_name ).last();



                    ////   add the table cells that go into the country listing area
                    //
                    for( this.column_i_in_country_listing_area = 0; this.column_i_in_country_listing_area < root_this_.parent_this_.country_listing_areas__hold_the_following_columns.length ; this.column_i_in_country_listing_area++  ){

                        /// do different things depending on the cell/column type

                        /// just to make this a bit clearer
                        this.curr_real_col_num = root_this_.parent_this_.country_listing_areas__hold_the_following_columns[ this.column_i_in_country_listing_area ];

                        this.curr_cell_value = this.commitments_to_add[ this.curr_commitment_to_add_i ][ this.curr_real_col_num ];

                        ///// console.log("\t\t looping commitment #"+this.curr_commitment_to_add_i+" / col #"+this.column_i_in_country_listing_area+" in the country listing area, which is a real col #"+this.curr_real_col_num+" / with cell value "+this.curr_cell_value );

                        ///////// OUTSOURCE THE CELL GENERATION FROM HERE PLEASE!
                        ///// console.log(" and the cell to insert is… "+this.generate_relevant_cell_text_to_add_to_the_current_commitment_given_cell_value_n_column_num( root_this_, this.curr_cell_value, this.curr_real_col_num  ) );

                        // try inserting the generated cell into the current commitment row
                        //  COMMENT OUT  COMMENT OUT  COMMENT OUT  COMMENT OUT
                        ///////////////// this.curr_commitment_row__in__country_listing_area.append( this.generate_relevant_cell_text_to_add_to_the_current_commitment_given_cell_value_n_column_num( root_this_, this.curr_cell_value, this.curr_real_col_num  ) );
                        // append the text of teh current cells
                        this.curr_display_obj__country_listing_area___comittment_listings_as_html_txt +=  this.generate_relevant_cell_text_to_add_to_the_current_commitment_given_cell_value_n_column_num( root_this_, this.curr_cell_value, this.curr_real_col_num  )


                        //////// remember to close the outer commitment areas
                    }



                    ////   add the table cells that go into the main commitment listing area
                    //

                    for( this.column_i_in_commitments_listing_area = 0; this.column_i_in_commitments_listing_area < root_this_.parent_this_.commitments_listing_area__holds_the_following_columns.length ; this.column_i_in_commitments_listing_area++  ){

                        /// do different things depending on the cell/column type

                        /// just to make this a bit clearer
                        this.curr_real_col_num = root_this_.parent_this_.commitments_listing_area__holds_the_following_columns[ this.column_i_in_commitments_listing_area ];

                        this.curr_cell_value = this.commitments_to_add[ this.curr_commitment_to_add_i ][ this.curr_real_col_num ];

                        ///// console.log("\t\t looping commitment #"+this.curr_commitment_to_add_i+" / col #"+this.column_i_in_country_listing_area+" in the commitments listing area, which is a real col #"+this.curr_real_col_num+" / with cell value "+this.curr_cell_value );

                        ///////// OUTSOURCE THE CELL GENERATION FROM HERE PLEASE!
                        ///// console.log(" and the cell to insert is… "+this.generate_relevant_cell_text_to_add_to_the_current_commitment_given_cell_value_n_column_num( root_this_, this.curr_cell_value, this.curr_real_col_num  ) );

                        // try inserting the generated cell into the current commitment row
                        ////  this.curr_commitment_row__in__main_commitments_listing_area.append(  this.generate_relevant_cell_text_to_add_to_the_current_commitment_given_cell_value_n_column_num( root_this_, this.curr_cell_value, this.curr_real_col_num  ) );
                        this.curr_display_obj__comittment_listing_area___comittment_listings_as_html_txt += this.generate_relevant_cell_text_to_add_to_the_current_commitment_given_cell_value_n_column_num( root_this_, this.curr_cell_value, this.curr_real_col_num  );

                        //////// remember to close the outer commitment areas
                    }


                    //// CLOSE outer commitment row cells
                    //
                    // to the country listing area
                    this.curr_display_obj__country_listing_area___comittment_listings_as_html_txt += "</div>";
                    // to the comittment listing area
                    this.curr_display_obj__comittment_listing_area___comittment_listings_as_html_txt += "</div>";


                }

                /// and FINALLY! 

                //// append the final commitment listings to the outer areas
                ////////////  this.curr_display_area__country_listing_area__commitments_listing_area.html( this.curr_display_obj__country_listing_area___comittment_listings_as_html_txt );
                ////////////  this.curr_display_area__main_commitment_listing__commitments_listing_area.html( this.curr_display_obj__comittment_listing_area___comittment_listings_as_html_txt );

                /// TEMPORARILY USING APPEND RATHER THAN HTML
                this.curr_display_area__country_listing_area__commitments_listing_area.append( this.curr_display_obj__country_listing_area___comittment_listings_as_html_txt );
                this.curr_display_area__main_commitment_listing__commitments_listing_area.append( this.curr_display_obj__comittment_listing_area___comittment_listings_as_html_txt );

            }





            /////////////   add commitments to the display area's commitment listing area
            ////////			( do note this function can add both matching and non-matching commitments)

            this.add_commitments_to_commitment_listing_area = function( root_this_, remove_or_keep_existing_commitments ){

                // hellow
                console.log( ">>>>>  add_commitments_to_commitment_listing_area() - "+this.country_name+" - and are we showing the commitments of this display area object? |"+root_this_.show_this_display_areas_commitments+"| commitments to the" );

                //////// check/sort out which commitments to add
                //

                // commitments go here
                this.commitments_to_add = [];

                /// if showing commitments
                if(  root_this_.show_this_display_areas_commitments === true ){
                    //
                    this.commitments_to_add = this.curr_filter_n_sort__MATCHING_commitments ;
                }
                // if not showing commitments
                else if( root_this_.show_this_display_areas_commitments === false ){
                    //
                    this.commitments_to_add = this.curr_filter_n_sort__MATCHING_commitments = [];
                }

                /*
                 //// add non-matching commitments
                 else if( add_matching_or_nonmatching_commitments === "not_matching" ){
                 this.commitments_to_add = this.curr_filter_n_sort__NOT_MATCHING_commitments ;
                 }
                 //// add all unfiltered commitments
                 else if( add_matching_or_nonmatching_commitments === "unfiltered" ){
                 this.commitments_to_add = this.all_commitments__unfiltered ;
                 }
                 //// add no commitments
                 else if( add_matching_or_nonmatching_commitments === "none" ){
                 this.commitments_to_add = this.all_commitments__unfiltered ;
                 }
                 */


                // more feedback
                ///// console.log(" adding "+this.commitments_to_add.length+" no of commitments to the display area of "+this.country_name );



                ////////// select the commitments listing areas

                // select the current display area's commitment listing area in the country listing column 
                this.curr_display_area__country_listing_area__commitments_listing_area = $( "#"+root_this_.parent_this_.table_view__countryNamesEtAl_area__belowHeadersArea__id_name+" ."+this.country_name_as_iso_code+" ."+this.display_area__inner__commitments_listing_area__class_name );

                // select the current display area's commitment listing area in the commitment listing column
                this.curr_display_area__main_commitment_listing__commitments_listing_area = $( "#"+root_this_.parent_this_.table_view__main_commitments_listing_area__id_name+" ."+this.country_name_as_iso_code+" ."+this.display_area__inner__commitments_listing_area__class_name );


                ////////  remove existing commitemnts depending on setting
                if( remove_or_keep_existing_commitments === "remove" ){
                    /// .empty() works better than .remove()
                    this.curr_display_area__country_listing_area__commitments_listing_area.empty();
                    this.curr_display_area__main_commitment_listing__commitments_listing_area.empty();
                }
                // else : well, do nothing



                //// loop and add
                for( this.curr_commitment_to_add_i = 0; this.curr_commitment_to_add_i < this.commitments_to_add.length; this.curr_commitment_to_add_i++  ){

                    // feedback
                    ///// console.log("\t\t - working on commitment num "+this.curr_commitment_to_add_i+" / "+this.commitments_to_add.length );


                    //// add the outer commitment row cells
                    //
                    //     - to the country listing column
                    this.curr_display_area__country_listing_area__commitments_listing_area.append("<div class="+root_this_.display_area__commitments_listing_area__commitment_row_outer_div__class_name+"></div>");
                    //     - to the commitment listing column
                    this.curr_display_area__main_commitment_listing__commitments_listing_area.append("<div class="+root_this_.display_area__commitments_listing_area__commitment_row_outer_div__class_name+"></div>");



                    ////  select the current commitment row in the country listing area
                    //
                    //////  this.curr_commitment_row__in__country_listing_area =  this.curr_display_area__country_listing_area__commitments_listing_area.find( "."+root_this_.display_area__commitments_listing_area__commitment_row_outer_div__class_name ).eq( this.curr_commitment_to_add_i );
                    this.curr_commitment_row__in__country_listing_area =  this.curr_display_area__country_listing_area__commitments_listing_area.find( "."+root_this_.display_area__commitments_listing_area__commitment_row_outer_div__class_name ).last();

                    ////  select the current commitment row in the main commitments listing area
                    //
                    this.curr_commitment_row__in__main_commitments_listing_area =  this.curr_display_area__main_commitment_listing__commitments_listing_area.find( "."+root_this_.display_area__commitments_listing_area__commitment_row_outer_div__class_name ).last();



                    ////   add the table cells that go into the country listing area
                    //
                    for( this.column_i_in_country_listing_area = 0; this.column_i_in_country_listing_area < root_this_.parent_this_.country_listing_areas__hold_the_following_columns.length ; this.column_i_in_country_listing_area++  ){

                        /// do different things depending on the cell/column type

                        /// just to make this a bit clearer
                        this.curr_real_col_num = root_this_.parent_this_.country_listing_areas__hold_the_following_columns[ this.column_i_in_country_listing_area ];

                        this.curr_cell_value = this.commitments_to_add[ this.curr_commitment_to_add_i ][ this.curr_real_col_num ];

                        ///// console.log("\t\t looping commitment #"+this.curr_commitment_to_add_i+" / col #"+this.column_i_in_country_listing_area+" in the country listing area, which is a real col #"+this.curr_real_col_num+" / with cell value "+this.curr_cell_value );

                        ///////// OUTSOURCE THE CELL GENERATION FROM HERE PLEASE!
                        ///// console.log(" and the cell to insert is… "+this.generate_relevant_cell_text_to_add_to_the_current_commitment_given_cell_value_n_column_num( root_this_, this.curr_cell_value, this.curr_real_col_num  ) );

                        // try inserting the generated cell into the current commitment row
                        this.curr_commitment_row__in__country_listing_area.append( this.generate_relevant_cell_text_to_add_to_the_current_commitment_given_cell_value_n_column_num( root_this_, this.curr_cell_value, this.curr_real_col_num  ) );
                    }



                    ////   add the table cells that go into the main commitment listing area
                    //

                    for( this.column_i_in_commitments_listing_area = 0; this.column_i_in_commitments_listing_area < root_this_.parent_this_.commitments_listing_area__holds_the_following_columns.length ; this.column_i_in_commitments_listing_area++  ){

                        /// do different things depending on the cell/column type

                        /// just to make this a bit clearer
                        this.curr_real_col_num = root_this_.parent_this_.commitments_listing_area__holds_the_following_columns[ this.column_i_in_commitments_listing_area ];

                        this.curr_cell_value = this.commitments_to_add[ this.curr_commitment_to_add_i ][ this.curr_real_col_num ];

                        ///// console.log("\t\t looping commitment #"+this.curr_commitment_to_add_i+" / col #"+this.column_i_in_country_listing_area+" in the commitments listing area, which is a real col #"+this.curr_real_col_num+" / with cell value "+this.curr_cell_value );

                        ///////// OUTSOURCE THE CELL GENERATION FROM HERE PLEASE!
                        ///// console.log(" and the cell to insert is… "+this.generate_relevant_cell_text_to_add_to_the_current_commitment_given_cell_value_n_column_num( root_this_, this.curr_cell_value, this.curr_real_col_num  ) );

                        // try inserting the generated cell into the current commitment row
                        this.curr_commitment_row__in__main_commitments_listing_area.append( this.generate_relevant_cell_text_to_add_to_the_current_commitment_given_cell_value_n_column_num( root_this_, this.curr_cell_value, this.curr_real_col_num  ) );
                    }

                }

            }






            ///////////   generate the relevant cell to insert into the current commitment row
            ///////////
            ///////////

            this.generate_relevant_cell_text_to_add_to_the_current_commitment_given_cell_value_n_column_num = function( root_this_, curr_cell_value, curr_col_num ){

                // hello
                //////   console.log(">>>>  generate_relevant_cell_text_to_add_to_the_current_commitment_given_cell_value_n_column_num");


                // DEBUGGING
                ///////////  console.log(" generating cell - col type >>>> "+root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].column_type+" cell content === |"+curr_cell_value+"| col name === |"+root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].column_title__text+"|" );


                ////// add the outer cell
                //			+ configure its left loc and width 
                this.inner_cell_txt = "";


                /////  do different things depending on the cell type

                //
                // for the commitments name / country name listing
                if( root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].column_header_outer_containing_div_id_name === "country_name" ){

                    //// for the country name
                    // 		- basic div with a border on the bottom
                    //		- right aligned

                    this.inner_cell_txt = "<div class='"+root_this_.country_col__inner_text_cell__class_name+"'>"+curr_cell_value+"</div>";
                }
                //
                // for the commitment title or commitment full text
                else if( root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].column_header_outer_containing_div_id_name === "commitment_title_text" || root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].column_header_outer_containing_div_id_name === "full_commitment_text" ){

                    //// 
                    //		- fetch the commitment/full text and insert it
                    //		- markin on the left/right? 
                    this.inner_cell_txt = "<div class='"+root_this_.commitment_title_andOr_full_commitment_text__inner_cell__class_name+"'>"+curr_cell_value+"</div>";

                }
                //
                // for the tags column
                else if( root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].column_type === "tags_column" ){

                    //////   console.log(" creating a tags object!");

                    ///// go through the tags information in the current data line 
                    ////		& add found tags ( up to four tags )
                    ////		& add a +N tags if there's more than four tags
                    ////		- make a list of the all the tags, as text? /// for faster mouse-over lookups?
                    //		- set 


                    this.inner_cell_txt = "";

                    //
                    this.found_matching_tags = "";

                    this.count_of_matching_tags = 0;

                    ////  check which tags to check
                    //		- by looking in the column description object tags descriptions
                    for( this.curr_tag_col_desc_obj_i = 0; this.curr_tag_col_desc_obj_i < root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_tag_col_desc_obj_i++  ){


                        ///// check if it's a valid tag 
                        //		( eg. and not a header object )

                        if( root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_col_desc_obj_i ].type === root_this_.parent_this_.tag_type__tag_value_choice ){

                            ////   console.log(" aha ! tag # "+this.curr_tag_col_desc_obj_i+" is a valid tag ("+root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_col_desc_obj_i ].header_category_text+")");


                            ///// console.log(" checking curr cell value["+this.curr_tag_col_desc_obj_i+"] - which is "+curr_cell_value[ this.curr_tag_col_desc_obj_i ] );

                            /// how check if it has a positive value - i.e. that it's a tag in the data
                            if( curr_cell_value[ this.curr_tag_col_desc_obj_i ][0] === true ){

                                ///  console.log("\t - found a matching value!");
                                this.found_matching_tags += curr_cell_value[ this.curr_tag_col_desc_obj_i ][3];

                                this.count_of_matching_tags++;

                                if( this.count_of_matching_tags <= 4 ){
                                    /// this.inner_cell_txt += "<div class='"+root_this_.tags__tags_value__inner_cell__class_name+"'>"+curr_cell_value[ this.curr_tag_col_desc_obj_i ][3]+"</div>";
                                    this.inner_cell_txt += "<div class='"+root_this_.tags__tags_value__inner_cell__class_name+"'>"+curr_cell_value[ this.curr_tag_col_desc_obj_i ][ root_this_.parent_this_.tags_data_in_parsed_commitment_data__index_of_tag_name ]+"</div>";
                                }


                            }

                        }

                    }


                    // and if there are too many commitments to fit in the display area…
                    if( this.count_of_matching_tags > 4 ){
                        this.inner_cell_txt += "<div class='"+root_this_.tags__tags_value__plusNmoreTagsCell__class_name+"'>+<b>"+(this.count_of_matching_tags-4)+"</b> more</div>";
                    }


                    ////////   console.log("found "+this.count_of_matching_tags+" matching tags in this commitment and they look like this ");
                    /////////  console.log( this.found_matching_tags );


                }
                //
                //  and if it's not one of these, then it's a basic value cell!
                /////// else if( root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].column_type === "text_AND_numbers_column" ){ 
                else if( root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].column_type === "text_column" ){

                    // debugging
                    ///////// console.log(" generating cell - found |text_column| cell");

                    //// look up the relevant (colour) class of this cell
                    ///////    this.curr_class = root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].header__value_choice_categories__with_associative_keys_based_on_data_values[ this.curr_cell_value ].tableCells__class_name_selected ;

                    // fetch the relevant meta-data object
                    this.curr_value_metadata_obj = root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].header__value_choice_categories__with_associative_keys_based_on_data_values[ curr_cell_value ] ;

                    ///////  console.log(">>> num of objs in col info obj === "+root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns.length );

                    // create some DEFAULT placeholder values
                    this.curr_value_as_text = curr_cell_value;
                    this.relev_class_name_for_this_value = "tableCell_values__colours_1_of_7";

                    // / test if the value relevant value-meta-object exists or not
                    //  	and if it exists, use the relevant value-meta-object
                    if( this.curr_value_metadata_obj !== undefined ){
                        this.curr_value_as_text = this.curr_value_metadata_obj.header_category_text;
                        this.relev_class_name_for_this_value = this.curr_value_metadata_obj.tableCells__class_name_selected;
                    }
                    else{
                        console.log(" looks like the value |"+curr_cell_value+"| on column num "+curr_col_num+" is UNDEFINED :-( ");
                    }

                    /// look up the text version of the value of this cell
                    /////  this.curr_value_as_text = this.curr_value_metadata_obj.header_category_text ;

                    ///  fetch the class name associated with this value
                    ////// this.relev_class_name_for_this_value = this.curr_value_metadata_obj.header_category_text.tableCells__class_name_selected ;


                    ////   set the width according to the looked up width
                    this.text_area_width = root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].this_col_table_cell_text_area_width__looked_up ;

                    // add the value area 
                    ///////   this.inner_cell_txt = "<div class='"+root_this_.commitment_cell__value_cell__inner_value_txt_area__class_name+"' style='width: "+this.text_area_width+"px' >"+curr_cell_value+"</div>"
                    this.inner_cell_txt = "<div class='"+this.relev_class_name_for_this_value+" "+root_this_.commitment_cell__value_cell__inner_value_txt_area__class_name+"' style='width: "+this.text_area_width+"px' >"+this.curr_value_as_text+"</div>"



                }
                //
                //  and if it's not one of these, then it's a basic value cell!
                else if( root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].column_type === "basic_filter_column" ){

                    // debugging
                    ///////// console.log(" generating cell - found |basic_filter_column| cell");

                    //// look up the relevant (colour) class of this cell
                    ///////    this.curr_class = root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].header__value_choice_categories__with_associative_keys_based_on_data_values[ this.curr_cell_value ].tableCells__class_name_selected ;

                    // fetch the relevant meta-data object
                    this.curr_value_metadata_obj = root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].header__value_choice_categories__with_associative_keys_based_on_data_values[ curr_cell_value ] ;

                    ////////console.log(">>> num of objs in col info obj === "+root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns.length );

                    // create some placeholder values
                    this.curr_value_as_text = "blank";
                    this.relev_class_name_for_this_value = "";

                    // / test if the value relevant value-meta-object exists or not
                    //  	and if it exists, use the relevant value-meta-object
                    if( this.curr_value_metadata_obj !== undefined ){
                        this.curr_value_as_text = this.curr_value_metadata_obj.header_category_text;
                        this.relev_class_name_for_this_value = this.curr_value_metadata_obj.tableCells__class_name_selected;
                    }
                    else{
                        console.log(" looks like the value |"+curr_cell_value+"| on column num "+curr_col_num+" is UNDEFINED :-( ");
                    }

                    /// look up the text version of the value of this cell
                    /////  this.curr_value_as_text = this.curr_value_metadata_obj.header_category_text ;

                    ///  fetch the class name associated with this value
                    ////// this.relev_class_name_for_this_value = this.curr_value_metadata_obj.header_category_text.tableCells__class_name_selected ;


                    ////   set the width according to the looked up width
                    this.text_area_width = root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].this_col_table_cell_text_area_width__looked_up ;

                    // add the value area 
                    ///////   this.inner_cell_txt = "<div class='"+root_this_.commitment_cell__value_cell__inner_value_txt_area__class_name+"' style='width: "+this.text_area_width+"px' >"+curr_cell_value+"</div>"
                    this.inner_cell_txt = "<div class='"+this.relev_class_name_for_this_value+" "+root_this_.commitment_cell__value_cell__inner_value_txt_area__class_name+"' style='width: "+this.text_area_width+"px' >"+this.curr_value_as_text+"</div>"

                }


                //// the outer cell, with the inner cell text
                this.outer_cell_text = "<div class='"+root_this_.commitment_cell__value_cell__outer_div__class_name+"' style='left:"+root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].this_col_lookedUp_left_lox__px_x+"px; width:"+root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].this_col_lookedUp__regular_width__given_if_its_expandedOrCompressed+"px' >"+this.inner_cell_txt+"</div>";


                ////////// and return someting nice
                return this.outer_cell_text;

            }




            /////////////////////
            /////////////////////	deduplicate found commitments array
            /////////////////////		( for the graph view filters
            /////////////////////			which add duplicate results
            /////////////////////			when filteirng values and then tags
            /////////////////////			- need deduplication)
            /////////////////////


            this.deduplicate_matching_commitments_array = function( root_this_ ){

                console.log(">>>> deduplicate_matching_commitments_array() for display area "+root_this_.country_name );


                /// //// 
                this.col_num_of_commitment_title = root_this_.parent_this_.parsed_data__col_num_of__commitment_title ;

                /// this is where the results go
                this.deduplicated_list_of_commitments = [];


                // feedback - found col num for commitmetn data deduplicaiton checking
                console.log(" \t\t - the col name being checked when deduplicating is |"+this.col_num_of_commitment_title+"|");


                //////// do depulicate

                // loop!
                for( this.curr_original_matching_commitment_i = 0; this.curr_original_matching_commitment_i < root_this_.curr_filter_n_sort__MATCHING_commitments.length; this.curr_original_matching_commitment_i++ ){

                    ////
                    //// flag to check whether the commitments has been found elsewhere
                    this.curr_commitment_found_elsewhere_amongst_matching_commitments = false;


                    //// loop through the out commitments to check whether the current commitment is there 
                    // if it is, then don't include it there
                    for( this.curr_out_commitment_i = 0; this.curr_out_commitment_i  < this.deduplicated_list_of_commitments.length; this.curr_out_commitment_i ++ ){

                        if( root_this_.curr_filter_n_sort__MATCHING_commitments[ this.curr_original_matching_commitment_i ][ this.col_num_of_commitment_title ] ===  this.deduplicated_list_of_commitments[ this.curr_out_commitment_i ][ this.col_num_of_commitment_title ] ){

                            this.curr_commitment_found_elsewhere_amongst_matching_commitments = true;

                            break;
                        }

                    }

                    //  if the commitment hasn't been found in the 
                    //		out/deduplicated commitments,
                    //		then add it
                    if( this.curr_commitment_found_elsewhere_amongst_matching_commitments === false ){

                        // add the commitment 
                        //	if it's not found elsewhere
                        this.deduplicated_list_of_commitments.push( root_this_.curr_filter_n_sort__MATCHING_commitments[ this.curr_original_matching_commitment_i ] );
                    }



                } // end original matching commitment list



                ///// replace the current matching commitments list 
                //		with the deduplicated list

                console.log("\ end of deduplication - going from a matching list of "+root_this_.curr_filter_n_sort__MATCHING_commitments.length+" items, to one of "+this.deduplicated_list_of_commitments.length+" items ");

                root_this_.curr_filter_n_sort__MATCHING_commitments = this.deduplicated_list_of_commitments.slice();

            }







            /////  ( below ) TESTING TESTING TESTING  ( below )
            /////  ( below ) TESTING TESTING TESTING  ( below )
            /////  ( below ) TESTING TESTING TESTING  ( below )
            /////  ( below ) TESTING TESTING TESTING  ( below )
            /////  ( below ) TESTING TESTING TESTING  ( below )


            //////////  set up relevant dom elements!
            ////			 DON'T FORGET TO WIPE EXISTING DOM ELEMENTS BEFOREHAND! 
            ////			eg $( "div" ).remove
            this.set_up_dom_elements_for_this_display_object__please = function( relev_table_obj__this ){

                // TEEEEEEEEEEST!
                $( "#"+relev_table_obj__this.table_view__main_commitments_listing_area__id_name ).append( "<div class='commitments_div_outer'>COMMITMENTS_DIV</div>");

            }


            /////   testing printing all the commitments... a bit simply
            //
            this.testTestTest__print_all_commitments = function( root_this_ ){

                // teeest
                this.all_commitments__unfiltered.map( function(d){

                    $(".commitments_div_outer:last").append("<div class='curr_commitment' style='margin:30px'>"+d[0]+" / "+d[1]+"</div>");
                });

            }


            /////  ( above ) TESTING TESTING TESTING  ( above )
            /////  ( above ) TESTING TESTING TESTING  ( above )
            /////  ( above ) TESTING TESTING TESTING  ( above )
            /////  ( above ) TESTING TESTING TESTING  ( above )
            /////  ( above ) TESTING TESTING TESTING  ( above )




            //////////  set up values counter object for this commitments display area ////////////
            //  ( counts the found and non-found occurrences of a particular value when filtering )
            //		( based on the col description object )
            //////////

            this.set_up_values_counter_for_this_commitment_display_area = function( root_this_ ){

                console.log(">>>> set_up_values_counter_for_this_commitment_display_area for display area "+root_this_.country_name );

                // make a nice little copy of the col description object
                ///   this.values_counter_obj_for_this_display_obj = this.parent_this_.column_information_objects_listed_in_the_order_of_the_columns.slice();
                root_this_.values_counter_obj_for_this_display_obj = [];
                ////// root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns.map( function(d){ root_this_.values_counter_obj_for_this_display_obj.push( d ); });


                for( this.col_num_i = 0; this.col_num_i < root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns.length; this.col_num_i++ ){

                    //
                    this.obj_to_insert = { column_class_name : root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_num_i ].column_class_name, total_num_of_commitments : 0,
                        header__value_choice_categories__listed_in_order_of_appearance : [] };

                    for( this.curr_value_i = 0; this.curr_value_i < root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_num_i ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_value_i++ ){

                        this.curr_value = root_this_.parent_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_num_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_value_i ];

                        this.obj_to_insert.header__value_choice_categories__listed_in_order_of_appearance.push( {
                            header__class_name_selected : this.curr_value.header__class_name_selected,
                            current_selection__selectedTrueFalse : this.curr_value.current_selection__selectedTrueFalse,
                            found_instances_of_this_value : 0,
                            found_instances_of_this_value__as_a_decimal__of_total_commitments_for_this_column : 0,
                            header_category_text : this.curr_value.header_category_text
                        } );

                    }

                    //
                    root_this_.values_counter_obj_for_this_display_obj.push( this.obj_to_insert );

                }

                /// debugging!
                console.log(" --- the values counter for this area ("+root_this_.country_name+" looks like this :");
                console.log( root_this_.values_counter_obj_for_this_display_obj );
                /* root_this_.values_counter_obj_for_this_display_obj.header__value_choice_categories__listed_in_order_of_appearance.map( function( d, i){
                 console.log( i+" :: "+d.found_instances_of_this_value+" : "+d.found_instances_of_this_value__as_a_decimal__of_total_commitments_for_this_column );
                 });
                 */


            }




            //////
            //////		- update counter objects
            //////				with:
            //////					- a total count of commitments per column
            //////					- for each value : a decimal value of the number of commitments
            //////					in that value, compared with the total number of commitments
            //////



            this.update_counter_obj_for_this_display_area_with_summary_statistics = function( root_this_ ){

                console.log(">>>> update_counter_obj_for_this_display_area_with_summary_statistics() for display area |"+root_this_.country_name+"|");


                ////////// loop through the col information obj counter objects
                for( this.curr_col_counter_i = 0 ; this.curr_col_counter_i < root_this_.values_counter_obj_for_this_display_obj.length; this.curr_col_counter_i++ ){

                    //////// console.log("\n\t - working on col info object #"+this.curr_col_counter_i );

                    //////// loop #1 through the values and count how many they are in total
                    ////

                    // first, reset the count of total count commitments
                    root_this_.values_counter_obj_for_this_display_obj[ this.curr_col_counter_i ].total_num_of_commitments = 0;

                    // loop :) 
                    for( this.curr_value_i = 0; this.curr_value_i < root_this_.values_counter_obj_for_this_display_obj[ this.curr_col_counter_i ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_value_i++ ){

                        root_this_.values_counter_obj_for_this_display_obj[ this.curr_col_counter_i ].total_num_of_commitments += root_this_.values_counter_obj_for_this_display_obj[ this.curr_col_counter_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_value_i ].found_instances_of_this_value ;

                        ////////// console.log("\t\t - loop#1 - working on value "+this.curr_value_i+" which has "+root_this_.values_counter_obj_for_this_display_obj[ this.curr_col_counter_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_value_i ].found_instances_of_this_value +" instances of this value. the cumulative count of found instances is now "+root_this_.values_counter_obj_for_this_display_obj[ this.curr_col_counter_i ].total_num_of_commitments );

                    }



                    //////// loop #2 through the values and set the decimal values
                    ////

                    /// just to check that we're not dividing by zero
                    if( root_this_.values_counter_obj_for_this_display_obj[  this.curr_col_counter_i ].total_num_of_commitments > 0 ){

                        // loop :) 
                        for( this.curr_value_i = 0; this.curr_value_i < root_this_.values_counter_obj_for_this_display_obj[ this.curr_col_counter_i ] .header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_value_i++ ){

                            ////////////// console.log("\t\t - loop#2 - working on value "+this.curr_value_i );

                            root_this_.values_counter_obj_for_this_display_obj[ this.curr_col_counter_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_value_i ].found_instances_of_this_value__as_a_decimal__of_total_commitments_for_this_column = root_this_.values_counter_obj_for_this_display_obj[ this.curr_col_counter_i ] .header__value_choice_categories__listed_in_order_of_appearance[ this.curr_value_i ].found_instances_of_this_value / root_this_.values_counter_obj_for_this_display_obj[ this.curr_col_counter_i ].total_num_of_commitments ;
                        } // end values loop

                    }// end if > 0 


                    ///// end of counter object statistics
                    ////////////////  console.log("\\\\\\ end of function - the cumulative commitment count for object |"+this.curr_col_counter_i+"| is "+root_this_.values_counter_obj_for_this_display_obj[ this.curr_col_counter_i ].total_num_of_commitments );

                }// end counter object loop




            }





            ///////    /////////   test print found values 
            ///
            this.test_print_found_values_of_this_display_area = function(){

                // loop through columns
                this.values_counter_obj_for_this_display_obj.map( function(d,i){

                    // column feedback
                    console.log( "col #"+i+" : "+d.column_title__text );

                    // loop through values in the current column
                    d.header__value_choice_categories__listed_in_order_of_appearance.map( function(d2, i2){
                        console.log("\t val #"+i2+" : "+d2.header_category_text+" : found count : "+d2.found_instances_of_this_value );

                    });

                });

            }




            /////    reset the counters of found values
            //

            this.reset_found_value_counters_of_this_display_area = function(){

                console.log(" >>>> resetting the value counters of display object "+this.country_name );

                // loop through columns
                this.values_counter_obj_for_this_display_obj.map( function(d,i){

                    // column feedback
                    console.log( "col #"+i+" : "+d.column_title__text );

                    // loop through values in the current column
                    d.header__value_choice_categories__listed_in_order_of_appearance.map( function(d2, i2){

                        d2.found_instances_of_this_value = 0;

                        console.log("\t val #"+i2+" : "+d2.header_category_text+" : found count : "+d2.found_instances_of_this_value );

                    });

                });

            }





            //////////  ¿¿¿¿¿  : set up the handlers for this area   ???????   ////////////
            //////////



            ///////////////////////////  SETUP SETUP SETUP ////////////
            ///////////////////////////  SETUP SETUP SETUP ////////////
            ///////////////////////////  SETUP SETUP SETUP ////////////

            // copy this
            this.parent_this_ = parent_this;

            //  assign the data
            this.all_commitments__unfiltered = relevant_commitments_for_this_obj;

            // and the country name
            this.country_name = country_name_ ;

            // fetch the iso code for this country
            this.country_name_as_iso_code = this.parent_this_.main_parent_object_this.fetch_country_iso_code_given_country_name( this.country_name );

            // set up the counter values for this object
            this.set_up_values_counter_for_this_commitment_display_area( this );

            /// hello world
            console.log(">>>>> - new commitment_display__n_filtering_n_sorting_object - for |"+country_name_+"/"+this.country_name+"| with "+relevant_commitments_for_this_obj.length+"/"+this.all_commitments__unfiltered.length+" raw unfiltered commitments");

        }






        ////////////////////////   ////////////   ////////////
        ////////////////////////   ////////////   ////////////



        /* 
         and object for describing a columns data + visual properties.
         it's used for setting up the column headers 
         as well as individual cells in commitment rows
         - the column objects and the order of the columns is storeed in the
         this.column_information_objects_listed_in_the_order_of_the_columns objects array
         */

        this.column_description_obj = function(){





            //////   data properties    /////////
            //////

            // where in the read data file to fetch the data for this column
            this.which_column_num_to_fetch_data_for_for_this_column = -9;



            //////   semantic properties : title    /////////
            //////

            /// type of column
            //		- good to know when traversing across column descrp objs and filtering, etc...
            // 		eg. text_column / tags_column / basic_filter_column / ignore_me
            this.column_type = "default_header_type";


            /// column title (as text)
            this.column_title__text = "Default header name";


            //// css id/class names
            //
            //  general column : class
            this.column_class_name = "column_class_name";

            /// for the column header divs
            this.column_header_outer_containing_div_id_name = "FILLMEINPLEASE";
            this.column__top_column_class_name = "top_header_column";
            this.column__bottom_column_class_name = "bottom_header_column";

            ///  the class names of the header elements


            /////////// upper part 

            // for the column title/heading
            this.column_title__class_name = "header_title_class";

            /// the uppper part - with the title area
            this.column_header__top__small_vertical_line_class_name = "upper_header__small_vertical_line";
            this.column_header__top__diagonal_line_class_name = "upper_header_small__diagonal_line";
            this.column_header__top__background_mouseover_area__class_name = "upper_header__background_mouseover_area_class_name";

            /////////// bottom/lower part 

            ///////// class names inside the header values area 
            //// the general values ara
            this.column_header__bottom__values_area__outer_div_class_name = "values_area__outer_div";
            this.column_header__bottom__values_area__sort_outer_area_class_name = "sort_area_outer_div";
            this.column_header__bottom__values_area__general_value_outer_area = "general_individual_value_outer_area";

            //// inside the sort areas
            this.column_header__bottom__values_area__sort_area__text_area = "individual_sort_area__text_area";
            this.column_header__bottom__values_area__sort_area__text_area__unselected = "individual_sort_area__text_area__UNselected";
            this.column_header__bottom__values_area__sort_area__text_area__selected = "individual_sort_area__text_area__selected";
            this.column_header__bottom__values_area__sort_area__sort_up_button = "individual_sort_area__up_arrow";
            this.column_header__bottom__values_area__sort_area__sort_up_button__unselected = "individual_sort_area__up_arrow__UNselected";
            this.column_header__bottom__values_area__sort_area__sort_up_button__selected  = "individual_sort_area__up_arrow__selected";
            this.column_header__bottom__values_area__sort_area__sort_down_button = "individual_sort_area__down_arrow";
            this.column_header__bottom__values_area__sort_area__sort_down_button__unselected = "individual_sort_area__down_arrow__UNselected";
            this.column_header__bottom__values_area__sort_area__sort_down_button__selected  = "individual_sort_area__down_arrow__selected";
            this.column_header__bottom__values_area__sort_area__horizontal_line_area = "individual_sort_area__horizontal_line";
            this.column_header__bottom__values_area__sort_area__horizontal_line_area__unselected = "individual_sort_area__horizontal_line__unselected";
            this.column_header__bottom__values_area__sort_area__horizontal_line_area__selected  = "individual_sort_area__horizontal_line__selected";

            //// inside the value areas 
            this.column_header__bottom__values_area__individual_value__text_area = "individual_value__text_area";
            this.column_header__bottom__values_area__individual_value__tick_mark = "individual_value__tick_mark_area";
            this.column_header__bottom__values_area__individual_value__cross_mark = "individual_value__cross_mark_area";
            // and the value area tick/cross mark selected/not_selected classes
            this.column_header__bottom__values_area__individual_value__tick_mark_selected = "individual_value__tick_mark_selected";
            this.column_header__bottom__values_area__individual_value__tick_mark_UNselected = "individual_value__tick_mark_UNselected";
            this.column_header__bottom__values_area__individual_value__cross_mark_selected = "individual_value__cross_mark_selected";
            this.column_header__bottom__values_area__individual_value__cross_mark_UNselected = "individual_value__cross_mark_UNselected";
            this.column_header__bottom__values_area__individual_value__tickCross_mark_NOTselected = "individual_value__tickCross_mark_NOTselected";


            //// sort area line parameters
            // 		( the line's dynamically calculated, according to the element width... )
            this.sort_area_line__distance_from_the_left = 5;
            this.sort_area_line___distance_from_the_right = 15;


            ///  Commitments listing area - the class names of the table cell elements
            this.column_header__bottom__values_area_class_name = "tableCell__outer_area_class";
            this.column_header__bottom__contractExpand_button_class = "tableCell__inner_value_n_text_box__class";


            /// for the tags listing areas
            /*  --- special css ids/classses for tags columns  ---  */

            /* 		for the drop down menu */

            // the invisible background part of the drop down menu, which is behind the menu
            //	and catches the clicks outside the menu
            this.tags_drop_down_menu__invisible_background_div = "tags_drop_down_menu__invisible_background_div";

            this.tags__drop_down_menu_area__general_outer_div__class_name = "tags__drop_down_menu_general_area__outer_div";

            this.tags__top_of_drop_down_menu__outer_div__class_name = "tags__top_of_drop_down_menu__outer_div__class_name";

            this.tags__dropping_down_part_of_drop_down_menu__outer_div__class_name  = "tags__dropping_down_menu__outer_div";

            /* the select none area */
            this.tags__dropping_down_part_of_drop_down_menu__inner__select_none__class_name  = "tags__dropping_down_menu__inner__select_none";

            /* a inner column - where the tags are alisted */
            this.tags__dropping_down_part_of_drop_down_menu__inner_column_div__class_name  = "tags__dropping_down_menu__inner_column_div";

            this.tags__dropping_down_part_of_drop_down_menu__inner_column_div__tag_markup__class_name  = "tags__dropping_down_menu__inner_column__tag_markup";

            /* and the SELECTED version of the above */
            this.tags__dropping_down_part_of_drop_down_menu__inner_column_div__tag_markup__SELECTED__class_name  = "tags__dropping_down_menu__inner_column__tag_SELECTED_markup";

            /* and the regular ROLLOVER version - different from selected */
            this.tags__dropping_down_part_of_drop_down_menu__inner_column_div__tag_markup__ROLLOVER__class_name  = "tags__dropping_down_menu__inner_column__tag_ROLLOVER_markup";

            this.tags__dropping_down_part_of_drop_down_menu__inner_column_div__category_markup__class_name  = "tags__dropping_down_menu__inner_column__category_markup";

            /* 		for the tags listing area */

            this.tags__tags_listing_area__outer_div  = "tags__tags_listing_area__outer_div";
            this.tags__tags_listing_area__individual_tag__outer  = "tags__tags_listing_area__individual_tag";
            this.tags__tags_listing_area__individual_tag__cross_mark  = "tags__tags_listing_area__individual_tag__cross_mark";


            //// MOUSEOVER TEXT
            // the mouse-over text reference
            this.mouse_over_text_reference = "mouse_over_text_reference";


            /// header value content 
            //  i.e. the value choices ara,
            //	below the title area

            //  when there are value choices in the headers (i.e. most headers)
            this.header__value_choice_categories__listed_in_order_of_appearance = [
                { type : "value_choice",
                    header_category_text : "value",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    // how many of this value exists generally
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },
            ];

            // and the values listed as an associative array, with the values as keys
            // 		- it helps with looking up what values_obj metadata correspond to what table cell value
            this.header__value_choice_categories__with_associative_keys_based_on_data_values = {};


            //  when there is a drop down menu to choose from, as with the keywords column
            //		a list of the possible choices
            this.header__drop_down_menu_choices = [ "zero", "one", "two", "three", "four", "five" ];



            //////   visual properties : whole column    /////////


            //////  LOOKED UP left loc - 
            //				- based on the widths of columns 
            //				and settings for whether columns are compressed or not
            this.this_col_lookedUp_left_lox__px_x = 12;

            // and the regular width, whether the column is expanded or compressed
            this.this_col_lookedUp__regular_width__given_if_its_expandedOrCompressed = 10;

            //////  does this column compress at all? 
            // default setting
            this.does_this_column_compress = false;
            ////// is the column collapsed or expanded?
            this.is_this_column_expanded = true;

            //// dimensions
            // the absolute width of the column
            this.whole_column_EXPANDED_width__in_px_x = 100;
            this.whole_column_compressed_width__in_px_x = 76;

            //  extra width for the outer column to accomodate
            //		the diagonal angles of the upper part of the header
            this.extra_width_for_upper_header_diagonal_bits__also_for_outer_column_div = 100;


            // calculated x loc of the containing column
            ///  this is calculated according to the width of the other relevant columns
            this.this_column_containeer_calculated_x_loc = 0;

            // where is the top part of the column? 
            this.top_column_w_column_name__loc_y = 0;


            ///// LOOKED UP table value cell text area width
            //
            //
            // the looked up width
            this.this_col_table_cell_text_area_width__looked_up = 0;
            //
            // do we look up the text area width for this cell?						
            this.look_up_width_for_this_col_table_cell_text_area_width = true;
            // what's the distance of this cell from the left
            this.look_up_width_for_this_col_table_cell_text_area_width__left_h_margin = 0;
            // what's the distance of this cell from the right
            this.look_up_width_for_this_col_table_cell_text_area_width__right_h_margin = 42;
            //
            // and if we're NOT LOOKING UP the width, what's the width it's supposed to have?
            //	( good for the ultra values / grand challenges cells )
            this.NOT_looked_up__table_cell_text_area_width = 30;




            //////   visual properties : header    /////////
            //////


            //// for the header title
            this.column_title_name__offset_x = 35;
            this.column_title_name__offset_y = 160;
            this.column_title_name__rotation_angle__in_degrees = 45;

            /// - for multiple line column headers
            this.column_title_name__use_multiline_text_layout = false;
            this.alternate__column_title_name__offset_x = 35;
            this.alternate__column_title_name__offset_y = 160;
            // how far apart are the lines 
            this.multi_line_column_title__column_title_name__line_spacing_horiz = 20;

            //// header/upper column visual settings
            this.upper_column_header_area__small_vertical_line_height = 13;

            // - is there a diagonal (right) line that ascends 
            this.this_column_has_diagonal_line__on_top_column = true;
            this.this_column_diagonal_diagonal_dist__for_diagonal_lines = 75;
            this.this_column_diagonal_diagonal_dist__for_mouseover_area = 135;



            ///// for the value choices
            this.header__value__default_width = 20;

            this.header__value__row__height = 25.3;

            this.header__value__value_background__height = 15;

            //// // how far from the bottom of the header area should values be 
            //// this.header_values__distance_from_the_bottom = 5;

            /* what's the level of transparency on the header text when selected/not */
            this.text_opacity_val_when_selected = 1.0 ;
            this.text_opacity_val_when_NOTselected = 0.35 ;





            //////////////////
            //////////////////		methods
            ////////////////// 		- eg. expand/contract column
            //////////////////		note: put the aggregate calculation method in the country obejct or thereabouts.
            //////////////////

        }





        ////////////////////////  
        ////////////////////////  table column objects : initialise   //////////
        /* 
         add new table column description objects ( this.column_description_obj ) 
         */

        this.initialise__table_column_objects__commitment_data = function(){

            console.log(">>>>> initialise__table_column_objects__commitment_data() - |"+this.name_of_this_object+"| edition");

            // initialise the column description objects array
            this.column_information_objects_listed_in_the_order_of_the_columns = new Array( this.num_of__column_information_objects_and_columns );



            //////   countries column [0] /////// 
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 0 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].column_type = "text_column";

            // set which column, of the imported data, the data is in 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].which_column_num_to_fetch_data_for_for_this_column = 2;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].column_class_name = "country_name";

            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].column_header_outer_containing_div_id_name = "country_name";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].column_title__text = ["Country name"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].column_title__class_name = "column_title column_header_text__val_no_1";


            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].this_col_lookedUp_left_lox__px_x = 0 ;


            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].whole_column_EXPANDED_width__in_px_x = 209;
            // compressed
            ////// this.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].whole_column_compressed_width__in_px_x = 00;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].mouse_over_text_reference = "Country name live here :) ";





            //////   commitment title [1] /////// 
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 1 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].column_type = "text_column";

            // set which column, of the imported data, the data is in 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].which_column_num_to_fetch_data_for_for_this_column = 3;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].column_class_name = "commitment_title_text";

            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].column_header_outer_containing_div_id_name = "commitment_title_text";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].column_title__text = ["Commitment title"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].column_title__class_name = "column_title column_header_text__val_no_1";


            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].this_col_lookedUp_left_lox__px_x = 0 ;


            // does it have a diagonal line at the right?
            this.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].this_column_has_diagonal_line__on_top_column = false;


            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].whole_column_EXPANDED_width__in_px_x = 179;
            // compressed
            /////// this.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].whole_column_compressed_width__in_px_x = 50;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 1 ].mouse_over_text_reference  = "This text is the title of the commitment as derived by the IRM researchers from the action plan. Titles were assigned to distinguish commitments from one another in action plans that did not have titles for individual commitments or were shortened for ease of reading. In cases where a commitment is part of a compound commitment, or multiple commitments are assessed on 1 work sheet, the text in this column refers to the individual action, milestone, or commitment, rather than the cluster name on the worksheet";






            //////   Full Commitment Text [2] /////// 
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 2 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].column_type = "text_column";

            // set which column, of the imported data, the data is in 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].which_column_num_to_fetch_data_for_for_this_column = 4;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].column_class_name = "full_commitment_text";

            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].column_header_outer_containing_div_id_name = "full_commitment_text";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].column_title__text = ["Full commitment text "];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].column_title__class_name = "column_title column_header_text__val_no_1";


            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].this_col_lookedUp_left_lox__px_x = 0 ;


            // does it have a diagonal line at the right?
            this.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].this_column_has_diagonal_line__on_top_column = false;

            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].whole_column_EXPANDED_width__in_px_x = 218;
            // compressed
            /////////// this.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].whole_column_compressed_width__in_px_x = 50;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 2 ].mouse_over_text_reference  = "This contains the full text of the commitment, in the original language from the action plan. At times the IRM staff carried out light editing (such as copying headings from above the text) to ensure continuity of reading. But even in cases where commitments were hard to read or contained errors, the IRM did not edit commitments. This is to preserve the original text of the commitment, which is especially important in identifying which commitments lack clarity.";






            //////   Action Plan Cycle [3] /////// 
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 3 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].column_type = "basic_filter_column";

            // set which column, of the imported data, the data is in 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].which_column_num_to_fetch_data_for_for_this_column = 1;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].column_class_name = "action_plan_cycle";

            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].column_header_outer_containing_div_id_name = "action_plan_cycle";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].column_title__text = ["Action Plan Cycle"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].column_title__class_name = "column_title column_header_text__val_no_1";

            // and the header choices… in order of appearance
            this.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].header__value_choice_categories__listed_in_order_of_appearance = [
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

                    header__class_name_selected : "header_values__colours_3_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_3_of_7" },

                { type : "value_choice",
                    header_category_text : "ap.3",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "3",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */

                    header__class_name_selected : "header_values__colours_6_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_6_of_7" }
            ];



            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].this_col_lookedUp_left_lox__px_x = 0 ;


            // does it have a diagonal line at the right?
            this.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].this_column_has_diagonal_line__on_top_column = false;

            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].whole_column_EXPANDED_width__in_px_x = 87;
            // compressed
            //////// this.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].whole_column_compressed_width__in_px_x = 50;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 3 ].mouse_over_text_reference  = "Indicates which Action Plan the commitments belong too. The latest Action Plan will be tagged by the OGP Support Unit, but are not yet assessed by the IRM researcher.";









            //////   Tags [4] /////// 
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 4 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].column_type = "tags_column";

            // set which column, of the imported data, the data is in 
            //////
            //////  NOTE NOTE NOTE NOTE : this needs to be figured out in an different way!
            //////
            this.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].which_column_num_to_fetch_data_for_for_this_column = -999;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].column_class_name = "tags";

            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].column_header_outer_containing_div_id_name = "tags";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].column_title__text = ["Tags"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].column_title__class_name = "column_title column_header_text__val_no_1";




            // we'll figure out the attributes for the key words later
            // .... buuut... for now ... 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].header__value_choice_categories__listed_in_order_of_appearance = [

                { type : "heading_1",
                    header_category_text : "Public Integrity Measures",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "-99",
                    corresponds_to_which_col_num_in_data : -99,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 0,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "value_choice",
                    header_category_text : "Anti-corruption",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 7,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 0,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "value_choice",
                    header_category_text : "Conflicts of interest",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 8,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 0,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "value_choice",
                    header_category_text : "Asset disclosure",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 9,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 0,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "value_choice",
                    header_category_text : "Audits & control",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 10,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 0,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "value_choice",
                    header_category_text : "Whistleblower protections",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 11,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 0,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "heading_1",
                    header_category_text : "Fiscal Openness",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 99,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 0,
                    // header cells 	
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    // and the cells
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "value_choice",
                    header_category_text : "Budget Transparency",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 12,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 0,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "value_choice",
                    header_category_text : "Citizen Budgets",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 13,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 0,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                /*
                 { type : "heading_1",
                 header_category_text : "Fiscal Openness", 
                 current_selection__selectedTrueFalse : false,
                 relevant_value_for_graph_view_display_by_menu : false,
                 numberOrText_in_data_corresponding_to_this_value : "1", 
                 // corresponds_to_which_col_num_in_data : 16,
                 corresponds_to_which_col_num_in_data : 14,
                 found_instances_of_this_value : 0,
                 value_background_width : 10, 
                 in_column_num : 0,
                 // header cells 	
                 header__class_name_selected : "header_selection_value_class_name_selected",
                 // and the cells 
                 tableCells__class_name_selected : "header_selection_value_class_name_selected" }, 
                 */

                /* not in the new data ( 20150113 )
                 { type : "value_choice",
                 header_category_text : "Revenues / Taxes", 
                 current_selection__selectedTrueFalse : false,
                 relevant_value_for_graph_view_display_by_menu : false,
                 numberOrText_in_data_corresponding_to_this_value : "1", 
                 // corresponds_to_which_col_num_in_data : 16,
                 corresponds_to_which_col_num_in_data : 14,
                 found_instances_of_this_value : 0,
                 value_background_width : 10, 
                 in_column_num : 0,
                 // header cells	
                 header__class_name_selected : "header_selection_value_class_name_selected",
                 // and the cells 
                 tableCells__class_name_selected : "header_selection_value_class_name_selected" }, 
                 */

                /* not in the new data ( 20150113 )
                 { type : "value_choice",
                 header_category_text : "Allocations and spending", 
                 current_selection__selectedTrueFalse : false,
                 relevant_value_for_graph_view_display_by_menu : false,
                 numberOrText_in_data_corresponding_to_this_value : "1", 
                 // corresponds_to_which_col_num_in_data : 17,
                 corresponds_to_which_col_num_in_data : 15,
                 found_instances_of_this_value : 0,
                 value_background_width : 10, 
                 in_column_num : 0,
                 // header cells 
                 header__class_name_selected : "header_selection_value_class_name_selected",
                 // and the cells 
                 tableCells__class_name_selected : "header_selection_value_class_name_selected" }, 
                 */

                { type : "value_choice",
                    header_category_text : "Participatory budgeting",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 14,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 0,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "heading_1",
                    header_category_text : "Citizen Engagement",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 99,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 0,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "value_choice",
                    header_category_text : "E-petitions",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 15,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 0,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "value_choice",
                    header_category_text : "Social Audits",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 16,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 0,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "value_choice",
                    header_category_text : "Public Participation",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 17,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 0,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "heading_1",
                    header_category_text : "Procurement",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 99,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 0,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "value_choice",
                    header_category_text : "Public Procurement",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 18,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 0,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "heading_1",
                    header_category_text : "Acess to Information Mechanisms",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 99,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 0,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "value_choice",
                    header_category_text : "Freedom of Information",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 19,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 0,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "value_choice",
                    header_category_text : "Records Management",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 20,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 0,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "value_choice",
                    header_category_text : "Elections & Political Finance",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 22,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 0,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "heading_1",
                    header_category_text : "Justice",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 99,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "value_choice",
                    header_category_text : "Law Enforcement & Justice",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 23,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                /*    is the column number/label correct?   */
                /*    is the column number/label correct?   */
                /*    is the column number/label correct?   */
                /*
                 { type : "value_choice",
                 header_category_text : "Ombudsman", 
                 current_selection__selectedTrueFalse : false,
                 relevant_value_for_graph_view_display_by_menu : false,
                 numberOrText_in_data_corresponding_to_this_value : "1", 
                 // corresponds_to_which_col_num_in_data : 27,
                 corresponds_to_which_col_num_in_data : 25,
                 found_instances_of_this_value : 0,
                 value_background_width : 10, 
                 in_column_num : 1,
                 header__class_name_selected : "header_selection_value_class_name_selected",
                 tableCells__class_name_selected : "header_selection_value_class_name_selected" }, 
                 */

                { type : "heading_1",
                    header_category_text : "Public Services",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 99,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "value_choice",
                    header_category_text : "Public Service Delivery Improvement",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 24,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                /*    is the column number/label correct?   */
                /*    is the column number/label correct?   */
                /*    is the column number/label correct?   */
                /* - the column number corresponds to the Legislature * Regulations col below */
                /*
                 { type : "heading_1",
                 header_category_text : "How is it done?", 
                 current_selection__selectedTrueFalse : false,
                 relevant_value_for_graph_view_display_by_menu : false,
                 numberOrText_in_data_corresponding_to_this_value : "1", 
                 //corresponds_to_which_col_num_in_data : 29,
                 corresponds_to_which_col_num_in_data : 27,
                 found_instances_of_this_value : 0,
                 value_background_width : 10, 
                 in_column_num : 1,
                 header__class_name_selected : "header_selection_value_class_name_selected",
                 tableCells__class_name_selected : "header_selection_value_class_name_selected" }, 					
                 */

                /*    is the column number/label correct?   */
                /*    is the column number/label correct?   */
                /*    is the column number/label correct?   */
                /*    - the Ombudsman column has the same col number */
                { type : "value_choice",
                    header_category_text : "E-government",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 25,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "Open data",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 21,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "Capacity-building",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 26,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                /*    is the column number/label correct?   */
                /*    is the column number/label correct?   */
                /*    is the column number/label correct?   */
                { type : "value_choice",
                    header_category_text : "Legislative & Regulation",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 27,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "heading_1",
                    header_category_text : "Who is Affected",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 99,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 2,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "Private sector",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 28,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 2,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "Legislature",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 29,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 2,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "Sub-national governance",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 30,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 2,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "Judiciary",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 31,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 2,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "heading_1",
                    header_category_text : "Sectors",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 99,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "Media & Telecommunications",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 32,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "Education",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 33,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "Health and Nutrition",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 34,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "Citizenship & Immigration",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 35,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "Welfare & Social Security",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 36,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "Water & Sanitation",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 37,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "Infrastructure",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 38,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "Public safety",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 39,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "Defense",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 40,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "Natural Resources",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 41,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "Aid",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 42,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "Nonprofits",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 43,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 1,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "heading_1",
                    header_category_text : "Mainstreaming Issues",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 99,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 2,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "Gender & sexuality",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 46,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 2,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "Human rights",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 47,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 2,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },


                { type : "value_choice",
                    header_category_text : "OGP",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 48,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 2,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" },

                { type : "value_choice",
                    header_category_text : "Labor",
                    current_selection__selectedTrueFalse : false,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    corresponds_to_which_col_num_in_data : 44,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    in_column_num : 2,
                    /* header cells */
                    header__class_name_selected : "header_selection_value_class_name_selected",
                    /* and the cells */
                    tableCells__class_name_selected : "header_selection_value_class_name_selected" }

            ];





            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].this_col_lookedUp_left_lox__px_x = 0 ;


            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].whole_column_EXPANDED_width__in_px_x = 594;
            // compressed
            //////// this.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].whole_column_compressed_width__in_px_x = 50;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 4 ].mouse_over_text_reference  = "Tags are added by the OGP Support Unit. Each commitments can have multiple tags.";








            //////   Star Commitments [5] /////// 
            // ok
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 5 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].column_type = "basic_filter_column";

            // set which column, of the imported data, the data is in 
            ////  this.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].which_column_num_to_fetch_data_for_for_this_column = 80; 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].which_column_num_to_fetch_data_for_for_this_column = 88;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].column_class_name = "star_commitments";
            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].column_header_outer_containing_div_id_name = "star_commitments";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].column_title__text = ["Star Commitments"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].column_title__class_name = "column_title column_header_text__val_no_2";

            // and the header choices… in order of appearance
            this.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].header__value_choice_categories__listed_in_order_of_appearance = [
                { type : "value_choice",
                    header_category_text : "Starred",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : true,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_1_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_1_of_7" },

                { type : "value_choice",
                    header_category_text : "Not Starred",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "0",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_6_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

                { type : "value_choice",
                    header_category_text : "NR",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "NR",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }
            ];



            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].this_col_lookedUp_left_lox__px_x = 0 ;


            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].whole_column_EXPANDED_width__in_px_x = 130;
            // compressed
            //////// this.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].whole_column_compressed_width__in_px_x = 50;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 5 ].mouse_over_text_reference = "Starred commitments are those that a) were clearly relevant to OGP values; b) were assessed as having moderate or significant potential impact; and c) were assessed as either seeing significant progress or being complete. These commitments must be specific and measurable enough to be assessed for the above criteria. The IRM staff made this evaluation according to formula based on assessments by individual IRM researchers.<br/><br/>Possible values: <br/><i><span class='darker_text_for_mouse_overs'>Starred <br/>Not starred <br/>NR</span> - Not Reviewed</i>";






            //////   Projected Completion [6] /////// 
            // ok
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 6 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].column_type = "basic_filter_column";

            // set which column, of the imported data, the data is in 
            //// this.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].which_column_num_to_fetch_data_for_for_this_column = 81; 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].which_column_num_to_fetch_data_for_for_this_column = 85;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].column_class_name = "projected_completion";
            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].column_header_outer_containing_div_id_name = "projected_completion";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].column_title__text = ["Projected Completion"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].column_title__class_name = "column_title column_header_text__val_no_3";

            // and the header choices… in order of appearance
            this.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].header__value_choice_categories__listed_in_order_of_appearance = [

                { type : "value_choice",
                    header_category_text : "Complete",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "4" ,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_1_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_1_of_7" },

                { type : "value_choice",
                    header_category_text : "Substantial",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "3" ,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_2_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_2_of_7" },

                { type : "value_choice",
                    header_category_text : "Limited",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "2" ,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_3_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_3_of_7" },

                { type : "value_choice",
                    header_category_text : "Not Started",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1" ,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_4_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_4_of_7" },

                { type : "value_choice",
                    header_category_text : "Withdrawn",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "Withdrawn" ,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_5_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_5_of_7" },

                { type : "value_choice",
                    header_category_text : "Unclear",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "Unclear" ,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_6_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },
                { type : "value_choice",
                    header_category_text : "NA",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "NA" ,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" },

                { type : "value_choice",
                    header_category_text : "NR",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "NR" ,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }
            ];




            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].this_col_lookedUp_left_lox__px_x = 0 ;


            // does it have a diagonal line at the right?
            this.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].this_column_has_diagonal_line__on_top_column = false;

            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].whole_column_EXPANDED_width__in_px_x = 118;
            // compressed
            //////// this.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].whole_column_compressed_width__in_px_x = 50;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 6 ].mouse_over_text_reference  = "This variable reports the commitment’s projected level of completion at the time of analysis, according to the action plan’s own schedule or, where no such schedule was provided, according to the expertise of the researcher. The IRM researchers responded to this question. <br/><br/>Possible responses: <br/><i><span class='darker_text_for_mouse_overs'>Complete<br/>Substantial<br/>Limited<br/>Not started<br/>Withdrawn <br/>Unclear<br/>NA</span> - Not Applicable<br/><span class='darker_text_for_mouse_overs'>NR</span> - Not Reviewed</i>";








            //////   Actual Completion [7] /////// 
            // ok
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 7 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].column_type = "basic_filter_column";

            // set which column, of the imported data, the data is in 
            //// this.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].which_column_num_to_fetch_data_for_for_this_column = 76; 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].which_column_num_to_fetch_data_for_for_this_column = 83;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].column_class_name = "actual_completion";
            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].column_header_outer_containing_div_id_name = "actual_completion";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].column_title__text = ["Actual Completion"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].column_title__class_name = "column_title column_header_text__val_no_3";

            // and the header choices… in order of appearance
            this.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].header__value_choice_categories__listed_in_order_of_appearance = [

                { type : "value_choice",
                    header_category_text : "Complete",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "4",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_1_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_1_of_7" },

                { type : "value_choice",
                    header_category_text : "Substantial",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "3",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_2_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_2_of_7" },

                { type : "value_choice",
                    header_category_text : "Limited",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "2",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_3_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_3_of_7" },

                { type : "value_choice",
                    header_category_text : "Not Started",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_4_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_4_of_7" },

                { type : "value_choice",
                    header_category_text : "Withdrawn",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "Withdrawn",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_5_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_5_of_7" },

                { type : "value_choice",
                    header_category_text : "Unclear",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "Unclear",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_6_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

                { type : "value_choice",
                    header_category_text : "NA",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "NA",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" },


                { type : "value_choice",
                    header_category_text : "NR",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "NR",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }
            ];



            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].this_col_lookedUp_left_lox__px_x = 0 ;


            // does it have a diagonal line at the right?
            this.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].this_column_has_diagonal_line__on_top_column = false;

            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].whole_column_EXPANDED_width__in_px_x = 118;
            // compressed
            //////// this.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].whole_column_compressed_width__in_px_x = 50;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 7 ].mouse_over_text_reference  = "This variable measures the level of completion of the commitment at the time of the IRM researchers’ analyses, based on the first year of implementation.  The IRM researchers responded to this question.  <br/><br/> Possible responses: <i><br/><span class='darker_text_for_mouse_overs'>Complete<br/>Substantial<br/>Limited <br/>Not started <br/>Withdrawn <br/>Unclear <br/>NA</span> - Not Applicable <br/><span class='darker_text_for_mouse_overs'>NR</span> - Not Reviewed</i>";









            //////   On Schedule [8] /////// 
            // ok
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 8 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].column_type = "basic_filter_column";

            // set which column, of the imported data, the data is in 
            //// this.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].which_column_num_to_fetch_data_for_for_this_column = 84; 
            //// this.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].which_column_num_to_fetch_data_for_for_this_column = 80; 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].which_column_num_to_fetch_data_for_for_this_column = 87;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].column_class_name = "on_schedule";
            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].column_header_outer_containing_div_id_name = "on_schedule";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].column_title__text = ["On Schedule"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].column_title__class_name = "column_title column_header_text__val_no_3";

            // and the header choices… in order of appearance
            this.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].header__value_choice_categories__listed_in_order_of_appearance = [
                { type : "value_choice",
                    header_category_text : "Ahead of schedule",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "ahead of schedule",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_1_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_1_of_7" },

                { type : "value_choice",
                    header_category_text : "On time",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "on schedule",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_2_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_2_of_7" },

                { type : "value_choice",
                    header_category_text : "Behind schedule",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "behind schedule",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_6_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

                { type : "value_choice",
                    header_category_text : "Unclear",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "Unclear",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" },

                { type : "value_choice",
                    header_category_text : "NA",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "NA",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" },

                { type : "value_choice",
                    header_category_text : "NR",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "NR",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }

            ];



            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].this_col_lookedUp_left_lox__px_x = 0 ;


            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].whole_column_EXPANDED_width__in_px_x = 154;
            // compressed
            //////// this.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].whole_column_compressed_width__in_px_x = 50;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 8 ].mouse_over_text_reference  = "These commitments represent whether a commitment is on schedule. Where projected completion and actual completion could be ascertained, the IRM staff was able to identify whether the commitment was on time or not. <br/><br/>Possible responses: <br/><i><span class='darker_text_for_mouse_overs'>Ahead of schedule <br/>On schedule <br/>Behind schedule <br/>Unclear <br/>NA</span> - Not Applicable <br/><span class='darker_text_for_mouse_overs'>NR</span> - Not Reviewed</i>";







            //////   Potential impact [9] /////// 
            // ok 
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 9 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].column_type = "basic_filter_column";

            // set which column, of the imported data, the data is in 
            //// this.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].which_column_num_to_fetch_data_for_for_this_column = 68; 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].which_column_num_to_fetch_data_for_for_this_column = 77;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].column_class_name = "potential_impact";
            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].column_header_outer_containing_div_id_name = "potential_impact";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].column_title__text = ["Potential Impact"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].column_title__class_name = "column_title column_header_text__val_no_4";

            // and the header choices… in order of appearance
            this.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].header__value_choice_categories__listed_in_order_of_appearance = [
                { type : "value_choice",
                    header_category_text : "Transformative",
                    current_selection__selectedTrueFalse : true,
                    // relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "3",
                    relevant_value_for_graph_view_display_by_menu : false,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_1_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_1_of_7" },

                { type : "value_choice",
                    header_category_text : "Moderate",
                    current_selection__selectedTrueFalse : true,
                    // relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "2",
                    relevant_value_for_graph_view_display_by_menu : false,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_2_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_2_of_7" },

                { type : "value_choice",
                    header_category_text : "Minor",
                    current_selection__selectedTrueFalse : true,
                    // relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    relevant_value_for_graph_view_display_by_menu : false,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_3_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_3_of_7" },

                { type : "value_choice",
                    header_category_text : "None",
                    current_selection__selectedTrueFalse : true,
                    // relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "0",
                    relevant_value_for_graph_view_display_by_menu : false,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_6_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

                { type : "value_choice",
                    header_category_text : "NR",
                    current_selection__selectedTrueFalse : true,
                    // relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "NR",
                    relevant_value_for_graph_view_display_by_menu : false,
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }
            ];



            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].this_col_lookedUp_left_lox__px_x = 0 ;

            // does it have a diagonal line at the right?
            this.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].this_column_has_diagonal_line__on_top_column = false;

            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].whole_column_EXPANDED_width__in_px_x = 137;
            // compressed
            //////// this.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].whole_column_compressed_width__in_px_x = 50;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 9 ].mouse_over_text_reference  = "OGP countries are expected to make ambitious commitments (with new or pre-existing activities) that stretch government practice beyond an existing baseline. To contribute to a broad definition of ambition, the IRM researcher judged how potentially transformative a commitment might be in the policy area. This is based on researcher’s findings and experience as a public policy expert. <br/><br/> Possible values are: <br/><i><span class='darker_text_for_mouse_overs'>None</span> - Maintains or worsens the status quo. <br/><span class='darker_text_for_mouse_overs'>Minor</span> - Incremental but positive step in the relevant policy area. <br/><span class='darker_text_for_mouse_overs'>Moderate</span> - Major step forward in the relevant policy area, but remains limited in scale or scope. <br/><span class='darker_text_for_mouse_overs'>Transformative</span> - Reform that could potentially transform ‘business as usual’ in the relevant policy area. <br/><span class='darker_text_for_mouse_overs'>NR</span> - Not Reviewed.</i>";






            //////   Specificity [10] /////// 
            // ok
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 10 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].column_type = "basic_filter_column";

            // set which column, of the imported data, the data is in 
            // this.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].which_column_num_to_fetch_data_for_for_this_column = 54; 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].which_column_num_to_fetch_data_for_for_this_column = 63;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].column_class_name = "specificity";
            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].column_header_outer_containing_div_id_name = "specificity";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].column_title__text = ["Specificity"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].column_title__class_name = "column_title column_header_text__val_no_4";

            // and the header choices… in order of appearance
            this.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].header__value_choice_categories__listed_in_order_of_appearance = [
                { type : "value_choice",
                    header_category_text : "High",
                    current_selection__selectedTrueFalse : true,
                    //// relevant_value_for_graph_view_display_by_menu : false,
                    // numberOrText_in_data_corresponding_to_this_value : "c. high", 
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "3",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_1_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_1_of_7" },

                { type : "value_choice",
                    header_category_text : "Medium",
                    current_selection__selectedTrueFalse : true,
                    //// relevant_value_for_graph_view_display_by_menu : false,
                    // numberOrText_in_data_corresponding_to_this_value : "b. medium", 
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "2",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_2_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_2_of_7" },

                { type : "value_choice",
                    header_category_text : "Low",
                    current_selection__selectedTrueFalse : true,
                    //// relevant_value_for_graph_view_display_by_menu : false,
                    // numberOrText_in_data_corresponding_to_this_value : "a. low", 
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_3_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_3_of_7" },

                { type : "value_choice",
                    header_category_text : "None",
                    current_selection__selectedTrueFalse : true,
                    //// relevant_value_for_graph_view_display_by_menu : false,
                    // numberOrText_in_data_corresponding_to_this_value : "None", 
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "0",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_6_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" },

                { type : "value_choice",
                    header_category_text : "NR",
                    current_selection__selectedTrueFalse : true,
                    //// relevant_value_for_graph_view_display_by_menu : false,
                    // numberOrText_in_data_corresponding_to_this_value : "NR", 
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "NR",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }
            ];



            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].this_col_lookedUp_left_lox__px_x = 0 ;


            // does it have a diagonal line at the right?
            this.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].this_column_has_diagonal_line__on_top_column = false;

            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].whole_column_EXPANDED_width__in_px_x = 102;
            // compressed
            //////// this.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].whole_column_compressed_width__in_px_x = 50;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 10 ].mouse_over_text_reference  = "These columns code for the level of specificity and measurability of each commitment or action. IRM staff and IRM researchers coded this information based on the following definitions.<br/><br/> Possible responses: <i> <br/><span class='darker_text_for_mouse_overs'>High</span> - Commitment language provides clear, measurable, verifiable milestones for achievement of the goal.  <br/><span class='darker_text_for_mouse_overs'>Medium</span> - Commitment language describes an activity that is objectively verifiable, but does not contain specific milestones or deliverables.  <br/><span class='darker_text_for_mouse_overs'>Low</span> - Commitment language describes activity that can be construed as measurable with some interpretation on the part of the reader.  <br/><span class='darker_text_for_mouse_overs'>None</span> - Commitment language contains no verifiable deliverables or milestones.  <br/><span class='darker_text_for_mouse_overs'>NR</span> - Not Reviewed.</i>"








            //////   New or Existing Commitment [11] /////// 
            // ok
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 11 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].column_type = "basic_filter_column";

            // set which column, of the imported data, the data is in 
            //// this.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].which_column_num_to_fetch_data_for_for_this_column = 66; 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].which_column_num_to_fetch_data_for_for_this_column = 75;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].column_class_name = "new_or_existing_commitment";

            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].column_header_outer_containing_div_id_name = "new_or_existing_commitment";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].column_title__text = ["New or Existing Commitment"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].column_title__class_name = "column_title column_header_text__val_no_4";

            // and the header choices… in order of appearance
            this.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].header__value_choice_categories__listed_in_order_of_appearance = [
                { type : "value_choice",
                    header_category_text : "New",
                    current_selection__selectedTrueFalse : true,
                    //// relevant_value_for_graph_view_display_by_menu : false,
                    // numberOrText_in_data_corresponding_to_this_value : "New", 
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "2",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_1_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_1_of_7" },

                { type : "value_choice",
                    header_category_text : "Pre-existing",
                    current_selection__selectedTrueFalse : true,
                    //// relevant_value_for_graph_view_display_by_menu : false,
                    // numberOrText_in_data_corresponding_to_this_value : "Pre-existing", 
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "1",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_3_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_2_of_7" },

                { type : "value_choice",
                    header_category_text : "Unclear",
                    current_selection__selectedTrueFalse : true,
                    //// relevant_value_for_graph_view_display_by_menu : false,
                    // numberOrText_in_data_corresponding_to_this_value : "Unclear", 
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "0",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_6_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

                { type : "value_choice",
                    header_category_text : "NR",
                    current_selection__selectedTrueFalse : true,
                    //// relevant_value_for_graph_view_display_by_menu : false,
                    // numberOrText_in_data_corresponding_to_this_value : "NR", 
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "NR",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }
            ];




            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].this_col_lookedUp_left_lox__px_x = 0 ;


            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].whole_column_EXPANDED_width__in_px_x = 120;
            // compressed
            //////// this.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].whole_column_compressed_width__in_px_x = 50;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 11 ].mouse_over_text_reference  = "These variables codes for whether a commitment or action was first announced in an OGP action plan. If the action plan is the first time a commitment was announced in public, it receives a value of “New.” IRM researchers assigned this value. In many cases, it was unclear if a commitment or action predated the action plan.<br/><br/>Possible values: <i><br/><span class='darker_text_for_mouse_overs'>Unclear <br/>Pre-existing<br/>New<br/>NR</span> - Not Reviewed</i>";








            //////   Relevance to OGP Values [12] /////// 
            // ok
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 12 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].column_type = "basic_filter_column";

            // set which column, of the imported data, the data is in 
            // this.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].which_column_num_to_fetch_data_for_for_this_column = 64; 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].which_column_num_to_fetch_data_for_for_this_column = 73;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].column_class_name = "relevance_to_ogp_values";
            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].column_header_outer_containing_div_id_name = "relevance_to_ogp_values";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].column_title__text = ["Relevance to OGP Values"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].column_title__class_name = "column_title column_header_text__val_no_5";

            // and the header choices… in order of appearance
            this.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].header__value_choice_categories__listed_in_order_of_appearance = [
                { type : "value_choice",
                    header_category_text : "Relevance Clear",
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
                    header_category_text : "Relevance Unclear",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "0",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_6_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

                { type : "value_choice",
                    header_category_text : "NR",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "NR",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }

            ];



            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].this_col_lookedUp_left_lox__px_x = 0 ;


            // does it have a diagonal line at the right?
            this.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].this_column_has_diagonal_line__on_top_column = false;

            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].whole_column_EXPANDED_width__in_px_x = 154;
            // compressed
            //////// this.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].whole_column_compressed_width__in_px_x = 50;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 12 ].mouse_over_text_reference  = "This column codes for whether a commitment or action was clearly relevant to an OGP value (‘access to information,’ ‘participation,’ ‘accountability,’ or ‘technology and innovation for transparency and accountability’). In order for a commitment or action to be coded as clearly relevant, it needs to have been marked as of clear relevance to Access to Information, Civic participation, or Public Accountability.<br/><br/>Possible responses: <br/><span class='darker_text_for_mouse_overs'><i>Relevance clear<br/>Relevance unclear</i></span>";







            //////   Values - Access to Information [13] /////// 
            // ok
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 13 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].column_type = "basic_filter_column";

            // set which column, of the imported data, the data is in 
            //// this.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].which_column_num_to_fetch_data_for_for_this_column = 60; 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].which_column_num_to_fetch_data_for_for_this_column = 69;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].column_class_name = "values__access_to_information";

            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].column_header_outer_containing_div_id_name = "values__access_to_information";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].column_title__text = ["Values - Access to Information"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].column_title__class_name = "column_title column_header_text__val_no_5";

            // and the header choices… in order of appearance
            this.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].header__value_choice_categories__listed_in_order_of_appearance = [
                { type : "value_choice",
                    header_category_text : "Relevance Clear",
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
                    header_category_text : "Relevance Unclear",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "0",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_6_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

                { type : "value_choice",
                    header_category_text : "NR",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "NR",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }


            ];



            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].this_col_lookedUp_left_lox__px_x = 0 ;


            // does it have a diagonal line at the right?
            this.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].this_column_has_diagonal_line__on_top_column = false;

            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].whole_column_EXPANDED_width__in_px_x = 154;
            // compressed
            //////// this.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].whole_column_compressed_width__in_px_x = 50;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 13 ].mouse_over_text_reference  = "These commitments: pertain to government-held information; are not restricted to data but pertains to all information; may cover proactive or reactive releases of information; may pertain to strengthen the right to information; and must provide open access to information (it should not be privileged or internal only to government).<br/><br/>IRM staff and national researchers coded this information. A more thorough explanation can be found at <a href='http://bit.ly/1ryhFcW'>http://bit.ly/1ryhFcW</a> or in each report. <br/><br/>Possible responses: <i><span class='darker_text_for_mouse_overs'><br/>Relevance clear<br/>Relevance unclear</i></span>";







            //////   Values - Civic Participation [14] /////// 
            // ok
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 14 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].column_type = "basic_filter_column";

            // set which column, of the imported data, the data is in 
            //// this.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].which_column_num_to_fetch_data_for_for_this_column = 61; 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].which_column_num_to_fetch_data_for_for_this_column = 70;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].column_class_name = "values__civic_participation";

            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].column_header_outer_containing_div_id_name = "values__civic_participation";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].column_title__text = ["Values - Civic Participation"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].column_title__class_name = "column_title column_header_text__val_no_5";

            // and the header choices… in order of appearance
            this.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].header__value_choice_categories__listed_in_order_of_appearance = [
                { type : "value_choice",
                    header_category_text : "Relevance Clear",
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
                    header_category_text : "Relevance Unclear",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "0",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_6_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

                { type : "value_choice",
                    header_category_text : "NR",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "NR",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }

            ];




            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].this_col_lookedUp_left_lox__px_x = 0 ;


            // does it have a diagonal line at the right?
            this.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].this_column_has_diagonal_line__on_top_column = false;

            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].whole_column_EXPANDED_width__in_px_x = 154;
            // compressed
            //////// this.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].whole_column_compressed_width__in_px_x = 50;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 14 ].mouse_over_text_reference  = "Civic Participation — governments seek to mobilize citizens to engage in public debate, provide input, and make contributions that lead to more responsive, innovative and effective governance. <br/><br/>IRM staff and national researchers coded this information. A more thorough explanation can be found at <a href='http://bit.ly/1ryhFcW'>http://bit.ly/1ryhFcW</a> or in each report. <br/><br/>Possible responses: <i><br/><span class='darker_text_for_mouse_overs'>Relevance clear<br/>Relevance unclear</i></span>";






            //////   Values - Public Accountability [15] /////// 
            // ok
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 15 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 15 ].column_type = "basic_filter_column";

            // set which column, of the imported data, the data is in 
            //// this.column_information_objects_listed_in_the_order_of_the_columns[ 15 ].which_column_num_to_fetch_data_for_for_this_column = 62; 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 15 ].which_column_num_to_fetch_data_for_for_this_column = 71;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 15 ].column_class_name = "values__public_accountability";

            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 15 ].column_header_outer_containing_div_id_name = "values__public_accountability";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 15 ].column_title__text = ["Values - Civic Accountability"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 15 ].column_title__class_name = "column_title column_header_text__val_no_5";

            // and the header choices… in order of appearance
            this.column_information_objects_listed_in_the_order_of_the_columns[ 15 ].header__value_choice_categories__listed_in_order_of_appearance = [
                { type : "value_choice",
                    header_category_text : "Relevance Clear",
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
                    header_category_text : "Relevance Unclear",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "0",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_6_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

                { type : "value_choice",
                    header_category_text : "NR",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "NR",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }

            ];



            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 15 ].this_col_lookedUp_left_lox__px_x = 0 ;


            // does it have a diagonal line at the right?
            this.column_information_objects_listed_in_the_order_of_the_columns[ 15 ].this_column_has_diagonal_line__on_top_column = false;

            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 15 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 15 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 15 ].whole_column_EXPANDED_width__in_px_x = 154;
            // compressed
            //////// this.column_information_objects_listed_in_the_order_of_the_columns[ 15 ].whole_column_compressed_width__in_px_x = 50;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 15 ].mouse_over_text_reference  = "Public accountability — there are rules, regulations, and mechanisms in place that call upon government actors to justify their actions, act upon criticisms or requirements made of them, and accept responsibility for failure to perform with respect to laws or commitments. As part of open government, such commitments have an 'open' element, meaning that they are not purely internal systems of accountability without a public face.<br/><br/>IRM staff and national researchers coded this information. A more thorough explanation can be found at <a href='http://bit.ly/1ryhFcW'>http://bit.ly/1ryhFcW</a> or in each report. <br/><br/>Possible responses: <i><br/><span class='darker_text_for_mouse_overs'>Relevance clear<br/>Relevance unclear</i></span>";






            //////   Values - Technology and Innovation [16] /////// 
            // ok
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 16 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 16 ].column_type = "basic_filter_column";

            // set which column, of the imported data, the data is in 
            //// this.column_information_objects_listed_in_the_order_of_the_columns[ 16 ].which_column_num_to_fetch_data_for_for_this_column = 63 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 16 ].which_column_num_to_fetch_data_for_for_this_column = 72;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 16 ].column_class_name = "values__technology_and_innovation";

            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 16 ].column_header_outer_containing_div_id_name = "values__technology_and_innovation";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 16 ].column_title__text = ["Values - Technology and Innovation"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 16 ].column_title__class_name = "column_title column_header_text__val_no_5";

            // and the header choices… in order of appearance
            this.column_information_objects_listed_in_the_order_of_the_columns[ 16 ].header__value_choice_categories__listed_in_order_of_appearance = [
                { type : "value_choice",
                    header_category_text : "Relevance Clear",
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
                    header_category_text : "Relevance Unclear",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "0",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_6_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

                { type : "value_choice",
                    header_category_text : "NR",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "NR",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }

            ];


            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 16 ].this_col_lookedUp_left_lox__px_x = 0 ;


            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 16 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 16 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 16 ].whole_column_EXPANDED_width__in_px_x = 154;
            // compressed
            //////// this.column_information_objects_listed_in_the_order_of_the_columns[ 16 ].whole_column_compressed_width__in_px_x = 50;


            ///// LOOKED UP table value cell text area width
            //
            // do we look up the text area width for this cell?						
            // ( the default value - not shown here - is the right one )
            this.column_information_objects_listed_in_the_order_of_the_columns[ 16 ].look_up_width_for_this_col_table_cell_text_area_width = true;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 16 ].mouse_over_text_reference  = "Commitments for technology and innovation promote new technologies offer opportunities for information sharing, public participation, and collaboration. For technology and innovation commitments to be marked as clearly relevant, they must not only use technology or encourage innovation, but they must also enhance one of the other three OGP values.<br/><br/>IRM staff and national researchers coded this information. A more thorough explanation can be found at <a href='http://bit.ly/1ryhFcW'>http://bit.ly/1ryhFcW</a> or in each report. <br/><br/>Possible responses: <br/><i><span class='darker_text_for_mouse_overs'>Relevance clear<br/>Relevance unclear</i></span>";






            //////   GC - Public Integrity [17] /////// 
            // ok
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 17 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 17 ].column_type = "basic_filter_column";

            // set which column, of the imported data, the data is in 
            //// this.column_information_objects_listed_in_the_order_of_the_columns[ 17 ].which_column_num_to_fetch_data_for_for_this_column = 55; 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 17 ].which_column_num_to_fetch_data_for_for_this_column = 64;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 17 ].column_class_name = "gc__public_integrity";
            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 17 ].column_header_outer_containing_div_id_name = "gc__public_integrity";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 17 ].column_title__text = ["GC - Public Integrity"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 17 ].column_title__class_name = "column_title column_header_text__val_no_6";

            // and the header choices… in order of appearance
            this.column_information_objects_listed_in_the_order_of_the_columns[ 17 ].header__value_choice_categories__listed_in_order_of_appearance = [
                { type : "value_choice",
                    header_category_text : "Yes",
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
                    header_category_text : "No",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "0",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_6_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

                { type : "value_choice",
                    header_category_text : "NR",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "NR",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }

            ];



            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 17 ].this_col_lookedUp_left_lox__px_x = 0 ;


            // does it have a diagonal line at the right?
            this.column_information_objects_listed_in_the_order_of_the_columns[ 17 ].this_column_has_diagonal_line__on_top_column = false;

            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 17 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 17 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 17 ].whole_column_EXPANDED_width__in_px_x = 88;
            // compressed
            //////// this.column_information_objects_listed_in_the_order_of_the_columns[ 17 ].whole_column_compressed_width__in_px_x = 50;																


            ///// LOOKED UP table value cell text area width
            //
            // do we look up the text area width for this cell?						
            // ( the default value - not shown here - is the right one )
            this.column_information_objects_listed_in_the_order_of_the_columns[ 17 ].look_up_width_for_this_col_table_cell_text_area_width = false;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 17 ].mouse_over_text_reference  = "This set of binary variables shows whether each commitment involves the OGP grand challenges. IRM staff and national researchers coded this information based on the self-described relevant grand challenge. Often, commitments were relevant to multiple grand challenges, but IRM staff coded these only according to government designated relevant challenges.<br/><br/>Increasing Public Integrity—measures that address corruption and public ethics, access to information, campaign finance reform, and media and civil society freedom.<br/><br/>Possible responses: <br/><i><span class='darker_text_for_mouse_overs'>Yes<br/>No</i></span>";






            //////   GC - Public Resources [18] /////// 
            // ok
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 18 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 18 ].column_type = "basic_filter_column";

            // set which column, of the imported data, the data is in 
            //// this.column_information_objects_listed_in_the_order_of_the_columns[ 18 ].which_column_num_to_fetch_data_for_for_this_column = 56; 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 18 ].which_column_num_to_fetch_data_for_for_this_column = 65;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 18 ].column_class_name = "gc__public_resources";
            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 18 ].column_header_outer_containing_div_id_name = "gc__public_resources";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 18 ].column_title__text = ["GC - Public Resources"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 18 ].column_title__class_name = "column_title column_header_text__val_no_6";

            // and the header choices… in order of appearance
            this.column_information_objects_listed_in_the_order_of_the_columns[ 18 ].header__value_choice_categories__listed_in_order_of_appearance = [
                { type : "value_choice",
                    header_category_text : "Yes",
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
                    header_category_text : "No",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "0",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_6_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

                { type : "value_choice",
                    header_category_text : "NR",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "NR",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }

            ];


            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 18 ].this_col_lookedUp_left_lox__px_x = 0 ;


            // does it have a diagonal line at the right?
            this.column_information_objects_listed_in_the_order_of_the_columns[ 18 ].this_column_has_diagonal_line__on_top_column = false;

            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 18 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 18 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 18 ].whole_column_EXPANDED_width__in_px_x = 88;
            // compressed
            //////// this.column_information_objects_listed_in_the_order_of_the_columns[ 18 ].whole_column_compressed_width__in_px_x = 50;

            ///// LOOKED UP table value cell text area width
            //
            // do we look up the text area width for this cell?						
            // ( the default value - not shown here - is the right one )
            this.column_information_objects_listed_in_the_order_of_the_columns[ 18 ].look_up_width_for_this_col_table_cell_text_area_width = false;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 18 ].mouse_over_text_reference  = "This set of binary variables shows whether each commitment involves the OGP grand challenges. IRM staff and national researchers coded this information based on the self-described relevant grand challenge. Often, commitments were relevant to multiple grand challenges, but IRM staff coded these only according to government designated relevant challenges.<br/><br/>More Effectively Managing Public Resources—measures that address budgets, procurement, natural resources, and foreign assistance.<br/><br/>Possible responses: <br/><i><span class='darker_text_for_mouse_overs'>Yes<br/>No</i></span>";






            //////   GC - Public Services [19] /////// 
            // ok
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 19 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 19 ].column_type = "basic_filter_column";

            // set which column, of the imported data, the data is in 
            //// this.column_information_objects_listed_in_the_order_of_the_columns[ 19 ].which_column_num_to_fetch_data_for_for_this_column = 57; 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 19 ].which_column_num_to_fetch_data_for_for_this_column = 66;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 19 ].column_class_name = "gc__public_services";
            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 19 ].column_header_outer_containing_div_id_name = "gc__public_services";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 19 ].column_title__text = ["GC - Public Services"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 19 ].column_title__class_name = "column_title column_header_text__val_no_6";

            // and the header choices… in order of appearance
            this.column_information_objects_listed_in_the_order_of_the_columns[ 19 ].header__value_choice_categories__listed_in_order_of_appearance = [

                { type : "value_choice",
                    header_category_text : "Yes",
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
                    header_category_text : "No",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "0",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_6_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

                { type : "value_choice",
                    header_category_text : "NR",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "NR",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }

            ];



            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 19 ].this_col_lookedUp_left_lox__px_x = 0 ;


            // does it have a diagonal line at the right?
            this.column_information_objects_listed_in_the_order_of_the_columns[ 19 ].this_column_has_diagonal_line__on_top_column = false;

            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 19 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 19 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 19 ].whole_column_EXPANDED_width__in_px_x = 88;
            // compressed
            //////// this.column_information_objects_listed_in_the_order_of_the_columns[ 19 ].whole_column_compressed_width__in_px_x = 50;


            ///// LOOKED UP table value cell text area width
            //
            // do we look up the text area width for this cell?						
            // ( the default value - not shown here - is the right one )
            this.column_information_objects_listed_in_the_order_of_the_columns[ 19 ].look_up_width_for_this_col_table_cell_text_area_width = false;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 19 ].mouse_over_text_reference  = "This set of binary variables shows whether each commitment involves the OGP grand challenges. IRM staff and national researchers coded this information based on the self-described relevant grand challenge. Often, commitments were relevant to multiple grand challenges, but IRM staff coded these only according to government designated relevant challenges.<br/><br/>Improving Public Services—measures that address the full spectrum of citizen services including health, education, criminal justice, water, electricity, telecommunications, and any other relevant service areas by fostering public service improvement or private sector innovation.<br/><br/>Possible responses: <i><br/><span class='darker_text_for_mouse_overs'>Yes<br/>No</i></span>";






            //////   GC - Corporate Accountability [20] /////// 
            // ok
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 20 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 20 ].column_type = "basic_filter_column";

            // set which column, of the imported data, the data is in 
            //// this.column_information_objects_listed_in_the_order_of_the_columns[ 20 ].which_column_num_to_fetch_data_for_for_this_column = 58; 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 20 ].which_column_num_to_fetch_data_for_for_this_column = 67;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 20 ].column_class_name = "gc__corporate_accountability";

            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 20 ].column_header_outer_containing_div_id_name = "gc__corporate_accountability";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 20 ].column_title__text = ["GC - Corporate Accountability"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 20 ].column_title__class_name = "column_title column_header_text__val_no_6";

            // and the header choices… in order of appearance
            this.column_information_objects_listed_in_the_order_of_the_columns[ 20 ].header__value_choice_categories__listed_in_order_of_appearance = [
                { type : "value_choice",
                    header_category_text : "Yes",
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
                    header_category_text : "No",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "0",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_6_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

                { type : "value_choice",
                    header_category_text : "NR",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "NR",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }

            ];


            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 20 ].this_col_lookedUp_left_lox__px_x = 0 ;


            // does it have a diagonal line at the right?
            this.column_information_objects_listed_in_the_order_of_the_columns[ 20 ].this_column_has_diagonal_line__on_top_column = false;

            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 20 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 20 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 20 ].whole_column_EXPANDED_width__in_px_x = 88;
            // compressed
            //////// this.column_information_objects_listed_in_the_order_of_the_columns[ 20 ].whole_column_compressed_width__in_px_x = 50;


            ///// LOOKED UP table value cell text area width
            //
            // do we look up the text area width for this cell?						
            // ( the default value - not shown here - is the right one )
            this.column_information_objects_listed_in_the_order_of_the_columns[ 20 ].look_up_width_for_this_col_table_cell_text_area_width = false;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 20 ].mouse_over_text_reference  = "This set of binary variables shows whether each commitment involves the OGP grand challenges. IRM staff and national researchers coded this information based on the self-described relevant grand challenge. Often, commitments were relevant to multiple grand challenges, but IRM staff coded these only according to government designated relevant challenges.<br/><br/>Increasing Corporate Accountability—measures that address corporate responsibility on issues such as the environment, anti-corruption, consumer protection, and community engagement.<br/><br/>Possible responses: <br/><i><span class='darker_text_for_mouse_overs'>Yes<br/>No</i></span>";







            //////   GC - Safer Communities [21] /////// 
            // ok
            //
            this.column_information_objects_listed_in_the_order_of_the_columns[ 21 ] = new this.column_description_obj();

            // what kind fo column type is it? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 21 ].column_type = "basic_filter_column";

            // set which column, of the imported data, the data is in 
            //// this.column_information_objects_listed_in_the_order_of_the_columns[ 21 ].which_column_num_to_fetch_data_for_for_this_column = 59; 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 21 ].which_column_num_to_fetch_data_for_for_this_column = 68;

            // set the column class name 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 21 ].column_class_name = "gc__safer_communities";
            // the id for the outer header div
            this.column_information_objects_listed_in_the_order_of_the_columns[ 21 ].column_header_outer_containing_div_id_name = "gc__safer_communities";

            // set the column title name
            this.column_information_objects_listed_in_the_order_of_the_columns[ 21 ].column_title__text = ["GC - Safer Communities"];

            // set the column title class anme  
            this.column_information_objects_listed_in_the_order_of_the_columns[ 21 ].column_title__class_name = "column_title column_header_text__val_no_6";

            // and the header choices… in order of appearance
            this.column_information_objects_listed_in_the_order_of_the_columns[ 21 ].header__value_choice_categories__listed_in_order_of_appearance = [
                { type : "value_choice",
                    header_category_text : "Yes",
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
                    header_category_text : "No",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "0",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_6_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_6_of_7" },

                { type : "value_choice",
                    header_category_text : "NR",
                    current_selection__selectedTrueFalse : true,
                    relevant_value_for_graph_view_display_by_menu : false,
                    numberOrText_in_data_corresponding_to_this_value : "NR",
                    found_instances_of_this_value : 0,
                    value_background_width : 10,
                    /* header cells */
                    header__class_name_selected : "header_values__colours_7_of_7",
                    /* and the cells */
                    tableCells__class_name_selected : "tableCell_values__colours_7_of_7" }

            ];




            ////  current left - looked up position
            //			based on column widths and not/compressed settings
            this.column_information_objects_listed_in_the_order_of_the_columns[ 21 ].this_col_lookedUp_left_lox__px_x = 0 ;


            /////  compressing / expanding 
            // does this column compress ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 21 ].does_this_column_compress = false;

            // are we expanded ? 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 21 ].is_this_column_expanded = true;

            ////  widths compressed / expanded 
            // expanded 
            this.column_information_objects_listed_in_the_order_of_the_columns[ 21 ].whole_column_EXPANDED_width__in_px_x = 88;
            // compressed
            //////// this.column_information_objects_listed_in_the_order_of_the_columns[ 21 ].whole_column_compressed_width__in_px_x = 50;


            ///// LOOKED UP table value cell text area width
            //
            // do we look up the text area width for this cell?						
            // ( the default value - not shown here - is the right one )
            this.column_information_objects_listed_in_the_order_of_the_columns[ 21 ].look_up_width_for_this_col_table_cell_text_area_width = false;

            //// the mouseover text
            this.column_information_objects_listed_in_the_order_of_the_columns[ 21 ].mouse_over_text_reference  = "This set of binary variables shows whether each commitment involves the OGP grand challenges. IRM staff and national researchers coded this information based on the self-described relevant grand challenge. Often, commitments were relevant to multiple grand challenges, but IRM staff coded these only according to government designated relevant challenges.<br/><br/>Creating Safer Communities—measures that address public safety, the security sector, disaster and crisis response, and environmental threats.<br/><br/>Possible responses: <i><br/><span class='darker_text_for_mouse_overs'>Yes<br/>No</i></span>";




            ///////////////// END OF DESCRIBING COL OBJECTS!
            ////////////			- start of rest of the col setting up 

            //////////////////////////   and **then** - make a mapping of the table value objects associatively 
            //////////							such that one can use a data value to fetch the relevant object]
            this.set_up_an_associative_mapping_to_the_column_values__in_each_column();



        } // end header description obj setup






        ////////////////////////
        /////////////////////////		set the countr names as values
        /////////////////////////		in the column info obj country column
        ////////////////////////		

        this.set_country_info_col_obj_values_to_display_area_countries = function( root_this_ ){

            console.log(">>>>>>>> set_country_info_col_obj_values_to_display_area_countries() of object "+root_this_.name_of_this_object );


            console.log("the number of display area objects in this object is |"+root_this_.commitment_display__n_filterning_n_sorting_areas.length+"|");

            console.log(" and the name of the |"+root_this_.commitment_data__country_name_index+"|" );

            console.log("and the column title is "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.commitment_data__country_name_index ].column_title__text );


            /// ////  empty the existing values please
            root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.commitment_data__country_name_index ].header__value_choice_categories__listed_in_order_of_appearance = [];

            //////// loop and enter the country names from the display areas
            //
            for( this.curr_country_display_area_obj_i = 0; this.curr_country_display_area_obj_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.curr_country_display_area_obj_i++ ){

                this.curr_country_name = root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_country_display_area_obj_i ].country_name;

                console.log("\t - working on display area obj #"+this.curr_country_display_area_obj_i+" | which is country |"+this.curr_country_name+"|" );


                /*
                 root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.commitment_data__country_name_index ].header__value_choice_categories__listed_in_order_of_appearance.push(
                 { country_name : this.curr_country_name }
                 );
                 */

                root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.commitment_data__country_name_index ].header__value_choice_categories__listed_in_order_of_appearance.push(
                    { type : "value_choice",
                        header_category_text : this.curr_country_name,
                        country_name_as_iso_code : root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_country_display_area_obj_i ].country_name_as_iso_code,
                        current_selection__selectedTrueFalse : true,
                        numberOrText_in_data_corresponding_to_this_value : this.curr_country_name,
                        found_instances_of_this_value : 0,
                        value_background_width : 10,
                        /* header cells */
                        header__class_name_selected : "header_values__colours_1_of_7",
                        /* and the cells */
                        tableCells__class_name_selected : "tableCell_values__colours_1_of_7" } );

            }

        }



        //////////
        //////////		companion function that sets
        //////////		the country col info obj to a basic filter type
        //////////		such that the data processing algorithm
        //////////		will use it for filtering
        //////////


        this.set_the_country_info_column_type_to_be_a_basic_filter_column = function( root_this_ ){

            console.log(">>>>>>> set_the_country_info_column_type_to_be_a_basic_filter_column () ");

            ////////  change it to be a basic filter column 
            ///				in the eyes of the data processing algorthm
            //			- 
            root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.commitment_data__country_name_index ].column_type = "basic_filter_column";

            console.log(" ---- the country listing col obj type is |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ root_this_.commitment_data__country_name_index ].column_type+"| and it's got this many value choices : |"+root_this_.commitment_display__n_filterning_n_sorting_areas.length+"|");

        }




        ////////////////////////  
        ////////////////////////  format data according to the relevant columns   //////////


        // NEW VERSION
        // NEW VERSION  -  should allow one to filter whether 
        // NEW VERSION          NR commitments are allowed in…					
        // NEW VERSION

        /* 
         … as defined by the column objects + details 
         in the column_information_objects_listed_in_the_order_of_the_columns object
         */

        this.format_loaded_data_according_to_the_relevant_column_order__NEW = function( root_this_, table_data_raw_, include_NR_commitments ){

            console.log(" >>> formatting data, hold on! including NR commitments? |"+include_NR_commitments+"|" );

            // initialise here to put the data
            /// NOTE - maybe APPEND TO THIS? if loading several datasets?
            root_this_.table_data__formatted_according_to_relevant_column_order = [];



            //// loop and structure the data 
            for( var i = root_this_.raw_data__first_data_row_num; i < root_this_.raw_data__last_row_to_work_on ; i++ ){
                // shorter version for testing
                ///////  for( var i = this.raw_data__first_data_row_num; i < 100 ; i++ ){

                // debug
                //////   console.log('- working on row # '+i);



                ///////// skip Not Reviewd (NR) tagged commitments??

                if( include_NR_commitments === false && table_data_raw_[ i ][root_this_.raw_data__col_num_of_NR_info_col] ===  root_this_.raw_data__NotReviewed_data_item_as_string ){

                    // console.log("-------- continuing on row #"+i );
                    // skip this row
                    continue;
                }



                // add a new temporary array
                root_this_.temp_array_for_current_row__to_be_filled = new Array();

                // debug
                /// console.log(" table_data[i] test print ---> ");
                /// console.log( table_data__RAW__commitmentData_edition_[i] );


                /*

                 FIX 
                 FIX 
                 FIX 	- make an if/then statemnet and SKIP Not Reviewed (NR) commitments here
                 FIX 
                 FIX

                 */


                // go through each object in the header objects array 
                //	and add its bit into the out array
                for( var j = 0; j < root_this_.column_information_objects_listed_in_the_order_of_the_columns.length; j++ ){

                    // feedback
                    //////  console.log(" \t -- working on col #"+j+" / concerning "+this.column_information_objects_listed_in_the_order_of_the_columns[j].column_title__text );

                    //////////   BUUUUUUGGG!
                    //  console.log(" and the table data is of length "+root_this_.table_data[i].length );
                    ////   console.log(" \t\t relevant data - >  relev col : "+this.column_information_objects_listed_in_the_order_of_the_columns[j].which_column_num_to_fetch_data_for_for_this_column+" | data : "+table_data_raw_[ i ][ this.column_information_objects_listed_in_the_order_of_the_columns[j].which_column_num_to_fetch_data_for_for_this_column] );

                    /*
                     // check if the index of the current row of the table_data is valid (and inside the range of the current row's subarray )
                     if( this.column_information_objects_listed_in_the_order_of_the_columns[j].which_column_num_to_fetch_data_for_for_this_column > 0 && this.column_information_objects_listed_in_the_order_of_the_columns[j].which_column_num_to_fetch_data_for_for_this_column < table_data__RAW__commitmentData_edition_[ i ].length ){
                     */
                    // 
                    ////  console.log("\t\t the current index for the current row's subarray is valid &&  "+this.column_information_objects_listed_in_the_order_of_the_columns[j].which_column_num_to_fetch_data_for_for_this_column );

                    // add the relevant column 
                    /*
                     root_this_.table_data__formatted_according_to_relevant_column_order[i][j] = table_data_raw_[ i ][ this.column_information_objects_listed_in_the_order_of_the_columns[j].which_column_num_to_fetch_data_for_for_this_column ] ;
                     */

                    // do filtering if it's a FILTERING COLUMN
                    //
                    if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[j].column_type === root_this_.column_type_for_regular_filtering ||  root_this_.column_information_objects_listed_in_the_order_of_the_columns[j].column_type === root_this_.column_type_of_just_text ){
                        // 
                        root_this_.temp_array_for_current_row__to_be_filled.push( table_data_raw_[ i ][ root_this_.column_information_objects_listed_in_the_order_of_the_columns[j].which_column_num_to_fetch_data_for_for_this_column ] );
                    }
                    //
                    // and if it's a TAGS COLUMN - fetch the relevant tag indicies
                    else if(  root_this_.column_information_objects_listed_in_the_order_of_the_columns[j].column_type === root_this_.column_type_for_TAGS_filtering ){

                        // EDIT - TESTIGN NON-DIRECT LINK APPROACH
                        //			...further below
                        ////////  this.fetched_relevant_tag_data_for_this_data_row = this.fetch_relevant_tag_description_data_for_this_row( this, i, this.main_parent_object_this.table_data__RAW__commitmentData_edition );
                        root_this_.fetched_relevant_tag_data_for_this_data_row = root_this_.fetch_relevant_tag_description_data_for_this_row( root_this_, i, table_data_raw_ );

                        // push some test numbers for now
                        root_this_.temp_array_for_current_row__to_be_filled.push( root_this_.fetched_relevant_tag_data_for_this_data_row );
                    }


                }

                ////  add the current row to the main data
                root_this_.table_data__formatted_according_to_relevant_column_order.push( root_this_.temp_array_for_current_row__to_be_filled );

            }


            /// and then add the index and visibility columns please
            root_this_.add_a_index_and_visibility_column_to_the_data_formatted_data_rows( root_this_.table_data__formatted_according_to_relevant_column_order, root_this_ );



            //////////  and in the end, indicate whether the data is loaded!
            root_this_.is_relev_data_loaded_and_formatted = true;

        }






        ////////////////////////  
        ////////////////////////  format data according to the relevant columns   //////////				
        /* 
         … as defined by the column objects + details 
         in the column_information_objects_listed_in_the_order_of_the_columns object
         */

        this.format_loaded_data_according_to_the_relevant_column_order = function( root_this_, table_data_raw_ ){

            console.log(" >>> formatting data, hold on! ");

            // initialise here to put the data
            /// NOTE - maybe APPEND TO THIS? if loading several datasets?
            root_this_.table_data__formatted_according_to_relevant_column_order = [];



            //// loop and structure the data 
            for( var i = root_this_.raw_data__first_data_row_num; i < root_this_.raw_data__last_row_to_work_on ; i++ ){
                // shorter version for testing
                ///////  for( var i = this.raw_data__first_data_row_num; i < 100 ; i++ ){

                // debug
                //////   console.log('- working on row # '+i);

                /*
                 // make a subarray in the current array element (i.e. row), to fit 
                 //	all the column cells 
                 root_this_.table_data__formatted_according_to_relevant_column_order[i] = new Array();
                 */

                // add a new temporary array
                root_this_.temp_array_for_current_row__to_be_filled = new Array();

                // debug
                /// console.log(" table_data[i] test print ---> ");
                /// console.log( table_data__RAW__commitmentData_edition_[i] );


                // go through each object in the header objects array 
                //	and add its bit into the out array
                for( var j = 0; j < root_this_.column_information_objects_listed_in_the_order_of_the_columns.length; j++ ){

                    // feedback
                    //////  console.log(" \t -- working on col #"+j+" / concerning "+this.column_information_objects_listed_in_the_order_of_the_columns[j].column_title__text );

                    //////////   BUUUUUUGGG!
                    //  console.log(" and the table data is of length "+root_this_.table_data[i].length );
                    ////   console.log(" \t\t relevant data - >  relev col : "+this.column_information_objects_listed_in_the_order_of_the_columns[j].which_column_num_to_fetch_data_for_for_this_column+" | data : "+table_data_raw_[ i ][ this.column_information_objects_listed_in_the_order_of_the_columns[j].which_column_num_to_fetch_data_for_for_this_column] );

                    /*
                     // check if the index of the current row of the table_data is valid (and inside the range of the current row's subarray )
                     if( this.column_information_objects_listed_in_the_order_of_the_columns[j].which_column_num_to_fetch_data_for_for_this_column > 0 && this.column_information_objects_listed_in_the_order_of_the_columns[j].which_column_num_to_fetch_data_for_for_this_column < table_data__RAW__commitmentData_edition_[ i ].length ){
                     */
                    // 
                    ////  console.log("\t\t the current index for the current row's subarray is valid &&  "+this.column_information_objects_listed_in_the_order_of_the_columns[j].which_column_num_to_fetch_data_for_for_this_column );

                    // add the relevant column 
                    /*
                     root_this_.table_data__formatted_according_to_relevant_column_order[i][j] = table_data_raw_[ i ][ this.column_information_objects_listed_in_the_order_of_the_columns[j].which_column_num_to_fetch_data_for_for_this_column ] ;
                     */

                    // do filtering if it's a FILTERING COLUMN
                    //
                    if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[j].column_type === root_this_.column_type_for_regular_filtering ||  root_this_.column_information_objects_listed_in_the_order_of_the_columns[j].column_type === root_this_.column_type_of_just_text ){
                        // 
                        root_this_.temp_array_for_current_row__to_be_filled.push( table_data_raw_[ i ][ root_this_.column_information_objects_listed_in_the_order_of_the_columns[j].which_column_num_to_fetch_data_for_for_this_column ] );
                    }
                    //
                    // and if it's a TAGS COLUMN - fetch the relevant tag indicies
                    else if(  root_this_.column_information_objects_listed_in_the_order_of_the_columns[j].column_type === root_this_.column_type_for_TAGS_filtering ){

                        // EDIT - TESTIGN NON-DIRECT LINK APPROACH
                        //			...further below
                        ////////  this.fetched_relevant_tag_data_for_this_data_row = this.fetch_relevant_tag_description_data_for_this_row( this, i, this.main_parent_object_this.table_data__RAW__commitmentData_edition );
                        root_this_.fetched_relevant_tag_data_for_this_data_row = root_this_.fetch_relevant_tag_description_data_for_this_row( root_this_, i, table_data_raw_ );

                        // push some test numbers for now
                        root_this_.temp_array_for_current_row__to_be_filled.push( root_this_.fetched_relevant_tag_data_for_this_data_row );
                    }


                }

                ////  add the current row to the main data
                root_this_.table_data__formatted_according_to_relevant_column_order.push( root_this_.temp_array_for_current_row__to_be_filled );

            }


            /// and then add the index and visibility columns please
            root_this_.add_a_index_and_visibility_column_to_the_data_formatted_data_rows( root_this_.table_data__formatted_according_to_relevant_column_order, root_this_ );



            //////////  and in the end, indicate whether the data is loaded!
            root_this_.is_relev_data_loaded_and_formatted = true;

        }




        ///////////////////  ( a more compacy version of the above )
        ////
        ///////////////////   parse and format data for this view object
        /////////
        /////////			i.e. take the raw data loaded by the root object and 
        /////////			format it to suit the needs of this object



        this.parse_and_format_raw_data_from_parent_obejct_for_this_object = function( root_this_ ){

            console.log(">>>>>>>  parse_and_format_raw_data_from_parent_obejct_for_this_object() ");

            root_this_.format_loaded_data_according_to_the_relevant_column_order( root_this_, root_this_.parent_this_.table_data__RAW__commitmentData_edition );


        }




        ///////////////////////		access col obj header values associativly, by their data value
        ////////////////////			- for each column header, make an associative mapping, 
        ////////////////////			from a value's data value to the value meta data, 
        ////////////////////			such that one can fetch the relevant text / classnames / etc.. given a cell data value

        this.set_up_an_associative_mapping_to_the_column_values__in_each_column = function(){

            // hellow
            console.log(">>>>>>>  set_up_an_associative_mapping_to_the_column_values__in_each_column() ");


            /// loop : go through the column objects
            //
            for( this.curr_col_i = 0; this.curr_col_i < this.column_information_objects_listed_in_the_order_of_the_columns.length; this.curr_col_i++ ){

                //// set up the associative array
                this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_i ].header__value_choice_categories__with_associative_keys_based_on_data_values = {};

                //// go through all the values
                for( this.curr_value_i = 0; this.curr_value_i < this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_i ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_value_i++ ){

                    // debug
                    ////////   console.log( "\t making data value - meta data obj bindings - working on col#"+this.curr_col_i+" and value # "+this.curr_value_i+" / which has a value of  "+this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_value_i ].numberOrText_in_data_corresponding_to_this_value );

                    //// associate the value meta data object with the data value it 'recognizes'
                    this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_i ].header__value_choice_categories__with_associative_keys_based_on_data_values[ this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_value_i ].numberOrText_in_data_corresponding_to_this_value ] = this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_value_i ] ;

                }


                //////
            }


            /////
        }





        /////////////////////////
        ///////////////////////   insert the tags data into each formatted data row
        ///////////////////////


        this.fetch_relevant_tag_description_data_for_this_row = function( root_this_, curr_raw_data_row_i, table_data_raw_ ){

            //  hellow!
            ////  console.log(" >>>>>> fetch_relevant_tag_description_data_for_this_row - feching data for raw data row #"+curr_raw_data_row_i );
            // shorter version of the above
            console.log(" >>>>>> fetch_relevant_tag_description_data_for_this_row - feching data for raw data row #…" )	;


            //// make an array the size of the tags
            //		fill it with true/false values depending on whether it has a tag or not

            // debugging 
            ///////   console.log(" >> this.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ] "+this.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows  ].header__value_choice_categories__listed_in_order_of_appearance.length );
            //
            this.array_of_true_false_values_corresponding_to_tags_in_col_desc_obj_tags_list = new Array( this.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows  ].header__value_choice_categories__listed_in_order_of_appearance.length );


            ////   go through the tags (col descr objects) column's list of tags and 
            //		set whether they're present in the array above
            for( this.tag_i = 0; this.tag_i < this.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows  ].header__value_choice_categories__listed_in_order_of_appearance.length; this.tag_i++ ){

                // debug
                /////////    console.log(" \t\t\t working on tag #"+this.tag_i );
                // console.log(" \t\t\t  - - - which should be : "+this.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows  ].header__value_choice_categories__listed_in_order_of_appearance[ this.tag_i ].type );
                /////////    console.log(" \t\t\t  - - - which should be : "+this.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows  ].header__value_choice_categories__listed_in_order_of_appearance[ this.tag_i ] );



                // is the current tag in the list of tags a heading? ... or a valid tag?
                if( this.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows  ].header__value_choice_categories__listed_in_order_of_appearance[this.tag_i ].type === this.tag_type__tag_value_choice ){

                    // ok, it's a valid tag - now fetch the data… 


                    ///////   console.log( "\t\t\t\t and corresponds to the data value - "+table_data_raw_[ curr_raw_data_row_i ][ this.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.tag_i ].corresponds_to_which_col_num_in_data ]+" and we're looking for a piece of data along the lines of |"+this.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.tag_i ].numberOrText_in_data_corresponding_to_this_value+"|");

                    // now, does the data row have this tag? 
                    if( table_data_raw_[ curr_raw_data_row_i ][ this.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.tag_i ].corresponds_to_which_col_num_in_data ] === this.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.tag_i ].numberOrText_in_data_corresponding_to_this_value  ){

                        //////   console.log("\t\t\t\t\t - found a matching value!");

                        // set the current tag array item as TRUE, plus add some debugging metadata
                        //  like the heading in the col description objects + the header in the raw data
                        this.array_of_true_false_values_corresponding_to_tags_in_col_desc_obj_tags_list[ this.tag_i ] = [ true, this.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows  ].header__value_choice_categories__listed_in_order_of_appearance[ this.tag_i ].corresponds_to_which_col_num_in_data, this.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.tag_i ].header_category_text, table_data_raw_[ root_this_.tags_data_in_RAW_DATA__ROW_NUM_of_tags_descriptions ][ this.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows  ].header__value_choice_categories__listed_in_order_of_appearance[ this.tag_i ].corresponds_to_which_col_num_in_data ]   ];
                    }else{

                        //////   console.log("\t\t\t\t\t - NOT a matching value!");

                        // set the current tag array item as false, plus add some debugging metadata
                        // eg - 
                        //		[ true or false ]
                        //		[ column num in original data ][ ]
                        //		[ tag value name in col descr objects ]
                        //		[ tag value name in raw data ]
                        this.array_of_true_false_values_corresponding_to_tags_in_col_desc_obj_tags_list[ this.tag_i ] = [ false, this.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows  ].header__value_choice_categories__listed_in_order_of_appearance[ this.tag_i ].corresponds_to_which_col_num_in_data, this.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.tag_i ].header_category_text, table_data_raw_[ root_this_.tags_data_in_RAW_DATA__ROW_NUM_of_tags_descriptions ][ this.column_information_objects_listed_in_the_order_of_the_columns[ this.index_of_tags_column_in_formatted_data_rows  ].header__value_choice_categories__listed_in_order_of_appearance[ this.tag_i ].corresponds_to_which_col_num_in_data ]   ];

                    }

                }

            }

            return this.array_of_true_false_values_corresponding_to_tags_in_col_desc_obj_tags_list;
        }




        ///////////////////////
        //////////////////////    initialise the basic html areas… please
        //////////////////////

        /* 
         set up the various relevant outer dom areas please
         */

        this.initialise_basic_html_table_relevant_areas__n_look_up_key_tableOuterElement_distances__please = function( root_this_ ){

            console.log(" >>>>>>>>  initialise_basic_html_table_relevant_areas__n_look_up_key_tableOuterElement_distances__please ");
            console.log(" \t\t - root_this_.page_pseudo_body__FOR_VIEWS__dom_elmt : ");
            console.log(" \t\t\t ");
            console.log( root_this_.page_pseudo_body__FOR_VIEWS__dom_elmt  );


            $(document).ready( function(){



                ///// where the different views contents go
                //		- eg. the table / graph views
                root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS__dom_elmt = $("body").append("<div id='"+root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS__dom_elmt__id_name+"' class='"+root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS_process__CURRENT_class_name+"'></div>");

                // select it
                root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS__dom_elmt = $("#"+root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS__dom_elmt__id_name );



                /// add the HEADER AREA 
                // -> hardcode the loc? 
                ////////////our_irm_vis.our_table_view_obj_.main_parent_object_this.page_pseudo_body__FOR_VIEWS__dom_elmt
                root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS__dom_elmt.append("<div id='"+root_this_.table_view_main_header_area__dom_id_name+"' class='"+root_this_.table_view__main_outer_areas__class_name+"'></div>");
                // select the just-created item
                root_this_.table_view_main_header_area__dom_elmt = $("#"+root_this_.table_view_main_header_area__dom_id_name );


                //// add the filtering and sorting options options area of the table header - IN THE HEADER AREA 
                root_this_.table_view_main_header_area__dom_elmt.append("<div id='"+root_this_.table_view_main_header_area__search_n_options_area__dom_id_name+"'></div>");
                // select the just-created item
                root_this_.table_view_main_header_area__search_n_options_area__dom_elmt = $("#"+root_this_.table_view_main_header_area__search_n_options_area__dom_id_name );


                ////  add the columns area please! - IN THE HEADER AREA 
                root_this_.table_view_main_header_area__dom_elmt.append("<div id='"+root_this_.table_view_main_header_area__column_headers_area__dom_id_name+"' ></div>");
                // and select this newly created item
                root_this_.table_view_main_header_area__column_headers_area__dom_elmt = $("#"+root_this_.table_view_main_header_area__column_headers_area__dom_id_name );


                //// COUNTRY LISTING AREA BELOW THE HEADER
                ///  add the country names area -- BELOW the header
                root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS__dom_elmt.append("<div id='"+root_this_.table_view__countryNamesEtAl_area__belowHeadersArea__id_name+"' class='"+root_this_.table_view__main_outer_areas__class_name+"'></div>");
                // select it please
                root_this_.table_view__countryNamesEtAl_area__belowHeadersArea__dom_elmt = $("#"+root_this_.table_view__countryNamesEtAl_area__belowHeadersArea__id_name );

                ///  add the country names area -- INSIDE the header
                root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS__dom_elmt.append("<div id='"+root_this_.table_view__countryNamesEtAl_area__headersArea__id_name+"' class='"+root_this_.table_view__main_outer_areas__class_name+"'></div>");

                /*
                 // add the mouse-catching area behind the above area
                 $("#"+root_this_.table_view__countryNamesEtAl_area__headersArea__id_name ).append("<div class='"+root_this_.tags_drop_down_menu__invisible_background_div+"'></div>");
                 */

                // and add the mouse-catching area behind it
                $( "#"+root_this_.table_view__countryNamesEtAl_area__headersArea__id_name ).append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].tags_drop_down_menu__invisible_background_div+"'></div>")


                // select it please
                root_this_.table_view__countryNamesEtAl_area__headersArea__dom_elmt = $("#"+root_this_.table_view__countryNamesEtAl_area__headersArea__id_name );

                /// add a columns header area within the country listing header ( so it uses the same sort of container as in the other 
                //		areas where there are column header objects)
                root_this_.table_view__countryNamesEtAl_area__headersArea__dom_elmt.append("<div id='"+root_this_.table_view__countryNamesEtAl_area__headersArea__columnHeader__id_name+"'></div>");
                //  select it?
                root_this_.table_view__countryNamesEtAl_area__headersArea__columnHeader__dom_elmt = $("#"+root_this_.table_view__countryNamesEtAl_area__headersArea__columnHeader__id_name );

                ////// 		to the country listing header column:
                //////  add the  | text search | reset search | export data | fields+buttons								
                //
                ///  add the text field

                if( root_this_.do_we_have_a_text_search_field === true ){
                    root_this_.table_view__countryNamesEtAl_area__headersArea__dom_elmt.append( "<div id='"+root_this_.table_view_main_header_area__search_n_options_area__text_search_field__id_name+"'><input id='"+root_this_.table_view_main_header_area__search_n_options_area__text_search_field__INPUT_AREA__id_name+"' type='text' value='"+root_this_.table_view__text_search_box__default_search_field_text+"'><div id='"+root_this_.table_view_main_header_area__search_n_options_area__text_search_field__SEARCH_ICON__id_name+"'></div></div>" );
                }

                //
                //////  add the reset search button
                root_this_.table_view__countryNamesEtAl_area__headersArea__dom_elmt.append( "<div id='"+root_this_.table_view_main_header_area__search_n_options_area__reset_settings_button__id_name+"'><p>reset search and filter settings</p></div>" );
                //
                ///////  add the export data button
                root_this_.table_view__countryNamesEtAl_area__headersArea__dom_elmt.append( "<div id='"+root_this_.table_view_main_header_area__search_n_options_area__export_data_button__id_name+"'><p>export data</p></div>" );





                /// MAIN COMMITEMNTS LISTING AREA
                /// add the main commitments area!
                root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS__dom_elmt.append("<div id='"+root_this_.table_view__main_commitments_listing_area__id_name+"' class='"+root_this_.table_view__main_outer_areas__class_name+"'></div>");
                // select it please
                root_this_.table_view__main_commitments_listing_area__dom_elmt = $("#"+root_this_.table_view__main_commitments_listing_area__id_name );




                ////
                ////   and then look up the distances please
                /// look up the dimensions of the various static table elements
                root_this_.look_up_dimensions_of_table_elements( root_this_ );

                ///   set up the headercolumns
                //			
                root_this_.set_up_column_header_objs__in_header( root_this_ );
                //
                //	set up the positions of the header columns
                root_this_.update_the_left_loc_x_and_width_of_col_header_objects( root_this_ );






                /// AND..... add the mouse-over area
                root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS__dom_elmt.append("<div id='"+root_this_.mouseover_div__outer_div_dom_element__id_name+"' class='"+root_this_.mouseover_div__outer_div_dom_element__IS_INVISIBLE+"'></div>");



                //////// and then bind the handlers to the 
                ///			various elements above the 
                ///			table, eg. the search/reset/export buttons
                root_this_.bind_handlers_to_controls_above_table__eg_search__reset_search__export_data__etc( root_this_ );


            });

        }






        ///////////
        ///////////  remove the basic html elements for this view
        //////////

        this.remove_basic_html_elements_for_this_view = function( root_this_ ){

            // hellow!
            console.log(">>>>>> remove_basic_html_elements_for_this_view() - removing basic html elements for this view ");




            $(document).ready( function(){

                $( "#"+root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS__dom_elmt__id_name ).off();
                $( "#"+root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS__dom_elmt__id_name ).remove();


                /*
                 /// remove the HEADER AREA 
                 root_this_.table_view_main_header_area__dom_elmt.off();
                 root_this_.table_view_main_header_area__dom_elmt.remove();


                 //// REMOVE
                 //// the filtering and sorting options options area of the table header - IN THE HEADER AREA 
                 root_this_.table_view_main_header_area__dom_elmt.off();
                 $("#"+root_this_.table_view_main_header_area__search_n_options_area__dom_id_name ).remove();


                 ////  REMOVE the columns area please! - IN THE HEADER AREA 
                 $("#"+root_this_.table_view_main_header_area__column_headers_area__dom_id_name ).off();
                 $("#"+root_this_.table_view_main_header_area__column_headers_area__dom_id_name ).remove();


                 //// REMOVE
                 //// COUNTRY LISTING AREA BELOW THE HEADER
                 ///  add the country names area -- BELOW the header
                 $("#"+root_this_.table_view_main_header_area__column_headers_area__dom_id_name ).off();
                 $("#"+root_this_.table_view__countryNamesEtAl_area__belowHeadersArea__id_name ).remove();


                 ///  add the country names area -- INSIDE the header
                 $("#"+root_this_.table_view__countryNamesEtAl_area__headersArea__id_name ).off();
                 $("#"+root_this_.table_view__countryNamesEtAl_area__headersArea__id_name ).remove();



                 ////  REMOVE
                 /// MAIN COMMITEMNTS LISTING AREA
                 /// add the main commitments area!
                 $("#"+root_this_.table_view__main_commitments_listing_area__id_name ).off();
                 $("#"+root_this_.table_view__main_commitments_listing_area__id_name ).remove();

                 /// AND..... REMOVE the mouse-over area
                 $("#"+root_this_.mouseover_div__outer_div_dom_element__id_name ).off();
                 $("#"+root_this_.mouseover_div__outer_div_dom_element__id_name ).remove();

                 */


            });

        }




        /////////////    set the visual location of table DOM elements 
        /////////////		according to the scroll
        /*
         I.e. the header and the country listing should always be visible, even though one scrolls
         the window, and the commitments move.
         However, of course, the header and country listings shoudl stay relative to 
         where they are in the commitments listing

         */





        ////////////////////////  
        ////////////////////////  add an index and visibility column to the data rows
        /* this is so it's easier to identify each row/commitment and 
         see whether it should be visible, not visible (and removed), or translucent ( but at the end of the listed items ) */
        //////////

        this.add_a_index_and_visibility_column_to_the_data_formatted_data_rows = function( in_data, root_this_ ){

            in_data.map( function(d, i){
                //  add an index column
                d[ root_this_.final_col_num_of_INDEX_column ] = i;

                //  add a visibility column
                d[ root_this_.final_col_num_of_VISIBILITY_column ] = "visible";
            });

        }




        /////////////
        /////////////
        /// related function - finds the relevant col nums for the index + visibiltiy columns

        this.find_the_relevant_col_numbers_for_the_index_and_visibility_cols = function(){

            // welcome
            console.log(">>> starting : add_a_index_and_visibility_column_to_the_data_formatted_data_rows ");

            // find the commitment index column
            this.final_col_num_of_INDEX_column = ( this.num_of__column_information_objects_and_columns -1 ) + this.index_offset_from_a_data_rows_data_columns__of_row_INDEX_col ;

            // find+set the commitment visibiltiy column
            this.final_col_num_of_VISIBILITY_column = ( this.num_of__column_information_objects_and_columns -1 ) + this.index_offset_from_a_data_rows_data_columns__of_row_VISIBILITY_col ;

            // // //  feedback
            console.log("/// the final indicies of the index and visibility columns are "+this.final_col_num_of_INDEX_column+"/"+this.final_col_num_of_VISIBILITY_column );
        }





        ////////////////////////  
        ////////////////////////  sort and arrange data for final ideal 
        ////////////////////////	use in table
        /*
         This function arranges the data relevantly according to whether 
         the display of the commitments is as :
         - an alphabetic listing
         - a listing inside countries

         Not much needs to be done for the alphabetic listing.
         But a bit needs to be done to arrange things per country.
         EG. Figure out which the countries are and sort things accordingly
         */
        //////////		

        this.arrange_formatted_commitment_arrays_into_country_or_commitment_centric_ordering = function( root_this_, country_or_commitment_centric_filteirng ){


            // hellow!
            console.log(" >>>>   arrange_formatted_commitment_arrays_into_country_or_commitment_centric_ordering () ");


            // initialise
            root_this_.table_data_arranged_commitment_or_country_centric = [];


            ////////  commitment centric ordering 
            //				- basically just a one-dimensional list

            if( country_or_commitment_centric_filteirng === "commitment_centric" ){

                console.log(" \t - filtering commitements commitment-centrically ");

                // copy the commitments into the bigger array
                root_this_.table_data__formatted_according_to_relevant_column_order.map( function(d){
                    root_this_.table_data_arranged_commitment_or_country_centric.push( d );
                });

                this.sort_given_commitments_alphabetically( root_this_, root_this_.table_data_arranged_commitment_or_country_centric, 0 );

            }


            ///////   country centric ordering
            //				two dimensional list of countryies + commitments
            /*
             - find the country-names
             - ( $.trim()??? )
             */

            if( country_or_commitment_centric_filteirng === "country_centric" ){

                // 
                console.log(" \t - filtering commitements country-centrically ");

                // make a historgramattic sort
                root_this_.table_data__formatted_according_to_relevant_column_order.map( function(d){

                    console.log(" working on country "+d[0] );

                    // is the country already there ? 
                    // - then add the commitment
                    if( root_this_.table_data_arranged_commitment_or_country_centric[ d[0] ] ){

                        ///////  console.log(" --- great! there's already a |"+d[0]+"| entry in the data!" );

                        // add the current commitment to the array of matching commitments
                        root_this_.table_data_arranged_commitment_or_country_centric[ d[0] ].matching_commitments.push( d );

                    }
                    // no matching country there yet? 
                    // - add a new entry please :) ... add the commitment too
                    else{

                        ///////  console.log(" \\\\ aha - no entry for "+d[0]+" exists yet... - creating a new one! ");

                        // make a new country - hopefully - entry and add this one
                        root_this_.table_data_arranged_commitment_or_country_centric[ d[0] ] = { country_name : d[0], matching_commitments : [ d ] };
                    }


                });

            }

        }





        /////   //////////////// 
        /////   //////////////// 
        /////   //////////////// 		sort commitments alphabetically
        /////   //////////////// 

        this.sort_given_commitments_alphabetically = function( root_this_, commitments_to_sort, column_num_to_sort_by ){

            console.log(">>>> sort_given_commitments_alphabetically - sorting commitements alphabetically ");

            // now sort it!
            commitments_to_sort.sort( function(a, b){

                // a[1] === commitment title
                if( a[column_num_to_sort_by] < b[column_num_to_sort_by] ){
                    return -1;
                }
                if( a[column_num_to_sort_by] > b[column_num_to_sort_by] ){
                    return 1;
                }
                return 0;

            });
        }



        /////   //////////////// 
        /////   //////////////// 
        /////   //////////////// 		sort commitments display commitments data alphabetically
        /////   //////////////// 

        this.sort_display_commitments_objects__alphabetically = function(){

            /// Sort alphabetically please 
            //		( the for key in doesn't always sort alphabetically ) 
            this.commitment_display__n_filterning_n_sorting_areas.sort( function(a, b){
                if( a.country_name < b.country_name ){
                    return -1;
                }else if( a.country_name > b.country_name ) {
                    return 1;
                }
                return 0;
            });

        }




        ///////////////////////////////   text search area  //////
        ///////////////////////////////

        ///////////////////////
        ///////////////////////
        //
        //		- build an index for the title / commitments
        //			of a given commitment display area
        //		- build a search engine
        //
        ///////////////////////
        ///////////////////////



        /////  a function to build a word index 
        //		of a particular display object's
        //		given commitments.
        //		the given commitments can be various, 
        //		to suit the circiumstance;
        //			- whether filtering from scratch
        //			- or filtering on existing filteirng results
        //
        //		Please note that the supplied 'relevant commitments'
        //		also suggests which the order of the commitments
        //		in the text search results is…
        //		More about this later…



        ///// aaaaand..... the more low level search index building
        //		- can be applied to individual columns

        this.build_search_index_for_particular_data_array_column_for_given_display_object__NEW = function( root_this_, relev_commitments_display_obj ){

            /// hellow
            console.log(">>>> build_search_index_for_particular_data_array_column_for_given_display_object() - building a text search index for display obj |"+relev_commitments_display_obj.country_name+"| and its "+relev_commitments_display_obj.all_commitments__unfiltered.length+"|" );




            ////  make an out variable
            //
            //	- this will have the found words as keys
            //	- each key entry has an array the length of the 
            //	commitments being searched for,
            //	and each cell in last-mentioned array
            //	has the indicies of the found words
            this.text_search_index_for_given_column = {};


            this.relevant_commitments = relev_commitments_display_obj.all_commitments__unfiltered;




            // debug
            console.log("- the empty array looks like this ");
            console.log( this.model_empty_array_w_the_length_of_searched_commitments );



            //// LOOP through each commitment and each word in it
            //			and index ;)

            for( this.curr_commitment_i = 0; this.curr_commitment_i < this.relevant_commitments.length; this.curr_commitment_i++ ){

                /// produce searchable text : 
                ///  - combine the commitment title and full commitment texts
                //
                this.curr_commitments_texts = this.relevant_commitments[ this.curr_commitment_i ][ root_this_.parsed_data__col_num_of__commitment_title  ]+" "+this.relevant_commitments[ this.curr_commitment_i ][ root_this_.parsed_data__col_num_of__full_commitment_text  ];

                this.curr_commitment_text_split = this.curr_commitments_texts.toLowerCase().replace(/[^\w\s]/gi, '').replace("  ", " ").split(" ");


                //////  debugging
                // REMOVE please
                ///////   console.log(" working on commitment #"+this.curr_commitment_i +" and the split text is: ");
                ///////   console.log( this.curr_commitment_text_split );


                /////   LOOP through each word in the split text 
                //			and build the search index

                for( this.curr_word_in_split_txt_i = 0; this.curr_word_in_split_txt_i < this.curr_commitment_text_split.length; this.curr_word_in_split_txt_i++ ){

                    // debug
                    ///// console.log("\t\t - working on word #"+this.curr_word_in_split_txt_i+" |"+this.curr_commitment_text_split[this.curr_word_in_split_txt_i]+"|");

                    //// 
                    if( this.curr_commitment_text_split[ this.curr_word_in_split_txt_i ] in this.text_search_index_for_given_column ){


                        // add the current word finding (index) 
                        //	to the relevant commitment cell in the
                        //	current word entry
                        //
                        this.text_search_index_for_given_column[ this.curr_commitment_text_split[ this.curr_word_in_split_txt_i ] ].word_found_vs_commitments_index[ this.curr_commitment_i ].push( this.curr_word_in_split_txt_i );


                        // debug
                        ///// console.log("\t\t\t|"+this.curr_commitment_text_split[ this.curr_word_in_split_txt_i ]+"| was _FOUND_ in the search index table (this.text_search_index_for_given_column). ADDING to the count of found instances, at key ["+this.curr_commitment_text_split[ this.curr_word_in_split_txt_i ]+"], with the found instance being: |"+this.text_search_index_for_given_column[ this.curr_commitment_text_split[ this.curr_word_in_split_txt_i ] ].word_found_vs_commitments_index[ this.curr_commitment_i ]+"|" );


                    } // and if it's not there
                      //	build a new word entry,
                      //	adding the current instance
                    else{

                        // debug
                        ///// console.log("\t\t\t|"+this.curr_commitment_text_split[ this.curr_word_in_split_txt_i ]+"| was NOT FOUND in the search index table (this.text_search_index_for_given_column). ADDING A WHOLE NEW ENTRY for this and adding this finding to the index of found instances at key ["+this.curr_commitment_text_split[ this.curr_word_in_split_txt_i ]+"]" );

                        // add a new word entry
                        //	- with an empty commitment finding index
                        //// this.text_search_index_for_given_column[ this.curr_commitment_text_split[ this.curr_word_in_split_txt_i ] ] = { found_word : this.curr_commitment_text_split[ this.curr_word_in_split_txt_i ] , word_found_vs_commitments_index : this.model_empty_array_w_the_length_of_searched_commitments.slice()  };


                        this.text_search_index_for_given_column[ this.curr_commitment_text_split[ this.curr_word_in_split_txt_i ] ] = { found_word : this.curr_commitment_text_split[ this.curr_word_in_split_txt_i ] , word_found_vs_commitments_index : [] };

                        // add that empty array the length of all the commitments of this display area, 
                        //	in this word entry
                        for( this.curr_commitment_index = 0; this.curr_commitment_index < this.relevant_commitments.length; this.curr_commitment_index++ ){

                            this.text_search_index_for_given_column[ this.curr_commitment_text_split[ this.curr_word_in_split_txt_i ] ].word_found_vs_commitments_index.push( [] );
                        }


                        // add the current word finding (index) 
                        //	to the relevant commitment cell in the
                        //	current word entry
                        //
                        this.text_search_index_for_given_column[ this.curr_commitment_text_split[ this.curr_word_in_split_txt_i ] ].word_found_vs_commitments_index[ this.curr_commitment_i ].push( this.curr_word_in_split_txt_i );

                        // debug
                        ///// console.log("\t\t\t\t -- the found instanes being : "+this.text_search_index_for_given_column[ this.curr_commitment_text_split[ this.curr_word_in_split_txt_i ] ].word_found_vs_commitments_index[ this.curr_commitment_i ] );

                    }



                } // end spit text word loop

            } // end going-through-commitment texts loop



            ////////  set the final values
            ////////   initialise the search index variables in the given display object

            //// copy the text index results to the givendisplay area txt search variable
            relev_commitments_display_obj.text_search_index = this.text_search_index_for_given_column;

        }







        ///////
        ///////
        //		text search commitment filtering
        ///////
        ///////

        ///   enter a string 
        ///		and search the relevant text search indicies
        ///		for this, and return the relevant
        ///		commitments


        this.text_search_relevant_display_objects_relevant_textsearch_index_and_relevant_commitents = function( root_this_, text_string_to_search, relev_commitments_display_obj, relevant_text_search_index, filtering_on_preexisting_filterings__or__filtering_from_scratch_, add_filtered_commitments_to_foundOrNotFound_commitments_array_trueFalse ){

            console.log(">>>>  text_search_relevant_display_objects_relevant_textsearch_index_and_relevant_commitents - text filtering commitments of display object |"+relev_commitments_display_obj.country_name+"| and its commitments, for the text string |"+text_string_to_search+"| and are we filtering from scratch? |"+filtering_on_preexisting_filterings__or__filtering_from_scratch_+"| and are weadding the filtered commitments to the found commitments? |"+add_filtered_commitments_to_foundOrNotFound_commitments_array_trueFalse+"|" );


            ////////  set up data


            /// which data to filter?
            this.commitments_to_filter = [];


            // add the index of the found commitment(s) here
            this.list_of_found_matching_commitments__indcies_list = [];
            // and one for the non-matching commitments
            this.list_of_found_NONmatching_commitments__indcies_list = [];


            /////  clear the curr display area object's matching/non-matching arrays?

            if( filtering_on_preexisting_filterings__or__filtering_from_scratch_ === "filter_from_scratch__ie_the_original_formatted_commitments" ){

                this.commitments_to_filter = relev_commitments_display_obj.all_commitments__unfiltered.slice() ;

                // clear the current display object's matchign and non-matching commitments
                relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments = [];
                relev_commitments_display_objcurr_filter_n_sort__NOT_MATCHING_commitments = [];

            }else if( filtering_on_preexisting_filterings__or__filtering_from_scratch_ === "filter_already_filtered_commitments" ){

                // use the existing filtered data
                this.commitments_to_filter = relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.slice();

                // empty the found commitments 
                relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments = [];
                // and the non-matching commitments we'll only add to...
            }



            ////////  process the input string

            //// remove the whitespace characters between
            //		search terms, if they're present
            text_string_to_search = text_string_to_search.replace(/\s{2,}/g, ' ');

            ///// check that the input string isn't just
            //		white-space characters!						

            /// if it is just whitespace characters
            //		then skip this phase
            //		- just copy all the relevant 
            //		commitments into the matching commitments box

            if( text_string_to_search === " " || text_string_to_search === "" ){

                console.log("aha - looks like the supplied text search string |"+text_string_to_search+"| is only white space characters. skipping the text search! ");

                // just copy all the relevant commitments into the 
                // matching commitments box 
                for( this.curr_relev_commitment_i = 0; this.curr_relev_commitment_i < this.commitments_to_filter.length; this.curr_relev_commitment_i++ ){

                    relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.push( this.commitments_to_filter[  this.curr_relev_commitment_i ] );
                }

            }
            // and if the entered search string isn't but a space
            // - do the whole text search
            else{


                /////  split the text string words

                /// make the input strings lower case,
                //	remove funny characters, and split by spaces
                //
                /// that is, treat it in the same way as
                //		for the string processing for building the 
                //		text search index

                this.search_string__processed__split = text_string_to_search.split(" ");

                ///////  console.log(" \t - he cleaned and split search string looks like this : ["+this.search_string__processed__split+"] of length "+this.search_string__processed__split.length );



                /////  loop and check which commitments have the
                //			relevant text

                /// loop : start the loop that goes through the 
                //		relevant commitments
                for( this.curr_commitment_i = 0; this.curr_commitment_i < this.commitments_to_filter.length ; this.curr_commitment_i++ ){

                    ///////  console.log("\t\t - working on commitment #"+this.curr_commitment_i+" with the title  |"+this.commitments_to_filter[this.curr_commitment_i][1].slice( 0, 100 )+"|" );


                    //// set up a variable holding the 'matching score'
                    //	of a particular commitment.
                    // that is, it's a count of the number of 
                    //	individual matching words in the commitment text
                    //	compared to the text search string.
                    // so, if the number of individual found words 
                    //	in the commitment text matches the number of 
                    //	individual words in the text string, 
                    //	the commitment is put into the found commitmnets
                    //	category
                    this.this_commitment_count_of_found_individual_words = 0;

                    //// loop : go through the individual words in the
                    //	text search string and check whether they are
                    //	in the given commitment's text
                    for( this.curr_word_in_search_string = 0; this.curr_word_in_search_string < this.search_string__processed__split.length; this.curr_word_in_search_string++ ){

                        ///////  console.log("\t\t\t - checking whether the search string word |"+this.search_string__processed__split[this.curr_word_in_search_string]+"| is in the curr commitment text for this commitment.");

                        ///  console.log("\t\t\t\t - |"+relevant_text_search_index[ this.search_string__processed__split[ this.curr_word_in_search_string] ].word_found_vs_commitments_index[ this.curr_commitment_i ]+"|" );

                        // if statement
                        // check if the current word is in the 
                        // commitment text 
                        if( relevant_text_search_index[ this.search_string__processed__split[ this.curr_word_in_search_string] ] !== undefined &&  relevant_text_search_index[ this.search_string__processed__split[ this.curr_word_in_search_string] ].word_found_vs_commitments_index[ this.curr_commitment_i ].length > 0 ){

                            // if the current word is in the 
                            //	current commitment text, 
                            //	add one to the num of found words score
                            this.this_commitment_count_of_found_individual_words++;

                        }
                        else{

                            // else
                            //	if the current word isn't found in this
                            //	commitment text, then, well, continue

                        }


                    } /// end individual word in search string loop


                    /////  check if the found score count matches
                    // 		with the number of words in the search
                    //		string.
                    //		- if it doesn, then this commitment's 
                    //		text matches the search string requirements
                    //		and this commitment can go into the found
                    //		commitments category

                    if( this.this_commitment_count_of_found_individual_words === this.search_string__processed__split.length ){

                        /// debug
                        ///////  console.log( "\t\t\t\t ---> YAY YAY TAT, commitment #"+this.curr_commitment_i+" has all the words searched for in the search string |"+this.search_string__processed__split+"| - we're adding it to the list of matching commitments <---- " );


                        //// add the current commitment to the list of found/marching
                        //   commitments ... if needed
                        if( add_filtered_commitments_to_foundOrNotFound_commitments_array_trueFalse === true ){

                            relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.push( this.commitments_to_filter[ this.curr_commitment_i ] );
                        }

                        // just for the record, remember which the found commitments were
                        this.list_of_found_matching_commitments__indcies_list.push( this.curr_commitment_i );

                    }
                    else{

                        //// add the current commitment to the list of unmatching // ... if needed
                        if( add_filtered_commitments_to_foundOrNotFound_commitments_array_trueFalse === true ){

                            relev_commitments_display_obj.curr_filter_n_sort__NOT_MATCHING_commitments.push( this.commitments_to_filter[ this.curr_commitment_i ] );
                        }

                        // just to keep count of the non-matching commitments
                        this.list_of_found_NONmatching_commitments__indcies_list.push( this.curr_commitment_i );
                    }


                    /// (as described above )
                    //  if the count of found words matches the 
                    //	number of words in the search string, 
                    //	then this commitment counts as a found one

                } ///// end of lop going through all the commitments 


                console.log(" //////  text search end : found the following ("+this.list_of_found_matching_commitments__indcies_list.length+") matching commitments for the search string |"+this.search_string__processed__split+"| -->>> "+this.list_of_found_matching_commitments__indcies_list );
            }

        }






        /////   build search index for all display area objects
        /////
        /////		- good thing to do when setting up the display area obejcts
        /////		such as when starting, or switching between commitment/coutnry centric viewing 

        this.text_search__build_text_search_index_for_all_commitment_areas = function( root_this_ ){

            ///  hellow world
            console.log(">>>> text_search__build_text_search_index_for_all_commitment_areas() - for all of "+root_this_.commitment_display__n_filterning_n_sorting_areas.length+" display area objects ");

            // loop ad build

            for( this.curr_display_area_i = 0; this.curr_display_area_i< root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.curr_display_area_i++ ){

                //// build search index for each display area 
                root_this_.build_search_index_for_particular_data_array_column_for_given_display_object__NEW( root_this_, root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ] );

            }

        }




        /////
        /////
        /////  ///  ///  ///  test function  ///  ///  ///  ///  ///
        //
        this.test_text_search = function( root_this_, text_string_to_search ){

            console.log(">>>> testing doing a text search of the string |"+text_string_to_search+"| for col #"+root_this_.raw_data__col_num_of__the_commitment_title_col );


            //// build the relevant index
            root_this_.build_search_index_for_particular_data_array_column_for_given_display_object( root_this_, root_this_.commitment_display__n_filterning_n_sorting_areas[0], root_this_.commitment_display__n_filterning_n_sorting_areas[0].all_commitments__unfiltered, root_this_.raw_data__col_num_of__the_commitment_title_col );


            /// do the text search
            root_this_.text_search_relevant_display_objects_relevant_textsearch_index_and_relevant_commitents( root_this_, text_string_to_search, root_this_.commitment_display__n_filterning_n_sorting_areas[0], root_this_.commitment_display__n_filterning_n_sorting_areas[0].all_commitments__unfiltered, root_this_.commitment_display__n_filterning_n_sorting_areas[0].text_search_index__commitment_titles, false );


        }





        //////////////////////////////////  col header filtering area
        //////////////////////////////////


        ////////////////////////  
        ////////////////////////		filter the data according to the header settings 
        ////////////////////////
        ////////////////////////  


        /*
         how to ?
         - for each data row:
         - for each column description object
         - for each value in the column description object
         - check if the value is desired ( i.e. checked )
         - if a checked value corresponds to a data value, then the column check is ok and the rest of the columns value tests can be skipped. Flag this column's "is_the_curr_data_row_in_accordance_with_the_curr_col_filtering_settings" as true.
         - if a there's no match in the data for a checked value, then the whole row is invalid
         - check if all the column's "is_the_curr_data_row_in_accordance_with_the_curr_col_filtering_settings" variables are true.
         - if yes, then : set the data row visibility flag to true
         - if not, then : set the data row visibility flag to false ... or whatever the setting is, depending on whether we're showing all or only some.



         random ideas:
         - set the data row flag as relevant, regarding it being relevant or not. 
         - stop the data row checking if there's any columns that don't match with the data 
         */

        /////////// new verions - allows skipping/ not including
        ////						Not Reviewed (NR) commitments

        this.filter_data_according_to_column_filter_settings___NEW = function( root_this_, formatted_commitment_data_to_filter ){


            // hello
            //////  console.log(">>>> filter_data_according_to_column_filter_settings() ");


            // output 
            root_this_.filtered_data = [];

            //// Find out how many columns there are to check.
            //		this number helps in checking that all a row's cols have been filtered.
            //
            //       all the needed columns of the data are compatible with the filtering
            //       i.e. it keeps track of all the columns for which the current data row has 'passed' through the filtering.
            //			if, at the end of the column checking, the number is lower than the number of cols/filters the row 
            //			is supposed to pass through, then the row hasn't passed through the filter



            // TEMPORARY! - for debugging which rows are found and not found in the filter!
            //  lists which rows were found/not-found
            root_this_.list_of_found_or_not_found_rows__as_index_nums = [];
            //  and a list for not-found entries
            root_this_.list_of_found_NOTfound_rows__as_indicies_w_data_rows = [];



            ///////  console.log(" // first part of : filter_data_according_to_column_filter_settings : checking how many valid columns there are to filter ");
            //// first, find the number of rows that are supposed to pass through the filter
            root_this_.num_of_relevant_filtering_columns = 0;

            // loop and count the number of valid filtering columns
            root_this_.column_information_objects_listed_in_the_order_of_the_columns.map( function(curr_row_d, i){

                root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering.map( function( curr_valid_column_type ){

                    // does the column type and the valid column types match?
                    if( curr_row_d.column_type === curr_valid_column_type ){

                        root_this_.num_of_relevant_filtering_columns++ ;
                        // feedback
                        ///////  console.log("\t\t-- yay!  col #"+i+" & |"+curr_row_d.column_type+"| === |"+curr_valid_column_type+"| - the # of relevant filtering colums is "+root_this_.num_of_relevant_filtering_columns );


                        //   ¿¿  and check whether any of the value choices ( for filtering ) are checked in this header
                        //  ( if they're not checked, then one can't score a match on this column )  ??
                        //////////  - well, if something has all crosses, then 
                        /////////		nothing will show up in that column anyway…


                    }
                });
            });

            // //  final feedback
            console.log(" /// the final number of relevant filtering columns is "+root_this_.num_of_relevant_filtering_columns );



            /////   loop through each data row and check if it goes through the filters
            //
            formatted_commitment_data_to_filter.map( function( current_commitment_data_row_, current_commitment_data_row__i ){

                //// 
                // console.log(">> working on commitment data row #"+current_commitment_data_row__i+" data : " );
                // console.log( current_commitment_data_row_ );

                /// set up a variable that indicates whether any column has not matched
                this.filter_matching_columns_count = 0;
                this.valid_columns_to_check__count = 0;
                this.num_of_cols_with_a_filter_n_data_val_match = 0;
                // this.curr_array__list_of_columns_with_matches = new Array( root_this_.column_information_objects_listed_in_the_order_of_the_columns.length );
                this.curr_array__list_of_columns_with_matches = [];

                //////  for each column description object
                // root_this_.column_information_objects_listed_in_the_order_of_the_columns.map( function( curr_column_description_obj_, curr_column_description_obj__i ){
                for( this.col_descr_obj_i = 0; this.col_descr_obj_i < root_this_.column_information_objects_listed_in_the_order_of_the_columns.length; this.col_descr_obj_i++ ){


                    //// 
                    ///  console.log( ", curr_column_description_obj__i #"+curr_column_description_obj__i+" // ");
                    ///  console.log( curr_column_description_obj_ );							
                    // console.log( "//// - working on  col_descr_obj_i #"+this.col_descr_obj_i+" : ");
                    // console.log( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ] );


                    // variabel to check whether there's at least one valid match per column!
                    this.is_there_a_valid_filter_data_match_in_this_col = false;


                    //// check whether this is a valid column to filter
                    //			&& filter if it's appropriate! 
                    //							
                    //////root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering.map( function( curr_valid_column_filter_type ){
                    for( this.curr_valid_column_filter_type__i = 0; this.curr_valid_column_filter_type__i < root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering.length; this.curr_valid_column_filter_type__i++ ){

                        // 
                        // console.log("\t\t -- checking if the curr column ("+this.col_descr_obj_i+") has a valid filter type ( it currently has ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].column_type+") ) /  comparing it with valid filter-column-type #"+this.curr_valid_column_filter_type__i+"  ("+root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering[ this.curr_valid_column_filter_type__i ]+")" );


                        // check if the current column is a relevant to filter
                        if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].column_type === root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering[ this.curr_valid_column_filter_type__i ] ){

                            // feedback
                            // console.log(" \t\t -- the current column's type -"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].column_type+"- is one of the VALID column headers to check (in this case ("+root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering[ this.curr_valid_column_filter_type__i ]+") ");

                            // keeping track of how many valid columns are out there...
                            this.valid_columns_to_check__count++;

                            // set the default value (false)
                            /// in the array of found results
                            //  - if there's a valid column in there, it'll be set
                            ////////  this.curr_array__list_of_columns_with_matches[ this.col_descr_obj_i ] = true;


                            //// go through the filter values and compare those to the data
                            //		ONLY CHECK THE VALUES THAT HAVE BEEN MARKED AS POSITIVE ! 
                            for( this.column_filter_value__i = 0; this.column_filter_value__i < root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].header__value_choice_categories__listed_in_order_of_appearance.length ; this.column_filter_value__i++ ){

                                // feedback 
                                // console.log("\t\t\t --- checking if any value is checked (and should be filtered/checked ) - working on col #"+this.col_descr_obj_i+" and value #"+this.column_filter_value__i+" which corresponds to :" );
                                // console.log( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.column_filter_value__i ] );


                                /// check if the value is positive ( i.e. checked in the interface )
                                //  		and only check those
                                if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.column_filter_value__i ].current_selection__selectedTrueFalse === true ){

                                    // console.log("\t\t\t\t ---- checking: if we need to check if the filtering-value #"+column_filter_value__i+" / ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.column_filter_value__i ].header_category_text+") in the data ? check it? - the data says : "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.column_filter_value__i ].current_selection__selectedTrueFalse );

                                    // console.log("\t\t\t\t ---- checking2: if the value ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.column_filter_value__i ].numberOrText_in_data_corresponding_to_this_value+") is present in the data? data val: ("+current_commitment_data_row_[ this.col_descr_obj_i ]+") -- ( from :  col #"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].which_column_num_to_fetch_data_for_for_this_column+" in the data / but is col#"+this.col_descr_obj_i+" in the reformatted data )" );

                                    // console.log(" \t\t\t\t ---- test print curr data row obj : ( which has a length of ("+current_commitment_data_row_.length+")");
                                    // console.log( current_commitment_data_row_ );

                                    /// FINALLY... this is where the SELECTED VALUE vs DATA STARTS! 
                                    //
                                    ///////// if(){}///
                                    // check the value that's looked for in the checked header value COMPARE it with the data value in the relevant data row's relevant column! 
                                    // NOTE THAT EVEN NUMERIC VALUES ARE WRITTEN AS STRINGS IN THE DATA ( except the values we added manually, of course :)
                                    if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.column_filter_value__i ].numberOrText_in_data_corresponding_to_this_value ===  current_commitment_data_row_[ this.col_descr_obj_i ] ){

                                        // FEEDBACK
                                        // console.log("\t\t\t\t\t ------  great! VALUE && DATA MATCH! - checking if the following data ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.column_filter_value__i ].numberOrText_in_data_corresponding_to_this_value+") is found in original spreadsheet/data column num ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].which_column_num_to_fetch_data_for_for_this_column+") or in the col #"+this.col_descr_obj_i +" of the reformatted data.... in the current data row .. so that would be this value in the current row : ("+current_commitment_data_row_[ this.col_descr_obj_i ]+") " );

                                        //// this variable checks to see whether there's at least one valid match in this column
                                        //		- useful for later, when the number of matched columns is checked
                                        this.is_there_a_valid_filter_data_match_in_this_col = true;

                                        /// and mark it in the array of found results
                                        this.curr_array__list_of_columns_with_matches[ this.col_descr_obj_i ] = true;


                                    }else{
                                        ///  else...?
                                        //console.log("\t\t\t\t\t ------  argh... NO MATCH BTW col header value ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.column_filter_value__i ].numberOrText_in_data_corresponding_to_this_value+") && curr row data ("+current_commitment_data_row_[ this.col_descr_obj_i ]+")" );

                                    }

                                } ///  end values loop

                            } /// end column filter type check loop

                        } /// end if - checking whether the current column type is valid
                        else{

                            // feedback
                            // console.log("\t\t ---- the current column's type -"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].column_type+"- is NOT NOT NOT one of the valid column headers to check (in this case -"+root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering[ this.curr_valid_column_filter_type__i ]+"- ");

                        } //  

                    } ////  end loop going through different column filter types & comparing it to the current column 


                    // TO DO TO DO TO DO TO DO TO DO 
                    //// if this.is_there_a_valid_filter_data_match_in_this_col === true; then add one to this.filter_matching_columns_count

                    //// add a matching columns score to the count of matching columns
                    if( this.is_there_a_valid_filter_data_match_in_this_col === true ){
                        this.num_of_cols_with_a_filter_n_data_val_match++;
                    }


                    // test increase
                    this.filter_matching_columns_count++;


                }  /////  end loop going through all the column description objects 


                //// test feedback for the matching columns count
                // console.log(" -------------  finished checking this data row and found "+this.filter_matching_columns_count+" no of matching columns and of these "+this.valid_columns_to_check__count+" are ones we should use for filtering ");

                ///  ROW MATCH?
                ///  Are there enough matching columns for this row to be valid?
                //		- check the number of found filter-valid columns with the 
                //		number of valid columns
                if( this.num_of_cols_with_a_filter_n_data_val_match >= this.valid_columns_to_check__count ){

                    ///////  console.log(" \t\t\t\t\t  }{}{}{}{}{  OK! this data ROW MATCHES  - #"+current_commitment_data_row__i+" - the search criteria! it has "+this.num_of_cols_with_a_filter_n_data_val_match+" filter-matching columns, of "+this.valid_columns_to_check__count+" needed" );

                    // DEBUGGING - list the matching/nonmatching rows 
                    // console.log( "\t\t\t\t\t\t the list of matching/non-matching columns for row #"+current_commitment_data_row__i );
                    // console.log( this.curr_array__list_of_columns_with_matches );

                    // add the current row to the filtered data 
                    root_this_.filtered_data.push( current_commitment_data_row_ );

                    // and for DEBUGIGNG - track which entry was true/false 
                    root_this_.list_of_found_or_not_found_rows__as_index_nums[ current_commitment_data_row__i ] = true;

                }else{
                    // argh... no... not enough matching columns
                    ///////  console.log(" \t\t\t\t\t  }:(:(:(:(:(  ARGH NOOO... this data ROW DOESN'T MATCH - #"+current_commitment_data_row__i+" -doesn't have enough column matches for the row to be valid. it has "+this.num_of_cols_with_a_filter_n_data_val_match+" filter-matching columns, of "+this.valid_columns_to_check__count+" needed" );

                    // DEBUGGING - list the matching/nonmatching rows 
                    ///////  console.log( "\t\t\t\t\t\t the list of matching/non-matching columns for row #"+current_commitment_data_row__i );
                    ///////  console.log( this.curr_array__list_of_columns_with_matches );


                    // and for DEBUGIGNG - track which entry was true/false 
                    root_this_.list_of_found_or_not_found_rows__as_index_nums[ current_commitment_data_row__i ] = false;
                    // add the non-found row here
                    root_this_.list_of_found_NOTfound_rows__as_indicies_w_data_rows.push( [current_commitment_data_row__i, current_commitment_data_row_, curr_array__list_of_columns_with_matches] );

                }


            });   /// END GOING THROUGH ALL THE COMMITMENT DATA ROWS


            /// return the filtered commitments
            return root_this_.filtered_data;

        }




        //////////   old version

        this.filter_data_according_to_column_filter_settings = function( root_this_, formatted_commitment_data_to_filter ){

            // hello
            //////  console.log(">>>> filter_data_according_to_column_filter_settings() ");


            // output 
            root_this_.filtered_data = [];

            //// Find out how many columns there are to check.
            //		this number helps in checking that all a row's cols have been filtered.
            //
            //       all the needed columns of the data are compatible with the filtering
            //       i.e. it keeps track of all the columns for which the current data row has 'passed' through the filtering.
            //			if, at the end of the column checking, the number is lower than the number of cols/filters the row 
            //			is supposed to pass through, then the row hasn't passed through the filter



            // TEMPORARY! - for debugging which rows are found and not found in the filter!
            //  lists which rows were found/not-found
            root_this_.list_of_found_or_not_found_rows__as_index_nums = [];
            //  and a list for not-found entries
            root_this_.list_of_found_NOTfound_rows__as_indicies_w_data_rows = [];



            ///////  console.log(" // first part of : filter_data_according_to_column_filter_settings : checking how many valid columns there are to filter ");
            //// first, find the number of rows that are supposed to pass through the filter
            root_this_.num_of_relevant_filtering_columns = 0;

            // loop and count the number of valid filtering columns
            root_this_.column_information_objects_listed_in_the_order_of_the_columns.map( function(curr_row_d, i){

                root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering.map( function( curr_valid_column_type ){

                    // does the column type and the valid column types match?
                    if( curr_row_d.column_type === curr_valid_column_type ){

                        root_this_.num_of_relevant_filtering_columns++ ;
                        // feedback
                        ///////  console.log("\t\t-- yay!  col #"+i+" & |"+curr_row_d.column_type+"| === |"+curr_valid_column_type+"| - the # of relevant filtering colums is "+root_this_.num_of_relevant_filtering_columns );


                        //   ¿¿  and check whether any of the value choices ( for filtering ) are checked in this header
                        //  ( if they're not checked, then one can't score a match on this column )  ??
                        //////////  - well, if something has all crosses, then 
                        /////////		nothing will show up in that column anyway…


                    }
                });
            });

            // //  final feedback
            console.log(" /// the final number of relevant filtering columns is "+root_this_.num_of_relevant_filtering_columns );



            /////   loop through each data row and check if it goes through the filters
            //
            formatted_commitment_data_to_filter.map( function( current_commitment_data_row_, current_commitment_data_row__i ){

                //// 
                // console.log(">> working on commitment data row #"+current_commitment_data_row__i+" data : " );
                // console.log( current_commitment_data_row_ );

                /// set up a variable that indicates whether any column has not matched
                this.filter_matching_columns_count = 0;
                this.valid_columns_to_check__count = 0;
                this.num_of_cols_with_a_filter_n_data_val_match = 0;
                // this.curr_array__list_of_columns_with_matches = new Array( root_this_.column_information_objects_listed_in_the_order_of_the_columns.length );
                this.curr_array__list_of_columns_with_matches = [];

                //////  for each column description object
                // root_this_.column_information_objects_listed_in_the_order_of_the_columns.map( function( curr_column_description_obj_, curr_column_description_obj__i ){
                for( this.col_descr_obj_i = 0; this.col_descr_obj_i < root_this_.column_information_objects_listed_in_the_order_of_the_columns.length; this.col_descr_obj_i++ ){


                    //// 
                    ///  console.log( ", curr_column_description_obj__i #"+curr_column_description_obj__i+" // ");
                    ///  console.log( curr_column_description_obj_ );							
                    // console.log( "//// - working on  col_descr_obj_i #"+this.col_descr_obj_i+" : ");
                    // console.log( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ] );


                    // variabel to check whether there's at least one valid match per column!
                    this.is_there_a_valid_filter_data_match_in_this_col = false;


                    //// check whether this is a valid column to filter
                    //			&& filter if it's appropriate! 
                    //							
                    //////root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering.map( function( curr_valid_column_filter_type ){
                    for( this.curr_valid_column_filter_type__i = 0; this.curr_valid_column_filter_type__i < root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering.length; this.curr_valid_column_filter_type__i++ ){

                        // 
                        // console.log("\t\t -- checking if the curr column ("+this.col_descr_obj_i+") has a valid filter type ( it currently has ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].column_type+") ) /  comparing it with valid filter-column-type #"+this.curr_valid_column_filter_type__i+"  ("+root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering[ this.curr_valid_column_filter_type__i ]+")" );


                        // check if the current column is a relevant to filter
                        if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].column_type === root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering[ this.curr_valid_column_filter_type__i ] ){

                            // feedback
                            // console.log(" \t\t -- the current column's type -"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].column_type+"- is one of the VALID column headers to check (in this case ("+root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering[ this.curr_valid_column_filter_type__i ]+") ");

                            // keeping track of how many valid columns are out there...
                            this.valid_columns_to_check__count++;

                            // set the default value (false)
                            /// in the array of found results
                            //  - if there's a valid column in there, it'll be set
                            ////////  this.curr_array__list_of_columns_with_matches[ this.col_descr_obj_i ] = true;


                            //// go through the filter values and compare those to the data
                            //		ONLY CHECK THE VALUES THAT HAVE BEEN MARKED AS POSITIVE ! 
                            for( this.column_filter_value__i = 0; this.column_filter_value__i < root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].header__value_choice_categories__listed_in_order_of_appearance.length ; this.column_filter_value__i++ ){

                                // feedback 
                                // console.log("\t\t\t --- checking if any value is checked (and should be filtered/checked ) - working on col #"+this.col_descr_obj_i+" and value #"+this.column_filter_value__i+" which corresponds to :" );
                                // console.log( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.column_filter_value__i ] );


                                /// check if the value is positive ( i.e. checked in the interface )
                                //  		and only check those
                                if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.column_filter_value__i ].current_selection__selectedTrueFalse === true ){

                                    // console.log("\t\t\t\t ---- checking: if we need to check if the filtering-value #"+column_filter_value__i+" / ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.column_filter_value__i ].header_category_text+") in the data ? check it? - the data says : "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.column_filter_value__i ].current_selection__selectedTrueFalse );

                                    // console.log("\t\t\t\t ---- checking2: if the value ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.column_filter_value__i ].numberOrText_in_data_corresponding_to_this_value+") is present in the data? data val: ("+current_commitment_data_row_[ this.col_descr_obj_i ]+") -- ( from :  col #"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].which_column_num_to_fetch_data_for_for_this_column+" in the data / but is col#"+this.col_descr_obj_i+" in the reformatted data )" );

                                    // console.log(" \t\t\t\t ---- test print curr data row obj : ( which has a length of ("+current_commitment_data_row_.length+")");
                                    // console.log( current_commitment_data_row_ );

                                    /// FINALLY... this is where the SELECTED VALUE vs DATA STARTS! 
                                    //
                                    ///////// if(){}///
                                    // check the value that's looked for in the checked header value COMPARE it with the data value in the relevant data row's relevant column! 
                                    // NOTE THAT EVEN NUMERIC VALUES ARE WRITTEN AS STRINGS IN THE DATA ( except the values we added manually, of course :)
                                    if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.column_filter_value__i ].numberOrText_in_data_corresponding_to_this_value ===  current_commitment_data_row_[ this.col_descr_obj_i ] ){

                                        // FEEDBACK
                                        // console.log("\t\t\t\t\t ------  great! VALUE && DATA MATCH! - checking if the following data ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.column_filter_value__i ].numberOrText_in_data_corresponding_to_this_value+") is found in original spreadsheet/data column num ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].which_column_num_to_fetch_data_for_for_this_column+") or in the col #"+this.col_descr_obj_i +" of the reformatted data.... in the current data row .. so that would be this value in the current row : ("+current_commitment_data_row_[ this.col_descr_obj_i ]+") " );

                                        //// this variable checks to see whether there's at least one valid match in this column
                                        //		- useful for later, when the number of matched columns is checked
                                        this.is_there_a_valid_filter_data_match_in_this_col = true;

                                        /// and mark it in the array of found results
                                        this.curr_array__list_of_columns_with_matches[ this.col_descr_obj_i ] = true;


                                    }else{
                                        ///  else...?
                                        //console.log("\t\t\t\t\t ------  argh... NO MATCH BTW col header value ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.column_filter_value__i ].numberOrText_in_data_corresponding_to_this_value+") && curr row data ("+current_commitment_data_row_[ this.col_descr_obj_i ]+")" );

                                    }

                                } ///  end values loop

                            } /// end column filter type check loop

                        } /// end if - checking whether the current column type is valid
                        else{

                            // feedback
                            // console.log("\t\t ---- the current column's type -"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.col_descr_obj_i ].column_type+"- is NOT NOT NOT one of the valid column headers to check (in this case -"+root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering[ this.curr_valid_column_filter_type__i ]+"- ");

                        } //  

                    } ////  end loop going through different column filter types & comparing it to the current column 


                    // TO DO TO DO TO DO TO DO TO DO 
                    //// if this.is_there_a_valid_filter_data_match_in_this_col === true; then add one to this.filter_matching_columns_count

                    //// add a matching columns score to the count of matching columns
                    if( this.is_there_a_valid_filter_data_match_in_this_col === true ){
                        this.num_of_cols_with_a_filter_n_data_val_match++;
                    }


                    // test increase
                    this.filter_matching_columns_count++;


                }  /////  end loop going through all the column description objects 


                //// test feedback for the matching columns count
                // console.log(" -------------  finished checking this data row and found "+this.filter_matching_columns_count+" no of matching columns and of these "+this.valid_columns_to_check__count+" are ones we should use for filtering ");

                ///  ROW MATCH?
                ///  Are there enough matching columns for this row to be valid?
                //		- check the number of found filter-valid columns with the 
                //		number of valid columns
                if( this.num_of_cols_with_a_filter_n_data_val_match >= this.valid_columns_to_check__count ){

                    ///////  console.log(" \t\t\t\t\t  }{}{}{}{}{  OK! this data ROW MATCHES  - #"+current_commitment_data_row__i+" - the search criteria! it has "+this.num_of_cols_with_a_filter_n_data_val_match+" filter-matching columns, of "+this.valid_columns_to_check__count+" needed" );

                    // DEBUGGING - list the matching/nonmatching rows 
                    // console.log( "\t\t\t\t\t\t the list of matching/non-matching columns for row #"+current_commitment_data_row__i );
                    // console.log( this.curr_array__list_of_columns_with_matches );

                    // add the current row to the filtered data 
                    root_this_.filtered_data.push( current_commitment_data_row_ );

                    // and for DEBUGIGNG - track which entry was true/false 
                    root_this_.list_of_found_or_not_found_rows__as_index_nums[ current_commitment_data_row__i ] = true;

                }else{
                    // argh... no... not enough matching columns
                    ///////  console.log(" \t\t\t\t\t  }:(:(:(:(:(  ARGH NOOO... this data ROW DOESN'T MATCH - #"+current_commitment_data_row__i+" -doesn't have enough column matches for the row to be valid. it has "+this.num_of_cols_with_a_filter_n_data_val_match+" filter-matching columns, of "+this.valid_columns_to_check__count+" needed" );

                    // DEBUGGING - list the matching/nonmatching rows 
                    ///////  console.log( "\t\t\t\t\t\t the list of matching/non-matching columns for row #"+current_commitment_data_row__i );
                    ///////  console.log( this.curr_array__list_of_columns_with_matches );


                    // and for DEBUGIGNG - track which entry was true/false 
                    root_this_.list_of_found_or_not_found_rows__as_index_nums[ current_commitment_data_row__i ] = false;
                    // add the non-found row here
                    root_this_.list_of_found_NOTfound_rows__as_indicies_w_data_rows.push( [current_commitment_data_row__i, current_commitment_data_row_, curr_array__list_of_columns_with_matches] );

                }


            });   /// END GOING THROUGH ALL THE COMMITMENT DATA ROWS


            /// return the filtered commitments
            return root_this_.filtered_data;

        }




        /////////  //  //  //  //  //  
        //////////  modified version of the filtering function above
        //				this one also counts values


        this.filter_basic_value_cell_data_according_to_column_filter_settings__NEW__w_value_count = function( filter_already_filtered_commitments_or_start_from_scratch, relev_table_obj__this, relev_commitments_display_obj ){


            // hello
            console.log(">>>> filter_data_according_to_column_filter_settings() - filtering mode : |"+filter_already_filtered_commitments_or_start_from_scratch+"| on display area "+relev_commitments_display_obj.country_name );



            /// initialise the local_in_box of commitments to filter ;)
            //		( they vary depending on whether we're filtering already filtered ones, or filtering from scratch)
            this.commitments_to_filter ;



            ///// 	Set up input and output depending on whether filteirng is from scratch or pre-existing filtering
            /////   I.e. are we filtering the 'raw'/formatted data from scratch or 						
            //			are we filtering already filtered material?

            //  filtering already filtered results?
            //    - then the input is the already filtered material
            if( filter_already_filtered_commitments_or_start_from_scratch === "filter_already_filtered_commitments" ){

                console.log("\t - doing the  filter_already_filtered_commitments");

                // copy the commitments to filter
                this.commitments_to_filter = relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.slice();

                // wipe the original matching commitments, 
                //	as we'll be narrowing them down and putting some in the unmatched array
                relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments = [];

            } //  filtering from scratch
            //    - then the input is the unfilteed but formatted columns, and the out bins should be empty
            else if( filter_already_filtered_commitments_or_start_from_scratch === "filter_from_scratch__ie_the_original_formatted_commitments"){

                console.log("\t - doing the  filter_from_scratch__ie_the_original_formatted_commitments thingies");

                // reset the values count object for the relevant display area
                /////////  relev_commitments_display_obj.set_up_values_counter_for_this_commitment_display_area( relev_commitments_display_obj );

                // copy the commitments to filter
                this.commitments_to_filter = relev_commitments_display_obj.all_commitments__unfiltered.slice();

                // wipe the original matching and unmatching commitments, 
                //	  we're staring from scratch.
                relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments = [];
                relev_commitments_display_obj.curr_filter_n_sort__NOT_MATCHING_commitments = [];
            }

            /// feedback 
            //		- do we have the right amount of input & bins?
            ///// console.log(" \t - post-setup the input commitments are now "+this.commitments_to_filter.length+" in length and the matched/unmatched are "+relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.length+"/"+relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.length+"");


            /////////  ////  beta feedback
            /////////  console.log(" \t - ther are "+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns.length+" number of column description objects in total ");


            //// 		START filteirng
            /// 			loop through the commitments
            for( this.curr_commitment_i = 0; this.curr_commitment_i < this.commitments_to_filter.length; this.curr_commitment_i++ ){

                // feedback
                ///// console.log("\t\t - loop - working on commitment num "+this.curr_commitment_i+" with the title |"+this.commitments_to_filter[this.curr_commitment_i ][ 1 ]+"|" );

                // set up the counter for needed number of matching commitment columns
                this.number_of_needed_matching_columns_for_this_commitment = 0;

                //  and the actual amount of matching columns for this commitment
                this.curr_num_of_matching_commitment_cols = 0;



                ////  loop through each commitment description object
                //			- use these to check the values of each commitment/column
                for( this.curr_column_description_obj_i = 0; this.curr_column_description_obj_i < relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns.length; this.curr_column_description_obj_i++ ){

                    //// feedback
                    ///// console.log("\t\t\t - working on column description obj #|"+this.curr_column_description_obj_i+"| which is "+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ] .column_title__text+" of type |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].column_type+"|" );

                    // add a flag for a matching header value + data
                    //	  - if this is true at the end of the header checks, then add on to the matching number of commitment headers
                    this.found_matching_header_value_and_commitment_data_cell = false;



                    ////  loop through the valid column types for this sort of filtering
                    //		  this algorithm only works on certain values
                    for( this.curr_valid_col_type_i = 0; this.curr_valid_col_type_i < relev_table_obj__this.relevant_column_types_for__basic_column_filtering__not_tags_filtering.length ; this.curr_valid_col_type_i++ ){

                        // feedback
                        ///// console.log(" \t\t\t\t - checking that this is a valid col type - comparing with valid col type #"+this.curr_valid_col_type_i+" - which is |"+relev_table_obj__this.relevant_column_types_for__basic_column_filtering__not_tags_filtering[ this.curr_valid_col_type_i ]+"|" );


                        /// Is this a valid column type?
                        /// 		check … and proceed as relevant
                        if(  relev_table_obj__this.relevant_column_types_for__basic_column_filtering__not_tags_filtering[ this.curr_valid_col_type_i ] === relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].column_type ){

                            // add one to the count of the number of valid columns!
                            this.number_of_needed_matching_columns_for_this_commitment++;

                            // feedback
                            ///// console.log(" \t\t\t\t\t - valid col type of col #"+this.curr_column_description_obj_i+" of type |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].column_type+"| vs needed |"+relev_table_obj__this.relevant_column_types_for__basic_column_filtering__not_tags_filtering[ this.curr_valid_col_type_i ]+"| type / now we need to match |"+this.number_of_needed_matching_columns_for_this_commitment+"| columns");



                            // loop through the column's Values and 
                            //	- count if they're present
                            //	- check if the commitment's value is matches for this column
                            for( this.curr_col_value_i = 0; this.curr_col_value_i < relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance.length ; this.curr_col_value_i++ ){

                                // feeedback
                                ///// console.log(" \t\t\t\t\t\t\t -- checking col value #"+this.curr_col_value_i+" which is |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].header_category_text+"| and value |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].numberOrText_in_data_corresponding_to_this_value+"| do we check for it : |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].current_selection__selectedTrueFalse+"| - the corresponding data val is |"+this.commitments_to_filter[ this.curr_commitment_i ][ this.curr_column_description_obj_i ]+"|" );



                                // count matching values
                                // - if the curr header value matches the data value, ++ :) 
                                if( relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].numberOrText_in_data_corresponding_to_this_value === this.commitments_to_filter[ this.curr_commitment_i ][ this.curr_column_description_obj_i ] ){

                                    // header value + value in data match?!! 
                                    // (awesomes!)
                                    // feedback
                                    /////////// console.log("\t\t\t\t\t\t --- col header value && data match! of col value |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].numberOrText_in_data_corresponding_to_this_value+"| and data val |"+this.commitments_to_filter[ this.curr_commitment_i ][ this.curr_column_description_obj_i ]+"|");


                                    //// add ++ to the count of found values! 
                                    //
                                    relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].found_instances_of_this_value++ ;

                                    ///////    console.log(" ----- debug : found instances of this value : "+relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].found_instances_of_this_value );

                                    // feedback
                                    //////////   console.log(" \t\t\t\t\t\t\t\t ---- just found matching col && data values - the count of this value is now |"+relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].found_instances_of_this_value+"| of value |"+relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].header_category_text+"| of data value |"+relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].numberOrText_in_data_corresponding_to_this_value+"|" );

                                    /// and is it MATCHING TOO? - ie. a value that's searched for too? - then ++ in the matching data+header_val section
                                    /// check if the value is matched in the data
                                    //	( i.e. if this value is searched for, compare it with the value in the data )
                                    if( relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].current_selection__selectedTrueFalse === true ){

                                        ///// console.log(" \t\t\t\t\t\t\t\t ----- found matching value in header val && data && checking for it - setting the 'relevant-column' flat to >> true << ");

                                        // indicate that at least one match has been found in this column,
                                        //	between sought value and data cell value
                                        this.found_matching_header_value_and_commitment_data_cell = true;

                                    }


                                } else{
                                    // NO MATCH

                                    // FEEDBACK - LIST THE VALUES THAT DONT MATCH!… or not…
                                }



                            } // end loop : go thorugh col header values



                        } // not a valid col type
                        else{

                            // feedback
                            ///// console.log(" \t\t\t\t\t\t ----- ARGHH note a valid col type ("+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].column_type+")");
                        }



                        //// Is a match found in this column? 
                        ///			( btw. searched for column value and data cell ?)
                        /////  if there's a match, add ++ to the count of matching columns
                        //
                        if( this.found_matching_header_value_and_commitment_data_cell === true ){

                            // add one matching col
                            this.curr_num_of_matching_commitment_cols++;

                            // feedback
                            ///// console.log(" \t\t\t\t\t\t ----- MATCHING COL - at least one searched for value was found in this column :) - the curr num of matching cols for this commitment is "+this.curr_num_of_matching_commitment_cols);
                        }
                        // not matchign col? 
                        else{
                            // feedback
                            ///// console.log(" \t\t\t\t\t\t ----- NOT MATCHING COL - the curr num of matching cols for this commitment is "+this.curr_num_of_matching_commitment_cols);
                        }


                    } // end valid col type checking loop


                } // end col description obj loop



                //// CHECK if there are enough matching column matches for this commitment
                //		to be MATCHING or NON-MATCHING

                // IF ENOUGH MATCHING COMMITMENTS - party!
                //	
                if( this.curr_num_of_matching_commitment_cols === this.number_of_needed_matching_columns_for_this_commitment ){
                    //////// if( this.curr_num_of_matching_commitment_cols > 0 ){

                    // add the current commitment to the list of matching commitments
                    relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.push( this.commitments_to_filter[ this.curr_commitment_i ] );

                    // feedback…?
                    ///// console.log(" \t\t\t\t\t\t /////// the current commitment (#"+this.curr_commitment_i+") |"+this.commitments_to_filter[ this.curr_commitment_i ][1]+" passed through the filters! - the amount of matching commitments is now "+relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.length );
                }
                // if not matching
                else{
                    // add the current commitment to the current list of NON-matching commitment
                    relev_commitments_display_obj.curr_filter_n_sort__NOT_MATCHING_commitments.push( this.commitments_to_filter[ this.curr_commitment_i ] );

                    // feedback…?
                    ///// console.log(" \t\t\t\t\t\t |||||||| COMMITMENT DOESNT MATCH the current commitment (#"+this.curr_commitment_i+") |"+this.commitments_to_filter[ this.curr_commitment_i ][1]+" DIDNT PASS through the filters! - "+this.curr_num_of_matching_commitment_cols+" matching cols of "+this.number_of_needed_matching_columns_for_this_commitment+" needed. the amount of UN UN UN UNMATCHING commitments is now "+relev_commitments_display_obj.curr_filter_n_sort__NOT_MATCHING_commitments.length );

                }


            } // end curr commitment loop



            ///////  DEBUG
            ///////  DEBUG
            ///////  DEBUG
            ///////////////// checking where that values counter object might be…
            // console.log("\t\t - - - the values counter object for this object looks like this ---> " );
            // console.log( relev_commitments_display_obj.values_counter_obj_for_this_display_obj );



        } // end function/method! //  fin // slut // etc...





        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  

        //////////  fetch list of columns to check
        ///				( i.e. the ones with a tick mark )

        this.fetch_list_of_col_info_objects_with_selected_values = function( root_this_ ){

            console.log(">>>> fetch_list_of_col_info_objects_with_selected_values() ");




            // this is where we put the value
            // that results from the graph area filtering
            root_this_.list_of_col_info_objs_with_selected_Values = [];


            ////  loop through each commitment description object
            //			- use these to check the values of each commitment/column
            for( this.curr_column_description_obj_i = 0; this.curr_column_description_obj_i < root_this_.column_information_objects_listed_in_the_order_of_the_columns.length; this.curr_column_description_obj_i++ ){


                // add a flag for a matching header value + data
                //	  - if this is true at the end of the header checks, then add on to the matching number of commitment headers
                this.found_selected_value_in_curr_col_info_obj = false;


                ////  loop through the valid column types for this sort of filtering
                //		  this algorithm only works on certain values
                for( this.curr_valid_col_type_i = 0; this.curr_valid_col_type_i < root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering.length ; this.curr_valid_col_type_i++ ){


                    /// Is this a valid column type?
                    /// 		check … and proceed as relevant
                    if(  root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering[ this.curr_valid_col_type_i ] === root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].column_type ){


                        // loop through the column's Values and 
                        //	- count if they're present
                        //	- check if the commitment's value is matches for this column
                        for( this.curr_col_value_i = 0; this.curr_col_value_i < root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance.length ; this.curr_col_value_i++ ){


                            // count matching values
                            // - if the curr header value matches the data value, ++ :) 
                            if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].current_selection__selectedTrueFalse === true ){


                                console.log("\t\t\t- cool - col object #"+this.curr_column_description_obj_i+" / value #"+this.curr_col_value_i+" is SELECTED!");


                                this.found_selected_value_in_curr_col_info_obj = true;



                            } // end if

                        } // end values for loop 

                    } // end if relevant column type

                } // end col type loop


                if( this.found_selected_value_in_curr_col_info_obj === true ){

                    root_this_.list_of_col_info_objs_with_selected_Values.push( this.curr_column_description_obj_i );

                    console.log(">>> AHA - looks like column #"+this.curr_column_description_obj_i+" has at least one selected value in the col description object" );

                }

            } // end col description object i loop

            console.log(" the list of found relevant/selected columns looks like this :");
            console.log( root_this_.list_of_col_info_objs_with_selected_Values );

        }




















        /////////  //  //  //  //  //   graph object related
        //////////  filter basic value things in the following columns


        this.filter_basic_value_cell_data_according_to_column_filter_settings__NEW__IN_A_GIVEN_LIST_OF_COLUMNS = function( list_of_column_indicies_to_filter, matching_all_columns__or__matching_only_some_columns, matching_only_some_columns__all_or_any, filter_already_filtered_commitments_or_start_from_scratch, relev_table_obj__this, relev_commitments_display_obj ){


            // hello
            ///////////  console.log(">>>> filter_data_according_to_column_filter_settings() - filtering mode : |"+filter_already_filtered_commitments_or_start_from_scratch+"| on display area "+relev_commitments_display_obj.country_name+" | of the following columns "+list_of_column_indicies_to_filter );



            /// initialise the local_in_box of commitments to filter ;)
            //		( they vary depending on whether we're filtering already filtered ones, or filtering from scratch)
            this.commitments_to_filter ;



            ///// 	Set up input and output depending on whether filteirng is from scratch or pre-existing filtering
            /////   I.e. are we filtering the 'raw'/formatted data from scratch or 						
            //			are we filtering already filtered material?

            //  filtering already filtered results?
            //    - then the input is the already filtered material
            if( filter_already_filtered_commitments_or_start_from_scratch === "filter_already_filtered_commitments" ){

                //////// console.log("\t - doing the  filter_already_filtered_commitments");

                // copy the commitments to filter
                this.commitments_to_filter = relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.slice();

                // wipe the original matching commitments, 
                //	as we'll be narrowing them down and putting some in the unmatched array
                relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments = [];

            } //  filtering from scratch
            //    - then the input is the unfilteed but formatted columns, and the out bins should be empty
            else if( filter_already_filtered_commitments_or_start_from_scratch === "filter_from_scratch__ie_the_original_formatted_commitments"){

                ///////// console.log("\t - doing the  filter_from_scratch__ie_the_original_formatted_commitments thingies");

                // reset the values count object for the relevant display area
                /////////  relev_commitments_display_obj.set_up_values_counter_for_this_commitment_display_area( relev_commitments_display_obj );

                // copy the commitments to filter
                this.commitments_to_filter = relev_commitments_display_obj.all_commitments__unfiltered.slice();

                // wipe the original matching and unmatching commitments, 
                //	  we're staring from scratch.
                relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments = [];
                relev_commitments_display_obj.curr_filter_n_sort__NOT_MATCHING_commitments = [];
            }
            // filter from existing commitments
            // add commitments to the current list of matching commitments
            //  de-duplicate later
            else if( filter_already_filtered_commitments_or_start_from_scratch === "filter_from_original_commitments__add_to_existing_matching_commitments__deduplicate_later"){

                /////////// console.log("\t - doing the  filter_from_original_commitments__add_to_existing_matching_commitments__deduplicate_later thingies");

                // reset the values count object for the relevant display area
                /////////  relev_commitments_display_obj.set_up_values_counter_for_this_commitment_display_area( relev_commitments_display_obj );

                // copy the commitments to filter
                this.commitments_to_filter = relev_commitments_display_obj.all_commitments__unfiltered.slice();

                // wipe the original matching and unmatching commitments, 
                //	  we're staring from scratch.
                ////////////////  relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments = [];							
                ////////////////  relev_commitments_display_obj.curr_filter_n_sort__NOT_MATCHING_commitments = [];							
            }

            /// feedback 
            //		- do we have the right amount of input & bins?
            ///// console.log(" \t - post-setup the input commitments are now "+this.commitments_to_filter.length+" in length and the matched/unmatched are "+relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.length+"/"+relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.length+"");


            /////////  ////  beta feedback
            /////////  console.log(" \t - ther are "+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns.length+" number of column description objects in total ");


            //// 		START filteirng
            /// 			loop through the commitments
            for( this.curr_commitment_i = 0; this.curr_commitment_i < this.commitments_to_filter.length; this.curr_commitment_i++ ){


                // feedback
                /////////  console.log("\t\t - loop - working on commitment num "+this.curr_commitment_i+" with the title |"+this.commitments_to_filter[this.curr_commitment_i ][ 1 ]+"|" );

                // set up the counter for needed number of matching commitment columns
                this.number_of_needed_matching_columns_for_this_commitment = 0;

                //  and the actual amount of matching columns for this commitment
                this.curr_num_of_matching_commitment_cols = 0;

                //  tracks which of the matching columns are 
                //		in the list of required columns
                this.curr_num_of_matching_commitment_cols__OF_LIST_OF_NEEDED_COLUMNS = 0;





                ////  loop through each commitment description object
                //			- use these to check the values of each commitment/column
                for( this.curr_column_description_obj_i = 0; this.curr_column_description_obj_i < relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns.length; this.curr_column_description_obj_i++ ){

                    //// feedback
                    /////////  console.log("\t\t\t - working on column description obj #|"+this.curr_column_description_obj_i+"| which is "+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ] .column_title__text+" of type |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].column_type+"|" );

                    // add a flag for a matching header value + data
                    //	  - if this is true at the end of the header checks, then add on to the matching number of commitment headers
                    this.found_matching_header_value_and_commitment_data_cell = false;



                    //// NEW VERSION COMMITENT : 
                    ///		- the following col type check isn't really needed,
                    ///			as the list of columns should contain only valid columns
                    //			but we can leave it in for the moment


                    ////  loop through the valid column types for this sort of filtering
                    //		  this algorithm only works on certain values
                    for( this.curr_valid_col_type_i = 0; this.curr_valid_col_type_i < relev_table_obj__this.relevant_column_types_for__basic_column_filtering__not_tags_filtering.length ; this.curr_valid_col_type_i++ ){

                        // feedback
                        /////////  console.log(" \t\t\t\t - checking that this is a valid col type - comparing with valid col type #"+this.curr_valid_col_type_i+" - which is |"+relev_table_obj__this.relevant_column_types_for__basic_column_filtering__not_tags_filtering[ this.curr_valid_col_type_i ]+"|" );


                        /// Is this a valid column type?
                        /// 		check … and proceed as relevant
                        if( relev_table_obj__this.relevant_column_types_for__basic_column_filtering__not_tags_filtering[ this.curr_valid_col_type_i ] === relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].column_type ){

                            // add one to the count of the number of valid columns!
                            this.number_of_needed_matching_columns_for_this_commitment++;

                            // feedback
                            /////////  console.log(" \t\t\t\t\t - valid col type of col #"+this.curr_column_description_obj_i+" of type |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].column_type+"| vs needed |"+relev_table_obj__this.relevant_column_types_for__basic_column_filtering__not_tags_filtering[ this.curr_valid_col_type_i ]+"| type / now we need to match |"+this.number_of_needed_matching_columns_for_this_commitment+"| columns");



                            // loop through the column's Values and 
                            //	- count if they're present
                            //	- check if the commitment's value is matches for this column
                            for( this.curr_col_value_i = 0; this.curr_col_value_i < relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance.length ; this.curr_col_value_i++ ){

                                // feeedback
                                /////////  console.log(" \t\t\t\t\t\t\t -- checking col value #"+this.curr_col_value_i+" which is |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].header_category_text+"| and value |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].numberOrText_in_data_corresponding_to_this_value+"| do we check for it : |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].current_selection__selectedTrueFalse+"| - the corresponding data val is |"+this.commitments_to_filter[ this.curr_commitment_i ][ this.curr_column_description_obj_i ]+"|" );



                                // count matching values
                                // - if the curr header value matches the data value, ++ :) 
                                if( relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].numberOrText_in_data_corresponding_to_this_value === this.commitments_to_filter[ this.curr_commitment_i ][ this.curr_column_description_obj_i ] ){

                                    // header value + value in data match?!! 
                                    // (awesomes!)
                                    // feedback
                                    /////////  console.log("\t\t\t\t\t\t --- col header value && data match! of col value |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].numberOrText_in_data_corresponding_to_this_value+"| and data val |"+this.commitments_to_filter[ this.curr_commitment_i ][ this.curr_column_description_obj_i ]+"|");


                                    //// add ++ to the count of found values! 
                                    //
                                    relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].found_instances_of_this_value++ ;

                                    ///////    console.log(" ----- debug : found instances of this value : "+relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].found_instances_of_this_value );

                                    // feedback
                                    //////////   console.log(" \t\t\t\t\t\t\t\t ---- just found matching col && data values - the count of this value is now |"+relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].found_instances_of_this_value+"| of value |"+relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].header_category_text+"| of data value |"+relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].numberOrText_in_data_corresponding_to_this_value+"|" );

                                    /// and is it MATCHING TOO? - ie. a value that's searched for too? - then ++ in the matching data+header_val section
                                    /// check if the value is matched in the data
                                    //	( i.e. if this value is searched for, compare it with the value in the data )
                                    if( relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].current_selection__selectedTrueFalse === true ){

                                        /////////// console.log(" \t\t\t\t\t\t\t\t ----- found matching value in header val && data && checking for it - setting the 'relevant-column' flat to >> true << ");

                                        // indicate that at least one match has been found in this column,
                                        //	between sought value and data cell value
                                        this.found_matching_header_value_and_commitment_data_cell = true;

                                    }


                                } else{
                                    // NO MATCH

                                    // FEEDBACK - LIST THE VALUES THAT DONT MATCH!… or not…
                                }



                            } // end loop : go thorugh col header values



                        } // not a valid col type
                        else{

                            // feedback
                            ///// console.log(" \t\t\t\t\t\t ----- ARGHH note a valid col type ("+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].column_type+")");
                        }



                        //// Is a match found in this column? 
                        ///			( btw. searched for column value and data cell ?)
                        /////  if there's a match, add ++ to the count of matching columns
                        //
                        if( this.found_matching_header_value_and_commitment_data_cell === true ){

                            // add one matching col
                            this.curr_num_of_matching_commitment_cols++;

                            /////////  console.log("\t\t\t\t\t\t ----- checking if the MATCHING col ("+this.curr_column_description_obj_i +") is in the list of possibly matching cols : "+list_of_column_indicies_to_filter );


                            // and if the curr column num is in the list of needed column
                            //	nums, increment the relevant counter too
                            ///// loop and check
                            for( this.curr_relev_col_num_in_list_of_selected_col_nums = 0; this.curr_relev_col_num_in_list_of_selected_col_nums < list_of_column_indicies_to_filter.length; this.curr_relev_col_num_in_list_of_selected_col_nums++ ){

                                // compare
                                if( list_of_column_indicies_to_filter[ this.curr_relev_col_num_in_list_of_selected_col_nums ] ===  this.curr_column_description_obj_i ){

                                    // if the curr col is in the list of needed cols
                                    //	- increase the list of cound cols
                                    this.curr_num_of_matching_commitment_cols__OF_LIST_OF_NEEDED_COLUMNS++

                                    /////////  console.log("cool! - (commitment #"+this.curr_commitment_i+") the current col num ("+this.curr_column_description_obj_i +") is also in the list of needed columns for matching ("+list_of_column_indicies_to_filter+")") ;
                                }

                            }


                            // feedback
                            /////////  console.log(" \t\t\t\t\t\t ----- MATCHING COL - at least one searched for value was found in this column :) - the curr num of matching cols for this commitment is "+this.curr_num_of_matching_commitment_cols+" / list of needed cols found count : "+this.curr_num_of_matching_commitment_cols__OF_LIST_OF_NEEDED_COLUMNS );
                        }
                        // not matchign col? 
                        else{
                            // feedback
                            /////////  console.log(" \t\t\t\t\t\t ----- NOT MATCHING COL - the curr num of matching cols for this commitment is "+this.curr_num_of_matching_commitment_cols);
                        }


                    } // end valid col type checking loop


                } // end col description obj loop



                //// CHECK if there are enough matching column matches for this commitment
                //		to be MATCHING or NON-MATCHING

                if( matching_all_columns__or__matching_only_some_columns === "matching_all_columns"){


                    // debug
                    /////////  console.log("\t\t - matching_all_columns__or__matching_only_some_columns ->"+matching_all_columns__or__matching_only_some_columns );


                    // IF ENOUGH MATCHING COMMITMENTS - party!
                    //	
                    if( this.curr_num_of_matching_commitment_cols === this.number_of_needed_matching_columns_for_this_commitment ){
                        //////// if( this.curr_num_of_matching_commitment_cols > 0 ){

                        // add the current commitment to the list of matching commitments
                        relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.push( this.commitments_to_filter[ this.curr_commitment_i ] );

                        // feedback…?
                        ///// console.log(" \t\t\t\t\t\t /////// the current commitment (#"+this.curr_commitment_i+") |"+this.commitments_to_filter[ this.curr_commitment_i ][1]+" passed through the filters! - the amount of matching commitments is now "+relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.length );
                    }


                }
                //// are we checking only some of the columns - eg as in the graph view?
                else if( matching_all_columns__or__matching_only_some_columns === "matching_only_some_columns" ){

                    // debug
                    /////////  console.log("\t\t - matching_all_columns__or__matching_only_some_columns ->"+matching_all_columns__or__matching_only_some_columns );

                    //// do we need a match on all the columns?
                    if( matching_only_some_columns__all_or_any === "matching_ALL_of_the_some_columns" ){

                        // debug
                        /////////  console.log("\t\t -1 matching_only_some_columns__all_or_any ->"+matching_only_some_columns__all_or_any );

                        /////////  console.log("\t\t\t - checking if this.curr_num_of_matching_commitment_cols__OF_LIST_OF_NEEDED_COLUMNS ("+this.curr_num_of_matching_commitment_cols__OF_LIST_OF_NEEDED_COLUMNS+") === ("+list_of_column_indicies_to_filter.length+") list_of_column_indicies_to_filter.length ")

                        // do we have a match on all the columns?
                        if( this.curr_num_of_matching_commitment_cols__OF_LIST_OF_NEEDED_COLUMNS === list_of_column_indicies_to_filter.length ){

                            // add the current commitment to the list of matching commitments
                            relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.push( this.commitments_to_filter[ this.curr_commitment_i ] );

                        }

                        ///// do we need a match on ANY of the listed columns?
                    }else if( matching_only_some_columns__all_or_any === "matching_ANY_of_the_some_columns" ){

                        // debug
                        /////////  console.log("\t\t -2 matching_only_some_columns__all_or_any ->"+matching_only_some_columns__all_or_any );

                        // debug
                        /////////  console.log("\t\t - matching_all_columns__or__matching_only_some_columns ->"+matching_all_columns__or__matching_only_some_columns );

                        /////////  console.log("\t\t\t - checking if this.curr_num_of_matching_commitment_cols__OF_LIST_OF_NEEDED_COLUMNS ("+this.curr_num_of_matching_commitment_cols__OF_LIST_OF_NEEDED_COLUMNS+") > 0 ")

                        // do we have a match on more than zero columns?
                        if( this.curr_num_of_matching_commitment_cols__OF_LIST_OF_NEEDED_COLUMNS > 0 ){

                            // add the current commitment to the list of matching commitments
                            relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.push( this.commitments_to_filter[ this.curr_commitment_i ] );

                        }

                    }

                }
                // if not matching - put the current commitment into the non-matching box
                else{
                    // add the current commitment to the current list of NON-matching commitment
                    relev_commitments_display_obj.curr_filter_n_sort__NOT_MATCHING_commitments.push( this.commitments_to_filter[ this.curr_commitment_i ] );

                    // feedback…?
                    ///// console.log(" \t\t\t\t\t\t |||||||| COMMITMENT DOESNT MATCH the current commitment (#"+this.curr_commitment_i+") |"+this.commitments_to_filter[ this.curr_commitment_i ][1]+" DIDNT PASS through the filters! - "+this.curr_num_of_matching_commitment_cols+" matching cols of "+this.number_of_needed_matching_columns_for_this_commitment+" needed. the amount of UN UN UN UNMATCHING commitments is now "+relev_commitments_display_obj.curr_filter_n_sort__NOT_MATCHING_commitments.length );

                }


            } // end curr commitment loop



            ///////  DEBUG
            ///////  DEBUG
            ///////  DEBUG
            ///////////////// checking where that values counter object might be…
            console.log("\t\t - - - the number of found/nonfound objects is  ---> "+relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.length+"/"+relev_commitments_display_obj.curr_filter_n_sort__NOT_MATCHING_commitments.length );
            ////////  console.log( relev_commitments_display_obj.values_counter_obj_for_this_display_obj );



        } // end function/method! //  fin // slut // etc...







        /////////  //  //  //  //  //   graph object related
        //////////  filter basic value things in the following columns


        this.update_basic_values_counter__for_list_of_columns__graph_view_edition__NEW = function( list_of_column_indicies_to_filter, relev_table_obj__this, relev_commitments_display_obj ){

            console.log(">>>> update_basic_values_counter__for_list_of_columns__graph_view_edition__NEW() - working on display area |"+relev_commitments_display_obj.country_name+"|" );


            // hello
            ///////////  console.log(">>>> filter_data_according_to_column_filter_settings() - filtering mode : |"+filter_already_filtered_commitments_or_start_from_scratch+"| on display area "+relev_commitments_display_obj.country_name+" | of the following columns "+list_of_column_indicies_to_filter );



            /// initialise the local_in_box of commitments to filter ;)
            //		( they vary depending on whether we're filtering already filtered ones, or filtering from scratch)
            this.commitments_to_filter = relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.slice();


            /////////  ////  beta feedback
            /////////  console.log(" \t - ther are "+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns.length+" number of column description objects in total ");


            //// 		START filteirng
            /// 			loop through the commitments
            for( this.curr_commitment_i = 0; this.curr_commitment_i < this.commitments_to_filter.length; this.curr_commitment_i++ ){

                /*
                 // feedback
                 /////////  console.log("\t\t - loop - working on commitment num "+this.curr_commitment_i+" with the title |"+this.commitments_to_filter[this.curr_commitment_i ][ 1 ]+"|" );

                 // set up the counter for needed number of matching commitment columns
                 this.number_of_needed_matching_columns_for_this_commitment = 0;

                 //  and the actual amount of matching columns for this commitment
                 this.curr_num_of_matching_commitment_cols = 0;

                 //  tracks which of the matching columns are 
                 //		in the list of required columns
                 this.curr_num_of_matching_commitment_cols__OF_LIST_OF_NEEDED_COLUMNS = 0;
                 */




                ////  loop through each commitment description object
                //			- use these to check the values of each commitment/column
                for( this.curr_column_description_obj_i = 0; this.curr_column_description_obj_i < relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns.length; this.curr_column_description_obj_i++ ){

                    //// feedback
                    /////////  console.log("\t\t\t - working on column description obj #|"+this.curr_column_description_obj_i+"| which is "+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ] .column_title__text+" of type |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].column_type+"|" );

                    // add a flag for a matching header value + data
                    //	  - if this is true at the end of the header checks, then add on to the matching number of commitment headers
                    this.found_matching_header_value_and_commitment_data_cell = false;



                    //// NEW VERSION COMMITENT : 
                    ///		- the following col type check isn't really needed,
                    ///			as the list of columns should contain only valid columns
                    //			but we can leave it in for the moment


                    ////  loop through the valid column types for this sort of filtering
                    //		  this algorithm only works on certain values
                    for( this.curr_valid_col_type_i = 0; this.curr_valid_col_type_i < relev_table_obj__this.relevant_column_types_for__basic_column_filtering__not_tags_filtering.length ; this.curr_valid_col_type_i++ ){

                        // feedback
                        /////////  console.log(" \t\t\t\t - checking that this is a valid col type - comparing with valid col type #"+this.curr_valid_col_type_i+" - which is |"+relev_table_obj__this.relevant_column_types_for__basic_column_filtering__not_tags_filtering[ this.curr_valid_col_type_i ]+"|" );


                        /// Is this a valid column type?
                        /// 		check … and proceed as relevant
                        if( relev_table_obj__this.relevant_column_types_for__basic_column_filtering__not_tags_filtering[ this.curr_valid_col_type_i ] === relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].column_type ){

                            // add one to the count of the number of valid columns!
                            this.number_of_needed_matching_columns_for_this_commitment++;

                            // feedback
                            /////////  console.log(" \t\t\t\t\t - valid col type of col #"+this.curr_column_description_obj_i+" of type |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].column_type+"| vs needed |"+relev_table_obj__this.relevant_column_types_for__basic_column_filtering__not_tags_filtering[ this.curr_valid_col_type_i ]+"| type / now we need to match |"+this.number_of_needed_matching_columns_for_this_commitment+"| columns");



                            // loop through the column's Values and 
                            //	- count if they're present
                            //	- check if the commitment's value is matches for this column
                            for( this.curr_col_value_i = 0; this.curr_col_value_i < relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance.length ; this.curr_col_value_i++ ){

                                // feeedback
                                /////////  console.log(" \t\t\t\t\t\t\t -- checking col value #"+this.curr_col_value_i+" which is |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].header_category_text+"| and value |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].numberOrText_in_data_corresponding_to_this_value+"| do we check for it : |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].current_selection__selectedTrueFalse+"| - the corresponding data val is |"+this.commitments_to_filter[ this.curr_commitment_i ][ this.curr_column_description_obj_i ]+"|" );



                                // count matching values
                                // - if the curr header value matches the data value, ++ :) 
                                if( relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].numberOrText_in_data_corresponding_to_this_value === this.commitments_to_filter[ this.curr_commitment_i ][ this.curr_column_description_obj_i ] ){

                                    // header value + value in data match?!! 
                                    // (awesomes!)
                                    // feedback
                                    /////////  console.log("\t\t\t\t\t\t --- col header value && data match! of col value |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].numberOrText_in_data_corresponding_to_this_value+"| and data val |"+this.commitments_to_filter[ this.curr_commitment_i ][ this.curr_column_description_obj_i ]+"|");


                                    //// add ++ to the count of found values! 
                                    //
                                    relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].found_instances_of_this_value++ ;

                                    ///////    console.log(" ----- debug : found instances of this value : "+relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].found_instances_of_this_value );

                                    // feedback
                                    //////////   console.log(" \t\t\t\t\t\t\t\t ---- just found matching col && data values - the count of this value is now |"+relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].found_instances_of_this_value+"| of value |"+relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].header_category_text+"| of data value |"+relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].numberOrText_in_data_corresponding_to_this_value+"|" );

                                    /// and is it MATCHING TOO? - ie. a value that's searched for too? - then ++ in the matching data+header_val section
                                    /// check if the value is matched in the data
                                    //	( i.e. if this value is searched for, compare it with the value in the data )
                                    if( relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_col_value_i ].current_selection__selectedTrueFalse === true ){

                                        /////////// console.log(" \t\t\t\t\t\t\t\t ----- found matching value in header val && data && checking for it - setting the 'relevant-column' flat to >> true << ");

                                        // indicate that at least one match has been found in this column,
                                        //	between sought value and data cell value
                                        this.found_matching_header_value_and_commitment_data_cell = true;

                                    }


                                } else{
                                    // NO MATCH

                                    // FEEDBACK - LIST THE VALUES THAT DONT MATCH!… or not…
                                }



                            } // end loop : go thorugh col header values



                        } // not a valid col type
                        else{

                            // feedback
                            ///// console.log(" \t\t\t\t\t\t ----- ARGHH note a valid col type ("+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].column_type+")");
                        }

                    } // end valid col type checking loop

                } // end col description obj loop

            } // end curr commitment loop

        } // end function/method! //  fin // slut // etc...






        /////////// 
        ///////////		test function for the above
        ///////////


        this.test_function_for_basic_value_filtering_function_that_takes_a_list_of_relev_columns = function( root_this_ ){

            console.log(">>>> test_function_for_basic_value_filtering_function_that_takes_a_list_of_relev_columns() ");


            ////  fetch the list of relevant columns to check
            root_this_.fetch_list_of_col_info_objects_with_selected_values( root_this_ );


            ////  filter them
            ////////////    root_this_.filter_basic_value_cell_data_according_to_column_filter_settings__NEW__IN_A_GIVEN_LIST_OF_COLUMNS( root_this_.list_of_col_info_objs_with_selected_Values, "filter_from_scratch__ie_the_original_formatted_commitments", root_this_, root_this_.commitment_display__n_filterning_n_sorting_areas[0] );

            root_this_.filter_basic_value_cell_data_according_to_column_filter_settings__NEW__IN_A_GIVEN_LIST_OF_COLUMNS( root_this_.list_of_col_info_objs_with_selected_Values, "matching_only_some_columns", "matching_ANY_of_the_some_columns", "filter_from_scratch__ie_the_original_formatted_commitments", root_this_, root_this_.commitment_display__n_filterning_n_sorting_areas[0] );

        }




        /*  - for selected columns looping

         /// go through the list of relevant col indicies
         for( this.curr_index_in_relev_col_list = 0; this.curr_index_in_relev_col_lis < list_of_column_indicies_to_filter.length; this.curr_index_in_relev_col_lis++ ){

         // set the current column number according to the currenty index in the list of variables
         this.curr_column_description_obj_i = list_of_column_indicies_to_filter[ this.curr_index_in_relev_col_list ];

         */





        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  

        //////////  matching commitment counting for GRAPH VIEW
        //				display by meu


        this.count_relevant_commitments_for_display_by_menu__and_update_relev_counter = function( root_this_, relev_col_info_obj_col_num, what_commitments_to_sort__described_by_text ){

            console.log(">>>> count_relevant_commitments_for_display_by_menu__and_update_relev_counter() on col num "+relev_col_info_obj_col_num+" which is |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[  relev_col_info_obj_col_num ].column_title__text+"|" );


            /////// set up some nice variables

            // localise
            ////  this.relev_commitments = relevant_commitments;


            // counter to count number of matching commitments
            this.counter__total_matching_commitments =  0;
            this.counter__total_number_of_commitments =  0;


            //// go through each display area 

            for( this.curr_display_area_i = 0; this.curr_display_area_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.curr_display_area_i++ ){

                console.log("\t - working on display area #"+this.curr_display_area_i+" ("+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].country_name+")");


                /// count per display area
                this.this_display_area__counter__matching_commitments = 0;


                /// sort out which the relevant commitments to filter are
                this.relevant_commitments;

                if( what_commitments_to_sort__described_by_text === "unfiltered" ){
                    // select unfiltered commitments
                    this.relevant_commitments = root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].all_commitments__unfiltered ;
                }
                /// for filtered matching commitments
                else if( what_commitments_to_sort__described_by_text === "filtered_matching" ){
                    // select unfiltered commitments
                    this.relevant_commitments = root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].curr_filter_n_sort__MATCHING_commitments ;
                }
                /// for filtered unmatching commitments
                else if( what_commitments_to_sort__described_by_text === "filtered_notmatching" ){
                    // select unfiltered commitments
                    this.relevant_commitments = root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].curr_filter_n_sort__NOT_MATCHING_commitments ;
                }


                ///////  loop through all the commutments
                for( this.curr_commitment_i = 0; this.curr_commitment_i < this.relevant_commitments.length; this.curr_commitment_i++  ){

                    console.log("\t\t - working on commitment #"+this.curr_commitment_i );


                    /////  flag that is set if ONE 
                    //			value matches

                    this.is_current_commitment_matching = false;

                    /// loop through the different values
                    //		for the given column info object
                    //		and check if any of them matches

                    for( this.cur_value_i = 0; this.cur_value_i < root_this_.column_information_objects_listed_in_the_order_of_the_columns[relev_col_info_obj_col_num ].header__value_choice_categories__listed_in_order_of_appearance.length; this.cur_value_i++  ){

                        console.log("\t\t\t\t - checking value #"+this.cur_value_i  );

                        //// check if the given value is one we're searching for, for the values
                        if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[relev_col_info_obj_col_num ].header__value_choice_categories__listed_in_order_of_appearance[ this.cur_value_i  ].relevant_value_for_graph_view_display_by_menu === true ){

                            console.log("\t\t\t\t\t - working on comparing value #"+this.cur_value_i+" which is "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_info_obj_col_num ].header__value_choice_categories__listed_in_order_of_appearance[ this.cur_value_i  ].header_category_text+", with a value of |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[relev_col_info_obj_col_num ].header__value_choice_categories__listed_in_order_of_appearance[ this.cur_value_i  ].relevant_value_for_graph_view_display_by_menu+"|" );

                            // check if the commitment value matches the needed value for this commitment to be counted
                            //
                            if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[relev_col_info_obj_col_num ].header__value_choice_categories__listed_in_order_of_appearance[ this.cur_value_i  ].numberOrText_in_data_corresponding_to_this_value ===  this.relevant_commitments[ this.curr_commitment_i ][ relev_col_info_obj_col_num ] ){

                                console.log("\t\t\t\t\t\t - commitment #"+this.cur_value_i+" matches! ie. title |"+this.relevant_commitments[ this.curr_commitment_i ][ 1 ]+"|" );

                                ////  yeps, it matches
                                this.is_current_commitment_matching = true;

                            } // end if - if the value matches the searched for matches

                        } // end if - if we're searching for this value

                    } // end loop - though various values in this column

                    /// add this commitment to the count of matching commitments
                    if( this.is_current_commitment_matching === true ){
                        this.this_display_area__counter__matching_commitments++ ;
                    }

                } // end loop - commitments

                /// add to the display areas total count of matching commitments
                this.counter__total_matching_commitments += this.this_display_area__counter__matching_commitments;

                // and for the total commitments count
                this.counter__total_number_of_commitments += this.relevant_commitments.length;

                //  caclulate the decimal ratio between matching and non-matching commitments
                this.curr_display_area_obj_matching_vs_nonmatching_decimal = this.this_display_area__counter__matching_commitments / this.relevant_commitments.length ;

                console.log("\t - working on display area #"+this.curr_display_area_i+" ("+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].country_name+") - has |"+this.this_display_area__counter__matching_commitments+"/"+this.relevant_commitments.length+"| matching commitments / decimal value === "+this.curr_display_area_obj_matching_vs_nonmatching_decimal );



                /// set the display area score!
                root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].calculated_graph_area_score__decimal = this.this_display_area__counter__matching_commitments / this.relevant_commitments.length ;


                ///// and finally…
                /// zero the current display area object counter
                this.this_display_area__counter__matching_commitments = 0;


            } // end loop - display area objects


            console.log(" total matching commmitments === "+this.counter__total_matching_commitments+"  "+this.counter__total_number_of_commitments );


        } // end function () 



        ////////////   
        ////////////	new version of the above




        this.count_relevant_commitments_for_display_by_menu__and_update_relev_counter__NEW = function( root_this_, relev_col_info_obj_col_num, what_commitments_to_sort__described_by_text ){

            console.log(">>>> count_relevant_commitments_for_display_by_menu__and_update_relev_counter() on col num "+relev_col_info_obj_col_num+" which is |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[  relev_col_info_obj_col_num ].column_title__text+"|" );


            /////// set up some nice variables

            // localise
            ////  this.relev_commitments = relevant_commitments;




            //// go through each display area 

            for( this.curr_display_area_i = 0; this.curr_display_area_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.curr_display_area_i++ ){


                root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].calculated_graph_area_score__decimal = root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].values_counter_obj_for_this_display_obj[ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ].header__value_choice_categories__listed_in_order_of_appearance[ 0 ].found_instances_of_this_value__as_a_decimal__of_total_commitments_for_this_column / root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].values_counter_obj_for_this_display_obj.total_num_of_commitments ;


                /// set the display area score!
                /// root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].calculated_graph_area_score__decimal = this.this_display_area__counter__matching_commitments / this.relevant_commitments.length ;


                ///// and finally…
                /// zero the current display area object counter
                this.this_display_area__counter__matching_commitments = 0;


            } // end loop - display area objects


            console.log(" total matching commmitments === "+this.counter__total_matching_commitments+"  "+this.counter__total_number_of_commitments );


        } // end function () 







        ///////////
        /////////// test function for the above
        ///////////

        this.test_function__for_display_by_menu__commitment_counting_function = function( root_this_ ){

            console.log(">>>> test_function__for_display_by_menu__commitment_counting_function() ");

            this.curr_col_num = 5;

            //// root_this_.count_relevant_commitments_for_display_by_menu__and_update_relev_counter( root_this_, this.curr_col_num, "unfiltered" );

        }




        ////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////


        ///////////
        ///////////   find which tags are being searched for
        ///////////			- and copy their tags descriptions 
        ///////////
        ///////////


        this.check_for_n_copy_tags_marked_as_being_searched_for = function( root_this_ ){

            console.log(">>>>>>>  check_for_n_copy_tags_marked_as_being_searched_for() ");


            /////  store a list of tags which we should check
            root_this_.list_of_relevant_tags_to_check = [];

            // check which tags to check
            root_this_.column_information_objects_listed_in_the_order_of_the_columns[4].header__value_choice_categories__listed_in_order_of_appearance.map( function( curr_tag_descr_obj, curr_tag_descr_obj_i ){

                ///// console.log( "\t checking whether to check tag #"+curr_tag_descr_obj_i+" : "+curr_tag_descr_obj.current_selection__selectedTrueFalse+" : "+curr_tag_descr_obj.header_category_text+" / of status "+curr_tag_descr_obj.type );

                // check if the header type is relevant
                root_this_.valid_tag_value_types_for_filtering.map( function( current_acceptable_tag_type ){

                    if( current_acceptable_tag_type === curr_tag_descr_obj.type ){

                        // check if the tagvalue we want to be true… is true
                        if( curr_tag_descr_obj.current_selection__selectedTrueFalse === true ){
                            //
                            root_this_.list_of_relevant_tags_to_check.push( curr_tag_descr_obj_i );

                            ////  console.log( " selected === #"+curr_tag_descr_obj_i );
                            ////  console.log( curr_tag_descr_obj );
                        }

                    }else{
                        ///// console.log(" /////////  argh... tag descr object #"+curr_tag_descr_obj_i+" has a unacceptable tag type : "+curr_tag_descr_obj.type+" ( whole object : "+curr_tag_descr_obj_i  );
                    }

                });
            });


            ///// 
            // return something nice
            return root_this_.list_of_relevant_tags_to_check;

        }





        /////////////////////////////////////////////// 

        /////   //////////////// 
        /////   //////////////// 	filter commitments by tags

        this.filter_commitments_based_on_tags = function( root_this_, commitments_to_filter ){

            console.log(" >>>> filter_commitments_based_on_tags() ");



            ///////  initialisation

            // put somewhere to put the tags
            root_this_.commitments_filtered_by_tags = [];
            //// DEBUG VERSIONS :  a list of matching and non-matching rows
            root_this_.list_of_nonMatchingTags_data_rows = [];



            ////////// check which tags to check

            /////  store a list of tags which we should check
            root_this_.list_of_relevant_tags_to_check = [];



            // check which tags to check
            root_this_.column_information_objects_listed_in_the_order_of_the_columns[4].header__value_choice_categories__listed_in_order_of_appearance.map( function( curr_tag_descr_obj, curr_tag_descr_obj_i ){

                ///// console.log( "\t checking whether to check tag #"+curr_tag_descr_obj_i+" : "+curr_tag_descr_obj.current_selection__selectedTrueFalse+" : "+curr_tag_descr_obj.header_category_text+" / of status "+curr_tag_descr_obj.type );

                // check if the header type is relevant
                root_this_.valid_tag_value_types_for_filtering.map( function( current_acceptable_tag_type ){

                    if( current_acceptable_tag_type === curr_tag_descr_obj.type ){

                        // check if the tagvalue we want to be true… is true
                        if( curr_tag_descr_obj.current_selection__selectedTrueFalse === true ){
                            //
                            root_this_.list_of_relevant_tags_to_check.push( curr_tag_descr_obj_i );
                        }

                    }else{
                        ///// console.log(" /////////  argh... tag descr object #"+curr_tag_descr_obj_i+" has a unacceptable tag type : "+curr_tag_descr_obj.type+" ( whole object : "+curr_tag_descr_obj_i  );
                    }

                });
            });


            //  feedback : list all the relevant tags to check
            ///// console.log(" -- OK - found "+root_this_.list_of_relevant_tags_to_check.length+" of tag to check - they're otherwise :" );
            root_this_.list_of_relevant_tags_to_check.map( function(d){

                ///// console.log("\t - #"+d+" : "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[4].header__value_choice_categories__listed_in_order_of_appearance[d].header_category_text+" ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[4].header__value_choice_categories__listed_in_order_of_appearance[d].current_selection__selectedTrueFalse );
            });




            //////////   filter :) 	!!!!!!!
            ////
            ///// console.log(">> filter_commitments_based_on_tags : starting filtering ");

            //// root_this_.list_of_MatchingTags_data_rows = [];


            // loop through and filter based on tags
            for( this.curr_commitment_i = 0; this.curr_commitment_i < root_this_.table_data__formatted_according_to_relevant_column_order.length; this.curr_commitment_i++ ){

                //  where are we?
                ///// console.log("\t - "+this.curr_commitment_i+" - tag filtering commitment #"+root_this_.table_data__formatted_according_to_relevant_column_order[ this.curr_commitment_i][ root_this_.final_col_num_of_INDEX_column ] );

                ///// figure out whether there are enough matching tags!

                // counter
                this.curr_data_row_matching_tags_count = 0;



                //// go through the relevant tags (flagged as needed) and check whether the current 
                //		data row has the right amount of matching tags!
                for( this.current_i_in_list_of_tags_to_check = 0; this.current_i_in_list_of_tags_to_check < root_this_.list_of_relevant_tags_to_check.length; this.current_i_in_list_of_tags_to_check++ ){

                    ///// console.log("\t\t working on tag to check #"+this.current_i_in_list_of_tags_to_check );

                    // fetch the value in the data, whether this tag is true in this data row
                    this.relevant_tag_value_from_data_to_check = root_this_.table_data__formatted_according_to_relevant_column_order[ this.curr_commitment_i ][ this.index_of_tags_column_in_formatted_data_rows ][ root_this_.list_of_relevant_tags_to_check[ this.current_i_in_list_of_tags_to_check ] ][ 0 ] ;

                    ///// console.log(" working on datarow #"+this.curr_commitment_i+" and on the list of tags to check in #"+this.current_i_in_list_of_tags_to_check+" which corresponds to tag #"+root_this_.list_of_relevant_tags_to_check[ this.current_i_in_list_of_tags_to_check ]+" in the data … which has value "+this.relevant_tag_value_from_data_to_check  );

                    if( this.relevant_tag_value_from_data_to_check === true ){
                        this.curr_data_row_matching_tags_count++ ;
                    }

                }

                /// check if this data row has enough matching (relevant) tags

                // if enough relevant tags
                if( this.curr_data_row_matching_tags_count === root_this_.list_of_relevant_tags_to_check.length ){

                    // feedback
                    ///// console.log( "!!!! COOL - matching tags column row - #"+this.curr_commitment_i+" - with #"+this.curr_data_row_matching_tags_count+" matches out of "+root_this_.list_of_relevant_tags_to_check.length+" needed" );

                    //
                    root_this_.commitments_filtered_by_tags.push(  root_this_.table_data__formatted_according_to_relevant_column_order[ this.curr_commitment_i ] );

                } // else - not enough relevant tags
                else{

                    ///// console.log(" !!!! NO NO NO - NO tags match for this row (#"+this.curr_commitment_i+") - with #"+this.curr_data_row_matching_tags_count+" matches out of "+root_this_.list_of_relevant_tags_to_check.length+" needed");
                    // and find the ones that didn't match 
                    root_this_.list_of_nonMatchingTags_data_rows.push(  root_this_.table_data__formatted_according_to_relevant_column_order[ this.curr_commitment_i ] );

                }

            }

        }





        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  

        //////////  modified version of the filtering function above
        //				this one also counts values


        this.filter_data_according_to_TAGS__NEW__w_value_count = function( filter_already_filtered_commitments_or_start_from_scratch, relev_table_obj__this, relev_commitments_display_obj ){


            // hello
            console.log(">>>> filter_data_according_to_column_filter_settings() - filtering mode : |"+filter_already_filtered_commitments_or_start_from_scratch+"| on display area "+relev_commitments_display_obj.country_name );



            /// initialise the local_in_box of commitments to filter ;)
            //		( they vary depending on whether we're filtering already filtered ones, or filtering from scratch)
            this.commitments_to_filter ;



            ///// 	Set up input and output depending on whether filteirng is from scratch or pre-existing filtering
            /////   I.e. are we filtering the 'raw'/formatted data from scratch or 						
            //			are we filtering already filtered material?

            //  filtering already filtered results?
            //    - then the input is the already filtered material
            if( filter_already_filtered_commitments_or_start_from_scratch === "filter_already_filtered_commitments" ){

                // copy the commitments to filter
                this.commitments_to_filter = relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.slice();

                // wipe the original matching commitments, 
                //	as we'll be narrowing them down and putting some in the unmatched array
                relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments = [];

            } //  filtering from scratch
            //    - then the input is the unfilteed but formatted columns, and the out bins should be empty
            else if( filter_already_filtered_commitments_or_start_from_scratch === "filter_from_scratch__ie_the_original_formatted_commitments"){

                // reset the values count object for the relevant display area
                //////  relev_commitments_display_obj.set_up_values_counter_for_this_commitment_display_area( relev_commitments_display_obj );

                // copy the commitments to filter
                this.commitments_to_filter = relev_commitments_display_obj.all_commitments__unfiltered.slice();

                // wipe the original matching and unmatching commitments, 
                //	  we're staring from scratch.
                relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments = [];
                relev_commitments_display_obj.curr_filter_n_sort__NOT_MATCHING_commitments = [];
            }

            /// feedback 
            //		- do we have the right amount of input & bins?
            ///// console.log(" \t - post-setup the input commitments are now "+this.commitments_to_filter.length+" in length and the matched/unmatched are "+relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.length+"/"+relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.length+"");



            /// for statistics
            this.count_of_matching_found_num_of_commitments = 0;
            this.count_of_NONmatching_found_num_of_commitments = 0;


            //// 		START filteirng
            /// 			loop through the commitments
            for( this.curr_commitment_i = 0; this.curr_commitment_i < this.commitments_to_filter.length; this.curr_commitment_i++ ){

                // feedback
                ///// console.log("\t\t - loop - working on commitment num "+this.curr_commitment_i+" with the title |"+this.commitments_to_filter[ this.curr_commitment_i ][ 1 ]+"|" );

                // set up the counter for needed number of matching commitment columns
                this.number_of_needed_matching_columns_for_this_commitment = 0;

                //  and the actual amount of matching columns for this commitment
                this.curr_num_of_matching_commitment_cols = 0;


                // TEEEEST 
                ///// console.log(" the length of the tags description objects is "+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance.length );


                // Loop through all the TAGS in the tags column
                for( this.curr_tag_i = 0; this.curr_tag_i < relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance.length ; this.curr_tag_i++ ){

                    // feedback
                    ///// console.log("\t - working on tag #"+this.curr_tag_i+" which is |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].header_category_text+"| with a in-data-val of |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].numberOrText_in_data_corresponding_to_this_value+"| and is it searche for ("+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].current_selection__selectedTrueFalse+")" );



                    // go through the valid tag types, to check whether the current tag is a valid one to check
                    //		( and not something like a header )
                    for( this.curr_valid_tag_type_i = 0; this.curr_valid_tag_type_i < relev_table_obj__this.valid_tag_value_types_for_filtering.length ; this.curr_valid_tag_type_i++ ){

                        // feedback
                        ///// console.log(" \t\t - working on valid tag type #"+this.curr_valid_tag_type_i+" which is |"+relev_table_obj__this.valid_tag_value_types_for_filtering[ this.curr_valid_tag_type_i ]+"| the current tag obj is of type |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].type+"|" );


                        // do filtering if the tag value type is relevant ( for filtering )
                        if( relev_table_obj__this.valid_tag_value_types_for_filtering[ this.curr_valid_tag_type_i ] === relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].type ){

                            // feedback
                            ///// console.log(" \t\t\t - cool - the current tag value (#"+this.curr_tag_i+") tag type ("+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].type +") matches the current valid tag type value |"+relev_table_obj__this.valid_tag_value_types_for_filtering[ this.curr_valid_tag_type_i ]+"| - now, let's do some filtering ( curr data value === |"+this.commitments_to_filter[ this.curr_commitment_i ][ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ][this.curr_tag_i ]+"|" );

                            /// console.log( this.commitments_to_filter[ this.curr_commitment_i ][ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ] );



                            /// Add one to the count of searched for tags if this tag is searched for
                            if( relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].current_selection__selectedTrueFalse === true ){

                                //// add one to the found count of tags looked for and found
                                // set up the counter for needed number of matching commitment columns
                                this.number_of_needed_matching_columns_for_this_commitment++ ;

                                ///// console.log(" \t\t\t - ok, this tag is SEARCHED FOR - the count of searched for tags is now "+this.number_of_needed_matching_columns_for_this_commitment );

                            }



                            // count values ! 
                            // ( and check for tags+data matches (later) )
                            // if the current cell has a valid value
                            //	it means it's valid and should be counted
                            if( this.commitments_to_filter[ this.curr_commitment_i ][ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ][ this.curr_tag_i ][ relev_table_obj__this.tags__index_of_data_val_in_individual_tags_data ] === true ){

                                // feedback
                                ///// console.log(" \t\t\t\t - cool, the current tag's value-in-data is (hopefully true) |"+this.commitments_to_filter[ this.curr_commitment_i ][ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ][ this.curr_tag_i ][ relev_table_obj__this.tags__index_of_data_val_in_individual_tags_data ]+"| >>> let's count it! ");

                                // add one to the current tag's count of found instances
                                relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].found_instances_of_this_value++ ;

                                ///// console.log(" \t\t\t\t - cool, now |"+relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].found_instances_of_this_value+"| instances of the tag |"+relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].header_category_text+"| have been found ");

                                ///// console.log(" \t\t\t\t -- and this value is searched for? ... >"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].current_selection__selectedTrueFalse+"<" );



                                /////  if the tag is also searched for, 
                                //		add one to the count of matching values for this commitment
                                if( relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].current_selection__selectedTrueFalse === true ){

                                    //  and the actual amount of matching columns for this commitment
                                    this.curr_num_of_matching_commitment_cols++ ;

                                    // feedback
                                    ///// console.log("\t\t\t\t\t - GOOD GOOD - A MATCH! - the tag (#"+this.curr_tag_i+") ("+relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].header_category_text+") was looked for and it was true in the data too, of row #"+this.curr_commitment_i+"! - Now we've got "+this.curr_num_of_matching_commitment_cols+" matching commitments");

                                } // end check if the curr tag value is looked for 

                            } // end check if curr cell value corresponds to the curr tag value

                        } // end check if curr tag type is valid

                    } // end valid tags type loop

                } // end general tags loop


                ///// console.log(" \t\t\t\t\t - end of commitment loop - found matches vs checking needed  "+this.curr_num_of_matching_commitment_cols+" / "+this.number_of_needed_matching_columns_for_this_commitment );
                /// Matching commitment? 
                //	- check if the number of found tags to search for matches the num of found tags.
                if(  this.curr_num_of_matching_commitment_cols === this.number_of_needed_matching_columns_for_this_commitment ){

                    // feedback
                    console.log("\t\t\t\t\t - COMMMITEMNT MATCHES! - #"+this.curr_commitment_i+" : "+this.commitments_to_filter[ this.curr_commitment_i ][ 1 ]  );

                    // add to the FOUND commitments
                    relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.push( this.commitments_to_filter[ this.curr_commitment_i ] );

                    // and add to the conter
                    this.count_of_matching_found_num_of_commitments++ ;
                }
                // if no match
                else{

                    // feedback
                    console.log("\t\t\t\t\t - NO NO NO commitment match :( ! - #"+this.curr_commitment_i+" : "+this.commitments_to_filter[ this.curr_commitment_i ][ 1 ]  );

                    // add to the NOT FOUND commitments
                    relev_commitments_display_obj.curr_filter_n_sort__NOT_MATCHING_commitments.push( this.commitments_to_filter[ this.curr_commitment_i ] );

                    // and add to the conter
                    this.count_of_NONmatching_found_num_of_commitments++  ;
                }


            } // end of commitments loop[S]


            ///// FINAL FEEDBAK
            ///// End of commitments checking STATISTICS : 
            //		- provide some statistics of found/not found commitments?!
            //
            ///// console.log(" /////  end of tags filtering for - "+relev_commitments_display_obj.country_name+" - the current found/not found commitments count are : "+this.count_of_matching_found_num_of_commitments+"/"+this.count_of_NONmatching_found_num_of_commitments+" || and the total amount of matching/non-matching commitments are : "+relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.length+"/"+relev_commitments_display_obj.curr_filter_n_sort__NOT_MATCHING_commitments.length );


        } // end function/method! //  fin // slut // etc...






        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  

        //////////  modified version of the tags filtering above, 
        //				allowing one to suggest whether all or any tags matches
        //				for a commitment being 'ok'


        this.filter_data_according_to_TAGS__NEW__w_value_count__NEW_all_or_any_filtering_added = function( filter_already_filtered_commitments_or_start_from_scratch, matching_all_columns__or__matching_only_some_columns, relev_table_obj__this, relev_commitments_display_obj ){


            // hello
            /////////////   console.log(">>>> filter_data_according_to_column_filter_settings() - filtering mode : |"+filter_already_filtered_commitments_or_start_from_scratch+"| on display area "+relev_commitments_display_obj.country_name+" >  matching_all_columns__or__matching_only_some_columns === |"+matching_all_columns__or__matching_only_some_columns );



            /// initialise the local_in_box of commitments to filter ;)
            //		( they vary depending on whether we're filtering already filtered ones, or filtering from scratch)
            this.commitments_to_filter ;



            ///// 	Set up input and output depending on whether filteirng is from scratch or pre-existing filtering
            /////   I.e. are we filtering the 'raw'/formatted data from scratch or 						
            //			are we filtering already filtered material?

            //  filtering already filtered results?
            //    - then the input is the already filtered material
            if( filter_already_filtered_commitments_or_start_from_scratch === "filter_already_filtered_commitments" ){

                // copy the commitments to filter
                this.commitments_to_filter = relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.slice();

                // wipe the original matching commitments, 
                //	as we'll be narrowing them down and putting some in the unmatched array
                relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments = [];

            } //  filtering from scratch
            //    - then the input is the unfilteed but formatted columns, and the out bins should be empty
            else if( filter_already_filtered_commitments_or_start_from_scratch === "filter_from_scratch__ie_the_original_formatted_commitments"){

                // reset the values count object for the relevant display area
                //////  relev_commitments_display_obj.set_up_values_counter_for_this_commitment_display_area( relev_commitments_display_obj );

                // copy the commitments to filter
                this.commitments_to_filter = relev_commitments_display_obj.all_commitments__unfiltered.slice();

                // wipe the original matching and unmatching commitments, 
                //	  we're staring from scratch.
                relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments = [];
                relev_commitments_display_obj.curr_filter_n_sort__NOT_MATCHING_commitments = [];
            }
            // filter from existing commitments
            // add commitments to the current list of matching commitments
            //  de-duplicate later
            else if( filter_already_filtered_commitments_or_start_from_scratch === "filter_from_original_commitments__add_to_existing_matching_commitments__deduplicate_later"){

                // reset the values count object for the relevant display area
                //////  relev_commitments_display_obj.set_up_values_counter_for_this_commitment_display_area( relev_commitments_display_obj );

                // copy the commitments to filter
                this.commitments_to_filter = relev_commitments_display_obj.all_commitments__unfiltered.slice();

                // wipe the original matching and unmatching commitments, 
                //	  we're staring from scratch.
                //////////////  relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments = [];							
                //////////////  relev_commitments_display_obj.curr_filter_n_sort__NOT_MATCHING_commitments = [];							
            }

            /// feedback 
            //		- do we have the right amount of input & bins?
            ///// console.log(" \t - post-setup the input commitments are now "+this.commitments_to_filter.length+" in length and the matched/unmatched are "+relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.length+"/"+relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.length+"");



            /// for statistics
            this.count_of_matching_found_num_of_commitments = 0;
            this.count_of_NONmatching_found_num_of_commitments = 0;


            //// 		START filteirng
            /// 			loop through the commitments
            for( this.curr_commitment_i = 0; this.curr_commitment_i < this.commitments_to_filter.length; this.curr_commitment_i++ ){

                // feedback
                ///// console.log("\t\t - loop - working on commitment num "+this.curr_commitment_i+" with the title |"+this.commitments_to_filter[ this.curr_commitment_i ][ 1 ]+"|" );

                // set up the counter for needed number of matching commitment columns
                this.number_of_needed_matching_columns_for_this_commitment = 0;

                //  and the actual amount of matching columns for this commitment
                this.curr_num_of_matching_commitment_cols = 0;

                // TEEEEST 
                ///// console.log(" the length of the tags description objects is "+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance.length );


                // Loop through all the TAGS in the tags column
                for( this.curr_tag_i = 0; this.curr_tag_i < relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance.length ; this.curr_tag_i++ ){

                    // feedback
                    ///// console.log("\t - working on tag #"+this.curr_tag_i+" which is |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].header_category_text+"| with a in-data-val of |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].numberOrText_in_data_corresponding_to_this_value+"| and is it searche for ("+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].current_selection__selectedTrueFalse+")" );



                    // go through the valid tag types, to check whether the current tag is a valid one to check
                    //		( and not something like a header )
                    for( this.curr_valid_tag_type_i = 0; this.curr_valid_tag_type_i < relev_table_obj__this.valid_tag_value_types_for_filtering.length ; this.curr_valid_tag_type_i++ ){

                        // feedback
                        ///// console.log(" \t\t - working on valid tag type #"+this.curr_valid_tag_type_i+" which is |"+relev_table_obj__this.valid_tag_value_types_for_filtering[ this.curr_valid_tag_type_i ]+"| the current tag obj is of type |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].type+"|" );


                        // do filtering if the tag value type is relevant ( for filtering )
                        if( relev_table_obj__this.valid_tag_value_types_for_filtering[ this.curr_valid_tag_type_i ] === relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].type ){

                            // feedback
                            ///// console.log(" \t\t\t - cool - the current tag value (#"+this.curr_tag_i+") tag type ("+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].type +") matches the current valid tag type value |"+relev_table_obj__this.valid_tag_value_types_for_filtering[ this.curr_valid_tag_type_i ]+"| - now, let's do some filtering ( curr data value === |"+this.commitments_to_filter[ this.curr_commitment_i ][ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ][this.curr_tag_i ]+"|" );

                            /// console.log( this.commitments_to_filter[ this.curr_commitment_i ][ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ] );



                            /// Add one to the count of searched for tags if this tag is searched for
                            if( relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].current_selection__selectedTrueFalse === true ){

                                //// add one to the found count of tags looked for and found
                                // set up the counter for needed number of matching commitment columns
                                this.number_of_needed_matching_columns_for_this_commitment++ ;

                                ///// console.log(" \t\t\t - ok, this tag is SEARCHED FOR - the count of searched for tags is now "+this.number_of_needed_matching_columns_for_this_commitment );

                            }



                            // count values ! 
                            // ( and check for tags+data matches (later) )
                            // if the current cell has a valid value
                            //	it means it's valid and should be counted
                            if( this.commitments_to_filter[ this.curr_commitment_i ][ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ][ this.curr_tag_i ][ relev_table_obj__this.tags__index_of_data_val_in_individual_tags_data ] === true ){

                                // feedback
                                ///// console.log(" \t\t\t\t - cool, the current tag's value-in-data is (hopefully true) |"+this.commitments_to_filter[ this.curr_commitment_i ][ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ][ this.curr_tag_i ][ relev_table_obj__this.tags__index_of_data_val_in_individual_tags_data ]+"| >>> let's count it! ");

                                // add one to the current tag's count of found instances
                                relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].found_instances_of_this_value++ ;

                                ///// console.log(" \t\t\t\t - cool, now |"+relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].found_instances_of_this_value+"| instances of the tag |"+relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].header_category_text+"| have been found ");

                                ///// console.log(" \t\t\t\t -- and this value is searched for? ... >"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].current_selection__selectedTrueFalse+"<" );



                                /////  if the tag is also searched for, 
                                //		add one to the count of matching values for this commitment
                                if( relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].current_selection__selectedTrueFalse === true ){

                                    //  and the actual amount of matching columns for this commitment
                                    this.curr_num_of_matching_commitment_cols++ ;

                                    // feedback
                                    ///// console.log("\t\t\t\t\t - GOOD GOOD - A MATCH! - the tag (#"+this.curr_tag_i+") ("+relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].header_category_text+") was looked for and it was true in the data too, of row #"+this.curr_commitment_i+"! - Now we've got "+this.curr_num_of_matching_commitment_cols+" matching commitments");

                                } // end check if the curr tag value is looked for 

                            } // end check if curr cell value corresponds to the curr tag value

                        } // end check if curr tag type is valid

                    } // end valid tags type loop

                } // end general tags loop


                ///// console.log(" \t\t\t\t\t - end of commitment loop - found matches vs checking needed  "+this.curr_num_of_matching_commitment_cols+" / "+this.number_of_needed_matching_columns_for_this_commitment );


                //// CHECK if there are enough matching column matches for this commitment
                //		to be MATCHING or NON-MATCHING

                if( matching_all_columns__or__matching_only_some_columns === "matching_all_columns"){

                    /// Matching commitment? 
                    //	- check if the number of found tags to search for matches the num of found tags.
                    if(  this.curr_num_of_matching_commitment_cols === this.number_of_needed_matching_columns_for_this_commitment ){

                        // feedback
                        /////////  console.log("\t\t\t\t\t -1- COMMMITEMNT MATCHES! - #"+this.curr_commitment_i+" : "+this.commitments_to_filter[ this.curr_commitment_i ][ 1 ]  );

                        // add to the FOUND commitments
                        relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.push( this.commitments_to_filter[ this.curr_commitment_i ] );

                        // and add to the conter
                        this.count_of_matching_found_num_of_commitments++ ;
                    }
                }
                else if( matching_all_columns__or__matching_only_some_columns === "matching_only_some_columns___zero_tags_lets_NO_NO_NO_commitments_through" ){

                    /// Matching commitment? 
                    //	- check if the number of found tags to search for matches the num of found tags.
                    // PLEASE NOTE
                    // PLEASE NOTE  -  the "this.number_of_needed_matching_columns_for_this_commitment === 0" line makes sure that if nothing is selected, everything passes through.
                    // PLEASE NOTE 
                    if(  this.curr_num_of_matching_commitment_cols > 0 ){

                        // feedback
                        /////////  console.log("\t\t\t\t\t -2- COMMMITEMNT MATCHES! - #"+this.curr_commitment_i+" : "+this.commitments_to_filter[ this.curr_commitment_i ][ 1 ]  );

                        // add to the FOUND commitments
                        relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.push( this.commitments_to_filter[ this.curr_commitment_i ] );

                        // and add to the conter
                        this.count_of_matching_found_num_of_commitments++ ;
                    }


                }
                ///  This option is as above BUT 
                //		LET'S ALL COMMITMENTS THROUGH IF ZERO 
                //		TAGS ARE SELECTED
                else if( matching_all_columns__or__matching_only_some_columns === "matching_only_some_columns___zero_tags_lets_all_commitments_through" ){

                    /// Matching commitment? 
                    //	- check if the number of found tags to search for matches the num of found tags.
                    // PLEASE NOTE
                    // PLEASE NOTE  -  the "this.number_of_needed_matching_columns_for_this_commitment === 0" line makes sure that if nothing is selected, everything passes through.
                    // PLEASE NOTE 
                    if(  this.curr_num_of_matching_commitment_cols > 0 || this.number_of_needed_matching_columns_for_this_commitment === 0 ){

                        // feedback
                        /////////  console.log("\t\t\t\t\t -3- COMMMITEMNT MATCHES! - #"+this.curr_commitment_i+" : "+this.commitments_to_filter[ this.curr_commitment_i ][ 1 ]  );

                        // add to the FOUND commitments
                        relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.push( this.commitments_to_filter[ this.curr_commitment_i ] );

                        // and add to the conter
                        this.count_of_matching_found_num_of_commitments++ ;
                    }


                }
                // if no match
                else{

                    // feedback
                    /////////  console.log("\t\t\t\t\t - NO NO NO commitment match :( ! - #"+this.curr_commitment_i+" : "+this.commitments_to_filter[ this.curr_commitment_i ][ 1 ]  );

                    // add to the NOT FOUND commitments
                    relev_commitments_display_obj.curr_filter_n_sort__NOT_MATCHING_commitments.push( this.commitments_to_filter[ this.curr_commitment_i ] );

                    // and add to the conter
                    this.count_of_NONmatching_found_num_of_commitments++  ;
                }


            } // end of commitments loop[S]


            ///// FINAL FEEDBAK
            ///// End of commitments checking STATISTICS : 
            //		- provide some statistics of found/not found commitments?!
            //
            console.log(" /////  end of tags filtering for - "+relev_commitments_display_obj.country_name+" - the current found/not found commitments count are : "+this.count_of_matching_found_num_of_commitments+"/"+this.count_of_NONmatching_found_num_of_commitments+" || and the total amount of matching/non-matching commitments are : "+relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.length+"/"+relev_commitments_display_obj.curr_filter_n_sort__NOT_MATCHING_commitments.length );


        } // end function/method! //  fin // slut // etc...





        //////////  counts matching commitments values
        ///				for the values counter
        ///
        ///		modified verison of the 
        ///	  filter_data_according_to_TAGS__NEW__w_value_count__NEW_all_or_any_filtering_added()
        ///	 function

        /*
         original input:
         filter_already_filtered_commitments_or_start_from_scratch, matching_all_columns__or__matching_only_some_columns, relev_table_obj__this, relev_commitments_display_obj
         */

        this.update_tags_counter__graph_view_edition = function( relev_table_obj__this, relev_commitments_display_obj ){


            // hello
            /////////////   console.log(">>>> filter_data_according_to_column_filter_settings() - filtering mode : |"+filter_already_filtered_commitments_or_start_from_scratch+"| on display area "+relev_commitments_display_obj.country_name+" >  matching_all_columns__or__matching_only_some_columns === |"+matching_all_columns__or__matching_only_some_columns );



            /// initialise the local_in_box of commitments to filter ;)
            //		( they vary depending on whether we're filtering already filtered ones, or filtering from scratch)
            this.commitments_to_filter = relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.slice();


            ////////////////


            /// for statistics
            this.count_of_matching_found_num_of_commitments = 0;
            this.count_of_NONmatching_found_num_of_commitments = 0;


            //// 		START filteirng
            /// 			loop through the commitments
            for( this.curr_commitment_i = 0; this.curr_commitment_i < this.commitments_to_filter.length; this.curr_commitment_i++ ){

                // feedback
                ///// console.log("\t\t - loop - working on commitment num "+this.curr_commitment_i+" with the title |"+this.commitments_to_filter[ this.curr_commitment_i ][ 1 ]+"|" );

                // set up the counter for needed number of matching commitment columns
                this.number_of_needed_matching_columns_for_this_commitment = 0;

                //  and the actual amount of matching columns for this commitment
                this.curr_num_of_matching_commitment_cols = 0;

                // TEEEEST 
                ///// console.log(" the length of the tags description objects is "+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance.length );


                // Loop through all the TAGS in the tags column
                for( this.curr_tag_i = 0; this.curr_tag_i < relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance.length ; this.curr_tag_i++ ){

                    // feedback
                    ///// console.log("\t - working on tag #"+this.curr_tag_i+" which is |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].header_category_text+"| with a in-data-val of |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].numberOrText_in_data_corresponding_to_this_value+"| and is it searche for ("+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].current_selection__selectedTrueFalse+")" );



                    // go through the valid tag types, to check whether the current tag is a valid one to check
                    //		( and not something like a header )
                    for( this.curr_valid_tag_type_i = 0; this.curr_valid_tag_type_i < relev_table_obj__this.valid_tag_value_types_for_filtering.length ; this.curr_valid_tag_type_i++ ){

                        // feedback
                        ///// console.log(" \t\t - working on valid tag type #"+this.curr_valid_tag_type_i+" which is |"+relev_table_obj__this.valid_tag_value_types_for_filtering[ this.curr_valid_tag_type_i ]+"| the current tag obj is of type |"+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].type+"|" );


                        // do filtering if the tag value type is relevant ( for filtering )
                        if( relev_table_obj__this.valid_tag_value_types_for_filtering[ this.curr_valid_tag_type_i ] === relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].type ){

                            // feedback
                            ///// console.log(" \t\t\t - cool - the current tag value (#"+this.curr_tag_i+") tag type ("+relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].type +") matches the current valid tag type value |"+relev_table_obj__this.valid_tag_value_types_for_filtering[ this.curr_valid_tag_type_i ]+"| - now, let's do some filtering ( curr data value === |"+this.commitments_to_filter[ this.curr_commitment_i ][ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ][this.curr_tag_i ]+"|" );

                            /// console.log( this.commitments_to_filter[ this.curr_commitment_i ][ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ] );



                            /// Add one to the count of searched for tags if this tag is searched for
                            if( relev_table_obj__this.column_information_objects_listed_in_the_order_of_the_columns[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].current_selection__selectedTrueFalse === true ){

                                //// add one to the found count of tags looked for and found
                                // set up the counter for needed number of matching commitment columns
                                this.number_of_needed_matching_columns_for_this_commitment++ ;

                                ///// console.log(" \t\t\t - ok, this tag is SEARCHED FOR - the count of searched for tags is now "+this.number_of_needed_matching_columns_for_this_commitment );

                            }



                            // count values ! 
                            // ( and check for tags+data matches (later) )
                            // if the current cell has a valid value
                            //	it means it's valid and should be counted
                            if( this.commitments_to_filter[ this.curr_commitment_i ][ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ][ this.curr_tag_i ][ relev_table_obj__this.tags__index_of_data_val_in_individual_tags_data ] === true ){

                                // feedback
                                ///// console.log(" \t\t\t\t - cool, the current tag's value-in-data is (hopefully true) |"+this.commitments_to_filter[ this.curr_commitment_i ][ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ][ this.curr_tag_i ][ relev_table_obj__this.tags__index_of_data_val_in_individual_tags_data ]+"| >>> let's count it! ");

                                // add one to the current tag's count of found instances
                                relev_commitments_display_obj.values_counter_obj_for_this_display_obj[ relev_table_obj__this.index_of_tags_column_in_formatted_data_rows ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].found_instances_of_this_value++ ;


                            } // end check if the curr tag value is looked for 

                        } // end check if curr cell value corresponds to the curr tag value

                    } // end check if curr tag type is valid

                } // end valid tags type loop

            } // end general tags loop



        } // end function/method! //  fin // slut // etc...













        ////////////
        ////////////	test function for the function above
        ////////////

        this.test_function_for_TAGS_filtering_with_the_possibility_of_an_ANY_TAGS_MATCH = function( root_this_ ){

            console.log(">>>>. test_function_for_TAGS_filtering_with_the_possibility_of_an_ANY_TAGS_MATCH() ");

            //// this.filter_data_according_to_TAGS__NEW__w_value_count__NEW_all_or_any_filtering_added( this.filtering_on_preexisting_filterings__or__filtering_from_scratch, "matching_all_columns", root_this_, root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ]  );

            // testing matching only some columns
            this.filter_data_according_to_TAGS__NEW__w_value_count__NEW_all_or_any_filtering_added( this.filtering_on_preexisting_filterings__or__filtering_from_scratch, "matching_only_some_columns___zero_tags_lets_all_commitments_through", root_this_, root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ]  );

        }





        ////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////



        /////   //////////////// 
        /////   //////////////// 	count num of :
        //////////////////////			matching / absolute num of commitments
        ////

        this.count_total_num_of_matching_and_total_num_of_commitments = function( root_this_){

            console.log(">>>>> count_total_num_of_matching_and_total_num_of_commitments() ");


            root_this_.total_commitment_count__matching_commitment_count = 0;
            root_this_.total_commitment_count__all_commitments_count = 0;


            //// go through each display area object

            for( this.curr_display_area_i = 0; this.curr_display_area_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.curr_display_area_i++ ){


                console.log("\t- working on display area #"+this.curr_display_area_i +" with "+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].curr_filter_n_sort__MATCHING_commitments.length+" / "+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].all_commitments__unfiltered.length+"  nonmatching commitments " );


                ///// update the count of commitmnets

                /// the matching count - only if the region is slected!
                if( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].is_selected === true ){
                    root_this_.total_commitment_count__matching_commitment_count += root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].curr_filter_n_sort__MATCHING_commitments.length ;
                }

                // the total count
                root_this_.total_commitment_count__all_commitments_count += root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i ].all_commitments__unfiltered.length ;

            }

        }



        ////////////
        ////////////	helper function to the above:
        ////////////								- update display of 
        //											matching/total num of commitments				
        this.update_display_of_matching_and_total_num_of_commitments = function( root_this_ ){

            console.log(">>>> update_display_of_matching_and_total_num_of_commitments()");

            // update the numerator
            $("#"+root_this_.graph_view__inner_areas__menu_options_area__text_at_top__numerator_txt ).text( root_this_.total_commitment_count__matching_commitment_count );

            // update the denominator
            $("#"+root_this_.graph_view__inner_areas__menu_options_area__text_at_top__DEnominator_txt ).text( root_this_.total_commitment_count__all_commitments_count );

        }



        ////////////
        ////////////	uber function :  recount and redisplay matching/total # of commitments
        ////////////								
        //													

        this.recount_and_redisplay__matching_and_total_num_of_commitments = function( root_this_ ){

            console.log(">>>> recount_and_redisplay__matching_and_total_num_of_commitments()");

            /// update the count and display of the matching / total num of commitments
            root_this_.count_total_num_of_matching_and_total_num_of_commitments( root_this_ );
            root_this_.update_display_of_matching_and_total_num_of_commitments( root_this_ );
        }




        //////////////////////////////////////////////////////////
        //////////////////////////////////////////////



        /////   //////////////// 
        /////   //////////////// 	set all filter values to true/false of the regular columns
        //
        //	possible values for : set_all_values_to ===
        //												- true
        //												- false

        this.set_all_REGULAR_COLUMN_VALUES_search_values_to_true_or_false = function( root_this_, set_all_values_to_this_value ){

            ////   
            console.log(" >>>> set_all_REGULAR_COLUMN_VALUES_search_values_to_true_or_false - seeting all to : "+set_all_values_to_this_value );

            ///  map and print
            this.column_information_objects_listed_in_the_order_of_the_columns.map( function(curr_column_col_d, i){

                ///// console.log("\t - col #"+i+" : "+curr_column_col_d.column_title__text );

                root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering.map( function( curr_valid_col_type_for_filtering ){

                    /// only check regular valid column types - eg. not tags
                    if( curr_valid_col_type_for_filtering === curr_column_col_d.column_type ){

                        ///// console.log("\t filter values : ");

                        curr_column_col_d.header__value_choice_categories__listed_in_order_of_appearance.map( function( curr_column_filter_value, curr_column_filter_value_i ){

                            // set the value
                            curr_column_filter_value.current_selection__selectedTrueFalse = set_all_values_to_this_value ;

                            // print
                            ///// console.log("\t\t - "+curr_column_filter_value.current_selection__selectedTrueFalse+" : |"+curr_column_filter_value.header_category_text+"| ("+curr_column_filter_value.numberOrText_in_data_corresponding_to_this_value+")" );
                        });

                    }

                });

            });

        }




        /////   //////////////// 
        /////   //////////////// 	set all filter values to true/false of the tags values
        //
        //	possible values for : set_all_values_to ===
        //												- true
        //												- false

        this.set_all_TAGS_VALUES_search_values_to_true_or_false = function( root_this_, set_all_values_to_this_value ){

            ////   
            ///// console.log(" >>>> set_all_TAGS_VALUES_search_values_to_true_or_false - seeting all to : "+set_all_values_to_this_value );

            ///  map and print
            this.column_information_objects_listed_in_the_order_of_the_columns.map( function(curr_column_col_d, i){

                ///// console.log("\t - col #"+i+" : "+curr_column_col_d.column_title__text );

                root_this_.relevant_column_types_for__TAGS_column_filtering__not_basic_column_filtering.map( function( curr_valid_col_type_for_filtering ){

                    /// only check regular valid column types - eg. not tags
                    if( curr_valid_col_type_for_filtering === curr_column_col_d.column_type ){

                        console.log("\t filter values : on column #"+i+" col type : "+curr_column_col_d.column_type );

                        curr_column_col_d.header__value_choice_categories__listed_in_order_of_appearance.map( function( curr_column_filter_value, curr_column_filter_value_i ){

                            // set the value
                            curr_column_filter_value.current_selection__selectedTrueFalse = set_all_values_to_this_value ;

                            // print
                            console.log("\t\t - "+curr_column_filter_value.current_selection__selectedTrueFalse+" : |"+curr_column_filter_value.header_category_text+"| ("+curr_column_filter_value.numberOrText_in_data_corresponding_to_this_value+")" );
                        });

                    }

                });

            });

        }






        ////////////
        ///////////////
        ////////////
        ///////////		set all header values of a given column to true or false

        this.set_all_header_values_of_a_given_col_descr_obj_to_true_or_false = function( root_this_, given_col_num, value_to_assign ){

            console.log(">>>> set_all_header_values_of_a_given_col_descr_obj_to_true_or_false() - setting all values in column #"+given_col_num+" ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ given_col_num ].column_header_outer_containing_div_id_name+") to |"+value_to_assign+"|" );

            root_this_.column_information_objects_listed_in_the_order_of_the_columns[ given_col_num ].header__value_choice_categories__listed_in_order_of_appearance.map( function( given_header_value ){

                given_header_value.current_selection__selectedTrueFalse = value_to_assign;

            } );

        }






        /////   //////////////// 
        /////   //////////////// 	print the status of the headers & filtering values

        this.print_values_of_all_headers = function( root_this_ ){

            ////   
            console.log(" >>>> print_values_of_all_headers  ");

            ///  map and print
            this.column_information_objects_listed_in_the_order_of_the_columns.map( function(curr_column_col_d, i){

                ///// console.log("\t - col #"+i+" : "+curr_column_col_d.column_title__text );

                root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering.map( function( curr_valid_col_type_for_filtering ){

                    /// only check regular valid column types - eg. not tags
                    ///   if( curr_valid_col_type_for_filtering === curr_column_col_d.column_type ){

                    ///// console.log("\t filter values : ");

                    curr_column_col_d.header__value_choice_categories__listed_in_order_of_appearance.map( function( curr_column_filter_value, curr_column_filter_value_i ){

                        console.log("\t\t - "+curr_column_filter_value.current_selection__selectedTrueFalse+" : |"+curr_column_filter_value.header_category_text+"| ("+curr_column_filter_value.numberOrText_in_data_corresponding_to_this_value+")" );
                    });

                    /////   }
                });

            });

        }







        /////////////////////     Sort commitments!
        //////////////
        //////////////			- given the column num
        /////////////



        this.sort_columns_given_col_num = function( root_this_, relev_commitments_display_obj ){


            // hello
            console.log(">>>> sort_columns_given_col_num() - sorting mode : on display area "+relev_commitments_display_obj.country_name+" sorting ("+root_this_.are_we_sorting+") ("+root_this_.direction_of_sorting+") col num "+root_this_.sorting_by_col_num +" which should have a class id of "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.sorting_by_col_num ].column_header_outer_containing_div_id_name );



            /// initialise the local_in_box of commitments to filter ;)
            //		( they vary depending on whether we're filtering already filtered ones, or filtering from scratch)
            this.commitments_to_sort ;



            //////////  do different sorts of sorts depending on the column num
            ///////





            //// if sorting the country_name column
            //
            if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.sorting_by_col_num ].column_header_outer_containing_div_id_name === "country_name" ){

                // debug
                console.log(" >>> sorting the |country name| column" );

                //// 
            }
            //
            //// if sorting the commitment_title_text column
            //
            else if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.sorting_by_col_num ].column_header_outer_containing_div_id_name === "commitment_title_text" ){


                // debug
                console.log(" >>> sorting the |commitment_title_text| column"  );

                relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.sort( function(a, b){

                    if( a[ root_this_.sorting_by_col_num ] < a[ root_this_.sorting_by_col_num ] ){
                        return -1;
                    }
                    else if( a[ root_this_.sorting_by_col_num ] > a[ root_this_.sorting_by_col_num ] ){
                        return 1;
                    }
                    return 0;

                });

            }
            //
            //// if sorting the full_commitment_text column
            else if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.sorting_by_col_num ].column_header_outer_containing_div_id_name === "full_commitment_text" ){


                // debug
                console.log(" >>> sorting the |commitment_title_text| column"  );

                relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.sort( function(a, b){

                    if( a[ root_this_.sorting_by_col_num ] < a[ root_this_.sorting_by_col_num ] ){
                        return -1;
                    }
                    else if( a[ root_this_.sorting_by_col_num ] > a[ root_this_.sorting_by_col_num ] ){
                        return 1;
                    }
                    return 0;

                });
            }
            //
            //// and if one's sorting a basic values column
            //
            else if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.sorting_by_col_num ].column_type === "basic_filter_column" ){


                // debug
                console.log(" >>> sorting a |basic_filter_column| type column"  );

                //// copy the MATCHING! commitments needing sorting 
                //
                this.commtiments_to_sort = relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.slice();

                // empty the original array of commitments
                relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments = [];

                ///// loop and go through the values in this column
                //
                /// go through the values and copy the commitments with matching values into the relevant out 
                ///	array… 
                for( this.curr_val_i = 0; this.curr_val_i < root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.sorting_by_col_num ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_val_i++ ){

                    //// loop through the commitments to sort
                    for( this.curr_commitment_to_sort_i = 0; this.curr_commitment_to_sort_i < this.commtiments_to_sort.length; this.curr_commitment_to_sort_i++ ){

                        if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.sorting_by_col_num ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_val_i ].numberOrText_in_data_corresponding_to_this_value === this.commtiments_to_sort[ this.curr_commitment_to_sort_i  ][ this.sorting_by_col_num ] ){
                            relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.push( this.commtiments_to_sort[ this.curr_commitment_to_sort_i  ] );
                        }
                    }
                }



                //// copy the NON-matching commitments needing sorting 
                //
                this.commtiments_to_sort = relev_commitments_display_obj.curr_filter_n_sort__NOT_MATCHING_commitments.slice();

                // empty the original array of commitments
                relev_commitments_display_obj.curr_filter_n_sort__NOT_MATCHING_commitments = [];

                ///// loop and go through the values in this column
                //
                /// go through the values and copy the commitments with matching values into the relevant out 
                ///	array… 
                for( this.curr_val_i = 0; this.curr_val_i < root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.sorting_by_col_num ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_val_i++ ){

                    //// loop through the commitments to sort
                    for( this.curr_commitment_to_sort_i = 0; this.curr_commitment_to_sort_i < this.commtiments_to_sort.length; this.curr_commitment_to_sort_i++ ){

                        if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.sorting_by_col_num ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_val_i ].numberOrText_in_data_corresponding_to_this_value === this.commtiments_to_sort[ this.curr_commitment_to_sort_i  ][ this.sorting_by_col_num ] ){
                            relev_commitments_display_obj.curr_filter_n_sort__NOT_MATCHING_commitments.push( this.commtiments_to_sort[ this.curr_commitment_to_sort_i  ] );
                        }
                    }
                }
            }


            /////////////////////////////
            /////////////////////////////	reverse ? 
            /////////////////////////////			- if sorting up
            /////////////////////////////

            // if we're sorting up, then reverse the arrays please please
            if( root_this_.direction_of_sorting === "UP" ){

                relev_commitments_display_obj.curr_filter_n_sort__MATCHING_commitments.reverse();
                relev_commitments_display_obj.curr_filter_n_sort__NOT_MATCHING_commitments.reverse();

            }



            // / / / / / / / / / / / / / / / / / / / / / / / / / / 
            // / / / / / / / / / / / / / / / / / / / / / / / / / / 
            // / / / /   	return something NICE! 	   / / / / / / 

        }






        /////   //////////////// 
        /////   ////////////////	set up / shift between Countr-centric of Commitemnt centric 
        /////								commitment arrangement
        ///  the functions that get triggered when the web button is pushed 
        //



        ///  go to Country Centric mode 
        //		( if it's not already in country-centric mode)
        // 
        this.set_commitment_arrangement_to_country_centric = function( root_this_ ){

            console.log(" >>>> set_commitment_arrangement_to_country_centric() - ");


            // set the relevant value
            root_this_.curr_commitment_viewing_mode__country_or_commitment_centric_mode = root_this_.curr_commitment_viewing_mode__countryCentric_value;

            //
            console.log(" \t\t -- this.curr_commitment_viewing_mode__country_or_commitment_centric_mode is now  "+root_this_.curr_commitment_viewing_mode__country_or_commitment_centric_mode );


            //// trigger the main changing function…please !
            root_this_.change_commitment_organisation_according_to_curr_settings( root_this_ );


        }



        ///  go to Commitment Centric mode 
        //		( if it's not already in country-centric mode)
        //
        this.set_commitment_arrangement_to_commitment_centric = function( root_this_ ){

            console.log(" >>>> set_commitment_arrangement_to_commitment_centric() - ");


            // set the relevant value
            root_this_.curr_commitment_viewing_mode__country_or_commitment_centric_mode = root_this_.curr_commitment_viewing_mode__commitmentCentric_value;

            //
            console.log(" \t\t -- this.curr_commitment_viewing_mode__country_or_commitment_centric_mode is now  "+root_this_.curr_commitment_viewing_mode__country_or_commitment_centric_mode );


            //// trigger the main changing function…please !
            root_this_.change_commitment_organisation_according_to_curr_settings( root_this_ );

        }







        //// the main function taking care of things
        ///
        //
        this.change_commitment_organisation_according_to_curr_settings = function( root_this_ ){

            console.log(">>>>  change_commitment_organisation_according_to_curr_settings() to "+this.curr_commitment_viewing_mode__country_or_commitment_centric_mode );


            ////// rearrange the commitments data structure to suit
            //		- i.e. as one long one-dimensional array
            //				OR as a associative array w/ country-names as keys ( with the commitments inside)
            //
            this.arrange_formatted_commitment_arrays_into_country_or_commitment_centric_ordering( this, this.curr_commitment_viewing_mode__country_or_commitment_centric_mode );


            // TO DO TO DO TO DO 
            ////// get the display areas to fade out before 
            //		removing them?


            ////// remove display area objects please
            //
            this.commitment_display__n_filterning_n_sorting_areas = [];


            ///// create relevant commitment display objects
            //	
            //
            // Commitment-centric setup
            if( this.curr_commitment_viewing_mode__country_or_commitment_centric_mode === this.curr_commitment_viewing_mode__commitmentCentric_value ){

                // create only one commitment display object
                console.log("\t - setting up a commitment centric display area object ");

                // set up a new display area
                this.commitment_display__n_filterning_n_sorting_areas.push( new this.commitment_display__n_filtering_n_sorting_object( root_this_, this.table_data_arranged_commitment_or_country_centric, "Commitments" ) );

                // assign name
                ////   this.commitment_display__n_filterning_n_sorting_areas[0].country_name = "commitment_land";

                // assign data
                ///////// this.commitment_display__n_filterning_n_sorting_areas[0].all_commitments__unfiltered = this.table_data_arranged_commitment_or_country_centric ;

                // assign this please
                ///////// this.commitment_display__n_filterning_n_sorting_areas[0].main_parent_object_this = this ;


            }
            //
            //  Country centric setups 
            else if( this.curr_commitment_viewing_mode__country_or_commitment_centric_mode === this.curr_commitment_viewing_mode__countryCentric_value ){

                // go through the keys and make display area objects
                console.log("\t - setting up a country centric display area object ");

                for( key in this.table_data_arranged_commitment_or_country_centric ){

                    console.log(" \t\t - setting up a display area for "+this.table_data_arranged_commitment_or_country_centric[ key ].country_name );

                    // g732
                    this.commitment_display__n_filterning_n_sorting_areas.push( new this.commitment_display__n_filtering_n_sorting_object( root_this_, this.table_data_arranged_commitment_or_country_centric[ key ].matching_commitments, this.table_data_arranged_commitment_or_country_centric[ key ].country_name ) );

                }

                ///  sort the commitments alphabetically please
                this.sort_display_commitments_objects__alphabetically();


                //
            } //  end country-centric setups



            /////  set the commitment displaying flags in the display areas
            //		according to which view mode we're in
            //	- i.e. if in show only country statistics mode
            //		don't show the commitments
            if( root_this_.menus__tableCommitments_viewingOptions__current_option === root_this_.menus__tableCommitments_viewingOptions__option_as_txt__view_summary_statistics_of_country_centric_commitment_organisation ){

                //  set all relevant display area flags to not show commitments
                root_this_.set__all_display_areas__to_show_or_not_show_commitments( root_this_, false );
            }


            //// build the text search index for all 
            //		diplsay areas please!
            this.text_search__build_text_search_index_for_all_commitment_areas( root_this_ );



        } /// end method






        /////////////////////	- look up heights/widths for the table elements
        /////////////////////		-- good for positioning things when they're moving

        this.look_up_dimensions_of_table_elements = function( root_this_ ){

            console.log(">>>>> look_up_dimensions_of_table_elements() ");

            // the search + table header area -> top
            this.table_view_main_header_area__dom_elmt__top_px_y = 	$( "#"+this.table_view_main_header_area__dom_id_name ).position().top ;

            // the search + table header area -> height
            root_this_.table_view_main_header_area__dom_elmt__height_px_y = $( "#"+root_this_.table_view_main_header_area__dom_id_name ).height();

            // width fetch
            // the country names (et al) area  -- width
            root_this_.table_view__countryNamesEtAl_area__dom_elmt__width = $("#"+root_this_.table_view__countryNamesEtAl_area__belowHeadersArea__id_name ).width();

            // height difference fetch
            // the country names (et al) area  -- height diff btw the table header and this element
            root_this_.table_view__countryNamesEtAl_area__dom_elmt__normal_distance_from_header_top__dy = $("#"+root_this_.table_view__countryNamesEtAl_area__belowHeadersArea__id_name ).position().top - $( "#"+root_this_.table_view_main_header_area__dom_id_name ).position().top ;

            //  height difference fetch
            // commitments listing area  -- height diff btw the table header and this element
            root_this_.table_view__main_commitments_listing_area__dom_elmt__normal_distance_from_header_top__dy = $("#"+root_this_.table_view__main_commitments_listing_area__id_name ).position().top - $( "#"+root_this_.table_view_main_header_area__dom_id_name ).position().top ;

        }





        //////////////////////////////  display areas && country operations doings

        /////////////////////	bind actions to country/display area items like
        /////////////////////		 clickboxes and show more/less
        /////////////////////	- to support showing/hiding country operations
        /////////////////////	- to support the show all/none/some commitments
        /////////////////////
        /////////////////////


        this.bind_relev_interactive_functions_to_display_area_views_related_interactive_objects = function( root_this_ ){

            // ehloow
            console.log( ">>>>!!  bind_relev_interactive_functions_to_display_area_views_related_interactive_objects - hellow! - attaching interactive capacities to country/display-area clickboxes, etc… - attaching to class : "+root_this_.commitment_display__n_filterning_n_sorting_areas[0].display_area__commitments_listing_area__summary_statistics___countryNameCell__click_box );



            //// select and bind
            $( "."+root_this_.commitment_display__n_filterning_n_sorting_areas[0].display_area__commitments_listing_area__summary_statistics___countryNameCell__click_box ).click( function(){

                console.log(" CLIIIIIICK! ");

                // debugging
                /// $( this ).css("border", "1px dashed red");

                this.our_display_area_num = $(this).parent().parent().parent().data( root_this_.value_data_obj__key_for_display_area_num );
                console.log("v3: my display area number is "+this.our_display_area_num );

                // TESTING - USE A MORE ABSTRACT METHOD WHEN DOING THE FINAL!
                // change the values of one click box
                root_this_.set_the__is_selected__value__of_a_clicked__clickbox__according_to_relev_click_behaviour( root_this_, this.our_display_area_num );

                /// update the visual property of that single checkbox
                root_this_.set__is_selected__clickbox__visual_appearance__according_to_data__on_ONE_display_area( root_this_, this.our_display_area_num );

            });


        }




        ////////  a function to set the 'is_selected'
        ////////	proprerty of a given display area to true/false 
        ///			depending on what the value of the clickbox was before
        ///
        this.set_the__is_selected__value__of_a_clicked__clickbox__according_to_relev_click_behaviour = function( root_this_, relev_display_area_num ){

            // fetch the relevant value - which is the inverse of the current true/false value
            this.value_to_be_applied = !root_this_.commitment_display__n_filterning_n_sorting_areas[ relev_display_area_num ].is_selected;

            console.log(">>>>  set_the__is_selected__property_of_all_or_one_display_area__to_true_or_false() - setting |"+this.value_to_be_applied+"| on display area #"+relev_display_area_num+"  ");

            // then apply it
            root_this_.commitment_display__n_filterning_n_sorting_areas[ relev_display_area_num ].is_selected = this.value_to_be_applied;

        }




        //////
        //////	- set all display areas clicboxex to a particular value
        //////		  
        //////		- the inverse value inverses the selection 
        //////         - good for "collapse/expand/select others" operations
        //////					

        this.set_display_areas_isSelected_selected_property_to_particular_value__trueFalseInverse = function( root_this_, selectionValue ){

            // hello
            console.log(">>>> set_display_areas_isSelected_selected_property_to_particular_value__trueFalseInverse() - setting the display areas' isSelected value to |"+selectionValue+"|" );

            root_this_.commitment_display__n_filterning_n_sorting_areas.map( function(d){

                // if inversing things
                if( selectionValue === root_this_.display_areas__change_all_display_areas_selection_values__value__inverse ){

                    d.is_selected = !d.is_selected;

                }
                // if setting to a particular value
                else{

                    d.is_selected = selectionValue;
                }
            });
        }




        ///////
        ///////	 - test setting / unsetting / inversing display area selection/is_selected values
        ///////
        ///////

        this.display_areas__set_all_selection_values__and__update_visual_dislpay = function( root_this_, desired_change_operation_value ){

            console.log(">>> display_areas__test_setting_all_selection_values() - setting display areas to |"+desired_change_operation_value+"|" );


            /////  update the display of the values
            root_this_.set__is_selected__clickbox__visual_appearance__according_to_data__on_ALL_display_areas( root_this_ );


            /////   print all is selected values - before changes
            root_this_.print__is_selected_value__of_all_display_areas( root_this_ );


            ////    ** use the mass set-to-value/inverse-value function to change values
            root_this_.set_display_areas_isSelected_selected_property_to_particular_value__trueFalseInverse( root_this_, desired_change_operation_value );


            ////    update the visual attributes of the checkboxes
            root_this_.set__is_selected__clickbox__visual_appearance__according_to_data__on_ALL_display_areas( root_this_ );

        }




        ///////
        ///////	 - TEST TEST TEST setting / unsetting / inversing display area selection/is_selected values
        ///////
        ///////

        this.display_areas__TEST_setting_all_selection_values = function( root_this_, desired_change_operation_value, randomise_values__trueFalse ){

            console.log(">>> display_areas__test_setting_all_selection_values() - setting display areas to |"+desired_change_operation_value+"|" );



            ////// change the is selected values to something random

            if( randomise_values__trueFalse ){

                root_this_.commitment_display__n_filterning_n_sorting_areas.map( function(d){

                    // set values randomly 
                    if( Math.random() >= 0.5 ){
                        d.is_selected = true;
                    }
                    else{
                        d.is_selected = false;
                    }

                });

            }


            /////  update the display of the values
            root_this_.set__is_selected__clickbox__visual_appearance__according_to_data__on_ALL_display_areas( root_this_ );


            /////   print all is selected values - before changes
            root_this_.print__is_selected_value__of_all_display_areas( root_this_ );


            ////    ** use the mass set-to-value/inverse-value function to change values
            root_this_.set_display_areas_isSelected_selected_property_to_particular_value__trueFalseInverse( root_this_, desired_change_operation_value );


            ////    update the visual attributes of the checkboxes
            root_this_.set__is_selected__clickbox__visual_appearance__according_to_data__on_ALL_display_areas( root_this_ );

        }





        ////////
        ////////  debug function :
        ////////	 print the is-selected values of all display areas
        ////////

        this.print__is_selected_value__of_all_display_areas = function(){

            console.log(">>>>>>>>  print__is_selected_value__of_all_display_areas() ")	;

            this.commitment_display__n_filterning_n_sorting_areas.map( function(d,i){
                console.log(" \t - display area num "+i+"/ country_name  |"+d.country_name+"| has an is_selected value of |"+d.is_selected+"|");
            });

        }





        //////
        //////	- set the appropriate markup on ONE particular
        //////		  country/display area level click/selection-box
        //////

        this.set__is_selected__clickbox__visual_appearance__according_to_data__on_ONE_display_area = function( root_this_, display_area_num ){


            // fetch the current data value
            this.set_clickbox_to_this_value = root_this_.commitment_display__n_filterning_n_sorting_areas[ display_area_num ].is_selected;


            // debug
            console.log( ">>>>> set__is_selected__clickbox__visual_appearance__according_to_data__on_ONE_display_area - setting display area #|"+display_area_num+"| ("+root_this_.commitment_display__n_filterning_n_sorting_areas[ display_area_num ].country_name+") to |"+this.set_clickbox_to_this_value+"|" );
            console.log("- - - - - >  country iso code === |"+root_this_.commitment_display__n_filterning_n_sorting_areas[ display_area_num ].country_name_as_iso_code+" | clickbox name === |"+root_this_.commitment_display__n_filterning_n_sorting_areas[ display_area_num ].display_area__commitments_listing_area__summary_statistics___countryNameCell__click_box+"|" );


            /////  select the right checkbox
            //
            this.relev_clickbox = $("."+root_this_.commitment_display__n_filterning_n_sorting_areas[ display_area_num ].country_name_as_iso_code+" ."+root_this_.commitment_display__n_filterning_n_sorting_areas[ display_area_num ].display_area__commitments_listing_area__summary_statistics___countryNameCell__click_box ) /*.css("border", "1px solid green")*/ ;


            ///// change the classes 
            //
            console.log("\t- adding or removing the following class "+root_this_.commitment_display__n_filterning_n_sorting_areas[ display_area_num ].display_area__commitments_listing_area__summary_statistics___countryNameCell__click_box__SELECTED_class );

            if( this.set_clickbox_to_this_value === true ){

                // remove the selected unselected class 

                // add the selected class
                this.relev_clickbox.addClass( root_this_.commitment_display__n_filterning_n_sorting_areas[ display_area_num ].display_area__commitments_listing_area__summary_statistics___countryNameCell__click_box__SELECTED_class );

            }else{

                // remove the selected class
                this.relev_clickbox.removeClass( root_this_.commitment_display__n_filterning_n_sorting_areas[ display_area_num ].display_area__commitments_listing_area__summary_statistics___countryNameCell__click_box__SELECTED_class );
            }

        }




        //////
        //////	- set the appropriate markup on ALL
        //////		  country/display area level click/selection-boxes
        //////

        this.set__is_selected__clickbox__visual_appearance__according_to_data__on_ALL_display_areas = function( root_this_ ){


            console.log(">>>> set__is_selected__clickbox__visual_appearance__according_to_data__on_ALL_display_areas ");


            /// loop through all the display area objects
            for( this.curr_display_object_i = 0; this.curr_display_object_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.curr_display_object_i++ ){

                // and set the given display area object
                root_this_.set__is_selected__clickbox__visual_appearance__according_to_data__on_ONE_display_area( root_this_, this.curr_display_object_i );

            }

        }





        //////	BATCH SET FLAG TO (NOT)SHOW ALL COMMITMENTS to true/false
        //////	- function that goes through all the display areas and either sets the parameter
        //////		  suggesting whether the commitments should be shown, to true/false
        //////

        this.set__all_display_areas__to_show_or_not_show_commitments = function( root_this_, show_all_commitments_trueFalse ){


            console.log( ">>>> set__all_display_areas__to_show_or_not_show_commitments() to |"+show_all_commitments_trueFalse+"|" );


            /// loop through all the display area objects
            for( this.curr_display_object_i = 0; this.curr_display_object_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.curr_display_object_i++ ){

                // and set the given display area object
                root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i ].show_this_display_areas_commitments = show_all_commitments_trueFalse;

            }

        }




        //////	BATCH SET the flag for NO-DISPLAY of DISPLAY AREAS - according to clickbox settings!
        //////

        this.set__all_display_areas__doWeDisplayTheDisplayArea_settings_according_to_clickbox = function( root_this_ ){


            console.log( ">>>> set__all_display_areas__displayDisplayArea_settings_according_to_clickbox" );


            /// loop through all the display area objects
            for( this.curr_display_object_i = 0; this.curr_display_object_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.curr_display_object_i++ ){

                // set the show_this_display_area to false if this area is selected
                // and remove the dom element for this display area!
                if( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i ].is_selected === false ){

                    // set the flag to false
                    // (when redrawing the display areas later, the flag will be useful!)
                    root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i ].show_this_display_area = false;

                    // and remove the dom element for this display area
                    $( "."+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i ].country_name_as_iso_code ).remove();
                }
                // and for the ones that are selected
                // - unselect it
                else if( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i ].is_selected === true ){

                    // set the selection to false, as we were only affecting the non-selected countries.
                    root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i ].is_selected = false;
                }


            } // end for loop



            /////  reset the clickboxes according to the data
            //		- such that the selcted marks disappear
            //
            root_this_.set__is_selected__clickbox__visual_appearance__according_to_data__on_ALL_display_areas( root_this_ );

        }





        //////   and do a reset of how the commitments are dispayed
        //			- set things back to a country-oriented display
        //
        this.reset_commitments_display_settings = function( root_this_ ){

            console.log(">>>>> reset_commitments_display_settings() ");


            ////// the country operations' area… ( relevant column's bottom area 

            /// do a version of the country/commitment centric change thingie
            root_this_.reset_display_objects_display_according_to_current_displayArea_settings( root_this_ );

        }





        ///////////////////////////////////////////////
        ////////////////////////////////   general dom manip - set up outer divs
        ////////////////////

        /////////////////////	Set up table outer div areas screen positioning
        /////////////////////
        /////////////////////	- update page element positions vis a vis scrolling
        /////////////////////	- i.e. move the table header/country listing/etc... 
        /////////////////////		so they're always within view, and adequately positioned
        /////////////////////		when the page moves
        /////////////////////	- bind event handlers to the window for this.
        /////////////////////		and unbind them when a different table/graph/view is shown... pleae

        this.bind_handlers_n__update_outer_divs_for_this_table_view_when_scrolling_etc = function( root_this_ ){

            $( document ).ready( function(){

                /* -- add handlers -- */
                $( window ).scroll( function(){

                    // look up
                    root_this_.curr_scrollTop = $(window).scrollTop();

                    // feedback
                    console.log('scrolling - curr window pos === '+root_this_.curr_scrollTop+" width a window size of "+$(window).width()+"/"+$(window).height() );


                    /// VERTICAL checking
                    /// update the positions of elements if the window has scrolled 
                    ///	so far they'd otherwise not be visible. 
                    if( root_this_.curr_scrollTop + root_this_.scrolltop_height_triggering_VERTICAL_javascript_HEADER_REPOSITIONING__offset > root_this_.table_view_main_header_area__dom_elmt__top_px_y ){

                        console.log(" \t \t - scrollTop is higher than the usual top of the table header area ");

                        // set the heights of the header/header country listing/country listing
                        //	according to the scrolltop

                        // the header
                        root_this_.table_view_main_header_area__dom_elmt.css("top", root_this_.curr_scrollTop + root_this_.scrolltop_height_triggering_VERTICAL_javascript_HEADER_REPOSITIONING__offset );

                        // the country listing - header area 
                        root_this_.table_view__countryNamesEtAl_area__headersArea__dom_elmt.css("top", root_this_.curr_scrollTop + root_this_.scrolltop_height_triggering_VERTICAL_javascript_HEADER_REPOSITIONING__offset );
                    } // and if we've not scrolled things out of view,
                    // then just let the usual stylesheets dominate
                    else{

                        // reset the set position settings
                        // let the usual stylesheet take over

                        // reset the header
                        root_this_.table_view_main_header_area__dom_elmt.css("top", "" );

                        // the country listing header area
                        root_this_.table_view__countryNamesEtAl_area__headersArea__dom_elmt.css("top", "" );
                    }


                    // 
                    root_this_.curr_scrollLeft = $( window).scrollLeft() ;
                    //
                    console.log(" scroll left === "+root_this_.curr_scrollLeft  );


                    /// HORTIZONTAL CHECKING
                    // as above, but for horizontal things
                    if( root_this_.curr_scrollLeft > 0 ){

                        // set the left loc of the country listing - in and below the header
                        //	according to the scroll left + offsets

                        // set the country listing - header area -  left
                        root_this_.table_view__countryNamesEtAl_area__headersArea__dom_elmt.css( "left", root_this_.curr_scrollLeft );
                        // and the samme for the country listing below the header
                        root_this_.table_view__countryNamesEtAl_area__belowHeadersArea__dom_elmt.css( "left", root_this_.curr_scrollLeft );



                    }  // and if we've not scrolled things out of view,
                       // then just let the usual stylesheets dominate
                    else{

                        // REset the country listing - header area -  left
                        root_this_.table_view__countryNamesEtAl_area__headersArea__dom_elmt.css( "left", "" );
                        // REset also the samme for the country listing below the header
                        root_this_.table_view__countryNamesEtAl_area__belowHeadersArea__dom_elmt.css( "left", "" );

                    }

                });

            });

        }






        ////////////////  bind handlers  :  search / reset / export data 
        ////					
        ////				i.e. bind handlers to the interactive
        ////				elements above the table area

        this.bind_handlers_to_controls_above_table__eg_search__reset_search__export_data__etc = function( root_this_ ){

            console.log(">>>>>>  bind_handlers_n__update_outer_divs_for_this_table_view_when_scrolling_etc() ");


            ////////////  the search box
            ////////////	

            /// search box : remove the text is one clicks on the search box

            this.table__search_field_txt_area__dom_ref =
                $("#"+root_this_.table_view_main_header_area__search_n_options_area__text_search_field__INPUT_AREA__id_name );

            this.table__search_field_txt_area__dom_ref.click( function(){


                /// if the search field text 
                //		(still) has the default text
                //		- then remove it
                if( $(this).val() === root_this_.table_view__text_search_box__default_search_field_text ){

                    $(this).val("");

                }else{
                    // if the search field has a text different than
                    //	the default search field text
                    //	... then just leave it.
                }

            });


            //// search box :  catch the returns/enters
            ///
            this.table__search_field_txt_area__dom_ref.keypress( function( event ){
                if ( event.which == 13 ) {
                    event.preventDefault();

                    root_this_.text_search__current_search_string = $(this).val();
                    console.log("omg omg omg ENTER PRESS!!!  --- >"+root_this_.text_search__current_search_string+"< -- waaaauw!" );


                    /// start the filtering process ith
                    //		(with the current text string)
                    root_this_.start_filtering_and_commitments_listing_process__given_user_interaction__table_edition( root_this_, true );

                }
            });


            //// search BUTTON
            //
            $( "#"+root_this_.table_view_main_header_area__search_n_options_area__text_search_field__SEARCH_ICON__id_name ).click( function(){


                root_this_.text_search__current_search_string = $( "#"+root_this_.table_view_main_header_area__search_n_options_area__text_search_field__INPUT_AREA__id_name ).val();
                console.log("omg omg omg ENTER PRESS!!!  --- >"+root_this_.text_search__current_search_string+"< -- waaaauw!" );

                /// start the filtering process ith
                //		(with the current text string)
                root_this_.start_filtering_and_commitments_listing_process__given_user_interaction__table_edition( root_this_, true );
            });








            ////////////  the reset button
            ////////////

            /// when clicked, reset things
            $( "#"+root_this_.table_view_main_header_area__search_n_options_area__reset_settings_button__id_name).click( function(){
                console.log("RESET SEARCH SETTINGS PLEASE!");
                ///////  alert( "to-do: reset search settings");

                root_this_.reset_search_filter_settings_n_interface_elemnents( root_this_ );
            });


            ////////////  the export data buttonx
            ////////////

            $("#"+root_this_.table_view_main_header_area__search_n_options_area__export_data_button__id_name ).click( function(){
                console.log("export the data please!!");
                ////  alert("SOOOON : exporting some nice data" );
                this.out_data__actual_data = root_this_.export_data_given_parameters( root_this_ ).join( root_this_.export_data__out_array__line_separator_symbol );
                this.out_data__blob = new Blob( [ this.out_data__actual_data ], { type : "text/plain;charset=utf-8"} );
                saveAs( this.out_data__blob, root_this_.export_data__filename_of_exported_data );
            });

        }





        ////////////   reset text box and text search string in curr table object
        /////


        this.reset_text_box__n__text_search_string_in_code = function( root_this_ ){

            // hellow!
            console.log(">>>> reset_text_box__n__text_search_string_in_code() ");

            /// reset the text search string
            $("#"+root_this_.table_view_main_header_area__search_n_options_area__text_search_field__INPUT_AREA__id_name ).val( root_this_.table_view__text_search_box__default_search_field_text );

            ///  reset the text value in the box
            root_this_.text_search__current_search_string = "";
        }



        ///////   set the text box according to the current search settings
        //			- if a search has been performed
        //			- this is useful for geting the relevant search text in the search box
        //			when switching back to a view where a text search has been performed

        this.set_search_box_text_according_to_search_settings = function( root_this_ ){

            console.log(">>>> set_search_box_text_according_to_search_settings - the current search meta data text is |"+root_this_.text_search__current_search_string+"| the default search text string is |"+root_this_.table_view__text_search_box__default_search_field_text+"|");

            //// If the search string variable is blank ("") then add the default
            //		search string text into the search box.
            //		If the search text variable is something other, 
            //		then set the search text box to that 
            //		
            if( root_this_.text_search__current_search_string === "" ){

                console.log("-  the meta data search string is the same as the default text search string - not changing anything ");

                $("#"+root_this_.table_view_main_header_area__search_n_options_area__text_search_field__INPUT_AREA__id_name ).val( root_this_.table_view__text_search_box__default_search_field_text );

            }else{

                // update the text search string according to the search meta data
                $("#"+root_this_.table_view_main_header_area__search_n_options_area__text_search_field__INPUT_AREA__id_name ).val( root_this_.text_search__current_search_string );
            }

        }










        /////////////////////	look up the left x of each column description object
        /////////////////////		( so we're in a better position to position them accurately )
        /////////////////////	- make sure to find the left x depending on which area ( country listing vs regular header)
        /////////////////////	the column is in


        this.look_up_column_header_left_x_positions = function( root_this_ ){

            console.log(" >>>>>  look_up_column_header_left_x_positions() ");


            ///// for the country listing header column
            //			- insert relevant columns
            root_this_.country_listing_areas__hold_the_following_columns.map( function(d, i){

                /// look it up…
                root_this_.look_up_the_left_x__and__width_of_the_tableCellTextArea__of_this_col_description_obj_num( root_this_, i, d );

            } );

            ///// for the country listing header column
            //			- insert relevant columns
            root_this_.commitments_listing_area__holds_the_following_columns.map( function(d, i){

                /// look it up…
                root_this_.look_up_the_left_x__and__width_of_the_tableCellTextArea__of_this_col_description_obj_num( root_this_, i, d );

            } );

        } // the end






        ///////////////  look up the left values of an individual col descrption objects
        /////	


        this.look_up_the_left_x__and__width_of_the_tableCellTextArea__of_this_col_description_obj_num = function( root_this_, curr_obj_num_in_array, curr_col_descr_obj_i_in_col_description_objects_array ){

            // welcome
            ////////   console.log(">>>>> look_up_the_left_x__and__width_of_the_tableCellTextArea__of_this_col_description_obj_num() - working on a) curr checking header col array num "+curr_obj_num_in_array+" AND col descr object num "+curr_col_descr_obj_i_in_col_description_objects_array );
            console.log(">>>>> look_up_the_left_x__and__width_of_the_tableCellTextArea__of_this_col_description_obj_num() " );


            //////// fetch the left x

            // if it's the first element, then the left is, well, zero
            if( curr_obj_num_in_array === 0 ){
                root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_descr_obj_i_in_col_description_objects_array ].this_col_lookedUp_left_lox__px_x = 0;
            }
            else{

                /// if it's a different object, the current left x is a sum of
                //		- the prev pos left x + prev obj width

                /// do different things depending on whether the previous column is expanded or not
                if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_descr_obj_i_in_col_description_objects_array-1 ].is_this_column_expanded ){
                    //
                    // if the column is expanded, then use the expanded value
                    root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_descr_obj_i_in_col_description_objects_array ].this_col_lookedUp_left_lox__px_x = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_descr_obj_i_in_col_description_objects_array-1 ].this_col_lookedUp_left_lox__px_x + root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_descr_obj_i_in_col_description_objects_array-1 ].whole_column_EXPANDED_width__in_px_x;
                } else{
                    // if the previous column is compressed, then use the compressed width value please
                    //
                    root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_descr_obj_i_in_col_description_objects_array ].this_col_lookedUp_left_lox__px_x = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_descr_obj_i_in_col_description_objects_array-1 ].this_col_lookedUp_left_lox__px_x + root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_descr_obj_i_in_col_description_objects_array-1 ].whole_column_compressed_width__in_px_x;
                }
            }



            ////////  find the regular width, depending on whether the element is expanded or not
            //				this is useful for setting the width of columns and cells quickly
            if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_descr_obj_i_in_col_description_objects_array ].is_this_column_expanded ){

                root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_descr_obj_i_in_col_description_objects_array ].this_col_lookedUp__regular_width__given_if_its_expandedOrCompressed = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_descr_obj_i_in_col_description_objects_array ].whole_column_EXPANDED_width__in_px_x ;
            }
            // and if it's compressed 
            else{

                root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_descr_obj_i_in_col_description_objects_array ].this_col_lookedUp__regular_width__given_if_its_expandedOrCompressed = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_descr_obj_i_in_col_description_objects_array ].whole_column_compressed_width__in_px_x ;
            }



            //////  find the width of the table cell text area

            // if we're looking it up
            if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_descr_obj_i_in_col_description_objects_array ].look_up_width_for_this_col_table_cell_text_area_width == true ){


                /// fetch the current column width
                this.curr_col_width = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_descr_obj_i_in_col_description_objects_array ].whole_column_EXPANDED_width__in_px_x ;

                /// look up the width 
                root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_descr_obj_i_in_col_description_objects_array ].this_col_table_cell_text_area_width__looked_up = this.curr_col_width - ( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_descr_obj_i_in_col_description_objects_array ].look_up_width_for_this_col_table_cell_text_area_width__left_h_margin + root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_descr_obj_i_in_col_description_objects_array ].look_up_width_for_this_col_table_cell_text_area_width__right_h_margin );

            }
            // just set it to the default value
            else{

                root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_descr_obj_i_in_col_description_objects_array ].this_col_table_cell_text_area_width__looked_up = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_descr_obj_i_in_col_description_objects_array ].NOT_looked_up__table_cell_text_area_width;

            }

        }







        ///////////////
        ///////////////  print the left x and width values of the col description objects
        /////					... please

        this.print_all_the_left_n_width_values_of_the_col_description_objects = function( root_this_ ){

            //
            console.log(">>>> print_all_the_left_n_width_values_of_the_col_description_objects () ");

            root_this_.column_information_objects_listed_in_the_order_of_the_columns.map( function(d, i){
                // output
                console.log("#"+i+" left :"+d.this_col_lookedUp_left_lox__px_x+" / width "+d.whole_column_EXPANDED_width__in_px_x );
            });
            //
        }





        /////////////////////	- set the left loc of header objects
        /////////////////////		-- according to the looked up data

        this.set_left_x_loc__of_header_column_objects = function( this_ ){

            console.log(" >>>>  set_left_x_loc__of_header_column_objects() ");

            //
            for( this.curr_column_description_obj_i = 0; this.curr_column_description_obj_i < this.column_information_objects_listed_in_the_order_of_the_columns.length; this.curr_column_description_obj_i++ ){

                // select the relevant entity
                this.curr_col_descr_obj__outer_div = $( "#"+this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].column_header_outer_containing_div_id_name );

                // find the relevant looked up x pos
                this.curr_col_obj_left_x_post = this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].this_col_lookedUp_left_lox__px_x ;

                /// feedback
                ///////  console.log(" \t\t- working on col obj #"+this.curr_column_description_obj_i+" which is "+this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].column_title__text+" with a left pos of "+this.curr_col_obj_left_x_post );

                // set the relevant x pos
                this.curr_col_descr_obj__outer_div.css( {
                    position: "absolute",
                    left:  this.curr_col_obj_left_x_post,
                    top: "0px"
                });
            }

        }


        //////////////  - set the widths of the column objects please
        /////////////


        this.set_the_width__of_header_column_objects = function( root_this_ ){

            console.log(" >>>>  set_left_x_loc__of_header_column_objects() ");

            //
            for( this.curr_column_description_obj_i = 0; this.curr_column_description_obj_i < this.column_information_objects_listed_in_the_order_of_the_columns.length; this.curr_column_description_obj_i++ ){

                //// select 

                // select the relevant entity
                this.curr_col_descr_obj__outer_div = $( "#"+this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].column_header_outer_containing_div_id_name );

                // and the inner upper part
                this.curr_col_descr_obj__inner__upper_div = this.curr_col_descr_obj__outer_div.find( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].column__top_column_class_name );

                // and the inner lower part
                this.curr_col_descr_obj__inner__lower_div = this.curr_col_descr_obj__outer_div.find( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].column__bottom_column_class_name );



                //// find the relevant widths 
                //		- 1 width for the regular width ( this applies to the lower header div )
                //		- 1 normal_width + upper header diagonals ( this applies to the outer div and the upper div )

                // normal width 
                this.curr_col_obj_width__WITHOUT_extra_width_to_accommodate_upper_header_diagonals ;
                // extra wide version 
                this.curr_col_obj_width__WITH_extra_width_to_accommodate_upper_header_diagonals ;


                // fix the width depending on whether the column is compressed or expanded
                if( this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].is_this_column_expanded ){

                    // use the expanded width value
                    this.curr_col_obj_width__WITHOUT_extra_width_to_accommodate_upper_header_diagonals = this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].whole_column_EXPANDED_width__in_px_x ;

                    this.curr_col_obj_width__WITH_extra_width_to_accommodate_upper_header_diagonals = this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].whole_column_EXPANDED_width__in_px_x + this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].extra_width_for_upper_header_diagonal_bits__also_for_outer_column_div ;
                }
                // and if it's compressed
                else{

                    // use the compressed width value please
                    this.curr_col_obj_width__WITHOUT_extra_width_to_accommodate_upper_header_diagonals = this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].whole_column_compressed_width__in_px_x ;

                    this.curr_col_obj_width__WITH_extra_width_to_accommodate_upper_header_diagonals = this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].whole_column_compressed_width__in_px_x + this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].extra_width_for_upper_header_diagonal_bits__also_for_outer_column_div ;
                }


                //// and the extra wide version

                /// feedback
                ///////  console.log(" \t\t- working on col obj #"+this.curr_column_description_obj_i+" which is "+this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].column_title__text+" with a wdith of "+this.curr_col_obj_width__WITHOUT_extra_width_to_accommodate_upper_header_diagonals+" / && wider top version width : "+this.curr_col_obj_width__WITH_extra_width_to_accommodate_upper_header_diagonals+" --- original extra width variable :> "+this.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_column_description_obj_i ].extra_width_for_upper_header_diagonal_bits__also_for_outer_column_div  );



                //// set the relevant x pos
                this.curr_col_descr_obj__outer_div.css( {
                    width : this.curr_col_obj_width__WITHOUT_extra_width_to_accommodate_upper_header_diagonals,
                });

                /// do some test settings for the upper/lower header divs
                // upper 
                ///////// this.curr_col_descr_obj__inner__upper_div.css("width", this.curr_col_obj_width__WITH_extra_width_to_accommodate_upper_header_diagonals);
                this.curr_col_descr_obj__inner__upper_div.css("width", this.curr_col_obj_width__WITH_extra_width_to_accommodate_upper_header_diagonals );
                // lower
                this.curr_col_descr_obj__inner__lower_div.css("width", this.curr_col_obj_width__WITHOUT_extra_width_to_accommodate_upper_header_diagonals);

            }

        }




        //////////////  - update the left loc x and the width of the column header objects
        /////////////


        this.update_the_left_loc_x_and_width_of_col_header_objects = function( root_this_ ){

            console.log(">>>> update_the_left_loc_x_and_width_of_col_header_objects() ");

            // find the left x positions
            this.look_up_column_header_left_x_positions( this );

            // set the left x positions
            this.set_left_x_loc__of_header_column_objects( this );

            // and the width
            this.set_the_width__of_header_column_objects( this );

        }





        /////////////////////	Set up column header objects
        /////////////////////
        /////////////////////	- in two different divs - eg. the country listing header area + the regular header areas
        /////////////////////					

        this.set_up_column_header_objs__in_header = function( root_this_ ){

            console.log( ">>>>>> - set_up_column_header_objs__in_header()" );

            ///// for the country listing header column
            //			- insert relevant columns
            this.country_listing_areas__hold_the_following_columns.map( function(d){

                // insert the outer column
                root_this_.table_view__countryNamesEtAl_area__headersArea__columnHeader__dom_elmt.append("<div  id='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header_outer_containing_div_id_name+"' class='"+root_this_.column_header_outer_object_general_class__class_name+"'></div>");




                /////// make the various svg objects in the column header
                //			- including small/diagonal/background lines + text

                ///// make the small vertical line

                //// fetch the width
                this.curr_column_width = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].whole_column_EXPANDED_width__in_px_x;

                // to get the right width - check if the column is compressed
                if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].is_this_column_expanded === false ){
                    this.curr_column_width = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].whole_column_compressed_width__in_px_x;
                }

                /// fetch the top of the line ( we need the height of the enclosing elements first
                this.small_line_height_start_y = root_this_.column_title_area__height - root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].upper_column_header_area__small_vertical_line_height ;
                this.small_line_height_end_y = root_this_.column_title_area__height ;
                //
                ///////  console.log(" column_title_area__height > "+root_this_.column_title_area__height+" start pos === "+this.small_line_height_start_y +" /  end pos === "+this.small_line_height_end_y );


                //// construct the svg small vertical line on the right ( in text form )
                ////
                this.right_small_vertical_line__svg_txt = "<line class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__top__small_vertical_line_class_name+"' x1='"+this.curr_column_width+"' y1='"+this.small_line_height_start_y+"' x2='"+this.curr_column_width+"' y2='"+root_this_.column_title_area__height+"'   ) />"


                //// construct the diagonal line, if needed
                ////
                this.diagonal_line__svg_txt = "";

                if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].this_column_has_diagonal_line__on_top_column === true ){

                    this.diagonal_line__svg_txt= "<line class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__top__small_vertical_line_class_name+"'  x1='"+this.curr_column_width+"' y1='"+this.small_line_height_start_y+"' x2='"+(this.curr_column_width + root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].this_column_diagonal_diagonal_dist__for_diagonal_lines )+"' y2='"+( this.small_line_height_start_y - root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].this_column_diagonal_diagonal_dist__for_diagonal_lines)+"'   />"
                }


                /////  construct the column heading svg text object...txt
                /////
                ///////////    this.text_column_heading__svg = "<text class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title__class_name+"'  transform='translate( "+( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title_name__offset_x )+", "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title_name__offset_y+"), rotate(-45)'  x='"+0+"' y='"+0+"' >"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title__text+"</text>";

                ////// column header title

                // where it'll end up 
                this.text_column_heading__svg = "";

                // for the single line version 
                if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title_name__use_multiline_text_layout === false ){

                    this.text_column_heading__svg = "<text class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title__class_name+"'  transform='translate( "+( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title_name__offset_x )+", "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title_name__offset_y+"), rotate(-45)'  x='"+0+"' y='"+0+"' >"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title__text+"</text>";
                }
                //// for the MULTILINE version
                //
                // if we're using an alterantive offset…
                else if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title_name__use_multiline_text_layout === true ){


                    //
                    /////////  console.log(">>> found alternative heading loc x offset is |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].alternate__column_title_name__offset_x+"| on column |"+d+"|");


                    /// figure out the initial col title location
                    // 
                    this.col_title__loc_x = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].alternate__column_title_name__offset_x ;
                    this.col_title__loc_y = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].alternate__column_title_name__offset_y ;

                    // go through the array of text strings for this
                    // 		column heading, and insert them
                    for( this.curr_loc_title_string = 0; this.curr_loc_title_string < root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title__text__multiple_line.length; this.curr_loc_title_string++ ){

                        console.log(">>>> multi-line header string : working on part "+this.curr_loc_title_string+"/"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title__text.length );

                        /// fix the opacity setting - for the first title line
                        // placeholder value
                        this.curr_line_opacity_val = 1;
                        // if this is the first line
                        if( this.curr_loc_title_string === 0 ){
                            // assign it to the col info obj first line transparency varaible
                            this.curr_line_opacity_val = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].first_line_opacity_val ;
                        }

                        // generate the svg
                        this.text_column_heading__svg += "<text class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title__class_name+"'  style='opacity:"+this.curr_line_opacity_val+"' transform='translate( "+this.col_title__loc_x+", "+this.col_title__loc_y+"), rotate(-45)'  x='"+0+"' y='"+0+"' >"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title__text__multiple_line[ this.curr_loc_title_string ]+"</text>";


                        //// and… for the next loop…  update the title loc
                        this.col_title__loc_x += root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].multi_line_column_title__column_title_name__line_spacing_horiz;
                    }

                }



                ////  construct the path used for mouseovers
                this.background_mouse_over_path = "<path fill=rgb(255,255,235) stroke=none opacity=0.1   d='";

                // add the first position
                this.background_mouse_over_path += "M"+0+" "+root_this_.column_title_area__height;

                // add the height of the left small vertical line
                this.background_mouse_over_path += " L"+0+" "+this.small_line_height_start_y;

                // add the left end of the diagonal line
                this.background_mouse_over_path += " L"+( 0+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].this_column_diagonal_diagonal_dist__for_mouseover_area )+" "+( this.small_line_height_start_y - root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].this_column_diagonal_diagonal_dist__for_mouseover_area  );

                // add the right end of the diagonal line
                this.background_mouse_over_path += " L"+( this.curr_column_width+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].this_column_diagonal_diagonal_dist__for_mouseover_area )+" "+( this.small_line_height_start_y - root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].this_column_diagonal_diagonal_dist__for_mouseover_area  );

                // add the top of the small vertical line on the right
                this.background_mouse_over_path += " L"+this.curr_column_width+" "+this.small_line_height_start_y;

                // add the bottom of the small vertical line on the right
                this.background_mouse_over_path += " L"+this.curr_column_width+" "+root_this_.column_title_area__height;

                // close path >>> += " Z"
                this.background_mouse_over_path += "' Z";

                // and the END of the svg object
                this.background_mouse_over_path += " />";





                ///////  insert/instantiate the top column object as an svg

                $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header_outer_containing_div_id_name ).append("<svg  class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column__top_column_class_name+"'>  "+this.background_mouse_over_path+" "+this.right_small_vertical_line__svg_txt+" "+this.diagonal_line__svg_txt+" "+text_column_heading__svg+" </svg>");

                // select it
                this.curr_top_column_area = $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header_outer_containing_div_id_name ).find("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column__top_column_class_name );


                // test modify it 
                ////  this.curr_top_column_area.css("border", "1px solid green");

                // add a small vertical line on the right end of this 
                ////// this.curr_top_column_area.append( "<text x='20' y='20' fill='red'>texttexttext</text>" );




                ////////  set up the bottom column object
                //
                $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header_outer_containing_div_id_name ).append("<div class="+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column__bottom_column_class_name+"></div>");



                //	 Header content for a country listing column 
                //
                if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_class_name === "country_name" ){

                    /// select the current bottom area please
                    this.curr_bottom_area = $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header_outer_containing_div_id_name ).find( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column__bottom_column_class_name );



                    //// set up the sort area please

                    //// append the outer sort area inside the bottom column area
                    this.curr_bottom_area.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_outer_area_class_name+"'><div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__text_area__unselected+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__text_area+"' >Sort</div></div>");

                    // select it
                    this.curr_sort_area = this.curr_bottom_area.find("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_outer_area_class_name ); /*.css( "border", "1px solid red"); */

                    // add the column number data
                    this.curr_sort_area.data( root_this_.value_data_obj__key_for_colmn_num, d );


                    /// append the up/down arrows 
                    // up
                    this.curr_sort_area.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__sort_up_button__unselected+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__sort_up_button+"'><div>");
                    // down
                    this.curr_sort_area.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__sort_down_button__unselected+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__sort_down_button+"'><div>");

                    // add the bottom line
                    this.curr_sort_area.append('<div class="'+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__horizontal_line_area__unselected+' '+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__horizontal_line_area+'"></div>');


                    /// COUNTRY OPERATIONS MENU - do we have one?
                    //
                    if( root_this_.do_we_have_a_country_operations_menu === true ){
                        //// set up the country listing menu
                        root_this_.set_up_country_operations_menu( root_this_, this.curr_bottom_area );
                    }

                }


                //	 Header content for a commitment title listing column 
                //
                if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_class_name === "commitment_title_text" ){

                    this.curr_bottom_area = $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header_outer_containing_div_id_name ).find( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column__bottom_column_class_name );



                    //// set up the sort area please

                    //// append the outer sort area inside the bottom column area
                    this.curr_bottom_area.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_outer_area_class_name+"'><div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__text_area__unselected+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__text_area+"' >Sort</div></div>");

                    // select it
                    this.curr_sort_area = this.curr_bottom_area.find("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_outer_area_class_name ); /*.css( "border", "1px solid red"); */

                    // add the column number data
                    this.curr_sort_area.data( root_this_.value_data_obj__key_for_colmn_num, d );


                    /// append the up/down arrows 
                    // up
                    this.curr_sort_area.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__sort_up_button__unselected+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__sort_up_button+"'><div>");
                    // down
                    this.curr_sort_area.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__sort_down_button__unselected+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__sort_down_button+"'><div>");

                    // add the bottom line
                    this.curr_sort_area.append('<div class="'+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__horizontal_line_area__unselected+' '+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__horizontal_line_area+'"></div>');

                }








                //   Header content for basic value columns
                //
                // if it's a valid column type for listing values
                if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_type === "basic_filter_column" ){


                    // set up the values area inside the bottom header area
                    $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header_outer_containing_div_id_name ).find( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column__bottom_column_class_name ).append( "<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__outer_div_class_name+"'></div>" );


                    // select the current outer values area
                    this.curr_outer_values_area = $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header_outer_containing_div_id_name ).find( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column__bottom_column_class_name ).find( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__outer_div_class_name );

                    /// modify it to show it's been selected
                    ///////   this.curr_outer_values_area.css("border", "1px solid green");



                    /* -- check if this sort area insertion is implemented the same way as in 
                     the country listing section -- 

                     ///// append + set up the SORT area
                     ///

                     //// append the sort area inside the values container
                     this.curr_outer_values_area.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_outer_area_class_name+"'><div class="+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__text_area__unselected+">Sort</div></div>");

                     // select it
                     this.curr_sort_area = this.curr_outer_values_area.find("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_outer_area_class_name );

                     /// append the up/down arrows 
                     // up
                     this.curr_sort_area.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__sort_up_button__unselected+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__sort_up_button+"'><div>");
                     // down
                     this.curr_sort_area.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__sort_down_button__unselected+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__sort_down_button+"'><div>");

                     // the line at the bottom of the sort area
                     this.curr_sort_area.append( '<svg class="'+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__horizontal_line_area__unselected+' '+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__horizontal_line_area+'" height="3" width="'+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].whole_column_EXPANDED_width__in_px_x+'">   <line    x1="'+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].sort_area_line__distance_from_the_left+'" y1="0" x2="'+( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].whole_column_EXPANDED_width__in_px_x - root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].sort_area_line___distance_from_the_right)+'" y2="0" />  </svg>' );

                     */



                    //// 	loop through + set up various values
                    /// append the various values, inside the values container 
                    root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].header__value_choice_categories__listed_in_order_of_appearance.map( function( d2 ){

                        // feedback
                        ///////  console.log(" d(2) === "+d );

                        // add a value
                        this.curr_outer_values_area.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__general_value_outer_area+"'></div>");

                        /// select this the current value area
                        this.curr_individual_value_cell = this.curr_outer_values_area.find( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__general_value_outer_area ).filter(":last");

                        /// modify it to show it's been selected
                        ///////  this.curr_individual_value_cell.css("border", "1px solid green");

                        // add a text area 
                        this.curr_individual_value_cell.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__individual_value__text_area+" "+d2.header__class_name_selected+" ''>"+d2.header_category_text+"</div>");


                        //// add interactive value choice areas 

                        // add the cross mark area
                        this.curr_individual_value_cell.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__individual_value__cross_mark+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__individual_value__cross_mark_UNselected+"'></div>");

                        // add the tick mark area
                        this.curr_individual_value_cell.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__individual_value__tick_mark+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__individual_value__tick_mark_selected+"'></div>");

                    }); // end insert values



                }





            }); // end country listing area header 






            ///// and for the regular column area 
            //			- insert relevant columns
            this.commitments_listing_area__holds_the_following_columns.map( function(d){


                //  make the top header object/area/div
                root_this_.table_view_main_header_area__column_headers_area__dom_elmt.append("<div  id='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header_outer_containing_div_id_name+"' class='"+root_this_.column_header_outer_object_general_class__class_name+"'></div>");


                /////// make the various svg objects in the column header
                //			- including small/diagonal/background lines + text

                ///// make the small vertical line

                //// fetch the width
                this.curr_column_width = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].whole_column_EXPANDED_width__in_px_x;

                // to get the right width - check if the column is compressed
                if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].is_this_column_expanded === false ){
                    this.curr_column_width = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].whole_column_compressed_width__in_px_x;
                }

                /// fetch the top of the line ( we need the height of the enclosing elements first
                this.small_line_height_start_y = root_this_.column_title_area__height - root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].upper_column_header_area__small_vertical_line_height ;
                this.small_line_height_end_y = root_this_.column_title_area__height ;
                //
                ///////  console.log(" column_title_area__height > "+root_this_.column_title_area__height+" start pos === "+this.small_line_height_start_y +" /  end pos === "+this.small_line_height_end_y );


                //// construct the svg small vertical line on the right ( in text form )
                ////
                this.right_small_vertical_line__svg_txt = "<line class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__top__small_vertical_line_class_name+"' x1='"+this.curr_column_width+"' y1='"+this.small_line_height_start_y+"' x2='"+this.curr_column_width+"' y2='"+root_this_.column_title_area__height+"' stroke=red) />"


                //// construct the diagonal line, if needed
                ////
                this.diagonal_line__svg_txt = "";

                if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].this_column_has_diagonal_line__on_top_column === true ){

                    this.diagonal_line__svg_txt= "<line class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__top__small_vertical_line_class_name+"'  x1='"+this.curr_column_width+"' y1='"+this.small_line_height_start_y+"' x2='"+(this.curr_column_width + root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].this_column_diagonal_diagonal_dist__for_diagonal_lines )+"' y2='"+( this.small_line_height_start_y - root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].this_column_diagonal_diagonal_dist__for_diagonal_lines)+"' stroke=red />"
                }


                /////  construct the column heading svg text object...txt
                /////
                ////  this.text_column_heading__svg = "<text class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title__class_name+"'  transform='translate( "+( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title_name__offset_x )+", "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title_name__offset_y+"), rotate(-45)'  x='"+0+"' y='"+0+"' >"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title__text+"</text>";

                ////// column header title

                // where it'll end up 
                this.text_column_heading__svg = "";

                // for the single line version 
                if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title_name__use_multiline_text_layout === false ){

                    this.text_column_heading__svg = "<text class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title__class_name+"'  transform='translate( "+( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title_name__offset_x )+", "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title_name__offset_y+"), rotate(-45)'  x='"+0+"' y='"+0+"' >"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title__text+"</text>";
                }
                //// for the MULTILINE version
                //
                // if we're using an alterantive offset…
                else if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title_name__use_multiline_text_layout === true ){


                    /// figure out the initial col title location
                    // 
                    this.col_title__loc_x = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].alternate__column_title_name__offset_x ;
                    this.col_title__loc_y = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].alternate__column_title_name__offset_y ;

                    // go through the array of text strings for this
                    // 		column heading, and insert them
                    for( this.curr_loc_title_string = 0; this.curr_loc_title_string < root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title__text__multiple_line.length; this.curr_loc_title_string++ ){

                        console.log(">>>> multi-line header string : working on part "+this.curr_loc_title_string+"/"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title__text.length );


                        /// fix the opacity setting for the first title line
                        // placeholder value
                        this.curr_line_opacity_val = 1;
                        // if this is the first line
                        if( this.curr_loc_title_string === 0 ){
                            // assign it to the col info obj first line transparency varaible
                            this.curr_line_opacity_val = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].first_line_opacity_val ;
                        }

                        // generate the svg
                        this.text_column_heading__svg += "<text class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title__class_name+"'  style='opacity:"+this.curr_line_opacity_val+"' transform='translate( "+this.col_title__loc_x+", "+this.col_title__loc_y+"), rotate(-45)'  x='"+0+"' y='"+0+"' >"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_title__text__multiple_line[ this.curr_loc_title_string ]+"</text>";


                        //// and… for the next loop…  update the title loc
                        this.col_title__loc_x += root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].multi_line_column_title__column_title_name__line_spacing_horiz;
                    }

                }





                ////  construct the path used for mouseovers
                this.background_mouse_over_path = "<path fill=rgb(255,255,235) stroke=none opacity=0.1   d='";

                // add the first position
                this.background_mouse_over_path += "M"+0+" "+root_this_.column_title_area__height;

                // add the height of the left small vertical line
                this.background_mouse_over_path += " L"+0+" "+this.small_line_height_start_y;

                // add the left end of the diagonal line
                this.background_mouse_over_path += " L"+( 0+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].this_column_diagonal_diagonal_dist__for_mouseover_area )+" "+( this.small_line_height_start_y - root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].this_column_diagonal_diagonal_dist__for_mouseover_area  );

                // add the right end of the diagonal line
                this.background_mouse_over_path += " L"+( this.curr_column_width+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].this_column_diagonal_diagonal_dist__for_mouseover_area )+" "+( this.small_line_height_start_y - root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].this_column_diagonal_diagonal_dist__for_mouseover_area  );

                // add the top of the small vertical line on the right
                this.background_mouse_over_path += " L"+this.curr_column_width+" "+this.small_line_height_start_y;

                // add the bottom of the small vertical line on the right
                this.background_mouse_over_path += " L"+this.curr_column_width+" "+root_this_.column_title_area__height;

                // close path >>> += " Z"
                this.background_mouse_over_path += "' Z";

                // and the END of the svg object
                this.background_mouse_over_path += " />";






                ////  add the svg elements generated above
                //  		to the top header object
                $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header_outer_containing_div_id_name ).append("<svg  class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column__top_column_class_name+"'>  "+this.background_mouse_over_path+" "+this.right_small_vertical_line__svg_txt+" "+this.diagonal_line__svg_txt+" "+text_column_heading__svg+" </svg>");

                // select it
                this.curr_top_column_area = $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header_outer_containing_div_id_name ).find("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column__top_column_class_name );


                // test modify it 
                ////  this.curr_top_column_area.css("border", "1px solid green");

                // add a small vertical line on the right end of this 
                ////// this.curr_top_column_area.append( "<text x='20' y='20' fill='red'>texttexttext</text>" );




                ////  add the bottom header block
                //
                $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header_outer_containing_div_id_name ).append("<div class="+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column__bottom_column_class_name+"></div>");





                //	 Header content for a fill commitment text listing column 
                //
                if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_class_name === "full_commitment_text" ){

                    this.curr_bottom_area = $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header_outer_containing_div_id_name ).find( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column__bottom_column_class_name );



                    //// set up the sort area please

                    //// append the outer sort area inside the bottom column area
                    this.curr_bottom_area.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_outer_area_class_name+"'><div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__text_area__unselected+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__text_area+"' >Sort</div></div>");

                    // select it
                    this.curr_sort_area = this.curr_bottom_area.find("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_outer_area_class_name ); /*.css( "border", "1px solid red"); */

                    // add the column number data
                    this.curr_sort_area.data( root_this_.value_data_obj__key_for_colmn_num, d );


                    /// append the up/down arrows 
                    // up
                    this.curr_sort_area.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__sort_up_button__unselected+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__sort_up_button+"'><div>");
                    // down
                    this.curr_sort_area.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__sort_down_button__unselected+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__sort_down_button+"'><div>");

                    // add the bottom line
                    this.curr_sort_area.append('<div class="'+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__horizontal_line_area__unselected+' '+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__horizontal_line_area+'"></div>');

                }



                //	 Header content for the tags column 
                //
                if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_class_name === "tags" ){

                    this.curr_bottom_area = $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header_outer_containing_div_id_name ).find( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column__bottom_column_class_name );


                    ////  add the drop down menu part
                    this.curr_bottom_area.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].tags__drop_down_menu_area__general_outer_div__class_name+"'><div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].tags__top_of_drop_down_menu__outer_div__class_name+"'>Select tags</div><div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].tags__dropping_down_part_of_drop_down_menu__outer_div__class_name+"'><div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].tags__dropping_down_part_of_drop_down_menu__inner__select_none__class_name+"'>Select none</div><div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].tags__dropping_down_part_of_drop_down_menu__inner_column_div__class_name+"'></div><div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].tags__dropping_down_part_of_drop_down_menu__inner_column_div__class_name+"'></div><div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].tags__dropping_down_part_of_drop_down_menu__inner_column_div__class_name+"'></div></div><div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].tags_drop_down_menu__invisible_background_div+"' ></div></div>");


                    //  set up the tags please
                    root_this_.set_up_tags_in_tags_drop_down_menu( root_this_, this.curr_bottom_area, root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].tags__dropping_down_part_of_drop_down_menu__inner_column_div__class_name, root_this_.column_information_objects_listed_in_the_order_of_the_columns[4] );


                    ////  add the tags listing area
                    this.curr_bottom_area.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].tags__tags_listing_area__outer_div+"'></div>" );

                }





                // if it's a valid column type for listing values
                if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_type === "basic_filter_column" ){




                    // set up the values area inside the bottom header area
                    $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header_outer_containing_div_id_name ).find( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column__bottom_column_class_name ).append( "<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__outer_div_class_name+"'></div>" );


                    // select the current outer values area
                    this.curr_outer_values_area = $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header_outer_containing_div_id_name ).find( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column__bottom_column_class_name ).find( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__outer_div_class_name );

                    /// modify it to show it's been selected
                    ///////   this.curr_outer_values_area.css("border", "1px solid green");



                    ///// append + set up the sort area

                    //// append the sort area inside the values container
                    this.curr_outer_values_area.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_outer_area_class_name+"'><div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__text_area__unselected+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__text_area+"' >Sort</div></div>");

                    // select it
                    this.curr_sort_area = this.curr_outer_values_area.find("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_outer_area_class_name );

                    // add the column number data
                    this.curr_sort_area.data( root_this_.value_data_obj__key_for_colmn_num, d );

                    /// append the up/down arrows 
                    // up
                    this.curr_sort_area.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__sort_up_button__unselected+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__sort_up_button+"'><div>");
                    // down
                    this.curr_sort_area.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__sort_down_button__unselected+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__sort_down_button+"'><div>");

                    // the line at the bottom of the sort area
                    /// REMOVE THIS PLEASE WHEN FINISHED WITH THE LINE BELOW
                    /////////////   this.curr_sort_area.append( '<svg class="'+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__horizontal_line_area__unselected+' '+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__horizontal_line_area+'" height="3" width="'+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].whole_column_EXPANDED_width__in_px_x+'">   <line x1="'+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].sort_area_line__distance_from_the_left+'" y1="0" x2="'+( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].whole_column_EXPANDED_width__in_px_x - root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].sort_area_line___distance_from_the_right)+'" y2="0" />  </svg>' );

                    // add the bottom line
                    this.curr_sort_area.append('<div class="'+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__horizontal_line_area__unselected+' '+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__sort_area__horizontal_line_area+'"></div>');




                    //// 	loop through various values
                    /// append the various values, inside the values container 
                    root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].header__value_choice_categories__listed_in_order_of_appearance.map( function( d2, i2 ){

                        // feedback
                        ///////  console.log(" d(2) === "+d );

                        // add a value
                        this.curr_outer_values_area.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__general_value_outer_area+"'></div>");

                        /// select this the current value area
                        this.curr_individual_value_cell = this.curr_outer_values_area.find( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__general_value_outer_area ).filter(":last");

                        /// modify it to show it's been selected
                        ///////  this.curr_individual_value_cell.css("border", "1px solid green");

                        /// add a data values to it
                        //		to help it being identified when clicking the tick/cross marks
                        //////////// this.curr_individual_value_cell.data( "col_num", d );
                        //////////// this.curr_individual_value_cell.data( "value_num", i2 );
                        this.curr_individual_value_cell.data( root_this_.value_data_obj__key_for_colmn_num, d );
                        this.curr_individual_value_cell.data( root_this_.value_data_obj__key_for_value_num, i2 );


                        // add a text area 
                        this.curr_individual_value_cell.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__individual_value__text_area+" "+d2.header__class_name_selected+" ''>"+d2.header_category_text+"</div>");


                        //// add interactive value choice areas 

                        // add the cross mark area
                        this.curr_individual_value_cell.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__individual_value__cross_mark+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__individual_value__cross_mark_UNselected+"'></div>");

                        // add the tick mark area
                        this.curr_individual_value_cell.append("<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__individual_value__tick_mark+" "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].column_header__bottom__values_area__individual_value__tick_mark_selected+"'></div>");

                    }); // end insert values



                }


            }); // end main header area listing



            //// now bind some nice functions to the tick/cross marks
            //		- to enable the filtering interaction
            root_this_.bind_relev_interactive_functions_to_all_tick_n_cross_marks( root_this_ );

            /// and bind things to the sort buttons too please 
            root_this_.bind_relev_interactive_functions_to_all_sort_up_n_down_arrows( root_this_ );


            // bind location data and the handlers for the mouseovers on the headers
            //
            this.set_up_location_data_binding_and_event_handler__for__MOUSEOVERS__of__COLUMN_HEADERS( root_this_ );

        }






        /////////////////////	Values interaction
        /////////////////////
        /////////////////////	bind functions to all the tick/cross marks
        /////////////////////	


        this.bind_relev_interactive_functions_to_all_tick_n_cross_marks = function( root_this_ ){

            console.log(">>>>>  bind_relev_interactive_functions_to_all_tick_n_cross_marks() ");



            ////   attach a click event to the tick marks
            //		( the tick class name is fetched from 
            //			the first display area object,
            //			and hopefully it's the same class name for the others too)
            $("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].column_header__bottom__values_area__individual_value__tick_mark ).click( function(){

                // fetch the embedded data in the values outer area
                this.curr_column_num = $( this ).parent().data( root_this_.value_data_obj__key_for_colmn_num );
                this.curr_value_num = $( this ).parent().data( root_this_.value_data_obj__key_for_value_num );

                //  feedback
                console.log( " \t\t - just clicked a tick mark! - the data is "+this.curr_column_num+", "+this.curr_value_num );

                // just to make that flag a bit more explicit
                this.set_the_value_toTrueFalse = true;


                /// send it off to have the value changed
                root_this_.update_relevant_column_description_obj_value__given_col_num_and_value_num( root_this_, this.curr_column_num, this.curr_value_num, this.set_the_value_toTrueFalse, true );

            });



            ////   attach a click event to the cross marks
            $("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].column_header__bottom__values_area__individual_value__cross_mark ).click( function(){

                // fetch the embedded data in the values outer area
                this.curr_column_num = $( this ).parent().data( root_this_.value_data_obj__key_for_colmn_num );
                this.curr_value_num = $( this ).parent().data( root_this_.value_data_obj__key_for_value_num );

                //  feedback
                console.log( " \t\t - just clicked a cross mark! - the data is "+this.curr_column_num+", "+this.curr_value_num );

                // just to make that flag a bit more explicit
                this.set_the_value_toTrueFalse = false;


                /// send it off to have the value changed
                root_this_.update_relevant_column_description_obj_value__given_col_num_and_value_num( root_this_, this.curr_column_num, this.curr_value_num, this.set_the_value_toTrueFalse, true );

            });

        }




        ///////////////// 	values interaction function 
        //////////////			- update the filtering values based on the mouse click
        //////////////			and whether the click was on a tick or a cross
        /////////////			- use the object's data value to figure out which value to change
        /////////////			in the column description object

        this.update_relevant_column_description_obj_value__given_col_num_and_value_num = function( root_this_, relev_col_num, relev_val_num, set_the_value_toTrueFalse, update_commitments_listing__trueFalse ){

            // feedback
            ///////  console.log(">>> update_relevant_column_description_obj_value__given_col_num_and_value_num");
            ///////  console.log(" \t\t got values col/value #s "+relev_col_num+", "+relev_val_num+" and is this a tick mark ->> "+set_the_value_toTrueFalse );

            // set the relevant flag for the relevant value in the relev column
            root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].header__value_choice_categories__listed_in_order_of_appearance[ relev_val_num ].current_selection__selectedTrueFalse = set_the_value_toTrueFalse;

            // check that it actually happened
            ///////  console.log(" just updated the value in the relevant column, and it now reads "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].header__value_choice_categories__listed_in_order_of_appearance[ relev_val_num ].current_selection__selectedTrueFalse );


            /// and then update the visual look based on the col/value value metadata
            this.set_value_area_visual_atttributes_according_to_given_column_value__err__value( root_this_, relev_col_num, relev_val_num );


            /////  do the searching and commitments listing updades, if needed
            if( update_commitments_listing__trueFalse == true ){
                root_this_.start_filtering_and_commitments_listing_process__given_user_interaction__table_edition( root_this_, true );
            }
        }




        ///////////////// 	values interaction function 
        //////////////			- update the filtering values based on the mouse click
        //////////////			and whether the click was on a tick or a cross
        /////////////			- use the object's data value to figure out which value to change
        /////////////			in the column description object


        this.set_value_area_visual_atttributes_according_to_given_column_value__err__value = function( root_this_, relev_col_num, relev_val_num ){

            ////  hellow 
            ///////  console.log(">>>> set_value_area_visual_atttributes_according_to_given_column_value__err__value - setting the visual values of col/val # "+relev_col_num+", "+relev_val_num );

            //// if one clicks the tick mark
            //		- set the text transparency to 1.0 - set the cross mark to unselected - set the tick mark to selected
            //
            if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].header__value_choice_categories__listed_in_order_of_appearance[ relev_val_num ].current_selection__selectedTrueFalse === true ){

                // feedback
                ///////  console.log("\t\t\t - looks like the relevant header + value is set to true - ");

                /// select it
                this.curr_value_outer_div = $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header_outer_containing_div_id_name ).find( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__general_value_outer_area ).eq( relev_val_num ) ;


                // feedback
                ///////  console.log(" relv opacity value === "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].header__value_choice_categories__listed_in_order_of_appearance[ relev_val_num ].text_opacity_val_when_selected );

                ///// change the text opacity to the relevant value
                this.curr_value_outer_div.find("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__individual_value__text_area ).css("opacity", root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].text_opacity_val_when_selected );


                ///// change the cross icon/class to unselected
                //
                // remove any possible selected class
                this.curr_value_outer_div.find("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__individual_value__cross_mark ).removeClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__individual_value__cross_mark_selected );

                /// change the cross icon/class to UNselected
                this.curr_value_outer_div.find("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__individual_value__cross_mark ).addClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__individual_value__cross_mark_UNselected );


                //// change the appearance of the tick mark
                //
                // remove any possible the UNselected class
                this.curr_value_outer_div.find("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__individual_value__tick_mark ).removeClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__individual_value__tick_mark_UNselected );

                /// change the tick icon/class to selected
                this.curr_value_outer_div.find("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__individual_value__tick_mark ).addClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__individual_value__tick_mark_selected );

            }
            /// and if one clicks the cross mark
            //		- set the text to transparent - set the cross mark to selected - set the tick mark to unselected
            //
            if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].header__value_choice_categories__listed_in_order_of_appearance[ relev_val_num ].current_selection__selectedTrueFalse === false ){

                // feedback
                ///////  console.log("\t\t\t - looks like the relevant header + value is set to false - ");

                /// select it
                this.curr_value_outer_div = $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header_outer_containing_div_id_name ).find( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__general_value_outer_area ).eq( relev_val_num ) ;


                // feedback
                ///////  console.log(" relv opacity value === "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].header__value_choice_categories__listed_in_order_of_appearance[ relev_val_num ].text_opacity_val_when_NOTselected );

                ///// change the text opacity to the relevant value
                this.curr_value_outer_div.find("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__individual_value__text_area ).css("opacity", root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].text_opacity_val_when_NOTselected );


                ///// change the cross icon/class to unselected
                //
                // remove any possible UNselected class
                this.curr_value_outer_div.find("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__individual_value__cross_mark ).removeClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__individual_value__cross_mark_UNselected );

                /// change the cross icon/class to selected
                this.curr_value_outer_div.find("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__individual_value__cross_mark ).addClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__individual_value__cross_mark_selected );


                //// change the appearance of the tick mark
                //
                // remove any possible the selected class
                this.curr_value_outer_div.find("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__individual_value__tick_mark ).removeClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__individual_value__tick_mark_selected );

                /// change the tick icon/class to UNselected
                this.curr_value_outer_div.find("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__individual_value__tick_mark ).addClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__individual_value__tick_mark_UNselected );

            }



        }





        ///////////////// 	set menu basic filtering tick/cross marks 
        //////////////			according to the (meta)data
        /////////////			- for all the tick/cross marks


        this.set_all_basic_filtering_values_according_to_data = function( root_this_ ){

            // hellow
            console.log(">>>> set_all_basic_filtering_values_according_to_data() starting ");


            // go through the column description objects
            root_this_.column_information_objects_listed_in_the_order_of_the_columns.map( function( curr_col_obj, curr_col_num_i){

                /////// console.log('\t - working on column obj#'+curr_col_num_i );

                // loop through valid column header types check if it's a valid object type for this sort of values reset
                root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering.map( function( curr_valid_col_type ){

                    //
                    //////// console.log("\t\t\t\t checking if the curr col obj has col type "+curr_valid_col_type+" | the curr col obj type is "+curr_col_obj.column_type );

                    // 
                    if( curr_valid_col_type === curr_col_obj.column_type ){

                        ///// console.log("\t\t\t\t\t curr column is valid - now checking the values "); 

                        //// if it's a valid column type for this sort of operation
                        // loop through the values and set the visual
                        //	interface equivalents them according to the data
                        curr_col_obj.header__value_choice_categories__listed_in_order_of_appearance.map( function( curr_value_object, curr_value_num_i ){

                            // set the visual basic filtering settings according
                            //	to the data
                            root_this_.set_value_area_visual_atttributes_according_to_given_column_value__err__value( root_this_, curr_col_num_i, curr_value_num_i );

                        }) ;

                    }

                });

            });

        }





        ///////////////// 	reset values!
        //////////////			- function to reset all the values in all relevant columns
        /////////////		


        this.reset_all_filtering_values = function( root_this_ ){

            // hellow
            console.log(">>>> reset_all_filtering_values() starting ");

            //root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].header__value_choice_categories__listed_in_order_of_appearance

            // go through the column description objects
            root_this_.column_information_objects_listed_in_the_order_of_the_columns.map( function( curr_col_obj, curr_col_num_i){

                /////// console.log('\t - working on column obj#'+curr_col_num_i );

                // loop through valid column header types check if it's a valid object type for this sort of values reset
                root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering.map( function( curr_valid_col_type ){

                    //
                    //////// console.log("\t\t\t\t checking if the curr col obj has col type "+curr_valid_col_type+" | the curr col obj type is "+curr_col_obj.column_type );

                    // 
                    if( curr_valid_col_type === curr_col_obj.column_type ){

                        ///// console.log("\t\t\t\t\t curr column is valid - now checking the values "); 

                        //// if it's a valid column type for this sort of operation
                        // loop through the values and reset them
                        curr_col_obj.header__value_choice_categories__listed_in_order_of_appearance.map( function( curr_value_object, curr_value_num_i ){

                            root_this_.update_relevant_column_description_obj_value__given_col_num_and_value_num( root_this_, curr_col_num_i, curr_value_num_i, true, false );

                        }) ;

                    }

                });

            });

        }



        ///////////////// 	SET values!
        //////////////			- function to SET all the values in all relevant columns, to a given value
        /////////////		


        this.set_all_filtering_values__to_given_value = function( root_this_, given_value ){

            // hellow
            console.log(">>>> set_all_filtering_values__to_given_value() - setting value |"+given_value+"|");

            //root_this_.column_information_objects_listed_in_the_order_of_the_columns[ d ].header__value_choice_categories__listed_in_order_of_appearance

            // go through the column description objects
            root_this_.column_information_objects_listed_in_the_order_of_the_columns.map( function( curr_col_obj, curr_col_num_i){

                console.log('\t - working on column obj#'+curr_col_num_i );

                // loop through valid column header types check if it's a valid object type for this sort of values reset
                root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering.map( function( curr_valid_col_type ){

                    //
                    console.log("\t\t\t\t checking if the curr col obj has col type "+curr_valid_col_type+" | the curr col obj type is "+curr_col_obj.column_type );

                    // 
                    if( curr_valid_col_type === curr_col_obj.column_type ){

                        console.log("\t\t\t\t\t curr column is valid - now checking the values ");

                        //// if it's a valid column type for this sort of operation
                        // loop through the values and reset them
                        curr_col_obj.header__value_choice_categories__listed_in_order_of_appearance.map( function( curr_value_object, curr_value_num_i ){

                            console.log("\t\t\t\t\t\t - setting value #+"+curr_value_num_i+" to |"+given_value+"|" );

                            curr_value_object.current_selection__selectedTrueFalse = given_value;

                            /// let's try again
                            /////////////  root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_obj ].relevant_column_types_for__basic_column_filtering__not_tags_filtering[ curr_value_num_i ].current_selection__selectedTrueFalse = given_value;
                            ///    root_this_.update_relevant_column_description_obj_value__given_col_num_and_value_num( root_this_, curr_col_num_i, curr_value_num_i, true, false );

                        }) ;

                    }

                });

            });

        }





        /////////////////////	Sort area interaction
        /////////////////////
        /////////////////////	bind functions to all the tick/cross marks
        /////////////////////	


        this.bind_relev_interactive_functions_to_all_sort_up_n_down_arrows = function( root_this_ ){

            // 
            console.log(">>>>>>  bind_relev_interactive_functions_to_all_sort_up_n_down_arrows() ");


            /// select the up arrows and bind things
            $("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].column_header__bottom__values_area__sort_area__sort_up_button ).click( function(){

                // fetch the embedded data in the values outer area
                this.curr_column_num = $( this ).parent().data( root_this_.value_data_obj__key_for_colmn_num );


                //  feedback
                console.log( " \t\t - just clicked a UP arrow! - the column num is "+this.curr_column_num );

                // just to make that flag a bit more explicit
                this.set_the_sort_areas_value_to_UP_or_DOWN__or_OFF = "UP";


                /// send it off to have the value changed
                root_this_.update_relevant_column_description__SORT_value__given_col_num( root_this_, this.curr_column_num, this.set_the_sort_areas_value_to_UP_or_DOWN__or_OFF );


                /////  do the sorting and re-displaying!						
                root_this_.update_sorting_and_optional_display_results_for_all_display_objects( root_this_, true );
            });




            /// select the down arrows and bind things
            $("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].column_header__bottom__values_area__sort_area__sort_down_button ).click( function(){

                // fetch the embedded data in the values outer area
                this.curr_column_num = $( this ).parent().data( root_this_.value_data_obj__key_for_colmn_num );


                //  feedback
                console.log( " \t\t - just clicked a DOWN arrow! - the column num is "+this.curr_column_num );

                // just to make that flag a bit more explicit
                this.set_the_sort_areas_value_to_UP_or_DOWN__or_OFF = "DOWN";


                /// send it off to have the value changed
                root_this_.update_relevant_column_description__SORT_value__given_col_num( root_this_, this.curr_column_num, this.set_the_sort_areas_value_to_UP_or_DOWN__or_OFF );


                /////  do the sorting and re-displaying!						
                root_this_.update_sorting_and_optional_display_results_for_all_display_objects( root_this_, true );

            });

        };




        //////////////  serial sort and update screen function
        //					- useful when people click the sort buttons
        //					( but how does it fit into the general screen updating when filtering? )
        this.update_sorting_and_optional_display_results_for_all_display_objects = function( root_this_, do_we_redraw_the_commitment_listing ){

            //
            console.log(" >>> update_sorting_and_display_results_for_all_display_objects ");

            //////  do the actual sorting
            //
            ///  loop
            // go through all the display objects and do this sorting and maybe redrawing of commitments
            for( this.curr_display_object_i = 0; this.curr_display_object_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length ; this.curr_display_object_i++ ){

                console.log(" doing sorting on display area obj #"+this.curr_display_object_i );

                // do the sorting 
                root_this_.sort_columns_given_col_num( root_this_, root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ] );


                /// and do the display if needed
                if( do_we_redraw_the_commitment_listing === true ){

                    //  add summary the statistics line at the top of the commitments listing
                    // UNCOMMENT UNCOMMENT!
                    root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ].add_display_area_summary_statistics_line__to_commitments_listing_area( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ], "remove", this.curr_display_object_i );

                    // display the found commitments
                    //////  root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ].add_commitments_to_commitment_listing_area( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ], "keep" );
                    root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ].add_commitments_to_commitment_listing_area__NEW_inserts_more_html_in_one_bit( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ], "keep" );

                }

            }


            /// and then some interction binding that only needs doing once
            if( do_we_redraw_the_commitment_listing === true ){

                /// and then bind the handlers to the interactive elements
                //	- like the country/display area level clickboxes and show more/less commitments
                //		button
                root_this_.bind_relev_interactive_functions_to_display_area_views_related_interactive_objects( root_this_ );

                ///  set the display area is_selected checkboxes
                //			according to the data
                root_this_.set__is_selected__clickbox__visual_appearance__according_to_data__on_ALL_display_areas( root_this_ );



                ////// reattach the mouseovers please 		

                ////  summary statistics 
                root_this_.set_up_dom_location_data_binding_and_event_handler__for__mousevoers__of__summary_statistics( root_this_ );


                //// commitment titles + full commitment texts:
                /// bind the dom location data and set mouse-handlers
                root_this_.set_up_location_data_binding_and_event_handler__for__mouseovers__of__commitment_titles_and_full_texts( root_this_ );
            }


        }






        //////////////	Sort area update column description obj data given column num
        //////////////
        ////////////

        this.update_relevant_column_description__SORT_value__given_col_num = function( root_this_, relev_col_num, set_the_sort_areas_value_to_UP_or_DOWN__or_OFF ){

            // hellow
            console.log(">>>>>  update_relevant_column_description__SORT_value__given_col_num() - fixing col num "+relev_col_num+" to "+set_the_sort_areas_value_to_UP_or_DOWN__or_OFF );

            // set the relevant flag for the relevant value in the relev column
            root_this_.are_we_sorting = true;
            // set the column number by which we're sorting
            root_this_.sorting_by_col_num = relev_col_num ;
            // and the direction
            root_this_.direction_of_sorting = set_the_sort_areas_value_to_UP_or_DOWN__or_OFF ;


            // now update the visuals please						
            this.set_visual_sorting_attributes_according_to_the_data( root_this_, relev_col_num, set_the_sort_areas_value_to_UP_or_DOWN__or_OFF );
        }




        //////////////	Set the visual area according to the data
        //////////////
        ////////////

        this.set_visual_sorting_attributes_according_to_the_data = function( root_this_, relev_col_num, set_the_sort_areas_value_to_UP_or_DOWN__or_OFF ){

            //
            console.log(">>>>>  set_visual_sorting_attributes_according_to_the_data() starting - working on col "+relev_col_num+" and sitting things to "+set_the_sort_areas_value_to_UP_or_DOWN__or_OFF );


            //// start by setting everything to off
            ///////   this.curr_outer_sort_areas = $("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_outer_area_class_name );


            ///// reset the text markup - for all groups!
            // remove selected classes
            $( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__text_area ).removeClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__text_area__selected );
            // add unselected classes
            $( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__text_area ).addClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__text_area__unselected );

            ///// reset the UP arrow markup
            //
            // remove any selected markup
            $( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__sort_up_button ).removeClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__sort_up_button__selected );
            // add the unselected class
            $( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__sort_up_button ).addClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__sort_up_button__unselected );

            ///// reset the DOWN arrow markup
            //
            // remove any selected markup
            $( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__sort_down_button ).removeClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__sort_down_button__selected );
            // add the unselected class
            $( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__sort_down_button ).addClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__sort_down_button__unselected );


            //// reset the horizontal lines
            // remove any selected markup
            $( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__horizontal_line_area ).removeClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__horizontal_line_area__selected );
            // add the unselected class
            $( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__horizontal_line_area ).addClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__horizontal_line_area__unselected );





            //  if clicking up/down change the text to selected
            if( set_the_sort_areas_value_to_UP_or_DOWN__or_OFF === "UP" || set_the_sort_areas_value_to_UP_or_DOWN__or_OFF === "DOWN" ){

                // debugging
                //////  console.log(" removing the unselected class on the horizontal sort line ie. -> "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__text_area__unselected );

                //////////  set the relevant text to selected

                // remove the UNselected class to the text
                $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__text_area ).removeClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__text_area__unselected );

                // add the selected class to the text
                $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__text_area ).addClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__text_area__selected );




                /////////   set the releveant line to selected

                // remove the UNselected class to the line
                /////// $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__horizontal_line_area ).removeClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__horizontal_line_area__unselected );

                /// debugging
                console.log("changing that line markup | removing |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__horizontal_line_area__unselected+"|   adding |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__horizontal_line_area__selected );

                ///////   $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__horizontal_line_area ).css( "border", "1px solid red" );

                // remove the unselected class
                $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__horizontal_line_area ).removeClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__horizontal_line_area__unselected );

                // add the selected class to the line
                $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__horizontal_line_area ).addClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__horizontal_line_area__selected );



            }


            if( set_the_sort_areas_value_to_UP_or_DOWN__or_OFF === "UP" ){


                ////  select _this_ UP arrow and remove the unselected class
                $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__sort_up_button ).addClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__sort_up_button__unselected );

                ////  select _this_ UP arrow and give it the selected marker
                $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__sort_up_button ).addClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__sort_up_button__selected );

            }
            else if( set_the_sort_areas_value_to_UP_or_DOWN__or_OFF === "DOWN" ){

                // feedback
                console.log("\t - setting sort on col #"+relev_col_num+" to DOWN" );


                ////  select _this_ DOWN arrow and give it the selected marker
                $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__sort_down_button ).addClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__sort_down_button__unselected );

                ////  select _this_ DOWN arrow and give it the selected marker
                $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__sort_down_button ).addClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relev_col_num ].column_header__bottom__values_area__sort_area__sort_down_button__selected );


            }
            //  set everything to off
            else if( set_the_sort_areas_value_to_UP_or_DOWN__or_OFF === "OFF" ){

                // feedback
                console.log("\t - setting sort on col #"+relev_col_num+" to OFF" );

                //  set everything to OFF
                ////////  well, if you don't do any of the IF() statements, everything will be off ;)

            }

        }






        ////////////////////////////////////////
        //////////////
        //////////////	   country operations menu tinkering
        //////////////


        /////    set up the country operations menu
        /////

        //// set up the country listing menu

        this.set_up_country_operations_menu = function( root_this_, current_header_bottom_area ){

            console.log(">>>> set_up_country_operations_menu() ");

            ////// do stuff ;)
            // the dom object id/class names are in the current table obj

            //// current_header_bottom_area.css("border", "1px dashed red");

            /////////  add the top menu
            current_header_bottom_area.append( "<div class='"+root_this_.country_operations_menu__top_item__class_name+"'>Viewing modes</div>" );


            ///////   add the drop down menu and the things that go inside it
            this.drop_down_menu_n_items_html = "<div class='"+root_this_.country_operations_menu__drop_down_area__outer__class_name+"'>"



            ///// add a menu item : summary statistis yes/no
            //			- with some class modifications depending 
            //			on whether it's set as on/off in the data

            /*
             // make a placeholder for the optional selected class
             this.optional__selected_class_text = "";

             /// add the selected class depending on whether the option is 
             //		relevant given the current table obj settings
             ////
             if( root_this_.curr_commitment_viewing_mode__country_or_commitment_centric_mode === root_this_.curr_commitment_viewing_mode__countryCentric_value ){

             // include the selected class
             this.optional__selected_class_text = root_this_.country_operations_menu__drop_down_area__menu_item__SELECTED__class_name ;
             }

             // and then finally put together the relevant menu item
             this.drop_down_menu_n_items_html += "<div class='"+root_this_.country_operations_menu__drop_down_area__menu_item__general_menu_item__class_name+" "+root_this_.country_operations_menu__drop_down_area__menu_item__showSummaryStatistics__class_name+" "+this.optional__selected_class_text+"'>Organise commitments by country/commitments</div>";
             */

            /* - undesired :-( )
             ///////// other menu items
             //
             /// add a menu item : number two
             this.drop_down_menu_n_items_html += "<div class='"+root_this_.country_operations_menu__drop_down_area__menu_item__general_menu_item__class_name+" "+root_this_.country_operations_menu__drop_down_area__menu_item__menuItemNum_two__class_name+"'>Select All</div>";

             /// add a menu item : number three
             this.drop_down_menu_n_items_html += "<div class='"+root_this_.country_operations_menu__drop_down_area__menu_item__general_menu_item__class_name+" "+root_this_.country_operations_menu__drop_down_area__menu_item__menuItemNum_three__class_name+"'>Select None</div>";

             /// add a menu item : number four
             this.drop_down_menu_n_items_html += "<div class='"+root_this_.country_operations_menu__drop_down_area__menu_item__general_menu_item__class_name+" "+root_this_.country_operations_menu__drop_down_area__menu_item__menuItemNum_four__class_name+"'>Select Others</div>";
             */


            /// add a menu item : Show only country statistics
            ///   view commitments organised by country
            this.drop_down_menu_n_items_html += "<div class='"+root_this_.country_operations_menu__drop_down_area__menu_item__general_menu_item__class_name+" "+root_this_.country_operations_menu__drop_down_area__menu_item__ShowCommitmentsOrganisedByCountry__class_name+"'>view commitments organised by country</div>";


            /// add a menu item : view commitments organised as list
            this.drop_down_menu_n_items_html += "<div class='"+root_this_.country_operations_menu__drop_down_area__menu_item__general_menu_item__class_name+" "+root_this_.country_operations_menu__drop_down_area__menu_item__ShowCommitmentsOnly__class_name+"'>view commitments organised as list</div>";

            /// add a menu item : view only country statistics
            this.drop_down_menu_n_items_html += "<div class='"+root_this_.country_operations_menu__drop_down_area__menu_item__general_menu_item__class_name+" "+root_this_.country_operations_menu__drop_down_area__menu_item__ShowCountryStatisticsOnly__class_name+"'>view country statistics only</div>";




            /*
             /// add a menu item : Show selected countries only
             this.drop_down_menu_n_items_html += "<div class='"+root_this_.country_operations_menu__drop_down_area__menu_item__general_menu_item__class_name+" "+root_this_.country_operations_menu__drop_down_area__menu_item__showSelectedCountriesOnly__class_name+"'>Show selected countries only</div>";

             /// add a menu item : Reset country display settings
             this.drop_down_menu_n_items_html += "<div class='"+root_this_.country_operations_menu__drop_down_area__menu_item__general_menu_item__class_name+" "+root_this_.country_operations_menu__drop_down_area__menu_item__resetCommitmentDisplaySettings__class_name+"'>Reset commtiment display settings</div>";


             /// TEST TEST TEST - print all unmatching commitments in the terminal
             this.drop_down_menu_n_items_html += "<div class='"+root_this_.country_operations_menu__drop_down_area__menu_item__general_menu_item__class_name+" "+root_this_.country_operations_menu__drop_down_area__menu_item__print_all_NON_MATCHING_commitments+"'>Print NON-MATCHING commitmetns</div>";
             */


            /// and close the drop down menu number of things
            this.drop_down_menu_n_items_html += "</div>";


            /// and append the drop down menu somewhere nice
            current_header_bottom_area.append( this.drop_down_menu_n_items_html );



            ////////// bind some nice events to the memnu and its items
            //
            root_this_.bind_events_to_the_country_operations_menu( root_this_, current_header_bottom_area );

        }



        ///////////
        ///////////
        ///////////		bind 
        ///////////
        ///////////

        this.bind_events_to_the_country_operations_menu = function( root_this_, current_header_bottom_area ){

            //
            console.log(">>>>  bind_events_to_the_country_operations_menu() ");


            /////////////    do the meu appear/disappear toggle ;)
            //
            current_header_bottom_area.find("."+root_this_.country_operations_menu__top_item__class_name ).click( function(){

                //// show the mouse catching areas 
                $( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].tags_drop_down_menu__invisible_background_div ).show();

                ///// set which menu has been opened
                //		- good to know for the mousecatching area
                root_this_.menus__currently_open_menu_name = root_this_.menus__name__country_operations_menu;


                // drop down menu toggle
                current_header_bottom_area.find("."+root_this_.country_operations_menu__drop_down_area__outer__class_name ).toggle();

                // hide the mouseover div
                root_this_.mouseover_div__HIDE( root_this_ );

            } );




            ///////////   set the things individual menu options trigger on a click
            ///////////


            //////   interaction for the meu choice:  - show country level listing 
            //
            current_header_bottom_area.find("."+root_this_.country_operations_menu__drop_down_area__menu_item__ShowCommitmentsOrganisedByCountry__class_name ).click( function(){

                console.log("click on the country centric listing");

                // set the relevant metadata of which menu item is selected
                root_this_.viewing_options_menu__set__country_centric_organisation__as_selected( root_this_ );

                // set menu according to the meta data
                root_this_.set_view_menu_options_according_to_menu_selections( root_this_ );

                // set the commitment listing according to the data
                root_this_.set_commitments_listing_according_to_views_menu( root_this_ );



                /// set the menu options according to the data/settings
                root_this_.set_viewing_mode_menu_items_according_to_data( root_this_ );

                // hide the drop down and the mouse catching area
                root_this_.mouse_catching_area_helper__do_relevant_things_depending_on_which_menu_is_open( root_this_ );

            });

            //////   interaction for the meu choice:  - show commitment oriented listing 
            //
            current_header_bottom_area.find("."+root_this_.country_operations_menu__drop_down_area__menu_item__ShowCommitmentsOnly__class_name ).click( function(){

                console.log("click on the commitment centric listing");


                // set the relevant metadata of which menu item is selected
                root_this_.viewing_options_menu__set__commitment_centric_organisation__as_selected( root_this_ );


                // set menu according to the meta data
                root_this_.set_view_menu_options_according_to_menu_selections( root_this_ );

                // set the commitment listing according to the data
                root_this_.set_commitments_listing_according_to_views_menu( root_this_ );


                /// set the menu options according to the data/settings
                root_this_.set_viewing_mode_menu_items_according_to_data( root_this_ );


                // hide the drop down and the mouse catching area
                root_this_.mouse_catching_area_helper__do_relevant_things_depending_on_which_menu_is_open( root_this_ );

            });



            //////   interaction for the meu choice:  - show country statistics only for a show country level listing 
            //
            current_header_bottom_area.find("."+root_this_.country_operations_menu__drop_down_area__menu_item__ShowCountryStatisticsOnly__class_name ).click( function(){

                console.log("click on the summary statistics listing");

                // set the relevant metadata of which menu item is selected
                root_this_.viewing_options_menu__set__summary_statistics__of__country_centric_organisation__as_selected( root_this_ );

                // set menu according to the meta data
                root_this_.set_view_menu_options_according_to_menu_selections( root_this_ );

                // set the commitment listing according to the data
                root_this_.set_commitments_listing_according_to_views_menu( root_this_ );



                /// set the menu options according to the data/settings
                root_this_.set_viewing_mode_menu_items_according_to_data( root_this_ );


                // hide the drop down and the mouse catching area
                root_this_.mouse_catching_area_helper__do_relevant_things_depending_on_which_menu_is_open( root_this_ );

            });

        }





        //// set the country operations / viewing mode menu items according to data
        //
        this.set_viewing_mode_menu_items_according_to_data = function( root_this_ ){

            console.log(">>>> set_viewing_mode_menu_items_according_to_data() ");


            //// set all to none
            $("."+root_this_.country_operations_menu__drop_down_area__menu_item__general_menu_item__class_name ).removeClass( root_this_.country_operations_menu__drop_down_area__menu_item__SELECTED__class_name );


            /// select the relevant item

            if( root_this_.menus__tableCommitments_viewingOptions__current_option === root_this_.menus__tableCommitments_viewingOptions__option_as_txt__view_country_centric_commitment_organisation ){

                $( "."+root_this_.country_operations_menu__drop_down_area__menu_item__ShowCommitmentsOrganisedByCountry__class_name ).addClass( root_this_.country_operations_menu__drop_down_area__menu_item__SELECTED__class_name);

            }else if( root_this_.menus__tableCommitments_viewingOptions__current_option === root_this_.menus__tableCommitments_viewingOptions__option_as_txt__view_commitment_centric_commitment_organisation ){

                $( "."+root_this_.country_operations_menu__drop_down_area__menu_item__ShowCommitmentsOnly__class_name ).addClass( root_this_.country_operations_menu__drop_down_area__menu_item__SELECTED__class_name);

            }else if(  root_this_.menus__tableCommitments_viewingOptions__current_option === root_this_.menus__tableCommitments_viewingOptions__option_as_txt__view_summary_statistics_of_country_centric_commitment_organisation ){

                $( "."+root_this_.country_operations_menu__drop_down_area__menu_item__ShowCountryStatisticsOnly__class_name ).addClass( root_this_.country_operations_menu__drop_down_area__menu_item__SELECTED__class_name);

            }

        }




        ////  set the commitment listing mode to the INVERSE of the current 
        //		and update the display of commitments

        this.update_country_operations__listCommitmentsByCountry__as_selected_not_selected__based_on_click_n_data = function( root_this_, relevant_menu_item_selected, current_header_bottom_area ){

            console.log(">>>> update_country_operations__listCommitmentsByCountry__as_selected_not_selected__based_on_click_n_data() ");
            console.log(" the current country/commitment centric viewing mode is |"+root_this_.curr_commitment_viewing_mode__country_or_commitment_centric_mode+"|" );

            // TEEEST
            relevant_menu_item_selected.css("border", "1px dashed rgb( 255, 230,230)");


            //// set the data + visual markup as appropriate
            //
            if( root_this_.curr_commitment_viewing_mode__country_or_commitment_centric_mode === root_this_.curr_commitment_viewing_mode__commitmentCentric_value ){

                console.log(" ok - we're in commtiment centric mode - switching to the country centric mode ");

                // add the selected class
                relevant_menu_item_selected.addClass( root_this_.country_operations_menu__drop_down_area__menu_item__SELECTED__class_name );

                // set it to country centric organisation
                root_this_.set_up_country_centric_display_areas__incl_divs__n__print_commitments( root_this_ );

            }else{

                // remove the selected class
                relevant_menu_item_selected.removeClass( root_this_.country_operations_menu__drop_down_area__menu_item__SELECTED__class_name );

                // set it to commitment centric organisation
                root_this_.set_up_commitment_centric_display_areas__incl_divs__n__print_commitments( root_this_ );

            }

        }





        ////  REDRAW + RESET the display objects according to the current display object display settings
        //		(this is good for resetting the display areas 
        //			after messing with them in the country operations menu)

        this.reset_display_objects_display_according_to_current_displayArea_settings = function( root_this_ ){

            console.log(">>>> update_country_operations__listCommitmentsByCountry__as_selected_not_selected__based_on_click_n_data() ");
            console.log(" the current country/commitment centric viewing mode is |"+root_this_.curr_commitment_viewing_mode__country_or_commitment_centric_mode+"|" );


            //// set the data + visual markup as appropriate
            //
            if( root_this_.curr_commitment_viewing_mode__country_or_commitment_centric_mode === root_this_.curr_commitment_viewing_mode__commitmentCentric_value ){


                // set it to commitment centric organisation
                root_this_.set_up_commitment_centric_display_areas__incl_divs__n__print_commitments( root_this_ );


            }else{

                // set it to country centric organisation
                root_this_.set_up_country_centric_display_areas__incl_divs__n__print_commitments( root_this_ );

            }

        }



        //////////////////////
        /////
        //////  viewing options menu - set which  options are active
        //								( in meta-data )


        // select : country centric option
        this.viewing_options_menu__set__country_centric_organisation__as_selected =  function( root_this_ ){

            console.log(">>>> click! viewing_options_menu__set__country_centric_organisation__as_selected ");

            root_this_.menus__tableCommitments_viewingOptions__current_option = root_this_.menus__tableCommitments_viewingOptions__option_as_txt__view_country_centric_commitment_organisation;

            console.log("\\ root_this_.menus__tableCommitments_viewingOptions__current_option === "+root_this_.menus__tableCommitments_viewingOptions__current_option );

        }


        // select : commitment centric option
        this.viewing_options_menu__set__commitment_centric_organisation__as_selected =  function( root_this_ ){

            console.log(">>>> click! viewing_options_menu__set__country_centric_organisation__as_selected ");

            root_this_.menus__tableCommitments_viewingOptions__current_option = root_this_.menus__tableCommitments_viewingOptions__option_as_txt__view_commitment_centric_commitment_organisation;

            console.log("\\ root_this_.menus__tableCommitments_viewingOptions__current_option === "+root_this_.menus__tableCommitments_viewingOptions__current_option );

        }

        // select : summary statistics of country centric option
        this.viewing_options_menu__set__summary_statistics__of__country_centric_organisation__as_selected =  function( root_this_ ){

            console.log(">>>> click! viewing_options_menu__set__country_centric_organisation__as_selected ");

            root_this_.menus__tableCommitments_viewingOptions__current_option = root_this_.menus__tableCommitments_viewingOptions__option_as_txt__view_summary_statistics_of_country_centric_commitment_organisation;

            console.log("\\ root_this_.menus__tableCommitments_viewingOptions__current_option === "+root_this_.menus__tableCommitments_viewingOptions__current_option );

        }





        /////////
        ///////// function to set viewing options menu according to 
        ///			selected data

        this.set_view_menu_options_according_to_menu_selections = function(root_this_){

            console.log(">>>>set_view_menu_options_according_to_menu_selections - setting view menu to mode |"+root_this_.menus__tableCommitments_viewingOptions__current_option+"|");


            /// deselect all
            $("."+root_this_.country_operations_menu__drop_down_area__menu_item__general_menu_item__class_name ).removeClass( root_this_.country_operations_menu__drop_down_area__menu_item__SELECTED__class_name );


            /// set different things depending on what's selected
            if( root_this_.menus__tableCommitments_viewingOptions__current_option === root_this_.menus__tableCommitments_viewingOptions__option_as_txt__view_country_centric_commitment_organisation ){

                $("."+root_this_.country_operations_menu__drop_down_area__menu_item__ShowCommitmentsOrganisedByCountry__class_name ).addClass( root_this_.country_operations_menu__drop_down_area__menu_item__SELECTED__class_name );

            }
            else if( root_this_.menus__tableCommitments_viewingOptions__current_option === root_this_.menus__tableCommitments_viewingOptions__option_as_txt__view_commitment_centric_commitment_organisation ){

                $("."+root_this_.country_operations_menu__drop_down_area__menu_item__ShowCommitmentsOnly__class_name ).addClass( root_this_.country_operations_menu__drop_down_area__menu_item__SELECTED__class_name );

            }
            else if( root_this_.menus__tableCommitments_viewingOptions__current_option === root_this_.menus__tableCommitments_viewingOptions__option_as_txt__view_summary_statistics_of_country_centric_commitment_organisation ){

                $("."+root_this_.country_operations_menu__drop_down_area__menu_item__ShowCountryStatisticsOnly__class_name ).addClass( root_this_.country_operations_menu__drop_down_area__menu_item__SELECTED__class_name );

            }

        }



        //////
        ///////
        ///////  views - set commitment view according to views menu options
        /////


        this.set_commitments_listing_according_to_views_menu = function( root_this_ ){

            console.log(">>>>set_commitments_listing_according_to_views_menu - setting view menu to mode |"+root_this_.menus__tableCommitments_viewingOptions__current_option+"|");


            /// set different things depending on what's selected
            if( root_this_.menus__tableCommitments_viewingOptions__current_option === root_this_.menus__tableCommitments_viewingOptions__option_as_txt__view_country_centric_commitment_organisation ){

                //  set all relevant display area flags to not show commitments
                root_this_.set__all_display_areas__to_show_or_not_show_commitments( root_this_, true );

                // set it to country centric organisation
                root_this_.set_up_country_centric_display_areas__incl_divs__n__print_commitments( root_this_ );

            }
            else if( root_this_.menus__tableCommitments_viewingOptions__current_option === root_this_.menus__tableCommitments_viewingOptions__option_as_txt__view_commitment_centric_commitment_organisation ){

                //  set all relevant display area flags to not show commitments
                root_this_.set__all_display_areas__to_show_or_not_show_commitments( root_this_, true );

                // set it to commitment centric organisation
                root_this_.set_up_commitment_centric_display_areas__incl_divs__n__print_commitments( root_this_ );

            }
            else if( root_this_.menus__tableCommitments_viewingOptions__current_option === root_this_.menus__tableCommitments_viewingOptions__option_as_txt__view_summary_statistics_of_country_centric_commitment_organisation ){

                //  set all relevant display area flags to not show commitments
                root_this_.set__all_display_areas__to_show_or_not_show_commitments( root_this_, false );

                // set it to country centric organisation
                root_this_.set_up_country_centric_display_areas__incl_divs__n__print_commitments( root_this_ );


            }


        }





        ///////////////////////						///////////////////////////////////////
        ///////////////////////   EXPORT DATA 		///////////////////////////////////////
        ////////
        ////////
        ////////

        //
        //
        // ... how?
        //	- go through the :
        //			- each display area object
        //				- each commitment ( unfiltered / matching / unmatching? )
        //					- each column info object
        //						- check what kind of export option is needed, given the column type
        //						( this is rather useful for different outputs like tags/regular values)
        //
        //

        this.export_data_given_parameters = function( root_this_ ){

            console.log(" >>>>>   export_data_given_parameters() ");


            ////////  setup / variables

            // this is where things will end up in the  end
            // ... and converted to text later
            this.out_array_of_assembled_export_data = [];


            // append the header titles
            this.out_array_of_assembled_export_data.push( root_this_.export_data__export_heading_row( root_this_) );



            //////////////   loop and assemble data 

            for( this.curr_display_obj_i = 0; this.curr_display_obj_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.curr_display_obj_i++ ){


                // feedback
                console.log(" \t - assembling data - working on display area #"+this.curr_display_obj_i+" ("+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_obj_i ].country_name+")");


                /////////// set/store which commitments to go through 

                //
                this.this_display_obj_commitments_to_export ;


                /////  if/then select which commitments to use

                // matching
                if( root_this_.sorts_of_commitments_to_export === root_this_.export_data__diff_kinds_of_data_to_export__matching ){

                    this.this_display_obj_commitments_to_export = root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_obj_i ].curr_filter_n_sort__MATCHING_commitments;
                }
                // non-matching
                else if( root_this_.sorts_of_commitments_to_export === root_this_.export_data__diff_kinds_of_data_to_export__NONmatching ){

                    this.this_display_obj_commitments_to_export = root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_obj_i ].curr_filter_n_sort__NOT_MATCHING_commitments;
                }
                // unfiltered
                else if( root_this_.sorts_of_commitments_to_export === root_this_.export_data__diff_kinds_of_data_to_export__unfiltered ){

                    this.this_display_obj_commitments_to_export = root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_obj_i ].all_commitments__unfiltered;
                }

                // debug
                console.log("\t\t - exporting |"+root_this_.sorts_of_commitments_to_export+"| commitments - "+this.this_display_obj_commitments_to_export.length+" of them ");



                /////////  loop through each commitment and export data :) 
                //

                for( this.curr_commitment_i = 0; this.curr_commitment_i < this.this_display_obj_commitments_to_export.length; this.curr_commitment_i++ ){

                    // debug
                    console.log("\t\t\t - working on commitment num "+this.curr_commitment_i+" ");


                    ///// the curr commitment array - for the export data we're constructing
                    this.curr_commitment_array = [];



                    ///////////   loop through the different column information objects 
                    //				and figure out how to format the commitment data

                    for( this.curr_col_num_i = 0; this.curr_col_num_i < root_this_.column_information_objects_listed_in_the_order_of_the_columns.length; this.curr_col_num_i++ ){

                        // debug
                        console.log("\t\t\t\t - working on column num "+this.curr_col_num_i+" ( "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ].column_title__text+" )" );


                        //// do a different export operation depending on the 
                        //		column type



                        /// CHECK if it's a TEXT COLUMN/value ///
                        //
                        if(  root_this_.relevant_column_types_for__text_filtering.indexOf( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ].column_type ) >= 0 ){

                            // debug
                            console.log("|||| the current column ( #"+this.curr_col_num_i+" / type |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ].column_type+"| ) is a regular text column/value");

                            // find the relevant value to add to the array
                            this.curr_relevant_value = this.this_display_obj_commitments_to_export[ this.curr_commitment_i ][ this.curr_col_num_i ];
                            // add the relevant value to the out array
                            // ( and try remove funny escaped characters with the '.replace' bit )
                            this.curr_commitment_array.push( this.curr_relevant_value.replace(/\W+/g, " ") );

                            // more debuuuug!
                            console.log("||||||  the out value is |"+this.curr_relevant_value+"|");
                        }


                        /// CHECK if it's a REGULAR value filtering COLUMN/value ///
                        //
                        if(  root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering.indexOf( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ].column_type ) >= 0 ){

                            // debug
                            console.log("|||| the current column ( #"+this.curr_col_num_i+" / type |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ].column_type+"| ) is a regular filtering column/value");

                            // find the relevant value to add to the array
                            this.curr_relevant_value = this.this_display_obj_commitments_to_export[ this.curr_commitment_i ][ this.curr_col_num_i ];
                            // add the relevant value to the out array
                            this.curr_commitment_array.push( this.curr_relevant_value );

                            // more debuuuug!
                            console.log("||||||  the out value is |"+this.curr_relevant_value+"|");

                        }

                        /// CHECK if it's a TAGS filtering COLUMN/value ///
                        //
                        if(  root_this_.relevant_column_types_for__TAGS_column_filtering__not_basic_column_filtering.indexOf( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ].column_type ) >= 0 ){

                            // debug
                            console.log("|||| the current column ( #"+this.curr_col_num_i+" / type |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ].column_type+"| ) is a tags filtering columns. value");


                            //// loop through the tags and add them 
                            //		( or at least the relevant part of the tags array)
                            //
                            for( this.curr_tag_i = 0; this.curr_tag_i  < this.this_display_obj_commitments_to_export[ this.curr_commitment_i ][ this.curr_col_num_i ].length; this.curr_tag_i++ ){

                                /// 	don't export this tag if it's in fact a 
                                //		   heading value
                                if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].type === "heading_1" ){

                                    // skip this loop if it's a heading;
                                    continue;

                                    // debug, lame
                                    console.log("!!! SKIPPING THIS TAG! ");
                                }

                                console.log("-------- working on tag#"+this.curr_tag_i+" >>> |"+this.this_display_obj_commitments_to_export[ this.curr_commitment_i ][ this.curr_col_num_i ][ this.curr_tag_i ]+"| <<<" );

                                // find the relevant value to add to the array
                                this.curr_relevant_value = this.this_display_obj_commitments_to_export[ this.curr_commitment_i ][ this.curr_col_num_i ][ this.curr_tag_i ][ root_this_.tags__index_of_data_val_in_individual_tags_data ];

                                /* [ root_this_.tags__index_of_data_val_in_individual_tags_data ]; */
                                // add the relevant value to the out array
                                this.curr_commitment_array.push( this.curr_relevant_value );

                            }


                        }


                    } /// end  column information object								

                    /// concatenate the out array
                    ///////////  this.curr_commitment_array = this.curr_commitment_array.join();
                    /////////  console.log("----- for commitment #"+this.curr_commitment_i+" we got an array like this |"+this.curr_commitment_array+"|" );


                    ///// and add this commitment data out row to the total out array
                    //
                    //// (and remove the non-space white-space characters ( so there's not a escape character there somewhere) )
                    this.out_array_of_assembled_export_data.push( this.curr_commitment_array.join( this.export_data__out_array__variable_separator_symbol ) );


                } /////   end commitments loop



            } ////  end display area objects loop


            /// and export something - though maybe do something different to export…!
            return this.out_array_of_assembled_export_data;

        }









        ///////  generate a heading row for the exported data
        /////		

        this.export_data__export_heading_row = function( root_this_ ){


            console.log(" >>>>>   export_data_given_parameters() ");


            ////////  setup / variables

            // this is where things will end up in the  end
            // ... and converted to text later
            this.out_array_of_column_headings = [];



            ////  loop through all the column information objects
            for( this.curr_col_num_i = 0; this.curr_col_num_i < root_this_.column_information_objects_listed_in_the_order_of_the_columns.length; this.curr_col_num_i++ ){

                // debug
                console.log("\t\t\t\t - working on column num "+this.curr_col_num_i+" ( "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ].column_title__text+" )" );


                //// do a different export operation depending on the 
                //		column type


                /// CHECK if it's a TEXT COLUMN/value ///
                //
                if(  root_this_.relevant_column_types_for__text_filtering.indexOf( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ].column_type ) >= 0 ){

                    // debug
                    console.log("|||| the current column ( #"+this.curr_col_num_i+" / type |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ].column_type+"| ) is a regular text column/value");

                    // find the relevant value to add to the array
                    this.curr_relevant_value = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ].column_title__text;
                    // add the relevant value to the out array
                    this.out_array_of_column_headings.push( this.curr_relevant_value );

                    // more debuuuug!
                    console.log("||||||  the out value is |"+this.curr_relevant_value+"|");
                }


                /// CHECK if it's a REGULAR value filtering COLUMN/value ///
                //
                if(  root_this_.relevant_column_types_for__basic_column_filtering__not_tags_filtering.indexOf( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ].column_type ) >= 0 ){

                    // debug
                    console.log("|||| the current column ( #"+this.curr_col_num_i+" / type |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ].column_type+"| ) is a regular filtering column/value");

                    // find the relevant value to add to the array
                    this.curr_relevant_value = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ].column_title__text;
                    // add the relevant value to the out array
                    this.out_array_of_column_headings.push( this.curr_relevant_value );

                    // more debuuuug!
                    console.log("||||||  the out value is |"+this.curr_relevant_value+"|");

                }

                /// CHECK if it's a TAGS filtering COLUMN/value ///
                //
                if(  root_this_.relevant_column_types_for__TAGS_column_filtering__not_basic_column_filtering.indexOf( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ].column_type ) >= 0 ){

                    // debug
                    console.log("|||| the current column ( #"+this.curr_col_num_i+" / type |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ].column_type+"| ) is a tags filtering columns. value");


                    //// loop through the tags and add them 
                    //		( or at least the relevant part of the tags array)
                    //
                    for( this.curr_tag_i = 0; this.curr_tag_i < root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ].header__value_choice_categories__listed_in_order_of_appearance.length; this.curr_tag_i++ ){

                        /// 	don't export this tag if it's in fact a 
                        //		   heading value
                        if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].type === "heading_1" ){

                            // skip this loop if it's a heading;
                            continue;

                            // debug, lame
                            console.log("!!! SKIPPING THIS TAG! ");
                        }

                        console.log("-------- working on tag#"+this.curr_tag_i+" >>> |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ][ this.curr_tag_i ]+"| <<<" );

                        // find the relevant value to add to the array
                        this.curr_relevant_value = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_i ].header_category_text ;

                        /* [ root_this_.tags__index_of_data_val_in_individual_tags_data ]; */
                        // add the relevant value to the out array
                        this.out_array_of_column_headings.push( this.curr_relevant_value );

                    }
                }


            } /// end  column information object				

            // export something nice								
            return this.out_array_of_column_headings.join( this.export_data__out_array__variable_separator_symbol );
        }








        ////////////////////////////////  tags! tinkering! area!
        ////////////////////////////////


        ///////////////////
        ///////////
        ///////////		set up the content of the tags menu
        ///////////
        ///////////

        this.set_up_tags_in_tags_drop_down_menu = function( root_this_, curr_header_bottom_area, curr_drop_down_menu_tags_columns_class_name, relevant_column_header_descr_obj_for_these_tags ){

            console.log( ">>>> set_up_tags_in_tags_drop_down_menu() - setting up tags for the tags columns w the class name |"+curr_drop_down_menu_tags_columns_class_name+"| of the col desc obj w the id |"+relevant_column_header_descr_obj_for_these_tags.column_header_outer_containing_div_id_name+"| and the col description object has "+relevant_column_header_descr_obj_for_these_tags.header__value_choice_categories__listed_in_order_of_appearance.length+" header items");


            //// select the relevant columns out there

            this.relev_columns = curr_header_bottom_area.find("."+curr_drop_down_menu_tags_columns_class_name );

            // debug
            console.log("- \t found "+this.relev_columns.length+" columns ");

            /// loop and make the right column menu items
            for( this.curr_column_item_i = 0; this.curr_column_item_i < relevant_column_header_descr_obj_for_these_tags.header__value_choice_categories__listed_in_order_of_appearance.length ; this.curr_column_item_i++ ){

                this.column_content_inner_text = relevant_column_header_descr_obj_for_these_tags.header__value_choice_categories__listed_in_order_of_appearance[ this.curr_column_item_i ].header_category_text ;

                this.column_content__relev_class = "";

                ////  find the right class for the tag menu item
                ////		depending on whether it's a category or regular item
                //  FIX : HAAARD CODING!
                if( relevant_column_header_descr_obj_for_these_tags.header__value_choice_categories__listed_in_order_of_appearance[ this.curr_column_item_i ].type === "value_choice" ){

                    this.column_content__relev_class = relevant_column_header_descr_obj_for_these_tags.tags__dropping_down_part_of_drop_down_menu__inner_column_div__tag_markup__class_name;

                }
                //  FIX : HAAARD CODING!
                else if( relevant_column_header_descr_obj_for_these_tags.header__value_choice_categories__listed_in_order_of_appearance[ this.curr_column_item_i ].type === "heading_1" ){

                    this.column_content__relev_class = relevant_column_header_descr_obj_for_these_tags.tags__dropping_down_part_of_drop_down_menu__inner_column_div__category_markup__class_name;

                }


                /// put it all together
                this.column_content_div = "<div class='"+this.column_content__relev_class+"'>"+this.column_content_inner_text +"</div>";

                this.relev_columns.eq( relevant_column_header_descr_obj_for_these_tags.header__value_choice_categories__listed_in_order_of_appearance[ this.curr_column_item_i ].in_column_num ).append( this.column_content_div );


                //// attach some nice data!
                //
                this.relev_columns.eq( relevant_column_header_descr_obj_for_these_tags.header__value_choice_categories__listed_in_order_of_appearance[ this.curr_column_item_i ].in_column_num ).find( "."+this.column_content__relev_class ).last().data( root_this_.tags__key_for_tag_i__inclHeaders, this.curr_column_item_i );


            }


            ////// bind the interactive options too please

            // to the drop down menu
            root_this_.bind_events_to_tags_drop_down_menu( root_this_, root_this_.index_of_tags_column_in_formatted_data_rows );

        }





        //////////   a function to set the tags data
        /////////		( in the column description object)
        //////////		given the click of a tag
        //////////
        //////////
        this.set_tags_menu_items_according_to_data__given_a_click = function( root_this_, tag_index_of_this_tag, relevant_col_description_object_index ){

            console.log(">>> set_tags_menu_items_according_to_data__given_a_click setting the tag data of tag i/# "+tag_index_of_this_tag );

            console.log(" \t - the original value of tag i "+tag_index_of_this_tag+" ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].header__value_choice_categories__listed_in_order_of_appearance[ tag_index_of_this_tag ].header_category_text+") was "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].header__value_choice_categories__listed_in_order_of_appearance[tag_index_of_this_tag ].current_selection__selectedTrueFalse );

            /// only set the tag value to a positive one if less than the max 
            //		number of tags have been selected??? 
            ///  this.check_for_n_copy_tags_marked_as_being_searched_for( root_this_ );

            //// set the new value 
            //     (it's a true/false value so, just flip it)
            root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].header__value_choice_categories__listed_in_order_of_appearance[tag_index_of_this_tag ].current_selection__selectedTrueFalse = !root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].header__value_choice_categories__listed_in_order_of_appearance[tag_index_of_this_tag ].current_selection__selectedTrueFalse;

            console.log(" \t - the new value is "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].header__value_choice_categories__listed_in_order_of_appearance[tag_index_of_this_tag ].current_selection__selectedTrueFalse );

        }





        //////////   a function the visual attributes of a tag in the 
        /////////		tags drop down menu, according to the data
        //////////		( in the column description object)
        //////////
        //////////

        this.set_visual_attribute_of_tag_in_tags_drop_down_menu_according_to_tag_data = function( root_this_, given_tag_index__according_to_tags_order_in_data, relevant_col_description_object_index ){

            console.log(">>>>  set_visual_attribute_of_tag_in_tags_drop_down_menu_according_to_tag_data - setting the visual attributes of tag # "+given_tag_index__according_to_tags_order_in_data+" according to data - namely to "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].header__value_choice_categories__listed_in_order_of_appearance[given_tag_index__according_to_tags_order_in_data ].current_selection__selectedTrueFalse );

            console.log(" trying to select - "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__dropping_down_part_of_drop_down_menu__inner_column_div__tag_markup__class_name );

            //// select the tags
            this.all_tag_divs = $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__dropping_down_part_of_drop_down_menu__inner_column_div__tag_markup__class_name );


            ///// loop through them to find the tag div in the drop down menu with the 
            //		relevant index
            //
            for( this.curr_tag_div_i = 0; this.curr_tag_div_i < this.all_tag_divs.length; this.curr_tag_div_i++ ){

                ///////   console.log("looping and checking whether tag #"+this.curr_tag_div_i+" has the data/index value "+given_tag_index__according_to_tags_order_in_data+" - ..and it has "+this.all_tag_divs.eq( this.curr_tag_div_i).data( root_this_.tags__key_for_tag_i__inclHeaders) );

                // check if it's the index we're looking for
                if( this.all_tag_divs.eq( this.curr_tag_div_i  ).data( root_this_.tags__key_for_tag_i__inclHeaders ) ===  given_tag_index__according_to_tags_order_in_data ){

                    // depending on the value, add or remove classes
                    ///// /console.log(" SUCCESS!!! ");

                    //// change markup depending on whether the value is true/false
                    if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].header__value_choice_categories__listed_in_order_of_appearance[given_tag_index__according_to_tags_order_in_data ].current_selection__selectedTrueFalse === true ){

                        // remove any selected class (just so we don't add two)
                        this.all_tag_divs.eq( this.curr_tag_div_i ).removeClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__dropping_down_part_of_drop_down_menu__inner_column_div__tag_markup__SELECTED__class_name );

                        // add the selected class
                        this.all_tag_divs.eq( this.curr_tag_div_i ).addClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__dropping_down_part_of_drop_down_menu__inner_column_div__tag_markup__SELECTED__class_name );


                    } // and if we're unselecting things…
                    else if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].header__value_choice_categories__listed_in_order_of_appearance[given_tag_index__according_to_tags_order_in_data ].current_selection__selectedTrueFalse === false ){

                        // remove any selected class
                        this.all_tag_divs.eq( this.curr_tag_div_i ).removeClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__dropping_down_part_of_drop_down_menu__inner_column_div__tag_markup__SELECTED__class_name );

                    }
                }

            }

        }





        ///////////
        ///////////   function to set all tag menu tags to the data
        ///////////		
        ///////////		( this can be used to either: 
        ///////////				- set all to blank
        ///////////				- set all to the data )
        ///////////

        this.set_all_tags_in_tags_menu_to_data__NEW = function( root_this_, relevant_col_description_object_index, add_tag_to_tags_listing_area_too ){

            console.log(">>>>> set_all_tags_in_tags_menu_to_unselected on col description obj #"+relevant_col_description_object_index );

            //// select the tags
            this.all_tag_divs = $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__dropping_down_part_of_drop_down_menu__inner_column_div__tag_markup__class_name );


            //// remove the selected class from them all
            this.all_tag_divs.removeClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__dropping_down_part_of_drop_down_menu__inner_column_div__tag_markup__SELECTED__class_name );

            //// loop through the tag divs in the drop down menu
            ////	and set them according to the data
            ////		- i.e. add the selected class as necessary 
            for( this.curr_tag_div_i = 0; this.curr_tag_div_i < this.all_tag_divs.length; this.curr_tag_div_i++ ){

                // which tag index does the div have?
                this.curr_tag_data_index = this.all_tag_divs.eq( this.curr_tag_div_i  ).data( root_this_.tags__key_for_tag_i__inclHeaders );

                //// if the corresponding tag in the data is true
                //		add the selected class
                if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_data_index ].current_selection__selectedTrueFalse === true ){

                    console.log("\t - setting tag |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].header__value_choice_categories__listed_in_order_of_appearance[ this.curr_tag_data_index ].header_category_text+"| / tag div i "+this.curr_tag_div_i +" to selected ")

                    /// and if needed, add a tag to the tags listing area
                    if( add_tag_to_tags_listing_area_too === true ){

                        // add the tag into the tags listing + bind interactions
                        root_this_.add_or_remove_tag_in_tags_listing_area_depending_on_tag_data( root_this_, this.curr_tag_data_index, relevant_col_description_object_index );

                    }

                    // do the actual adding
                    this.all_tag_divs.eq( this.curr_tag_div_i ).addClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__dropping_down_part_of_drop_down_menu__inner_column_div__tag_markup__SELECTED__class_name );

                } // end if 
            } // end for loop

        }






        ////////////
        ////////////	bind interaction to drop down menu items
        ////////////
        ////////////

        this.bind_events_to_tags_drop_down_menu = function( root_this_, relevant_col_description_object_index ){

            // hellow!
            console.log(">>>> bind_events_to_tags_drop_down_menu on relevant_col_description_object_index |"+relevant_col_description_object_index+"|");


            /////////  set the menu show/disappear
            ///
            $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__top_of_drop_down_menu__outer_div__class_name ).click( function(){

                //// set which menu is open 
                //		( good to know if one clicks the mousecatching area )
                root_this_.menus__currently_open_menu_name = root_this_.menus__name__tags_menu ;


                // hide the mouseover div
                root_this_.mouseover_div__HIDE( root_this_ );

                if( $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__dropping_down_part_of_drop_down_menu__outer_div__class_name ).css("display") === "block" ){

                    // debugging
                    console.log(" the drop down menu is a BLOCK ");

                    /// close the menu first, so it looks like something's happening
                    $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__dropping_down_part_of_drop_down_menu__outer_div__class_name ).toggle();

                    /// kick start the filtering/sorting 
                    root_this_.start_filtering_and_commitments_listing_process__given_user_interaction__table_edition( root_this_, true );

                }
                // if opening the menu, just open it
                else{
                    $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__dropping_down_part_of_drop_down_menu__outer_div__class_name ).toggle();
                }

                //// only start the filtering if the menu is being closed
                //		 ( and it was open before )
                /// i.e. start the filtering/sorting chain IF the menu is now being displayed 
                //		AND the click removes it


                ///  toggle the invisible background area, which is there to catch the
                //		clicks outside the menu
                /// $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].tags_drop_down_menu__invisible_background_div).toggle();
                $( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].tags_drop_down_menu__invisible_background_div).toggle();

            });



            //////// set the mouseover + click events on the 
            ///			tags

            /// mouseovers
            $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__dropping_down_part_of_drop_down_menu__inner_column_div__tag_markup__class_name ).hover(

                // on mouseover
                function(){

                    // add the rollover class
                    $(this).addClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__dropping_down_part_of_drop_down_menu__inner_column_div__tag_markup__ROLLOVER__class_name );
                },
                // on mouseout
                function(){
                    // add the rollover class
                    $(this).removeClass( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__dropping_down_part_of_drop_down_menu__inner_column_div__tag_markup__ROLLOVER__class_name );
                }

            );



            //////// the select none button
            $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__dropping_down_part_of_drop_down_menu__inner__select_none__class_name ).click( function(){

                console.log("CLIIIICK : select none!");

                // deselect all the tags values data
                root_this_.set_all_header_values_of_a_given_col_descr_obj_to_true_or_false( root_this_, relevant_col_description_object_index, false );

                // update the tags display
                root_this_.set_all_tags_in_tags_menu_to_data__NEW( root_this_, relevant_col_description_object_index, false );

                //// removing the tags in the tags listing area
                root_this_.remove_tags_in_the_relevant_col_tags_listing_area( root_this_, relevant_col_description_object_index );

            });




            //////////  on clicks
            ///				- modify data
            ///				- modify visuals

            $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__dropping_down_part_of_drop_down_menu__inner_column_div__tag_markup__class_name ).click( function(){

                // fetch the current data index
                this.curr_tag_data_index = $( this ).data( root_this_.tags__key_for_tag_i__inclHeaders );

                // update the data + fetch the current data value
                root_this_.set_tags_menu_items_according_to_data__given_a_click( root_this_, this.curr_tag_data_index, root_this_.index_of_tags_column_in_formatted_data_rows );

                // update the visuals in the tag drop down menu
                root_this_.set_visual_attribute_of_tag_in_tags_drop_down_menu_according_to_tag_data( root_this_, this.curr_tag_data_index, root_this_.index_of_tags_column_in_formatted_data_rows  );


                // add or remove a tag from the tags listing,
                // 	depending on whether the new data value is 
                //	false ( remove ) or true ( add )

                root_this_.add_or_remove_tag_in_tags_listing_area_depending_on_tag_data( root_this_, this.curr_tag_data_index, relevant_col_description_object_index );
                ///// this.curr_tag_data_value = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].header__value_choice_categories__listed_in_order_of_appearance

            });




            //////   clicking the invisible background area :
            //
            //			- toggle the menu area
            //			- start the filteirng
            ///  toggle the invisible background area, which is there to catch the
            //		clicks outside the menu

            ///////   $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].tags_drop_down_menu__invisible_background_div).click( function(){
            $( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].tags_drop_down_menu__invisible_background_div).click( function(){

                //  do the right thing
                //  	- depending on 
                root_this_.mouse_catching_area_helper__do_relevant_things_depending_on_which_menu_is_open( root_this_ );


                // toggle the dispay of the invisible region
                /////  $( this ).toggle();

            });


        }





        //////////
        //////////   remove tags from the tags listing area
        //////////
        //////////

        this.remove_tags_in_the_relevant_col_tags_listing_area = function( root_this_, relevant_col_description_object_index ){

            // 
            console.log(">>>> remove_tags_in_the_relevant_col_tags_listing_area - col#"+relevant_col_description_object_index );

            // remove the handlers in the tags listing area
            $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__tags_listing_area__outer_div ).off();

            // remove the tags in the tags listing area
            $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__tags_listing_area__outer_div ).empty();

        }





        //////////
        //////////   bind events to the tags in the tags listing area
        //////////
        //////////

        this.bind_events_to_the_LATEST_TAG_in_tags_listing_area = function( root_this_, relevant_col_description_object_index ){

            console.log(">>>>> bind_events_to_the_LATEST_TAG_in_tags_listing_area() on col descr object #"+relevant_col_description_object_index );


            /// bind an action to the close button of all the tags in the tags listing
            $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__tags_listing_area__individual_tag__cross_mark ).last().click( function(){

                // 
                console.log("clicked a cross/close mark!");

                this.curr_tag_in_data_index = $( this ).parent().data( root_this_.tags__key_for_tag_i__inclHeaders );

                console.log(" -- the tag data i of the current tag is "+this.curr_tag_in_data_index );


                /// change the data
                root_this_.set_tags_menu_items_according_to_data__given_a_click( root_this_, this.curr_tag_in_data_index, relevant_col_description_object_index );

                /// change the visual markup of the tag in the drop down menu
                root_this_.set_visual_attribute_of_tag_in_tags_drop_down_menu_according_to_tag_data ( root_this_, this.curr_tag_in_data_index, relevant_col_description_object_index );

                /// remove this div!
                root_this_.add_or_remove_tag_in_tags_listing_area_depending_on_tag_data( root_this_, this.curr_tag_in_data_index, relevant_col_description_object_index );


                //// and redo the filtering + dispay
                root_this_.start_filtering_and_commitments_listing_process__given_user_interaction__table_edition( root_this_, true );
            });

        }





        //////////
        //////////   add or remove tag in the tags listing area depending on its data value
        //////////
        //////////


        this.add_or_remove_tag_in_tags_listing_area_depending_on_tag_data = function( root_this_, curr_tag_data_index, relevant_col_description_object_index ){

            console.log(">>>>>  add_or_remove_tag_in_tags_listing_area_depending_on_tag_data of tag #"+curr_tag_data_index+" of col description obj #"+relevant_col_description_object_index );


            /// 
            this.curr_tag_data_value = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].header__value_choice_categories__listed_in_order_of_appearance[ curr_tag_data_index ].current_selection__selectedTrueFalse ;

            //
            console.log("\t -- curr tag tag data value === "+this.curr_tag_data_value );


            //// add or remove tags depending on whether the data value is true/false

            // add a tag if the data value is true
            //	( well the function checks whether the tag is there already, 
            //		so no duplicate tags are added)
            if( this.curr_tag_data_value === true ){

                console.log("\t --- adding a tag to the tags listing area ");
                root_this_.add_tag_into_listing_area( root_this_, curr_tag_data_index, relevant_col_description_object_index );

                // to the tags listing area
                root_this_.bind_events_to_the_LATEST_TAG_in_tags_listing_area( root_this_, relevant_col_description_object_index );

            }
            /// if the data value is false, 
            //		remove the tag.
            if( this.curr_tag_data_value === false ){

                console.log("\t --- REMOVING a tag to the tags listing area ");
                root_this_.remove_tag_from_listing_area( root_this_, curr_tag_data_index, relevant_col_description_object_index );
            }

        }






        /////////////////////////   tags in the tags listing area
        ////////


        ////////  add a tag 
        //			to the tags listing
        //			(after checking whether it exists)
        //

        this.add_tag_into_listing_area = function( root_this_, given_tag_index__according_to_tags_order_in_data, relevant_col_description_object_index ){

            console.log(">>>>. add_tag_into_listing_area() adding tag of tag index #"+given_tag_index__according_to_tags_order_in_data+" ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].header__value_choice_categories__listed_in_order_of_appearance[ given_tag_index__according_to_tags_order_in_data ].header_category_text+") into column id name |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].column_header_outer_containing_div_id_name+"|" );


            ////  remember to check if the tag already exists

            console.log(" debug : selecting "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__tags_listing_area__outer_div );

            // select the current tags
            //  - so you can loop through them and check if an element already exists
            this.current_tags = $("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__tags_listing_area__individual_tag__outer );

            // set a flag for whether the item has been found already
            this.given_tag_index_tag__already_exists_in_tags_listing = false;

            for( this.curr_item_i = 0; this.curr_item_i < this.current_tags.length; this.curr_item_i++ ){

                console.log("loooking at tag item #"+this.curr_item_i+" (data = |"+this.current_tags.eq( this.curr_item_i ).data( root_this_.tags__key_for_tag_i__inclHeaders )+"|) to check if it has a tag i of "+given_tag_index__according_to_tags_order_in_data+" \n - item.data -> " );
                console.log( this.current_tags.eq( this.curr_item_i ).data() );


                if( this.current_tags.eq( this.curr_item_i ).data( root_this_.tags__key_for_tag_i__inclHeaders ) === given_tag_index__according_to_tags_order_in_data ){

                    console.log("aha - the tag alreayd exists! - not adding it");

                    this.given_tag_index_tag__already_exists_in_tags_listing = true;

                    // test markup
                    this.current_tags.eq( this.curr_item_i );

                }
            }


            /////  add a new relevant tag,
            //			if it doesn't exist ( checked above ) already
            if( this.given_tag_index_tag__already_exists_in_tags_listing === false ){

                // generate the text
                this.tag_as_html_txt_to_append = "<div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__tags_listing_area__individual_tag__outer+"'><div class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__tags_listing_area__individual_tag__cross_mark+"'></div>"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].header__value_choice_categories__listed_in_order_of_appearance[ given_tag_index__according_to_tags_order_in_data ].header_category_text+"</div>";

                // add the html
                $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].column_header_outer_containing_div_id_name+" ."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__tags_listing_area__outer_div ).append( this.tag_as_html_txt_to_append );

                // append the data to the just created element
                $("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__tags_listing_area__individual_tag__outer ).last().data( root_this_.tags__key_for_tag_i__inclHeaders, given_tag_index__according_to_tags_order_in_data );

            }

            ////  bind data to the tag please
        }




        ////////  REMOVE a tag in the tags listing
        //			(after checking whether it exists)
        //

        this.remove_tag_from_listing_area = function( root_this_, given_tag_index__according_to_tags_order_in_data, relevant_col_description_object_index ){

            console.log(">>>>. remove_tag_from_listing_area() removing tag of tag index #"+given_tag_index__according_to_tags_order_in_data+" ("+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].header__value_choice_categories__listed_in_order_of_appearance[ given_tag_index__according_to_tags_order_in_data ].header_category_text+") into column id name |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].column_header_outer_containing_div_id_name+"|" );


            ////  remember to check if the tag already exists
            //
            console.log(" debug : selecting "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__tags_listing_area__outer_div );

            // select the current tags
            //  - so you can loop through them and check if an element already exists
            this.current_tags = $("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ relevant_col_description_object_index ].tags__tags_listing_area__individual_tag__outer );

            // loop and find the tag with the relevant 
            //	tag index in the data attached to the div
            for( this.curr_item_i = 0; this.curr_item_i < this.current_tags.length; this.curr_item_i++ ){

                console.log("loooking at tag item #"+this.curr_item_i+" (data = |"+this.current_tags.eq( this.curr_item_i ).data( root_this_.tags__key_for_tag_i__inclHeaders )+"|) to check if it has a tag i of "+given_tag_index__according_to_tags_order_in_data+" \n - item.data -> " );
                console.log( this.current_tags.eq( this.curr_item_i ).data() );


                if( this.current_tags.eq( this.curr_item_i ).data( root_this_.tags__key_for_tag_i__inclHeaders ) === given_tag_index__according_to_tags_order_in_data ){

                    console.log("aha - the tag exists! - removing it");

                    // test markup
                    this.current_tags.eq( this.curr_item_i ).remove();

                }
            }
        }




        ///////////////
        ///////////////		menu mouse-catching area helper:
        ///////////////			- do relevant things depending on
        ///////////////			which menu is clicked
        ///////////////
        //
        //	background info:
        //			the same mouse-catchign areas are used by all menus
        //			

        this.mouse_catching_area_helper__do_relevant_things_depending_on_which_menu_is_open = function( root_this_ ){

            console.log(">>>>> mouse_catching_area_helper__do_relevant_things_depending_on_which_menu_is_open() - currently 'menus__currently_open_menu_name' === |"+root_this_.menus__currently_open_menu_name+"|" );



            /// hide the mouse clicking area
            $("."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].tags_drop_down_menu__invisible_background_div ).hide();



            ///// do different things depending on which
            //			menu is open
            if( root_this_.menus__currently_open_menu_name === root_this_.menus__name__tags_menu ){

                console.log("\t - click "+root_this_.menus__name__tags_menu );

                //  toggle the drop down menu
                $( "."+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ 0 ].tags__dropping_down_part_of_drop_down_menu__outer_div__class_name ).hide();

                // start the filtering
                /// kick start the filtering/sorting 
                root_this_.start_filtering_and_commitments_listing_process__given_user_interaction__table_edition( root_this_, true );

            }else if( root_this_.menus__currently_open_menu_name === root_this_.menus__name__country_operations_menu ){

                console.log("\t - click "+root_this_.menus__name__country_operations_menu );

                // close it :) 
                $("."+root_this_.country_operations_menu__drop_down_area__outer__class_name ).hide();

            }


        }




        ////////////////////////////////////////////////    filtering! area! - TABLE EDITION
        ////////////////////////////////////////////////


        //////////////    start the filtering and updating of commitment values
        ///////////				- this happens after a sorting/filtering opetion has been clicked
        ///////////
        ///////////


        this.start_filtering_and_commitments_listing_process__given_user_interaction__table_edition = function( root_this_, do_we_redraw_the_commitment_listing ){

            //
            console.log(">>> start_filtering_and_commitments_listing_process__given_user_interaction__table_edition - the list of search/filtering steps looks like this : |"+root_this_.order_of_commitment_data_processing__table_edition+"|");

            /*
             howto:
             - do the filtering process on all the display/filtering objects
             - depending on whether what text-search filtering/  tags filtering / values filtering / we're doing
             - update the commtiments listing
             - basically do the listing from scratch, or optimise your methods at some point to do it faster */



            ////  start by resetting all the value counters
            //			for each object
            root_this_.reset_and_reinstantiate_value_counter_counters_of_ALL_display_area_objects( root_this_ );




            for( this.curr_suggested_data_processing_method_i = 0; this.curr_suggested_data_processing_method_i < root_this_.order_of_commitment_data_processing__table_edition.length ; this.curr_suggested_data_processing_method_i++ ){

                // //  SET WHETHER THE SEARCH IS A NEW SEARCH/FILTERING PROCESS
                //			DEPENDING ON WHETHER I === 0; // <<-- new search

                // default setting 
                this.filtering_on_preexisting_filterings__or__filtering_from_scratch = "filter_already_filtered_commitments";

                if( this.curr_suggested_data_processing_method_i === 0 ){
                    // if it's the first loop, then we're filtering from scratch
                    //	- in the next loops we'll filter based on the results from this first filtering
                    this.filtering_on_preexisting_filterings__or__filtering_from_scratch = "filter_from_scratch__ie_the_original_formatted_commitments";
                }



                //////// do different filtering for different steps in the specified filtering process
                //////
                /////.


                // if doing a text search filtering
                if( root_this_.order_of_commitment_data_processing__table_edition[ this.curr_suggested_data_processing_method_i ] === root_this_.data_processing__text_search_filtering ){

                    // hellow 
                    console.log(">>>>. staring a TEXT FILTERING for all display objects");

                    // go through all the display objects and do this filtering
                    for( this.curr_display_object_i = 0; this.curr_display_object_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length ; this.curr_display_object_i++ ){

                        /////  do tags based filtering
                        console.log("-- start_filtering_and_commitments_listing_process__given_user_interaction__table_edition() - doing a text search filtering object! - for display area # "+this.curr_display_object_i);


                        // adding matching commitments to the local display object array of matching commitments?
                        // just to make this very explicit here - it's a aparamenter in the function
                        this.add_filtered_commitments_to_array_of_matching_commtiments = true;

                        /// do the text search for this display area object 
                        root_this_.text_search_relevant_display_objects_relevant_textsearch_index_and_relevant_commitents( root_this_, root_this_.text_search__current_search_string, root_this_.commitment_display__n_filterning_n_sorting_areas[this.curr_display_object_i], root_this_.commitment_display__n_filterning_n_sorting_areas[this.curr_display_object_i].text_search_index, this.filtering_on_preexisting_filterings__or__filtering_from_scratch, this.add_filtered_commitments_to_array_of_matching_commtiments );

                    }


                }
                // if tages based filtering
                if( root_this_.order_of_commitment_data_processing__table_edition[ this.curr_suggested_data_processing_method_i ] === root_this_.data_processing__tags_filtering ){

                    // go through all the display objects and do this filtering
                    for( this.curr_display_object_i = 0; this.curr_display_object_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length ; this.curr_display_object_i++ ){

                        /////  do tags based filtering
                        console.log("-- start_filtering_and_commitments_listing_process__given_user_interaction__table_edition() - doing tags filtering! - for display area # "+this.curr_display_object_i);

                        // do the tags filtering
                        ////////  root_this_.filter_data_according_to_TAGS__NEW__w_value_count__NEW_all_or_any_filtering_added( this.filtering_on_preexisting_filterings__or__filtering_from_scratch, "matching_all_columns", root_this_, root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ]  );

                        ///  testing matching only some columns
                        root_this_.filter_data_according_to_TAGS__NEW__w_value_count__NEW_all_or_any_filtering_added( this.filtering_on_preexisting_filterings__or__filtering_from_scratch, "matching_only_some_columns___zero_tags_lets_all_commitments_through", root_this_, root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ]  );

                    }

                }
                //  if doing basic values filtering
                else if( root_this_.order_of_commitment_data_processing__table_edition[ this.curr_suggested_data_processing_method_i ] === root_this_.data_processing__basic_value_filtering_value  ){

                    ///////  console.log("\t\t- doing "+root_this_.data_processing__basic_value_filtering_value+" values filtering on all display objects ("+root_this_.commitment_display__n_filterning_n_sorting_areas.length+")");

                    // go through all the display objects and do this filtering
                    for( this.curr_display_object_i = 0; this.curr_display_object_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length ; this.curr_display_object_i++ ){

                        // do the relevant filtering
                        //		- DONT FORGET WHETHER THIS IS A NEW or USING-EXISTING-DATA search
                        root_this_.filter_basic_value_cell_data_according_to_column_filter_settings__NEW__w_value_count( this.filtering_on_preexisting_filterings__or__filtering_from_scratch, root_this_, root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ] );
                    }

                }
                // if doing text search based filtering
                else if( root_this_.order_of_commitment_data_processing__table_edition[ this.curr_suggested_data_processing_method_i ] === root_this_.data_processing__text_search_filtering ){

                }
                // if doing sorting
                else if( root_this_.order_of_commitment_data_processing__table_edition[ this.curr_suggested_data_processing_method_i ] === root_this_.data_processing__sorting ){

                    root_this_.update_sorting_and_optional_display_results_for_all_display_objects( root_this_, false );

                }


            }




            ///////
            ///////  for listing commitments
            ///			- if the display/filtering object has a flag set to show matching AND non matching commitments
            ///			then first print the matching commitments, and then print the non-matching commitments

            ///  only list the commitments if so desired.
            //		- good for the initial data listing
            if( do_we_redraw_the_commitment_listing === true ){

                ///  loop
                // go through all the display objects and do this filtering
                for( this.curr_display_object_i = 0; this.curr_display_object_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length ; this.curr_display_object_i++ ){


                    //  add summary the statistics line at the top of the commitments listing
                    // UNCOMMENT UNCOMMENT!
                    root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ].add_display_area_summary_statistics_line__to_commitments_listing_area( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ], "remove", this.curr_display_object_i );

                    // display the found commitments
                    ///// root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ].add_commitments_to_commitment_listing_area( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ], "keep" );
                    root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ].add_commitments_to_commitment_listing_area__NEW_inserts_more_html_in_one_bit( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ], "keep" );
                }


                ////  now bind some nice functions to the tick/cross marks
                //		- to enable the filtering interaction
                /////////   root_this_.bind_relev_interactive_functions_to_all_tick_n_cross_marks( root_this_ );


                /// and then bind the handlers to the interactive elements
                //	- like the country/display area level clickboxes and show more/less commitments
                //		button
                root_this_.bind_relev_interactive_functions_to_display_area_views_related_interactive_objects( root_this_ );


                /// and update the display area object selection boxes according ot the data
                root_this_.set__is_selected__clickbox__visual_appearance__according_to_data__on_ALL_display_areas( root_this_ );


                ////////  mouse-overs 
                //
                //////  summary statitics lines: 
                ///  bind the dom location data and event handlers
                //		
                if( root_this_.bind_mouse_overs_to_summary_statistics_lines === true ){
                    root_this_.set_up_dom_location_data_binding_and_event_handler__for__mousevoers__of__summary_statistics( root_this_ );
                }


                // endable/disable mosueovers for commitment 
                //	titles + full texts
                if( root_this_.bind_mouse_overs_to_commitment_titles_and_full_commitment_texts === true ){
                    //// commitment titles + full commitment texts:
                    /// bind the dom location data and set mouse-handlers
                    root_this_.set_up_location_data_binding_and_event_handler__for__mouseovers__of__commitment_titles_and_full_texts( root_this_ );
                }



            }


            //
            // end consolation :) 
            console.log("////   finished filtering/sorting/searching, etc... and displaying commitments ");


        }







        ////////////////////////////////////////////////    filtering! area! - GRAPH EDITION
        ////////////////////////////////////////////////


        //////////////    start the filtering and updating of commitment values
        ///////////				- this happens after a sorting/filtering opetion has been clicked
        ///////////
        ///////////


        this.start_filtering_and_commitments_listing_process__given_user_interaction__graph_edition = function( root_this_, deduplicate_matching_results, do_we_update_value_counters_with_summary_statistics, do_we_redraw_the_commitment_listing ){

            //
            console.log(">>> start_filtering_and_commitments_listing_process__given_user_interaction__table_edition - the list of search/filtering steps looks like this : |"+root_this_.order_of_commitment_data_processing__graph_edition+"|");

            /*
             howto:
             - do the filtering process on all the display/filtering objects
             - depending on whether what text-search filtering/  tags filtering / values filtering / we're doing
             - update the commtiments listing
             - basically do the listing from scratch, or optimise your methods at some point to do it faster */



            ////  start by resetting all the value counters
            //			for each object
            root_this_.reset_and_reinstantiate_value_counter_counters_of_ALL_display_area_objects( root_this_ );




            for( this.curr_suggested_data_processing_method_i = 0; this.curr_suggested_data_processing_method_i < root_this_.order_of_commitment_data_processing__graph_edition.length ; this.curr_suggested_data_processing_method_i++ ){

                // //  SET WHETHER THE SEARCH IS A NEW SEARCH/FILTERING PROCESS
                //			DEPENDING ON WHETHER I === 0; // <<-- new search

                // default setting 
                this.filtering_on_preexisting_filterings__or__filtering_from_scratch = "filter_from_original_commitments__add_to_existing_matching_commitments__deduplicate_later";

                if( this.curr_suggested_data_processing_method_i === 0 ){
                    // if it's the first loop, then we're filtering from scratch
                    //	- in the next loops we'll filter based on the results from this first filtering
                    this.filtering_on_preexisting_filterings__or__filtering_from_scratch = "filter_from_scratch__ie_the_original_formatted_commitments";
                }



                //////// do different filtering for different steps in the specified filtering process
                //////
                /////.


                // if doing a text search filtering
                if( root_this_.order_of_commitment_data_processing__graph_edition[ this.curr_suggested_data_processing_method_i ] === root_this_.data_processing__text_search_filtering ){

                    // hellow 
                    console.log(">>>>. staring a TEXT FILTERING for all display objects");

                    // go through all the display objects and do this filtering
                    for( this.curr_display_object_i = 0; this.curr_display_object_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length ; this.curr_display_object_i++ ){

                        /////  do tags based filtering
                        console.log("-- start_filtering_and_commitments_listing_process__given_user_interaction__table_edition() - doing a text search filtering object! - for display area # "+this.curr_display_object_i);


                        // adding matching commitments to the local display object array of matching commitments?
                        // just to make this very explicit here - it's a aparamenter in the function
                        this.add_filtered_commitments_to_array_of_matching_commtiments = true;

                        /// do the text search for this display area object 
                        root_this_.text_search_relevant_display_objects_relevant_textsearch_index_and_relevant_commitents( root_this_, root_this_.text_search__current_search_string, root_this_.commitment_display__n_filterning_n_sorting_areas[this.curr_display_object_i], root_this_.commitment_display__n_filterning_n_sorting_areas[this.curr_display_object_i].text_search_index, this.filtering_on_preexisting_filterings__or__filtering_from_scratch, this.add_filtered_commitments_to_array_of_matching_commtiments );

                    }


                }
                // if tages based filtering
                if( root_this_.order_of_commitment_data_processing__graph_edition[ this.curr_suggested_data_processing_method_i ] === root_this_.data_processing__tags_filtering ){

                    // go through all the display objects and do this filtering
                    for( this.curr_display_object_i = 0; this.curr_display_object_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length ; this.curr_display_object_i++ ){

                        /////  do tags based filtering
                        console.log("-- start_filtering_and_commitments_listing_process__given_user_interaction__table_edition() - doing tags filtering! - for display area # "+this.curr_display_object_i);

                        // do the tags filtering
                        ////////  root_this_.filter_data_according_to_TAGS__NEW__w_value_count__NEW_all_or_any_filtering_added( this.filtering_on_preexisting_filterings__or__filtering_from_scratch, "matching_all_columns", root_this_, root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ]  );

                        ///  testing matching only some columns
                        root_this_.filter_data_according_to_TAGS__NEW__w_value_count__NEW_all_or_any_filtering_added( this.filtering_on_preexisting_filterings__or__filtering_from_scratch, "matching_only_some_columns___zero_tags_lets_NO_NO_NO_commitments_through", root_this_, root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ]  );

                    }

                }
                //  if doing basic values filtering
                else if( root_this_.order_of_commitment_data_processing__graph_edition[ this.curr_suggested_data_processing_method_i ] === root_this_.data_processing__basic_value_filtering_value  ){

                    ///////  console.log("\t\t- doing "+root_this_.data_processing__basic_value_filtering_value+" values filtering on all display objects ("+root_this_.commitment_display__n_filterning_n_sorting_areas.length+")");

                    // go through all the display objects and do this filtering
                    for( this.curr_display_object_i = 0; this.curr_display_object_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length ; this.curr_display_object_i++ ){

                        // do the relevant filtering
                        //		- DONT FORGET WHETHER THIS IS A NEW or USING-EXISTING-DATA search
                        ///////////////  root_this_.filter_basic_value_cell_data_according_to_column_filter_settings__NEW__w_value_count( this.filtering_on_preexisting_filterings__or__filtering_from_scratch, root_this_, root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ] );


                        ////  fetch the list of relevant columns to check
                        root_this_.fetch_list_of_col_info_objects_with_selected_values( root_this_ );


                        // do the filtering
                        root_this_.filter_basic_value_cell_data_according_to_column_filter_settings__NEW__IN_A_GIVEN_LIST_OF_COLUMNS( root_this_.list_of_col_info_objs_with_selected_Values, "matching_only_some_columns", "matching_ANY_of_the_some_columns", this.filtering_on_preexisting_filterings__or__filtering_from_scratch, root_this_, root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i  ] );

                    }

                }
                // if doing sorting
                else if( root_this_.order_of_commitment_data_processing__graph_edition[ this.curr_suggested_data_processing_method_i ] === root_this_.data_processing__sorting ){

                    root_this_.update_sorting_and_optional_display_results_for_all_display_objects( root_this_, false );

                }


            }






            //////   do we deduplicate matching results?
            //			( in the graph page we do a separate values & tags filtering
            //			both processes adding commitments to the matching commitments list
            //			...so some deduplication is needed)
            if( deduplicate_matching_results === true ){

                ///  loop
                // go through all the display objects and do this filtering
                for( this.curr_display_object_i = 0; this.curr_display_object_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length ; this.curr_display_object_i++ ){

                    root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i ].deduplicate_matching_commitments_array( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i ] );

                }
            }



            /////  do we update the values counters with summary statistics?
            if( do_we_update_value_counters_with_summary_statistics === true ){


                //// update the counter please! 
                root_this_.do_value_counting_for_matching_commitments_for_graph_view( root_this_ );

            }




            ///////
            ///////  for listing commitments
            ///			- if the display/filtering object has a flag set to show matching AND non matching commitments
            ///			then first print the matching commitments, and then print the non-matching commitments

            ///  only list the commitments if so desired.
            //		- good for the initial data listing
            if( do_we_redraw_the_commitment_listing === true ){


                /// finally… redisplay items
                root_this_.change_update__display_areas__bars_and_bars_within_main_bar__according_to_data( root_this_ );

                // recount and redisplay the matching/total num of commitments. 
                root_this_.recount_and_redisplay__matching_and_total_num_of_commitments( root_this_ );

            }


            //
            // end consolation :) 
            console.log("////   finished filtering/sorting/searching, etc... and displaying commitments ");


        }







        /////////////
        //////////////		test function for filtering for graph page
        /////////////

        this.test_function__filtering_process_for_graph_page = function( root_this_ ){

            console.log(">>>>> test_function__filtering_process_for_graph_page() ");

            // state this a bit clearly

            this.do_we_deduplicate_matching_results = true;

            this.do_we_update_value_counters_with_summary_statistics = true;

            this.do_we_redraw = false;

            // go
            root_this_.start_filtering_and_commitments_listing_process__given_user_interaction__graph_edition( root_this_, this.do_we_deduplicate_matching_results, this.do_we_update_value_counters_with_summary_statistics, this.do_we_redraw );


        }





        /////////////
        //////////////		function for starting values+tags filtering and display
        /////////////			when clicking an option in the values/tags menu
        /////////////

        this.start_filtering_and_possibly_graph_redraw_when_clicking_values_and_tags_menu = function( root_this_, do_we_redraw_the_graph ){

            console.log(">>>>> start_filtering_and_possibly_graph_redraw_when_clicking_values_and_tags_menu() "+do_we_redraw_the_graph );

            // state this a bit clearly
            this.do_we_deduplicate_matching_results = true;

            // 
            this.do_we_update_value_counters_with_summary_statistics = true;

            // do we redraw the graph?
            this.do_we_redraw = false;
            if( do_we_redraw_the_graph === true ){
                this.do_we_redraw = true;
            }

            // go
            root_this_.start_filtering_and_commitments_listing_process__given_user_interaction__graph_edition( root_this_, this.do_we_deduplicate_matching_results, this.do_we_update_value_counters_with_summary_statistics, this.do_we_redraw );

        }










        //////////////////////////////
        /////////
        /////////   function to do the counting 
        /////////		for the graph view 
        /////////
        /////////	- this is needed to do separately due to 
        ////////		the duplicate commitment results…
        /////////		due to the AND operations…
        /////////	

        this.do_value_counting_for_matching_commitments_for_graph_view = function( root_this_ ){


            console.log(">>>>>>>  do_value_counting_for_matching_commitments_for_graph_view () ");


            // reset the value coutner
            root_this_.reset_and_reinstantiate_value_counter_counters_of_ALL_display_area_objects( root_this_ );

            ///// loop through the display areas and do it :) 
            //
            for( this.curr_display_object_i = 0; this.curr_display_object_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.curr_display_object_i++ ){

                /// recount the tags values
                //////// root_this_.update_tags_counter__graph_view_edition( root_this_, root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i ] );

                /// recount the basic values 
                //		for the current column selected by the display by menu
                root_this_.update_basic_values_counter__for_list_of_columns__graph_view_edition__NEW( [ root_this_.curr_col_info_column_num_used_for_display_by_menu__index ], root_this_, root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i ] );

                /// update the summary statistics counters
                root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i ].update_counter_obj_for_this_display_area_with_summary_statistics( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i ] );


            }

        }





        //////////////////////////////
        /////////
        /////////
        /////////		VALUE COUNTERS - reset the value counters of all display area objects
        /////////
        /////////

        this.reset_and_reinstantiate_value_counter_counters_of_ALL_display_area_objects = function( root_this_ ){

            console.log(">>>>>>>  reset_and_reinstantiate_value_counter_counters_of_ALL_display_area_objects () ");


            for( this.curr_display_object_i = 0; this.curr_display_object_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.curr_display_object_i++ ){

                root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i ].set_up_values_counter_for_this_commitment_display_area( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_object_i ] );

            }

        }









        /////////////////////////////////
        /////////
        /////////
        /////////		MOUSE-OVERS setups - data + bind event handler
        /////////
        /////////



        ////// mouseovers for the summary statistics lines
        //////


        //// a function that assigns the following data to each 
        //		summary statistics cell/columns:
        //		( i.e. ONLY IN THE COMMITMENTS LISTING DIV!)
        //		- current display object i 
        //		- current column i 
        //		- …something else?


        //// how?
        //
        //	- only look at the commitments listing div
        //  - go through each display area
        //	- go through each summary statistics cell
        //	- assign data! & bind handler!


        this.set_up_dom_location_data_binding_and_event_handler__for__mousevoers__of__summary_statistics = function( root_this_ ){

            ///// hellow!
            console.log( ">>>> set_up__set_up_dom_location_data_binding_and_event_handler__for__mousevoers__of__summary_statistics  ");

            console.log("selecting : |"+root_this_.table_view__main_commitments_listing_area__id_name +"| && |"+root_this_.commitment_display__n_filterning_n_sorting_areas[0].curr_display_area__outer_div__dom_reference+"| "+"."+root_this_.commitment_display__n_filterning_n_sorting_areas[0].commitment_cell__value_cell__outer_div__class_name+"| " );

            ////////  select the commitment display ara

            //////  $("#"+root_this_.table_view__main_commitments_listing_area__id_name+" ."+root_this_.commitment_display__n_filterning_n_sorting_areas[0].curr_display_area__outer_div__dom_reference+" " ).css('border', "1px dashed pink" );

            this.summary_statistics_lines = $("#"+root_this_.table_view__main_commitments_listing_area__id_name+" ."+root_this_.commitment_display__n_filterning_n_sorting_areas[0].display_area__commitments_listing_area__summary_statistics_row_outer_div__class_name );


            //// looked up offset for idicies of 
            //		the commitment listing columns
            //		( such that the column number vs. the column description
            //		objects is correct )
            this.column_offset_for_this_listing_area_div_thanks_to_cols_in_country_listing_div_area = this.country_listing_areas__hold_the_following_columns.length;


            // go through each summary statistics line 
            // ( there's one per dispay object area )
            for( this.curr_summary_statistics_line_i = 0; this.curr_summary_statistics_line_i < this.summary_statistics_lines.length; this.curr_summary_statistics_line_i++ ){

                console.log("- working on "+this.curr_summary_statistics_line_i+" / "+this.summary_statistics_lines.length+" ");

                /// select the cells of the current display area object
                this.curr_summary_statistics_line_cells = this.summary_statistics_lines.eq( this.curr_summary_statistics_line_i ).find( "."+root_this_.commitment_display__n_filterning_n_sorting_areas[0].commitment_cell__value_cell__outer_div__class_name );

                ////   this.summary_statistics_lines = this.summary_statistics_lines.css( "border", "1px dashed blue" );


                /// loop through each cell of the current display area
                //	(well, mostly the 
                for( this.curr_summary_statistics_row_cell_i = 0; this.curr_summary_statistics_row_cell_i < this.curr_summary_statistics_line_cells.length; this.curr_summary_statistics_row_cell_i++ ){

                    // curr col num including offset 
                    // (offset due to some columns being in the country listing, 
                    //  rather than in the commitments listing, as here )
                    this.curr_col_num_incl_offsets = this.curr_summary_statistics_row_cell_i+root_this_.column_offset_for_this_listing_area_div_thanks_to_cols_in_country_listing_div_area;

                    // select the current cell
                    this.curr_summary_statistics_cell = this.curr_summary_statistics_line_cells.eq( this.curr_summary_statistics_row_cell_i );


                    ///// only do things for the value columns
                    //
                    if( root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num_incl_offsets ].column_type === "basic_filter_column" ){


                        ///////   add data ( data indicies/coordinates )
                        //			- so one can figure out which 
                        //			cell is which, when mouse-overed!

                        /// add the current display object i 
                        // ( which is the same as the summary statistics i )
                        this.curr_summary_statistics_cell.data( this.commitment_cells_data_keys__curr_display_area_i, this.curr_summary_statistics_line_i  );

                        /// add the current column cell i 
                        //
                        //	( remember to add the column number offset
                        //	due to some of the columns being in the country
                        //	listing area )
                        this.curr_summary_statistics_cell.data( root_this_.commitment_cells_data_keys__curr_commitment_or_summary_statistics_or_header_COLUMN_i, this.curr_col_num_incl_offsets );

                        console.log(" raw col i === "+this.curr_summary_statistics_row_cell_i+" / corrected cell data col i : "+this.curr_summary_statistics_cell.data( root_this_.commitment_cells_data_keys__curr_commitment_or_summary_statistics_or_header_COLUMN_i )+" data key === "+root_this_.commitment_cells_data_keys__curr_commitment_or_summary_statistics_or_header_COLUMN_i );


                        ////  BIND A HOVER HANDLER?
                        //		- for mouseovers
                        this.curr_summary_statistics_cell.hover( function(){

                                console.log("fetching data of the curr cell w this key |"+root_this_.commitment_cells_data_keys__curr_commitment_or_summary_statistics_or_header_COLUMN_i+"|" );

                                //////  alert("hellow! - curr col i === "+$( this ).data( root_this_.commitment_cells_data_keys__curr_commitment_or_summary_statistics_or_header_COLUMN_i ) );


                                ///// look up indicies 
                                //
                                this.curr_display_area_num_i = $( this ).data( root_this_.commitment_cells_data_keys__curr_display_area_i );
                                //
                                this.curr_col_i = $( this ).data( root_this_.commitment_cells_data_keys__curr_commitment_or_summary_statistics_or_header_COLUMN_i );


                                //// start the header
                                //
                                this.header_html_txt = "";

                                // add the country name
                                //////////   this.header_html_txt += "<div id='"+"mouseover_div__country_name_makup"+"'>"+root_this_.return_country_name_given_display_area_num( root_this_, $( this ).data( root_this_.commitment_cells_data_keys__curr_display_area_i ) )+" : Country level statistics </div> <br/> <div id='"+"mouseover_div__column_name_text_markup"+"'>";

                                this.header_html_txt += "<div id='"+"mouseover_div__country_name_makup"+"'>"+root_this_.return_country_name_given_display_area_num( root_this_, this.curr_display_area_num_i )+" : Country level statistics </div> <div id='"+"mouseover_div__column_name_text_markup"+"'>";

                                // add comlumn num 
                                this.header_html_txt += root_this_.return_column_name_given_display_area_num__including_col_header_colour_html( root_this_, this.curr_col_i );

                                // close the header text
                                this.header_html_txt += "</div>";


                                ///////// and do the body text/html

                                this.body_html_txt = root_this_.summary_statistics_mouseover__return_statistics_breakdown_html( root_this_, this.curr_display_area_num_i, this.curr_col_i  );


                                /////alert("to-do: assign me a mouse-over handler please! display obj num -> "+this.curr_summary_statistics_cell.data( root_this.commitment_cells_data_keys__curr_display_area_num_i )+" / col num "+this.curr_summary_statistics_cell.data( root_this.commitment_cells_data_keys__curr_commitment_or_summary_statistics_or_header_COLUMN_i ) );

                                // send off teh mouseover texts to the mouseover area
                                root_this_.generate_mouseover__given_header_and_body_html_content( root_this_, this.header_html_txt, this.body_html_txt );

                            },
                            function(){
                                root_this_.mouseover_div__HIDE( root_this_ );
                            }

                        );


                        /// bind  a MOUSEMOVE function
                        //		- make the mouseover div follow the mouse
                        ////  BIND A HANDLER?
                        //		- for mouseovers
                        this.curr_summary_statistics_cell.mousemove( function( event ){

                            console.log(">>> mousemove within summary statistics!");

                            root_this_.mouseover_div__preselected.css("left", event.clientX+10 );
                            root_this_.mouseover_div__preselected.css("top", event.clientY );

                        });


                    }// check which column type we're dealing with 


                }// end cell/column i loop

            } // end each display object / summary statistics line loop

        } // end assign data 







        ////// mouseovers for the commitment titles and full texts
        //////


        //// a function that assigns the following data to each 
        //		commitment title and full text columns
        //		- current display object i 
        //		- current column i 


        //// how?
        //
        //	- only look at the commitments listing div
        //  - go through each display area
        //	- go through each summary statistics cell
        //	- assign data! & bind handler!


        this.set_up_location_data_binding_and_event_handler__for__mouseovers__of__commitment_titles_and_full_texts = function( root_this_ ){


            ///// hellow!
            console.log( ">>>> set_up_location_data_binding_and_event_handler__for__mouseovers__of__commitment_titles_and_full_texts  ");


            // lame debugging
            console.log("\t - selecting : curr_display_area__outer_div__dom_reference |"+root_this_.commitment_display__n_filterning_n_sorting_areas[0].curr_display_area__outer_div__dom_reference+"|");

            ////////  select the display areas 
            //				- both the country / commitment listing areas

            //  select the country listing area
            this.display_objects__country_listing_area = $( "#"+root_this_.table_view__countryNamesEtAl_area__belowHeadersArea__id_name ).find("."+root_this_.commitment_display__n_filterning_n_sorting_areas[0].curr_display_area__outer_div__dom_reference );

            // and the commitmnt listing area
            this.display_objects__coummitment_listing_area = $( "#"+root_this_.table_view__main_commitments_listing_area__id_name ).find("."+root_this_.commitment_display__n_filterning_n_sorting_areas[0].curr_display_area__outer_div__dom_reference );



            //// look up offset for idicies of 
            //		the commitment listing columns
            //		( such that the column number vs. the column description
            //		objects is correct )
            this.column_i_offset_for_the_commitment_listing_area_thanks_to_cols_in_country_listing_div_area = this.country_listing_areas__hold_the_following_columns.length;


            // go through each summary statistics line 
            // ( there's one per dispay object area )
            for( this.display_area_i = 0; this.display_area_i < this.display_objects__country_listing_area.length; this.display_area_i++ ){

                console.log("- working on "+this.display_area_i+" / "+this.display_objects__country_listing_area.length+" ");

                /// country listing area - select the commitment rows of the current display area object
                this.country_listing__curr_display_area_outer_commitment_rows = this.display_objects__country_listing_area.eq( this.display_area_i ).find( "."+root_this_.commitment_display__n_filterning_n_sorting_areas[0].display_area__commitments_listing_area__commitment_row_outer_div__class_name );

                /// commitment listing area - select the commitment rows of the current display area object
                this.commitment_listing__curr_display_area_outer_commitment_rows = this.display_objects__coummitment_listing_area.eq( this.display_area_i ).find( "."+root_this_.commitment_display__n_filterning_n_sorting_areas[0].display_area__commitments_listing_area__commitment_row_outer_div__class_name );



                /// look up the total number of columns per row


                /// loop through each commitment row

                //	(well, mostly the 
                for( this.curr_commitment_row = 0; this.curr_commitment_row < this.country_listing__curr_display_area_outer_commitment_rows.length; this.curr_commitment_row++ ){


                    ///////   select, set and bind the following:
                    //	    	  	- commitment title - in the country listing div
                    //				- the full commtiment text - in the commitments listing


                    //// select
                    //

                    //// select the reelvant commitment title things 
                    //		- in the country listing area

                    this.relev_commitment_title_cell = this.country_listing__curr_display_area_outer_commitment_rows.eq( this.curr_commitment_row ).find(".individual_commitment_cell__outer_div").eq( root_this_.country_listing__commitment_title_col_num_i );

                    //// this.relev_commitment_title_cell.css("border", "1px dashed blue" );

                    console.log(" \t\t- working on display obj #"+this.display_area_i+" and row #"+this.curr_commitment_row+". which has |"+this.relev_commitment_title_cell.length+"| cells" );


                    //// select the relevant full commitment text
                    //		 - in the commitemnts listing area

                    this.relev_full_commitment_text_cell = this.commitment_listing__curr_display_area_outer_commitment_rows.eq( this.curr_commitment_row ).find(".individual_commitment_cell__outer_div").eq( root_this_.commitment_listing__full_commitment_text_i__relative_to_commitment_listing_col_nums );

                    //// this.relev_full_commitment_text_cell.css("border", "1px dashed blue" );



                    //////  attach the data
                    //			- type of cell ???
                    //			- curr display area num
                    //			- curr commitment num
                    //

                    ////  set which display object this is
                    //
                    this.relev_commitment_title_cell.data( root_this_.commitment_cells_data_keys__curr_display_area_i, this.display_area_i );
                    this.relev_full_commitment_text_cell.data( root_this_.commitment_cells_data_keys__curr_display_area_i, this.display_area_i );


                    //// the current commitment number
                    //
                    this.relev_commitment_title_cell.data( root_this_.commitment_cells_data_keys__curr_commitment_i, this.curr_commitment_row );
                    this.relev_full_commitment_text_cell.data( root_this_.commitment_cells_data_keys__curr_commitment_i, this.curr_commitment_row );


                    //////// attach the interaction
                    //

                    // for the commitment titles
                    this.relev_commitment_title_cell.hover( function(){

                            /////// console.log(" this object has data | display area #"+$( this ).data( root_this_.commitment_cells_data_keys__curr_display_area_i )+" and commitment #"+$(this).data( root_this_.commitment_cells_data_keys__curr_commitment_i ) );

                            this.curr_display_num = $( this ).data( root_this_.commitment_cells_data_keys__curr_display_area_i );
                            this.curr_commitment_num = $(this).data( root_this_.commitment_cells_data_keys__curr_commitment_i );

                            //////// console.log(" commitment title -> "+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_num ].curr_filter_n_sort__MATCHING_commitments[ this.curr_commitment_num ][ root_this_.commitment_data__commitment_title_text_index ]  );

                            // test out
                            root_this_.generate_or_close_mouseover_for_commitment_title_or_full_commitment_text( root_this_, true, true, this );
                        },
                        /// or hide it
                        function(){

                            root_this_.mouseover_div__HIDE( root_this_ );

                        } );



                    //// and for the full commitment text cells

                    this.relev_full_commitment_text_cell.hover( function(){

                            //////// console.log(" this object has data | display area #"+$( this ).data( root_this_.commitment_cells_data_keys__curr_display_area_i )+" and commitment #"+$(this).data( root_this_.commitment_cells_data_keys__curr_commitment_i ) );

                            this.curr_display_num = $( this ).data( root_this_.commitment_cells_data_keys__curr_display_area_i );
                            this.curr_commitment_num = $(this).data( root_this_.commitment_cells_data_keys__curr_commitment_i );

                            ///////// console.log(" commitment full text ->||||"+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_num ].curr_filter_n_sort__MATCHING_commitments[ this.curr_commitment_num ][ root_this_.commitment_data__fullcommitment_text_index ]+"||||<-"  );

                            // test out
                            root_this_.generate_or_close_mouseover_for_commitment_title_or_full_commitment_text( root_this_, true, false, this );

                        },
                        /// or show it
                        function(){

                            root_this_.mouseover_div__HIDE( root_this_ );

                        } );



                    /////// and he related mouseomoves

                    /// bind  a MOUSEMOVE function
                    //		- make the mouseover div follow the mouse
                    ////  BIND A HANDLER?
                    //		- for mouseovers
                    this.relev_commitment_title_cell.mousemove( function( event ){

                        console.log(">>> mousemove within summary statistics!");

                        root_this_.mouseover_div__preselected.css("left", event.clientX+10 );
                        root_this_.mouseover_div__preselected.css("top", event.clientY );

                    });


                    /// bind  a MOUSEMOVE function
                    //		- make the mouseover div follow the mouse
                    ////  BIND A HANDLER?
                    //		- for mouseovers
                    this.relev_full_commitment_text_cell.mousemove( function( event ){

                        console.log(">>> mousemove within summary statistics!");

                        root_this_.mouseover_div__preselected.css("left", event.clientX+10 );
                        root_this_.mouseover_div__preselected.css("top", event.clientY );

                    });




                }// end commitment row loop

            } // end each display object / summary statistics line loop

        } // end assign data 






        //////////  function to do the mouse-over display of 
        ////			commitment titles or full commitment texts

        this.generate_or_close_mouseover_for_commitment_title_or_full_commitment_text = function( root_this_, show_or_hide_mouseover__trueFalse, commitment_title_or_full_commitment_text__trueFalse, commitment_this ){


            console.log(">>>>>>>  generate_or_close_mouseover_for_commitment_title_or_full_commitment_text) - show or hide  commitment/full text |"+commitment_title_or_full_commitment_text__trueFalse+"| ? |"+show_or_hide_mouseover__trueFalse+"|" );


            ///// close or generate the mouseover div 

            /// close it?
            if( show_or_hide_mouseover__trueFalse === false ){

                console.log("close the mouseover div please ");

            }
            //// generate a new moueover div?
            else if( show_or_hide_mouseover__trueFalse === true ){

                // debugging 
                console.log('Generating a commitment title or full text mouseover-div');



                //// persistant OUT things

                // 
                this.header_html_txt = "";

                //
                this.body_html_txt = "";



                //// display areas / commitment num fetches

                // fetch the display area num
                this.curr_display_num = $( commitment_this ).data( root_this_.commitment_cells_data_keys__curr_display_area_i );

                // fetch the curr commitment num
                this.curr_commitment_num = $( commitment_this ).data( root_this_.commitment_cells_data_keys__curr_commitment_i );


                // more debugging 
                console.log(" \t - the current display area num === "+this.curr_display_num+" and the curr commitment num === "+this.curr_commitment_num );



                //// start the header
                //
                this.header_html_txt += "<div id='"+"mouseover_div__country_name_makup"+"'>"+root_this_.return_country_name_given_display_area_num( root_this_, this.curr_display_num)+" : <br/> </div> <div id='"+"mouseover_div__column_name_text_markup"+"'>";



                ////// fetch commitment titles or full commitment texts
                //		depending on what's needed

                // commitment titles
                if( commitment_title_or_full_commitment_text__trueFalse === true ){

                    console.log("\t\t - printing the commitment title ");

                    this.body_html_txt = root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_num ].curr_filter_n_sort__MATCHING_commitments[ this.curr_commitment_num ][ root_this_.commitment_data__commitment_title_text_index ] ;

                    console.log("\t\t\t - commitment title -> "+this.commitment_title_html+"<--") ;


                    /// add the reelvant col name to the header
                    this.header_html_txt += root_this_.return_column_name_given_display_area_num__including_col_header_colour_html( root_this_, 1 );


                }
                ///// (or) generate  the commitment text
                else if( commitment_title_or_full_commitment_text__trueFalse === false ){

                    console.log("\t\t - printing the full commitment text ");

                    this.body_html_txt = root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_num ].curr_filter_n_sort__MATCHING_commitments[ this.curr_commitment_num ][ root_this_.commitment_data__fullcommitment_text_index ];

                    // and replace the carriage returns with 
                    //		<br/>s, so the commitment texts
                    //		don't just become a bloack of text...
                    /////// DOES THIS WORK?
                    /////////// this.full_commitment_text_html.replace(/(\r\n|\n|\r)/g,"<br />");

                    // test print the text
                    console.log("\t\t\t - commitment full text ->||||"+this.full_commitment_text_html+"||||<-"  );


                    /// add the reelvant col name to the header
                    this.header_html_txt += root_this_.return_column_name_given_display_area_num__including_col_header_colour_html( root_this_, 2 );

                }


                //////  finish the header text
                this.header_html_txt += "</div>";



                ////////// send things to the mouseover
                ///

                //// test send the commitment title / full text
                //
                root_this_.generate_mouseover__given_header_and_body_html_content( root_this_, this.header_html_txt, this.body_html_txt );




            }

        }




        ///////// find and bind relevant mouse-events 
        //				- for the header objects!
        //
        //

        this.set_up_location_data_binding_and_event_handler__for__MOUSEOVERS__of__COLUMN_HEADERS = function( root_this_ ){

            // hellow!
            console.log(">>>>>  set_up_location_data_binding_and_event_handler__for__MOUSEOVERS__of__COLUMN_HEADERS() ");


            ///// go through the different column headers
            //			and assign location and event handlers

            for( this.curr_col_num = 1; this.curr_col_num < root_this_.column_information_objects_listed_in_the_order_of_the_columns.length ; this.curr_col_num++ ){

                console.log("\t - working on col #"+this.curr_col_num+"/"+root_this_.column_information_objects_listed_in_the_order_of_the_columns.length+" selecting header id |"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num ].column_header_outer_containing_div_id_name+"|");

                ///// select the current header 
                //// 
                this.curr_col_header_outer_div_dom = $("#"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_col_num ].column_header_outer_containing_div_id_name );

                // test the selection
                /////  this.curr_col_header_outer_div_dom.css("border", "1px dashed red");

                /////  assign the data
                ///
                this.curr_col_header_outer_div_dom.data( root_this_.commitment_cells_data_keys__curr_commitment_or_summary_statistics_or_header_COLUMN_i, this.curr_col_num );


                /////  assign hover event handler! 
                ///
                this.curr_col_header_outer_div_dom.hover( function(){

                        ////// SHOW it 
                        //
                        this.curr_header_col_num = $( this ).data( root_this_.commitment_cells_data_keys__curr_commitment_or_summary_statistics_or_header_COLUMN_i ) ;

                        this.curr_column_header_html__title = root_this_.return_column_name_given_display_area_num__including_col_header_colour_html( root_this_, this.curr_header_col_num );

                        this.curr_column_header_html__description = root_this_.column_information_objects_listed_in_the_order_of_the_columns[ this.curr_header_col_num ].mouse_over_text_reference;

                        console.log("yay, hovering over column num #"+$( this ).data( root_this_.commitment_cells_data_keys__curr_commitment_or_summary_statistics_or_header_COLUMN_i )+" which is the |"+this.curr_column_header_html__title+"| columns" );

                        root_this_.generate_mouseover__given_header_and_body_html_content( root_this_, this.curr_column_header_html__title, this.curr_column_header_html__description );
                    },
                    //// HIDE it
                    //
                    function(){

                        // hide it
                        root_this_.mouseover_div__HIDE( root_this_ );

                    }

                );



                /// bind  a MOUSEMOVE function
                //		- make the mouseover div follow the mouse
                this.curr_col_header_outer_div_dom.mousemove( function( event ){

                    console.log(">>> mousemove within summary statistics!");

                    root_this_.mouseover_div__preselected.css("left", event.clientX+10 );
                    root_this_.mouseover_div__preselected.css("top", event.clientY );

                });

            }


        }





        /////////// MOUSEOVER DIV : SHOW IT
        //

        this.mouseover_div__SHOW = function( root_this_ ){

            console.log(">>>> mouseover_div__SHOW");

            //// set the mouseover to visible
            //		(it might or might not be visible )

            /// select the mouseover area
            root_this_.mouseover_div__preselected = $("#"+this.mouseover_div__outer_div_dom_element__id_name );

            // remove any invisible class name
            root_this_.mouseover_div__preselected.removeClass( root_this_.mouseover_div__outer_div_dom_element__IS_INVISIBLE );
            // add the visible class name
            root_this_.mouseover_div__preselected.addClass( root_this_.mouseover_div__outer_div_dom_element__IS_VISIBLE );

        }





        /////////// MOUSEOVER DIV : HIDE IT
        //

        this.mouseover_div__HIDE = function( root_this_ ){

            console.log(">>>> mouseover_div__HIDE");

            //// set the mouseover to visible
            //		(it might or might not be visible )

            /// select the mouseover area
            this.the_mouseover_div = $("#"+this.mouseover_div__outer_div_dom_element__id_name );

            // remove any isible class name
            this.the_mouseover_div.removeClass( root_this_.mouseover_div__outer_div_dom_element__IS_VISIBLE );
            // add the invisible class name
            this.the_mouseover_div.addClass( root_this_.mouseover_div__outer_div_dom_element__IS_INVISIBLE );

        }



        ///////// fetch various things based on: 
        ////		- display area num 
        ////		- column num
        ////		- commitment num


        /// fetch the country name
        //
        this.return_country_name_given_display_area_num = function( root_this_, display_area_num ){

            console.log(">>>> return_country_name_given_display_area_num() -> for display area num "+display_area_num );

            console.log( " ... which is "+root_this_.commitment_display__n_filterning_n_sorting_areas[ display_area_num ].country_name  );

            return root_this_.commitment_display__n_filterning_n_sorting_areas[ display_area_num ].country_name ;
        }



        /// fetch the column name
        //
        this.return_column_name_given_display_area_num = function( root_this_, curr_col_num ){

            console.log(">>>> return_column_name_given_display_area_num() -> for display area num "+curr_col_num );

            console.log( " ... which is "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].column_title__text );

            return root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].column_title__text;
        }



        /// as the above but it also includes the column colour class name
        //
        this.return_column_name_given_display_area_num__including_col_header_colour_html = function( root_this_, curr_col_num ){

            console.log(">>>> return_column_name_given_display_area_num() -> for display area num "+curr_col_num );

            console.log( " ... which is "+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].column_title__text );

            this.return_me_text = "<span class='"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].column_title__class_name+"'>"+root_this_.column_information_objects_listed_in_the_order_of_the_columns[ curr_col_num ].column_title__text+"</span>";

            console.log(" generate column name ... the out text looks a bit like this : |"+this.return_me_text+"|");

            return this.return_me_text ;
        }



        ///// IN PROGRESS : fetch all selected values : for printing summary statistics columns
        //


        this.summary_statistics_mouseover__return_statistics_breakdown_html = function( root_this_, curr_display_area_i, curr_col_i ){

            console.log(">>>>>>>>  summary_statistics_mouseover__return_selected_values_text for display area #"+curr_display_area_i+" and col #"+curr_col_i );


            ///// out texts
            //		( there are several, as there are some things that are needed to do in paralell )
            //


            //// for the text listing of selected values
            this.selected_values_names_html = "Selected &nbsp; : &nbsp; &nbsp; &nbsp;";
            // and as an array - which will help build the above
            this.selected_values_as_array = [];

            ////
            this.complete_value_statistics_summary_html = "";



            //// loop and generate something nice :) 
            //
            //  (run like the wind…) and go through the values
            //		in the given column header obj and the counter
            //		version of the same
            //
            for( this.current_value_counter_col_value_i = 0; this.current_value_counter_col_value_i < root_this_.commitment_display__n_filterning_n_sorting_areas[ curr_display_area_i ].values_counter_obj_for_this_display_obj[ curr_col_i ].header__value_choice_categories__listed_in_order_of_appearance.length; this.current_value_counter_col_value_i++ ){


                /// work on the text suggesting which entries were selected 
                if( root_this_.commitment_display__n_filterning_n_sorting_areas[ curr_display_area_i ].values_counter_obj_for_this_display_obj[ curr_col_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.current_value_counter_col_value_i ].current_selection__selectedTrueFalse === true ){

                    this.selected_values_as_array.push( "<span class='"+root_this_.commitment_display__n_filterning_n_sorting_areas[ curr_display_area_i ].values_counter_obj_for_this_display_obj[ curr_col_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.current_value_counter_col_value_i ].header__class_name_selected+"'>"+root_this_.commitment_display__n_filterning_n_sorting_areas[ curr_display_area_i ].values_counter_obj_for_this_display_obj[ curr_col_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.current_value_counter_col_value_i ].header_category_text+"</span> " );

                }


                /// work on the the complete statistics breakdown
                //		- just keep adding values and their statistics

                // add teh enclosing div for a row
                this.complete_value_statistics_summary_html += "<div class='"+root_this_.mouseover_summary_statistics__breakdown_statistics_row+"'>";

                // add the value name + markup
                this.complete_value_statistics_summary_html += "<span class='"+root_this_.mouseover_summary_statistics__breakdown_statistics_row__value_name+" "+root_this_.commitment_display__n_filterning_n_sorting_areas[ curr_display_area_i ].values_counter_obj_for_this_display_obj[ curr_col_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.current_value_counter_col_value_i ].header__class_name_selected+"' >"+root_this_.commitment_display__n_filterning_n_sorting_areas[ curr_display_area_i ].values_counter_obj_for_this_display_obj[ curr_col_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.current_value_counter_col_value_i ].header_category_text+" : </span> : ";

                // calculate the percent value 
                this.percent_value = parseInt((( root_this_.commitment_display__n_filterning_n_sorting_areas[ curr_display_area_i ].values_counter_obj_for_this_display_obj[ curr_col_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.current_value_counter_col_value_i ].found_instances_of_this_value / root_this_.commitment_display__n_filterning_n_sorting_areas[ curr_display_area_i ].all_commitments__unfiltered.length )*1000))/10;

                // add teh percentage of found commitments with this value
                this.complete_value_statistics_summary_html += "<div class='"+root_this_.mouseover_summary_statistics__breakdown_statistics_row__percent_num+"' >"+this.percent_value+"% </div>";


                // add teh absolute number of found commitments with this value + markup
                this.complete_value_statistics_summary_html += "<div class='"+root_this_.mouseover_summary_statistics__breakdown_statistics_row__abs_found_commitments_num+"' >"+root_this_.commitment_display__n_filterning_n_sorting_areas[ curr_display_area_i ].values_counter_obj_for_this_display_obj[ curr_col_i ].header__value_choice_categories__listed_in_order_of_appearance[ this.current_value_counter_col_value_i ].found_instances_of_this_value+"  / "+root_this_.commitment_display__n_filterning_n_sorting_areas[ curr_display_area_i ].all_commitments__unfiltered.length+"</div>";


                // and close the row
                this.complete_value_statistics_summary_html += "</div> <br/> ";
            }


            /////// put the selected bits offse text together
            //				and add a "+" in between each element
            for( this.curr_selected_value_i = 0; this.curr_selected_value_i < this.selected_values_as_array.length; this.curr_selected_value_i++ ){

                this.selected_values_names_html += this.selected_values_as_array[ this.curr_selected_value_i ];

                if( this.curr_selected_value_i < this.selected_values_as_array.length-1 ) {

                    this.selected_values_names_html += " + ";
                }
            }


            //// and return something nice 

            return this.selected_values_names_html+" <br/><br/> "+this.complete_value_statistics_summary_html;

        }






        //////// generate a mouse-over
        ///////		- given header/body content
        //
        //
        //		- the general idea is that 
        //		there's a header and footer section
        //		that's the same for all mouse-overs.
        //
        //		- there are different scripts 
        //		for the different types of mouse-overs
        //		that generate the header/body content.
        //


        this.generate_mouseover__given_header_and_body_html_content = function( root_this_, header_html_content, body_html_content ){

            console.log(">>>>>  generate_mouseover__given_header_and_body_html_content() ");

            /////////   console.log(" \t - the header content looks like this : |"+header_html_content+"| and we're setting it to id |"+root_this_.mouseover_div__header__outer_area+"|" );

            // feedback
            /// console.log("generating the mouseover - received the following txt for the header : |"+header_html_content+"|");
            ////  console.log("generating the mouseover - received the following txt for the body : |"+body_html_content+"|");


            /// select the mouseover area
            this.the_mouseover_div = $("#"+this.mouseover_div__outer_div_dom_element__id_name );


            /////// the general shell for everything
            /// 
            this.complete_mouseover_html = "";


            ///// - header - 

            /// add the header shell
            this.complete_mouseover_html += "<div id='"+root_this_.mouseover_div__header__outer_area+"'>";

            /// add the user header content
            this.complete_mouseover_html += header_html_content;

            /// close the header
            this.complete_mouseover_html += "</div>";




            //// - body -

            /// add the body shell
            this.complete_mouseover_html += "<div id='"+root_this_.mouseover_div__body__outer_area+"'>";

            /// add the user body content
            this.complete_mouseover_html += body_html_content;

            /// close the body
            this.complete_mouseover_html += "</div>";




            ///////// and finally

            // empty the current content of the 
            //	mouseover
            this.the_mouseover_div.empty();

            //// add the just-generated content into the 
            //		mouseover
            this.the_mouseover_div.append( this.complete_mouseover_html );


            //// set the mouseover to visible
            //		(it might or might not be visible )

            // remove any invisible class name
            root_this_.mouseover_div__SHOW( root_this_ );
        }






        /////////////////////////////
        /////////////////////////////    RESET FILTERING
        /////////////
        ////////////


        this.reset_search_filter_settings_n_interface_elemnents = function( root_this_ ){

            // hellow
            console.log(">>>>>>  reset_search_filter_settings_n_interface_elemnents() ");



            /////////  reset the filtering options    ///////
            ///////

            console.log("----- reset_search_filter_settings_n_interface_elemnents ---- resetting all filteirng values ");
            root_this_.reset_all_filtering_values( root_this_ );



            /////////  reset the tags options    ///////
            ///////

            console.log("----- reset_search_filter_settings_n_interface_elemnents ---- resetting all tags values ");
            root_this_.set_all_TAGS_VALUES_search_values_to_true_or_false( root_this_, false );

            // set the tags in the menu according to the data
            root_this_.set_all_tags_in_tags_menu_to_data__NEW( root_this_, root_this_.index_of_tags_column_in_formatted_data_rows, false );

            // remove the tags in the column listing area
            root_this_.remove_tags_in_the_relevant_col_tags_listing_area( root_this_, root_this_.index_of_tags_column_in_formatted_data_rows );


            /////////  reset the text search options    ///////
            ///////
            root_this_.reset_text_box__n__text_search_string_in_code( root_this_ );



            ///////  reset the country operations things!
            ////
            root_this_.set_up_country_centric_display_areas__incl_divs__n__print_commitments( root_this_ );


            /////////  reset the view ( retain the current country/commitment view settings )
            ///////

            /////   root_this_.reset_search_filter_settings_n_interface_elemnents( root_this_, true );


        }






        //  //  //  //  //  //  //  //  //  //  //  // //  //  //  //  //  //  // //  //  //   
        //  //  //  //  //  //  //  //  //  //  //  // //  //  //  //  //  //  // //  //  //   
        //  //  //  //  //  //  //  //  //  //  //  // //  //  //  //  //  //  // //  //  //   
        //  //  //  
        //////////  for testing the filtering


        this.test_basic_filtering = function(){

            console.log(" >>>>> testing filtering with test_filtering()" );
            this.arrange_formatted_commitment_arrays_into_country_or_commitment_centric_ordering( this, "commitment_centric" );

            this.filter_data_according_to_column_filter_settings( this, this.table_data_arranged_commitment_or_country_centric );
            /////////  this.filter_basic_value_cell_data_according_to_column_filter_settings__NEW__w_value_count( "filter_from_scratch__ie_the_original_formatted_commitments", root_this_, relev_commitments_display_obj );


        }



        ///////  test country or commitment centric arrangment of commitments


        this.test_commitment_arrangement = function(){

            console.log(" >>>>> testing filtering with test_filtering()" );
            this.arrange_formatted_commitment_arrays_into_country_or_commitment_centric_ordering( this, "country_centric" );

            ///// this.filter_data_according_to_column_filter_settings( this, this.table_data_arranged_commitment_or_country_centric );

        }



        //// and for the tags

        this.test_tags_filtering = function(){

            // 
            console.log( ">>>>>  this.text_tags_filtering() ");

            this.filter_commitments_based_on_tags( this, this.table_data__formatted_according_to_relevant_column_order );

            // 
            console.log("//////  text_tags_filtering() - DONE! ");

        }



        /// test the new display-area-centric filtering

        this.test_display_area_filtering__with_regular_filtering = function( root_this_ ){

            // hellow
            console.log(" >>>> test_display_area_filtering__with_regular_filtering ");

            // set up country-centric display areas please
            this.set_commitment_arrangement_to_country_centric( root_this_ );
            this.set_commitment_arrangement_to_commitment_centric( root_this_ );

            // test filtering on albania
            this.filter_basic_value_cell_data_according_to_column_filter_settings__NEW__w_value_count( "filter_from_scratch__ie_the_original_formatted_commitments", root_this_, root_this_.commitment_display__n_filterning_n_sorting_areas[0]  );

        }



        this.test_display_area_filtering__with_TAGS_filtering = function( root_this_ ){

            // hellow
            console.log(" >>>> test_display_area_filtering__with_TAGS_filtering() ");

            // set up country-centric display areas please
            this.set_commitment_arrangement_to_country_centric( root_this_ );
            this.set_commitment_arrangement_to_commitment_centric( root_this_ );

            // test filtering on albania
            root_this_.filter_data_according_to_TAGS__NEW__w_value_count__NEW_all_or_any_filtering_added( this.filtering_on_preexisting_filterings__or__filtering_from_scratch, "matching_all_columns", root_this_, root_this_.commitment_display__n_filterning_n_sorting_areas[0]  );

        }



        // //   TEST   set up the relevant display object dom elements

        this.test_set_up_country_centric_display_areas = function( root_this_ ){


            console.log(">>>>>  test_set_up_country_centric_display_areas() ");

            // set the listing to country centric and make the relevant objects
            this.set_commitment_arrangement_to_country_centric( root_this_ );

            // debug
            console.log("\t - there are "+this.commitment_display__n_filterning_n_sorting_areas.length+" num of display areas ");

            //  set up the relevant dom elements
            for( this.i = 0; this.i < this.commitment_display__n_filterning_n_sorting_areas.length; this.i++ ){

                // the outer div
                root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ].set_up_OUTER_divs_for_this_display_area_in_country_n_commitment_listing_areas( root_this_ );

                // and then the inner div
                root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ].set_up_INNER_divs_for_this_display_area_in_country_n_commitment_listing_areas( root_this_ );

                // test print the commitments
                root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ].							test__add_all_unfiltered_commitments_in_curr_display_obj_area( root_this_ );

            }

        }





        // // // // TEST : Print all non-matching commitments in the console

        this.test__print_all_NONmatching_commitments = function( root_this_ ){

            console.log(">>>> printing all NON-matching commitments!" );

            for( this.curr_display_area_i = 0; this.curr_display_area_i < root_this_.commitment_display__n_filterning_n_sorting_areas.length; this.curr_display_area_i++ ){

                console.log("____ "+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i  ].country_name+" has "+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i  ].curr_filter_n_sort__NOT_MATCHING_commitments.length+" NON-matching commitments ");

                /// for each unmatching commitment
                for( this.curr_unmatching_commitment_i = 0; this.curr_unmatching_commitment_i < root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i  ].curr_filter_n_sort__NOT_MATCHING_commitments.length ; this.curr_unmatching_commitment_i++  ){

                    // print the commitment
                    console.log("\t\t - : "+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i  ].curr_filter_n_sort__NOT_MATCHING_commitments[ this.curr_unmatching_commitment_i ][1].slice(0, 100) );
                    console.log("\t\t\t - : "+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i  ].curr_filter_n_sort__NOT_MATCHING_commitments[ this.curr_unmatching_commitment_i ].slice(3,4)+" | "+root_this_.commitment_display__n_filterning_n_sorting_areas[ this.curr_display_area_i  ].curr_filter_n_sort__NOT_MATCHING_commitments[ this.curr_unmatching_commitment_i ].slice( 5 ) );

                }

            }

        }





        /////// as above but with a bit more of a 'serious' commitments listing version
        ////
        this.test_set_up_country_centric_display_areas__NEW = function( root_this_ ){

            console.log(">>>>>  test_set_up_country_centric_display_areas() ");


            // set the listing to country centric and make the relevant objects
            root_this_.set_commitment_arrangement_to_country_centric( root_this_ );


            /// remove the existing divs ... if there are any
            //		in the country display area
            $("#"+root_this_.table_view__countryNamesEtAl_area__belowHeadersArea__id_name ).empty();

            //		in the main commitments listing
            $("#"+root_this_.table_view__main_commitments_listing_area__id_name ).empty();


            /*
             //// do some basic filtering on the unfiltered commitments the various display areas
             root_this_.table_data_arranged_commitment_or_country_centric.map( function(d){

             console.log(" \t - filtering display area "+d.country_name );
             root_this_.filter_data_according_to_column_filter_settings( root_this_, d );

             });
             */

            // debug
            console.log("\t - there are "+this.commitment_display__n_filterning_n_sorting_areas.length+" num of display areas ");

            //  set up the relevant dom elements
            for( this.i = 0; this.i < this.commitment_display__n_filterning_n_sorting_areas.length; this.i++ ){

                // the outer div
                root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ].set_up_OUTER_divs_for_this_display_area_in_country_n_commitment_listing_areas( root_this_ );

                // and then the inner div
                root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ].set_up_INNER_divs_for_this_display_area_in_country_n_commitment_listing_areas( root_this_ );

                // test print the commitments
                ///////// root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ].add_commitments_to_commitment_listing_area( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ], "keep" );
                root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ].add_commitments_to_commitment_listing_area__NEW_inserts_more_html_in_one_bit( root_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ], "keep" );

            }

        }



        /////// polished version of the above
        /////		- sets things to a country specific listing 
        /////		- sets up the display areas 
        /////		- and prints some basic commitments
        ////
        this.set_up_country_centric_display_areas__incl_divs__n__print_commitments = function( root_this_ ){

            console.log(">>>>>  set_up_country_centric_display_areas__incl_divs__n__print_commitments() ");


            ////  set the listing to country centric and make the relevant objects
            root_this_.set_commitment_arrangement_to_country_centric( root_this_ );


            ////  do some initial data processing
            ////////////   this.start_filtering_and_commitments_listing_process__given_user_interaction__table_edition( root_this_, false );


            /// remove the existing divs ... if there are any
            //		in the country display area
            $("#"+root_this_.table_view__countryNamesEtAl_area__belowHeadersArea__id_name ).empty();

            //		in the main commitments listing
            $("#"+root_this_.table_view__main_commitments_listing_area__id_name ).empty();



            // debug
            console.log("\t - there are "+this.commitment_display__n_filterning_n_sorting_areas.length+" num of display areas ");

            //  set up the relevant dom elements
            for( this.i = 0; this.i < this.commitment_display__n_filterning_n_sorting_areas.length; this.i++ ){

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





        /////// set commitment listing to commitment centric
        /////		 
        /////		- as the function above but commitment centric (i.e. just one dispay area)
        /////		
        ////
        this.set_up_commitment_centric_display_areas__incl_divs__n__print_commitments = function( root_this_ ){

            console.log(">>>>>  set_up_commitment_centric_display_areas__incl_divs__n__print_commitments() ");


            ////  set the listing to country centric and make the relevant objects
            root_this_.set_commitment_arrangement_to_commitment_centric( root_this_ );

            ////  do some initial data processing
            this.start_filtering_and_commitments_listing_process__given_user_interaction__table_edition( root_this_, false );


            /// remove the existing divs ... if there are any
            //		in the country display area
            $("#"+root_this_.table_view__countryNamesEtAl_area__belowHeadersArea__id_name ).empty();

            //		in the main commitments listing
            $("#"+root_this_.table_view__main_commitments_listing_area__id_name ).empty();



            // debug
            console.log("\t - there are "+this.commitment_display__n_filterning_n_sorting_areas.length+" num of display areas ");

            //  set up the relevant dom elements
            for( this.i = 0; this.i < this.commitment_display__n_filterning_n_sorting_areas.length; this.i++ ){

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








        /////////////////////////////////////////////////
        /////////////////////////////////////////////////  table view object initialisation
        /////////////////////////////////////////////////



        //  hellow
        console.log(">>>> |||| >>>>  table view object created!  <<< ||||||  <<<<" );
        console.log(">>>> |||| >>>>  waiting for initialisation!  <<< ||||||  <<<<" );


        /////////////
        /////
        /////	setup the data bits of this object/view


        this.setup_this_object__basic__on_load = function(){


            console.log(">>>>>>>  setup_this_object__data_bits() ");

            //// finds the relevant column numbers of the index+visibility columns
            this.find_the_relevant_col_numbers_for_the_index_and_visibility_cols();

            //// set up objects describing the content of the columns
            this.initialise__table_column_objects__commitment_data();




        }




        //    AND!	//




        ///////////////
        /////
        ///// set up the object bits needed when it's displayed 
        //		( check whether the data's been loaded ( i.e. whether this object
        //		has been shown before, and had its data loaded ))

        this.setup_this_object__for_display__ie_load_and_parse_data__and__draw_html = function( root_this_ ){

            console.log(">>>>>> setup_this_object__for_display__ie_load_and_parse_data__and__draw_html() of object |"+root_this_.name_of_this_object+"|");

            // the CURRENTLY SELECTED views and datasets
            root_this_.curr_desired_display_obj_as_text = root_this_.possible_objects__table_view ;
            root_this_.curr_desired_dataset_as_text = root_this_.possible_datasets__commitments;

            /// and… set which class and view we've got an
            root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS_process__CURRENT_class_name = root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS_commitments__dom_elmt__class_name ;
            // and set the views 
            ///////  $("#"+root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS__dom_elmt__id_name).attr("class", root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS_process__CURRENT_class_name );



            /// check if the graph page is already set up…!
            /// 	and only set this up if if it DOES NOT EXIST!
            //
            if( $("#"+root_this_.table_view_main_header_area__dom_id_name ).length === 0 ){

                /// set up the relevant html dom elements
                root_this_.initialise_basic_html_table_relevant_areas__n_look_up_key_tableOuterElement_distances__please( root_this_ );

                // set up handlers for moving outer divs when the window scrolls
                root_this_.bind_handlers_n__update_outer_divs_for_this_table_view_when_scrolling_etc( root_this_ );

                /// if the data's not loaded and parsed, do load it!
                if( root_this_.is_relev_data_loaded_and_formatted === true ){

                    /// skip the loading and just do the drawing

                    ////  get the commitment display going
                    //		- set listing to according to the current setting
                    //		- print some commitments
                    //
                    root_this_.set_commitments_listing_according_to_views_menu( root_this_ );


                    /////// *** update visual settings to correspond to the meta-data settings ***

                    //// set the view menu options according ot the data
                    root_this_.set_viewing_mode_menu_items_according_to_data( root_this_ );

                    //// set the basic filteirng options to the filterin gmeta-data
                    root_this_.set_all_basic_filtering_values_according_to_data( root_this_ );

                    //// set the text search string to the meta data
                    root_this_.set_search_box_text_according_to_search_settings( root_this_ );


                    //// set the tags according to the data
                    //    (the last parameter, "true", is for 
                    //		whether to add tags in the tags
                    //		listing area)
                    root_this_.set_all_tags_in_tags_menu_to_data__NEW( root_this_, root_this_.index_of_tags_column_in_formatted_data_rows, true);


                }// if the data's not loaded
                // then load it and draw the html
                else if( root_this_.is_relev_data_loaded_and_formatted === false ){

                    //// load and draw the data ( though this is done in the parent element, for some reason )
                    root_this_.main_parent_object_this.load_data__SPECIFIC_FOR__CURRENT_OBJECT__and_maybe_update_visual_data_display( root_this_.main_parent_object_this, root_this_.curr_desired_dataset_as_text, true );
                }



            } else{
                console.log("--- sorry, not setting up the TABLE page, as bits of it already EXIST!... sorrys!");
            }

        }





        /////////////		NOTE NOTE : DOESN"T WORK!
        /////////////
        /////////////	helper function to the above : set the outer views area classes according 
        /////////////		to the relevant view
        /////////////		(helps, eg. with table : commitment/process view css differences)
        /////////////


        this.set_main_view_area_class_according_to_view_and_dataset = function( root_this_ ){

            console.log( ">>>>> set_main_view_area_class_according_to_view_and_dataset() ");

            //////////////   set the current class name of the views outer area
            // 
            // the variable shift 
            if( root_this_.curr_desired_display_obj_as_text === root_this_.possible_objects__table_view){

                if( root_this_.curr_desired_dataset_as_text === root_this_.possible_datasets__commitments ){

                    root_this_.page_pseudo_body__FOR_VIEWS_process__CURRENT_class_name = root_this_.page_pseudo_body__FOR_VIEWS_commitments__dom_elmt__class_name ;

                }else if( root_this_.curr_desired_dataset_as_text === root_this_.possible_datasets__process ){

                    root_this_.page_pseudo_body__FOR_VIEWS_process__CURRENT_class_name = root_this_.page_pseudo_body__FOR_VIEWS_process__dom_elmt__class_name ;
                }
            }

            // the actual dom manipulation
            // change the name of the class of the main outer div for the views area							
            ///// set the main outer area's class name to reflect the current view
            //
            /////  $( "#"+root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS__dom_elmt__id_name ).attr("class", "one" );	
            $( "#"+root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS__dom_elmt__id_name ).css('background-color', "red");


            console.log("---- root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS__dom_elmt__id_name  === "+root_this_.main_parent_object_this.page_pseudo_body__FOR_VIEWS__dom_elmt__id_name );

        }







    }  //////   end of table view object
       //////   end of table view object
       //////   end of table view object
       //////   end of table view object







    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////


    // //  convert country names to equivalent iso codes 
    //

    this.fetch_country_iso_code_given_country_name = function( given_country_name ){

        this.iso_coded_country_name = "unknown_country";

        console.log(" >>>> fetch_country_iso_code_given_country_name() ");

        // do the conversion
        this.iso_coded_country_name = this.country_names_n_corresponding_ISO_codes[ given_country_name ];

        // feedback
        console.log("\t\t - received country name |"+given_country_name+"| and found |"+this.iso_coded_country_name+"|");

        // return something nice
        return this.iso_coded_country_name;

    }



    // // /// 


    this.test__convert_country_names_of_display_areas_to_iso_codes = function( relev_this_ ){

        // convert things just in case
        relev_this_.set_commitment_arrangement_to_country_centric( root_this_ );

        /// loop and test
        for( this.i = 0; this.i < relev_this_.commitment_display__n_filterning_n_sorting_areas.length; this.i++  ){

            this.fetch_country_iso_code_given_country_name( relev_this_.commitment_display__n_filterning_n_sorting_areas[ this.i ].country_name );
        }

    }


    // // // // 
    // // // //   a variable holding the full names and the iso code names of countries
    //					- use this to convert country names to iso codes

    this.country_names_n_corresponding_ISO_codes = {
        "Afghanistan" : "AF",
        "Åland Islands" : "AX",
        "Albania" : "AL",
        "Algeria" : "DZ",
        "American Samoa" : "AS",
        "Andorra" : "AD",
        "Angola" : "AO",
        "Anguilla" : "AI",
        "Antarctica" : "AQ",
        "Antigua and Barbuda" : "AG",
        "Argentina" : "AR",
        "Armenia" : "AM",
        "Aruba" : "AW",
        "Australia" : "AU",
        "Austria" : "AT",
        "Azerbaijan" : "AZ",
        "Bahamas" : "BS",
        "Bahrain" : "BH",
        "Bangladesh" : "BD",
        "Barbados" : "BB",
        "Belarus" : "BY",
        "Belgium" : "BE",
        "Belize" : "BZ",
        "Benin" : "BJ",
        "Bermuda" : "BM",
        "Bhutan" : "BT",
        "Bolivia, Plurinational State of" : "BO",
        "Bonaire, Sint Eustatius and Saba" : "BQ",
        "Bosnia and Herzegovina" : "BA",
        "Botswana" : "BW",
        "Bouvet Island" : "BV",
        "Brazil" : "BR",
        "British Indian Ocean Territory" : "IO",
        "Brunei Darussalam" : "BN",
        "Bulgaria" : "BG",
        "Burkina Faso" : "BF",
        "Burundi" : "BI",
        "Cambodia" : "KH",
        "Cameroon" : "CM",
        "Canada" : "CA",
        "Cabo Verde" : "CV",
        "Cayman Islands" : "KY",
        "Central African Republic" : "CF",
        "Chad" : "TD",
        "Chile" : "CL",
        "China" : "CN",
        "Christmas Island" : "CX",
        "Cocos (Keeling) Islands" : "CC",
        "Colombia" : "CO",
        "Comoros" : "KM",
        "Congo" : "CG",
        "Congo, the Democratic Republic of the" : "CD",
        "Cook Islands" : "CK",
        "Costa Rica" : "CR",
        "Côte d'Ivoire" : "CI",
        "Croatia" : "HR",
        "Cuba" : "CU",
        "Curaçao" : "CWW",
        "Cyprus" : "CY",
        "Czech Republic" : "CZ",
        "Denmark" : "DK",
        "Djibouti" : "DJ",
        "Dominica" : "DM",
        "Dominican Republic" : "DO",
        "Ecuador" : "EC",
        "Egypt" : "EG",
        "El Salvador" : "SV",
        "Equatorial Guinea" : "GQ",
        "Eritrea" : "ER",
        "Estonia" : "EE",
        "Ethiopia" : "ET",
        "Falkland Islands (Malvinas)" : "FK",
        "Faroe Islands" : "FO",
        "Fiji" : "FJ",
        "Finland" : "FI",
        "France" : "FR",
        "French Guiana" : "GF",
        "French Polynesia" : "PF",
        "French Southern Territories" : "TF",
        "Gabon" : "GA",
        "Gambia" : "GM",
        "Georgia" : "GE",
        "Germany" : "DE",
        "Ghana" : "GH",
        "Gibraltar" : "GI",
        "Greece" : "GR",
        "Greenland" : "GL",
        "Grenada" : "GD",
        "Guadeloupe" : "GP",
        "Guam" : "GU",
        "Guatemala" : "GT",
        "Guernsey" : "GG",
        "Guinea" : "GN",
        "Guinea-Bissau" : "GW",
        "Guyana" : "GY",
        "Haiti" : "HT",
        "Heard Island and McDonald Islands" : "HM",
        "Holy See (Vatican City State)" : "VA",
        "Honduras" : "HN",
        "Hong Kong" : "HK",
        "Hungary" : "HU",
        "Iceland" : "IS",
        "India" : "IN",
        "Indonesia" : "ID",
        "Iran, Islamic Republic of" : "IR",
        "Iraq" : "IQ",
        "Ireland" : "IE",
        "Isle of Man" : "IM",
        "Israel" : "IL",
        "Italy" : "IT",
        "Jamaica" : "JM",
        "Japan" : "JP",
        "Jersey" : "JE",
        "Jordan" : "JO",
        "Kazakhstan" : "KZ",
        "Kenya" : "KE",
        "Kiribati" : "KI",
        "Korea, Democratic People's Republic of" : "KP",
        "Korea, Republic of" : "KR",
        "Kosovo" : "XK",
        "South Korea" : "KR",
        "Kuwait" : "KW",
        "Kyrgyzstan" : "KG",
        "Lao People's Democratic Republic" : "LA",
        "Latvia" : "LV",
        "Lebanon" : "LB",
        "Lesotho" : "LS",
        "Liberia" : "LR",
        "Libya" : "LY",
        "Liechtenstein" : "LI",
        "Lithuania" : "LT",
        "Luxembourg" : "LU",
        "Macao" : "MO",
        "Macedonia, the former Yugoslav Republic of" : "MK",
        "Macedonia" : "MK",
        "Madagascar" : "MG",
        "Malawi" : "MW",
        "Malaysia" : "MY",
        "Maldives" : "MV",
        "Mali" : "ML",
        "Malta" : "MT",
        "Marshall Islands" : "MH",
        "Martinique" : "MQ",
        "Mauritania" : "MR",
        "Mauritius" : "MU",
        "Mayotte" : "YT",
        "Mexico" : "MX",
        "Micronesia, Federated States of" : "FM",
        "Moldova, Republic of" : "MD",
        "Moldova" : "MD",
        "Monaco" : "MC",
        "Mongolia" : "MN",
        "Montenegro" : "ME",
        "Montserrat" : "MS",
        "Morocco" : "MA",
        "Mozambique" : "MZ",
        "Myanmar" : "MMM",
        "Namibia" : "NA",
        "Nauru" : "NR",
        "Nepal" : "NP",
        "Netherlands" : "NL",
        "New Caledonia" : "NC",
        "New Zealand" : "NZ",
        "Nicaragua" : "NI",
        "Niger" : "NE",
        "Nigeria" : "NG",
        "Niue" : "NU",
        "Norfolk Island" : "NF",
        "Northern Mariana Islands" : "MP",
        "Norway" : "NO",
        "Oman" : "OM",
        "Pakistan" : "PK",
        "Palau" : "PW",
        "Palestine, State of" : "PS",
        "Panama" : "PA",
        "Papua New Guinea" : "PG",
        "Paraguay" : "PY",
        "Peru" : "PE",
        "Philippines" : "PH",
        "Pitcairn" : "PN",
        "Poland" : "PL",
        "Portugal" : "PT",
        "Puerto Rico" : "PR",
        "Qatar" : "QA",
        "Réunion" : "RE",
        "Romania" : "RO",
        "Russian Federation" : "RU",
        "Rwanda" : "RW",
        "Saint Barthélemy" : "BL",
        "Saint Helena, Ascension and Tristan da Cunha" : "SH",
        "Saint Kitts and Nevis" : "KN",
        "Saint Lucia" : "LC",
        "Saint Martin (French part)" : "MF",
        "Saint Pierre and Miquelon" : "PM",
        "Saint Vincent and the Grenadines" : "VC",
        "Samoa" : "WS",
        "San Marino" : "SM",
        "Sao Tome and Principe" : "ST",
        "Saudi Arabia" : "SA",
        "Senegal" : "SN",
        "Serbia" : "RS",
        "Seychelles" : "SC",
        "Sierra Leone" : "SL",
        "Singapore" : "SG",
        "Sint Maarten (Dutch part)" : "SX",
        "Slovakia" : "SK",
        "Slovenia" : "SI",
        "Solomon Islands" : "SB",
        "Somalia" : "SO",
        "South Africa" : "ZA",
        /* miska added, according to the data: */
        "S. Africa" : "ZA",
        "South Georgia and the South Sandwich Islands" : "GS",
        "South Sudan" : "SS",
        "Spain" : "ES",
        "Sri Lanka" : "LK",
        "Sudan" : "SD",
        "Suriname" : "SR",
        "Svalbard and Jan Mayen" : "SJ",
        "Swaziland" : "SZ",
        "Sweden" : "SE",
        "Switzerland" : "CH",
        "Syrian Arab Republic" : "SY",
        "Taiwan, Province of China" : "TW",
        "Tajikistan" : "TJ",
        "Tanzania, United Republic of" : "TZ",
        "Tanzania" : "TZ",
        "Thailand" : "TH",
        "Timor-Leste" : "TL",
        "Togo" : "TG",
        "Tokelau" : "TK",
        "Tonga" : "TO",
        "Trinidad and Tobago" : "TT",
        "Tunisia" : "TN",
        "Turkey" : "TR",
        "Turkmenistan" : "TM",
        "Turks and Caicos Islands" : "TC",
        "Tuvalu" : "TV",
        "Uganda" : "UG",
        "Ukraine" : "UA",
        "United Arab Emirates" : "AE",
        "United Kingdom" : "GB",
        "UK" : "GB",
        "United States" : "US",
        "USA" : "US",
        "United States Minor Outlying Islands" : "UM",
        "Uruguay" : "UY",
        "Uzbekistan" : "UZ",
        "Vanuatu" : "VU",
        "Venezuela, Bolivarian Republic of" : "VE",
        "Viet Nam" : "VN",
        "Virgin Islands, British" : "VG",
        "Virgin Islands, U.S." : "VI",
        "Wallis and Futuna" : "WF",
        "Western Sahara" : "EH",
        "Yemen" : "YE",
        "Zambia" : "ZM",
        "Zimbabwe" : "ZW"
    }






    // // // // // // // // // // // // // // // // // // // // 
    // // // // // // // // // // // // // // // // // // // // 





    /* 
     ?!?!?!?!   ARE WE USING THIS    ?!?!?!?!
     ?!?!?!?!   ARE WE USING THIS    ?!?!?!?!
     ?!?!?!?!   ARE WE USING THIS    ?!?!?!?!

     to keep data loading separate?!

     */

    this.load_data_object = function(){


        // hellow! 
        console.log(">>>> hellow! - just created a load_data_object, that loads data!");

        ///////////
        ///////////  parameters


        /////			 ////
        /////   data   //////
        /////			 ////


        //// the data url(s)
        this.table_data__commitment_data__url = "/sites/default/files/irm_explorer/data/google_sheet_csv_fetch/miskaCopy_of_OLD_OGP_Commitments_-_Tagged_-_Commitments_and_Tags__with_row_nums.csv";


        ///  initiallly loaded data
        this.table_data__RAW__commitmentData_edition = [];




        ///////////
        ///////////		methods




        ////////////////////////
        ////////////////////////   initialisations! 


    }



    /////////////////////////////////////////////  
    /////////////////////////////////////////////   methods methods methods methods methods methods
    /////////////////////////////////////////////   methods methods methods methods methods methods
    /////////////////////////////////////////////


    ////////////////////////  
    ////////////////////////  set up the body, etc... the basic common html elements   //////////


    this.set_up_very_basic_html_elements = function( root_this_ ){

        console.log(">>>> set_up_very_basic_html_elements ");


        $( document ).ready( function(){


                // where the things that don't change go
                //	- eg. the page header, views switching
                root_this_.page_pseudo_body__dom_elmt = $("body");

                // main page header ( with OGP logo etc.. )
                root_this_.page_pseudo_body__dom_elmt.append("<div id="+root_this_.page_header__dom_elmt_name+">(beta) OGP explorer</div>");
                // fetch the height
                root_this_.page_header__dom_elmt__lookedup_height = $("#"+root_this_.page_header__dom_elmt_name ).height();
                // add the top black area
                $("#"+root_this_.page_header__dom_elmt_name).append("<div id='page_header__top_black_area'></div>")


                /// add the idrc logo
                root_this_.page_pseudo_body__dom_elmt.append("<a href='http://www.idrc.ca/' target='_blank'><div id="+root_this_.idrc_logo_outer_box+"><div id="+root_this_.idrc_logo_inner_text_box+">kindly supported by</div><div id="+root_this_.idrc_logo_inner_logo_box+"></div></div></a>");

                //// set up the things inside the header
                //		- eg the ogp logo
                root_this_.page_pseudo_body__dom_elmt.append("<div id='ogp_logo_graphic'></div>");


                // the options for which table/graph to view
                root_this_.page_pseudo_body__dom_elmt.append("<div id="+root_this_.irm_vizes_viewing_options__dom_elmt_id_name+"></div>");
                // and fetch the height
                root_this_.irm_vizes_viewing_options__dom_elmt__lookedup_height = $( "#"+root_this_.irm_vizes_viewing_options__dom_elmt_id_name ).height();


                ////  set up the views menu please
                root_this_.set_up_views_switching_navigation_bar__html( root_this_ );
            }

        );
    }




    ////////////////////	set up main views switching bar
    ////////////////////   		part of the setup basic html elements



    this.set_up_views_switching_navigation_bar__html = function( root_this_ ){

        console.log(">>>>>>> set_up_views_switching_navigation_bar__html ()");

        // test
        //// $( "#"+root_this_.irm_vizes_viewing_options__dom_elmt_id_name).css("background-color", "rgb(255, 255, 128)" );

        ///  start the top area div
        this.top_area_html = "";



        /////  add the top area opening 
        this.top_area_html += "<div id='"+root_this_.views_switching_area__main_items__outer_area+"'>";

        // add the views text
        this.top_area_html += "<div id='"+root_this_.views_switching_area__main_items__view_text+"'>Views :</div>";

        // add the graph txt + link
        this.top_area_html += "<div id='"+root_this_.views_switching_area__main_items__graph_link_n_text+"' class='"+root_this_.views_switching_area__main_items__link_items_item+"'>Graph</div>";

        // add teh table view text + link 
        this.top_area_html += "<div id='"+root_this_.views_switching_area__main_items__table_link_n_text+"' class='"+root_this_.views_switching_area__main_items__link_items_item+"'>Table</div>";

        // add the fact sheet text
        this.top_area_html += "<div id='"+root_this_.views_switching_area__main_items__factsheet_link_n_text+"' class='"+root_this_.views_switching_area__main_items__link_items_item+"'>Fact sheets</div>";

        // close the top area outer div
        this.top_area_html += "</div>";


        //// TMEPORARILY ENCLOSE THE SUB AREA WITH A TABLE CLASS
        //// TMEPORARILY ENCLOSE THE SUB AREA WITH A TABLE CLASS
        //// TMEPORARILY ENCLOSE THE SUB AREA WITH A TABLE CLASS
        //		supposing the table class was active…
        /////// this.top_area_html += "<div id='"+"table_view_enclosure"+"'>";


        ///// the - sublinks -  bottom outer area part
        //////////   this.top_area_html += "<div id='"+root_this_.views_switching_area__subitems_items__outer_area+"' class='"+root_this_.views_switching_area__submenu__table_view+"' >";
        this.top_area_html += "<div id='"+root_this_.views_switching_area__subitems_items__outer_area+"' >";

        // add the category text
        this.top_area_html += "<div class='"+root_this_.views_switching_area__subitems_items__dataset__text+"' >Dataset :</div>";

        // add the commitments dataset text area
        this.top_area_html += "<div class='"+root_this_.views_switching_area__subitems_items__commitments__text+" "+root_this_.views_switching_area__subitems__link_items_item+"'>Commitments</div>";

        // add the process dataset text area 
        this.top_area_html += "<div class='"+root_this_.views_switching_area__subitems_items__process__text+" "+root_this_.views_switching_area__subitems__link_items_item+"'>Process</div>";


        //// TMEPORARILY [CLOSE} ENCLOSE THE SUB AREA WITH A TABLE CLASS
        //// TMEPORARILY [CLOSE} ENCLOSE THE SUB AREA WITH A TABLE CLASS
        //// TMEPORARILY [CLOSE} ENCLOSE THE SUB AREA WITH A TABLE CLASS
        //		supposing the table class was active…
        ////////// this.top_area_html += "</div>";


        // close the bottom sublinks outer area
        this.top_area_html += "</div>";


        //////////////////  ////////////   ///////////

        //// and add it to the relevant bar
        $("#"+root_this_.irm_vizes_viewing_options__dom_elmt_id_name ).append( this.top_area_html );


        //////////////  and then bind the interactions to it
        root_this_.set_up_views_switching_navigation_bar__interactions( root_this_ );

    }




    /////////   bind interactions to the 
    /////////		view mode switching menu 


    this.set_up_views_switching_navigation_bar__interactions = function( root_this_ ){

        //  //
        console.log(">>>>>>>>  set_up_views_switching_navigation_bar__interactions() ");


        // are we ready?
        jQuery( document ).ready( function(){



            // set teh graph view button click options
            $("#"+root_this_.views_switching_area__main_items__graph_link_n_text ).click( function(){

                // do the selections + modifications externally
                root_this_.views_menu__click_graph_view_button( root_this_ );
            });

            // set the graph view button click options
            $("#"+root_this_.views_switching_area__main_items__table_link_n_text ).click( function(){

                //
                root_this_.views_menu__click_table_view_button( root_this_ );
            });

            // set teh face sheet button click options
            $("#"+root_this_.views_switching_area__main_items__factsheet_link_n_text ).click( function(){

                // do the selections + modifications externally
                ////////   root_this_.views_menu__click_table_process_view( root_this_ );	
            });



            //// and for the sub-menu items?!

            // for the commitments text
            $("."+root_this_.views_switching_area__subitems_items__commitments__text ).click( function(){

                root_this_.views_SUBmenu__click_commitments_dataset( root_this_ );
            });


            // and for the process text
            $("."+root_this_.views_switching_area__subitems_items__process__text ).click( function(){

                root_this_.views_SUBmenu__click_process_dataset( root_this_ );
            } );



        });
    }



    ////////////
    ////////////  - click the fact sheet view 


    this.views_menu__click_table_view_button = function( root_this_ ){

        console.log(">>>> views_menu__click_table_view_button ");


        console.log("> click <");


        // select the submenu area 
        //	and set the right class for it
        //


        // preselect the button
        this.factsheet_views_button_dom = $("#"+root_this_.views_switching_area__main_items__table_link_n_text	 );




        /////// do the submeu items first…
        /// make sure to show the sub-menu outer area!
        $( "#"+root_this_.views_switching_area__subitems_items__outer_area ).css("display", "block");



        //// only do things to the 
        ///		submenu area, if this top menu item is not selected
        if( this.factsheet_views_button_dom.hasClass( root_this_.views_switching_area__SELECTED_views_menu_item ) === false  ){

            // remove possible other classes for 
            // the subitems
            // - eg. the graph and fact sheet classes
            $("#"+root_this_.views_switching_area__subitems_items__outer_area).removeClass( root_this_.views_switching_area__submenu__graph_view+" "+root_this_.views_switching_area__submenu__factSheet_view );

            // add the right class
            $("#"+root_this_.views_switching_area__subitems_items__outer_area).addClass( root_this_.views_switching_area__submenu__table_view );


            //// sub menu items
            // deselect all
            $("."+root_this_.views_switching_area__subitems__link_items_item ).removeClass( root_this_.views_switching_area__subitems__link_items_item__SELECTED );


            ///////   set the variable indicating which 
            /////// 	view is active
            root_this_.curr_desired_display_obj_as_text = root_this_.possible_objects__table_view ;


            ///// and open the process dataset by default
            ///// and open the process dataset by default
            ///// and open the process dataset by default
            root_this_.views_SUBmenu__click_process_dataset( root_this_ );
        }




        //// selections!

        /// main menu items

        // remove the selctions on all the other main 
        // menu items
        $("."+root_this_.views_switching_area__main_items__link_items_item ).removeClass( root_this_.views_switching_area__SELECTED_views_menu_item );

        // make sure this main menu item looks selected
        this.factsheet_views_button_dom.addClass( root_this_.views_switching_area__SELECTED_views_menu_item );

    }




    /////////////   helper functions for 
    /////////////							click views+datasets menu
    /////////////

    this.views_menu__click_graph_view_button = function( root_this_ ){

        console.log(">>>> views_menu__click_graph_view_button() ");

        ////////////////////////

        console.log("> click <");
        // select the submenu area 
        //	and set the right class for it
        //

        /// test select and modify
        this.graph_views_button_dom = $("#"+root_this_.views_switching_area__main_items__graph_link_n_text );


        //// this.graph_view_button = $("#"+root_this_.views_switching_area__main_items__factsheet_link_n_text );


        /// make sure to show the sub-menu outer area!
        $( "#"+root_this_.views_switching_area__subitems_items__outer_area ).css("display", "block");


        //// only do things to the 
        ///		submenu area, if this top menu item is not selected
        if( this.graph_views_button_dom.hasClass( root_this_.views_switching_area__SELECTED_views_menu_item ) === false  ){


            // remove possible other classes for 
            // the subitems
            // - eg. the table and fact sheet classes
            $("#"+root_this_.views_switching_area__subitems_items__outer_area).removeClass( root_this_.views_switching_area__submenu__table_view+" "+root_this_.views_switching_area__submenu__factSheet_view );

            // add the right class
            $("#"+root_this_.views_switching_area__subitems_items__outer_area).addClass( root_this_.views_switching_area__submenu__graph_view );


            //// sub menu items
            // deselect all
            $("."+root_this_.views_switching_area__subitems__link_items_item ).removeClass( root_this_.views_switching_area__subitems__link_items_item__SELECTED );



            ///////   set the variable indicating which 
            /////// 	view is active
            root_this_.curr_desired_display_obj_as_text = root_this_.possible_objects__graph_view ;


            /////// SELECT VIEW+DATASET : COMMITMENTS
            //////  and select the relevant defaut submenu
            root_this_.views_SUBmenu__click_commitments_dataset( root_this_ );
            /////   root_this_.views_menu__click_table_process_view( root_this_ );

        }



        //// selections!

        /// main menu items

        // remove the selctions on all the other main 
        // menu items
        $("."+root_this_.views_switching_area__main_items__link_items_item ).removeClass( root_this_.views_switching_area__SELECTED_views_menu_item );

        // make sure this looks selected
        this.graph_views_button_dom.addClass( root_this_.views_switching_area__SELECTED_views_menu_item );


    }





    /////////////   click table view
    /////////////

    this.views_menu__click_table_process_view = function( root_this_, button_DOM_element_this ){

        console.log(">>>> views_menu__click_table_process_view() ");


        console.log("> click <");
        // select the submenu area 
        //	and set the right class for it
        //


        this.table_views_button_dom = $("#"+root_this_.views_switching_area__main_items__factsheet_link_n_text );



        ////////////////////////////////////////////////////
        //////////////////////////////////////////////////// do the other menu thingies



        /////// do the submeu items first…
        /// make sure to show the sub-menu outer area!
        $( "#"+root_this_.views_switching_area__subitems_items__outer_area ).css("display", "block");



        //// only do things to the 
        ///		submenu area, if this top menu item is not selected
        if( this.table_views_button_dom.hasClass( root_this_.views_switching_area__SELECTED_views_menu_item ) === false  ){




            // remove possible other classes for 
            // the subitems
            // - eg. the table and fact sheet classes
            $("#"+root_this_.views_switching_area__subitems_items__outer_area).removeClass( root_this_.views_switching_area__submenu__table_view+" "+root_this_.views_switching_area__submenu__graph_view );

            // add the right class
            $("#"+root_this_.views_switching_area__subitems_items__outer_area).addClass( root_this_.views_switching_area__submenu__factSheet_view );


            // deselect all
            $("."+root_this_.views_switching_area__subitems__link_items_item ).removeClass( root_this_.views_switching_area__subitems__link_items_item__SELECTED );

            ///////   set the variable indicating which 
            /////// 	view is active
            root_this_.curr_desired_display_obj_as_text = root_this_.possible_objects__factsheet_view ;


            ///// and open the process dataset by default
            ///// and open the process dataset by default
            ///// and open the process dataset by default
            root_this_.views_SUBmenu__click_commitments_dataset( root_this_ );

        }

        //// selections!

        /// main menu items

        // remove the selctions on all the other main 
        // menu items
        $("."+root_this_.views_switching_area__main_items__link_items_item ).removeClass( root_this_.views_switching_area__SELECTED_views_menu_item );

        // make sure this looks selected
        this.table_views_button_dom.addClass( root_this_.views_switching_area__SELECTED_views_menu_item );

    }



    ////////////////  views SUBmenu items
    ////////////////  views SUBmenu items
    ////////////////  views SUBmenu items


    ///////////		click submenu item : commitments dataset
    ///////////


    this.views_SUBmenu__click_commitments_dataset = function( root_this_ ){

        console.log(">>>> views_SUBmenu__click_commitments_dataset() ");

        console.log("click > commitments <");

        // deselect all the submenu items
        $("."+root_this_.views_switching_area__subitems__link_items_item ).removeClass( root_this_.views_switching_area__subitems__link_items_item__SELECTED );

        // and select this one
        // deselect all the submenu items
        $("."+root_this_.views_switching_area__subitems_items__commitments__text ).addClass( root_this_.views_switching_area__subitems__link_items_item__SELECTED );


        ///////   set the variable indicating which 
        /////// 	view is active
        root_this_.curr_desired_dataset_as_text = root_this_.possible_datasets__commitments ;





        ////////////
        ////////////	remove and set up other things! 
        ////////////


        /// if we're looking at the fact sheet+commitments view…
        if( root_this_.curr_desired_display_obj_as_text === root_this_.possible_objects__table_view ){


            //// remove the graph+commitments view
            // eject eject eject - graph view
            our_irm_vis.our_graph_view_obj__commitments_data_edition.remove_basic_html_elements_for_this_view( our_irm_vis.our_graph_view_obj__commitments_data_edition );

            our_irm_vis.our_table_view_obj__process_data_edition.remove_basic_html_elements_for_this_view( our_irm_vis.our_table_view_obj__process_data_edition );

            //////////
            ////////// SET UP THE(/THIS) TABLE/COMMITMENTs VIEW  /////////////
            //////////	

            our_irm_vis.our_table_view_obj__commitents_data_edition.setup_this_object__for_display__ie_load_and_parse_data__and__draw_html( our_irm_vis.our_table_view_obj__commitents_data_edition );


        } // graph view 
        else if( root_this_.curr_desired_display_obj_as_text === root_this_.possible_objects__graph_view ){

            ///// remove the table views 
            our_irm_vis.our_table_view_obj__commitents_data_edition.remove_basic_html_elements_for_this_view( our_irm_vis.our_table_view_obj__commitents_data_edition );

            our_irm_vis.our_table_view_obj__process_data_edition.remove_basic_html_elements_for_this_view( our_irm_vis.our_table_view_obj__process_data_edition );


            ////////// SET UP THE(/THIS) GRAPH VIEW  /////////////
            //////////	
            our_irm_vis.our_graph_view_obj__commitments_data_edition.setup_this_object__for_display__ie_load_and_parse_data__and__draw_html( our_irm_vis.our_graph_view_obj__commitments_data_edition );


        }// and if we're looking at the table view
        else if( root_this_.curr_desired_display_obj_as_text === root_this_.possible_objects__factsheet_view ){


            //// remove the graph+commitments view
            // eject eject eject - graph view
            our_irm_vis.our_graph_view_obj__commitments_data_edition.remove_basic_html_elements_for_this_view( our_irm_vis.our_graph_view_obj__commitments_data_edition );

            ///// remove the table ocmmitments+process views 
            our_irm_vis.our_table_view_obj__commitents_data_edition.remove_basic_html_elements_for_this_view( our_irm_vis.our_table_view_obj__commitents_data_edition );
            //
            our_irm_vis.our_table_view_obj__process_data_edition.remove_basic_html_elements_for_this_view( our_irm_vis.our_table_view_obj__process_data_edition );

        }

    }



    ///////////		click submenu item : process dataset
    ///////////

    this.views_SUBmenu__click_process_dataset = function( root_this_ ){

        console.log(">>>> views_SUBmenu__click_process_dataset() ");

        console.log("click > process <");

        // deselect all the submenu items
        $("."+root_this_.views_switching_area__subitems__link_items_item ).removeClass( root_this_.views_switching_area__subitems__link_items_item__SELECTED );

        // deselect all the submenu items
        $("."+root_this_.views_switching_area__subitems_items__process__text ).addClass( root_this_.views_switching_area__subitems__link_items_item__SELECTED );


        ///////   set the variable indicating which 
        /////// 	view is active
        root_this_.curr_desired_dataset_as_text = root_this_.possible_datasets__process ;





        ////////////
        ////////////	remove and set up other things! 
        ////////////


        /// if we're looking at the fact sheet+commitments view…
        if( root_this_.curr_desired_display_obj_as_text === root_this_.possible_objects__table_view ){


            //// remove the graph+commitments view
            // eject eject eject - graph view
            our_irm_vis.our_graph_view_obj__commitments_data_edition.remove_basic_html_elements_for_this_view( our_irm_vis.our_graph_view_obj__commitments_data_edition );

            // remove the table : commitments view 
            our_irm_vis.our_table_view_obj__commitents_data_edition.remove_basic_html_elements_for_this_view( our_irm_vis.our_table_view_obj__commitents_data_edition );


            //////////
            ////////// SET UP THE(/THIS) TABLE/PROCESS VIEW  /////////////
            //////////

            our_irm_vis.our_table_view_obj__process_data_edition.setup_this_object__for_display__ie_load_and_parse_data__and__draw_html( our_irm_vis.our_table_view_obj__process_data_edition );




        } // graph view 
        else if( root_this_.curr_desired_display_obj_as_text === root_this_.possible_objects__graph_view ){

            ///// remove the table views 
            our_irm_vis.our_table_view_obj__commitents_data_edition.remove_basic_html_elements_for_this_view( our_irm_vis.our_table_view_obj__commitents_data_edition );

            our_irm_vis.our_table_view_obj__process_data_edition.remove_basic_html_elements_for_this_view( our_irm_vis.our_table_view_obj__process_data_edition );


            ////////// SET UP THE(/THIS) GRAPH VIEW + PROCESS DATA  /////////////
            //////////	
            /////////////  our_irm_vis.our_graph_view_obj__commitments_data_edition.setup_this_object__for_display__ie_load_and_parse_data__and__draw_html( our_irm_vis.our_graph_view_obj__commitments_data_edition );


        }// and if we're looking at the table view
        else if( root_this_.curr_desired_display_obj_as_text === root_this_.possible_objects__factsheet_view ){


            //// remove the graph+commitments view
            // eject eject eject - graph view
            our_irm_vis.our_graph_view_obj__commitments_data_edition.remove_basic_html_elements_for_this_view( our_irm_vis.our_graph_view_obj__commitments_data_edition );

            ///// remove the table views 
            our_irm_vis.our_table_view_obj__commitents_data_edition.remove_basic_html_elements_for_this_view( our_irm_vis.our_table_view_obj__commitents_data_edition );

            our_irm_vis.our_table_view_obj__process_data_edition.remove_basic_html_elements_for_this_view( our_irm_vis.our_table_view_obj__process_data_edition );

        }


    }




    ////////////////////////  
    ////////////////////////  load table data   //////////
    ////////////////////////  load table data   //////////
    ////////////////////////  load table data   //////////



    this.load_data__SPECIFIC_FOR__CURRENT_OBJECT__and_maybe_update_visual_data_display = function( root_this_, what_data_to_load, setup_and_draw_commitment_areas ){

        console.log(">>>>   load_data__SPECIFIC_FOR__CURRENT_OBJECT__and_maybe_update_visual_data_display : loading table data of ("+what_data_to_load+")  - could it be ( "+root_this_.possible_datasets__commitments+" or "+root_this_.possible_datasets__process+" )!");

        //// if( what_data_to_load === "commitment_data" ){
        if( what_data_to_load === root_this_.possible_datasets__commitments ){

            // are we ready?
            jQuery( document ).ready( function(){

                console.log(" loading ("+what_data_to_load+" data ) url : "+root_this_.table_data__commitment_data__url );

                $.get( root_this_.table_data__commitment_data__url, function(data){

                    // format and 'save' the data
                    root_this_.table_data__RAW__commitmentData_edition = $.csv.toArrays( data );

                    /////   console.log("just loaded the data and it looks like this : ");
                    /////   console.log( root_this_.table_data__RAW__commitmentData_edition );

                    /// format the data according to how we'd like it in the columns
                    //////////   root_this_.format_loaded_data_according_to_the_relevant_column_order( root_this_ );

                    ////  FIX FIX FIX - HARDCODED HARDCODED 
                    // 		- Needs to be adjusted for the different 
                    //		tables/graphs this is supposed to supply data to!
                    //
                    // The last argument is the last is whether to use 
                    //	NR commitments or not.
                    root_this_.our_table_view_obj__commitents_data_edition.format_loaded_data_according_to_the_relevant_column_order__NEW( root_this_.our_table_view_obj__commitents_data_edition, root_this_.table_data__RAW__commitmentData_edition, false );



                    //// and if we're drawing things?
                    if( setup_and_draw_commitment_areas ){

                        ////  get the commitment display going
                        //		- set listing to country-specific 
                        //		- print some commitments
                        ////////////      root_this_.our_table_view_obj__commitents_data_edition.set_up_country_centric_display_areas__incl_divs__n__print_commitments( root_this_.our_table_view_obj__commitents_data_edition );

                        ////  our_irm_vis.views_menu__click_graph_view_button( our_irm_vis );

                    }


                });

            });
        }
        // for the process data
        //
        /// if( root_this_.curr_desired_dataset_as_text === root_this_.possible_datasets__process ){
        else if( what_data_to_load === root_this_.possible_datasets__process ){

            // are we ready?
            jQuery( document ).ready( function(){

                console.log(" loading ( (hopefully PROCESS) "+what_data_to_load+" data ) url : "+root_this_.table_data__process_data__url );

                $.get( root_this_.table_data__process_data__url, function(data){

                    // format and 'save' the data
                    root_this_.table_data__RAW__processData_edition = $.csv.toArrays( data );

                    /////////  console.log("just loaded the process data and it looks like this : ");
                    /////   console.log( root_this_.table_data__RAW__commitmentData_edition );

                    /// format the data according to how we'd like it in the columns
                    //////////   root_this_.format_loaded_data_according_to_the_relevant_column_order( root_this_ );

                    ////  FIX FIX FIX - HARDCODED HARDCODED 
                    // 		- Needs to be adjusted for the different 
                    //		tables/graphs this is supposed to supply data to!
                    //
                    // The last argument is the last is whether to use 
                    //	NR commitments or not.
                    root_this_.our_table_view_obj__process_data_edition.format_loaded_data_according_to_the_relevant_column_order__NEW( root_this_.our_table_view_obj__process_data_edition, root_this_.table_data__RAW__processData_edition, true );



                    //// and if we're drawing things?
                    if( setup_and_draw_commitment_areas ){

                        ////  get the commitment display going
                        //		- set listing to country-specific 
                        //		- print some commitments
                        root_this_.our_table_view_obj__process_data_edition.set_up_commitment_centric_display_areas__incl_divs__n__print_commitments( root_this_.our_table_view_obj__process_data_edition );
                    }


                });

            });
        }

    }




    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////

    ////////////////////////
    ////////////////////////		show / hide viewing objects
    ////////////////////////

    ////////////////////////	////////////////////////////////
    ////////////////////////	////////////////////////////////
    ////////////////////////	////////////////////////////////
    ////////////////////////
    ////////////////////////    object switch : hide previous view object


    this.hide_current_display_object = function( root_this_ ){

        console.log(">>>>>>>  hide_current_display_object() ("+root_this_.curr_display_object.name_of_this_object+") ");

        root_this_.curr_display_object.remove_basic_html_elements_for_this_view( root_this_.curr_display_object );

    }



    ////////////////////////	object switch : select and set up the desired view object 


    this.show__n_possibly_load_data__n_display_html__of_given_display_object = function( root_this_, given_display_object ){

        root_this_.curr_display_object = given_display_object;

        console.log(">>>> show__n_possibly_load_data__n_display_html__of_current_display_object ("+root_this_.curr_display_object.name_of_this_object+") ");

        root_this_.curr_display_object.setup_this_object__for_display__ie_load_and_parse_data__and__draw_html( root_this_.curr_display_object );
    }




    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////



    /////////////////////////////////////////////  
    /////////////////////////////////////////////   initialisations   initialisations   initialisations
    /////////////////////////////////////////////   initialisations   initialisations   initialisations
    /////////////////////////////////////////////

    $( document ).ready(function(){

        // hello!
        console.log(">>> initialising a table object <<<<< ");

        // set up various relevant html element variables
        our_irm_vis.set_up_very_basic_html_elements( our_irm_vis );

        // set up relevant object
        ////  our_irm_vis.our_table_view_obj__commitents_data_edition = new our_irm_vis.table_view_obj( our_irm_vis );
        our_irm_vis.our_table_view_obj__commitents_data_edition = new our_irm_vis.table_view_obj( );
        our_irm_vis.our_table_view_obj__commitents_data_edition.main_parent_object_this = our_irm_vis;
        our_irm_vis.our_table_view_obj__commitents_data_edition.name_of_this_object = "table view : commitment view edition";

        ////  FOR TESTING - select the current object
        our_irm_vis.curr_display_object = our_irm_vis.our_table_view_obj__commitents_data_edition;

        ///////////  SET UP AND DISPLAY AN VIEWING OBJECT
        //
        ////////// 	our_irm_vis sort of setup steps should
        //////////		be standard for any new viewing object
        //////////	( though of course, one should remove the previous one first)
        //////////	( that's detailed further below )
        //// start its setup of the object - the data bits
        /// (NOTE - THIS SETS UP COMMON FOR ALL VIEWS )
        our_irm_vis.curr_display_object.setup_this_object__basic__on_load();


        /// the basic html bits ( that can be set up without loading the data )
        //////////////////////   our_irm_vis.curr_display_object.setup_this_object__for_display__ie_load_and_parse_data__and__draw_html( our_irm_vis.curr_display_object );
        our_irm_vis.load_data__SPECIFIC_FOR__CURRENT_OBJECT__and_maybe_update_visual_data_display( our_irm_vis, our_irm_vis.possible_datasets__commitments, true );



        //////// REMOVING AN OBJECT's VISIBLE BITS
        //// and this is used for removing an object's html elements
        //////////   our_irm_vis.our_table_view_obj__commitents_data_edition.remove_basic_html_elements_for_this_view( our_irm_vis.our_table_view_obj__commitents_data_edition );

        /// load the data & format it 
        ////////   our_irm_vis.	load_data__SPECIFIC_FOR__CURRENT_OBJECT__and_maybe_update_visual_data_display( our_irm_vis, true );

        //////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////
        ///////////////									//////////////////////
        ///////////////  	EXTERNAL SCRIPT SETUP		//////////////////////
        ///////////////  	EXTERNAL SCRIPT SETUP		//////////////////////
        ///////////////  	EXTERNAL SCRIPT SETUP		//////////////////////
        ///////////////									//////////////////////
        //////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////


        ///////////////							//////////////////////////
        ///////////////  graph view / commitment data setup!		//////////////////////////
        ///////////////							//////////////////////////



        //////////////////////////////////////////////////////////////////////

        ///////////////							//////////////////////////
        ///////////////  table view / process setup!		//////////////////////////
        ///////////////							//////////////////////////

        //
        console.log("SOOOOON : starting to load the table view / process data setup ");

        //// load the table view script
        $.getScript( "/sites/all/libraries/irm_explorer/ogp_irm_testing_implementation__table__process_data__v73_b11.js", function(){

            //
            console.log("------- the table view : process daata edition : script is being loaded!") ;

            // test executing something from the external script
            print_hellow_2();

            ////// $(document).load( function(){
            var setup_table_view_object__process_data_edition__object__ = new setup_table_view_process_data_edition_object();
            //////  });




            ////////////////////  ...and then
            ////////////////////
            ////////////////////  load the graph page object please

            console.log("SOOOOON : starting to load the graph page object ");

            //// load the table view script
            $.getScript( "/sites/all/libraries/irm_explorer/ogp_irm_testing_implementation__graph_view_code__v73_b11.js", function(){

                //
                console.log("------- the graph view script is being loaded!") ;

                // test executing something from the external script
                print_hellow();

                ////// $(document).load( function(){
                var setup_graph_view_object__object__ = new setup_graph_view_object__object();
                ///   setup_graph_view_object__object();
                //////  });

                /////  get the graph : commitments view?
                ////////  our_irm_vis.views_menu__click_graph_view_button( our_irm_vis );
                window.setTimeout( function(){ console.log("hellow!"); our_irm_vis.views_menu__click_graph_view_button( our_irm_vis ); }, 1000);

            } );



        } );


        ///////////    TEMPRARILY BIND CONTROLS 


    });


}




//////////////////////   initialise things
//////////////////////   initialise things
//////////////////////   initialise things

var our_irm_vis = new irm_vis_obj();