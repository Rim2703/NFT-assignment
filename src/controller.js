const nftModel = require('./model')

// Create a new NFT in the database
const createNft = async (req, res) => {
    try {
        let data = req.body
        const { name, description } = data

        if (!name) return res.status(400).send({ status: false, message: "please enter name" })

        let nameExist = await nftModel.findOne({ name: name })
        if (nameExist) return res.status(400).send({ status: false, message: "this name is already exists" })

        if (!description) return res.status(400).send({ status: false, message: "please enter description" })

        let createnft = await nftModel.create(data)
        return res.status(201).send(createnft)
    }
    catch (err) {
        return res.status(500).send({ Error: err.message })
    }
}


// Get all nfts
const getAllNft = async (req, res) => {
    try {
        const nft = await nftModel.find()
        if (nft) {
            res.status(200).send({ status: true, message: "List of all NFTs", data: nft })
        } else {
            res.status(404).json({ error: 'Empty' })
        }
    }
    catch (err) {
        return res.status(500).send({ Error: err.message })
    }
}

// get particular nft
const getNftById = async (req, res) => {
    try {
        const Id = req.params.id;
        const nft = await nftModel.findById({ _id: Id })
        if (nft) {
            res.status(200).send({ status: true, data: nft })
        } else {
            res.status(404).json({ error: 'nft not found by this ID' })
        }
    }
    catch (err) {
        return res.status(500).send({ Error: err.message })
    }
}


// update nft by its id
const updateNft = async (req, res) => {
    try {
        const Id = req.params.id;

        const updatedNft = await nftModel.findOneAndUpdate(
            { _id: Id },
            req.body,
            { new: true }
        )

        if (updatedNft) {
            res.status(200).send(updatedNft)
        } else {
            res.status(404).json({ error: 'nft not found by this ID' })
        }
    } catch (err) {
        return res.status(500).send({ Error: err.message })
    }
}


// delete nft by its id
const deleteNft = async (req, res) => {
    try {
        const Id = req.params.id;
        const deletedNft = await nftModel.findOneAndDelete({ _id: Id })

        if (deletedNft) {
            res.status(200).send({ message: `NFT is successfully deleted by this id ${Id}` })
        } else {
            res.status(404).json({ error: 'nft not found by this ID' })
        }
    }
    catch (err) {
        return res.status(500).send({ Error: err.message })
    }
}

module.exports = { createNft, getAllNft, getNftById, updateNft, deleteNft }