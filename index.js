const cron = require("node-cron");

const client = require("twilio")(accountSid, authToken);
const messages = [
  "Paani piya ki nahi Dr. Saab???????",
  "Natashaaaaaaaaa!!!!!! Drink water abhiii",
  "Macha, Drink water da!!!",
  "The good thing about water is you can drink it at work. \n The good thing about Vodka is that it looks like water. \n Paani hi pina bc, vodka sirf mere saath.",
  "Drink some water you beautiful and capable but dehydrated bitch",
  "Hows your water drinking going?",
  "Dont forget to drink water and get some sun. You are basically a houseplant with more complicated emotions.",
  "Drink water with lemon, its going to fix everything",
  "OPD se bahar nikal or paani pi, fir ander chali jaana(even if you are not in OPD).",
  "Funny how drinking 8 cups of water a day seems impossible but 8 beers and 6 shots in 3 hours go down like a fat kid on seesaw. Drink you idiot.",
  "Daily reminder to stay hydrated and not give a fuck about what other people think",
  "CHUG CHUG CHUG",
  "On a serious note! DRINK WATER (thats how mayank/anjali gets me to take things seriously)",
  "Drinking more water. \n Expectations - Clear Skin \n Reality - More Pee with clear skin",
  "Dekh mene ek glass paani pi lia hh. Tu bhi pi or snap bhej warna dosti khatam bc.",
  "Arghhhhh!!! Things you do for love. For the 675456899th time - DRINK WATER !!!!!",
  "Pi le\nPi le\nPi le\nPi le\nPi le\nPi le\nPi le\nPi le\nPi le\nPi le\nPi le\nPi le\nPi le\nPiti kyu ni hh bhaisaaaaab??????? Paani pio",
  "Pani pi warna sipper wapas le jaunga (if you receive ye wala message at home then sipper se hi pina warna bottle se to pi hi lena hospital me)",
  "I am always watching you. Soooo drink!!!",
];

const sender = "whatsapp:+14155238886";
const natashasNumber = "whatsapp:+918085347609";
const myNumber = "whatsapp:+919754231666";

cron.schedule("* * * * *", () => {
  console.log("Running the cron - reminder");
  const item = messages[Math.floor(Math.random() * messages.length)];
  client.messages
    .create({
      body: item,
      from: sender,
      to: myNumber,
    })
    .then((message) => console.log(message.sid))
    .done();
  console.log("Exiting the cron - reminder");
});
