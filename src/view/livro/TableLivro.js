import React, { Component } from 'react';

export default class TableLivro extends Component {
    render() {
        return (
            <div id="tableLivro">
                <table className="pure-table pure-table-aligned">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Preço</th>
                            <th>Autor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.livros.map(livro =>
                                (
                                    <tr key={livro.id}>
                                        <td>{livro.titulo}</td>
                                        <td>{livro.preco}</td>
                                        <td>{livro.autor.nome}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}