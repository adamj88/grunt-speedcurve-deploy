# grunt-speedcurve-deploy

> Grunt task to notify SpeedCurve of a deployment

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-speedcurve-deploy --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-speedcurve-deploy');
```

## The "speedcurve_deploy" task

### Overview
In your project's Gruntfile, add a section named `speedcurve_deploy` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  speedcurve_deploy: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.apiKey (required)
Type: `String`
Default value: `false`

SpeedCurve API key, when logged in it can be found under Menu -> Admin -> Teams

#### options.dryRun
Type: `Boolean`
Default value: `false`

Set to true to disable sending the request to SpeedCurve.

#### options.note
Type: `String`
Default value: `'Automatic deployment notification'`

Short note to display globally across all graphs for the main site. (Max: 255 characters).

#### options.detail
Type: `String`
Default value: `'No detail provided'`

Optional detail to display if people want more context.

### Usage Examples

```js
grunt.initConfig({
  speedcurve_deploy: {
    options: {
      apiKey: '[SpeedCurve API Key]'
    },
    dist: {
      options {
        note: 'Deployment',
        detail: 'More detail about Deployment'
      }
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
