import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const SendMessageModal = ( props:{ show:boolean, onClose:Function })=>{
    // Message body
    const[ body, setBody ] = useState<string>('');
    // Message properties
    const[ properties, setProperties ] = useState<JSX.Element[]>([]);
    const[ propertyList, setPropertyList ] = useState<Object[]>([]);
    // User feedback
    const[ errMsg, setErrMsg ] = useState<string>('');
    const[ isError, setIsError ] = useState<boolean>(false);
    const[ disabled, setDisabled ] = useState<boolean>(false);

    return(<>
            <Modal size={'lg'} onHide={()=>{props.onClose()}} show={props.show} >
                <Modal.Header closeButton>
                    <Modal.Title>Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Message body</Form.Label>
                            <Form.Control as={'textarea'} rows={4} placeholder={'Message body'} value={body} onChange={(e)=>{setBody(e.target.value)}} disabled={disabled}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={'danger'}>Send message</Button>
                </Modal.Footer>
            </Modal>
        </>);
}

export default SendMessageModal;
