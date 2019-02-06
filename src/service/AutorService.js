import HttpService from "./HttpService";

export default class AutorService extends HttpService {
    listar() {
        return new Promise((resolve, reject) => {
            this.get('http://localhost:8080/api/autores')
            .then(resolve)
            .catch(err => {
                console.log(err);
                reject('Não foi possível buscar os autores.');
            })
        });
    }

    gravar(autor) {
        return new Promise((resolve, reject) => {
            this.post('http://localhost:8080/api/autores', autor)
            .then(resolve)
            .catch(err => {
                console.log(err);
                reject('Não foi possível salvar o autor.');
            })
        });
    }
}