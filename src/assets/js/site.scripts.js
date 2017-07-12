/**
 * Resize function without multiple trigger
 *
 * Usage:
 * $(window).smartresize(function()***REMOVED***
 *     // code here
 * ***REMOVED***);
 */
(function($,sr)***REMOVED***
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) ***REMOVED***
    var timeout;

    return function debounced () ***REMOVED***
      var obj = this, args = arguments;
      function delayed () ***REMOVED***
        if (!execAsap)
          func.apply(obj, args);
        timeout = null;
    ***REMOVED***

      if (timeout)
        clearTimeout(timeout);
      else if (execAsap)
        func.apply(obj, args);

      timeout = setTimeout(delayed, threshold || 100);
  ***REMOVED***;
***REMOVED***;

  // smartresize
  jQuery.fn[sr] = function(fn)***REMOVED***  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); ***REMOVED***;

***REMOVED***)(jQuery,'smartresize');
/**
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var CURRENT_URL = window.location.href.split('#')[0].split('?')[0],
  $BODY = $('body'),
  $MENU_TOGGLE = $('#menu_toggle'),
  $SIDEBAR_MENU = $('#sidebar-menu'),
  $SIDEBAR_FOOTER = $('.sidebar-footer'),
  $LEFT_COL = $('.left_col'),
  $RIGHT_COL = $('.right_col'),
  $NAV_MENU = $('.nav_menu'),
  $FOOTER = $('footer');



// Sidebar
function init_sidebar() ***REMOVED***
// TODO: This is some kind of easy fix, maybe we can improve this

  var setContentHeight = function () ***REMOVED***
    // reset height
    $RIGHT_COL.css('min-height', $(window).height());

    var bodyHeight = $BODY.outerHeight(),
      footerHeight = $BODY.hasClass('footer_fixed') ? -10 : $FOOTER.height(),
      leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
      contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

    // normalize content
    contentHeight -= $NAV_MENU.height() + footerHeight;

    $RIGHT_COL.css('min-height', contentHeight);
***REMOVED***;

  $('#sidebar-menu').find('a').on('click', function(ev) ***REMOVED***

    var $li = $(this).parent();

    if ($li.is('.active')) ***REMOVED***
      $li.removeClass('active active-sm');
      $('ul:first', $li).slideUp(function() ***REMOVED***
        setContentHeight();
    ***REMOVED***);
  ***REMOVED*** else ***REMOVED***
      // prevent closing menu if we are on child menu
      if (!$li.parent().is('.child_menu')) ***REMOVED***
        $SIDEBAR_MENU.find('li').removeClass('active active-sm');
        $SIDEBAR_MENU.find('li ul').slideUp();
    ***REMOVED***else
      ***REMOVED***
        if ( $BODY.is( ".nav-sm" ) )
        ***REMOVED***
          $SIDEBAR_MENU.find( "li" ).removeClass( "active active-sm" );
          $SIDEBAR_MENU.find( "li ul" ).slideUp();
      ***REMOVED***
    ***REMOVED***
      $li.addClass('active');

      $('ul:first', $li).slideDown(function() ***REMOVED***
        setContentHeight();
    ***REMOVED***);
  ***REMOVED***
***REMOVED***);

// toggle small or large menu
  $('#menu_toggle').on('click', function() ***REMOVED***
    console.log('clicked - menu toggle');

    if ($BODY.hasClass('nav-md')) ***REMOVED***
      $SIDEBAR_MENU.find('li.active ul').hide();
      $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
  ***REMOVED*** else ***REMOVED***
      $SIDEBAR_MENU.find('li.active-sm ul').show();
      $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
  ***REMOVED***

    $BODY.toggleClass('nav-md nav-sm');

    setContentHeight();

    $('.dataTable').each ( function () ***REMOVED*** $(this).dataTable().fnDraw(); ***REMOVED***);
***REMOVED***);

  // check active menu
  $SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent('li').addClass('current-page');

  $SIDEBAR_MENU.find('a').filter(function () ***REMOVED***
    return this.href == CURRENT_URL;
***REMOVED***).parent('li').addClass('current-page').parents('ul').slideDown(function() ***REMOVED***
    setContentHeight();
***REMOVED***).parent().addClass('active');

  // recompute content when resizing
  $(window).smartresize(function()***REMOVED***
    setContentHeight();
***REMOVED***);

  setContentHeight();

  // fixed sidebar
  if ($.fn.mCustomScrollbar) ***REMOVED***
    $('.menu_fixed').mCustomScrollbar(***REMOVED***
      autoHideScrollbar: true,
      theme: 'minimal',
      mouseWheel:***REMOVED*** preventDefault: true ***REMOVED***
  ***REMOVED***);
***REMOVED***
***REMOVED***;
// /Sidebar

var randNum = function() ***REMOVED***
  return (Math.floor(Math.random() * (1 + 40 - 20))) + 20;
***REMOVED***;


// Panel toolbox
$(document).ready(function() ***REMOVED***
  $('.collapse-link').on('click', function() ***REMOVED***
    var $BOX_PANEL = $(this).closest('.x_panel'),
      $ICON = $(this).find('i'),
      $BOX_CONTENT = $BOX_PANEL.find('.x_content');

    // fix for some div with hardcoded fix class
    if ($BOX_PANEL.attr('style')) ***REMOVED***
      $BOX_CONTENT.slideToggle(200, function()***REMOVED***
        $BOX_PANEL.removeAttr('style');
    ***REMOVED***);
  ***REMOVED*** else ***REMOVED***
      $BOX_CONTENT.slideToggle(200);
      $BOX_PANEL.css('height', 'auto');
  ***REMOVED***

    $ICON.toggleClass('fa-chevron-up fa-chevron-down');
***REMOVED***);

  $('.close-link').click(function () ***REMOVED***
    var $BOX_PANEL = $(this).closest('.x_panel');

    $BOX_PANEL.remove();
***REMOVED***);
***REMOVED***);
// /Panel toolbox

// Tooltip

// /Tooltip

// Progressbar
if ($(".progress .progress-bar")[0]) ***REMOVED***
  $('.progress .progress-bar').progressbar();
***REMOVED***
// /Progressbar

// Switchery
$(document).ready(function() ***REMOVED***
  if ($(".js-switch")[0]) ***REMOVED***
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
    elems.forEach(function (html) ***REMOVED***
      var switchery = new Switchery(html, ***REMOVED***
        color: '#26B99A'
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***
***REMOVED***);
// /Switchery


// iCheck
$(document).ready(function() ***REMOVED***
  if ($("input.flat")[0]) ***REMOVED***
    $(document).ready(function () ***REMOVED***
      $('input.flat').iCheck(***REMOVED***
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green'
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***
***REMOVED***);
// /iCheck

// Table
$('table input').on('ifChecked', function () ***REMOVED***
  checkState = '';
  $(this).parent().parent().parent().addClass('selected');
  countChecked();
***REMOVED***);
$('table input').on('ifUnchecked', function () ***REMOVED***
  checkState = '';
  $(this).parent().parent().parent().removeClass('selected');
  countChecked();
***REMOVED***);

var checkState = '';

$('.bulk_action input').on('ifChecked', function () ***REMOVED***
  checkState = '';
  $(this).parent().parent().parent().addClass('selected');
  countChecked();
***REMOVED***);
$('.bulk_action input').on('ifUnchecked', function () ***REMOVED***
  checkState = '';
  $(this).parent().parent().parent().removeClass('selected');
  countChecked();
***REMOVED***);
$('.bulk_action input#check-all').on('ifChecked', function () ***REMOVED***
  checkState = 'all';
  countChecked();
***REMOVED***);
$('.bulk_action input#check-all').on('ifUnchecked', function () ***REMOVED***
  checkState = 'none';
  countChecked();
***REMOVED***);

function countChecked() ***REMOVED***
  if (checkState === 'all') ***REMOVED***
    $(".bulk_action input[name='table_records']").iCheck('check');
***REMOVED***
  if (checkState === 'none') ***REMOVED***
    $(".bulk_action input[name='table_records']").iCheck('uncheck');
***REMOVED***

  var checkCount = $(".bulk_action input[name='table_records']:checked").length;

  if (checkCount) ***REMOVED***
    $('.column-title').hide();
    $('.bulk-actions').show();
    $('.action-cnt').html(checkCount + ' Records Selected');
***REMOVED*** else ***REMOVED***
    $('.column-title').show();
    $('.bulk-actions').hide();
***REMOVED***
***REMOVED***



// Accordion
$(document).ready(function() ***REMOVED***
  $(".expand").on("click", function () ***REMOVED***
    $(this).next().slideToggle(200);
    $expand = $(this).find(">:first-child");

    if ($expand.text() == "+") ***REMOVED***
      $expand.text("-");
  ***REMOVED*** else ***REMOVED***
      $expand.text("+");
  ***REMOVED***
***REMOVED***);
***REMOVED***);

// NProgress
if (typeof NProgress != 'undefined') ***REMOVED***
  $(document).ready(function () ***REMOVED***
    NProgress.start();
***REMOVED***);

  $(window).load(function () ***REMOVED***
    NProgress.done();
***REMOVED***);
***REMOVED***





function gd(year, month, day) ***REMOVED***
  return new Date(year, month - 1, day).getTime();
***REMOVED***


function init_flot_chart()***REMOVED***

  if( typeof ($.plot) === 'undefined')***REMOVED*** return; ***REMOVED***

  console.log('init_flot_chart');



  var arr_data1 = [
    [gd(2012, 1, 1), 17],
    [gd(2012, 1, 2), 74],
    [gd(2012, 1, 3), 6],
    [gd(2012, 1, 4), 39],
    [gd(2012, 1, 5), 20],
    [gd(2012, 1, 6), 85],
    [gd(2012, 1, 7), 7]
  ];

  var arr_data2 = [
    [gd(2012, 1, 1), 82],
    [gd(2012, 1, 2), 23],
    [gd(2012, 1, 3), 66],
    [gd(2012, 1, 4), 9],
    [gd(2012, 1, 5), 119],
    [gd(2012, 1, 6), 6],
    [gd(2012, 1, 7), 9]
  ];

  var arr_data3 = [
    [0, 1],
    [1, 9],
    [2, 6],
    [3, 10],
    [4, 5],
    [5, 17],
    [6, 6],
    [7, 10],
    [8, 7],
    [9, 11],
    [10, 35],
    [11, 9],
    [12, 12],
    [13, 5],
    [14, 3],
    [15, 4],
    [16, 9]
  ];

  var chart_plot_02_data = [];

  var chart_plot_03_data = [
    [0, 1],
    [1, 9],
    [2, 6],
    [3, 10],
    [4, 5],
    [5, 17],
    [6, 6],
    [7, 10],
    [8, 7],
    [9, 11],
    [10, 35],
    [11, 9],
    [12, 12],
    [13, 5],
    [14, 3],
    [15, 4],
    [16, 9]
  ];


  for (var i = 0; i < 30; i++) ***REMOVED***
    chart_plot_02_data.push([new Date(Date.today().add(i).days()).getTime(), randNum() + i + i + 10]);
***REMOVED***


  var chart_plot_01_settings = ***REMOVED***
    series: ***REMOVED***
      lines: ***REMOVED***
        show: false,
        fill: true
    ***REMOVED***,
      splines: ***REMOVED***
        show: true,
        tension: 0.4,
        lineWidth: 1,
        fill: 0.4
    ***REMOVED***,
      points: ***REMOVED***
        radius: 0,
        show: true
    ***REMOVED***,
      shadowSize: 2
  ***REMOVED***,
    grid: ***REMOVED***
      verticalLines: true,
      hoverable: true,
      clickable: true,
      tickColor: "#d5d5d5",
      borderWidth: 1,
      color: '#fff'
  ***REMOVED***,
    colors: ["rgba(38, 185, 154, 0.38)", "rgba(3, 88, 106, 0.38)"],
    xaxis: ***REMOVED***
      tickColor: "rgba(51, 51, 51, 0.06)",
      mode: "time",
      tickSize: [1, "day"],
      //tickLength: 10,
      axisLabel: "Date",
      axisLabelUseCanvas: true,
      axisLabelFontSizePixels: 12,
      axisLabelFontFamily: 'Verdana, Arial',
      axisLabelPadding: 10
  ***REMOVED***,
    yaxis: ***REMOVED***
      ticks: 8,
      tickColor: "rgba(51, 51, 51, 0.06)",
  ***REMOVED***,
    tooltip: false
***REMOVED***

  var chart_plot_02_settings = ***REMOVED***
    grid: ***REMOVED***
      show: true,
      aboveData: true,
      color: "#3f3f3f",
      labelMargin: 10,
      axisMargin: 0,
      borderWidth: 0,
      borderColor: null,
      minBorderMargin: 5,
      clickable: true,
      hoverable: true,
      autoHighlight: true,
      mouseActiveRadius: 100
  ***REMOVED***,
    series: ***REMOVED***
      lines: ***REMOVED***
        show: true,
        fill: true,
        lineWidth: 2,
        steps: false
    ***REMOVED***,
      points: ***REMOVED***
        show: true,
        radius: 4.5,
        symbol: "circle",
        lineWidth: 3.0
    ***REMOVED***
  ***REMOVED***,
    legend: ***REMOVED***
      position: "ne",
      margin: [0, -25],
      noColumns: 0,
      labelBoxBorderColor: null,
      labelFormatter: function(label, series) ***REMOVED***
        return label + '&nbsp;&nbsp;';
    ***REMOVED***,
      width: 40,
      height: 1
  ***REMOVED***,
    colors: ['#96CA59', '#3F97EB', '#72c380', '#6f7a8a', '#f7cb38', '#5a8022', '#2c7282'],
    shadowSize: 0,
    tooltip: true,
    tooltipOpts: ***REMOVED***
      content: "%s: %y.0",
      xDateFormat: "%d/%m",
      shifts: ***REMOVED***
        x: -30,
        y: -50
    ***REMOVED***,
      defaultTheme: false
  ***REMOVED***,
    yaxis: ***REMOVED***
      min: 0
  ***REMOVED***,
    xaxis: ***REMOVED***
      mode: "time",
      minTickSize: [1, "day"],
      timeformat: "%d/%m/%y",
      min: chart_plot_02_data[0][0],
      max: chart_plot_02_data[20][0]
  ***REMOVED***
***REMOVED***;

  var chart_plot_03_settings = ***REMOVED***
    series: ***REMOVED***
      curvedLines: ***REMOVED***
        apply: true,
        active: true,
        monotonicFit: true
    ***REMOVED***
  ***REMOVED***,
    colors: ["#26B99A"],
    grid: ***REMOVED***
      borderWidth: ***REMOVED***
        top: 0,
        right: 0,
        bottom: 1,
        left: 1
    ***REMOVED***,
      borderColor: ***REMOVED***
        bottom: "#7F8790",
        left: "#7F8790"
    ***REMOVED***
  ***REMOVED***
***REMOVED***;


  if ($("#chart_plot_01").length)***REMOVED***
    console.log('Plot1');

    $.plot( $("#chart_plot_01"), [ arr_data1, arr_data2 ],  chart_plot_01_settings );
***REMOVED***


  if ($("#chart_plot_02").length)***REMOVED***
    console.log('Plot2');

    $.plot( $("#chart_plot_02"),
      [***REMOVED***
        label: "Email Sent",
        data: chart_plot_02_data,
        lines: ***REMOVED***
          fillColor: "rgba(150, 202, 89, 0.12)"
      ***REMOVED***,
        points: ***REMOVED***
          fillColor: "#fff" ***REMOVED***
    ***REMOVED***], chart_plot_02_settings);

***REMOVED***

  if ($("#chart_plot_03").length)***REMOVED***
    console.log('Plot3');


    $.plot($("#chart_plot_03"), [***REMOVED***
      label: "Registrations",
      data: chart_plot_03_data,
      lines: ***REMOVED***
        fillColor: "rgba(150, 202, 89, 0.12)"
    ***REMOVED***,
      points: ***REMOVED***
        fillColor: "#fff"
    ***REMOVED***
  ***REMOVED***], chart_plot_03_settings);

***REMOVED***;

***REMOVED***


/* STARRR */

