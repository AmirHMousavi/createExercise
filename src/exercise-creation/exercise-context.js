import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {editCategory, editWordIndex, editSentence} from '../actions/edit-exercise-solution';

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
        this.editWordIndex = this.editWordIndex.bind(this);
        this.editCategory = this.editCategory.bind(this);
        this.editSentence = this.editSentence.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getReadyToEdit=this.getReadyToEdit.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    editWordIndex(e) {
        this.props.editWordIndex(parseInt(e.target.value, [10]));
    }
    editCategory(e) {
        this.props.editCategory(e.target.value, e.target.id);
    }
    getReadyToEdit(e){
        e.preventDefault();
        this.setState({inputText:this.state.sentenceArray.join(" ")})
        this.setState({sentenceArray:[]})
        this.props.editWordIndex(null);
        this.props.editCategory(null, null);
        this.props.editSentence(null)
        
    }
    editSentence(e) {
        let errors = {};
        if (this.state.inputText.length < 1) {
            errors.sentence = 'OBS! ingen mening tillgänglig';
            this.setState({errors})
        }else if(this.state.sentenceArray.length>0){
            errors.sentence = 'OBS! det är något lägre, tryck pennan';
            this.setState({errors})
        }else{
            this.props.editSentence(this.state.inputText);
            this.setState({errors:{}})
            this.setState({inputText:''})
        }
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
                    ? {color: this.state.category.color}: {}}
                    onClick={this.editWordIndex}>{word}</button>
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
                        style={{color: category.color,fontWeight: 'bold'}}
                        value={category.value}
                        id={category.color}
                        onClick={this.editCategory}>{category.value}</button>
                );
            });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.Exercise !== nextProps.Exercise) {
            if (nextProps.Exercise.sentence) {
                this.setState({
                    sentenceArray: nextProps.Exercise.sentence.trim().split(" ")
                });
            }
        }
        if (this.props.Solution !== nextProps.Solution) {
            this.setState({category: nextProps.Solution.category});
            this.setState({groupParts: nextProps.Solution.groupParts[0]})
        }
    }
    render() {
        let {sentenceArray, errors} = this.state
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
                        onKeyPress={this.onKeyPress}/>
                        {errors.sentence && <span className="help-block">{errors.sentence}</span>}
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-info" onClick={this.editSentence}>
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
    editCategory: PropTypes.func.isRequired,
    editWordIndex: PropTypes.func.isRequired,
    editSentence: PropTypes.func.isRequired
}
export default connect(mapStateToProps, {editCategory, editWordIndex,editSentence})(Context);