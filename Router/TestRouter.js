const express=require('express')

const CreateEmp = require('../Controller/HashedPassword')
const CreateUser = require('../Controller/CreateUser')
const getitems = require('../Controller/Getdetails')
const getempdetails = require('../Controller/getempdetails')
const CreateUser2 = require('../Controller/HashedPassword2')
const CreateUser3 = require('../Controller/HashedPassword3')
const CreateUser4 = require('../Controller/Tokengeneration')
const protect = require('../Middlewares.js/Token')
const Update = require('../Controller/Update')
const Delete = require('../Controller/Delete')
//const CreateEmp1 = require('../Controller/CreateEmp')


const router=express.Router()
const middleware=[protect]
//router.route('/').post(CreateUser)
//router.route('/emp').post(CreateEmp1)
//router.route('/:id').get(getitems)
//router.route('/:id').get(getempdetails)
//router.route('/firstname').get(getempdetails)
//router.route('/').get(getempdetails)
//router.route('/').post(CreateEmp)
//router.route('/').post(CreateUser2)
//router.route('/').post(CreateUser3)
//router.route('/').get(CreateUser4)
//router.route('/jwt').get(middleware,CreateUser4)
//router.route('/').put(Update)
//router.route('/:id').put(Update)
//router.route('/').delete(Delete)
router.route('/:id').delete(Delete)

module.exports=router