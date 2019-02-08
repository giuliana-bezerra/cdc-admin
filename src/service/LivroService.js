import HttpService from "./HttpService";

export default class LivroService extends HttpService {
    listar() {
        return new Promise((resolve, reject) => {
            this.get('http://localhost:8080/api/livros')
            .then(resolve)
            .catch(err => reject('Não foi possível buscar os livros.'));
        });
    }

    gravar(livro) {
        return new Promise((resolve, reject) => {
            this.post('http://localhost:8080/api/livros', livro)
            .then(resolve)
            .catch(err => reject(this.getErrorMessage()));
        });
    }
}