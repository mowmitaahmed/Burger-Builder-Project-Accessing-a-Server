import React, {Component} from 'react';
import './App.css';
import Layout from './components/Layouts/Layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";


class App extends Component{
    state = {
        show: true
    }

    componentDidMount() {
        setTimeout(()=> {
            this.setState({show: false})
        }, 5000);
    }

    render() {
        return (
            <div className="App">
                <Layout>
                    { this.state.show ? <BurgerBuilder /> : null }
                </Layout>
            </div>
        );
    }
}

export default App;
