import { Server } from 'http';
import app from './app';
import mongoose from 'mongoose';

let server: Server

async function main() {
    try {
        await mongoose.connect('mongodb+srv://noteapp:noteapp@noteapp.nbsdpqm.mongodb.net/project?retryWrites=true&w=majority&appName=noteApp');
        server = app.listen(5000, () => {
            console.log(`App is listening on port 5000`);
        })
    } catch (error) {
        console.log(error);
    }
}

main()