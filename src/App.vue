<template>

  <div>
    <div class="container body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
              <a class="site_title"><center>Your Logo</center></a>
            </div>

            <div class="clearfix"></div>


            <br />

            <!-- sidebar menu -->
            <div id="sidebar"></div>
            <!-- /sidebar menu -->

    
          </div>
        </div>

        <!-- top navigation -->
        <div id="header"></div>
        <!-- /top navigation -->

        <!-- page content -->
        <div class="right_col" role="main" style="min-height:1012px">

          <router-view></router-view>

        </div>

      </div>
      <!-- /page content -->

      <!-- footer content -->
      <div id="footer"></div>
      <!-- /footer content -->
    </div>

  </div>

</template>

