const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
//create
router.post('/register', async (req,res) => {
    const {title,description,date,location} = req.body;
    try{
        const newEvent = new Event({title,description,date,location});
        await newEvent.save();

        res.status(201).json({
            message: 'Event Created Successfully',
            event: newEvent,
        });


    }catch(err){
        res.status(400).json({error: err.message});
    }
});
//read
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch(err){
        res.status(500).json({error: 'Internal Server Error'});
    }

});
//update
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, date, location } = req.body;

    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            id,
            { title, description, date, location },
            { new: true }
        );

        if (updatedEvent) {
            res.json(updatedEvent);
        }else{
            res.status(404).json({ error: 'Event not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
//delete
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedEvent = await Event.findByIdAndDelete(id);

        if (deletedEvent) {
            res.json(deletedEvent);
        }else{
            res.status(404).json({ error: 'Event not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;
