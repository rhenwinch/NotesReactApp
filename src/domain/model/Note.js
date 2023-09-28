// src/domain/models/Note.js

class Note {
  constructor(id, title, content, createdAt = new Date()) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.createdAt = createdAt;
  }

  // Optional: Add methods for updating or modifying the note
  updateTitle(newTitle) {
    this.title = newTitle;
  }

  updateContent(newContent) {
    this.content = newContent;
    this.createdAt = new Date();
  }
}

export default Note;
