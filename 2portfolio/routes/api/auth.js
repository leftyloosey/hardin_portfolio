import express from 'express'
import auth from '../../middleware/auth.js'
import User from '../../models/User.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const router = express.Router()

// @route  GET api/users
// @desc   test route
// @access public
router.post('/auth/login', auth, async (req, res) => {
  const { userName, email, password } = req.body

  const secret = 'mysecretssshhhhhhh'
  const expiration = '2h'

  try {
    let user = await User.findOne({ email })

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'invalid password.' }] })
    }

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
    } else if (!user) {
      res.status(405).json({ errors: [{ msg: 'no such user' }] })
    }
  } catch (err) {
    console.error(err.message)
    res.status(500).send('server error in /users')
  }
})

export default router
