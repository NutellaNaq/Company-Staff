import React, {Component} from "react";
import SearchBox from '../components/SearchBox';
import CardList from "../components/CardList";
import Scroll from "../components/Scroll"



class App extends Component {

    constructor() {

        super();
        this.state = {
            people: [],
            searchfield: ''
        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>  response.json())
        .then(people =>this.setState({ people: people}));
    }


    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {

        const { people, searchfield } = this.state;
        const filteredPeople = people.filter(people =>{
            return people.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !people.length ?
             <h1>Loading ...</h1>
         : (
        <div className="tc">
        <h1>Company Staff</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <CardList people = {filteredPeople}/>
        </Scroll>
        </div>   
    );}
}


export default App;