const {validationResult} = require('express-validator')
let datos ={}
module.exports = {
    vista:(req, res) => {
        res.render('index', {datos:''});
      },
      saludo:(req, res) =>{
        let errors = validationResult(req)

        if(errors.isEmpty()){
          const {name, color, email, edad} = req.body
          
  
          req.session.bgColor= color
          res.locals.bgColor= color
          req.session.userName = name

          if(req.body.recordar !== undefined){
            res.cookie('color', color, {maxAge: 600 *1000})
          }

          res.render('index', {name, color, email, edad, datos:1});
        }else{
          res.render('index', { errors: errors.mapped(), old: req.body, datos:''})
        }
        
      },
      user:(req, res) =>{
        res.locals.bgColor= req.session.bgColor
        res.render('user', {userName: req.session.userName})
      },
      destroy:(req, res) =>{
        req.session.destroy()
        res.cookie('color', null, {maxAge: -1})
        res.redirect('/')
      }

}