#!/usr/bin/env node

var path = require('path');
var fs = require('fs');

module.exports = function main(context, cmd) {
    var project_path = context.opts.projectRoot;
    console.log(project_path);
    var platform_path = path.join(project_path, "platforms", "android");

    var content = "";
    var conf_path = path.join(platform_path, "assets", "LudeiAndroidExtensionsClassPaths.conf");
    if (fs.existsSync(conf_path)) {
        content = fs.readFileSync(conf_path, "utf8") + "\n";
    }
    content = content + "com.ludei.extension.webviewcapture.LudeiExtensionWebviewCapture";
    fs.writeFileSync(conf_path, content, "utf8");
}