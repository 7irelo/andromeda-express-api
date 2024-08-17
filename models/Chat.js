const Neode = require('neode');
const neode = require('../config/db');
const User = require('./User');

const Chat = neode.model('Chat', {
    uid: { type: 'uuid', primary: true },
    text: { type: 'string', maxLength: 255 },
    updated: { type: 'datetime', default: 'now' },
    created: { type: 'datetime', default: 'now' },
    participants: {
        type: 'relationship',
        target: 'User',
        relationship: 'PARTICIPATED_IN',
        direction: 'out',
        eager: true,
    },
});

module.exports = Chat;
