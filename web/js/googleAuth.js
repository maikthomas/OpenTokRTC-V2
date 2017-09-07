!(function(exports) {
  var init = function(callback) {
    gapi.load('auth2', function() {
      gapi.auth2.init({
        client_id: '128679106983-6pan3577kflbe08vr227fa96o1ft7jef.apps.googleusercontent.com',
        hosted_domain: 'tokbox.com'
      }).then(callback);
    });
  };

  exports.GoogleAuth = {
    init: init
  };
}(this));
