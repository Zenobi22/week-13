
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Forms() {
  return(
    <div className='Forms'>
    <Form.Group className="mb-3" controlId="formBasicEmail"><br/>
    <Form.Label>Email address</Form.Label><br/>
    <Form.Control type="email" placeholder="           Enter email " /><br/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword"><br/>
    <Form.Label>Password</Form.Label><br/>
    <Form.Control type="password" placeholder="             Password " />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox"><br/>
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
    </div>
);
}
        
  
   

        
