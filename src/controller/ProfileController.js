
const connnection = require('../database/connection');

module.exports = {
    async listId(request,response){
        const ong_id = request.headers.authorization;
        const incidentes = await connnection('incidents').where('ong_id',ong_id).
        select('*');

        return response.json(incidentes);
    }
}