import { model, Schema } from "mongoose";
import { TNote } from "../interface/note.interface";

const noteSchema = new Schema<TNote>(
    {
        title: { type: String, required: true, trim: true },
        content: { type: String, default: "" },
        category: {
            type: String,
            enum: ["personal", "work", "study", "other"],
            default: 'personal'
        },
        pinned: { type: Boolean, default: false },
        tag: {
            label: { type: String, require: true },
            color: { type: String, default: 'gray' }
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

export const NoteModel = model<TNote>('Note', noteSchema)