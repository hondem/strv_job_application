'use strict'

const usersData = require('./users')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return knex('users').insert(usersData);
    });
};
