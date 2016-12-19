import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Context from './exercise-context';
import {putEditedExercise,putEditedSolution,postNewExercise} from '../actions/one-exercise';

class ExerciseForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valid: true
        }
        this.updateAndBack=this.updateAndBack.bind(this);
        this.saveNewExercise=this.saveNewExercise.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.Solution.category.value === null || nextProps.Solution.groupParts[0].selectedWordIndex === null) {
            this.setState({valid: false})
        } else {
            this.setState({valid: true})
        }
    }

    saveNewExercise(e){
        this.props.postNewExercise(this.props.Exercise,this.props.Solution);
    }

    updateAndBack(e){
        this.props.putEditedExercise(this.props.Exercise);
        this.props.putEditedSolution(this.props.Solution);
        setTimeout(()=>this.context.router.push("/overview"),500);
    }
    render() {
        let {valid} = this.state
        let {editMode} = this.props;
        const spara = (
            <button disabled={!valid} className="btn btn-success" onClick={this.saveNewExercise}>Spara & Ny Ordklasser</button>
        )
        const uppdatera = (
            <button disabled={!valid} className="btn btn-success" onClick={this.updateAndBack}>Uppdatera & Tillbaka</button>
        )
        return (
            <div>
                <h1>Redigera Ordklasser</h1>
                <hr/>
                <Context/>
                <hr/>
                <div className="form-group">
                    {editMode
                        ? uppdatera
                        : spara}
                    <Link to="/overview">
                        <button className="btn btn-danger">Avbryt</button>
                    </Link>
                </div>
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return {Exercise: state.Exercise, Solution: state.Solution}
}
ExerciseForm.PropTypes={
    putEditedExercise:PropTypes.func.isRequired,
    putEditedSolution:PropTypes.func.isRequired,
    postNewExercise:PropTypes.func.isRequired,
}
ExerciseForm.contextTypes={
    router: PropTypes.object
}
export default connect(mapStateToProps,{putEditedExercise,putEditedSolution,postNewExercise})(ExerciseForm);