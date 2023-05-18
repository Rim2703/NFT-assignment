const mongoose = require('mongoose')

const nftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('NFT', nftSchema)