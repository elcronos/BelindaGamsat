Meteor.startup(function () {
    AccountsEntry.config({
      //logo: 'logo.png',                          // if set displays logo above sign-in options
      privacyUrl: '/privacy-policy',             // if set adds link to privacy policy and 'you agree to ...' on sign-up page
      termsUrl: '/terms-of-use',                 // if set adds link to terms  'you agree to ...' on sign-up page
      homeRoute: '/',                            // mandatory - path to redirect to after sign-out
      dashboardRoute: '/dashboard',              // mandatory - path to redirect to after successful sign-in
      profileRoute: 'profile',                   // if set adds link to User Profile
      passwordSignupFields: 'EMAIL_ONLY',        // One of 'USERNAME_AND_EMAIL', 'USERNAME_AND_OPTIONAL_EMAIL', 'USERNAME_ONLY', or 'EMAIL_ONLY' (default).
      showSignupCode: true,                      // when true you need to set the 'signupCode' setting in the server (see below)
      showOtherLoginServices: false,             // Set to false to hide oauth login buttons on the signin/signup pages. Useful if you are using something like accounts-meld or want to oauth for api access
      passwordminLength: 5,                      // Password minimun lenght
      requireOneAlpha: true,                     // enforce the use of at least 1 char [a-z] while building the password
      requireOneDigit: true,                     // enforce the use of at least 1 digit while building the password
      requirePasswordConfirmation: false,          // enforce user to confirm password on signUp and resetPassword templates
      signInAfterRegistration: false
      /*
      waitEmailVerification: false,              // Set to true to wait until newly created user's email has been verified. 
      fluidLayout: false,                        // Set to true to use bootstrap3 container-fluid and row-fluid classes.
      useContainer: true,                        // Set to false to use an unstyled "accounts-entry-container" class instead of a bootstrap3 "container" or "container-fluid" class. 
      signInAfterRegistration: false,             // Set to false to avoid prevent users being automatically signed up upon sign-up e.g. to wait until their email has been verified. 
      emailVerificationPendingRoute: '/verification-pending', // The route to which users should be directed after sign-up. Only relevant if signInAfterRegistration is false.
      showSpinner: true,                         // Show the spinner when the client is talking to the server (spin.js)
      spinnerOptions: { color: "#000", top: "80%" } // options as per [spin.js](http://fgnass.github.io/spin.js/)
      */

      /*extraSignUpFields: [{                      // Add extra signup fields on the signup page
        field: "name",                           // The database property you want to store the data in
        name: "User Name",  // An initial value for the field, if you want one
        label: "Full Name",                      // The html lable for the field
        placeholder: "John Doe",                 // A placeholder for the field
        type: "text",                            // The type of field you want
        required: true                           // Adds html 5 required property if true
       }]*/
    });
  });