var moment = require('moment');
let BaseRepository = require('../../common/base-repository');

class RefreshTokenRepository extends BaseRepository {
    constructor(){
        super('oauth_refresh_tokens');
    }

    findByRefreshToken(refreshToken){
        this._model.findOne({ where: { refresh_token: refreshToken } }).then( result => {
            if(result != null){
                let data = result.dataValues;
                let dateNow = moment.utc(Date.now()).format();
                if(data.expires_at < dateNow) return done(null, false);
                return done(null, true);
            }else{
                return done(null, false);
            }
        })
        .catch(error => {
            return done(error);
        });
    }
    
}

module.exports = RefreshTokenRepository.getInstance();