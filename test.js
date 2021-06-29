function myFunction() {
  if (a => 2) {
    console.log('bad');
  }
  debugger;
  
  var a = 2;

  console.log('test');
  
  variable['a'] = value;
  
  debugger;
}

function validateEmailFormat( string ) {
  var emailExpression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  return emailExpression.test( string );
}
