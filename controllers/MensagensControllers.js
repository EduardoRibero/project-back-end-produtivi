import MensagensModels from "../models/MensagensModels.js";

class MensagensControllers{
    getMensagensByUsers(idUsersArray){
        return MensagensModels.getMensagensByUsers(idUsersArray)
    }
}

export default new MensagensControllers()