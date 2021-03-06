module.exports = function (req, res, next) {
  if (req.param('apikey') == undefined) {
    return next();
  }

  AuthService.getUser(req.param('apikey'))
    .then(function (user) {
      if (user) {
        if (req.isAuthenticated()) {
          if (req.user.id !== user.id) {
            req.logOut();
          }
          else if (req.user.id === user.id) {
            return next();
          }
        }

        req.logIn(user, function (err) {
          if (err) {
            return res.badRequest(err);
          }

          return next();
        });
      }
      else
        return res.unauthorized({message: "Invalid API key"});
    }, function (err) {
      return next();
    });
}
