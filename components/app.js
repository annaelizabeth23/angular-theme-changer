angular.module('themeChanger').component('app', {
    templateUrl: 'templates/app.html',
    controller: function(){
        this.allowEdit = true;
        this.fontColor = 'black';
        this.updateColor = function(val) {
            this.fontColor = val;
        };
        this.updateSize = function(val) {
            this.fontSize = val;
        };
    },
    controllerAs: 'myCtrl'
});