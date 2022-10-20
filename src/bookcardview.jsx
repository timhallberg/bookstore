import { Card, Button, Row, Col } from "react-bootstrap";
import React from "react";
import { getBookShopData } from "./bookstoredata";//import the fucntion to fetch data.
import { Link } from "react-router-dom";

/*This component shows each book in a card. Bootstrap Card have been used in this component */
export const BookCardView = (props) => {
  //here we fetch the input parameter which are category and search phrase oy the user
  const category = props.match.params.category;
  //we use || symbol here in case the search phrase is null 
  const searchPhrase = props.match.params.searchPhrase || "";

  //Fetch all data to an array of objects
  const bookArray = getBookShopData();

  return (
    <div className="p-3">
      <Row>
        {
          /*here we use map to create a loop and show books. At the same time we filter the list if the user has chosen a category or entered a search phrase. */
          bookArray
            .filter(
              (x) =>
                (x.category == category || category == "all") &&
                x.title.toLowerCase().indexOf(searchPhrase.toLowerCase()) > -1
            )
            .map((book) => (
              <Col md="3" sm="6" xl="3" className="p-3">
                {/*each bood is shown in a card*/}
                <Card>
                  <Card.Img style={{ height: "400px" }} src={book.image} />
                  <Card.Body>
                    <div style={{ height: "100px" }}>
                      <div className="d-flex justify-content-between">
                        <Card.Title>{book.title}</Card.Title>
                        {/*here we show MyFavourite icon based on the data that we have. we make it red or empty.*/}
                        {book.isFavourite ? <i class="fas fa-heart fa-lg" style={{ color: "Red" }}></i> : <i class="far fa-heart fa-lg"></i>}
                      </div>
                      <Card.Subtitle className="text-muted text-wrap mb-2">
                        {book.subTitle}
                      </Card.Subtitle>
                    </div>
                    {/*only 100 first letters are shown*/}
                    <Card.Text>{book.desc.substring(0, 100)}...</Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button variant="danger">Buy {book.price} SEK</Button>
                      {/*The link to the detail book component. we must send BookID to the component. Otherwise the component does not know which book to show*/}
                      <Link to={"/bookdetails/" + book.bookID}><Button variant="primary">Read More</Button></Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
      </Row>
    </div>
  );
};
