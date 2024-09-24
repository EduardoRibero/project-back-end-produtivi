import UsersModels from "../models/UsersModels.js";

class UsersControllers{
    getAllUsers(){
        return UsersModels.getAllUsers()
    }

    getUserById(id){
        return UsersModels.getUserById(id)
    }

    updateUser(userNew, id){
        return UsersModels.updateUser(userNew, id)
    }

    postUser(user){
        return UsersModels.postUser(user)
    }

    deletUserById(id){
        return UsersModels.deletUserById(id)
    }
}

export default new UsersControllers()