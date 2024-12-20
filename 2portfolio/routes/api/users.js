import express from 'express'
// import config from 'config'
import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import User from '../../models/User.js'
const router = express.Router()

// @route  GET api/users
// @desc   register user
// @access public
router.post('/users', async (req, res) => {
  //   res.send('posts route')

  const { userName, email, password } = req.body

  const secret = 'mysecretssshhhhhhh'
  const expiration = '2h'

  try {
    let user = await User.findOne({ email })

    const payload = {
      user: {
        id: user.id,
      },
    }
    console.log(user.id)
    console.log(payload)

    if (user) {
      jwt.sign(
        { data: payload },
        secret,
        { expiresIn: expiration },
        (err, token) => {
          if (err) throw err
          console.log(token)
          //   res.send('token should be here')

          return res.status(201).json({ token }).end()
        }
      )
      //   return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
    } else if (!user) {
      console.log('ehre is where it does it')
      user = new User({
        userName,
        email,
        password,
      })

      const salt = await bcrypt.genSalt(10)

      user.password = await bcrypt.hash(password, salt)

      await user.save()

      jwt.sign(
        { data: payload },
        secret,
        { expiresIn: expiration },
        // jwt.sign(
        //   payload,
        //   config.get('jwtSecret'),
        //   { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err
          console.log(token)
          res.json({ token })
        }
      )
    }
  } catch (err) {
    console.error(err.message)
    res.status(500).send('server error in /users')
  }
})

export default router
