<template>
  <!-- sidebar menu -->
  <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
    <div class="menu_section">
      <!--  <h3>General</h3> -->
      <ul class="nav side-menu">
        <li><a><i class="fa fa-home"></i> Dashboard</a>

        </li>
        <li><a><i class="fa fa-edit"></i> Compliance <span class="fa fa-chevron-down"></span></a>
          <ul class="nav child_menu">
            <li><a>Management</a></li>
            <li><a>Documents</a></li>
            <li><a>Records</a></li>

            <li><a>Schedule</a></li>
            <li><a>MAHC</a></li>
          </ul>
        </li>
        <li><a><i class="fa fa-desktop"></i> Risk Management<span class="fa fa-chevron-down"></span></a>
          <ul class="nav child_menu">
            <li><a>Risk Management</a></li>
            <li><a>Control Plan Management</a></li>

          </ul>
        </li>
        <li><a><i class="fa fa-table"></i> Health & Saftey <span class="fa fa-chevron-down"></span></a>
          <ul class="nav child_menu">
            <li><a>Training</a></li>
            <li><a>Staffing</a></li>
            <li><a>Water quality</a></li>

            <li><a>Maintenance</a></li>
            <li><a>Incidents</a></li>
            <li><a>Inventory</a></li>
          </ul>
        </li>
        <li><a><i class="fa fa-bar-chart-o"></i> Personnel<span class="fa fa-chevron-down"></span></a>
          <ul class="nav child_menu">
            <li><a>Dashboard</a></li>
            <li><a>Profile</a></li>
            <li><a>Schedule</a></li>

            <li><a>Certifications</a></li>
            <li><a>Performance</a></li>


          </ul>
        </li>
        <li><a><i class="fa fa-clone"></i>Patrons <span class="fa fa-chevron-down"></span></a>
          <ul class="nav child_menu">
            <li><a>Memberships</a></li>
            <li><a>Activities</a></li>
            <li><a>Rentals</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="menu_section">
      <!--   <h3>Live On</h3> -->
      <ul class="nav side-menu">
        <li><a><i class="fa fa-bug"></i>Administration<span class="fa fa-chevron-down"></span></a>
          <ul class="nav child_menu">
            <li><a>Assets</a></li>
            <li><a>Suppliers</a></li>

          </ul>
        </li>
        <li><a><i class="fa fa-windows"></i> Settings <span class="fa fa-chevron-down"></span></a>
          <ul class="nav child_menu">
            <li><a>Administrator</a></li>
            <li><a>User</a></li>
            <li><a>Manage Pools</a></li>

            <li><a>Manage Locations</a></li>
            <li><a>Manage Template</a></li>

          </ul>
        </li>

      </ul>
    </div>

  </div>
  <!-- /sidebar menu -->


</template>

<script src="./sidebar.controller.js"></script>
