const puppeteer = require("puppeteer");

var emailVal =
  "bravo" +
  "." +
  Math.floor(Math.random() * 9000 + 1000).toString() +
  "@gmail.com";
var passwordVal = "asdfgHjk1";
var fNameVal = "Charlie";
var sNameVal = "Harvey";

const AcceptCookies =
  "#cookie-settings-layout > div > div > div > div.ncss-row.mt5-sm.mb7-sm > div:nth-child(2) > button";
const loginBtn = "li.member-nav-item.d-sm-ib.va-sm-m > button";
const registerBtn = ".loginJoinLink.current-member-signin > a";
const email = 'input[type="email"]';
const password = 'input[type="password"]';
const fName = '.firstName.nike-unite-component.empty > input[type="text"]';
const sName = '.lastName.nike-unite-component.empty > input[type="text"]';
const dob = 'input[type="date"]';
const gender = 'li:nth-child(1) > input[type="button"]';
const submit = '.joinSubmit.nike-unite-component > input[type="button"]';

//Create Sleep function to use in Async/Await function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  var page;
  var browser;

  browser = await puppeteer.launch({
    headless: false,
    slowMo: 150
  });
  page = await browser.newPage();

  await page.setViewport({ width: 1200, height: 800 });
  await page.goto("https://www.nike.com/th/launch/");

  //await page.click(AcceptCookies);
  //console.log("Accepted Cookies...");

  await page.waitFor(1000);

  await page.click(loginBtn);

  await page.click(registerBtn);

  await page.waitFor(2000);

  console.log("email: " + emailVal);
  await page.type(email, emailVal);

  await page.type(password, passwordVal);
  console.log("password: " + passwordVal);

  await page.type(fName, fNameVal);
  console.log("Name: " + fNameVal);

  await page.type(sName, sNameVal);
  console.log("Surname: " + sNameVal);

  var DoB = "01/05/19" + Math.floor(Math.random() * (99 - 55) + 55).toString();
  await page.type(dob, DoB);
	console.log("Date: "+ DoB);

  await page.click(gender);

  await page.waitFor(500);
  await page.click(submit);
  console.log("==============================================================");

  browser.close();
  process.exit();
})();
