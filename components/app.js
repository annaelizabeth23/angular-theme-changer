angular.module('themeChanger').component('app', {
    templateUrl: 'templates/app.html',
    controller: function(){
        this.allowEdit = true;
        this.fontColor = 'black';
    },
    controllerAs: 'myCtrl'
});