const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    createNewThought,
    deleteThought,
    updateThought,
    deleteReaction,
    createNewReaction,
} = require('../../controllers/thoughtsController');

router.route('/')
.get(getAllThoughts)
.post(createNewThought);

router.route('/:ThoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

router.route('/:ThoughtId/reactions')
.post(createNewReaction);

router.route('/:ThoughtId/reactions/:reactionID')
.delete(deleteReaction)


module.exports = router;