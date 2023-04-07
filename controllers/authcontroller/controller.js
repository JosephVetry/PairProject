const {Accounts} = require("../../models/");
const bcrypt = require('bcryptjs')

class AuthController {
    static signup(req, res) {
        res.render('signup')
    }
    static login(req, res) {
        res.render('login')
    }
    static postSignup(req, res) {
        const {email, username, password} = req.body
        
        Accounts.create({email, username, password})
            .then(data => res.redirect('/login'))
            .catch(err => res.send(err))
    }
    static postLogin(req, res) {
        const {username, password} = req.body
        console.log(username, password);
        Accounts.findOne({where : {username}})
            .then(user => {
                if(user) {
                    const id = user.id
                    const isValidPassword = bcrypt.compareSync(password, user.password)
                    if(isValidPassword) {
                        return res.render('profile', {id})
                    } else {
                        const error = 'Invalid username or password'
                        return res.redirect(`/login?error=${error}`)

                    }
                } else {
                    const error = 'Invalid username or password'
                    return res.redirect(`/login?error=${error}`)
                }
            })
            .catch(err => console.log(err))
    }

    static postProfile(req, res) {
        const {firstName, lastName, profilePicture} = req.body
    }
}


module.exports = AuthController