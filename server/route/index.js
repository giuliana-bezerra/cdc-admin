/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = require('../api');

module.exports  = function(app) {
    app.route('/api/autores')
        .get(api.listaAutores); 
        
    app.route('/api/autores')
        .post(api.cadastraAutor);

    app.route('/api/livros')
        .get(api.listaLivros);              

    app.route('/api/livros')
        .post(api.cadastraLivro);
};