let BaseRepository = require('../../common/baseRepository');

class UserRepository extends BaseRepository{
    constructor(){
        super('users');
    }
    
    createUser(id){
        this._model.findById(id).then(result => {
            console.log("result", result);
        });
    }
}
module.exports = UserRepository.getInstance();