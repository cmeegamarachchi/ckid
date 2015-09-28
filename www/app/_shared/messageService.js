(function (app) {

    function messageService(messageModel) {

        var id = 1;

        function pushMessage(messageType, header, body) {
            messageModel.messages.unshift({
                id: id++,
                type: messageType,
                header: header,
                body: body,
                date: new Date()
            });
        }

        function addMessage(header, body) {
            pushMessage('message', header, body);
        }

        function addErrMessage(body) {
            pushMessage('errMessage', 'Error', body);
        }

        function addSystemMessage(header, body) {
            pushMessage('sysMessage', header, body);
        }

        function getMessage(id) {
            for (var i = 0; i < messageModel.messages.length; i++) {
                var message = messageModel.messages[i];
                if (message.id === id) {
                    return message;
                }
            }

            return null;
        }

        return {
            addMessage: addMessage,
            addErrMessage: addErrMessage,
            addSystemMessage: addSystemMessage,
            getMessage: getMessage
        }
    }

    app.factory('messageService', ['messageModel', messageService]);

}(angular.module('nfcApp')))