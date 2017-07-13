<template>
  <!-- sidebar menu -->
  <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
    <div class="menu_section">

      <ul class="nav side-menu">
        <li><a><i class="fa fa-home"></i> Dashboard</a>

        </li>
        <li><a><i class="fa fa-edit"></i> Menu 1<span class="fa fa-chevron-down"></span></a>
          <ul class="nav child_menu">
            <li><a>Sub Menu 1</a></li>
            <li><a>Sub Menu 2</a></li>
            <li><a>Sub Menu 3</a></li>

          </ul>
        </li>
        <li><a><i class="fa fa-desktop"></i>Menu 2<span class="fa fa-chevron-down"></span></a>
          <ul class="nav child_menu">
            <li><a>Sub Menu 1</a></li>
            <li><a>Sub Menu 2</a></li>

          </ul>
        </li>
    
      </ul>
    </div>


  </div>
  <!-- /sidebar menu -->


</template>

<script src="./sidebar.controller.js"></script>
