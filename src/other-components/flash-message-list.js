import React from 'react';
import {connect} from 'react-redux';
import FlashMessage from './flash-message';
import {deleteFlashMessage} from '../actions/flash-messages'

class FlashMessagesList extends React.Component {
    render() {
        const messages = this.props.messages.map(message => <FlashMessage
                key={message.id}
                message={message}
                deleteFlashMessage={this.props.deleteFlashMessage}/>);
        return (
            <div>{messages}</div>
        );
    }
}

FlashMessagesList.propTypes = {
    messages: React.PropTypes.array.isRequred,
    deleteFlashMessage: React.PropTypes.func.isRequired
}
function mapStateToProps(state) {
    return {messages: state.flashMessages}
}

export default connect(mapStateToProps, {deleteFlashMessage})(FlashMessagesList);