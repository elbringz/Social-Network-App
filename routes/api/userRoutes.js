const router = require('express').Router();


const {
    getAllUsers,
    getSingleUser,
    createNewUser,
    updateUser,
    addFriend,
    deleteFriend,
    deleteUser,
} = require('../../controllers/userController');


router.route('/')
.get(getAllUsers)
.post(createNewUser);

router.route('/:UserId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

router.route('/:UserId/friends/:FriendId')
.post(addFriend)
.delete(deleteFriend);


module.exports = router;