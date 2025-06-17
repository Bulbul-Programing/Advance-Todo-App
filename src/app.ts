import express, { Application, Request, Response } from 'express';
import { model, Schema } from 'mongoose';
import { noteRoutes } from './app/controllers/notes.controller';
import { usersRoutes } from './app/controllers/users.controller';

const app: Application = express()

app.use(express.json())
app.use('/notes', noteRoutes)
app.use('/notes', usersRoutes)

// const noteSchema = new Schema({
//     title: String,
//     content: String
// })

// const NoteModel = model('Note', noteSchema)

// app.post('/create-note', async (req: Request, res: Response) => {
//     const myNote = new NoteModel({
//         title: 'Bulbul Note',
//         content: 'none'
//     })
//     await myNote.save()
//     res.status(201).json({
//         success: true,
//         message: 'Note create successfully!',
//         note: myNote
//     })

// })



app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Note app!')
})

export default app;