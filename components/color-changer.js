angular.module('themeChanger').component('colorChanger', {
    templateUrl: 'templates/color-changer.html',
    bindings: {
        fontColor: '<',
        update: '&',
    }
})