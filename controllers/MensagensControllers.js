import MensagensModels from "../models/MensagensModels.js";

class MensagensControllers{
    getMensagensByUsers(idUsersArray){
        return MensagensModels.getMensagensByUsers(idUsersArray)
    }

    postNewMessage(msg, id){
        return MensagensModels.postNewMessage(msg, id)
    }
}

export default new MensagensControllers()