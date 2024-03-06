const connection = require('../config/connection');
const mongoose = require('mongoose');
const {User, Thought} = require('../models');

const users = [
    {
        username: 'mindreader',
        email: 'mr@email.com',
        thought: [],
    }
];

connection.once('open', async () => {
    await User.deleteMany({});
    await User.insertMany(users);

    console.log('data seeded');
    process.exit(0);
});