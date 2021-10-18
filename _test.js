require('dotenv').config();
Feature('Test skenario');

const username = process.env.USER
const password = process.env.PASS

Scenario('purchase', async ({ I, loginObjectPage }) => {
    //add to cart
    loginObjectPage.login(username, password)
    await I.click('Laptops')
    await I.click('Dell i7 8gb')
    await I.see('Product Store')
    await I.click('Add to cart')
    await I.acceptPopup()
    await I.click('Cart')

    //buat tagihan
    await I.see('Cart')
    await I.click('Place Order')
    await I.fillField('#name', 'joko')
    await I.fillField('#country', 'Indonesia')
    await I.fillField('#city', 'Yogyakarta')
    await I.fillField('#card', '1234567890')
    await I.fillField('#month', 'Januari')
    await I.fillField('#year', '2021')
    await I.click('Purchase')
    await I.see('purchase')
    await I.click('OK')
});
