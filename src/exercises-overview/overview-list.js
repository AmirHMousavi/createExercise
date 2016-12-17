import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchAllExercises} from '../actions/all-exercises';
import {deleteOneExercise} from '../actions/one-exercise';

class OverViewList extends Component {
    componentDidMount() {
        this.props.fetchAllExercises();
    }

    checkExeType(type) {
        switch (type) {
            case 'PART_OF_SPEECH':
                return 'OrdKlassar';
            default:
                return undefined;
        }
    }

    onDeleteButton = (key) => {
        this.props.deleteOneExercise(key);
    }
    sliceTheSentence(sentence, index) {
        var splitedSentece = sentence.split(" ");
        var slice1 = splitedSentece.slice(0, index);
        var slice2 = splitedSentece.slice(index, index + 1);
        var slice3 = splitedSentece.slice(index + 1, splitedSentece.length);
        return [
            slice1.join(" "),
            slice2.join(" "),
            slice3.join(" ")
        ];
    }
    renderExercises() {
        return Object.keys(this.props.AllExercises)
            .map(_key => {
                let exercise = this.props.AllExercises[_key];
                let boldWordIndex = exercise.solutionGroups[0].groupParts[0].selectedWordIndex;
                let slicedSentence = this.sliceTheSentence(exercise.sentence, boldWordIndex);
                return (
                    <tr key={_key}>
                        <td>{exercise.id}</td>
                        <td>{this.checkExeType(exercise.exerciseType)}</td>
                        <td>
                            -
                        </td>
                        <td>{slicedSentence[0]}
                            <b>&nbsp;{slicedSentence[1]}</b>&nbsp;{slicedSentence[2]}</td>
                        <td>{exercise.rightAnswersNumber}</td>
                        <td>{exercise.wrongAnswersNumber}</td>
                        <td>{exercise.rightAnswersNumber + exercise.wrongAnswersNumber}</td>
                        <td>0 %</td>
                        <td>
                            <Link to={`uppgift/${_key}`}>
                                <button
                                    type="button"
                                    className="btn btn-primary">
                                    <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                </button>
                            </Link>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={this.onDeleteButton.bind(this, _key)}>
                                <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                            </button>
                        </td>
                    </tr>
                );
            });
    }
    render() {
        return (
            <div>
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Typ</th>
                            <th>Svårighet</th>
                            <th>Mening</th>
                            <th>Rätt</th>
                            <th>Fel</th>
                            <th>Total</th>
                            <th>Svårighet för studenter</th>
                            <th>Aktiviteter</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderExercises()}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {AllExercises: state.AllExercises}
}
OverViewList.propTypes = {
    fetchAllExercises: PropTypes.func.isRequired,
    deleteOneExercise: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {fetchAllExercises,deleteOneExercise})(OverViewList);