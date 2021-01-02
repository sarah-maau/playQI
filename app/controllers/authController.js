const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');

const { User } = require('../models');

const authController = {
    signupPage: (req, res) => res.render('signup'),
    submitSignupForm: async (req, res) => {
        try {
            const errors = [];
            if (req.body.firstname.length === 0) {
                errors.push('Le prénom doit être renseigné')
            }

            if (req.body.lastname.length === 0) {
                errors.push('Le nom doit être renseigné')
            }
            
            const isValidEmail = emailValidator.validate(req.body.email);

            if (!isValidEmail) {
                errors.push('Vous devez renseigné un email valide');
            }

            if (req.body.password.length < 4) {
                errors.push('le mot de passe doit avoir au minimum 10 caractères');
            }

            if (req.body.password !== req.body.passwordConfirm) {
                errors.push('Le mot de passe et la confirmation doivent être identiques')
            }

            if (errors.length) {
                res.render('signup', {errors});
            }
            
            else {
                const user = await User.findOne({
                    where: {
                        email: req.body.email
                    }
                });

                if (user) {
                    errors.push(`L'email est déjà pris`);
                    res.render('signup', {errors});
                }
                else {
                    const hashedPassword = await bcrypt.hash(req.body.password, 10);
                    const newUser = new User({
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        email: req.body.email,
                        password: hashedPassword,
                    });
                    await newUser.save();
                    res.redirect('/');
                }
            }
        } catch (error) {
            console.trace(error);
        }
    },
    loginPage: (req, res) => res.render('login'),
    submitLoginForm: async (req, res) => {
        try {
            const errors = [];
            if (req.body.email.length === 0 || req.body.password.length === 0) {
                errors.push('Veuillez remplir tous les champs');
            }
            if (errors.length) {
                res.render('login', {errors});
            }
            else {
                const user = await User.findOne({
                    where: {
                        email: req.body.email
                    }
                });

            if (!user) {
                errors.push('Veuillez vérifier vos identifiants');
                res.render('login', {errors});
            }
            else {
                const isValidPassword = await bcrypt.compare(req.body.password, user.password);
                if (isValidPassword) {
                    req.session.user = user;
                    res.redirect('/');
                }
                else {
                    errors.push('Veuillez vérifier vos identifiants');
                    res.render('login', {errors});
                }
            }
            }
        } catch (error) {
            console.trace(error);
        }
    },
    logout: (req, res) => { 
        req.session.destroy();
        return res.redirect('/');
    }
};

module.exports = authController;