function init_starrr() ***REMOVED***

  if( typeof (starrr) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_starrr');

  $(".stars").starrr();

  $('.stars-existing').starrr(***REMOVED***
    rating: 4
***REMOVED***);

  $('.stars').on('starrr:change', function (e, value) ***REMOVED***
    $('.stars-count').html(value);
***REMOVED***);

  $('.stars-existing').on('starrr:change', function (e, value) ***REMOVED***
    $('.stars-count-existing').html(value);
***REMOVED***);

***REMOVED***;


function init_JQVmap()***REMOVED***

  //console.log('check init_JQVmap [' + typeof (VectorCanvas) + '][' + typeof (jQuery.fn.vectorMap) + ']' );

  if(typeof (jQuery.fn.vectorMap) === 'undefined')***REMOVED*** return; ***REMOVED***

  console.log('init_JQVmap');

  if ($('#world-map-gdp').length )***REMOVED***

    $('#world-map-gdp').vectorMap(***REMOVED***
      map: 'world_en',
      backgroundColor: null,
      color: '#ffffff',
      hoverOpacity: 0.7,
      selectedColor: '#666666',
      enableZoom: true,
      showTooltip: true,
      values: sample_data,
      scaleColors: ['#E6F2F0', '#149B7E'],
      normalizeFunction: 'polynomial'
  ***REMOVED***);

***REMOVED***

  if ($('#usa_map').length )***REMOVED***

    $('#usa_map').vectorMap(***REMOVED***
      map: 'usa_en',
      backgroundColor: null,
      color: '#ffffff',
      hoverOpacity: 0.7,
      selectedColor: '#666666',
      enableZoom: true,
      showTooltip: true,
      values: sample_data,
      scaleColors: ['#E6F2F0', '#149B7E'],
      normalizeFunction: 'polynomial'
  ***REMOVED***);

***REMOVED***

***REMOVED***;


function init_skycons()***REMOVED***

  if( typeof (Skycons) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_skycons');

  var icons = new Skycons(***REMOVED***
      "color": "#73879C"
  ***REMOVED***),
    list = [
      "clear-day", "clear-night", "partly-cloudy-day",
      "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
      "fog"
    ],
    i;

  for (i = list.length; i--;)
    icons.set(list[i], list[i]);

  icons.play();

***REMOVED***


function init_chart_doughnut()***REMOVED***

  if( typeof (Chart) === 'undefined')***REMOVED*** return; ***REMOVED***

  console.log('init_chart_doughnut');

  if ($('.canvasDoughnut').length)***REMOVED***

    var chart_doughnut_settings = ***REMOVED***
      type: 'doughnut',
      tooltipFillColor: "rgba(51, 51, 51, 0.55)",
      data: ***REMOVED***
        labels: [
          "Symbian",
          "Blackberry",
          "Other",
          "Android",
          "IOS"
        ],
        datasets: [***REMOVED***
          data: [15, 20, 30, 10, 30],
          backgroundColor: [
            "#BDC3C7",
            "#9B59B6",
            "#E74C3C",
            "#26B99A",
            "#3498DB"
          ],
          hoverBackgroundColor: [
            "#CFD4D8",
            "#B370CF",
            "#E95E4F",
            "#36CAAB",
            "#49A9EA"
          ]
      ***REMOVED***]
    ***REMOVED***,
      options: ***REMOVED***
        legend: false,
        responsive: false
    ***REMOVED***
  ***REMOVED***

    $('.canvasDoughnut').each(function()***REMOVED***

      var chart_element = $(this);
      var chart_doughnut = new Chart( chart_element, chart_doughnut_settings);

  ***REMOVED***);

***REMOVED***

***REMOVED***

function init_gauge() ***REMOVED***

  if( typeof (Gauge) === 'undefined')***REMOVED*** return; ***REMOVED***

  console.log('init_gauge [' + $('.gauge-chart').length + ']');

  console.log('init_gauge');


  var chart_gauge_settings = ***REMOVED***
    lines: 12,
    angle: 0,
    lineWidth: 0.4,
    pointer: ***REMOVED***
      length: 0.75,
      strokeWidth: 0.042,
      color: '#1D212A'
  ***REMOVED***,
    limitMax: 'false',
    colorStart: '#1ABC9C',
    colorStop: '#1ABC9C',
    strokeColor: '#F0F3F3',
    generateGradient: true
***REMOVED***;


  if ($('#chart_gauge_01').length)***REMOVED***

    var chart_gauge_01_elem = document.getElementById('chart_gauge_01');
    var chart_gauge_01 = new Gauge(chart_gauge_01_elem).setOptions(chart_gauge_settings);

***REMOVED***


  if ($('#gauge-text').length)***REMOVED***

    chart_gauge_01.maxValue = 6000;
    chart_gauge_01.animationSpeed = 32;
    chart_gauge_01.set(3200);
    chart_gauge_01.setTextField(document.getElementById("gauge-text"));

***REMOVED***

  if ($('#chart_gauge_02').length)***REMOVED***

    var chart_gauge_02_elem = document.getElementById('chart_gauge_02');
    var chart_gauge_02 = new Gauge(chart_gauge_02_elem).setOptions(chart_gauge_settings);

***REMOVED***


  if ($('#gauge-text2').length)***REMOVED***

    chart_gauge_02.maxValue = 9000;
    chart_gauge_02.animationSpeed = 32;
    chart_gauge_02.set(2400);
    chart_gauge_02.setTextField(document.getElementById("gauge-text2"));

***REMOVED***


***REMOVED***

/* SPARKLINES */

function init_sparklines() ***REMOVED***

  if(typeof (jQuery.fn.sparkline) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_sparklines');


  $(".sparkline_one").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], ***REMOVED***
    type: 'bar',
    height: '125',
    barWidth: 13,
    colorMap: ***REMOVED***
      '7': '#a1a1a1'
  ***REMOVED***,
    barSpacing: 2,
    barColor: '#26B99A'
***REMOVED***);


  $(".sparkline_two").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], ***REMOVED***
    type: 'bar',
    height: '40',
    barWidth: 9,
    colorMap: ***REMOVED***
      '7': '#a1a1a1'
  ***REMOVED***,
    barSpacing: 2,
    barColor: '#26B99A'
***REMOVED***);


  $(".sparkline_three").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], ***REMOVED***
    type: 'line',
    width: '200',
    height: '40',
    lineColor: '#26B99A',
    fillColor: 'rgba(223, 223, 223, 0.57)',
    lineWidth: 2,
    spotColor: '#26B99A',
    minSpotColor: '#26B99A'
***REMOVED***);


  $(".sparkline11").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3], ***REMOVED***
    type: 'bar',
    height: '40',
    barWidth: 8,
    colorMap: ***REMOVED***
      '7': '#a1a1a1'
  ***REMOVED***,
    barSpacing: 2,
    barColor: '#26B99A'
***REMOVED***);


  $(".sparkline22").sparkline([2, 4, 3, 4, 7, 5, 4, 3, 5, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6], ***REMOVED***
    type: 'line',
    height: '40',
    width: '200',
    lineColor: '#26B99A',
    fillColor: '#ffffff',
    lineWidth: 3,
    spotColor: '#34495E',
    minSpotColor: '#34495E'
***REMOVED***);


  $(".sparkline_bar").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5], ***REMOVED***
    type: 'bar',
    colorMap: ***REMOVED***
      '7': '#a1a1a1'
  ***REMOVED***,
    barColor: '#26B99A'
***REMOVED***);


  $(".sparkline_area").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], ***REMOVED***
    type: 'line',
    lineColor: '#26B99A',
    fillColor: '#26B99A',
    spotColor: '#4578a0',
    minSpotColor: '#728fb2',
    maxSpotColor: '#6d93c4',
    highlightSpotColor: '#ef5179',
    highlightLineColor: '#8ba8bf',
    spotRadius: 2.5,
    width: 85
***REMOVED***);


  $(".sparkline_line").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5], ***REMOVED***
    type: 'line',
    lineColor: '#26B99A',
    fillColor: '#ffffff',
    width: 85,
    spotColor: '#34495E',
    minSpotColor: '#34495E'
***REMOVED***);


  $(".sparkline_pie").sparkline([1, 1, 2, 1], ***REMOVED***
    type: 'pie',
    sliceColors: ['#26B99A', '#ccc', '#75BCDD', '#D66DE2']
***REMOVED***);


  $(".sparkline_discreet").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 2, 4, 3, 7, 8, 9, 7, 6, 4, 3], ***REMOVED***
    type: 'discrete',
    barWidth: 3,
    lineColor: '#26B99A',
    width: '85',
***REMOVED***);


***REMOVED***;


/* AUTOCOMPLETE */

