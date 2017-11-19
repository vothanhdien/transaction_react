import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header username = {this.state.username} onClick={()=>this.logout()}/>
                <Content/>
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
        this.setState({
            username: null,
            userId: null,
        })
    }
}

export default App;
