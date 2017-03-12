import express from 'express';

const router = new express.Router();
const dotenv = require('dotenv').config();
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE;

const client = require('twilio')(accountSid, authToken);
let shelterPhone = process.env.SHELTER_PHONE;
let phoneNumbers = [shelterPhone];

router.get('/', (req, res) => {

  phoneNumbers.forEach(function(phoneNumber){

    client.messages.create({
        to: phoneNumber,
        from: twilioPhone,
        body: "A volunteer has agreed to pickup a package for delivery",
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