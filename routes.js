//Routes
Router.configure({
layoutTemplate: "home",
//loadingTemplate: "loading",
notFoundTemplate: "notfound"
});

Router.route('/', function () {
  this.render('main');
});

Router.route('/blog');


/**
 **  SIGN-IN Security
 **/

Router.route('/dashboard', {
      onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
      this.next();
    }
});

/**
 **  Blog Router
 **/
 Router.route('/blog/:_id',function(){
 	var post= Posts.findOne({_id: this.params._id});
 	this.render('showpost',{data: post});
 })