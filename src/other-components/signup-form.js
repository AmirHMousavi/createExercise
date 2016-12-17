import React, {Component} from 'react';

class SignUpForm extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4">
                        <h1 className="text-center login-title">registrera dig för att ta prov</h1>
                        <div className="account-wall">
                            <img
                                className="profile-img"
                                src="https://www.shareicon.net/data/128x128/2016/09/01/822712_user_512x512.png"
                                alt=""/>
                            <form className="form-signin">
                                <input type="text" className="form-control" placeholder="Email" required autoFocus/>
                                <input type="password" className="form-control" placeholder="Password" required/>
                                <button className="btn btn-lg btn-primary btn-block" type="submit">
                                    Sign in</button>
                                <label className="checkbox pull-left">
                                    <input type="checkbox" value="remember-me"/>
                                    Remember me
                                </label>
                                <a href="#" className="pull-right need-help">Need help?
                                </a>
                                <span className="clearfix"></span>
                            </form>
                        </div>
                        <a href="#" className="text-center new-account">Create an account
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpForm;