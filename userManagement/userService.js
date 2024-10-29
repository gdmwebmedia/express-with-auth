const db = require('../db_config/dbInit')

const getAllUsers = (req, res) => {
    res.send('you want to get all users')
} 
const registerUser = async (req, res) => {
    const { email, password } = req.body

    const newUser = {
        email: email,
        password: password
    }
    try {
        const addedUser = await db.collection('users').add(newUser)

        // Get the data of the newly created document
        const userDoc = await addedUser.get()
        const userData = userDoc.data()
        
        console.log('New user ID:', addedUser.id)
        console.log('New user data:', userData)

        res.status(201).json({
            id: addedUser.id,
            ...userData
        })

    } catch(error) {
        res.status(500).send(JSON.stringify(error))
    }

} 
const loginUser = (req, res) => {
    res.send('you want to login')
} 

module.exports = {
    getAllUsers,
    registerUser,
    loginUser
}