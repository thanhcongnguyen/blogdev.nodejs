let BaseRepository = require('../../common/base-repository');

class UserRepository extends BaseRepository{
    constructor(){
        super('users');
    }
    
    findUserById(id, cb){
        this._model.findById(id).then(result => {
            if(result != null){
                return cb(null, result.dataValues);
            }else{
                cb(new Error('User ' + id + ' does not exist'));
            }     
        })
        .catch(error => {
                return cb(error);
        })
    }

    findByUsername(username, cb){
        this._model.find({where: { username: username} }).then(result => {
            if(result !== null){
                return cb(null, result.dataValues);
            }
                return cb(null, null);
        })
        .catch(error => {
                return cb(error);
        })
    }

    findById(username){
    }
}
module.exports = UserRepository.getInstance();