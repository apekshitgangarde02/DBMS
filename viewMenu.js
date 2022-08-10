const router = require('express').Router();
let MenuData = require('../models/menu.model');
function getCurrentDate(){
    const separator = "-";
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }
router.route('/add').get((req,res) => {
    const date = getCurrentDate()
    MenuData.find({date: date})
        .then(menuData => res.json(menuData))
        .catch(err => res.status(400).json('Error: '+ err));
});
  
module.exports = router;