(function (app) {

    function messageModel() {
        var messages = [
            {
                id: 1,
                type: 'message',
                header: 'Info',
                body: 'Copper kid (0.01)',
                date: new Date()
            }
        ];

        return {
            messages: messages
        }
    }

    app.factory('messageModel', [messageModel]);

}(angular.module('nfcApp')))