// we might add more models. maybe in a different folder
const {vEntry} = require('../models')
const mongoose = require('mongoose')

    // Get All Vehicle Entries
    const getAllVEs = async (req, res) => {
        const v_entries = await vEntry.find({}).sort({createdAt: -1})
        res.status(200).json(v_entries)
    }
    
    // Create Vehicle Entry
    const createEntry = async (req, res) => {
        const {year, make, model, trim, engine, transmission} = req.body

        try {
            const v_entry = await vEntry.create({year, make, model, trim, engine, transmission})
            res.status(200).json(v_entry)
        } catch (error) {
            res.status(400).json({error_message: error.message})
        }
    } 

    // Delete Vehicle Entry
    const deleteVEntry = async (req, res) => {
        const { id } = req.params

        //check for valid id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error_message: 'Id is not valid'})
        }

        // Check for existing entry
        const indVEntry = await vEntry.findOneAndDelete({_id : id})

        if(!indVEntry) {
            return res.status(404).json({error_message: 'Vehicle entry not found!'})
        }


        res.status(200).json([indVEntry, {Message : 'Entry Successfully deleted!'}])

    }


    // update a workout
    const updateVEntry = async (req, res) =>{
        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error_message: 'Id is not valid!'})
        }

        const current_VE = await vEntry.findOneAndUpdate({_id : id}, {...req.body})

        if (!current_VE) {
            return res.status(400).json({error_message : 'Vehicle Entry does not exist!'})
        }

        const upd_VE = await vEntry.findById({_id: id})

        res.status(200).json([
            {Message: 'Entry Successfully Updated! Entry is now...'}, 
            upd_VE ])
    }


    module.exports = { getAllVEs, createEntry, deleteVEntry, updateVEntry }