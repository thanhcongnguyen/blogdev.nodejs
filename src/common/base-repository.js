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

    static getInstance(){
        let key = (this).name;
		if (!BaseRepository._instances) {
			BaseRepository._instances = {};
		}
		if (!BaseRepository._instances[key]) {
			this._instances[key] = new this();
		}

		return this._instances[key];
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

    findById(id){
        this._model.findById(id).then( result => {
            console.log("result", result.dataValues);
        });
    }

    delete(){

    }
}

module.exports = BaseRepository;