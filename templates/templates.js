(function() {
window["JST"] = window["JST"] || {};

window["JST"]["bar/index.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<h3>Hello Bar!</h3>\n\n<h5>' +
((__t = ( message )) == null ? '' : __t) +
'</h5>\n\n<a href="#bar">go to bar</a>\n<a href="#foo">go to foos</a>\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["login/index.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="ui middle aligned center aligned grid">\n  <div class="column six wide form-holder">\n    <h2 class="ui teal image header form-head">\n      <img src="assets/images/logo.png" class="image">\n      <div class="content">\n        Log-in to your account\n      </div>\n    </h2>\n    <form class="ui large form">\n      <div class="ui stacked segment">\n        <div class="field">\n          <div class="ui left icon input">\n            <i class="user icon"></i>\n            <input type="text" name="email" placeholder="E-mail address">\n          </div>\n        </div>\n        <div class="field">\n          <div class="ui left icon input">\n            <i class="lock icon"></i>\n            <input type="password" name="password" placeholder="Password">\n          </div>\n        </div>\n        <div class="ui fluid large teal submit button">Login</div>\n      </div>\n\n      <div class="ui error message"></div>\n\n    </form>\n\n    <div class="ui message">\n      New to us? <a href="#">Sign Up</a>\n    </div>\n  </div>\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["foo/index.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h3>Hello all foos!</h3>\n<ul id="foos">\n    ';
 // here are gonna be append all foos ;
__p += '\n</ul>\n<a href="#bar">go to bar</a>\n<a href="#foo">go to foos</a>\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["foo/single-foo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<strong>' +
((__t = ( displayName() )) == null ? '' : __t) +
'</strong>\n<em> ' +
((__t = ( somevalue )) == null ? '' : __t) +
'...</em>\n';

}
return __p
}})();