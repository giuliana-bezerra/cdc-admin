import React, { Component } from 'react';
import { Table } from 'react-materialize';

export default class TableLivro extends Component {
    render() {
        return (
            <div id="tableLivro">
                <br/>
                <Table striped bordered responsive>
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
                </Table>
            </div>
        );
    }
}