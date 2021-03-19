import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginUser} from '../store/appSlice';
import {Form, Input, Button} from 'antd';


const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = () => {

    dispatch(loginUser({email, password}));
  };
  return (
    <Form
      name="basic"
      onFinish={handleSubmit}
      //onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
      >
        <Input
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
      >
        <Input.Password
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>




    </Form>

  );
};

export default Login;
