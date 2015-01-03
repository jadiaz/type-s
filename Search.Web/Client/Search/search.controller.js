(function () {
    'use strict';

    angular
        .module('app.search')
        .controller('SearchController', SearchController);

    function SearchController(searchservice) {
        var vm = this;
        vm.results = [];
        vm.title = config.appTitle;

        activate();

        function activate() {
            return getSearchResults().then(function () {
                console.log("retrieve results from query (search.js)");
            });
        }

        function getSearchResults() {
            return searchservice.queryWeb().then(function (data) {
                vm.results = data;
                console.log("searchservice.js returned results");
                return vm.results;
            });
        }
    }
})();