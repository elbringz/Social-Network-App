const {User, Thought} = require('../models');

module.exports = {
    // gets all users
    async getAllUsers(req, res) {
        try{
            const allUsers = await User.find();
            res.json(allUsers);
        }
        catch(err) {
            return res.status(500).json(err);
        }
    },
// gets a single user by id
   async getSingleUser(req, res) {
    try{
        const singleUser = await User.findOne({
            _id: req.params.UserId
        });
        if(!singleUser) {
            return res.status(404)
        }
        res.json(singleUser);
    }
    catch(err) {
        return res.status(500).json(err);
    }
   },
// creates new user
   async createNewUser(req, res) {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    }
    catch(err) {
        res.status(500).json(err);
    }
   },
// updates user by id
   async updateUser(req, res) {
    try {
        const updatedUser = await User.findOneAndUpdate(
            {_id: req.params.UserId},
            {$set: req.body},
            {runValidators: true,
            new: true}
        );
        if(!updatedUser) {
            return res.status(404).json;
        }
        res.json(updatedUser)
    }
    catch (err) {
        res.status(500).json(err);
    }
   },
// finds user by id and deletes
   async deleteUser(req, res) {
    try{
        const deletedUser = await User.findOneAndRemove({_id: req.params.UserId});
        if(!deletedUser) {
            return res.status(404).json;
        }
        res.json(deletedUser)
   }
   catch(err) {
    res.status(500).json(err);
   }
    },
// finds user by id and adds friend to that users friends list by id
   async addFriend(req, res) {
    try {
        const user = await User.findOneAndUpdate(
            {_id: req.params.UserId},
            {$push: {friends: req.params.friendId}},
            {new: true}
        );
        if(!user) {
            return res.status(404).json;
        }
        res.json(user);
    }
    catch(err) {
        res.status(500).json(err);
    }
   },
// finds user by id and deletes friend from friends list by id
   async deleteFriend(req, res) {
    try {
        const user = await User.findOneAndUpdate(
            {_id: req.params.UserId},
            {$pull: {friends: req.params.FriendId}},
            {new: true}
        );
        if(!user) {
            return res.status(404).json;
        }
        res.json(user);
    }
    catch(err) {
        res.status(500).json(err);
    }
   }
}