var ControlPanel = function() {
    this.onStartCallback = null;
    this.onProgressCallback = null;
    this.onEndCallback = null;
};

ControlPanel.prototype.onStart = function(callback) {
    console.log('Registered start callback')
    this.onStartCallback = callback;
};
ControlPanel.prototype.onEnd = function(callback) {
    console.log('Registered start callback')
    this.onEndCallback = callback;
};
ControlPanel.prototype.onProgress = function(callback) {
    console.log('Registered start callback')
    this.onProgressCallback = callback;
};

ControlPanel.prototype.start = function() {
    if (!this.onStartCallback) {
        return
    }

    for (i = 1; i <= 100; ++i) {
        if (i % 10 == 0) {
            this.onProgressCallback(i);
        }
    }

    this.onEndCallback();
};

var controlPanel = new ControlPanel();
controlPanel.onStart(function() {
   console.log('started')
});

controlPanel.onEnd(function() {
    console.log('end')
});

controlPanel.onProgress(function(number) {
    console.log('progress up to ' + number);
});

controlPanel.start()
