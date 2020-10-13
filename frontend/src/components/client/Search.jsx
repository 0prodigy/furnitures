import React, { Component } from "react";
import styled from "styled-components";
import Product from "../admin/Product";

const Wrapper = styled.div`
  background: #fdfbfc;
  font-size: 3rem;
  padding: 40px 100px;
  text-align: center;
  .close button {
    float: right;
    font-weight: 700;
    font-size: 1.8rem;
    cursor: pointer;
    border: none;
    background: transparent;
  }

  .input {
    clear: both;
  }

  .input input,
  .input button {
    font-size: 3rem;
    padding: 10px 0;
    width: 50%;
    margin: 10px auto;
    border: none;
    border-bottom: 2px solid;
  }
  .input button {
    width: 30%;
    cursor: pointer;
  }
  .heading {
    padding: 20px;
    h2 {
      font-size: 1.4rem;
    }
    a {
      font-weight: 500;
      float: right;
      font-size: 1rem;
      text-decoration: none;
    }
  }
  .products {
    clear: right;
  }
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: [],
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    console.log(this.state.query);
    this.setState({
      data: this.props.data.filter(
        (product) =>
          product.fields["Name"].indexOf(this.state.query) !== -1 ||
          product.fields["Type"].indexOf(this.state.query) !== -1
      ),
    });
  };
  render() {
    return (
      <Wrapper>
        <div className="close">
          <button onClick={this.props.handleClose}>X</button>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Search Products"
            name="query"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Search</button>
        </div>
        <div className="res">
          <div className="products">
            <div className="heading">
              <h2>
                Your Result{" "}
                <a href="/#">{this.state.data.length} product found</a>
              </h2>
            </div>
            {this.state.data.map((product) => (
              <Product
                img={product.fields.Images[0].url}
                key={product.id}
                id={product.id}
                name={product.fields["Name"]}
                description={product.fields["Description"]}
                price={"$ " + product.fields["Unit cost"]}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Search;
