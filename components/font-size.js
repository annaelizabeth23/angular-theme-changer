angular.module('themeChanger').component('fontSize', {
    templateUrl: 'templates/font-size.html',
    bindings: {
        fontSize: '<',
        update: '&',
    }
})