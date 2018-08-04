var bcrypt = require('bcrypt');
let BaseRepository = require('../../common/base-repository');

class UserRepository extends BaseRepository{
    constructor(){
        super('users');
    }

    createUser(username, firstName, lastName, birthday, email, phone, address, password, done){
        var hash_password = bcrypt.hashSync(password, 'blogdev.vn');
        this._model.create({ 
            username: username,
            first_name: firstName,
            last_name:  lastName,
            birth_day: birthday,
            email: email,
            phone: phone,
            address: address,
            password: hash_password
        }).then( result => {
            if(result != null) return done(null, result);
        }).catch( error => {
            return done(error);
        })
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