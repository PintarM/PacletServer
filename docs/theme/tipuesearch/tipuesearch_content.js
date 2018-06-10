
var tipuesearch;
$.getJSON("../search/search_index.json",
  function(data) { tipuesearch = data }
  );
$.getJSON("../theme/search/search_index.json",
  function(data) { tipuesearch = data }
  );
$.getJSON("theme/search/search_index.json",
  function(data) { tipuesearch = data }
  );

var tipuesearch_options;
$.getJSON("../search/search_options.json",
  function(data) { tipuesearch_options = data }
  );
$.getJSON("../theme/search/search_options.json",
  function(data) { tipuesearch_options = data }
  );
$.getJSON("theme/search/search_options.json",
  function(data) { tipuesearch_options = data }
  );
