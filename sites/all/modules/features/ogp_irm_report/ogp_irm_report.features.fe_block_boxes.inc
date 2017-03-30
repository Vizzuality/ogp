<?php
/**
 * @file
 * ogp_irm_report.features.fe_block_boxes.inc
 */

/**
 * Implements hook_default_fe_block_boxes().
 */
function ogp_irm_report_default_fe_block_boxes() {
  $export = array();

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

  return $export;
}
