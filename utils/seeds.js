const connection = require('../config/connection');
const mongoose = require('mongoose');
const {User, Thought} = require('../models');

const users = [
    {
        username: 'mindreader',
        email: 'mr@email.com',
        thoughts: [],
    },
    {
        username: 'gwinter',
        email: 'gw@email.com',
        thoughts: [],
    }
];

connection.once('open', async () => {
    await User.deleteMany({});
    await User.insertMany(users);

    console.log('data seeded');
    process.exit(0);
});