var usb = require('usb');
    usb.setDebugLevel(4);

var cyborgController = usb.findByIds(1699, 3365);
    cyborgController.open();

// console.log(cyborgController);
// console.log(cyborgController.busNumber);
// console.log(cyborgController.deviceAddress);
// console.log(cyborgController.deviceDescriptor);
// console.log(cyborgController.configDescriptor);

var cyborgInterface = cyborgController.interface();
cyborgInterface.claim(); 
// cyborgInterface.startStream();

// console.log(cyborgInterface);

