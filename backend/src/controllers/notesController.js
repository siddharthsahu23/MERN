import Note from "../models/notes.js";

export async function controlOfGet(req, res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error fetching notes ", error);
        res.status(500).json({ message: "Failed to fetch notes" });
    }
}


// through const 

 // or through function
export async function controlOfPOst(req, res) {
    try {
        const createNote = new Note(req.body);
        await createNote.save();
        res.status(201).json({message: "note created \n"}, createNote);
    } catch (error) {
        console.error("Error creating note ", error);
        res.status(500).json({ message: "Failed to create note" }); 
    }
}

export const controlOfPut = (req, res) => {
    res.status(200).json({ message: "put hit"})
}

export const controlOfDel = (req, res) => {
    res.status(200).json({ message : "delete hit"})
}