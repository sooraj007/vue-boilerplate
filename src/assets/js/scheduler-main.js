export default {

  data: function () {
    return {
     staff : [
       { start_date: "2017-06-30 09:00", end_date: "2017-06-30 12:00", text:"sooraj", section_id:1},


     ]
    }
  },

  mounted(){

    this.initCalender()

  },
  computed: {

  },
  methods: {

    initCalender : function(){

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
      scheduler.dhtmlXTooltip.isTooltipTarget = function(target) {
        while (target.parentNode && target != dhx_cal_data) {
          var css = target.className.split(" ")[0];
          // if we are over matrix cell or tooltip itself
          if (css == "dhx_matrix_scell" || css == "dhtmlXTooltip") {
            return { classname: css };
          }
          target = target.parentNode;
        }
        return false;
      };
      function show_minical(){
        if (scheduler.isCalendarVisible())
          scheduler.destroyCalendar();
        else
          scheduler.renderCalendar({
            position:"dhx_minical_icon",
            date:scheduler._date,
            navigation:true,
            handler:function(date,calendar){
              scheduler.setCurrentView(date);
              scheduler.destroyCalendar()
            }
          });
      }

      $('#dhx_minical_icon').click(function(){
        show_minical();
      })

      scheduler.attachEvent("onMouseMove", function(id, e) {
        var timeline_view = scheduler.matrix[scheduler.getState().mode];

        // if we are over event then we can immediately return
        // or if we are not on timeline view
        if (id || !timeline_view) {
          return ;
        }

        // native mouse event
        e = e||window.event;
        var target = e.target||e.srcElement;


        //make a copy of event, will be used in timed call, ie8 comp
        var ev = {'pageX':undefined,
          'pageY':undefined,
          'clientX':undefined,
          'clientY':undefined,
          'target':undefined,
          'srcElement':undefined
        };
        for(var i in ev){
          ev[i] = e[i];
        }

        var tooltip = scheduler.dhtmlXTooltip;
        var tooltipTarget = tooltip.isTooltipTarget(target);
        if (tooltipTarget) {
          if (tooltipTarget.classname == "dhx_matrix_scell") {
            // we are over cell, need to get what cell it is and display tooltip
            var section_id = scheduler.getActionData(e).section;
            var section = timeline_view.y_unit[timeline_view.order[section_id]];

            // showing tooltip itself
            var text = "Tooltip for <b>"+section.label+"</b>";
            tooltip.delay(tooltip.show, tooltip, [ev, text]);
          }
          if (tooltipTarget.classname == "dhtmlXTooltip") {


            dhtmlxTooltip.delay(tooltip.show, tooltip, [ev, tooltip.tooltip.innerHTML]);
          }
        }
      });

      //===============
      // Timeline configuration
      //===============
      var sections=[
        {key:1, label:"James Smith"},
        {key:2, label:"John Williams"},
        {key:3, label:"David Miller"},
        {key:4, label:"Linda Brown"}
      ];

      scheduler.createTimelineView({
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
      });

      //===============
      // Data loading
      //===============
      scheduler.config.lightbox.sections=[
        {name:"description", height:130, map_to:"text", type:"textarea" , focus:true},
        {name:"custom", height:23, type:"select", options:sections, map_to:"section_id" },
        { name:"recurring", type:"recurring", map_to:"rec_type", button:"recurring" },

        {name:"time", height:72, type:"time", map_to:"auto"}
      ];

      scheduler.init('scheduler_here',new Date(2017,5,30),"month");
      scheduler.parse(this.staff,"json");
    },
    addItem : function(){
      scheduler.addEvent({
        start_date: new Date(2017,5,10,8,30),
        end_date:   new Date(2017,5,10,10,30),
        text:   "Meeting",
        holder: "John", //userdata

      })
    }
  }
}
