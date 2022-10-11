import React, { Component } from "react";
import "./styles/App.css";
import axios from "axios";
import { connect } from "react-redux";
import { STORE_USERS,CHANGE_USER } from "../actions";
import Card from "./Card";

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
        }
    }

    componentDidMount() {
        let { store_users } = this.props

        axios.get('https://randomuser.me/api/?results=100').then(res => {
            let { data: { results } } = res
            store_users(results)
            this.setState({
                isLoaded: true
            })
        }).catch(err => {
            console.log(err)
        })
    }

    handleClick = (e) => {
        const {value} = e.target
        const {change_user} = this.props
        change_user(value)

    }

    render() {

        if (this.state.isLoaded) {
            let { users,user_index } = this.props
            let user = users[user_index]

            return (
                <div className="container">
                    <h1 className="title">My Freinds</h1>
                    <Card key={user.id} id={user.id} name={user.name} location={user.location} cell={user.cell} gender={user.gender} image={user.picture}></Card>
                    <div className="button-container">
                    <button className="next-btn btn" value={"NEXT_USER"} onClick={this.handleClick}>next</button>
                    <button className="previous-btn btn" value={"PREVIOS_USER"} onClick={this.handleClick}>previous</button>

                    </div>
               
                </div>
            )
        }
        return
    }
}
const mapDispatchToProps = () => {
    return {
        store_users: STORE_USERS,
        change_user:CHANGE_USER
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userData.users,
        user_index:state.userData.user_index
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(App);