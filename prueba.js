Posts = new Mongo.Collection('posts');

if (Meteor.isClient){

  jQuery(function($) {
    $('#myModal').on('hidden.bs.modal', function (e) {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
    })
  });

  Template.logoutTemplate.helpers({
     currentUser: function(){
        return Meteor.userId();
     }
  });

  Template.blog.helpers({
     'post' : function(){
        return Posts.find({},{sort:{createdAt:-1}});
     },
     'firstPost': function(){
        return Posts.find({},{limit:1, sort:{createdAt:-1}});
     }
  });

  Template.showpost.helpers({
    'allpost': function(){
      return Posts.find({},{sort:{createdAt:-1}});
    }
  });

  Template.dashboard.events({
     'click #createpost': function(event){
      // Prevent default browser form submit
       event.preventDefault();

      // Get value from form element
      var editorText = CKEDITOR.instances.editor1.getData();
      var valTitle   = $('#inputTitle').val();
      //var text = $('#trackingDiv').html(editorText);
      // Insert a task into the collection
      if(editorText.length>10){
         Meteor.call('createDocument',editorText, valTitle);
      }else{
        alert('No puede guardar este Post. Debe tener por lo menos 100 caracteres de contenido');
      }


      // Clear form
      //event.target.text.value = "";

     }
  });

/*
  Template.blog.helpers({
      'post': function(){
         //Subscribes
          //Meteor.subscribe('posts');
          var players = new Blaze.Var([ { name: "Alice", score: 150 }, { name: "Bob", score: 125 } ]);
          return players;
      }
  });
*/
  Template.contactFormTemplate.events= {
  	'click #contactId': function(){
        var nameClient= $('#nameId').val();
        var emailAddress= $('#emailId').val();
        var content= $('#contentId').val();

         // In your client code: asynchronously send an email
        Meteor.call('sendEmail',
              'belinda@pinskier.com',
              emailAddress,
              nameClient +"("+emailAddress+")" +'te ha escrito un nuevo mensaje ¡¡¡',
              content);
    }
  };

}

if (Meteor.isServer) {
   // In your server code: define a method that the client can call
   Meteor.methods({
     sendEmail: function (to, from, subject, text) {

      // Let other method calls from the same client start running,
      // without waiting for the email sending to complete.
      this.unblock();

      Email.send({
        to: to,
        from: from,
        subject: subject,
        text: text
      });
     },
     createDocument: function(editorText, valTitle){
        Posts.insert({
          title: valTitle,
          content: editorText,
          username: 'Belinda',
          createdAt: new Date() // current time
        });
     }
   });

   // This code only runs on the server
   /*Meteor.publish('posts', function () {
       return Posts.find();
   });
   */

   Meteor.startup(function () {
      if(Posts.find().count()<1){
        /*
        Posts.insert({
          title: 'Primer Post',
          content: 'Primeros Posts....asdasdsadasd....',
          username: 'Belinda',
          createdAt: new Date() // current time
        });
      }*/
       }
  });
}
