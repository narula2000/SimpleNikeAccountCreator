# Simple Nike Account Creator


This is a fork which make this Repo able to make an account without using phone number in Thailand.


A simple nike account creator and verifier I made using puppeteer and request in node js,
this bot will automate creating nike accounts for you and will also also verify the mobile number so the accounts can be used to purchase shoes on Nike.com



--TO USE THIS SIMPLE NIKE ACCOUNT CREATOR--
1. Download the project.
2. In terminal navigate to the projects directory
3. Run the following command with npm installed

<b>npm install</b>

4. Now you will need to setup a getsmscode.com account for the phone verification which is required for Nike.
5. Once you have created an account you can find the token on the user information page.


These are required for the program to work correctly.


<b>--FOR UK USERS--</b>

Now go into bot.js and at the top of the program just replace the variables with your own from getsmscode.com and for the Nike account information you would like to enter.

TO RUN THE PROGRAM: in terminal type "forever bot.js" this will run the program and upon completion will restart it and run it again and again forever until you press "ctrl + C" to end the program, it does not take up much processor power so you can just run it in the background.

<b>--FOR US USERS--</b>

Now go into botUS.js and replace the variables at the top with your getsmscode account and some details you would like for the generated accounts to have.

TO RUN THE PROGRAM: in terminal type "forever botUS.js" this will run the program and upon completion will restart it and run it again and again forever until you press "ctrl + C" to end the program, it does not take up much processor power so you can just run it in the background.


Hopefully it works, it is just a very simple application without much complexity.

Enjoy.

-Andrew
