const Neode = require('neode');
const neode = require('../config/db');
const User = require('./User');
const Chat = require('./Chat');

const Message = neode.model('Message', {
    uid: { type: 'uuid', primary: true },
    text: { type: 'string' },
    updated: { type: 'datetime', default: 'now' },
    created: { type: 'datetime', default: 'now' },
    user: {
        type: 'relationship',
        target: 'User',
        relationship: 'SENT',
        direction: 'in',
    },
    chat: {
        type: 'relationship',
        target: 'Chat',
        relationship: 'HAS_MESSAGE',
        direction: 'in',
    },
});

module.exports = Message;
