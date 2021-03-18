import React, {useState} from 'react';
import {Form, Input, Button} from 'antd';

const Register = () => {

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = () => {


  };
  return (
    <Form
      name="basic"
      onFinish={handleSubmit}
      //onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="name"
      >
        <Input
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="Lastname"
        name="lastname"
      >
        <Input
          value={lastname}
          onChange={event => setLastname(event.target.value)}
        />
      </Form.Item>
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
      <Form.Item
        label="Retype password"
        name="password2"
      >
        <Input.Password
          value={password2}
          onChange={event => setPassword2(event.target.value)}
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

export default Register;
