import express from 'express';

const router = new express.Router();
const dotenv = require('dotenv').config();
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE;

const client = require('twilio')(accountSid, authToken);
let groceryPhone = process.env.TEST_PHONE1;
let shelterPhone = process.env.TEST_PHONE2;
let phoneNumbers = [groceryPhone, shelterPhone];

router.get('/', (req, res) => {

  phoneNumbers.forEach(function(phoneNumber){

    client.messages.create({
        to: phoneNumber,
        from: twilioPhone,
        body: "Joe Schmoe has agreed to pickup package A from Grocery B and deliver it to Store C",
    }, function(error, message) {
      if (!error) {
        console.log("Message sent:", message.sid, message.dateCreated);
      } else {
        console.log('Sorry, there appears to be an error.');
      }
    });
  });
});


export default router;