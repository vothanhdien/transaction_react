import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header username = {this.state.userId} onClick={()=>this.logout()}/>
                <Content userId={this.state.userId}/>
                <hr/>
                <Footer/>
            </div>
        );
    }

    constructor(props){
        super(props);

        this.state = {
            username: null,
            userId: null,
            balance: 0,
        }
    }
    logout(){
        this.props.logout();
        this.setState({
            username: null,
            userId: null,
        })
    }
}

export default App;
