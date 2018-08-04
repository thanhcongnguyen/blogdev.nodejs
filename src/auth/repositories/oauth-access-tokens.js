var moment = require('moment');
let BaseRepository = require('../../common/base-repository');

class AccessTokenRepository extends BaseRepository {
    constructor(){
        super('oauth_access_tokens');
    }

    findByToken(token, done){
        this._model.findOne({ where: { access_token: token } }).then(result => {
            if(result != null){
                let data = result.dataValues;
                let dateNow = moment.utc(Date.now()).format();
                if(data.expires_at < dateNow) return done(null, false);
                return done(null, true);
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