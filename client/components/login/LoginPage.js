import React from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  render() {
    return (
      <main className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm />
        </div>
      </main>
    );
  }
}

export default LoginPage;
