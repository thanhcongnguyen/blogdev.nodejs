let BaseRepository = require('../../common/baseRepository');

class UserRepository extends BaseRepository{
    constructor(){
        super();
    }

    updateUser(){

    }

    deleteUser(){

    }
}

module.exports = UserRepository.getInstance('users');