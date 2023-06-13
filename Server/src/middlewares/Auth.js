import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {User } from '../models';

const { promisify } = require('util');

const verify = promisify(jwt.verify);

dotenv.config();
const JWTSecret = process.env.JWT_SECRET;
const comparePasswd = async (enteredPassword, DB_password) => {
  // check if password match Db password
  const result = await bcrypt.compare(enteredPassword, DB_password); // return's bool
  return result;
};



// eslint-disable-next-line max-len
const generateJWT = (payload) => jwt.sign(payload, JWTSecret, { expiresIn: '7d' });

const hashPassword = (password) => bcrypt.hashSync(password, 10);


// Check if user
const userAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader == null) return res.sendStatus(401);
  
    const payload = verify(authHeader, JWTSecret);
    const user = await User.findById(payload.id);
  
    if (!user) { throw new Error('User not found'); }
  
    return next();
  };
  
  export {
    comparePasswd, generateJWT, hashPassword, auth, userAuth,
  };
  