const {User, Thought, reactionSchema} = require('../models');
const {Types} = require('mongoose');


module.exports = {
    
    // gets all thoughts
    async getAllThoughts  (req, res)  {
    try {
        const allThoughts = await Thought.find();
        res.json(allThoughts);
    } catch (err) {
        res.status(500).json(err);
    }
},

// gets a single thought by id
async getSingleThought(req, res) {
    try {
        const singleThought = await Thought.findOne({ _id: req.params.thoughtId });
        if (!thought) {
            res.status(400).json({ message: 'Error: not found' });
        } else {
            res.json(singleThought);
        }
    } catch (err) {
        res.status(500).json(err);
    }
},

// creates a new thought
async createNewThought(req, res) {
    try {
        const newThought = await Thought.create(req.body);
        res.status(200).json(newThought);
    } catch (err) {
        res.status(500).json(err);
    }
},

// deletes a thought by id
async deleteThought(req, res) {
    try {
        const deletedThought = await Thought.findByIdAndDelete({ _id: req.params.thoughtId });
        res.status(200).json(deletedThought);
    } catch (err) {
        res.status(500).json(err);
    }
},

// updates thoughts by id
async updateThought(req, res) {
    try {
        const updateThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
            new: true,
        });
        if (!updateThought) {
            res.status(404).json({ message: 'Error: not found' });
        } else {
            res.json(updateThought);
        }
    } catch (err) {
        res.status(500).json(err);
    }
},

// deletes reaction by id
async deleteReaction(req, res) {
    try {
        const deletedReaction = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        );
        deletedReaction ? res.json(deletedReaction) : res.status(404).json({ message: 'Error: not found.' });
    } catch (err) {
        res.status(500).json(err);
    }
},

// creates new reaction by getting a thought by id and attaching the req body.
async createNewReaction(req, res) {
    try {
        const newReaction = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        );
        newReaction ? res.json(newReaction) : res.status(404).json({ message: 'Error: not found' });
    } catch (err) {
        res.status(500).json(err);
    }
},
};
