let BaseRepository = require('../../common/base-repository');

class AccessTokenRepository extends BaseRepository {
    constructor(){
        super('oauth_access_tokens');
    }

    findByToken(token, done){
        this._model.findOne({ where: { access_token: token } }).then(result => {
            if(result != null){
                return done(null, result.dataValues);
            }else{
                return done(null, null);
            }
        })
        .catch(error => {
            return done(error);
        });
    }
}

module.exports = AccessTokenRepository.getInstance();