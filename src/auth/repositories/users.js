let BaseRepository = require('../../common/baseRepository');
let db = require('../../../models/users');

class UserRepository extends BaseRepository{
    constructor(model){
        super(model);
    }

    updateUser(){

    }

    deleteUser(){

    }
}

module.exports = UserRepository.getInstance('users');