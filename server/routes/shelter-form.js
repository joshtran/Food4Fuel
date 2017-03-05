import ShelterForm, { deliveryValidate } from '../models/shelter-form';
import express from 'express';

const router = new express.Router();

router.post('/', (req, res) => {
  deliveryValidate(req.body).then(x => res.json(x));
})

export default router;