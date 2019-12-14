const puppeteer = require("puppeteer");
const request = require("request");
const fs = require("fs");

var emailVal =
  "bravo" +
  "." +
  Math.floor(Math.random() * 9000 + 1000).toString() +
  "@gmail.com";
var passwordVal = "asdfgHjk1";
var fNameVal = "Charlie";
var sNameVal = "Harvey";
var info;
var themessage;

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

console.log("The Bot is starting...");

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
  console.log("Login Button Clicked...");

  await page.click(registerBtn);
  console.log("Register Button Clicked");

  await page.waitFor(2000);

  console.log("email: " + emailVal);
  await page.type(email, emailVal);
  console.log("entered email");

  await page.type(password, passwordVal);

  await page.type(fName, fNameVal);

  await page.type(sName, sNameVal);

  await page.type(
    dob,
    "01/05/19" + Math.floor(Math.random() * (99 - 55) + 55).toString()
  );

  await page.click(gender);

  console.log("waiting 0.5s");
  await page.waitFor(500);
  console.log("waiting done");

  await page.click(submit);
  console.log("submitted");

  browser.close();
  process.exit();
})();
