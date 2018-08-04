var moment = require('moment');
let BaseRepository = require('../../common/base-repository');

class AccessTokenRepository extends BaseRepository {
    constructor(){
        super('oauth_access_tokens');
    }

    findByToken(token, done){
        this._model.findOne({ where: { access_token: token } }).then(result => {
            if(result != null){
                return done(null, true);
            }else{
                return done(null, null);
            }
        })
        .catch(error => {
            return done(error);
        });
    }

    createToken(token, uid, scope=null, done){
        let time = Date.now() + (2*24*60*60*1000);
        let expireAt = moment.utc(time).format();
        this._model.create({ access_token: token, user_id: uid, scope: scope, expires_at: expireAt }).then( result => {
            return done(null, result);
        })
        .catch( error => {
            return done(error);
        });
    }
}

module.exports = AccessTokenRepository.getInstance();