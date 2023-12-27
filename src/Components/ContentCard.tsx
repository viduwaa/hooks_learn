import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';


export function ContentCard({location,context,photo}:{location:string,context:string,photo:string}) {
  const cardImg = photo
  return (
    <Card style={{ width: '18rem' }} className='border-black rounded'>
      <Card.Img style={{maxHeight:'150px', objectFit:"cover"}} variant="top" src={`assests/${cardImg}` }/>
      <Card.Body className='d-flex flex-column justify-content-around rounded' style={{background:"#DBE4EF"}}>
        <Card.Title>{location.toUpperCase()}</Card.Title>
        <Card.Text>
          {context}
        </Card.Text>
        <NavLink to={`/${location}`}><Button className='w-100'> Launch</Button></NavLink>
      </Card.Body>
    </Card>
  );
}
