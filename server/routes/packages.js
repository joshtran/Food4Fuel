import Package, { getAllPackages } from '../models/package';
import express from 'express';

const router = new express.Router();

router.get('/', (req, res) => {
  console.log('inside routes/packages.js\n');
  getAllPackages().then(x => res.json(x))
})

export default router;