import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchOneExercise} from '../actions/fetch-one-exercise';
import {createEmptyExercise} from '../actions/create-empty-exercise';
import {fetchAllCategories} from '../actions/fetch-all-categories';
import * as types from './exercise-types';
import ExerciseForm from './exercise-form';

class ExercisePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editeMode: false
        }
    }
    componentDidMount() {
        if (this.props.params.id === '-1') {
            this.props.createEmptyExercise(types.PART_OF_SPEECH);
        } else {
            this.props.fetchOneExercise(this.props.params.id);
            this.setState({editeMode: true})
        }
        this.props.fetchAllCategories();
    }
    render() {
        return (
            <div>
                <ExerciseForm editeMode={this.state.editeMode}/>
            </div>
        );
    }
}

ExercisePage.propTypes = {
    fetchOneExercise: PropTypes.func.isRequired,
    createEmptyExercise: PropTypes.func.isRequired,
    fetchAllCategories: PropTypes.func.isRequired
}

export default connect(null, {fetchOneExercise, createEmptyExercise,fetchAllCategories})(ExercisePage);