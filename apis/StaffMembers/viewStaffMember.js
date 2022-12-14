const express = require('express')
const app = express()
const { staffMemberModel } = require('../../schemas')

const GetProduct = app.get('/getStaff', (req, res) => {
    staffMemberModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetProduct