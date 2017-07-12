module.exports = function (source) ***REMOVED***
  return function (h) ***REMOVED***

    var rows = require('vue-tables-2/compiled/template/rows')(h, this);
    var normalFilter = require('vue-tables-2/compiled/template/normal-filter')(h, this);
    var dropdownPagination = require('vue-tables-2/compiled/template/dropdown-pagination')(h, this);
    var columnFilters = require('vue-tables-2/compiled/template/column-filters')(h, this);
    var footerHeadings = require('vue-tables-2/compiled/template/footer-headings')(h, this);
    var noResults = require('vue-tables-2/compiled/template/no-results')(h, this);
    var pagination = require('vue-tables-2/compiled/template/pagination')(h, this);
    var dropdownPaginationCount = require('vue-tables-2/compiled/template/dropdown-pagination-count')(h, this);
    var headings = require('vue-tables-2/compiled/template/headings')(h, this);
    var perPage = require('vue-tables-2/compiled/template/per-page')(h, this);

    return h(
      'div',
      ***REMOVED*** 'class': "VueTables VueTables--" + this.source ***REMOVED***,
      [h(
        'div',
        ***REMOVED*** 'class': 'row' ***REMOVED***,
        [h(
          'div',
          ***REMOVED*** 'class': 'col-md-12' ***REMOVED***,
          [normalFilter]
        ), h(
          'div',
          ***REMOVED*** 'class': 'col-md-6' ***REMOVED***,
          [dropdownPagination, perPage]
        )]
      ), h(
        'table',
        ***REMOVED*** 'class': 'VueTables__table table ' + this.opts.skin ***REMOVED***,
        [h(
          'thead',
          null,
          [h(
            'tr',
            null,
            [headings]
          ), columnFilters]
        ), footerHeadings, h(
          'tbody',
          null,
          [noResults, rows]
        )]
      ), pagination, dropdownPaginationCount]
    );
***REMOVED***;
***REMOVED***;
