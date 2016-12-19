import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import classnames from 'classnames';
import {addFlashMessage,deleteFlashMessage} from '../actions/flash-messages';


class FlashMessage extends Component {   
    render() {
        let{FlashMessage}=this.props;
        if(!_.isEmpty(FlashMessage)){
            setTimeout(()=>this.props.deleteFlashMessage(),3000);
        }
        const {type, text} = this.props.FlashMessage;
        return (
            <div
                className={classnames('alert', {
                'alert-success': type === 'success',
                'alert-danger': type === 'error'
            })}>
                {text}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{FlashMessage:state.FlashMessage}
}

FlashMessage.propTypes = {
    deleteFlashMessage: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

export default connect(mapStateToProps,{addFlashMessage,deleteFlashMessage})(FlashMessage);