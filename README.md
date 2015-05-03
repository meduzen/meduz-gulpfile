# meduz-gulpfile
This is my personal Gulpfile, to use with [Gulp](http://gulpjs.com/) things.

## File structure
* package.json
* gulpfile.js
* dev
	* font
	* img
	* js 
	* scss
	* sound
* htdocs
	* css
		* style.css
 	* font
	* img
	* js 
		* projectSlug.js (define projectSlug in *Gulpfile.js : 2*)
	* sound

## Changelog

### v1.1.0 (2015/05/04)

First cleaning & improvments

* Replaced *gulp-sass* by *gulp-ruby-sass*, which correctly support Autoprefixer & Sourcemaps.
* JS Minifier now concatenates every JavaScript files.
* Structure improvments (now copy PHP, sounds and fonts).
* Image compression (basic support: *jpeg*, *png*, *gif*, *svg*).
* Added cache management (basic support).

### v1.0.0 (~ 2015/03)

Initial commit. Basic support of:

* SASS (without Autoprefixer nor Sourcemaps.)
* Livereload
* HTML Minifier
* JS Minifier (no concatenation & no sourcemaps)
* Errors (with Plumber)
* Notifier

## Further improvments

* Clean what can be.
* Split the Gulpfile into two Gulpfiles:
  * One for dev purpose
  * One for final production
* Be more specific with packages options.
* Improve notifier
* Spritesheets
* Font optimization (if it's possible)
