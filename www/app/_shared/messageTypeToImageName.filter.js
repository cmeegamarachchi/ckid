(function (app) {

    function messageTypeToImageName() {
        return function (input) {
            switch(input.toLocaleLowerCase()) {
                case 'message':
                    return 'message';
                case 'errmessage':
                    return 'error';
                case 'sysmessage':
                    return 'system-message';
                default:
                    return 'message';
            }
        };
    }

    app.filter('messageTypeToImageName', [messageTypeToImageName]);

}(angular.module('nfcApp')))