/*
 * grunt-speedcurve-deploy
 * https://github.com/adamj88/grunt-speedcurve-deploy
 *
 * Copyright (c) 2016 Adam Johnson
 * Licensed under the MIT license.
 */

'use strict';

var SpeedCurve = require('speedcurve-api');

module.exports = function(grunt) {

  grunt.registerMultiTask('speedcurve_deploy', 'Notify SpeedCurve of a deployment', function() {
    var done = this.async();

    var options = this.options({
        apiKey: false,
        dryRun: false,
        note: 'Automatic deployment notification',
        detail: 'No detail provided'
    });

    if(!options.apiKey) {
        grunt.fail.warn('You must specify a SpeedCurve API key');
        done();
    }

    var spd = new SpeedCurve(options.apikey, options.dryrun);
     
    spd.deploy({
        note: options.note,
        detail: options.detail
    }, function(err, data) {
        if(err) {
            grunt.fail.warn(err);
        } else {
            grunt.verbose.writeln('SpeedCurve Response:');
            grunt.verbose.writeln(JSON.stringify(data));
            grunt.log.ok('SpeedCurve deployment notification successfully sent');
        }
        done();
    });

  });

};