var db = require('../../models');

class BaseRepository {
    constructor(model){
        if(!model){
            throw new Error('model name is empty');
        }

        if(!db[model]){
            throw new Error(`${model} is not define`);
        }

        this._model = db[model];
    }

    static getInstance(model){
        if(!BaseRepository._instance){
            BaseRepository._instance = new BaseRepository(model);
        }
        return this._instance;
    }


    create(data){
    }

    findOne(){

    }

    find(){
        console.log("find");
    }

    findOrCreate(){

    }

    findAndCountAll(){

    }

    findAll(){

    }

    count(){

    }

    findById(){

    }

    delete(){

    }
}

module.exports = BaseRepository;