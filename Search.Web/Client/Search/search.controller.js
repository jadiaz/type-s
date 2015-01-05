(function () {
    'use strict';

    angular
        .module('search.demo.search')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['searchservice'];

    function SearchController(searchservice) {
        var vm = this;
        vm.search = search;
        vm.results = [];
        vm.title = 'Type-S: Search Application Technology Demonstrator';

        activate();

        function activate() {
            console.log("[SearchController] controller has been activated.");
        }

        function search() {
            console.log("[SearchController] search button pressed.")
            return getSearchResults();
        }

        function getSearchResults() {
            return searchservice.webSearch();
        }
    }
})();