import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDb } from "../../utilities/fakedb";
import "./Shop.css";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  // products to be rendered on the UI
  const [displayProducts, setDisplayProducts] = useState([]);
  const size = 12;
  useEffect(() => {
    fetch(
      `https://ema-jhon-node-server.vercel.app/products?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setDisplayProducts(data.products);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);

  const handleAddToCart = (product) => {
    const exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    // save to local storage (for now)
    addToDb(product.key);
  };

  const handleSearch = (event) => {
    const searchText = event.target.value;

    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setDisplayProducts(matchedProducts);
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <InputGroup className="my-3 w-50" size="lg">
              <FormControl
                placeholder="Search Product"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={handleSearch}
              />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col md={9}>
            <Row xs={1} md={4} className="g-2">
              {displayProducts.map((product) => (
                <Product
                  key={product.key}
                  product={product}
                  handleAddToCart={handleAddToCart}
                ></Product>
              ))}
            </Row>

            <Row className="pagination">
              {[...Array(pageCount).keys()].map((number) => (
                <Col className="mx-2" xs={1}>
                  <Button
                    className={number === page ? "selected" : ""}
                    key={number}
                    onClick={() => setPage(number)}
                  >
                    {number + 1}
                  </Button>
                </Col>
              ))}
            </Row>
          </Col>
          {/* cart container  */}
          <Col md={3}>
            <Cart cart={cart}>
              <Link to="/review">
                <Button variant="success">Review Your Order</Button>
              </Link>
            </Cart>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Shop;
