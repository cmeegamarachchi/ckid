(function (app) {

    function messageListCtrl(messageModel) {

        var self = this;

        self.messages = messageModel.messages;

    }

    app.controller('messageListCtrl', ['messageModel', messageListCtrl]);

}(angular.module('nfcApp')))