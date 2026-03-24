const Note = require("../models/note");
const CryptoJS = require("crypto-js");

module.exports.getNotes = async(req, res) => {

    if (!req.userId) {
        console.log("user not found");
        return res.status(401).json({ message: "Unauthorized User" });
    } else {

        const notes = await Note.find({ userId: req.userId });
        const decryptNote=notes.map((note)=>{

            const bytes = CryptoJS.AES.decrypt(note.text, process.env.CRYPTO_SECRET);
            const originalText = bytes.toString(CryptoJS.enc.Utf8);
            note.text=originalText;
            return note;
        });

        return res.json({ message: "All notes", notes: decryptNote });
    }
};

module.exports.createNote = async(req, res) => {

    const { newNote } = req.body;
    const ciphertext = CryptoJS.AES.encrypt(newNote.text, process.env.CRYPTO_SECRET).toString();
    newNote.text=ciphertext;
    const note = new Note({...newNote, userId: req.userId });
    await note.save();
    return res.json({ message: "Notes add Successfully" });
};

module.exports.deleteNote = async(req, res) => {

    if (!req.params.id) {

        return res.status(401).json({ message: "Id is required" });
    }
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
};
