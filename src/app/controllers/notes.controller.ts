import express, { Request, Response } from 'express';
import { NoteModel } from '../models/notes.model';

export const noteRoutes = express.Router()

noteRoutes.post('/create-note', async (req: Request, res: Response) => {
    const data = req.body
    //Approach - 1 of creating a data
    // const myNote = new Note({
    //     title: "Learning Node",
    //     // tags: {
    //     //     label: "database"
    //     // }
    // })

    // await myNote.save()

    // approach -2
    const result = await NoteModel.create(data)

    res.status(201).json({
        success: true,
        message: 'Note crate successfully!',
        data: result
    })
})

noteRoutes.get('/', async (req: Request, res: Response) => {
    const result = await NoteModel.find()

    res.status(201).json({
        success: true,
        message: 'All note retrieve successfully!',
        data: result
    })
})

noteRoutes.get('/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId
    const result = await NoteModel.findById(noteId)

    res.status(201).json({
        success: true,
        message: 'Note retrieve successfully!',
        data: result
    })
})

noteRoutes.patch('/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId
    const updateData = req.body
    console.log(noteId, updateData);
    const result = await NoteModel.findByIdAndUpdate(noteId, updateData, { new: true })

    res.status(201).json({
        success: true,
        message: 'Note update successfully!',
        data: result
    })
})

noteRoutes.delete('/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId
    const result = await NoteModel.findByIdAndDelete(noteId)

    res.status(201).json({
        success: true,
        message: 'Note Delete successfully!',
        data: result
    })
})