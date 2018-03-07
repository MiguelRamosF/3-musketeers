#!/usr/bin/env node

// modules
const Conf = require('conf');
const helpers = require('./helpers.js');
const cash = require('./cash.js');

const config = new Conf();

// get all the parameters given
const argv = process.argv.slice(2);

// call the module 'helpers' with argv as parameter
helpers(argv);

// object command that contains the 'amount', the source currency ('from') and the target currencies ('to')
const command = {
  'amount': argv[0] || 1,
  'from': argv[1] || config.get('defaultFrom', 'USD'),
  'to':
    argv.length > 2
      ? process.argv.slice(4)
      : config.get('defaultTo', ['USD', 'EUR', 'GBP', 'PLN'])
};

// call the module 'cash' with command as parameter
cash(command);