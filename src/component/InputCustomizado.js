import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import { Input } from 'react-materialize';

export default class InputCustomizado extends Component {
    constructor() {
        super();
        this.state = {msgErro: ''};
    }

    render() {
        return (
            <div className="pure-control-group">
                <Input {...this.props} s={12}/>
                <span className="error">{this.state.msgErro}</span>
            </div>
        );
    }
    
    componentDidMount() {
        PubSub.subscribe('error', (topico, erro) => {
            if (erro.field === this.props.name)
                this.setState({msgErro: erro.defaultMessage});
        });
        PubSub.subscribe('clearErrors', () => 
             this.setState({msgErro: ''}));
    }
    
    componentWillUnmount() {
        PubSub.unsubscribe('error');
        PubSub.unsubscribe('clearErrors');
    }
}