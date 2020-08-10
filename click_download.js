// Mostly taken from https://github.com./alextrv/enhanced-h264ify/ and slightly modified
//  Copyright (c) 2019 alextrv; Copyright (c) 2015 erkserkserks
chrome.storage.local.get({
    // Set defaults
    msfad_enabled: true,
    auto_close: false,
}, function(options) {
    if (options.msfad_enabled === "true") {
        document.getElementsByClassName("input popsok")[0].click();
        if (options.auto_close === "true")
            close();
    }
});
// End Copyright
