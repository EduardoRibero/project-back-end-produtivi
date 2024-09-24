import MensagensModels from "../models/MensagensModels.js";

class MensagensControllers{
    getMensagensByUsers(id){
        return MensagensModels.getMensagensByUsers(id)
    }

    postNewMessage(msg, id){
        return MensagensModels.postNewMessage(msg, id)
    }

    deleteMsgById(id){
        return MensagensModels.deleteMsgById(id)
    }
}

export default new MensagensControllers()