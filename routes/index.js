
/*
 * GET home page.
 */

module.exports.index = function(req, res){
  res.render('index');
};

module.exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};
