/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {};

var idAutor = 2;
var idLivro = 2;

var autores = [
    { id : 1, nome : 'Giuliana', email : 'giu@teste.com.br', senha : 123}
];

var livros = [
    { id: 1, titulo: 'A divina comédia', preco: 59.90, autor: { id : 1, nome : 'Giuliana', email : 'giu@teste.com.br', senha : 123} }
];


api.listaLivros = function(req, res) {
    res.json(livros);
};

api.cadastraLivro = function(req, res) {
   var livro = req.body;
   console.log(livro);
   livro['id'] = idLivro;
   livro['autor'] = autores
    .filter(autor => autor.id == livro.autorId)[0];
   livros.push(livro);
   console.log(livros);
   idLivro++;
   res.status(200).json(livros);
};

api.listaAutores = function(req, res) {
    res.json(autores);
};

api.cadastraAutor = function(req, res) {
   var autor = req.body;
   autor['id'] = idAutor;
   autores.push(autor);
   idAutor++;
   res.status(200).json(autores);
};

module.exports = api;