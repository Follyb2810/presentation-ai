import {Accordion, Container} from 'react-bootstrap';
import {fagQuest} from '../../Data'

function Fag() {
  return (
    
    <Accordion className='bg-custom-header' style={{marginTop:'150px'}} >
       {
        fagQuest.map((quest,index)=>(
          <Accordion.Item eventKey={quest.id} key={index} className='bg-custom-header' >
        <Accordion.Header className='fs-32 bg-custom-header' >{quest.head}</Accordion.Header>
        <Accordion.Body className='fs-24  bg-custom-body'>{quest.body}</Accordion.Body>
      </Accordion.Item>
        ))
       }
      
    </Accordion>
    
  );
}

export default Fag;