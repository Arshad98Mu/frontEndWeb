import React,{Component} from 'react';
import Navbar from './Navbar';
import HomeContent from './HomeContent'
class Home extends Component {
    
    render() {
        return(
            <div>
                <Navbar />
                <HomeContent />
            </div>
        );
    }
}

export default Home;