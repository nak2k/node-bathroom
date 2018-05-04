const { bathroom } = require('../..');
const { createStore } = require('redux');
const users = require('./users');

const result = bathroom({ users }, createStore, {});

Object.assign(exports, result);
