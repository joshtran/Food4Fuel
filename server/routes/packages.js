import Package, { insertPackages } from '../models/package';
import express from 'express';

const router = new express.Router();

router.get('/', (req, res) => {
  console.log('inside routes/packages.js\n');
  insertPackages().then(x => res.json(x))
})

export default router;