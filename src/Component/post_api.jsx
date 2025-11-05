// In follwing we Post data from fethc api and add functinality od edit Delete update save and print table and copy fnction
import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
  Table,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import "./post_api.scss";

const Post_api = () => {
  const [productAll, setproductAll] = useState([]); //for all api
  const [loader, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [productDetail, setProductDetail] = useState([]);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    FetchAllData();
  }, []);
  const toggle = () => setModal(!modal);

  // Fetch all Product List ==Get all products
  const api_url = "https://fakestoreapi.com/products";
  const FetchAllData = async () => {
    setLoading(true);
    try {
      const response = await fetch(api_url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      const json = await response.json();
      console.log("Fetch all Product data", json);
      setproductAll(json);
      setLoading(false);
    } catch (error) {
      console.error("Error Fetching data", error);
      setproductAll([]);
      setLoading(false);
    }
  };
  //Handle Input Chaange Function
  const handleInputChnage = (e) => {
    const { name, value } = e.target;
    setProductDetail((prev) => {
      const updateProduct = [...prev];
      updateProduct[name] = value;
      return updateProduct;
    });
  };
  // handle add Product Function
  const addProduct = async () => {
    setSaving(true);
    try {
      const productData = {
        category: productDetail["category"],
        price: productDetail["price"],
        description: productDetail["description"],
        title: productDetail["title"],
        image: productDetail["image"],
        review: productDetail["review"],
      };
      const response = await fetch(api_url, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(productData),
      });
      const json = await response.json();
      console.log("New Product Added", json);
      setproductAll([...productAll, json]);
      toggle();
      setProductDetail([]);
    } catch (error) {
      console.error("Error adding nEw Prouct", error);
    } finally {
      setSaving(false); // Stop loading
    }
  };

  return (
    <Fragment>
      {/*   All Api container */}
      <div>
        <h1>Post Api Code and Practice</h1>
        <Row>
          <Col md={6}>
            <h2>Fetched Product Data</h2>
          </Col>
          <Col md={6} style={{ textAlign: "end" }}>
            <Button color="warning" style={{ margin: "0px 5px" }}>
              Print
            </Button>
            <Button color="primary" onClick={toggle}>
              Add Product
            </Button>
          </Col>
        </Row>
        <div className="loader">
          {" "}
          {loader ? (
            <Spinner
              className="loaderData"
              size="lg"
              color="info"
              type="grow"
            />
          ) : null}
        </div>
        {!loader && productAll.length === 0 && (
          <div className="noData">
            <h6>No Data Found !</h6>
          </div>
        )}
        {!loader && productAll.length > 0 && (
          <Table responsive bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Price</th>
                <th>Title</th>
                <th>Description</th>
                <th>Rating</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>

            {productAll.map((product, index) => (
              <tbody key={product.id}>
                <tr>
                  <td>{product.id}</td>
                  <td>{product.category}</td>
                  <td> ${product.price}</td>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>
                    {product.rating
                      ? `${product.rating.rate} ⭐ (${product.rating.count} reviews)`
                      : "No rating available"}
                  </td>

                  <td>
                    <img
                      src={product.image}
                      alt={product.title}
                      width="100"
                      height="100"
                    />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <Button
                      color="info"
                      style={{ margin: "5px 5px", width: "80px" }}
                    >
                      {" "}
                      Edit
                    </Button>
                    <Button
                      color="danger"
                      style={{ margin: "5px 5px", width: "80px" }}
                    >
                      {" "}
                      Delete
                    </Button>
                    <Button style={{ background: "#B40BF8", width: "80px" }}>
                      {" "}
                      Copy
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        )}
      </div>
      {/* Modal Here */}
      <div>
        <Modal isOpen={modal} toggle={toggle} centered>
          <ModalHeader toggle={toggle} style={{ borderBottom: "none" }}>
            Product Detail
          </ModalHeader>
          <ModalBody>
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>Category</Label>
                    <Input placeholder="Enter category" type="select">
                      <option value="electronics">Electronics</option>
                      <option value="jewelery">Jewelry</option>
                      <option value="mens-clothing">Men's Clothing</option>
                      <option value="womens-clothing">Women's Clothing</option>
                      <option value="books">Books</option>
                      <option value="home-appliances">Home Appliances</option>
                      <option value="sports">Sports</option>
                      <option value="beauty">Beauty</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label>Price</Label>
                    <InputGroup>
                      <InputGroupText>$</InputGroupText>
                      <Input
                        autoComplete="off"
                        type="number"
                        style={{ appearance: "textfield" }}
                        name="price"
                        id="price"
                        placeholder="Product price"
                        value={productDetail["price"]}
                        onChange={handleInputChnage}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <Label>Rating (0-5)</Label>
                    <Input
                      autoComplete="off"
                      type="number"
                      name="review"
                      placeholder="Product review"
                      value={productDetail["review"]}
                      onChange={handleInputChnage}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>Title</Label>

                    <Input
                      autoComplete="off"
                      type="text"
                      placeholder="Product Title"
                      name="title"
                      id="title"
                      value={productDetail["title"]}
                      onChange={handleInputChnage}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Description</Label>

                    <Input
                      autoComplete="off"
                      type="textarea"
                      name="description"
                      id="description"
                      placeholder="Product Description"
                      value={productDetail["description"]}
                      onChange={handleInputChnage}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Upload Image</Label>

                    <Input type="file" placeholder="Product Title" />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter style={{ borderTop: "none" }}>
            {/* <Button color="success" onClick={addProduct} disabled={saving}>
              {saving ? <Spinner size="sm" "color="light /> : "Save"}
            </Button> */}
            <Button color="success" onClick={addProduct} disabled={saving}>
              {saving ? (
                <span>
                  Save
                  <Spinner
                    color="light"
                    size="sm"
                    style={{
                      width: "1rem",
                      height: "1rem",
                      borderWidth: "2px",
                    }}
                  />
                </span>
              ) : (
                "Save "
              )}
            </Button>

            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </Fragment>
  );
};
export default Post_api;
