var paths                   = require('../util/paths');
var fs = require('fs');
var path = require('path');
var glob = require('glob');

var configJSON = fs.readFileSync(paths.activeCaptureConfigPath, "utf8");
var config = JSON.parse(configJSON);
var specDir = path.dirname(paths.activeCaptureConfigPath) + '/spec';

glob(specDir + "/*.js", function (er, files) {
  files.forEach(function(file){
    var itemConfigJSON = fs.readFileSync(file, "utf8");
    var itemConfig = JSON.parse(itemConfigJSON);
    config.scenarios.push(itemConfig);
  });
  fs.writeFileSync(paths.captureConfigFileName, JSON.stringify(config));
})
