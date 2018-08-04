let BaseRepository = require('../../common/base-repository');

class UserRepository extends BaseRepository{
    constructor(){
        super('users');
    }
    
    findUserById(id, done){
        this._model.findById(id).then(result => {
            if(result != null){
                return done(null, result.dataValues);
            }else{
                done(new Error('User ' + id + ' does not exist'));
            }     
        })
        .catch(error => {
                return done(error);
        })
    }

    findByUsername(username, done){
        this._model.find({where: { username: username} }).then(result => {
            if(result !== null){
                return done(null, result.dataValues);
            }
                return done(null, null);
        })
        .catch(error => {
                return done(error);
        })
    }

}
module.exports = UserRepository.getInstance();