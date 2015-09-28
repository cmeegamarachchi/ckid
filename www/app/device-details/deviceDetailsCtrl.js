(function (app) {

    function loadDeviceDetails() {
        var deviceDetails = {
            model: device.model,
            runtime: device.cordova,
            platform: device.platform,
            veriosn: device.version,
            width: window.innerWidth,
            height: window.innerHeight
        }

        return deviceDetails;
    }

    function deviceDetailsCtrl() {
        var self = this;

        self.deviceDetails = loadDeviceDetails();
    }

    app.controller('deviceDetailsCtrl', [deviceDetailsCtrl]);

}(angular.module('nfcApp')))