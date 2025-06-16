import express, { Application, Request, Response } from 'express';
import { model, Schema } from 'mongoose';

const app: Application = express()

const noteSchema = new Schema({
    title: String,
    content: String
})

const NoteModel = model('Note', noteSchema)

app.post('/create-note', async (req: Request, res: Response) => {
    const myNote = new NoteModel({
        title: 'Bulbul Note',
        content: 'none'
    })
    await myNote.save()
    res.status(201).json({
        success: true,
        message: 'Note create successfully!',
        note: myNote
    })

})



app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Note app!')
})

export default app;