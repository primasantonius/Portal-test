// in this file you can append custom step methods to 'I' object
require('dotenv').config();
module.exports = function() {
  return actor({
    login: function () {
      this.click('//*[@id="login2"]');
      this.fillField('#loginusername', process.env.USER);
      this.fillField('#loginpassword', process.env.PASS);
      this.click('//*[@id="logInModal"]/div/div/div[3]/button[2]'); 
    },
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
