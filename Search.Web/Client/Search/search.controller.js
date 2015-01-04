(function () {
    'use strict';

    angular
        .module('search.demo.search')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['searchservice'];

    function SearchController(searchservice) {
        var vm = this;
        vm.results = [];
        vm.title = 'Type-S: Search Application Technology Demonstrator';

        activate();

        function activate() {
            console.log("[SearchController] entered activate function.");
            return vm.results = getSearchResults();
        }

        function getSearchResults() {
            return searchservice.webSearch();
        }
    }
})();