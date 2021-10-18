const { I } = inject();

module.exports = {

  // insert your locators and methods here
  locators:{
    // login user
  inputUsername: '#loginusername',
  inputPassword: '#loginpassword'
  },
  Logn: '//*[@id="login2"]',
  btnLogin: '//*[@id="logInModal"]/div/div/div[3]/button[2]',
  
  login(username,password) {
    I.amOnPage(process.env.URLBASE);
    I.click(this.Logn);
    I.fillField(this.locators.inputUsername,username);
    I.fillField(this.locators.inputPassword,password);
    I.click(this.btnLogin);
  }
}

