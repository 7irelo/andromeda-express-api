const User = require('../model/user');

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user.toJson());
    } catch (err) {
        res.status(400).json({ error: 'Failed to create user', details: err.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.find(req.params.id);
        if (user) {
            res.json(user.toJson());
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch user', details: err.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.all();
        res.json(users.map(user => user.toJson()));
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users', details: err.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await User.find(req.params.id);
        if (user) {
            await user.update(req.body);
            res.json(user.toJson());
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(400).json({ error: 'Failed to update user', details: err.message });
    }
};

exports.patchUser = async (req, res) => {
    try {
        const user = await User.find(req.params.id);
        if (user) {
            await user.update(req.body, true);
            res.json(user.toJson());
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(400).json({ error: 'Failed to update user', details: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.find(req.params.id);
        if (user) {
            await user.delete();
            res.json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete user', details: err.message });
    }
};
