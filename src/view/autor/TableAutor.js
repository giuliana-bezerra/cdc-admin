import React, { Component } from 'react';

export default class TableAutor extends Component {
    render() {
        return (
            <div id="tableAutor">
                <table className="pure-table pure-table-aligned">
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
                </table>
            </div>
        );
    }
}