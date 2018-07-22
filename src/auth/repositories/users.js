let BaseRepository = require('../../common/baseRepository');

class UserRepository extends BaseRepository{
    constructor(){
        super('users');
    }
}
module.exports = UserRepository.getInstance();