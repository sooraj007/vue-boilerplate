export default ***REMOVED***

  data: function () ***REMOVED***
    return ***REMOVED***
     staff : [
       ***REMOVED*** start_date: "2017-06-30 09:00", end_date: "2017-06-30 12:00", text:"sooraj", section_id:1***REMOVED***,


     ]
  ***REMOVED***
***REMOVED***,

  mounted()***REMOVED***

    this.initCalender()

***REMOVED***,
  computed: ***REMOVED***

***REMOVED***,
  methods: ***REMOVED***

    initCalender : function()***REMOVED***

      //===============
      // Basic configuration
      //===============
      scheduler.locale.labels.timeline_tab = "Timeline";
      scheduler.locale.labels.section_custom="Section";
      scheduler.config.details_on_create=true;
      scheduler.config.details_on_dblclick=true;
      scheduler.config.xml_date="%Y-%m-%d %H:%i";
      scheduler.config.occurrence_timestamp_in_utc = true;
      scheduler.config.include_end_by = true;
      scheduler.config.repeat_precise = true;


      //===============
      // Tooltip related code
      //===============

      // we want to save "dhx_cal_data" div in a variable to limit look ups
      var scheduler_container = document.getElementById("scheduler_here");
      var scheduler_container_divs = scheduler_container.getElementsByTagName("div");
      var dhx_cal_data = scheduler_container_divs[scheduler_container_divs.length-1];

      // while target has parent node and we haven't reached dhx_cal_data
      // we can keep checking if it is timeline section
      scheduler.dhtmlXTooltip.isTooltipTarget = function(target) ***REMOVED***
        while (target.parentNode && target != dhx_cal_data) ***REMOVED***
          var css = target.className.split(" ")[0];
          // if we are over matrix cell or tooltip itself
          if (css == "dhx_matrix_scell" || css == "dhtmlXTooltip") ***REMOVED***
            return ***REMOVED*** classname: css ***REMOVED***;
        ***REMOVED***
          target = target.parentNode;
      ***REMOVED***
        return false;
    ***REMOVED***;
      function show_minical()***REMOVED***
        if (scheduler.isCalendarVisible())
          scheduler.destroyCalendar();
        else
          scheduler.renderCalendar(***REMOVED***
            position:"dhx_minical_icon",
            date:scheduler._date,
            navigation:true,
            handler:function(date,calendar)***REMOVED***
              scheduler.setCurrentView(date);
              scheduler.destroyCalendar()
          ***REMOVED***
        ***REMOVED***);
    ***REMOVED***

      $('#dhx_minical_icon').click(function()***REMOVED***
        show_minical();
    ***REMOVED***)

      scheduler.attachEvent("onMouseMove", function(id, e) ***REMOVED***
        var timeline_view = scheduler.matrix[scheduler.getState().mode];

        // if we are over event then we can immediately return
        // or if we are not on timeline view
        if (id || !timeline_view) ***REMOVED***
          return ;
      ***REMOVED***

        // native mouse event
        e = e||window.event;
        var target = e.target||e.srcElement;


        //make a copy of event, will be used in timed call, ie8 comp
        var ev = ***REMOVED***'pageX':undefined,
          'pageY':undefined,
          'clientX':undefined,
          'clientY':undefined,
          'target':undefined,
          'srcElement':undefined
      ***REMOVED***;
        for(var i in ev)***REMOVED***
          ev[i] = e[i];
      ***REMOVED***

        var tooltip = scheduler.dhtmlXTooltip;
        var tooltipTarget = tooltip.isTooltipTarget(target);
        if (tooltipTarget) ***REMOVED***
          if (tooltipTarget.classname == "dhx_matrix_scell") ***REMOVED***
            // we are over cell, need to get what cell it is and display tooltip
            var section_id = scheduler.getActionData(e).section;
            var section = timeline_view.y_unit[timeline_view.order[section_id]];

            // showing tooltip itself
            var text = "Tooltip for <b>"+section.label+"</b>";
            tooltip.delay(tooltip.show, tooltip, [ev, text]);
        ***REMOVED***
          if (tooltipTarget.classname == "dhtmlXTooltip") ***REMOVED***


            dhtmlxTooltip.delay(tooltip.show, tooltip, [ev, tooltip.tooltip.innerHTML]);
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***);

      //===============
      // Timeline configuration
      //===============
      var sections=[
        ***REMOVED***key:1, label:"James Smith"***REMOVED***,
        ***REMOVED***key:2, label:"John Williams"***REMOVED***,
        ***REMOVED***key:3, label:"David Miller"***REMOVED***,
        ***REMOVED***key:4, label:"Linda Brown"***REMOVED***
      ];

      scheduler.createTimelineView(***REMOVED***
        name:	"timeline",
        x_unit:	"minute",
        x_date:	"%H:%i",
        x_step:	30,
        x_size: 24,
        x_start: 16,
        x_length:	48,
        y_unit:	sections,
        y_property:	"section_id",
        render:"bar"
    ***REMOVED***);

      //===============
      // Data loading
      //===============
      scheduler.config.lightbox.sections=[
        ***REMOVED***name:"description", height:130, map_to:"text", type:"textarea" , focus:true***REMOVED***,
        ***REMOVED***name:"custom", height:23, type:"select", options:sections, map_to:"section_id" ***REMOVED***,
        ***REMOVED*** name:"recurring", type:"recurring", map_to:"rec_type", button:"recurring" ***REMOVED***,

        ***REMOVED***name:"time", height:72, type:"time", map_to:"auto"***REMOVED***
      ];

      scheduler.init('scheduler_here',new Date(2017,5,30),"month");
      scheduler.parse(this.staff,"json");
  ***REMOVED***,
    addItem : function()***REMOVED***
      scheduler.addEvent(***REMOVED***
        start_date: new Date(2017,5,10,8,30),
        end_date:   new Date(2017,5,10,10,30),
        text:   "Meeting",
        holder: "John", //userdata

    ***REMOVED***)
  ***REMOVED***
***REMOVED***
***REMOVED***
