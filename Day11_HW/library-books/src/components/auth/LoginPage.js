import React, { useState } from 'react';

import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Alert from '../common/Alert';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function onFormSubmit(e) {
    e.preventDefault();

    setLoading(true);
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <div className="container my-5">
      <div className="card card-body">
        <h1>Login</h1>

        <p>Please enter your email and password to login</p>

        <form onSubmit={onFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              placeholder="Enter Email"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              placeholder="Enter Password"
            ></input>
          </div>

          <div className="d-flex justify-content-end mt-4">
            <Button type="submit" loading={loading}>
              Login
            </Button>
          </div>
        </form>

        <Alert variant='danger' className='mt-5' show={error} onHide={() => setError('')}>
          {error}
        </Alert>
      </div>
    </div>
  );
}