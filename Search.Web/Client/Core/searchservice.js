(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('searchservice', searchservice);

    function searchservice() {
        var service = {
            webSearch: queryWeb,
            imgSearch: queryImages,
            newsSearch: queryNews
        };

        return service;

        function queryWeb() {
            return getSampleSearchResults();
        }

        function queryImages() {
            return getSampleSearchResults();
        }

        function queryNews() {
            return getSampleSearchResults();
        }

        function getSampleSearchResults() {
            return results = [
                { title: 'sample title 1', description: 'sample description', link: 'http://www.bing.com' },
                { title: 'sample title 1', description: 'sample description', link: 'http://www.bing.com' },
                { title: 'sample title 1', description: 'sample description', link: 'http://www.bing.com' },
                { title: 'sample title 1', description: 'sample description', link: 'http://www.bing.com' },
                { title: 'sample title 1', description: 'sample description', link: 'http://www.bing.com' },
                { title: 'sample title 1', description: 'sample description', link: 'http://www.bing.com' },
                { title: 'sample title 1', description: 'sample description', link: 'http://www.bing.com' },
                { title: 'sample title 1', description: 'sample description', link: 'http://www.bing.com' },
                { title: 'sample title 1', description: 'sample description', link: 'http://www.bing.com' },
                { title: 'sample title 1', description: 'sample description', link: 'http://www.bing.com' }
            ];
        }
    }
})();