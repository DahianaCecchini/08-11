const express = require('express');
const router = express.Router()


router.get('/', (req,res)=>{
    res.send([{id:1, name:'blabla'}])
})

module.export = router;