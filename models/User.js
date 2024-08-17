const Neode = require('neode');
const neode = require('../config/db');

const User = neode.model('User', {
    uid: {
        type: 'uuid',
        primary: true
    },
    username: {
        type: 'string',
        required: true,
        unique: true
    },
    first_name: 'string',
    last_name: 'string',
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    avatar: {
        type: 'string',
        default: 'avatars/profile.png'
    },
    bio: 'string',
    password: {
        type: 'string',
        required: true
    },
    is_staff: {
        type: 'boolean',
        default: false
    },
    is_active: {
        type: 'boolean',
        default: true
    },
    is_superuser: {
        type: 'boolean',
        default: false
    },
    last_login: 'datetime',
    date_joined: 'datetime'
});

module.exports = User;
