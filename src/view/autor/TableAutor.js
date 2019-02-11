import React, { Component } from 'react';
import { Table } from 'react-materialize';

export default class TableAutor extends Component {
    render() {
        return (
            <div id="tableAutor">
                <br/>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.autores.map((autor => {
                                return (
                                    <tr key={autor.id}>
                                        <td>{autor.nome}</td>
                                        <td>{autor.email}</td>
                                    </tr>
                                );
                            }))
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}