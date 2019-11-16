//reference of dbconnection.js
const db=require('../db/dbconnection'); 
 
const Note={
 
 getAllNotes:function(callback){
   return db.query("Select * from notes",callback);
 },

 getNoteById:function(id,callback){
   return db.query("select * from notes where id=?",[id],callback);
 },

 addNote:function(Note,callback){
   return db.query("Insert into notes(title) values(?)",[Note.title],callback);
 },

 deleteNote:function(id,callback){
   return db.query("delete from task where id=?",[id],callback);
 },

 updateNote:function(id,Note,callback){
   return db.query("update task set title=? where id=?",[Note.title,id],callback);
 }
};
module.exports=Note;