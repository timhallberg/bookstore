import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import Rating from 'react-rating';
import { getBook } from './bookstoredata';//import the function to fetch each book.

/*This component shows detail of each book.*/
export const BookDetails = (props) => {
    //here we fetch the book ID that we have already sent from Bookcardview component.
    const bookID = props.match.params.bookID;

    //we fetch the book with it ID.
    const book = getBook(bookID);

    return (
        <Row className='m-2 p-2'>
            <Col sm="auto" className='p-1'>
                <img src={book.image}
                    style={{ width: "300px" }} className="bookpic" />
            </Col>
            <Col className='d-flex flex-column'>
                <div className="d-flex justify-content-between">
                    <div className='h4 mb-1'>{book.title}</div>
                    {/*here we use Rating component. the component accepts which icon to show. here we use "star" icon from FontAwesome. We have set a fixed value for the component but the value should come from the data too.*/}
                    <Rating
                        emptySymbol="far fa-star fa-lg text-warning"
                        fullSymbol="fas fa-star fa-lg text-warning"
                        initialRating={1.5}
                        readonly
                    />
                </div>

                <div className='font-weight-bold text-secondary mb-1'>{book.subtitle}</div>
                <div className='font-weight-bold text-info mb-1'>{book.author}</div>
                <div className='mb-2' style={{ flex: '1 0 100px', overflow: 'hidden' }}>
                    {book.desc}
                </div>
                <ul class="fa-ul">
                    {/*Here we use data to show different icons in the component. The syntas is "inline if" which we use for conditional rendering. */}
                    {book.isPaperBook ? <li className="mb-2 p-2"><span className="fa-li"><i class="fas fa-book-open fa-2x"></i></span>Paper Book</li> : ""}
                    {book.isAudioBook ? <li className="mb-2 p-2"><span className="fa-li"><i class="fas fa-headphones-alt fa-2x"></i></span>Audio Book</li> : ""}
                    {book.isEbook ? <li className="mb-2 p-2"><span className="fa-li"><i class="fas fa-globe fa-2x"></i></span>E-Book</li> : ""}
                </ul>
                <div>
                    <Button size='md' variant="danger">Buy {book.price} SEK</Button>
                </div>
            </Col>
        </Row>
    )
}
