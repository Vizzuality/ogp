<?php
/**
 * @file
 * test_default.features.fe_block_boxes.inc
 */

/**
 * Implements hook_default_fe_block_boxes().
 */
function test_default_default_fe_block_boxes() {
  $export = array();

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Copyright Text';
  $fe_block_boxes->format = 'filtered_html';
  $fe_block_boxes->machine_name = 'copyright_text';
  $fe_block_boxes->body = '<p>© 2015&nbsp;Open Government Partnership</p>
';

  $export['copyright_text'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Countries introduction text';
  $fe_block_boxes->format = 'filtered_html';
  $fe_block_boxes->machine_name = 'countries_intro';
  $fe_block_boxes->body = '<div>
	<p><span>OGP was launched in 2011 to provide an international platform for domestic reformers committed to making their governments more open, accountable, and responsive to citizens.&nbsp; Since then, OGP has grown from 8 countries to the 69&nbsp;participating countries indicated on the map below.&nbsp; In all of these countries, government and civil society are working together to develop and implement ambitious open government reforms.</span></p>
</div>
';

  $export['countries_intro'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Demo';
  $fe_block_boxes->format = 'filtered_html';
  $fe_block_boxes->machine_name = 'demo';
  $fe_block_boxes->body = '<p>&lt;div&gt;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum&nbsp;Lorem ipsum &lt;div&gt;</p>
';

  $export['demo'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Empowered by NuCivic';
  $fe_block_boxes->format = 'full_html';
  $fe_block_boxes->machine_name = 'empowered';
  $fe_block_boxes->body = '<p>Empowered by <a class="nuams-link" href="http://www.nucivic.com" rel="nofollow">NuCivic</a></p>';

  $export['empowered'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Explorer Landing text';
  $fe_block_boxes->format = 'filtered_html';
  $fe_block_boxes->machine_name = 'explorer_landing_text';
  $fe_block_boxes->body = '<p><a href="http://www.opengovpartnership.org/explorer/all-data.html">The OGP Explorer</a>&nbsp;provides the OGP community - civil society, academics, governments, journalists - easy access to the wealth of data that OGP has collected. The OGP Explorer allows you to answer questions like: &nbsp;</p>

<p>What have countries promised - and what have they delivered?</p>

<p>How did the consultations go across Africa?</p>

<p>Which countries have commitments on fiscal transparency?</p>

<p>How many starred commitments does Albania have?</p>

<p>What happened to the UK promise on beneficial ownership?</p>

<p>&nbsp;</p>

<p><strong>The tool comes in two options and has three views.</strong></p>

<p><strong>Option 1 </strong>- <a href="http://www.opengovpartnership.org/explorer/all-data.html">OGP Explorer </a>(all commitments) - contains all 2,000 commitments, roughly half of which have been assessed by the IRM’s team of researchers . The other half contains commitments being implemented as we speak and not yet evaluated by the IRM team. For these commitments the data is limited to the commitment title, details and thematic tags. The amount of data in this version is large and the OGP Explorer may perform slightly slower.</p>

<p><strong>Option 2</strong> - <a href="http://www.opengovpartnership.org/explorer/irm-assessed-data.html">OGP Explorer</a> (IRM assessed commitments) - &nbsp;only contains the data on commitments and consultation processes that have been assessed by the IRM. The smaller data set allows this version of the OGP Explorer to perform more quickly..</p>

<p>&nbsp;</p>

<p><strong>The OGP Explorer can be viewed in three ways:</strong></p>

<ul>
	<li>
	<p><a href="http://www.opengovpartnership.org/explorer/irm-assessed-data.html">Graph View</a>&nbsp;of all commitments allows users to visualize the IRM assessed data in dynamic and effective ways. For example, you can make graphs based on completion or relevance; select grand challenges, values or tags; select countries or regions and finally select a sorting method. Moving your mouse over the bar chart will give you detailed statistics and the graph will change instantly when you change any of your chosen options.</p>
	</li>
	<li>
	<p><a href="http://www.opengovpartnership.org/explorer/irm-assessed-data.html">Table View</a> (Process Data)&nbsp;gives users the ability to quickly evaluate country performance on their OGP process. It contains information on Action Plan development, on how government and civil society work together during implementation and on how countries performed on their self assessment. Use the filter options to narrow comparisons to performance areas you care about.</p>
	</li>
	<li>
	<p><a href="http://www.opengovpartnership.org/explorer/irm-assessed-data.html">Table View</a> (Commitment Data) gives access to the full details on the commitments. This view has information on impact, relevance and completion. You can see which commitments are new and which are starred. Finally, each commitment is classified with tags, and assessed on relevance &nbsp;to OGP values and grand challenges. You can view the commitments as a long list, by country, or opt for simply for the country statistics.</p>
	</li>
</ul>

<p>You can play endlessly with all three views, and once you are finished please feel free to &nbsp;export the data as CSV file. This allows users researchers and others to apply use the data in their own investigations, and analysis or reporting.</p>

<p>&nbsp;</p>

<p>The OGP Explorer has benefited from the diligent work of our talented developer, &nbsp;<a href="http://knapek.org/" rel="nofollow">Miska Knapek</a>, whose previous projects include the <a href="http://thewebindex.org/" rel="nofollow">Web Index </a>&nbsp;of the <a href="http://webfoundation.org/" rel="nofollow">World Wide Web Foundatio</a><a href="http://webfoundation.org/" rel="nofollow">n</a>. Thanks also to the <a href="http://www.idrc.ca/EN/Pages/default.aspx" rel="nofollow">IDRC</a> who provided financial support to the OGP’s Civil Society Engagement team to make the OGP Explorer possible.</p>

<p>Please note that this is only phase 1 of the OGP Explorer project. We already have some ideas for phase 2 and invite you as users to let us know what features are most useful, what you would change and what additional features you would like to see in the next version of the OGP Explorer. &nbsp;Send suggestions to <a href="mailto:paul.maassen@opengovpartnership.org" rel="nofollow">paul.maassen@opengovpartnership.org</a>.</p>
';

  $export['explorer_landing_text'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Flickr Stream';
  $fe_block_boxes->format = 'full_html';
  $fe_block_boxes->machine_name = 'flickr';
  $fe_block_boxes->body = '<p><iframe align="center" frameborder="0" height="290" scrolling="no" src="http://www.flickr.com/slideShow/index.gne?group_id=&user_id=76276598@N08&set_id=&text" width="290"></iframe></p>
';

  $export['flickr'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Front page accountability block';
  $fe_block_boxes->format = 'plain_text';
  $fe_block_boxes->machine_name = 'front_accountability';
  $fe_block_boxes->body = 'There are rules, regulations and mechanisms in place that call upon government actors to justify their actions, act upon criticisms or requirements made of them, and accept responsibility for failure to perform with respect to laws or commitments.';

  $export['front_accountability'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Front page innovation block';
  $fe_block_boxes->format = 'plain_text';
  $fe_block_boxes->machine_name = 'front_innovation';
  $fe_block_boxes->body = 'Governments embrace the importance of providing citizens with open access to technology, the role of new technologies in driving innovation, and the importance of increasing the capacity of citizens to use technology.';

  $export['front_innovation'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Front page participation block';
  $fe_block_boxes->format = 'plain_text';
  $fe_block_boxes->machine_name = 'front_participation';
  $fe_block_boxes->body = 'Governments seek to mobilize citizens to engage in public debate, provide input, and make contributions that lead to more responsive, innovative and effective governance.';

  $export['front_participation'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Front page transparency block';
  $fe_block_boxes->format = 'plain_text';
  $fe_block_boxes->machine_name = 'front_transparency';
  $fe_block_boxes->body = 'Information on government activities and decisions is open, comprehensive, timely freely available to the public and meets basic open data standards (e.g. raw data, machine readability).';

  $export['front_transparency'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Front page video block';
  $fe_block_boxes->format = 'filtered_html';
  $fe_block_boxes->machine_name = 'front_video';
  $fe_block_boxes->body = '<p>[[{"fid":"5643","view_mode":"full","fields":{"format":"full"},"type":"media","attributes":{"class":"file media-element file-full"},"link_text":"#OGP15 Global Summit Live Stream - Palacio de Minería - Day 2"}]]</p>
';

  $export['front_video'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Front page video block (america)';
  $fe_block_boxes->format = 'filtered_html';
  $fe_block_boxes->machine_name = 'front_video_america';
  $fe_block_boxes->body = '<p>.</p>
';

  $export['front_video_america'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Front page video block (asia)';
  $fe_block_boxes->format = 'filtered_html';
  $fe_block_boxes->machine_name = 'front_video_asia';
  $fe_block_boxes->body = '&nbsp;';

  $export['front_video_asia'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Front page video block (europe)';
  $fe_block_boxes->format = 'full_html';
  $fe_block_boxes->machine_name = 'front_video_europe';
  $fe_block_boxes->body = '<p>&nbsp;</p>
';

  $export['front_video_europe'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'IRM Intro text';
  $fe_block_boxes->format = 'filtered_html';
  $fe_block_boxes->machine_name = 'irm_intro';
  $fe_block_boxes->body = '<p><strong>INDEPENDENT REPORTING MECHANISM</strong></p>

<p>The Independent Reporting Mechanism (IRM) is a key means by which all stakeholders can track OGP progress in participating countries. The IRM produces biannual independent progress reports for each country participating in OGP.&nbsp; The progress reports assess governments on the development and implementation of OGP action plans, progress in fulfilling open government principles, and make technical recommendations for improvements. These reports are intended to stimulate dialogue and promote accountability between member governments and citizens. &nbsp;</p>

<p><strong>Read this blogpost <a href="/blog/joseph-foti/2014/02/03/19-governments-ogp-progress-reviewed">here</a>&nbsp;by the IRM Program Manager on how to use and comment on the reports.</strong></p>

<p>The IRM releases all of its data in open data format.&nbsp;<span style="line-height:20px">The <a href="https://docs.google.com/a/opengovpartnership.org/spreadsheets/d/1BA3QySgIrawbuHblx0EbSCQyNSIu2mLnSaaIYgykMig/edit#gid=1253091469">first&nbsp;database</a> compiles&nbsp;all 958 commitments or actions analyzed as part of the IRM process. The <a href="https://docs.google.com/a/opengovpartnership.org/spreadsheets/d/1CfCabDw0azk9iWZiTLr5PZxluOY8VONwdD5JJAGqLtg/edit#gid=945755123">second database</a> consists of information on how well each of the OGP participating governments participated in the OGP process as well as the existing institutional arrangements for OGP at the time of publication. &nbsp;A detailed Data Guide with explanations of variables, provenance, and potential can be found <a href="https://docs.google.com/a/opengovpartnership.org/file/d/0BwD0jnz8k5PQRG1IRTRCTWdEdkU/edit">here</a>.<br />
	<br />
	Read the First IRM Technical Paper for a synthesis of the first 43 IRM reports: &quot;</span><strong>OGP by the Numbers: What the IRM Data Tells Us About OGP Results&quot;. &nbsp;</strong>The executive summary is available <a href="/sites/default/files/attachments/Technical%20paper%201_Executive%20summary_final.pdf">here</a>, and the full technical paper is available <a href="/sites/default/files/attachments/Technical%20paper%201_final.pdf">here</a>.</p>

<p>Read the IRM Open Data Paper for an analysis of OGP country commitments within the larger context of open data and government&nbsp;reforms: &quot;<strong>Aligning Supply and Demand for Better Governance: Open Data in the Open Government Partnership.</strong>&quot; The full paper is available <a href="https://drive.google.com/open?id=0ByYwrpVh1DpYbEtqc2xiNExySG8&amp;authuser=1" rel="nofollow">here</a>.</p>

<p>For further analysis on civic participation, read &quot;Civic Participation in Latin American OGP Commitments&quot;. &nbsp;Download the PDF <a href="/sites/default/files/attachments/LatAm%20Participation%20Web.pdf">here</a>.</p>

<div>
	<div>&nbsp;</div>
</div>
';

  $export['irm_intro'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'News and Events link block';
  $fe_block_boxes->format = 'filtered_html';
  $fe_block_boxes->machine_name = 'latest_event_link';
  $fe_block_boxes->body = '<p><a href="http://ogpsummit.org/">Find Out More about the OGP Summit</a></p>
';

  $export['latest_event_link'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Logo';
  $fe_block_boxes->format = 'filtered_html';
  $fe_block_boxes->machine_name = 'logo_opg_header';
  $fe_block_boxes->body = '<p>&lt;none&gt;</p>
';

  $export['logo_opg_header'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Map home page';
  $fe_block_boxes->format = 'filtered_html';
  $fe_block_boxes->machine_name = 'map_home_page';
  $fe_block_boxes->body = '<p>Hello :D</p>
';

  $export['map_home_page'] = $fe_block_boxes;

  return $export;
}
