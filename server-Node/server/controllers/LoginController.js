
const { Farm, Pond } = require('../models');
const User = require('../models/User');
const jwt = require('jsonwebtoken')


process.env.SECRET_KEY = 'secret'



// async getById(req, res) {
//   console.log(req.params.id);
//   const farm = await Farm.findById(req.params.id);
//   res.send(farm);
// },

module.exports = {
	async login(req, res) {
   

        console.log("test message")
        //const test = await User.findOne(req.params.first_name);
       
         User.findOne({
          email: req.body.email
        })
          .then(user => {
            if (user) {
              const payload = {
                _id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email
              }
              console.log("test message token")
              let token = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: 1440
              })
            console.log(token)
             
              res.json({ token: token })
            } else {
              res.json({ error: 'User does not exist' })
            }
          })
          .catch(err => {
            res.send('error: ' + err)
          })
		
    },
    
	async profile(req, res) {
    console.log(req);
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    _id: decoded._id
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
}


	                                                                                                                                                    

};   