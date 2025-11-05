// In follwing we get data from fethc api and siaplay in table and We add funtiinality like spinnner no data Found
//  we convert image in to  base 64 to display in screen
import React, { Fragment, useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Label,
  Spinner,
  Table,
} from "reactstrap";
import "./get_api.scss";
import js from "@eslint/js";
const Get_api = () => {
  const [productAll, setproductAll] = useState([]); //for all api
  const [loader, setLoading] = useState(false);
  const [productSingle, setProductSingle] = useState([]); // for single api
  const [productLimit, setProductLimit] = useState([]);

  const [expandedCardId, setExpandedCardId] = useState(null);
  const [limitedLoader, seLimitedLoader] = useState(false);

  useEffect(() => {
    FetchAllData();
    FetchSingledata();
    FetchlimitedData();
  }, []);
  // function button expande or not
  const toggleExpand = (productId) => {
    if (expandedCardId === productId) {
      // If the card is already expanded, collapse it
      setExpandedCardId(null);
    } else {
      // Otherwise, expand the clicked card
      setExpandedCardId(productId);
    }
  };
  // Fetch all Product List ==Get all products
  const api_url = "https://fakestoreapi.com/products";
  const FetchAllData = async () => {
    setLoading(true);
    try {
      const response = await fetch(api_url, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
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

  // fethc single Product data  // Get a single product
  const api_url1 = "https://fakestoreapi.com/products/1";
  const FetchSingledata = async () => {
    try {
      const response = await fetch(api_url1, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const json = await response.json();
      console.log("Fetch Single Product data", json);
      setProductSingle(json);
      setLoading(false);
    } catch (error) {
      console.error("Error Fetching data", error);
      setProductSingle([]);
      setLoading(false);
    }
  };

  //  Limit results // Get Limited data
  const api_url2 = "https://fakestoreapi.com/products?limit=5";
  const FetchlimitedData = async () => {
    try {
      const response = await fetch(api_url2, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const json = await response.json();

      setProductLimit(json);
      console.log("Fetching Limited Data ", json);
    } catch (error) {
      console.error("Error on fethcing limited data", error);
      setProductLimit([]);
    }
  };

  return (
    <Fragment>
      {/* All Api container */}
      <div>
        <h1>Get Api Code and Practice</h1>
        <h2>Following data Is fethc All Data</h2>
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
                <td>ID</td>
                <td>Category</td>
                <td>Price</td>
                <td>Title</td>
                <td>Description</td>
                <td>Rating</td>
                <td>Image</td>
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
                </tr>
              </tbody>
            ))}
          </Table>
        )}
      </div>
      {/* ✅ Section 2: Single Product */}

      <div style={{ borderTop: "0.5px solid black", padding: "20px 0px" }}>
        <h2 className="text-center mb-4">Single Product Details</h2>

        {/* Loader while data is being fetched */}
        {loader ? (
          <div className="text-center">
            <Spinner
              className="loaderData"
              size="lg"
              color="info"
              type="grow"
            />
          </div>
        ) : productSingle ? (
          <Card className="productCardSingle">
            <div className="text-center">
              <img
                src={productSingle.image}
                width="250"
                height="250"
                alt="product image"
                style={{ padding: "15px" }}
              />
            </div>
            <CardBody>
              <CardTitle
                style={{
                  fontSize: "20px",
                  fontWeight: "800",
                  color: "#1500ff",
                }}
              >
                {productSingle.title}
              </CardTitle>
              <CardText>
                <strong>Product Id:</strong> {productSingle.id}
              </CardText>
              <CardText>
                <strong>Category:</strong> {productSingle.category}
              </CardText>
              <CardText>
                <strong>Price:</strong> ${productSingle.price}
              </CardText>
              <CardText>
                <strong>Description:</strong> {productSingle.description}
              </CardText>
              <CardText>
                <strong>Rating:</strong>{" "}
                {productSingle.rating
                  ? `${productSingle.rating.rate} ⭐ (${productSingle.rating.count} reviews)`
                  : "No Rating available"}
              </CardText>
            </CardBody>
          </Card>
        ) : (
          <p className="text-center text-danger">
            No product details available.
          </p>
        )}
      </div>

      {/* ✅ Section 3: Fetch Limited Data */}
      <div style={{ borderTop: "0.5px solid black", paddingTop: "20px" }}>
        <h2 className="text-center mb-4">Limited Fetched Product Data</h2>

        {limitedLoader ? (
          <div className="text-center">
            <Spinner
              className="loaderData"
              size="lg"
              color="info"
              type="grow"
            />
          </div>
        ) : productLimit.length === 0 ? (
          <h6 className="text-center">No Data Found!</h6>
        ) : (
          <div className="row">
            {productLimit.map((product) => (
              <div className="col-lg-6" key={product.id}>
                <Card
                  className={`productCards ${
                    expandedCardId === product.id ? "expanded" : ""
                  }`}
                >
                  <div className="text-center">
                    <img
                      src={product.image}
                      width="250"
                      height="250"
                      alt="product image"
                      style={{ padding: "15px" }}
                    />
                  </div>
                  <CardBody>
                    <CardTitle
                      style={{
                        fontSize: "20px",
                        fontWeight: "800",
                        color: "#1500ff",
                      }}
                    >
                      {product.title}
                    </CardTitle>
                    <CardText>
                      <strong>Product Id:</strong> {product.id}
                    </CardText>
                    <CardText>
                      <strong>Category:</strong> {product.category}
                    </CardText>
                    <CardText>
                      <strong>Price:</strong> ${product.price}
                    </CardText>
                    <CardText>
                      <strong>Description:</strong> {product.description}
                    </CardText>
                    <CardText>
                      <strong>Rating:</strong>{" "}
                      {product.rating
                        ? `${product.rating.rate} ⭐ (${product.rating.count} reviews)`
                        : "No Rating available"}
                    </CardText>
                  </CardBody>
                  <button
                    className="showMoreButton"
                    onClick={() => toggleExpand(product.id)}
                  >
                    {expandedCardId === product.id ? "..." : "..."}
                  </button>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ✅ Loader at the End */}
      {loader && (
        <div className="text-center mt-3">
          <Spinner size="lg" color="primary" type="grow" />
        </div>
      )}
    </Fragment>
  );
};

export default Get_api;
// import React, { Fragment, useEffect, useState } from "react";
// import { Spinner, Table } from "reactstrap";
// import "./get_api.scss";

// const Get_api = () => {
//   const [productAll, setProductAll] = useState([]);
//   const [loader, setLoading] = useState(false);
//   const [base64Images, setBase64Images] = useState({});

//   useEffect(() => {
//     FetchAllData();
//   }, []);

//   const api_url = "https://fakestoreapi.com/products";

//   const FetchAllData = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(api_url);
//       const json = await response.json();
//       setProductAll(json);

//       // Convert each image to Base64
//       const base64Map = await convertImagesToBase64(json);
//       setBase64Images(base64Map);
//     } catch (error) {
//       console.error("Error Fetching data", error);
//       setProductAll([]);
//     }
//     setLoading(false);
//   };

//   const convertImagesToBase64 = async (products) => {
//     const base64Map = {};
//     for (const product of products) {
//       try {
//         const response = await fetch(product.image);
//         const blob = await response.blob();
//         const reader = new FileReader();
//         reader.readAsDataURL(blob);
//         await new Promise((resolve) => {
//           reader.onloadend = () => {
//             base64Map[product.id] = reader.result;
//             console.log(
//               `Converted image for product ${product.id}:`,
//               reader.result
//             ); // Debugging
//             resolve();
//           };
//         });
//       } catch (error) {
//         console.error(
//           `Error converting image for product ${product.id}`,
//           error
//         );
//       }
//     }
//     return base64Map;
//   };

//   return (
//     <Fragment>
//       <h1>Get Api Code and Practice</h1>

//       <div className="loader">
//         {loader && (
//           <Spinner className="loaderData" size="lg" color="info" type="grow" />
//         )}
//       </div>

//       {!loader && productAll.length === 0 && (
//         <div className="no-data">
//           <h2>No Data Found</h2>
//         </div>
//       )}

//       {!loader && productAll.length > 0 && (
//         <Table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Category</th>
//               <th>Price</th>
//               <th>Title</th>
//               <th>Description</th>
//               <th>Rating</th>
//               <th>Image</th>
//             </tr>
//           </thead>
//           <tbody>
//             {productAll.map((product) => (
//               <tr key={product.id}>
//                 <td>{product.id}</td>
//                 <td>{product.category}</td>
//                 <td>${product.price}</td>
//                 <td>{product.title}</td>
//                 <td>{product.description}</td>
//                 <td>
//                   {product.rating?.rate} ({product.rating?.count} reviews)
//                 </td>
//                 <td>
//                   {base64Images[product.id] ? (
//                     <img
//                       src={base64Images[product.id]}
//                       alt={product.title}
//                       width="100"
//                       height="100"
//                     />
//                   ) : (
//                     <Spinner color="success" size="sm" type="grow">
//                       Loading...
//                     </Spinner>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </Fragment>
//   );
// };

// export default Get_api;
