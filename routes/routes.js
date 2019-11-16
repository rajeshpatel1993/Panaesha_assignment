const express = require('express');
const router = express.Router();
const Notes=require('../models/Notes');
 
router.get('/:id?',(req,res,next) =>{
    if(req.params.id){
        Notes.getNoteById(req.params.id,(err,rows) => {     
            if(err) {
              res.json(err);
            }
            else{
            res.json(rows);
            }
        });
     }
     else{
        Notes.getAllNotes((err,rows) =>{         
            if(err){
              res.json(err);
            }
            else{
            res.json(rows);
            }
        });
     }
});
 
 
router.post('/add-note',(req,res,next) =>{
    Notes.addNote(req.body,(err,count) => {
      if(err){
        res.json(err);
      }
      else{
        res.json(req.body);
        //or return count for 1 &amp;amp;amp; 0
      }
    });
 });
 
 
router.delete('/:id',(req,res,next) =>{
    Notes.deleteNote(req.params.id, (err,count) =>{
      if(err){
        res.json(err);
      }
      else{
        res.json(count);
      }     
    });
 });
 
 
router.put('/:id',(req,res,next)=>{ 
    Notes.updateNote(req.params.id,req.body, (err,rows) => {     
      if(err){
        res.json(err);
      }
      else{
        res.json(rows);
      }
    });
 });
 
 module.exports=router;