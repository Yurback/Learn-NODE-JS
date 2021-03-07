const express = require('express');
const { body, validationResult } = require('express-validator');

const authController = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login',
  [
    body('email')
      .isEmail()
      .withMessage('Проверьте правильность указания e-mail и повторите попытку')
      .normalizeEmail()
    ,
    body('password')
      .isLength({min:5})
      .withMessage('Неккоректно введен пароль')
      .trim()
  ],

authController.postLogin);

router.post('/signup',
  [
    body('email')
      .isEmail()
      .withMessage('Пож-та введите корректный e-mail')
      .custom((value, { req }) => {
        // if (value==='test@test.com') {
        //     throw new Error('This email address if forbidden');
        // }
        // return true
        return User.findOne({ email: value })
          .then(userDoc => {
            if (userDoc) {
              throw new Error('E-mail уже существует, укажите другой');
              // или можно указать --- return Promise.reject('E-mail уже существует, укажите другой')
            };
          });
      })
      .normalizeEmail()
    ,
    body('password', 'Пожалуйста введите пароль длиной не менее 5 символов')
      .isLength({ min: 5 })
    // .isAlphanumeric()
      .trim()
    ,
    body('confirmPassword').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Пароли должны совпадать')
      }
      return true
    })

  ],
  authController.postSignup
);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;