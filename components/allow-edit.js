angular.module('themeChanger').component('allowEdit', {
    templateUrl: 'templates/allow-edit.html',
    bindings: {
        allowEdit: '<',
        update: '&',
    }
})