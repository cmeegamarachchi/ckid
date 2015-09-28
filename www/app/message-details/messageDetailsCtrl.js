(function (app) {

    function messageDetailsCtrl(message) {
        var self = this;
        self.message = message;
    }

    app.controller('messageDetailsCtrl', ['message', messageDetailsCtrl]);

}(angular.module('nfcApp')))