let BaseRepository = require('../../common/base-repository');

class AccessTokenRepository extends BaseRepository {
    constructor(){
        super('');
    }

    findTokenById(id, cb){
        this._model.findById(id).then(result => {
            if(result != null){
                return cb(null, result.dataValues);
            }else{
                return cb(null, null);
            }
        })
        .catch(error => {
            return cb(error);
        });
    }
}

module.exports = AccessTokenRepository;