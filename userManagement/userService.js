const getAllUsers = (req, res) => {
    res.send('you want to get all users')
} 
const registerUser = (req, res) => {
    res.send('you want to register as a user')
} 
const loginUser = (req, res) => {
    res.send('you want to login')
} 

module.exports = {
    getAllUsers,
    registerUser,
    loginUser
}