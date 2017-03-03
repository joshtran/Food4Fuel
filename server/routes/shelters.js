import Shelter, { getAllShelters } from '../models/shelter';
import express from 'express';

const router = new express.Router();

router.get('/', (req, res) => {
  getAllShelters().then(shelters => res.json(shelters));
});


export default router;