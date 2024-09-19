import UsersModels from "../models/UsersModels.js";

class UsersControllers{
    getAllUsers(){
        return UsersModels.getAllUsers()
    }
}

export default new UsersControllers()