import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TasksPage from './src/components/TasksPage'

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.mockTasks = [
            {
                id: 1,
                title: 'Learn Redux',
                description: 'The store, actions, and reducers, oh my!',
                status: 'In Progress'
            }, {
                id: 2,
                title: 'Peace on Earth',
                description: 'No big deal.',
                status: 'In Progress'
            }
        ]
    }

    render() {
        return (
            <div className="main-content">
                <TasksPage tasks={this.mockTasks}/>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
