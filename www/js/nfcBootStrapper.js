var nfcBootstrapper = nfcBootstrapper || {};

nfcBootstrapper.setupGenericTagListner = function (injector, nfc) {
    
    function processTag(nfcEvent) {
        var tag = nfcEvent.tag;
        injector.get('messageService').addMessage(nfc.bytesToHexString(tag.id), tag.techTypes);
        angular.element(document.getElementById('app')).scope().$apply();
    }

    nfc.addTagDiscoveredListener(processTag, function() {
        injector.get('messageService').addSystemMessage('Setup', 'NFC tag listner is strapped');
        angular.element(document.getElementById('app')).scope().$apply();
    }, function() {
        injector.get('messageService').addErrMessage('Failed to setup NFC tag listner');
        angular.element(document.getElementById('app')).scope().$apply();
    });

}

nfcBootstrapper.setupNfc = function() {
    
    var injector = angular.element(document.getElementById('app')).injector();

    if (injector !== undefined && injector !== null) {

        injector.get('messageService').addSystemMessage('Setup', 'Bootstrap process started');
        try {
            if (nfc !== undefined) {
                nfcBootstrapper.setupGenericTagListner(injector, nfc);
            } else {
                injector.get('messageService').addErrMessage('Could not access NFC services on your phone');
                angular.element(document.getElementById('app')).scope().$apply();
            }
        } catch (ex) {
            injector.get('messageService').addErrMessage(ex.message);
            angular.element(document.getElementById('app')).scope().$apply();
        }
    } else {
        alert('Could not initialize angular injector');
    }

}