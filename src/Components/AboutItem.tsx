import { ListGroup } from "react-bootstrap";


export default function AboutItem({
    Heading,
    Context,
    
}: {
    Heading: string;
    Context: JSX.Element;
    
}) {
    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start mb-2"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold" >{Heading}</div>
                <div >{Context}</div>
            </div>
        </ListGroup.Item>
    );
}
