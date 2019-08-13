const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const User = require("../../models/user")
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')


router.post('/', (req, res) => {
  const {
    email,
    password,
    userType
  } = req.body;
console.log(userType)
  



// Simple validation
  if (!email || !password) {
    return res.status(400).json({
      msg: 'Invalid Credentials'
    });
  }
  
  // Check for existing user
  User.findOne({
      email
    })
    .then(user => {
      if (!user) return res.status(400).json({
        msg: 'User Does not exist'
      });

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) return res.status(400).json({
            msg: "invalid Credentials"
          });

          jwt.sign({
              id: user.id
            },
            config.get('jwtSecret'), {
              expiresIn: 3600
            },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  userType: userType.user
                }
               
              
              });
            
             
            }
          )
       
          
        })
    
    
    
    
      })

  
      function pageRender(userType){
        if(userType === "Barber"){
          res.send("hello")
          console.log('hello')
       
       
          if (userType === "client"){
          res.send("hello client")
        }
          
      
          }
      };
  
  
  
  
      pageRender(userType); 
  
  


});


module.exports = router;