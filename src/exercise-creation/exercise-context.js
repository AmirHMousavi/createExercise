import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {editeCategory, editeWordIndex, editSentence} from '../actions/edit-exercise-solution';

class Context extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: '',
            errors: {},
            category: {},
            groupParts: {},
            sentenceArray: [],
            inputClassName: ''
        }
        this.editeWordIndex = this
            .editeWordIndex
            .bind(this);
        this.editeCategory = this
            .editeCategory
            .bind(this);
        this.editeSentence = this.editeSentence.bind(this);
        this.onChange = this
            .onChange
            .bind(this);
        this.getReadyToEdit=this.getReadyToEdit.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    editeWordIndex(e) {
        this
            .props
            .editeWordIndex(parseInt(e.target.value, [10]));
    }
    getReadyToEdit(e){
        e.preventDefault();
        this.setState({inputText:this.state.sentenceArray.join(" ")})
        this.setState({sentenceArray:[]})
        this.props.editeWordIndex(null);
        this.props.editeCategory(null, null);
        this.props.editSentence(null)
        
    }
    editeSentence(e) {
        let errors = {};
        if (this.state.inputText.length < 1) {
            errors.sentence = 'ingen mening tillgänglig';
            this.setState({errors})
        }else
        {this.props.editSentence(this.state.inputText);
        this.setState({errors:{}})
        this.setState({inputText:''})}
    }
    editeCategory(e) {
        this
            .props
            .editeCategory(e.target.value, e.target.id);
    }
    renderSentence(sentenceArray) {
        var counter = -1;
        return (sentenceArray.map((word) => {
            counter += 1
            return (
                <button
                    key={counter}
                    type="button"
                    className="btn btn-default"
                    value={counter}
                    style={this.state.groupParts.selectedWordIndex === counter
                    ? {
                        color: this.state.category.color
                    }
                    : {}}
                    onClick={this.editeWordIndex}>{word}</button>
            );
        }));
    }
    renderCategories() {
        return Object
            .keys(this.props.AllCategories)
            .map(_key => {
                let category = this.props.AllCategories[_key];
                return (
                    <button
                        key={_key}
                        type="button"
                        className="btn btn-default col-xs-2"
                        style={{
                        color: category.color,
                        fontWeight: 'bold'
                    }}
                        value={category.value}
                        id={category.color}
                        onClick={this.editeCategory}>{category.value}</button>
                );
            });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.Exercise !== nextProps.Exercise) {
            if (nextProps.Exercise.sentence) {
                this.setState({
                    sentenceArray: nextProps
                        .Exercise
                        .sentence
                        .trim()
                        .split(" ")
                });
            }
        }
        if (this.props.Solution !== nextProps.Solution) {
            this.setState({category: nextProps.Solution.category});
            this.setState({groupParts: nextProps.Solution.groupParts[0]})
        }
    }
    render() {
        let {sentenceArray, category, groupParts, errors} = this.state
        return (
            <div>
                <h3>
                    <span>Mening&nbsp;</span>
                    <button className='btn btn-primary'onClick={this.getReadyToEdit}>
                        <span className="glyphicon glyphicon-pencil"></span>
                    </button>
                </h3>
                <div className="row">
                <div className="col-sm-9 col-sm-offset-1">
                <div className={classnames('input-group', {'has-error': errors.sentence})}>
                    <input
                        className="form-control"
                        name="inputText"
                        placeholder="mening"
                        type="text"
                        value={this.state.inputText}
                        onChange={this.onChange}
                        onKeyPress={this.onKeyPress}/>{errors.sentence && <span className="help-block">{errors.sentence}</span>}
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-info" onClick={this.editeSentence}>
                                <span className="glyphicon glyphicon-arrow-down"></span>
                            </button>
                        </span>
                </div>
                </div>
                </div>
                <p></p>
                <div className="btn-group" role="group" aria-label="...">
                    {this.renderSentence(sentenceArray)}
                </div>
                <hr/>
                <h3>Alternativ</h3>
                <div className="btn-group" role="group" aria-label="...">
                    {this.renderCategories()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {Exercise: state.Exercise, Solution: state.Solution, AllCategories: state.AllCategories}
}
Context.propTypes = {
    editeCategory: PropTypes.func.isRequired,
    editeWordIndex: PropTypes.func.isRequired,
    editSentence: PropTypes.func.isRequired
}
export default connect(mapStateToProps, {editeCategory, editeWordIndex,editSentence})(Context);