Parse.initialize("sCWdtdzaD7OqfCbYsU0fBfbzygAoy9mX3fVnViIk", "mEs97toJbnvGOPpEAhN5KIDvlOMk5rAOAtWWwq25");

Parse.Analytics.track('visit_search', {});

function signUp() {

  var email = document.getElementById('email').value;
  if (!email) return;

  disableSignupBtn();

  var user = new Parse.User();
  user.set("username", email);
  user.set("password", email);
  user.set("email", email);

  user.signUp(null, {
    success: function(user) {
      notifySignUpSucceeded(email);
    },
    error: function(user, error) {
      notifySignUpSucceeded(email);
    }
  });
}

function disableSignupBtn () {
  var elem = document.getElementById('email-submit');
  elem.setAttribute('disabled', 'disabled');
  elem.innerHTML = 'Mengirim ...';
}

function notifySignUpSucceeded (email) {
  document.getElementById('email-form').style.display = 'none';
  document.getElementById('explanation-text').style.display = 'none';
  document.getElementById('sign-up-succ-text').style.display = 'inherit';
  document.getElementById('via-email').innerHTML = email;
}