function init_autocomplete() ***REMOVED***

  if( typeof (autocomplete) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_autocomplete');

  var countries = ***REMOVED*** AD:"Andorra",A2:"Andorra Test",AE:"United Arab Emirates",AF:"Afghanistan",AG:"Antigua and Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AN:"Netherlands Antilles",AO:"Angola",AQ:"Antarctica",AR:"Argentina",AS:"American Samoa",AT:"Austria",AU:"Australia",AW:"Aruba",AX:"Åland Islands",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BL:"Saint Barthélemy",BM:"Bermuda",BN:"Brunei",BO:"Bolivia",BQ:"British Antarctic Territory",BR:"Brazil",BS:"Bahamas",BT:"Bhutan",BV:"Bouvet Island",BW:"Botswana",BY:"Belarus",BZ:"Belize",CA:"Canada",CC:"Cocos [Keeling] Islands",CD:"Congo - Kinshasa",CF:"Central African Republic",CG:"Congo - Brazzaville",CH:"Switzerland",CI:"Côte d’Ivoire",CK:"Cook Islands",CL:"Chile",CM:"Cameroon",CN:"China",CO:"Colombia",CR:"Costa Rica",CS:"Serbia and Montenegro",CT:"Canton and Enderbury Islands",CU:"Cuba",CV:"Cape Verde",CX:"Christmas Island",CY:"Cyprus",CZ:"Czech Republic",DD:"East Germany",DE:"Germany",DJ:"Djibouti",DK:"Denmark",DM:"Dominica",DO:"Dominican Republic",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egypt",EH:"Western Sahara",ER:"Eritrea",ES:"Spain",ET:"Ethiopia",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands",FM:"Micronesia",FO:"Faroe Islands",FQ:"French Southern and Antarctic Territories",FR:"France",FX:"Metropolitan France",GA:"Gabon",GB:"United Kingdom",GD:"Grenada",GE:"Georgia",GF:"French Guiana",GG:"Guernsey",GH:"Ghana",GI:"Gibraltar",GL:"Greenland",GM:"Gambia",GN:"Guinea",GP:"Guadeloupe",GQ:"Equatorial Guinea",GR:"Greece",GS:"South Georgia and the South Sandwich Islands",GT:"Guatemala",GU:"Guam",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong SAR China",HM:"Heard Island and McDonald Islands",HN:"Honduras",HR:"Croatia",HT:"Haiti",HU:"Hungary",ID:"Indonesia",IE:"Ireland",IL:"Israel",IM:"Isle of Man",IN:"India",IO:"British Indian Ocean Territory",IQ:"Iraq",IR:"Iran",IS:"Iceland",IT:"Italy",JE:"Jersey",JM:"Jamaica",JO:"Jordan",JP:"Japan",JT:"Johnston Island",KE:"Kenya",KG:"Kyrgyzstan",KH:"Cambodia",KI:"Kiribati",KM:"Comoros",KN:"Saint Kitts and Nevis",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KY:"Cayman Islands",KZ:"Kazakhstan",LA:"Laos",LB:"Lebanon",LC:"Saint Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",LY:"Libya",MA:"Morocco",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MF:"Saint Martin",MG:"Madagascar",MH:"Marshall Islands",MI:"Midway Islands",MK:"Macedonia",ML:"Mali",MM:"Myanmar [Burma]",MN:"Mongolia",MO:"Macau SAR China",MP:"Northern Mariana Islands",MQ:"Martinique",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"Mexico",MY:"Malaysia",MZ:"Mozambique",NA:"Namibia",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NP:"Nepal",NQ:"Dronning Maud Land",NR:"Nauru",NT:"Neutral Zone",NU:"Niue",NZ:"New Zealand",OM:"Oman",PA:"Panama",PC:"Pacific Islands Trust Territory",PE:"Peru",PF:"French Polynesia",PG:"Papua New Guinea",PH:"Philippines",PK:"Pakistan",PL:"Poland",PM:"Saint Pierre and Miquelon",PN:"Pitcairn Islands",PR:"Puerto Rico",PS:"Palestinian Territories",PT:"Portugal",PU:"U.S. Miscellaneous Pacific Islands",PW:"Palau",PY:"Paraguay",PZ:"Panama Canal Zone",QA:"Qatar",RE:"Réunion",RO:"Romania",RS:"Serbia",RU:"Russia",RW:"Rwanda",SA:"Saudi Arabia",SB:"Solomon Islands",SC:"Seychelles",SD:"Sudan",SE:"Sweden",SG:"Singapore",SH:"Saint Helena",SI:"Slovenia",SJ:"Svalbard and Jan Mayen",SK:"Slovakia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",ST:"São Tomé and Príncipe",SU:"Union of Soviet Socialist Republics",SV:"El Salvador",SY:"Syria",SZ:"Swaziland",TC:"Turks and Caicos Islands",TD:"Chad",TF:"French Southern Territories",TG:"Togo",TH:"Thailand",TJ:"Tajikistan",TK:"Tokelau",TL:"Timor-Leste",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"Turkey",TT:"Trinidad and Tobago",TV:"Tuvalu",TW:"Taiwan",TZ:"Tanzania",UA:"Ukraine",UG:"Uganda",UM:"U.S. Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VA:"Vatican City",VC:"Saint Vincent and the Grenadines",VD:"North Vietnam",VE:"Venezuela",VG:"British Virgin Islands",VI:"U.S. Virgin Islands",VN:"Vietnam",VU:"Vanuatu",WF:"Wallis and Futuna",WK:"Wake Island",WS:"Samoa",YD:"People's Democratic Republic of Yemen",YE:"Yemen",YT:"Mayotte",ZA:"South Africa",ZM:"Zambia",ZW:"Zimbabwe",ZZ:"Unknown or Invalid Region" ***REMOVED***;

  var countriesArray = $.map(countries, function(value, key) ***REMOVED***
    return ***REMOVED***
      value: value,
      data: key
  ***REMOVED***;
***REMOVED***);

  // initialize autocomplete with custom appendTo
  $('#autocomplete-custom-append').autocomplete(***REMOVED***
    lookup: countriesArray
***REMOVED***);

***REMOVED***;

/* AUTOSIZE */

function init_autosize() ***REMOVED***

  if(typeof $.fn.autosize !== 'undefined')***REMOVED***

    autosize($('.resizable_textarea'));

***REMOVED***

***REMOVED***;

/* PARSLEY */

function init_parsley() ***REMOVED***

  if( typeof (parsley) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_parsley');

  $/*.listen*/('parsley:field:validate', function() ***REMOVED***
    validateFront();
***REMOVED***);
  $('#demo-form .btn').on('click', function() ***REMOVED***
    $('#demo-form').parsley().validate();
    validateFront();
***REMOVED***);
  var validateFront = function() ***REMOVED***
    if (true === $('#demo-form').parsley().isValid()) ***REMOVED***
      $('.bs-callout-info').removeClass('hidden');
      $('.bs-callout-warning').addClass('hidden');
  ***REMOVED*** else ***REMOVED***
      $('.bs-callout-info').addClass('hidden');
      $('.bs-callout-warning').removeClass('hidden');
  ***REMOVED***
***REMOVED***;

  $/*.listen*/('parsley:field:validate', function() ***REMOVED***
    validateFront();
***REMOVED***);
  $('#demo-form2 .btn').on('click', function() ***REMOVED***
    $('#demo-form2').parsley().validate();
    validateFront();
***REMOVED***);
  var validateFront = function() ***REMOVED***
    if (true === $('#demo-form2').parsley().isValid()) ***REMOVED***
      $('.bs-callout-info').removeClass('hidden');
      $('.bs-callout-warning').addClass('hidden');
  ***REMOVED*** else ***REMOVED***
      $('.bs-callout-info').addClass('hidden');
      $('.bs-callout-warning').removeClass('hidden');
  ***REMOVED***
***REMOVED***;

  try ***REMOVED***
    hljs.initHighlightingOnLoad();
***REMOVED*** catch (err) ***REMOVED******REMOVED***

***REMOVED***;


/* INPUTS */

function onAddTag(tag) ***REMOVED***
  alert("Added a tag: " + tag);
***REMOVED***

function onRemoveTag(tag) ***REMOVED***
  alert("Removed a tag: " + tag);
***REMOVED***

function onChangeTag(input, tag) ***REMOVED***
  alert("Changed a tag: " + tag);
***REMOVED***

//tags input
function init_TagsInput() ***REMOVED***

  if(typeof $.fn.tagsInput !== 'undefined')***REMOVED***

    $('#tags_1').tagsInput(***REMOVED***
      width: 'auto'
  ***REMOVED***);

***REMOVED***

***REMOVED***;

/* SELECT2 */

function init_select2() ***REMOVED***

  if( typeof (select2) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_toolbox');

  $(".select2_single").select2(***REMOVED***
    placeholder: "Select a state",
    allowClear: true
***REMOVED***);
  $(".select2_group").select2(***REMOVED******REMOVED***);
  $(".select2_multiple").select2(***REMOVED***
    maximumSelectionLength: 4,
    placeholder: "With Max Selection limit 4",
    allowClear: true
***REMOVED***);

***REMOVED***;

/* WYSIWYG EDITOR */

function init_wysiwyg() ***REMOVED***

  if( typeof ($.fn.wysiwyg) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_wysiwyg');

  function init_ToolbarBootstrapBindings() ***REMOVED***
    var fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier',
        'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
        'Times New Roman', 'Verdana'
      ],
      fontTarget = $('[title=Font]').siblings('.dropdown-menu');
    $.each(fonts, function(idx, fontName) ***REMOVED***
      fontTarget.append($('<li><a data-edit="fontName ' + fontName + '" style="font-family:\'' + fontName + '\'">' + fontName + '</a></li>'));
  ***REMOVED***);
    $('a[title]').tooltip(***REMOVED***
      container: 'body'
  ***REMOVED***);
    $('.dropdown-menu input').click(function() ***REMOVED***
      return false;
  ***REMOVED***)
      .change(function() ***REMOVED***
        $(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');
    ***REMOVED***)
      .keydown('esc', function() ***REMOVED***
        this.value = '';
        $(this).change();
    ***REMOVED***);

    $('[data-role=magic-overlay]').each(function() ***REMOVED***
      var overlay = $(this),
        target = $(overlay.data('target'));
      overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
  ***REMOVED***);

    if ("onwebkitspeechchange" in document.createElement("input")) ***REMOVED***
      var editorOffset = $('#editor').offset();

      $('.voiceBtn').css('position', 'absolute').offset(***REMOVED***
        top: editorOffset.top,
        left: editorOffset.left + $('#editor').innerWidth() - 35
    ***REMOVED***);
  ***REMOVED*** else ***REMOVED***
      $('.voiceBtn').hide();
  ***REMOVED***
***REMOVED***

  function showErrorAlert(reason, detail) ***REMOVED***
    var msg = '';
    if (reason === 'unsupported-file-type') ***REMOVED***
      msg = "Unsupported format " + detail;
  ***REMOVED*** else ***REMOVED***
      console.log("error uploading file", reason, detail);
  ***REMOVED***
    $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>' +
      '<strong>File upload error</strong> ' + msg + ' </div>').prependTo('#alerts');
***REMOVED***

  $('.editor-wrapper').each(function()***REMOVED***
    var id = $(this).attr('id');	//editor-one

    $(this).wysiwyg(***REMOVED***
      toolbarSelector: '[data-target="#' + id + '"]',
      fileUploadError: showErrorAlert
  ***REMOVED***);
***REMOVED***);


  window.prettyPrint;
  prettyPrint();

***REMOVED***;

/* CROPPER */

function init_cropper() ***REMOVED***


  if( typeof ($.fn.cropper) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_cropper');

  var $image = $('#image');
  var $download = $('#download');
  var $dataX = $('#dataX');
  var $dataY = $('#dataY');
  var $dataHeight = $('#dataHeight');
  var $dataWidth = $('#dataWidth');
  var $dataRotate = $('#dataRotate');
  var $dataScaleX = $('#dataScaleX');
  var $dataScaleY = $('#dataScaleY');
  var options = ***REMOVED***
    aspectRatio: 16 / 9,
    preview: '.img-preview',
    crop: function (e) ***REMOVED***
      $dataX.val(Math.round(e.x));
      $dataY.val(Math.round(e.y));
      $dataHeight.val(Math.round(e.height));
      $dataWidth.val(Math.round(e.width));
      $dataRotate.val(e.rotate);
      $dataScaleX.val(e.scaleX);
      $dataScaleY.val(e.scaleY);
  ***REMOVED***
***REMOVED***;


  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();


  // Cropper
  $image.on(***REMOVED***
    'build.cropper': function (e) ***REMOVED***
      console.log(e.type);
  ***REMOVED***,
    'built.cropper': function (e) ***REMOVED***
      console.log(e.type);
  ***REMOVED***,
    'cropstart.cropper': function (e) ***REMOVED***
      console.log(e.type, e.action);
  ***REMOVED***,
    'cropmove.cropper': function (e) ***REMOVED***
      console.log(e.type, e.action);
  ***REMOVED***,
    'cropend.cropper': function (e) ***REMOVED***
      console.log(e.type, e.action);
  ***REMOVED***,
    'crop.cropper': function (e) ***REMOVED***
      console.log(e.type, e.x, e.y, e.width, e.height, e.rotate, e.scaleX, e.scaleY);
  ***REMOVED***,
    'zoom.cropper': function (e) ***REMOVED***
      console.log(e.type, e.ratio);
  ***REMOVED***
***REMOVED***).cropper(options);


  // Buttons
  if (!$.isFunction(document.createElement('canvas').getContext)) ***REMOVED***
    $('button[data-method="getCroppedCanvas"]').prop('disabled', true);
***REMOVED***

  if (typeof document.createElement('cropper').style.transition === 'undefined') ***REMOVED***
    $('button[data-method="rotate"]').prop('disabled', true);
    $('button[data-method="scale"]').prop('disabled', true);
***REMOVED***


  // Download
  if (typeof $download[0].download === 'undefined') ***REMOVED***
    $download.addClass('disabled');
***REMOVED***


  // Options
  $('.docs-toggles').on('change', 'input', function () ***REMOVED***
    var $this = $(this);
    var name = $this.attr('name');
    var type = $this.prop('type');
    var cropBoxData;
    var canvasData;

    if (!$image.data('cropper')) ***REMOVED***
      return;
  ***REMOVED***

    if (type === 'checkbox') ***REMOVED***
      options[name] = $this.prop('checked');
      cropBoxData = $image.cropper('getCropBoxData');
      canvasData = $image.cropper('getCanvasData');

      options.built = function () ***REMOVED***
        $image.cropper('setCropBoxData', cropBoxData);
        $image.cropper('setCanvasData', canvasData);
    ***REMOVED***;
  ***REMOVED*** else if (type === 'radio') ***REMOVED***
      options[name] = $this.val();
  ***REMOVED***

    $image.cropper('destroy').cropper(options);
***REMOVED***);


  // Methods
  $('.docs-buttons').on('click', '[data-method]', function () ***REMOVED***
    var $this = $(this);
    var data = $this.data();
    var $target;
    var result;

    if ($this.prop('disabled') || $this.hasClass('disabled')) ***REMOVED***
      return;
  ***REMOVED***

    if ($image.data('cropper') && data.method) ***REMOVED***
      data = $.extend(***REMOVED******REMOVED***, data); // Clone a new one

      if (typeof data.target !== 'undefined') ***REMOVED***
        $target = $(data.target);

        if (typeof data.option === 'undefined') ***REMOVED***
          try ***REMOVED***
            data.option = JSON.parse($target.val());
        ***REMOVED*** catch (e) ***REMOVED***
            console.log(e.message);
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***

      result = $image.cropper(data.method, data.option, data.secondOption);

      switch (data.method) ***REMOVED***
        case 'scaleX':
        case 'scaleY':
          $(this).data('option', -data.option);
          break;

        case 'getCroppedCanvas':
          if (result) ***REMOVED***

            // Bootstrap's Modal
            $('#getCroppedCanvasModal').modal().find('.modal-body').html(result);

            if (!$download.hasClass('disabled')) ***REMOVED***
              $download.attr('href', result.toDataURL());
          ***REMOVED***
        ***REMOVED***

          break;
    ***REMOVED***

      if ($.isPlainObject(result) && $target) ***REMOVED***
        try ***REMOVED***
          $target.val(JSON.stringify(result));
      ***REMOVED*** catch (e) ***REMOVED***
          console.log(e.message);
      ***REMOVED***
    ***REMOVED***

  ***REMOVED***
***REMOVED***);

  // Keyboard
  $(document.body).on('keydown', function (e) ***REMOVED***
    if (!$image.data('cropper') || this.scrollTop > 300) ***REMOVED***
      return;
  ***REMOVED***

    switch (e.which) ***REMOVED***
      case 37:
        e.preventDefault();
        $image.cropper('move', -1, 0);
        break;

      case 38:
        e.preventDefault();
        $image.cropper('move', 0, -1);
        break;

      case 39:
        e.preventDefault();
        $image.cropper('move', 1, 0);
        break;

      case 40:
        e.preventDefault();
        $image.cropper('move', 0, 1);
        break;
  ***REMOVED***
***REMOVED***);

  // Import image
  var $inputImage = $('#inputImage');
  var URL = window.URL || window.webkitURL;
  var blobURL;

  if (URL) ***REMOVED***
    $inputImage.change(function () ***REMOVED***
      var files = this.files;
      var file;

      if (!$image.data('cropper')) ***REMOVED***
        return;
    ***REMOVED***

      if (files && files.length) ***REMOVED***
        file = files[0];

        if (/^image\/\w+$/.test(file.type)) ***REMOVED***
          blobURL = URL.createObjectURL(file);
          $image.one('built.cropper', function () ***REMOVED***

            // Revoke when load complete
            URL.revokeObjectURL(blobURL);
        ***REMOVED***).cropper('reset').cropper('replace', blobURL);
          $inputImage.val('');
      ***REMOVED*** else ***REMOVED***
          window.alert('Please choose an image file.');
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***);
***REMOVED*** else ***REMOVED***
    $inputImage.prop('disabled', true).parent().addClass('disabled');
***REMOVED***


***REMOVED***;

/* CROPPER --- end */

/* KNOB */

function init_knob() ***REMOVED***

  if( typeof ($.fn.knob) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_knob');

  $(".knob").knob(***REMOVED***
    change: function(value) ***REMOVED***
      //console.log("change : " + value);
  ***REMOVED***,
    release: function(value) ***REMOVED***
      //console.log(this.$.attr('value'));
      console.log("release : " + value);
  ***REMOVED***,
    cancel: function() ***REMOVED***
      console.log("cancel : ", this);
  ***REMOVED***,
    /*format : function (value) ***REMOVED***
     return value + '%';
   ***REMOVED***,*/
    draw: function() ***REMOVED***

      // "tron" case
      if (this.$.data('skin') == 'tron') ***REMOVED***

        this.cursorExt = 0.3;

        var a = this.arc(this.cv) // Arc
          ,
          pa // Previous arc
          , r = 1;

        this.g.lineWidth = this.lineWidth;

        if (this.o.displayPrevious) ***REMOVED***
          pa = this.arc(this.v);
          this.g.beginPath();
          this.g.strokeStyle = this.pColor;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
          this.g.stroke();
      ***REMOVED***

        this.g.beginPath();
        this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
        this.g.stroke();

        this.g.lineWidth = 2;
        this.g.beginPath();
        this.g.strokeStyle = this.o.fgColor;
        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
        this.g.stroke();

        return false;
    ***REMOVED***
  ***REMOVED***

***REMOVED***);

  // Example of infinite knob, iPod click wheel
  var v, up = 0,
    down = 0,
    i = 0,
    $idir = $("div.idir"),
    $ival = $("div.ival"),
    incr = function() ***REMOVED***
      i++;
      $idir.show().html("+").fadeOut();
      $ival.html(i);
  ***REMOVED***,
    decr = function() ***REMOVED***
      i--;
      $idir.show().html("-").fadeOut();
      $ival.html(i);
  ***REMOVED***;
  $("input.infinite").knob(***REMOVED***
    min: 0,
    max: 20,
    stopper: false,
    change: function() ***REMOVED***
      if (v > this.cv) ***REMOVED***
        if (up) ***REMOVED***
          decr();
          up = 0;
      ***REMOVED*** else ***REMOVED***
          up = 1;
          down = 0;
      ***REMOVED***
    ***REMOVED*** else ***REMOVED***
        if (v < this.cv) ***REMOVED***
          if (down) ***REMOVED***
            incr();
            down = 0;
        ***REMOVED*** else ***REMOVED***
            down = 1;
            up = 0;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
      v = this.cv;
  ***REMOVED***
***REMOVED***);

***REMOVED***;

/* INPUT MASK */

function init_InputMask() ***REMOVED***

  if( typeof ($.fn.inputmask) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_InputMask');

  $(":input").inputmask();

***REMOVED***;

/* COLOR PICKER */

function init_ColorPicker() ***REMOVED***

  if( typeof ($.fn.colorpicker) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_ColorPicker');

  $('.demo1').colorpicker();
  $('.demo2').colorpicker();

  $('#demo_forceformat').colorpicker(***REMOVED***
    format: 'rgba',
    horizontal: true
***REMOVED***);

  $('#demo_forceformat3').colorpicker(***REMOVED***
    format: 'rgba',
***REMOVED***);

  $('.demo-auto').colorpicker();

***REMOVED***;


/* ION RANGE SLIDER */

function init_IonRangeSlider() ***REMOVED***

  if( typeof ($.fn.ionRangeSlider) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_IonRangeSlider');

  $("#range_27").ionRangeSlider(***REMOVED***
    type: "double",
    min: 1000000,
    max: 2000000,
    grid: true,
    force_edges: true
***REMOVED***);
  $("#range").ionRangeSlider(***REMOVED***
    hide_min_max: true,
    keyboard: true,
    min: 0,
    max: 5000,
    from: 1000,
    to: 4000,
    type: 'double',
    step: 1,
    prefix: "$",
    grid: true
***REMOVED***);
  $("#range_25").ionRangeSlider(***REMOVED***
    type: "double",
    min: 1000000,
    max: 2000000,
    grid: true
***REMOVED***);
  $("#range_26").ionRangeSlider(***REMOVED***
    type: "double",
    min: 0,
    max: 10000,
    step: 500,
    grid: true,
    grid_snap: true
***REMOVED***);
  $("#range_31").ionRangeSlider(***REMOVED***
    type: "double",
    min: 0,
    max: 100,
    from: 30,
    to: 70,
    from_fixed: true
***REMOVED***);
  $(".range_min_max").ionRangeSlider(***REMOVED***
    type: "double",
    min: 0,
    max: 100,
    from: 30,
    to: 70,
    max_interval: 50
***REMOVED***);
  $(".range_time24").ionRangeSlider(***REMOVED***
    min: +moment().subtract(12, "hours").format("X"),
    max: +moment().format("X"),
    from: +moment().subtract(6, "hours").format("X"),
    grid: true,
    force_edges: true,
    prettify: function(num) ***REMOVED***
      var m = moment(num, "X");
      return m.format("Do MMMM, HH:mm");
  ***REMOVED***
***REMOVED***);

***REMOVED***;


/* DATERANGEPICKER */

function init_daterangepicker() ***REMOVED***

  if( typeof ($.fn.daterangepicker) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_daterangepicker');

  var cb = function(start, end, label) ***REMOVED***
    console.log(start.toISOString(), end.toISOString(), label);
    $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
***REMOVED***;

  var optionSet1 = ***REMOVED***
    startDate: moment().subtract(29, 'days'),
    endDate: moment(),
    minDate: '01/01/2012',
    maxDate: '12/31/2015',
    dateLimit: ***REMOVED***
      days: 60
  ***REMOVED***,
    showDropdowns: true,
    showWeekNumbers: true,
    timePicker: false,
    timePickerIncrement: 1,
    timePicker12Hour: true,
    ranges: ***REMOVED***
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  ***REMOVED***,
    opens: 'left',
    buttonClasses: ['btn btn-default'],
    applyClass: 'btn-small btn-primary',
    cancelClass: 'btn-small',
    format: 'MM/DD/YYYY',
    separator: ' to ',
    locale: ***REMOVED***
      applyLabel: 'Submit',
      cancelLabel: 'Clear',
      fromLabel: 'From',
      toLabel: 'To',
      customRangeLabel: 'Custom',
      daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      firstDay: 1
  ***REMOVED***
***REMOVED***;

  $('#reportrange span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
  $('#reportrange').daterangepicker(optionSet1, cb);
  $('#reportrange').on('show.daterangepicker', function() ***REMOVED***
    console.log("show event fired");
***REMOVED***);
  $('#reportrange').on('hide.daterangepicker', function() ***REMOVED***
    console.log("hide event fired");
***REMOVED***);
  $('#reportrange').on('apply.daterangepicker', function(ev, picker) ***REMOVED***
    console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
***REMOVED***);
  $('#reportrange').on('cancel.daterangepicker', function(ev, picker) ***REMOVED***
    console.log("cancel event fired");
***REMOVED***);
  $('#options1').click(function() ***REMOVED***
    $('#reportrange').data('daterangepicker').setOptions(optionSet1, cb);
***REMOVED***);
  $('#options2').click(function() ***REMOVED***
    $('#reportrange').data('daterangepicker').setOptions(optionSet2, cb);
***REMOVED***);
  $('#destroy').click(function() ***REMOVED***
    $('#reportrange').data('daterangepicker').remove();
***REMOVED***);

***REMOVED***

function init_daterangepicker_right() ***REMOVED***

  if( typeof ($.fn.daterangepicker) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_daterangepicker_right');

  var cb = function(start, end, label) ***REMOVED***
    console.log(start.toISOString(), end.toISOString(), label);
    $('#reportrange_right span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
***REMOVED***;

  var optionSet1 = ***REMOVED***
    startDate: moment().subtract(29, 'days'),
    endDate: moment(),
    minDate: '01/01/2012',
    maxDate: '12/31/2020',
    dateLimit: ***REMOVED***
      days: 60
  ***REMOVED***,
    showDropdowns: true,
    showWeekNumbers: true,
    timePicker: false,
    timePickerIncrement: 1,
    timePicker12Hour: true,
    ranges: ***REMOVED***
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  ***REMOVED***,
    opens: 'right',
    buttonClasses: ['btn btn-default'],
    applyClass: 'btn-small btn-primary',
    cancelClass: 'btn-small',
    format: 'MM/DD/YYYY',
    separator: ' to ',
    locale: ***REMOVED***
      applyLabel: 'Submit',
      cancelLabel: 'Clear',
      fromLabel: 'From',
      toLabel: 'To',
      customRangeLabel: 'Custom',
      daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      firstDay: 1
  ***REMOVED***
***REMOVED***;

  $('#reportrange_right span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));

  $('#reportrange_right').daterangepicker(optionSet1, cb);

  $('#reportrange_right').on('show.daterangepicker', function() ***REMOVED***
    console.log("show event fired");
***REMOVED***);
  $('#reportrange_right').on('hide.daterangepicker', function() ***REMOVED***
    console.log("hide event fired");
***REMOVED***);
  $('#reportrange_right').on('apply.daterangepicker', function(ev, picker) ***REMOVED***
    console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
***REMOVED***);
  $('#reportrange_right').on('cancel.daterangepicker', function(ev, picker) ***REMOVED***
    console.log("cancel event fired");
***REMOVED***);

  $('#options1').click(function() ***REMOVED***
    $('#reportrange_right').data('daterangepicker').setOptions(optionSet1, cb);
***REMOVED***);

  $('#options2').click(function() ***REMOVED***
    $('#reportrange_right').data('daterangepicker').setOptions(optionSet2, cb);
***REMOVED***);

  $('#destroy').click(function() ***REMOVED***
    $('#reportrange_right').data('daterangepicker').remove();
***REMOVED***);

***REMOVED***

function init_daterangepicker_single_call() ***REMOVED***

  if( typeof ($.fn.daterangepicker) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_daterangepicker_single_call');

  $('#single_cal1').daterangepicker(***REMOVED***
    singleDatePicker: true,
    singleClasses: "picker_1"
***REMOVED***, function(start, end, label) ***REMOVED***
    console.log(start.toISOString(), end.toISOString(), label);
***REMOVED***);
  $('#single_cal2').daterangepicker(***REMOVED***
    singleDatePicker: true,
    singleClasses: "picker_2"
***REMOVED***, function(start, end, label) ***REMOVED***
    console.log(start.toISOString(), end.toISOString(), label);
***REMOVED***);
  $('#single_cal3').daterangepicker(***REMOVED***
    singleDatePicker: true,
    singleClasses: "picker_3"
***REMOVED***, function(start, end, label) ***REMOVED***
    console.log(start.toISOString(), end.toISOString(), label);
***REMOVED***);
  $('#single_cal4').daterangepicker(***REMOVED***
    singleDatePicker: true,
    singleClasses: "picker_4"
***REMOVED***, function(start, end, label) ***REMOVED***
    console.log(start.toISOString(), end.toISOString(), label);
***REMOVED***);


***REMOVED***


function init_daterangepicker_reservation() ***REMOVED***

  if( typeof ($.fn.daterangepicker) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_daterangepicker_reservation');

  $('#reservation').daterangepicker(null, function(start, end, label) ***REMOVED***
    console.log(start.toISOString(), end.toISOString(), label);
***REMOVED***);

  $('#reservation-time').daterangepicker(***REMOVED***
    timePicker: true,
    timePickerIncrement: 30,
    locale: ***REMOVED***
      format: 'MM/DD/YYYY h:mm A'
  ***REMOVED***
***REMOVED***);

***REMOVED***

/* SMART WIZARD */

function init_SmartWizard() ***REMOVED***

  if( typeof ($.fn.smartWizard) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_SmartWizard');

  $('#wizard').smartWizard();

  $('#wizard_verticle').smartWizard(***REMOVED***
    transitionEffect: 'slide'
***REMOVED***);

  $('.buttonNext').addClass('btn btn-success');
  $('.buttonPrevious').addClass('btn btn-primary');
  $('.buttonFinish').addClass('btn btn-default');

***REMOVED***;


/* VALIDATOR */

function init_validator () ***REMOVED***

  if( typeof (validator) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_validator');

  // initialize the validator function
  validator.message.date = 'not a real date';

  // validate a field on "blur" event, a 'select' on 'change' event & a '.reuired' classed multifield on 'keyup':
  $('form')
    .on('blur', 'input[required], input.optional, select.required', validator.checkField)
    .on('change', 'select.required', validator.checkField)
    .on('keypress', 'input[required][pattern]', validator.keypress);

  $('.multi.required').on('keyup blur', 'input', function() ***REMOVED***
    validator.checkField.apply($(this).siblings().last()[0]);
***REMOVED***);

  $('form').submit(function(e) ***REMOVED***
    e.preventDefault();
    var submit = true;

    // evaluate the form using generic validaing
    if (!validator.checkAll($(this))) ***REMOVED***
      submit = false;
  ***REMOVED***

    if (submit)
      this.submit();

    return false;
***REMOVED***);

***REMOVED***;

/* PNotify */

function init_PNotify() ***REMOVED***

  if( typeof (PNotify) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_PNotify');

  new PNotify(***REMOVED***
    title: "PNotify",
    type: "info",
    text: "Welcome. Try hovering over me. You can click things behind me, because I'm non-blocking.",
    nonblock: ***REMOVED***
      nonblock: true
  ***REMOVED***,
    addclass: 'dark',
    styling: 'bootstrap3',
    hide: false,
    before_close: function(PNotify) ***REMOVED***
      PNotify.update(***REMOVED***
        title: PNotify.options.title + " - Enjoy your Stay",
        before_close: null
    ***REMOVED***);

      PNotify.queueRemove();

      return false;
  ***REMOVED***
***REMOVED***);

***REMOVED***;


/* CUSTOM NOTIFICATION */

function init_CustomNotification() ***REMOVED***

  console.log('run_customtabs');

  if( typeof (CustomTabs) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_CustomTabs');

  var cnt = 10;

  TabbedNotification = function(options) ***REMOVED***
    var message = "<div id='ntf" + cnt + "' class='text alert-" + options.type + "' style='display:none'><h2><i class='fa fa-bell'></i> " + options.title +
      "</h2><div class='close'><a href='javascript:;' class='notification_close'><i class='fa fa-close'></i></a></div><p>" + options.text + "</p></div>";

    if (!document.getElementById('custom_notifications')) ***REMOVED***
      alert('doesnt exists');
  ***REMOVED*** else ***REMOVED***
      $('#custom_notifications ul.notifications').append("<li><a id='ntlink" + cnt + "' class='alert-" + options.type + "' href='#ntf" + cnt + "'><i class='fa fa-bell animated shake'></i></a></li>");
      $('#custom_notifications #notif-group').append(message);
      cnt++;
      CustomTabs(options);
  ***REMOVED***
***REMOVED***;

  CustomTabs = function(options) ***REMOVED***
    $('.tabbed_notifications > div').hide();
    $('.tabbed_notifications > div:first-of-type').show();
    $('#custom_notifications').removeClass('dsp_none');
    $('.notifications a').click(function(e) ***REMOVED***
      e.preventDefault();
      var $this = $(this),
        tabbed_notifications = '#' + $this.parents('.notifications').data('tabbed_notifications'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
      others.removeClass('active');
      $this.addClass('active');
      $(tabbed_notifications).children('div').hide();
      $(target).show();
  ***REMOVED***);
***REMOVED***;

  CustomTabs();

  var tabid = idname = '';

  $(document).on('click', '.notification_close', function(e) ***REMOVED***
    idname = $(this).parent().parent().attr("id");
    tabid = idname.substr(-2);
    $('#ntf' + tabid).remove();
    $('#ntlink' + tabid).parent().remove();
    $('.notifications a').first().addClass('active');
    $('#notif-group div').first().css('display', 'block');
***REMOVED***);

***REMOVED***;

/* EASYPIECHART */

function init_EasyPieChart() ***REMOVED***

  if( typeof ($.fn.easyPieChart) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_EasyPieChart');

  $('.chart').easyPieChart(***REMOVED***
    easing: 'easeOutElastic',
    delay: 3000,
    barColor: '#26B99A',
    trackColor: '#fff',
    scaleColor: false,
    lineWidth: 20,
    trackWidth: 16,
    lineCap: 'butt',
    onStep: function(from, to, percent) ***REMOVED***
      $(this.el).find('.percent').text(Math.round(percent));
  ***REMOVED***
***REMOVED***);
  var chart = window.chart = $('.chart').data('easyPieChart');
  $('.js_update').on('click', function() ***REMOVED***
    chart.update(Math.random() * 200 - 100);
***REMOVED***);

  //hover and retain popover when on popover content
  var originalLeave = $.fn.popover.Constructor.prototype.leave;
  $.fn.popover.Constructor.prototype.leave = function(obj) ***REMOVED***
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type);
    var container, timeout;

    originalLeave.call(this, obj);

    if (obj.currentTarget) ***REMOVED***
      container = $(obj.currentTarget).siblings('.popover');
      timeout = self.timeout;
      container.one('mouseenter', function() ***REMOVED***
        //We entered the actual popover – call off the dogs
        clearTimeout(timeout);
        //Let's monitor popover content instead
        container.one('mouseleave', function() ***REMOVED***
          $.fn.popover.Constructor.prototype.leave.call(self, self);
      ***REMOVED***);
    ***REMOVED***);
  ***REMOVED***
***REMOVED***;

  $('body').popover(***REMOVED***
    selector: '[data-popover]',
    trigger: 'click hover',
    delay: ***REMOVED***
      show: 50,
      hide: 400
  ***REMOVED***
***REMOVED***);

***REMOVED***;


function init_charts() ***REMOVED***

  console.log('run_charts  typeof [' + typeof (Chart) + ']');

  if( typeof (Chart) === 'undefined')***REMOVED*** return; ***REMOVED***

  console.log('init_charts');


  Chart.defaults.global.legend = ***REMOVED***
    enabled: false
***REMOVED***;



  if ($('#canvas_line').length )***REMOVED***

    var canvas_line_00 = new Chart(document.getElementById("canvas_line"), ***REMOVED***
      type: 'line',
      data: ***REMOVED***
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [***REMOVED***
          label: "My First dataset",
          backgroundColor: "rgba(38, 185, 154, 0.31)",
          borderColor: "rgba(38, 185, 154, 0.7)",
          pointBorderColor: "rgba(38, 185, 154, 0.7)",
          pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointBorderWidth: 1,
          data: [31, 74, 6, 39, 20, 85, 7]
      ***REMOVED***, ***REMOVED***
          label: "My Second dataset",
          backgroundColor: "rgba(3, 88, 106, 0.3)",
          borderColor: "rgba(3, 88, 106, 0.70)",
          pointBorderColor: "rgba(3, 88, 106, 0.70)",
          pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(151,187,205,1)",
          pointBorderWidth: 1,
          data: [82, 23, 66, 9, 99, 4, 2]
      ***REMOVED***]
    ***REMOVED***,
  ***REMOVED***);

***REMOVED***


  if ($('#canvas_line1').length )***REMOVED***

    var canvas_line_01 = new Chart(document.getElementById("canvas_line1"), ***REMOVED***
      type: 'line',
      data: ***REMOVED***
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [***REMOVED***
          label: "My First dataset",
          backgroundColor: "rgba(38, 185, 154, 0.31)",
          borderColor: "rgba(38, 185, 154, 0.7)",
          pointBorderColor: "rgba(38, 185, 154, 0.7)",
          pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointBorderWidth: 1,
          data: [31, 74, 6, 39, 20, 85, 7]
      ***REMOVED***, ***REMOVED***
          label: "My Second dataset",
          backgroundColor: "rgba(3, 88, 106, 0.3)",
          borderColor: "rgba(3, 88, 106, 0.70)",
          pointBorderColor: "rgba(3, 88, 106, 0.70)",
          pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(151,187,205,1)",
          pointBorderWidth: 1,
          data: [82, 23, 66, 9, 99, 4, 2]
      ***REMOVED***]
    ***REMOVED***,
  ***REMOVED***);

***REMOVED***


  if ($('#canvas_line2').length )***REMOVED***

    var canvas_line_02 = new Chart(document.getElementById("canvas_line2"), ***REMOVED***
      type: 'line',
      data: ***REMOVED***
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [***REMOVED***
          label: "My First dataset",
          backgroundColor: "rgba(38, 185, 154, 0.31)",
          borderColor: "rgba(38, 185, 154, 0.7)",
          pointBorderColor: "rgba(38, 185, 154, 0.7)",
          pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointBorderWidth: 1,
          data: [31, 74, 6, 39, 20, 85, 7]
      ***REMOVED***, ***REMOVED***
          label: "My Second dataset",
          backgroundColor: "rgba(3, 88, 106, 0.3)",
          borderColor: "rgba(3, 88, 106, 0.70)",
          pointBorderColor: "rgba(3, 88, 106, 0.70)",
          pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(151,187,205,1)",
          pointBorderWidth: 1,
          data: [82, 23, 66, 9, 99, 4, 2]
      ***REMOVED***]
    ***REMOVED***,
  ***REMOVED***);

***REMOVED***


  if ($('#canvas_line3').length )***REMOVED***

    var canvas_line_03 = new Chart(document.getElementById("canvas_line3"), ***REMOVED***
      type: 'line',
      data: ***REMOVED***
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [***REMOVED***
          label: "My First dataset",
          backgroundColor: "rgba(38, 185, 154, 0.31)",
          borderColor: "rgba(38, 185, 154, 0.7)",
          pointBorderColor: "rgba(38, 185, 154, 0.7)",
          pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointBorderWidth: 1,
          data: [31, 74, 6, 39, 20, 85, 7]
      ***REMOVED***, ***REMOVED***
          label: "My Second dataset",
          backgroundColor: "rgba(3, 88, 106, 0.3)",
          borderColor: "rgba(3, 88, 106, 0.70)",
          pointBorderColor: "rgba(3, 88, 106, 0.70)",
          pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(151,187,205,1)",
          pointBorderWidth: 1,
          data: [82, 23, 66, 9, 99, 4, 2]
      ***REMOVED***]
    ***REMOVED***,
  ***REMOVED***);

***REMOVED***


  if ($('#canvas_line4').length )***REMOVED***

    var canvas_line_04 = new Chart(document.getElementById("canvas_line4"), ***REMOVED***
      type: 'line',
      data: ***REMOVED***
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [***REMOVED***
          label: "My First dataset",
          backgroundColor: "rgba(38, 185, 154, 0.31)",
          borderColor: "rgba(38, 185, 154, 0.7)",
          pointBorderColor: "rgba(38, 185, 154, 0.7)",
          pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointBorderWidth: 1,
          data: [31, 74, 6, 39, 20, 85, 7]
      ***REMOVED***, ***REMOVED***
          label: "My Second dataset",
          backgroundColor: "rgba(3, 88, 106, 0.3)",
          borderColor: "rgba(3, 88, 106, 0.70)",
          pointBorderColor: "rgba(3, 88, 106, 0.70)",
          pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(151,187,205,1)",
          pointBorderWidth: 1,
          data: [82, 23, 66, 9, 99, 4, 2]
      ***REMOVED***]
    ***REMOVED***,
  ***REMOVED***);

***REMOVED***


  // Line chart

  if ($('#lineChart').length )***REMOVED***

    var ctx = document.getElementById("lineChart");
    var lineChart = new Chart(ctx, ***REMOVED***
      type: 'line',
      data: ***REMOVED***
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [***REMOVED***
          label: "My First dataset",
          backgroundColor: "rgba(38, 185, 154, 0.31)",
          borderColor: "rgba(38, 185, 154, 0.7)",
          pointBorderColor: "rgba(38, 185, 154, 0.7)",
          pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointBorderWidth: 1,
          data: [31, 74, 6, 39, 20, 85, 7]
      ***REMOVED***, ***REMOVED***
          label: "My Second dataset",
          backgroundColor: "rgba(3, 88, 106, 0.3)",
          borderColor: "rgba(3, 88, 106, 0.70)",
          pointBorderColor: "rgba(3, 88, 106, 0.70)",
          pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(151,187,205,1)",
          pointBorderWidth: 1,
          data: [82, 23, 66, 9, 99, 4, 2]
      ***REMOVED***]
    ***REMOVED***,
  ***REMOVED***);

***REMOVED***

  // Bar chart

  if ($('#mybarChart').length )***REMOVED***

    var ctx = document.getElementById("mybarChart");
    var mybarChart = new Chart(ctx, ***REMOVED***
      type: 'bar',
      data: ***REMOVED***
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [***REMOVED***
          label: '# of Votes',
          backgroundColor: "#26B99A",
          data: [51, 30, 40, 28, 92, 50, 45]
      ***REMOVED***, ***REMOVED***
          label: '# of Votes',
          backgroundColor: "#03586A",
          data: [41, 56, 25, 48, 72, 34, 12]
      ***REMOVED***]
    ***REMOVED***,

      options: ***REMOVED***
        scales: ***REMOVED***
          yAxes: [***REMOVED***
            ticks: ***REMOVED***
              beginAtZero: true
          ***REMOVED***
        ***REMOVED***]
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***);

***REMOVED***


  // Doughnut chart

  if ($('#canvasDoughnut').length )***REMOVED***

    var ctx = document.getElementById("canvasDoughnut");
    var data = ***REMOVED***
      labels: [
        "Dark Grey",
        "Purple Color",
        "Gray Color",
        "Green Color",
        "Blue Color"
      ],
      datasets: [***REMOVED***
        data: [120, 50, 140, 180, 100],
        backgroundColor: [
          "#455C73",
          "#9B59B6",
          "#BDC3C7",
          "#26B99A",
          "#3498DB"
        ],
        hoverBackgroundColor: [
          "#34495E",
          "#B370CF",
          "#CFD4D8",
          "#36CAAB",
          "#49A9EA"
        ]

    ***REMOVED***]
  ***REMOVED***;

    var canvasDoughnut = new Chart(ctx, ***REMOVED***
      type: 'doughnut',
      tooltipFillColor: "rgba(51, 51, 51, 0.55)",
      data: data
  ***REMOVED***);

***REMOVED***

  // Radar chart

  if ($('#canvasRadar').length )***REMOVED***

    var ctx = document.getElementById("canvasRadar");
    var data = ***REMOVED***
      labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
      datasets: [***REMOVED***
        label: "My First dataset",
        backgroundColor: "rgba(3, 88, 106, 0.2)",
        borderColor: "rgba(3, 88, 106, 0.80)",
        pointBorderColor: "rgba(3, 88, 106, 0.80)",
        pointBackgroundColor: "rgba(3, 88, 106, 0.80)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        data: [65, 59, 90, 81, 56, 55, 40]
    ***REMOVED***, ***REMOVED***
        label: "My Second dataset",
        backgroundColor: "rgba(38, 185, 154, 0.2)",
        borderColor: "rgba(38, 185, 154, 0.85)",
        pointColor: "rgba(38, 185, 154, 0.85)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, 40, 19, 96, 27, 100]
    ***REMOVED***]
  ***REMOVED***;

    var canvasRadar = new Chart(ctx, ***REMOVED***
      type: 'radar',
      data: data,
  ***REMOVED***);

***REMOVED***


  // Pie chart
  if ($('#pieChart').length )***REMOVED***

    var ctx = document.getElementById("pieChart");
    var data = ***REMOVED***
      datasets: [***REMOVED***
        data: [120, 50, 140, 180, 100],
        backgroundColor: [
          "#455C73",
          "#9B59B6",
          "#BDC3C7",
          "#26B99A",
          "#3498DB"
        ],
        label: 'My dataset' // for legend
    ***REMOVED***],
      labels: [
        "Dark Gray",
        "Purple",
        "Gray",
        "Green",
        "Blue"
      ]
  ***REMOVED***;

    var pieChart = new Chart(ctx, ***REMOVED***
      data: data,
      type: 'pie',
      otpions: ***REMOVED***
        legend: false
    ***REMOVED***
  ***REMOVED***);

***REMOVED***


  // PolarArea chart

  if ($('#polarArea').length )***REMOVED***

    var ctx = document.getElementById("polarArea");
    var data = ***REMOVED***
      datasets: [***REMOVED***
        data: [120, 50, 140, 180, 100],
        backgroundColor: [
          "#455C73",
          "#9B59B6",
          "#BDC3C7",
          "#26B99A",
          "#3498DB"
        ],
        label: 'My dataset'
    ***REMOVED***],
      labels: [
        "Dark Gray",
        "Purple",
        "Gray",
        "Green",
        "Blue"
      ]
  ***REMOVED***;

    var polarArea = new Chart(ctx, ***REMOVED***
      data: data,
      type: 'polarArea',
      options: ***REMOVED***
        scale: ***REMOVED***
          ticks: ***REMOVED***
            beginAtZero: true
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***);

***REMOVED***
***REMOVED***

/* COMPOSE */

function init_compose() ***REMOVED***

  if( typeof ($.fn.slideToggle) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_compose');

  $('#compose, .compose-close').click(function()***REMOVED***
    $('.compose').slideToggle();
***REMOVED***);

***REMOVED***;

/* CALENDAR */

function  init_calendar() ***REMOVED***

  if( typeof ($.fn.fullCalendar) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_calendar');

  var date = new Date(),
    d = date.getDate(),
    m = date.getMonth(),
    y = date.getFullYear(),
    started,
    categoryClass;

  var calendar = $('#calendar').fullCalendar(***REMOVED***
    header: ***REMOVED***
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,listMonth'
  ***REMOVED***,
    selectable: true,
    selectHelper: true,
    select: function(start, end, allDay) ***REMOVED***
      $('#fc_create').click();

      started = start;
      ended = end;

      $(".antosubmit").on("click", function() ***REMOVED***
        var title = $("#title").val();
        if (end) ***REMOVED***
          ended = end;
      ***REMOVED***

        categoryClass = $("#event_type").val();

        if (title) ***REMOVED***
          calendar.fullCalendar('renderEvent', ***REMOVED***
              title: title,
              start: started,
              end: end,
              allDay: allDay
          ***REMOVED***,
            true // make the event "stick"
          );
      ***REMOVED***

        $('#title').val('');

        calendar.fullCalendar('unselect');

        $('.antoclose').click();

        return false;
    ***REMOVED***);
  ***REMOVED***,
    eventClick: function(calEvent, jsEvent, view) ***REMOVED***
      $('#fc_edit').click();
      $('#title2').val(calEvent.title);

      categoryClass = $("#event_type").val();

      $(".antosubmit2").on("click", function() ***REMOVED***
        calEvent.title = $("#title2").val();

        calendar.fullCalendar('updateEvent', calEvent);
        $('.antoclose2').click();
    ***REMOVED***);

      calendar.fullCalendar('unselect');
  ***REMOVED***,
    editable: true,
    events: [***REMOVED***
      title: 'All Day Event',
      start: new Date(y, m, 1)
  ***REMOVED***, ***REMOVED***
      title: 'Long Event',
      start: new Date(y, m, d - 5),
      end: new Date(y, m, d - 2)
  ***REMOVED***, ***REMOVED***
      title: 'Meeting',
      start: new Date(y, m, d, 10, 30),
      allDay: false
  ***REMOVED***, ***REMOVED***
      title: 'Lunch',
      start: new Date(y, m, d + 14, 12, 0),
      end: new Date(y, m, d, 14, 0),
      allDay: false
  ***REMOVED***, ***REMOVED***
      title: 'Birthday Party',
      start: new Date(y, m, d + 1, 19, 0),
      end: new Date(y, m, d + 1, 22, 30),
      allDay: false
  ***REMOVED***, ***REMOVED***
      title: 'Click for Google',
      start: new Date(y, m, 28),
      end: new Date(y, m, 29),
      url: 'http://google.com/'
  ***REMOVED***]
***REMOVED***);

***REMOVED***;

/* DATA TABLES */

function init_DataTables() ***REMOVED***

  console.log('run_datatables');

  if( typeof ($.fn.DataTable) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_DataTables');

  var handleDataTableButtons = function() ***REMOVED***
    if ($("#datatable-buttons").length) ***REMOVED***
      $("#datatable-buttons").DataTable(***REMOVED***
        dom: "Bfrtip",
        buttons: [
          ***REMOVED***
            extend: "copy",
            className: "btn-sm"
        ***REMOVED***,
          ***REMOVED***
            extend: "csv",
            className: "btn-sm"
        ***REMOVED***,
          ***REMOVED***
            extend: "excel",
            className: "btn-sm"
        ***REMOVED***,
          ***REMOVED***
            extend: "pdfHtml5",
            className: "btn-sm"
        ***REMOVED***,
          ***REMOVED***
            extend: "print",
            className: "btn-sm"
        ***REMOVED***,
        ],
        responsive: true
    ***REMOVED***);
  ***REMOVED***
***REMOVED***;

  TableManageButtons = function() ***REMOVED***
    "use strict";
    return ***REMOVED***
      init: function() ***REMOVED***
        handleDataTableButtons();
    ***REMOVED***
  ***REMOVED***;
***REMOVED***();

  $('#datatable').dataTable();

  $('#datatable-keytable').DataTable(***REMOVED***
    keys: true
***REMOVED***);

  $('#datatable-responsive').DataTable();

  $('#datatable-scroller').DataTable(***REMOVED***
    ajax: "js/datatables/json/scroller-demo.json",
    deferRender: true,
    scrollY: 380,
    scrollCollapse: true,
    scroller: true
***REMOVED***);

  $('#datatable-fixed-header').DataTable(***REMOVED***
    fixedHeader: true
***REMOVED***);

  var $datatable = $('#datatable-checkbox');

  $datatable.dataTable(***REMOVED***
    'order': [[ 1, 'asc' ]],
    'columnDefs': [
      ***REMOVED*** orderable: false, targets: [0] ***REMOVED***
    ]
***REMOVED***);
  $datatable.on('draw.dt', function() ***REMOVED***
    $('checkbox input').iCheck(***REMOVED***
      checkboxClass: 'icheckbox_flat-green'
  ***REMOVED***);
***REMOVED***);

  TableManageButtons.init();

***REMOVED***;

/* CHART - MORRIS  */

function init_morris_charts() ***REMOVED***

  if( typeof (Morris) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_morris_charts');

  if ($('#graph_bar').length)***REMOVED***

    Morris.Bar(***REMOVED***
      element: 'graph_bar',
      data: [
        ***REMOVED***device: 'iPhone 4', geekbench: 380***REMOVED***,
        ***REMOVED***device: 'iPhone 4S', geekbench: 655***REMOVED***,
        ***REMOVED***device: 'iPhone 3GS', geekbench: 275***REMOVED***,
        ***REMOVED***device: 'iPhone 5', geekbench: 1571***REMOVED***,
        ***REMOVED***device: 'iPhone 5S', geekbench: 655***REMOVED***,
        ***REMOVED***device: 'iPhone 6', geekbench: 2154***REMOVED***,
        ***REMOVED***device: 'iPhone 6 Plus', geekbench: 1144***REMOVED***,
        ***REMOVED***device: 'iPhone 6S', geekbench: 2371***REMOVED***,
        ***REMOVED***device: 'iPhone 6S Plus', geekbench: 1471***REMOVED***,
        ***REMOVED***device: 'Other', geekbench: 1371***REMOVED***
      ],
      xkey: 'device',
      ykeys: ['geekbench'],
      labels: ['Geekbench'],
      barRatio: 0.4,
      barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
      xLabelAngle: 35,
      hideHover: 'auto',
      resize: true
  ***REMOVED***);

***REMOVED***

  if ($('#graph_bar_group').length )***REMOVED***

    Morris.Bar(***REMOVED***
      element: 'graph_bar_group',
      data: [
        ***REMOVED***"period": "2016-10-01", "licensed": 807, "sorned": 660***REMOVED***,
        ***REMOVED***"period": "2016-09-30", "licensed": 1251, "sorned": 729***REMOVED***,
        ***REMOVED***"period": "2016-09-29", "licensed": 1769, "sorned": 1018***REMOVED***,
        ***REMOVED***"period": "2016-09-20", "licensed": 2246, "sorned": 1461***REMOVED***,
        ***REMOVED***"period": "2016-09-19", "licensed": 2657, "sorned": 1967***REMOVED***,
        ***REMOVED***"period": "2016-09-18", "licensed": 3148, "sorned": 2627***REMOVED***,
        ***REMOVED***"period": "2016-09-17", "licensed": 3471, "sorned": 3740***REMOVED***,
        ***REMOVED***"period": "2016-09-16", "licensed": 2871, "sorned": 2216***REMOVED***,
        ***REMOVED***"period": "2016-09-15", "licensed": 2401, "sorned": 1656***REMOVED***,
        ***REMOVED***"period": "2016-09-10", "licensed": 2115, "sorned": 1022***REMOVED***
      ],
      xkey: 'period',
      barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
      ykeys: ['licensed', 'sorned'],
      labels: ['Licensed', 'SORN'],
      hideHover: 'auto',
      xLabelAngle: 60,
      resize: true
  ***REMOVED***);

***REMOVED***

  if ($('#graphx').length )***REMOVED***

    Morris.Bar(***REMOVED***
      element: 'graphx',
      data: [
        ***REMOVED***x: '2015 Q1', y: 2, z: 3, a: 4***REMOVED***,
        ***REMOVED***x: '2015 Q2', y: 3, z: 5, a: 6***REMOVED***,
        ***REMOVED***x: '2015 Q3', y: 4, z: 3, a: 2***REMOVED***,
        ***REMOVED***x: '2015 Q4', y: 2, z: 4, a: 5***REMOVED***
      ],
      xkey: 'x',
      ykeys: ['y', 'z', 'a'],
      barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
      hideHover: 'auto',
      labels: ['Y', 'Z', 'A'],
      resize: true
  ***REMOVED***).on('click', function (i, row) ***REMOVED***
      console.log(i, row);
  ***REMOVED***);

***REMOVED***

  if ($('#graph_area').length )***REMOVED***

    Morris.Area(***REMOVED***
      element: 'graph_area',
      data: [
        ***REMOVED***period: '2014 Q1', iphone: 2666, ipad: null, itouch: 2647***REMOVED***,
        ***REMOVED***period: '2014 Q2', iphone: 2778, ipad: 2294, itouch: 2441***REMOVED***,
        ***REMOVED***period: '2014 Q3', iphone: 4912, ipad: 1969, itouch: 2501***REMOVED***,
        ***REMOVED***period: '2014 Q4', iphone: 3767, ipad: 3597, itouch: 5689***REMOVED***,
        ***REMOVED***period: '2015 Q1', iphone: 6810, ipad: 1914, itouch: 2293***REMOVED***,
        ***REMOVED***period: '2015 Q2', iphone: 5670, ipad: 4293, itouch: 1881***REMOVED***,
        ***REMOVED***period: '2015 Q3', iphone: 4820, ipad: 3795, itouch: 1588***REMOVED***,
        ***REMOVED***period: '2015 Q4', iphone: 15073, ipad: 5967, itouch: 5175***REMOVED***,
        ***REMOVED***period: '2016 Q1', iphone: 10687, ipad: 4460, itouch: 2028***REMOVED***,
        ***REMOVED***period: '2016 Q2', iphone: 8432, ipad: 5713, itouch: 1791***REMOVED***
      ],
      xkey: 'period',
      ykeys: ['iphone', 'ipad', 'itouch'],
      lineColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
      labels: ['iPhone', 'iPad', 'iPod Touch'],
      pointSize: 2,
      hideHover: 'auto',
      resize: true
  ***REMOVED***);

***REMOVED***

  if ($('#graph_donut').length )***REMOVED***

    Morris.Donut(***REMOVED***
      element: 'graph_donut',
      data: [
        ***REMOVED***label: 'Jam', value: 25***REMOVED***,
        ***REMOVED***label: 'Frosted', value: 40***REMOVED***,
        ***REMOVED***label: 'Custard', value: 25***REMOVED***,
        ***REMOVED***label: 'Sugar', value: 10***REMOVED***
      ],
      colors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
      formatter: function (y) ***REMOVED***
        return y + "%";
    ***REMOVED***,
      resize: true
  ***REMOVED***);

***REMOVED***

  if ($('#graph_line').length )***REMOVED***

    Morris.Line(***REMOVED***
      element: 'graph_line',
      xkey: 'year',
      ykeys: ['value'],
      labels: ['Value'],
      hideHover: 'auto',
      lineColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
      data: [
        ***REMOVED***year: '2012', value: 20***REMOVED***,
        ***REMOVED***year: '2013', value: 10***REMOVED***,
        ***REMOVED***year: '2014', value: 5***REMOVED***,
        ***REMOVED***year: '2015', value: 5***REMOVED***,
        ***REMOVED***year: '2016', value: 20***REMOVED***
      ],
      resize: true
  ***REMOVED***);

    $MENU_TOGGLE.on('click', function() ***REMOVED***
      $(window).resize();
  ***REMOVED***);

***REMOVED***

***REMOVED***;



/* ECHRTS */


function init_echarts() ***REMOVED***

  if( typeof (echarts) === 'undefined')***REMOVED*** return; ***REMOVED***
  console.log('init_echarts');


  var theme = ***REMOVED***
    color: [
      '#26B99A', '#34495E', '#BDC3C7', '#3498DB',
      '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
    ],

    title: ***REMOVED***
      itemGap: 8,
      textStyle: ***REMOVED***
        fontWeight: 'normal',
        color: '#408829'
    ***REMOVED***
  ***REMOVED***,

    dataRange: ***REMOVED***
      color: ['#1f610a', '#97b58d']
  ***REMOVED***,

    toolbox: ***REMOVED***
      color: ['#408829', '#408829', '#408829', '#408829']
  ***REMOVED***,

    tooltip: ***REMOVED***
      backgroundColor: 'rgba(0,0,0,0.5)',
      axisPointer: ***REMOVED***
        type: 'line',
        lineStyle: ***REMOVED***
          color: '#408829',
          type: 'dashed'
      ***REMOVED***,
        crossStyle: ***REMOVED***
          color: '#408829'
      ***REMOVED***,
        shadowStyle: ***REMOVED***
          color: 'rgba(200,200,200,0.3)'
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***,

    dataZoom: ***REMOVED***
      dataBackgroundColor: '#eee',
      fillerColor: 'rgba(64,136,41,0.2)',
      handleColor: '#408829'
  ***REMOVED***,
    grid: ***REMOVED***
      borderWidth: 0
  ***REMOVED***,

    categoryAxis: ***REMOVED***
      axisLine: ***REMOVED***
        lineStyle: ***REMOVED***
          color: '#408829'
      ***REMOVED***
    ***REMOVED***,
      splitLine: ***REMOVED***
        lineStyle: ***REMOVED***
          color: ['#eee']
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***,

    valueAxis: ***REMOVED***
      axisLine: ***REMOVED***
        lineStyle: ***REMOVED***
          color: '#408829'
      ***REMOVED***
    ***REMOVED***,
      splitArea: ***REMOVED***
        show: true,
        areaStyle: ***REMOVED***
          color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
      ***REMOVED***
    ***REMOVED***,
      splitLine: ***REMOVED***
        lineStyle: ***REMOVED***
          color: ['#eee']
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***,
    timeline: ***REMOVED***
      lineStyle: ***REMOVED***
        color: '#408829'
    ***REMOVED***,
      controlStyle: ***REMOVED***
        normal: ***REMOVED***color: '#408829'***REMOVED***,
        emphasis: ***REMOVED***color: '#408829'***REMOVED***
    ***REMOVED***
  ***REMOVED***,

    k: ***REMOVED***
      itemStyle: ***REMOVED***
        normal: ***REMOVED***
          color: '#68a54a',
          color0: '#a9cba2',
          lineStyle: ***REMOVED***
            width: 1,
            color: '#408829',
            color0: '#86b379'
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***,
    map: ***REMOVED***
      itemStyle: ***REMOVED***
        normal: ***REMOVED***
          areaStyle: ***REMOVED***
            color: '#ddd'
        ***REMOVED***,
          label: ***REMOVED***
            textStyle: ***REMOVED***
              color: '#c12e34'
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***,
        emphasis: ***REMOVED***
          areaStyle: ***REMOVED***
            color: '#99d2dd'
        ***REMOVED***,
          label: ***REMOVED***
            textStyle: ***REMOVED***
              color: '#c12e34'
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***,
    force: ***REMOVED***
      itemStyle: ***REMOVED***
        normal: ***REMOVED***
          linkStyle: ***REMOVED***
            strokeColor: '#408829'
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***,
    chord: ***REMOVED***
      padding: 4,
      itemStyle: ***REMOVED***
        normal: ***REMOVED***
          lineStyle: ***REMOVED***
            width: 1,
            color: 'rgba(128, 128, 128, 0.5)'
        ***REMOVED***,
          chordStyle: ***REMOVED***
            lineStyle: ***REMOVED***
              width: 1,
              color: 'rgba(128, 128, 128, 0.5)'
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***,
        emphasis: ***REMOVED***
          lineStyle: ***REMOVED***
            width: 1,
            color: 'rgba(128, 128, 128, 0.5)'
        ***REMOVED***,
          chordStyle: ***REMOVED***
            lineStyle: ***REMOVED***
              width: 1,
              color: 'rgba(128, 128, 128, 0.5)'
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***,
    gauge: ***REMOVED***
      startAngle: 225,
      endAngle: -45,
      axisLine: ***REMOVED***
        show: true,
        lineStyle: ***REMOVED***
          color: [[0.2, '#86b379'], [0.8, '#68a54a'], [1, '#408829']],
          width: 8
      ***REMOVED***
    ***REMOVED***,
      axisTick: ***REMOVED***
        splitNumber: 10,
        length: 12,
        lineStyle: ***REMOVED***
          color: 'auto'
      ***REMOVED***
    ***REMOVED***,
      axisLabel: ***REMOVED***
        textStyle: ***REMOVED***
          color: 'auto'
      ***REMOVED***
    ***REMOVED***,
      splitLine: ***REMOVED***
        length: 18,
        lineStyle: ***REMOVED***
          color: 'auto'
      ***REMOVED***
    ***REMOVED***,
      pointer: ***REMOVED***
        length: '90%',
        color: 'auto'
    ***REMOVED***,
      title: ***REMOVED***
        textStyle: ***REMOVED***
          color: '#333'
      ***REMOVED***
    ***REMOVED***,
      detail: ***REMOVED***
        textStyle: ***REMOVED***
          color: 'auto'
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***,
    textStyle: ***REMOVED***
      fontFamily: 'Arial, Verdana, sans-serif'
  ***REMOVED***
***REMOVED***;


  //echart Bar

  if ($('#mainb').length )***REMOVED***

    var echartBar = echarts.init(document.getElementById('mainb'), theme);

    echartBar.setOption(***REMOVED***
      title: ***REMOVED***
        text: 'Graph title',
        subtext: 'Graph Sub-text'
    ***REMOVED***,
      tooltip: ***REMOVED***
        trigger: 'axis'
    ***REMOVED***,
      legend: ***REMOVED***
        data: ['sales', 'purchases']
    ***REMOVED***,
      toolbox: ***REMOVED***
        show: false
    ***REMOVED***,
      calculable: false,
      xAxis: [***REMOVED***
        type: 'category',
        data: ['1?', '2?', '3?', '4?', '5?', '6?', '7?', '8?', '9?', '10?', '11?', '12?']
    ***REMOVED***],
      yAxis: [***REMOVED***
        type: 'value'
    ***REMOVED***],
      series: [***REMOVED***
        name: 'sales',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        markPoint: ***REMOVED***
          data: [***REMOVED***
            type: 'max',
            name: '???'
        ***REMOVED***, ***REMOVED***
            type: 'min',
            name: '???'
        ***REMOVED***]
      ***REMOVED***,
        markLine: ***REMOVED***
          data: [***REMOVED***
            type: 'average',
            name: '???'
        ***REMOVED***]
      ***REMOVED***
    ***REMOVED***, ***REMOVED***
        name: 'purchases',
        type: 'bar',
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        markPoint: ***REMOVED***
          data: [***REMOVED***
            name: 'sales',
            value: 182.2,
            xAxis: 7,
            yAxis: 183,
        ***REMOVED***, ***REMOVED***
            name: 'purchases',
            value: 2.3,
            xAxis: 11,
            yAxis: 3
        ***REMOVED***]
      ***REMOVED***,
        markLine: ***REMOVED***
          data: [***REMOVED***
            type: 'average',
            name: '???'
        ***REMOVED***]
      ***REMOVED***
    ***REMOVED***]
  ***REMOVED***);

***REMOVED***




  //echart Radar

  if ($('#echart_sonar').length )***REMOVED***

    var echartRadar = echarts.init(document.getElementById('echart_sonar'), theme);

    echartRadar.setOption(***REMOVED***
      title: ***REMOVED***
        text: 'Budget vs spending',
        subtext: 'Subtitle'
    ***REMOVED***,
      tooltip: ***REMOVED***
        trigger: 'item'
    ***REMOVED***,
      legend: ***REMOVED***
        orient: 'vertical',
        x: 'right',
        y: 'bottom',
        data: ['Allocated Budget', 'Actual Spending']
    ***REMOVED***,
      toolbox: ***REMOVED***
        show: true,
        feature: ***REMOVED***
          restore: ***REMOVED***
            show: true,
            title: "Restore"
        ***REMOVED***,
          saveAsImage: ***REMOVED***
            show: true,
            title: "Save Image"
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
      polar: [***REMOVED***
        indicator: [***REMOVED***
          text: 'Sales',
          max: 6000
      ***REMOVED***, ***REMOVED***
          text: 'Administration',
          max: 16000
      ***REMOVED***, ***REMOVED***
          text: 'Information Techology',
          max: 30000
      ***REMOVED***, ***REMOVED***
          text: 'Customer Support',
          max: 38000
      ***REMOVED***, ***REMOVED***
          text: 'Development',
          max: 52000
      ***REMOVED***, ***REMOVED***
          text: 'Marketing',
          max: 25000
      ***REMOVED***]
    ***REMOVED***],
      calculable: true,
      series: [***REMOVED***
        name: 'Budget vs spending',
        type: 'radar',
        data: [***REMOVED***
          value: [4300, 10000, 28000, 35000, 50000, 19000],
          name: 'Allocated Budget'
      ***REMOVED***, ***REMOVED***
          value: [5000, 14000, 28000, 31000, 42000, 21000],
          name: 'Actual Spending'
      ***REMOVED***]
    ***REMOVED***]
  ***REMOVED***);

***REMOVED***

  //echart Funnel

  if ($('#echart_pyramid').length )***REMOVED***

    var echartFunnel = echarts.init(document.getElementById('echart_pyramid'), theme);

    echartFunnel.setOption(***REMOVED***
      title: ***REMOVED***
        text: 'Echart Pyramid Graph',
        subtext: 'Subtitle'
    ***REMOVED***,
      tooltip: ***REMOVED***
        trigger: 'item',
        formatter: "***REMOVED***a***REMOVED*** <br/>***REMOVED***b***REMOVED*** : ***REMOVED***c***REMOVED***%"
    ***REMOVED***,
      toolbox: ***REMOVED***
        show: true,
        feature: ***REMOVED***
          restore: ***REMOVED***
            show: true,
            title: "Restore"
        ***REMOVED***,
          saveAsImage: ***REMOVED***
            show: true,
            title: "Save Image"
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
      legend: ***REMOVED***
        data: ['Something #1', 'Something #2', 'Something #3', 'Something #4', 'Something #5'],
        orient: 'vertical',
        x: 'left',
        y: 'bottom'
    ***REMOVED***,
      calculable: true,
      series: [***REMOVED***
        name: '漏斗图',
        type: 'funnel',
        width: '40%',
        data: [***REMOVED***
          value: 60,
          name: 'Something #1'
      ***REMOVED***, ***REMOVED***
          value: 40,
          name: 'Something #2'
      ***REMOVED***, ***REMOVED***
          value: 20,
          name: 'Something #3'
      ***REMOVED***, ***REMOVED***
          value: 80,
          name: 'Something #4'
      ***REMOVED***, ***REMOVED***
          value: 100,
          name: 'Something #5'
      ***REMOVED***]
    ***REMOVED***]
  ***REMOVED***);

***REMOVED***

  //echart Gauge

  if ($('#echart_gauge').length )***REMOVED***

    var echartGauge = echarts.init(document.getElementById('echart_gauge'), theme);

    echartGauge.setOption(***REMOVED***
      tooltip: ***REMOVED***
        formatter: "***REMOVED***a***REMOVED*** <br/>***REMOVED***b***REMOVED*** : ***REMOVED***c***REMOVED***%"
    ***REMOVED***,
      toolbox: ***REMOVED***
        show: true,
        feature: ***REMOVED***
          restore: ***REMOVED***
            show: true,
            title: "Restore"
        ***REMOVED***,
          saveAsImage: ***REMOVED***
            show: true,
            title: "Save Image"
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
      series: [***REMOVED***
        name: 'Performance',
        type: 'gauge',
        center: ['50%', '50%'],
        startAngle: 140,
        endAngle: -140,
        min: 0,
        max: 100,
        precision: 0,
        splitNumber: 10,
        axisLine: ***REMOVED***
          show: true,
          lineStyle: ***REMOVED***
            color: [
              [0.2, 'lightgreen'],
              [0.4, 'orange'],
              [0.8, 'skyblue'],
              [1, '#ff4500']
            ],
            width: 30
        ***REMOVED***
      ***REMOVED***,
        axisTick: ***REMOVED***
          show: true,
          splitNumber: 5,
          length: 8,
          lineStyle: ***REMOVED***
            color: '#eee',
            width: 1,
            type: 'solid'
        ***REMOVED***
      ***REMOVED***,
        axisLabel: ***REMOVED***
          show: true,
          formatter: function(v) ***REMOVED***
            switch (v + '') ***REMOVED***
              case '10':
                return 'a';
              case '30':
                return 'b';
              case '60':
                return 'c';
              case '90':
                return 'd';
              default:
                return '';
          ***REMOVED***
        ***REMOVED***,
          textStyle: ***REMOVED***
            color: '#333'
        ***REMOVED***
      ***REMOVED***,
        splitLine: ***REMOVED***
          show: true,
          length: 30,
          lineStyle: ***REMOVED***
            color: '#eee',
            width: 2,
            type: 'solid'
        ***REMOVED***
      ***REMOVED***,
        pointer: ***REMOVED***
          length: '80%',
          width: 8,
          color: 'auto'
      ***REMOVED***,
        title: ***REMOVED***
          show: true,
          offsetCenter: ['-65%', -10],
          textStyle: ***REMOVED***
            color: '#333',
            fontSize: 15
        ***REMOVED***
      ***REMOVED***,
        detail: ***REMOVED***
          show: true,
          backgroundColor: 'rgba(0,0,0,0)',
          borderWidth: 0,
          borderColor: '#ccc',
          width: 100,
          height: 40,
          offsetCenter: ['-60%', 10],
          formatter: '***REMOVED***value***REMOVED***%',
          textStyle: ***REMOVED***
            color: 'auto',
            fontSize: 30
        ***REMOVED***
      ***REMOVED***,
        data: [***REMOVED***
          value: 50,
          name: 'Performance'
      ***REMOVED***]
    ***REMOVED***]
  ***REMOVED***);

***REMOVED***

  //echart Line

  if ($('#echart_line').length )***REMOVED***

    var echartLine = echarts.init(document.getElementById('echart_line'), theme);

    echartLine.setOption(***REMOVED***
      title: ***REMOVED***
        text: 'Line Graph',
        subtext: 'Subtitle'
    ***REMOVED***,
      tooltip: ***REMOVED***
        trigger: 'axis'
    ***REMOVED***,
      legend: ***REMOVED***
        x: 220,
        y: 40,
        data: ['Intent', 'Pre-order', 'Deal']
    ***REMOVED***,
      toolbox: ***REMOVED***
        show: true,
        feature: ***REMOVED***
          magicType: ***REMOVED***
            show: true,
            title: ***REMOVED***
              line: 'Line',
              bar: 'Bar',
              stack: 'Stack',
              tiled: 'Tiled'
          ***REMOVED***,
            type: ['line', 'bar', 'stack', 'tiled']
        ***REMOVED***,
          restore: ***REMOVED***
            show: true,
            title: "Restore"
        ***REMOVED***,
          saveAsImage: ***REMOVED***
            show: true,
            title: "Save Image"
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
      calculable: true,
      xAxis: [***REMOVED***
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    ***REMOVED***],
      yAxis: [***REMOVED***
        type: 'value'
    ***REMOVED***],
      series: [***REMOVED***
        name: 'Deal',
        type: 'line',
        smooth: true,
        itemStyle: ***REMOVED***
          normal: ***REMOVED***
            areaStyle: ***REMOVED***
              type: 'default'
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***,
        data: [10, 12, 21, 54, 260, 830, 710]
    ***REMOVED***, ***REMOVED***
        name: 'Pre-order',
        type: 'line',
        smooth: true,
        itemStyle: ***REMOVED***
          normal: ***REMOVED***
            areaStyle: ***REMOVED***
              type: 'default'
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***,
        data: [30, 182, 434, 791, 390, 30, 10]
    ***REMOVED***, ***REMOVED***
        name: 'Intent',
        type: 'line',
        smooth: true,
        itemStyle: ***REMOVED***
          normal: ***REMOVED***
            areaStyle: ***REMOVED***
              type: 'default'
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***,
        data: [1320, 1132, 601, 234, 120, 90, 20]
    ***REMOVED***]
  ***REMOVED***);

***REMOVED***

  //echart Scatter

  if ($('#echart_scatter').length )***REMOVED***

    var echartScatter = echarts.init(document.getElementById('echart_scatter'), theme);

    echartScatter.setOption(***REMOVED***
      title: ***REMOVED***
        text: 'Scatter Graph',
        subtext: 'Heinz  2003'
    ***REMOVED***,
      tooltip: ***REMOVED***
        trigger: 'axis',
        showDelay: 0,
        axisPointer: ***REMOVED***
          type: 'cross',
          lineStyle: ***REMOVED***
            type: 'dashed',
            width: 1
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
      legend: ***REMOVED***
        data: ['Data2', 'Data1']
    ***REMOVED***,
      toolbox: ***REMOVED***
        show: true,
        feature: ***REMOVED***
          saveAsImage: ***REMOVED***
            show: true,
            title: "Save Image"
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
      xAxis: [***REMOVED***
        type: 'value',
        scale: true,
        axisLabel: ***REMOVED***
          formatter: '***REMOVED***value***REMOVED*** cm'
      ***REMOVED***
    ***REMOVED***],
      yAxis: [***REMOVED***
        type: 'value',
        scale: true,
        axisLabel: ***REMOVED***
          formatter: '***REMOVED***value***REMOVED*** kg'
      ***REMOVED***
    ***REMOVED***],
      series: [***REMOVED***
        name: 'Data1',
        type: 'scatter',
        tooltip: ***REMOVED***
          trigger: 'item',
          formatter: function(params) ***REMOVED***
            if (params.value.length > 1) ***REMOVED***
              return params.seriesName + ' :<br/>' + params.value[0] + 'cm ' + params.value[1] + 'kg ';
          ***REMOVED*** else ***REMOVED***
              return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value + 'kg ';
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***,
        data: [
          [161.2, 51.6],
          [167.5, 59.0],
          [159.5, 49.2],
          [157.0, 63.0],
          [155.8, 53.6],
          [170.0, 59.0],
          [159.1, 47.6],
          [166.0, 69.8],
          [176.2, 66.8],
          [160.2, 75.2],
          [172.5, 55.2],
          [170.9, 54.2],
          [172.9, 62.5],
          [153.4, 42.0],
          [160.0, 50.0],
          [147.2, 49.8],
          [168.2, 49.2],
          [175.0, 73.2],
          [157.0, 47.8],
          [167.6, 68.8],
          [159.5, 50.6],
          [175.0, 82.5],
          [166.8, 57.2],
          [176.5, 87.8],
          [170.2, 72.8],
          [174.0, 54.5],
          [173.0, 59.8],
          [179.9, 67.3],
          [170.5, 67.8],
          [160.0, 47.0],
          [154.4, 46.2],
          [162.0, 55.0],
          [176.5, 83.0],
          [160.0, 54.4],
          [152.0, 45.8],
          [162.1, 53.6],
          [170.0, 73.2],
          [160.2, 52.1],
          [161.3, 67.9],
          [166.4, 56.6],
          [168.9, 62.3],
          [163.8, 58.5],
          [167.6, 54.5],
          [160.0, 50.2],
          [161.3, 60.3],
          [167.6, 58.3],
          [165.1, 56.2],
          [160.0, 50.2],
          [170.0, 72.9],
          [157.5, 59.8],
          [167.6, 61.0],
          [160.7, 69.1],
          [163.2, 55.9],
          [152.4, 46.5],
          [157.5, 54.3],
          [168.3, 54.8],
          [180.3, 60.7],
          [165.5, 60.0],
          [165.0, 62.0],
          [164.5, 60.3],
          [156.0, 52.7],
          [160.0, 74.3],
          [163.0, 62.0],
          [165.7, 73.1],
          [161.0, 80.0],
          [162.0, 54.7],
          [166.0, 53.2],
          [174.0, 75.7],
          [172.7, 61.1],
          [167.6, 55.7],
          [151.1, 48.7],
          [164.5, 52.3],
          [163.5, 50.0],
          [152.0, 59.3],
          [169.0, 62.5],
          [164.0, 55.7],
          [161.2, 54.8],
          [155.0, 45.9],
          [170.0, 70.6],
          [176.2, 67.2],
          [170.0, 69.4],
          [162.5, 58.2],
          [170.3, 64.8],
          [164.1, 71.6],
          [169.5, 52.8],
          [163.2, 59.8],
          [154.5, 49.0],
          [159.8, 50.0],
          [173.2, 69.2],
          [170.0, 55.9],
          [161.4, 63.4],
          [169.0, 58.2],
          [166.2, 58.6],
          [159.4, 45.7],
          [162.5, 52.2],
          [159.0, 48.6],
          [162.8, 57.8],
          [159.0, 55.6],
          [179.8, 66.8],
          [162.9, 59.4],
          [161.0, 53.6],
          [151.1, 73.2],
          [168.2, 53.4],
          [168.9, 69.0],
          [173.2, 58.4],
          [171.8, 56.2],
          [178.0, 70.6],
          [164.3, 59.8],
          [163.0, 72.0],
          [168.5, 65.2],
          [166.8, 56.6],
          [172.7, 105.2],
          [163.5, 51.8],
          [169.4, 63.4],
          [167.8, 59.0],
          [159.5, 47.6],
          [167.6, 63.0],
          [161.2, 55.2],
          [160.0, 45.0],
          [163.2, 54.0],
          [162.2, 50.2],
          [161.3, 60.2],
          [149.5, 44.8],
          [157.5, 58.8],
          [163.2, 56.4],
          [172.7, 62.0],
          [155.0, 49.2],
          [156.5, 67.2],
          [164.0, 53.8],
          [160.9, 54.4],
          [162.8, 58.0],
          [167.0, 59.8],
          [160.0, 54.8],
          [160.0, 43.2],
          [168.9, 60.5],
          [158.2, 46.4],
          [156.0, 64.4],
          [160.0, 48.8],
          [167.1, 62.2],
          [158.0, 55.5],
          [167.6, 57.8],
          [156.0, 54.6],
          [162.1, 59.2],
          [173.4, 52.7],
          [159.8, 53.2],
          [170.5, 64.5],
          [159.2, 51.8],
          [157.5, 56.0],
          [161.3, 63.6],
          [162.6, 63.2],
          [160.0, 59.5],
          [168.9, 56.8],
          [165.1, 64.1],
          [162.6, 50.0],
          [165.1, 72.3],
          [166.4, 55.0],
          [160.0, 55.9],
          [152.4, 60.4],
          [170.2, 69.1],
          [162.6, 84.5],
          [170.2, 55.9],
          [158.8, 55.5],
          [172.7, 69.5],
          [167.6, 76.4],
          [162.6, 61.4],
          [167.6, 65.9],
          [156.2, 58.6],
          [175.2, 66.8],
          [172.1, 56.6],
          [162.6, 58.6],
          [160.0, 55.9],
          [165.1, 59.1],
          [182.9, 81.8],
          [166.4, 70.7],
          [165.1, 56.8],
          [177.8, 60.0],
          [165.1, 58.2],
          [175.3, 72.7],
          [154.9, 54.1],
          [158.8, 49.1],
          [172.7, 75.9],
          [168.9, 55.0],
          [161.3, 57.3],
          [167.6, 55.0],
          [165.1, 65.5],
          [175.3, 65.5],
          [157.5, 48.6],
          [163.8, 58.6],
          [167.6, 63.6],
          [165.1, 55.2],
          [165.1, 62.7],
          [168.9, 56.6],
          [162.6, 53.9],
          [164.5, 63.2],
          [176.5, 73.6],
          [168.9, 62.0],
          [175.3, 63.6],
          [159.4, 53.2],
          [160.0, 53.4],
          [170.2, 55.0],
          [162.6, 70.5],
          [167.6, 54.5],
          [162.6, 54.5],
          [160.7, 55.9],
          [160.0, 59.0],
          [157.5, 63.6],
          [162.6, 54.5],
          [152.4, 47.3],
          [170.2, 67.7],
          [165.1, 80.9],
          [172.7, 70.5],
          [165.1, 60.9],
          [170.2, 63.6],
          [170.2, 54.5],
          [170.2, 59.1],
          [161.3, 70.5],
          [167.6, 52.7],
          [167.6, 62.7],
          [165.1, 86.3],
          [162.6, 66.4],
          [152.4, 67.3],
          [168.9, 63.0],
          [170.2, 73.6],
          [175.2, 62.3],
          [175.2, 57.7],
          [160.0, 55.4],
          [165.1, 104.1],
          [174.0, 55.5],
          [170.2, 77.3],
          [160.0, 80.5],
          [167.6, 64.5],
          [167.6, 72.3],
          [167.6, 61.4],
          [154.9, 58.2],
          [162.6, 81.8],
          [175.3, 63.6],
          [171.4, 53.4],
          [157.5, 54.5],
          [165.1, 53.6],
          [160.0, 60.0],
          [174.0, 73.6],
          [162.6, 61.4],
          [174.0, 55.5],
          [162.6, 63.6],
          [161.3, 60.9],
          [156.2, 60.0],
          [149.9, 46.8],
          [169.5, 57.3],
          [160.0, 64.1],
          [175.3, 63.6],
          [169.5, 67.3],
          [160.0, 75.5],
          [172.7, 68.2],
          [162.6, 61.4],
          [157.5, 76.8],
          [176.5, 71.8],
          [164.4, 55.5],
          [160.7, 48.6],
          [174.0, 66.4],
          [163.8, 67.3]
        ],
        markPoint: ***REMOVED***
          data: [***REMOVED***
            type: 'max',
            name: 'Max'
        ***REMOVED***, ***REMOVED***
            type: 'min',
            name: 'Min'
        ***REMOVED***]
      ***REMOVED***,
        markLine: ***REMOVED***
          data: [***REMOVED***
            type: 'average',
            name: 'Mean'
        ***REMOVED***]
      ***REMOVED***
    ***REMOVED***, ***REMOVED***
        name: 'Data2',
        type: 'scatter',
        tooltip: ***REMOVED***
          trigger: 'item',
          formatter: function(params) ***REMOVED***
            if (params.value.length > 1) ***REMOVED***
              return params.seriesName + ' :<br/>' + params.value[0] + 'cm ' + params.value[1] + 'kg ';
          ***REMOVED*** else ***REMOVED***
              return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value + 'kg ';
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***,
        data: [
          [174.0, 65.6],
          [175.3, 71.8],
          [193.5, 80.7],
          [186.5, 72.6],
          [187.2, 78.8],
          [181.5, 74.8],
          [184.0, 86.4],
          [184.5, 78.4],
          [175.0, 62.0],
          [184.0, 81.6],
          [180.0, 76.6],
          [177.8, 83.6],
          [192.0, 90.0],
          [176.0, 74.6],
          [174.0, 71.0],
          [184.0, 79.6],
          [192.7, 93.8],
          [171.5, 70.0],
          [173.0, 72.4],
          [176.0, 85.9],
          [176.0, 78.8],
          [180.5, 77.8],
          [172.7, 66.2],
          [176.0, 86.4],
          [173.5, 81.8],
          [178.0, 89.6],
          [180.3, 82.8],
          [180.3, 76.4],
          [164.5, 63.2],
          [173.0, 60.9],
          [183.5, 74.8],
          [175.5, 70.0],
          [188.0, 72.4],
          [189.2, 84.1],
          [172.8, 69.1],
          [170.0, 59.5],
          [182.0, 67.2],
          [170.0, 61.3],
          [177.8, 68.6],
          [184.2, 80.1],
          [186.7, 87.8],
          [171.4, 84.7],
          [172.7, 73.4],
          [175.3, 72.1],
          [180.3, 82.6],
          [182.9, 88.7],
          [188.0, 84.1],
          [177.2, 94.1],
          [172.1, 74.9],
          [167.0, 59.1],
          [169.5, 75.6],
          [174.0, 86.2],
          [172.7, 75.3],
          [182.2, 87.1],
          [164.1, 55.2],
          [163.0, 57.0],
          [171.5, 61.4],
          [184.2, 76.8],
          [174.0, 86.8],
          [174.0, 72.2],
          [177.0, 71.6],
          [186.0, 84.8],
          [167.0, 68.2],
          [171.8, 66.1],
          [182.0, 72.0],
          [167.0, 64.6],
          [177.8, 74.8],
          [164.5, 70.0],
          [192.0, 101.6],
          [175.5, 63.2],
          [171.2, 79.1],
          [181.6, 78.9],
          [167.4, 67.7],
          [181.1, 66.0],
          [177.0, 68.2],
          [174.5, 63.9],
          [177.5, 72.0],
          [170.5, 56.8],
          [182.4, 74.5],
          [197.1, 90.9],
          [180.1, 93.0],
          [175.5, 80.9],
          [180.6, 72.7],
          [184.4, 68.0],
          [175.5, 70.9],
          [180.6, 72.5],
          [177.0, 72.5],
          [177.1, 83.4],
          [181.6, 75.5],
          [176.5, 73.0],
          [175.0, 70.2],
          [174.0, 73.4],
          [165.1, 70.5],
          [177.0, 68.9],
          [192.0, 102.3],
          [176.5, 68.4],
          [169.4, 65.9],
          [182.1, 75.7],
          [179.8, 84.5],
          [175.3, 87.7],
          [184.9, 86.4],
          [177.3, 73.2],
          [167.4, 53.9],
          [178.1, 72.0],
          [168.9, 55.5],
          [157.2, 58.4],
          [180.3, 83.2],
          [170.2, 72.7],
          [177.8, 64.1],
          [172.7, 72.3],
          [165.1, 65.0],
          [186.7, 86.4],
          [165.1, 65.0],
          [174.0, 88.6],
          [175.3, 84.1],
          [185.4, 66.8],
          [177.8, 75.5],
          [180.3, 93.2],
          [180.3, 82.7],
          [177.8, 58.0],
          [177.8, 79.5],
          [177.8, 78.6],
          [177.8, 71.8],
          [177.8, 116.4],
          [163.8, 72.2],
          [188.0, 83.6],
          [198.1, 85.5],
          [175.3, 90.9],
          [166.4, 85.9],
          [190.5, 89.1],
          [166.4, 75.0],
          [177.8, 77.7],
          [179.7, 86.4],
          [172.7, 90.9],
          [190.5, 73.6],
          [185.4, 76.4],
          [168.9, 69.1],
          [167.6, 84.5],
          [175.3, 64.5],
          [170.2, 69.1],
          [190.5, 108.6],
          [177.8, 86.4],
          [190.5, 80.9],
          [177.8, 87.7],
          [184.2, 94.5],
          [176.5, 80.2],
          [177.8, 72.0],
          [180.3, 71.4],
          [171.4, 72.7],
          [172.7, 84.1],
          [172.7, 76.8],
          [177.8, 63.6],
          [177.8, 80.9],
          [182.9, 80.9],
          [170.2, 85.5],
          [167.6, 68.6],
          [175.3, 67.7],
          [165.1, 66.4],
          [185.4, 102.3],
          [181.6, 70.5],
          [172.7, 95.9],
          [190.5, 84.1],
          [179.1, 87.3],
          [175.3, 71.8],
          [170.2, 65.9],
          [193.0, 95.9],
          [171.4, 91.4],
          [177.8, 81.8],
          [177.8, 96.8],
          [167.6, 69.1],
          [167.6, 82.7],
          [180.3, 75.5],
          [182.9, 79.5],
          [176.5, 73.6],
          [186.7, 91.8],
          [188.0, 84.1],
          [188.0, 85.9],
          [177.8, 81.8],
          [174.0, 82.5],
          [177.8, 80.5],
          [171.4, 70.0],
          [185.4, 81.8],
          [185.4, 84.1],
          [188.0, 90.5],
          [188.0, 91.4],
          [182.9, 89.1],
          [176.5, 85.0],
          [175.3, 69.1],
          [175.3, 73.6],
          [188.0, 80.5],
          [188.0, 82.7],
          [175.3, 86.4],
          [170.5, 67.7],
          [179.1, 92.7],
          [177.8, 93.6],
          [175.3, 70.9],
          [182.9, 75.0],
          [170.8, 93.2],
          [188.0, 93.2],
          [180.3, 77.7],
          [177.8, 61.4],
          [185.4, 94.1],
          [168.9, 75.0],
          [185.4, 83.6],
          [180.3, 85.5],
          [174.0, 73.9],
          [167.6, 66.8],
          [182.9, 87.3],
          [160.0, 72.3],
          [180.3, 88.6],
          [167.6, 75.5],
          [186.7, 101.4],
          [175.3, 91.1],
          [175.3, 67.3],
          [175.9, 77.7],
          [175.3, 81.8],
          [179.1, 75.5],
          [181.6, 84.5],
          [177.8, 76.6],
          [182.9, 85.0],
          [177.8, 102.5],
          [184.2, 77.3],
          [179.1, 71.8],
          [176.5, 87.9],
          [188.0, 94.3],
          [174.0, 70.9],
          [167.6, 64.5],
          [170.2, 77.3],
          [167.6, 72.3],
          [188.0, 87.3],
          [174.0, 80.0],
          [176.5, 82.3],
          [180.3, 73.6],
          [167.6, 74.1],
          [188.0, 85.9],
          [180.3, 73.2],
          [167.6, 76.3],
          [183.0, 65.9],
          [183.0, 90.9],
          [179.1, 89.1],
          [170.2, 62.3],
          [177.8, 82.7],
          [179.1, 79.1],
          [190.5, 98.2],
          [177.8, 84.1],
          [180.3, 83.2],
          [180.3, 83.2]
        ],
        markPoint: ***REMOVED***
          data: [***REMOVED***
            type: 'max',
            name: 'Max'
        ***REMOVED***, ***REMOVED***
            type: 'min',
            name: 'Min'
        ***REMOVED***]
      ***REMOVED***,
        markLine: ***REMOVED***
          data: [***REMOVED***
            type: 'average',
            name: 'Mean'
        ***REMOVED***]
      ***REMOVED***
    ***REMOVED***]
  ***REMOVED***);

***REMOVED***

  //echart Bar Horizontal

  if ($('#echart_bar_horizontal').length )***REMOVED***

    var echartBar = echarts.init(document.getElementById('echart_bar_horizontal'), theme);

    echartBar.setOption(***REMOVED***
      title: ***REMOVED***
        text: 'Bar Graph',
        subtext: 'Graph subtitle'
    ***REMOVED***,
      tooltip: ***REMOVED***
        trigger: 'axis'
    ***REMOVED***,
      legend: ***REMOVED***
        x: 100,
        data: ['2015', '2016']
    ***REMOVED***,
      toolbox: ***REMOVED***
        show: true,
        feature: ***REMOVED***
          saveAsImage: ***REMOVED***
            show: true,
            title: "Save Image"
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
      calculable: true,
      xAxis: [***REMOVED***
        type: 'value',
        boundaryGap: [0, 0.01]
    ***REMOVED***],
      yAxis: [***REMOVED***
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    ***REMOVED***],
      series: [***REMOVED***
        name: '2015',
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744, 630230]
    ***REMOVED***, ***REMOVED***
        name: '2016',
        type: 'bar',
        data: [19325, 23438, 31000, 121594, 134141, 681807]
    ***REMOVED***]
  ***REMOVED***);

***REMOVED***

  //echart Pie Collapse

  if ($('#echart_pie2').length )***REMOVED***

    var echartPieCollapse = echarts.init(document.getElementById('echart_pie2'), theme);

    echartPieCollapse.setOption(***REMOVED***
      tooltip: ***REMOVED***
        trigger: 'item',
        formatter: "***REMOVED***a***REMOVED*** <br/>***REMOVED***b***REMOVED*** : ***REMOVED***c***REMOVED*** (***REMOVED***d***REMOVED***%)"
    ***REMOVED***,
      legend: ***REMOVED***
        x: 'center',
        y: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6']
    ***REMOVED***,
      toolbox: ***REMOVED***
        show: true,
        feature: ***REMOVED***
          magicType: ***REMOVED***
            show: true,
            type: ['pie', 'funnel']
        ***REMOVED***,
          restore: ***REMOVED***
            show: true,
            title: "Restore"
        ***REMOVED***,
          saveAsImage: ***REMOVED***
            show: true,
            title: "Save Image"
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
      calculable: true,
      series: [***REMOVED***
        name: 'Area Mode',
        type: 'pie',
        radius: [25, 90],
        center: ['50%', 170],
        roseType: 'area',
        x: '50%',
        max: 40,
        sort: 'ascending',
        data: [***REMOVED***
          value: 10,
          name: 'rose1'
      ***REMOVED***, ***REMOVED***
          value: 5,
          name: 'rose2'
      ***REMOVED***, ***REMOVED***
          value: 15,
          name: 'rose3'
      ***REMOVED***, ***REMOVED***
          value: 25,
          name: 'rose4'
      ***REMOVED***, ***REMOVED***
          value: 20,
          name: 'rose5'
      ***REMOVED***, ***REMOVED***
          value: 35,
          name: 'rose6'
      ***REMOVED***]
    ***REMOVED***]
  ***REMOVED***);

***REMOVED***

  //echart Donut

  if ($('#echart_donut').length )***REMOVED***

    var echartDonut = echarts.init(document.getElementById('echart_donut'), theme);

    echartDonut.setOption(***REMOVED***
      tooltip: ***REMOVED***
        trigger: 'item',
        formatter: "***REMOVED***a***REMOVED*** <br/>***REMOVED***b***REMOVED*** : ***REMOVED***c***REMOVED*** (***REMOVED***d***REMOVED***%)"
    ***REMOVED***,
      calculable: true,
      legend: ***REMOVED***
        x: 'center',
        y: 'bottom',
        data: ['Direct Access', 'E-mail Marketing', 'Union Ad', 'Video Ads', 'Search Engine']
    ***REMOVED***,
      toolbox: ***REMOVED***
        show: true,
        feature: ***REMOVED***
          magicType: ***REMOVED***
            show: true,
            type: ['pie', 'funnel'],
            option: ***REMOVED***
              funnel: ***REMOVED***
                x: '25%',
                width: '50%',
                funnelAlign: 'center',
                max: 1548
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***,
          restore: ***REMOVED***
            show: true,
            title: "Restore"
        ***REMOVED***,
          saveAsImage: ***REMOVED***
            show: true,
            title: "Save Image"
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
      series: [***REMOVED***
        name: 'Access to the resource',
        type: 'pie',
        radius: ['35%', '55%'],
        itemStyle: ***REMOVED***
          normal: ***REMOVED***
            label: ***REMOVED***
              show: true
          ***REMOVED***,
            labelLine: ***REMOVED***
              show: true
          ***REMOVED***
        ***REMOVED***,
          emphasis: ***REMOVED***
            label: ***REMOVED***
              show: true,
              position: 'center',
              textStyle: ***REMOVED***
                fontSize: '14',
                fontWeight: 'normal'
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***,
        data: [***REMOVED***
          value: 335,
          name: 'Direct Access'
      ***REMOVED***, ***REMOVED***
          value: 310,
          name: 'E-mail Marketing'
      ***REMOVED***, ***REMOVED***
          value: 234,
          name: 'Union Ad'
      ***REMOVED***, ***REMOVED***
          value: 135,
          name: 'Video Ads'
      ***REMOVED***, ***REMOVED***
          value: 1548,
          name: 'Search Engine'
      ***REMOVED***]
    ***REMOVED***]
  ***REMOVED***);

***REMOVED***

  //echart Pie

  if ($('#echart_pie').length )***REMOVED***

    var echartPie = echarts.init(document.getElementById('echart_pie'), theme);

    echartPie.setOption(***REMOVED***
      tooltip: ***REMOVED***
        trigger: 'item',
        formatter: "***REMOVED***a***REMOVED*** <br/>***REMOVED***b***REMOVED*** : ***REMOVED***c***REMOVED*** (***REMOVED***d***REMOVED***%)"
    ***REMOVED***,
      legend: ***REMOVED***
        x: 'center',
        y: 'bottom',
        data: ['Direct Access', 'E-mail Marketing', 'Union Ad', 'Video Ads', 'Search Engine']
    ***REMOVED***,
      toolbox: ***REMOVED***
        show: true,
        feature: ***REMOVED***
          magicType: ***REMOVED***
            show: true,
            type: ['pie', 'funnel'],
            option: ***REMOVED***
              funnel: ***REMOVED***
                x: '25%',
                width: '50%',
                funnelAlign: 'left',
                max: 1548
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***,
          restore: ***REMOVED***
            show: true,
            title: "Restore"
        ***REMOVED***,
          saveAsImage: ***REMOVED***
            show: true,
            title: "Save Image"
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
      calculable: true,
      series: [***REMOVED***
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '48%'],
        data: [***REMOVED***
          value: 335,
          name: 'Direct Access'
      ***REMOVED***, ***REMOVED***
          value: 310,
          name: 'E-mail Marketing'
      ***REMOVED***, ***REMOVED***
          value: 234,
          name: 'Union Ad'
      ***REMOVED***, ***REMOVED***
          value: 135,
          name: 'Video Ads'
      ***REMOVED***, ***REMOVED***
          value: 1548,
          name: 'Search Engine'
      ***REMOVED***]
    ***REMOVED***]
  ***REMOVED***);

    var dataStyle = ***REMOVED***
      normal: ***REMOVED***
        label: ***REMOVED***
          show: false
      ***REMOVED***,
        labelLine: ***REMOVED***
          show: false
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***;

    var placeHolderStyle = ***REMOVED***
      normal: ***REMOVED***
        color: 'rgba(0,0,0,0)',
        label: ***REMOVED***
          show: false
      ***REMOVED***,
        labelLine: ***REMOVED***
          show: false
      ***REMOVED***
    ***REMOVED***,
      emphasis: ***REMOVED***
        color: 'rgba(0,0,0,0)'
    ***REMOVED***
  ***REMOVED***;

***REMOVED***

  //echart Mini Pie

  if ($('#echart_mini_pie').length )***REMOVED***

    var echartMiniPie = echarts.init(document.getElementById('echart_mini_pie'), theme);

    echartMiniPie .setOption(***REMOVED***
      title: ***REMOVED***
        text: 'Chart #2',
        subtext: 'From ExcelHome',
        sublink: 'http://e.weibo.com/1341556070/AhQXtjbqh',
        x: 'center',
        y: 'center',
        itemGap: 20,
        textStyle: ***REMOVED***
          color: 'rgba(30,144,255,0.8)',
          fontFamily: '微软雅黑',
          fontSize: 35,
          fontWeight: 'bolder'
      ***REMOVED***
    ***REMOVED***,
      tooltip: ***REMOVED***
        show: true,
        formatter: "***REMOVED***a***REMOVED*** <br/>***REMOVED***b***REMOVED*** : ***REMOVED***c***REMOVED*** (***REMOVED***d***REMOVED***%)"
    ***REMOVED***,
      legend: ***REMOVED***
        orient: 'vertical',
        x: 170,
        y: 45,
        itemGap: 12,
        data: ['68%Something #1', '29%Something #2', '3%Something #3'],
    ***REMOVED***,
      toolbox: ***REMOVED***
        show: true,
        feature: ***REMOVED***
          mark: ***REMOVED***
            show: true
        ***REMOVED***,
          dataView: ***REMOVED***
            show: true,
            title: "Text View",
            lang: [
              "Text View",
              "Close",
              "Refresh",
            ],
            readOnly: false
        ***REMOVED***,
          restore: ***REMOVED***
            show: true,
            title: "Restore"
        ***REMOVED***,
          saveAsImage: ***REMOVED***
            show: true,
            title: "Save Image"
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
      series: [***REMOVED***
        name: '1',
        type: 'pie',
        clockWise: false,
        radius: [105, 130],
        itemStyle: dataStyle,
        data: [***REMOVED***
          value: 68,
          name: '68%Something #1'
      ***REMOVED***, ***REMOVED***
          value: 32,
          name: 'invisible',
          itemStyle: placeHolderStyle
      ***REMOVED***]
    ***REMOVED***, ***REMOVED***
        name: '2',
        type: 'pie',
        clockWise: false,
        radius: [80, 105],
        itemStyle: dataStyle,
        data: [***REMOVED***
          value: 29,
          name: '29%Something #2'
      ***REMOVED***, ***REMOVED***
          value: 71,
          name: 'invisible',
          itemStyle: placeHolderStyle
      ***REMOVED***]
    ***REMOVED***, ***REMOVED***
        name: '3',
        type: 'pie',
        clockWise: false,
        radius: [25, 80],
        itemStyle: dataStyle,
        data: [***REMOVED***
          value: 3,
          name: '3%Something #3'
      ***REMOVED***, ***REMOVED***
          value: 97,
          name: 'invisible',
          itemStyle: placeHolderStyle
      ***REMOVED***]
    ***REMOVED***]
  ***REMOVED***);

***REMOVED***

  //echart Map

  if ($('#echart_world_map').length )***REMOVED***

    var echartMap = echarts.init(document.getElementById('echart_world_map'), theme);


    echartMap.setOption(***REMOVED***
      title: ***REMOVED***
        text: 'World Population (2010)',
        subtext: 'from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
        x: 'center',
        y: 'top'
    ***REMOVED***,
      tooltip: ***REMOVED***
        trigger: 'item',
        formatter: function(params) ***REMOVED***
          var value = (params.value + '').split('.');
          value = value[0].replace(/(\d***REMOVED***1,3***REMOVED***)(?=(?:\d***REMOVED***3***REMOVED***)+(?!\d))/g, '$1,') + '.' + value[1];
          return params.seriesName + '<br/>' + params.name + ' : ' + value;
      ***REMOVED***
    ***REMOVED***,
      toolbox: ***REMOVED***
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'center',
        feature: ***REMOVED***
          mark: ***REMOVED***
            show: true
        ***REMOVED***,
          dataView: ***REMOVED***
            show: true,
            title: "Text View",
            lang: [
              "Text View",
              "Close",
              "Refresh",
            ],
            readOnly: false
        ***REMOVED***,
          restore: ***REMOVED***
            show: true,
            title: "Restore"
        ***REMOVED***,
          saveAsImage: ***REMOVED***
            show: true,
            title: "Save Image"
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***,
      dataRange: ***REMOVED***
        min: 0,
        max: 1000000,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        color: ['#087E65', '#26B99A', '#CBEAE3']
    ***REMOVED***,
      series: [***REMOVED***
        name: 'World Population (2010)',
        type: 'map',
        mapType: 'world',
        roam: false,
        mapLocation: ***REMOVED***
          y: 60
      ***REMOVED***,
        itemStyle: ***REMOVED***
          emphasis: ***REMOVED***
            label: ***REMOVED***
              show: true
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***,
        data: [***REMOVED***
          name: 'Afghanistan',
          value: 28397.812
      ***REMOVED***, ***REMOVED***
          name: 'Angola',
          value: 19549.124
      ***REMOVED***, ***REMOVED***
          name: 'Albania',
          value: 3150.143
      ***REMOVED***, ***REMOVED***
          name: 'United Arab Emirates',
          value: 8441.537
      ***REMOVED***, ***REMOVED***
          name: 'Argentina',
          value: 40374.224
      ***REMOVED***, ***REMOVED***
          name: 'Armenia',
          value: 2963.496
      ***REMOVED***, ***REMOVED***
          name: 'French Southern and Antarctic Lands',
          value: 268.065
      ***REMOVED***, ***REMOVED***
          name: 'Australia',
          value: 22404.488
      ***REMOVED***, ***REMOVED***
          name: 'Austria',
          value: 8401.924
      ***REMOVED***, ***REMOVED***
          name: 'Azerbaijan',
          value: 9094.718
      ***REMOVED***, ***REMOVED***
          name: 'Burundi',
          value: 9232.753
      ***REMOVED***, ***REMOVED***
          name: 'Belgium',
          value: 10941.288
      ***REMOVED***, ***REMOVED***
          name: 'Benin',
          value: 9509.798
      ***REMOVED***, ***REMOVED***
          name: 'Burkina Faso',
          value: 15540.284
      ***REMOVED***, ***REMOVED***
          name: 'Bangladesh',
          value: 151125.475
      ***REMOVED***, ***REMOVED***
          name: 'Bulgaria',
          value: 7389.175
      ***REMOVED***, ***REMOVED***
          name: 'The Bahamas',
          value: 66402.316
      ***REMOVED***, ***REMOVED***
          name: 'Bosnia and Herzegovina',
          value: 3845.929
      ***REMOVED***, ***REMOVED***
          name: 'Belarus',
          value: 9491.07
      ***REMOVED***, ***REMOVED***
          name: 'Belize',
          value: 308.595
      ***REMOVED***, ***REMOVED***
          name: 'Bermuda',
          value: 64.951
      ***REMOVED***, ***REMOVED***
          name: 'Bolivia',
          value: 716.939
      ***REMOVED***, ***REMOVED***
          name: 'Brazil',
          value: 195210.154
      ***REMOVED***, ***REMOVED***
          name: 'Brunei',
          value: 27.223
      ***REMOVED***, ***REMOVED***
          name: 'Bhutan',
          value: 716.939
      ***REMOVED***, ***REMOVED***
          name: 'Botswana',
          value: 1969.341
      ***REMOVED***, ***REMOVED***
          name: 'Central African Republic',
          value: 4349.921
      ***REMOVED***, ***REMOVED***
          name: 'Canada',
          value: 34126.24
      ***REMOVED***, ***REMOVED***
          name: 'Switzerland',
          value: 7830.534
      ***REMOVED***, ***REMOVED***
          name: 'Chile',
          value: 17150.76
      ***REMOVED***, ***REMOVED***
          name: 'China',
          value: 1359821.465
      ***REMOVED***, ***REMOVED***
          name: 'Ivory Coast',
          value: 60508.978
      ***REMOVED***, ***REMOVED***
          name: 'Cameroon',
          value: 20624.343
      ***REMOVED***, ***REMOVED***
          name: 'Democratic Republic of the Congo',
          value: 62191.161
      ***REMOVED***, ***REMOVED***
          name: 'Republic of the Congo',
          value: 3573.024
      ***REMOVED***, ***REMOVED***
          name: 'Colombia',
          value: 46444.798
      ***REMOVED***, ***REMOVED***
          name: 'Costa Rica',
          value: 4669.685
      ***REMOVED***, ***REMOVED***
          name: 'Cuba',
          value: 11281.768
      ***REMOVED***, ***REMOVED***
          name: 'Northern Cyprus',
          value: 1.468
      ***REMOVED***, ***REMOVED***
          name: 'Cyprus',
          value: 1103.685
      ***REMOVED***, ***REMOVED***
          name: 'Czech Republic',
          value: 10553.701
      ***REMOVED***, ***REMOVED***
          name: 'Germany',
          value: 83017.404
      ***REMOVED***, ***REMOVED***
          name: 'Djibouti',
          value: 834.036
      ***REMOVED***, ***REMOVED***
          name: 'Denmark',
          value: 5550.959
      ***REMOVED***, ***REMOVED***
          name: 'Dominican Republic',
          value: 10016.797
      ***REMOVED***, ***REMOVED***
          name: 'Algeria',
          value: 37062.82
      ***REMOVED***, ***REMOVED***
          name: 'Ecuador',
          value: 15001.072
      ***REMOVED***, ***REMOVED***
          name: 'Egypt',
          value: 78075.705
      ***REMOVED***, ***REMOVED***
          name: 'Eritrea',
          value: 5741.159
      ***REMOVED***, ***REMOVED***
          name: 'Spain',
          value: 46182.038
      ***REMOVED***, ***REMOVED***
          name: 'Estonia',
          value: 1298.533
      ***REMOVED***, ***REMOVED***
          name: 'Ethiopia',
          value: 87095.281
      ***REMOVED***, ***REMOVED***
          name: 'Finland',
          value: 5367.693
      ***REMOVED***, ***REMOVED***
          name: 'Fiji',
          value: 860.559
      ***REMOVED***, ***REMOVED***
          name: 'Falkland Islands',
          value: 49.581
      ***REMOVED***, ***REMOVED***
          name: 'France',
          value: 63230.866
      ***REMOVED***, ***REMOVED***
          name: 'Gabon',
          value: 1556.222
      ***REMOVED***, ***REMOVED***
          name: 'United Kingdom',
          value: 62066.35
      ***REMOVED***, ***REMOVED***
          name: 'Georgia',
          value: 4388.674
      ***REMOVED***, ***REMOVED***
          name: 'Ghana',
          value: 24262.901
      ***REMOVED***, ***REMOVED***
          name: 'Guinea',
          value: 10876.033
      ***REMOVED***, ***REMOVED***
          name: 'Gambia',
          value: 1680.64
      ***REMOVED***, ***REMOVED***
          name: 'Guinea Bissau',
          value: 10876.033
      ***REMOVED***, ***REMOVED***
          name: 'Equatorial Guinea',
          value: 696.167
      ***REMOVED***, ***REMOVED***
          name: 'Greece',
          value: 11109.999
      ***REMOVED***, ***REMOVED***
          name: 'Greenland',
          value: 56.546
      ***REMOVED***, ***REMOVED***
          name: 'Guatemala',
          value: 14341.576
      ***REMOVED***, ***REMOVED***
          name: 'French Guiana',
          value: 231.169
      ***REMOVED***, ***REMOVED***
          name: 'Guyana',
          value: 786.126
      ***REMOVED***, ***REMOVED***
          name: 'Honduras',
          value: 7621.204
      ***REMOVED***, ***REMOVED***
          name: 'Croatia',
          value: 4338.027
      ***REMOVED***, ***REMOVED***
          name: 'Haiti',
          value: 9896.4
      ***REMOVED***, ***REMOVED***
          name: 'Hungary',
          value: 10014.633
      ***REMOVED***, ***REMOVED***
          name: 'Indonesia',
          value: 240676.485
      ***REMOVED***, ***REMOVED***
          name: 'India',
          value: 1205624.648
      ***REMOVED***, ***REMOVED***
          name: 'Ireland',
          value: 4467.561
      ***REMOVED***, ***REMOVED***
          name: 'Iran',
          value: 240676.485
      ***REMOVED***, ***REMOVED***
          name: 'Iraq',
          value: 30962.38
      ***REMOVED***, ***REMOVED***
          name: 'Iceland',
          value: 318.042
      ***REMOVED***, ***REMOVED***
          name: 'Israel',
          value: 7420.368
      ***REMOVED***, ***REMOVED***
          name: 'Italy',
          value: 60508.978
      ***REMOVED***, ***REMOVED***
          name: 'Jamaica',
          value: 2741.485
      ***REMOVED***, ***REMOVED***
          name: 'Jordan',
          value: 6454.554
      ***REMOVED***, ***REMOVED***
          name: 'Japan',
          value: 127352.833
      ***REMOVED***, ***REMOVED***
          name: 'Kazakhstan',
          value: 15921.127
      ***REMOVED***, ***REMOVED***
          name: 'Kenya',
          value: 40909.194
      ***REMOVED***, ***REMOVED***
          name: 'Kyrgyzstan',
          value: 5334.223
      ***REMOVED***, ***REMOVED***
          name: 'Cambodia',
          value: 14364.931
      ***REMOVED***, ***REMOVED***
          name: 'South Korea',
          value: 51452.352
      ***REMOVED***, ***REMOVED***
          name: 'Kosovo',
          value: 97.743
      ***REMOVED***, ***REMOVED***
          name: 'Kuwait',
          value: 2991.58
      ***REMOVED***, ***REMOVED***
          name: 'Laos',
          value: 6395.713
      ***REMOVED***, ***REMOVED***
          name: 'Lebanon',
          value: 4341.092
      ***REMOVED***, ***REMOVED***
          name: 'Liberia',
          value: 3957.99
      ***REMOVED***, ***REMOVED***
          name: 'Libya',
          value: 6040.612
      ***REMOVED***, ***REMOVED***
          name: 'Sri Lanka',
          value: 20758.779
      ***REMOVED***, ***REMOVED***
          name: 'Lesotho',
          value: 2008.921
      ***REMOVED***, ***REMOVED***
          name: 'Lithuania',
          value: 3068.457
      ***REMOVED***, ***REMOVED***
          name: 'Luxembourg',
          value: 507.885
      ***REMOVED***, ***REMOVED***
          name: 'Latvia',
          value: 2090.519
      ***REMOVED***, ***REMOVED***
          name: 'Morocco',
          value: 31642.36
      ***REMOVED***, ***REMOVED***
          name: 'Moldova',
          value: 103.619
      ***REMOVED***, ***REMOVED***
          name: 'Madagascar',
          value: 21079.532
      ***REMOVED***, ***REMOVED***
          name: 'Mexico',
          value: 117886.404
      ***REMOVED***, ***REMOVED***
          name: 'Macedonia',
          value: 507.885
      ***REMOVED***, ***REMOVED***
          name: 'Mali',
          value: 13985.961
      ***REMOVED***, ***REMOVED***
          name: 'Myanmar',
          value: 51931.231
      ***REMOVED***, ***REMOVED***
          name: 'Montenegro',
          value: 620.078
      ***REMOVED***, ***REMOVED***
          name: 'Mongolia',
          value: 2712.738
      ***REMOVED***, ***REMOVED***
          name: 'Mozambique',
          value: 23967.265
      ***REMOVED***, ***REMOVED***
          name: 'Mauritania',
          value: 3609.42
      ***REMOVED***, ***REMOVED***
          name: 'Malawi',
          value: 15013.694
      ***REMOVED***, ***REMOVED***
          name: 'Malaysia',
          value: 28275.835
      ***REMOVED***, ***REMOVED***
          name: 'Namibia',
          value: 2178.967
      ***REMOVED***, ***REMOVED***
          name: 'New Caledonia',
          value: 246.379
      ***REMOVED***, ***REMOVED***
          name: 'Niger',
          value: 15893.746
      ***REMOVED***, ***REMOVED***
          name: 'Nigeria',
          value: 159707.78
      ***REMOVED***, ***REMOVED***
          name: 'Nicaragua',
          value: 5822.209
      ***REMOVED***, ***REMOVED***
          name: 'Netherlands',
          value: 16615.243
      ***REMOVED***, ***REMOVED***
          name: 'Norway',
          value: 4891.251
      ***REMOVED***, ***REMOVED***
          name: 'Nepal',
          value: 26846.016
      ***REMOVED***, ***REMOVED***
          name: 'New Zealand',
          value: 4368.136
      ***REMOVED***, ***REMOVED***
          name: 'Oman',
          value: 2802.768
      ***REMOVED***, ***REMOVED***
          name: 'Pakistan',
          value: 173149.306
      ***REMOVED***, ***REMOVED***
          name: 'Panama',
          value: 3678.128
      ***REMOVED***, ***REMOVED***
          name: 'Peru',
          value: 29262.83
      ***REMOVED***, ***REMOVED***
          name: 'Philippines',
          value: 93444.322
      ***REMOVED***, ***REMOVED***
          name: 'Papua New Guinea',
          value: 6858.945
      ***REMOVED***, ***REMOVED***
          name: 'Poland',
          value: 38198.754
      ***REMOVED***, ***REMOVED***
          name: 'Puerto Rico',
          value: 3709.671
      ***REMOVED***, ***REMOVED***
          name: 'North Korea',
          value: 1.468
      ***REMOVED***, ***REMOVED***
          name: 'Portugal',
          value: 10589.792
      ***REMOVED***, ***REMOVED***
          name: 'Paraguay',
          value: 6459.721
      ***REMOVED***, ***REMOVED***
          name: 'Qatar',
          value: 1749.713
      ***REMOVED***, ***REMOVED***
          name: 'Romania',
          value: 21861.476
      ***REMOVED***, ***REMOVED***
          name: 'Russia',
          value: 21861.476
      ***REMOVED***, ***REMOVED***
          name: 'Rwanda',
          value: 10836.732
      ***REMOVED***, ***REMOVED***
          name: 'Western Sahara',
          value: 514.648
      ***REMOVED***, ***REMOVED***
          name: 'Saudi Arabia',
          value: 27258.387
      ***REMOVED***, ***REMOVED***
          name: 'Sudan',
          value: 35652.002
      ***REMOVED***, ***REMOVED***
          name: 'South Sudan',
          value: 9940.929
      ***REMOVED***, ***REMOVED***
          name: 'Senegal',
          value: 12950.564
      ***REMOVED***, ***REMOVED***
          name: 'Solomon Islands',
          value: 526.447
      ***REMOVED***, ***REMOVED***
          name: 'Sierra Leone',
          value: 5751.976
      ***REMOVED***, ***REMOVED***
          name: 'El Salvador',
          value: 6218.195
      ***REMOVED***, ***REMOVED***
          name: 'Somaliland',
          value: 9636.173
      ***REMOVED***, ***REMOVED***
          name: 'Somalia',
          value: 9636.173
      ***REMOVED***, ***REMOVED***
          name: 'Republic of Serbia',
          value: 3573.024
      ***REMOVED***, ***REMOVED***
          name: 'Suriname',
          value: 524.96
      ***REMOVED***, ***REMOVED***
          name: 'Slovakia',
          value: 5433.437
      ***REMOVED***, ***REMOVED***
          name: 'Slovenia',
          value: 2054.232
      ***REMOVED***, ***REMOVED***
          name: 'Sweden',
          value: 9382.297
      ***REMOVED***, ***REMOVED***
          name: 'Swaziland',
          value: 1193.148
      ***REMOVED***, ***REMOVED***
          name: 'Syria',
          value: 7830.534
      ***REMOVED***, ***REMOVED***
          name: 'Chad',
          value: 11720.781
      ***REMOVED***, ***REMOVED***
          name: 'Togo',
          value: 6306.014
      ***REMOVED***, ***REMOVED***
          name: 'Thailand',
          value: 66402.316
      ***REMOVED***, ***REMOVED***
          name: 'Tajikistan',
          value: 7627.326
      ***REMOVED***, ***REMOVED***
          name: 'Turkmenistan',
          value: 5041.995
      ***REMOVED***, ***REMOVED***
          name: 'East Timor',
          value: 10016.797
      ***REMOVED***, ***REMOVED***
          name: 'Trinidad and Tobago',
          value: 1328.095
      ***REMOVED***, ***REMOVED***
          name: 'Tunisia',
          value: 10631.83
      ***REMOVED***, ***REMOVED***
          name: 'Turkey',
          value: 72137.546
      ***REMOVED***, ***REMOVED***
          name: 'United Republic of Tanzania',
          value: 44973.33
      ***REMOVED***, ***REMOVED***
          name: 'Uganda',
          value: 33987.213
      ***REMOVED***, ***REMOVED***
          name: 'Ukraine',
          value: 46050.22
      ***REMOVED***, ***REMOVED***
          name: 'Uruguay',
          value: 3371.982
      ***REMOVED***, ***REMOVED***
          name: 'United States of America',
          value: 312247.116
      ***REMOVED***, ***REMOVED***
          name: 'Uzbekistan',
          value: 27769.27
      ***REMOVED***, ***REMOVED***
          name: 'Venezuela',
          value: 236.299
      ***REMOVED***, ***REMOVED***
          name: 'Vietnam',
          value: 89047.397
      ***REMOVED***, ***REMOVED***
          name: 'Vanuatu',
          value: 236.299
      ***REMOVED***, ***REMOVED***
          name: 'West Bank',
          value: 13.565
      ***REMOVED***, ***REMOVED***
          name: 'Yemen',
          value: 22763.008
      ***REMOVED***, ***REMOVED***
          name: 'South Africa',
          value: 51452.352
      ***REMOVED***, ***REMOVED***
          name: 'Zambia',
          value: 13216.985
      ***REMOVED***, ***REMOVED***
          name: 'Zimbabwe',
          value: 13076.978
      ***REMOVED***]
    ***REMOVED***]
  ***REMOVED***);

***REMOVED***

***REMOVED***


$(document).ready(function() ***REMOVED***
  init_sidebar();



***REMOVED***);


