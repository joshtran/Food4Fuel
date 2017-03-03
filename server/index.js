import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

import users from './routes/users';
import auth from './routes/auth';
import events from './routes/events';
import groceries from './routes/groceries';
import packages from './routes/packages';
import shelters from './routes/shelters';

import { getAllPackages } from './models/package';
import { getAllGroceries } from './models/grocery';
import { getAllShelters } from './models/shelter'


let app = express();

app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/events', events);
app.use('/api/groceries', groceries);
app.use('/api/package', packages);
app.use('/api/shelters', shelters);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/default_state.js', (req, res) => {
  Promise.all([
    getAllGroceries(),
    getAllShelters()
  ]).then(([groceries, shelters]) => {
    var state = {
      groceries,
      shelters
    };
    res.set('Content-Type', 'application/javascript');
    res.send(`var __DEFAULT_STATE = ${JSON.stringify(state)};`);
  });
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'));
