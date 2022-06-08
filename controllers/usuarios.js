//

const { response } = require('express');

const usuariosGet = (req, res = response) => {
    const query = req.query;
    res.json({
        msg: 'get API',
        query
    });
}

const usuariosPost = (req, res = response) => {
    const body = req.body;
    res.json({
        msg: 'post API',
        body
    });
}

const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'put API',
        id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPut,
    usuariosPatch
}