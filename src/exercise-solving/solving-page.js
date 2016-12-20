import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchAllExercises} from '../actions/all-exercises';
import {fetchOneExercise} from '../actions/one-exercise';

class ExerciseSolving extends Component {
    constructor(props){
        super(props)
        this.state={
            points:0,
            category: {},
            valid:false,
            numberOfExercises:0,
            right:0,
            wrong:0,
            currentExeNumber:1
        }
    }
    componentDidMount(){
        this.props.fetchAllExercises();
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.AllExercises!==nextProps.AllExercises){
            this.setState({numberOfExercises:Object.keys(nextProps.AllExercises).length});
        }
        if(this.props.Exercise!==nextProps.Exercise){

        }
    }
    getCurrentExerciseSentence(id){
        
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
    
    render() {
        let{points,right,wrong,currentExeNumber,numberOfExercises}=this.state
        return (
            <div>
                <h2>Här kan du göra övningar inom område <b>ordklasser</b></h2>
                <hr/>
                <h3>dina poäng: 
                    <span className="label label-info">total:{points}</span>
                    <span className="label label-danger">höger:{right}</span>
                    <span className="label label-success">fel:{wrong}</span>
                </h3>
                <div className="panel panel-default">
                    <div className="panel-heading">{currentExeNumber} of {numberOfExercises}</div>
                    <div className="panel-body">
                        {this.getCurrentExerciseSentence(currentExeNumber)}
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state){
    return{AllExercises:state.AllExercises,Exercise:state.Exercise,Solution:state.Solution}
}
ExerciseSolving.propTypes={
    fetchAllExercises:PropTypes.func.isRequired,
    fetchOneExercise:PropTypes.func.isRequired
}

export default connect(mapStateToProps,{fetchAllExercises,fetchOneExercise})(ExerciseSolving);