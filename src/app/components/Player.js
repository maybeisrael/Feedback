import React from 'react'
import { Container } from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';  

export default function Player() {
  return (
    <div><h1>MY YOUTUBE</h1>
        <Container>
        <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
    
        </Container>

    </div>
  )
}
