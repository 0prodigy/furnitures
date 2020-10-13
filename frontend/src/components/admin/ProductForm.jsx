import React from "react";
import styled from "styled-components";
import MultiSelect from "./MultiSelect";
import { ProductContext } from "../../context/ProductContext";
import { Component } from "react";

const Wrapper = styled.div`
  padding: 10px 0 40px;
  color: #306f41;
  h1 {
    margin-bottom: 2.4rem;
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

const Form = styled.form`
  input[type="text"],
  input[type="email"],
  textarea,
  .label,
  .bar,
  .auto-textarea,
  button,
  [type="checkbox"]:not(:checked) + label:before,
  [type="checkbox"]:checked + label:before {
    -webkit-transition: all 0.25s ease-out;
    -moz-transition: all 0.25s ease-out;
    transition: all 0.25s ease-out;
  }

  .row {
    float: left;
    display: block;
    margin-right: 2.3576520234%;
    width: 100%;
    position: relative;
    margin-bottom: 2.5rem;
  }
  .row:last-child {
    margin-right: 0;
  }

  .button-wrapper {
    float: left;
    display: block;
    margin-right: 2.3576520234%;
    width: 100%;
  }
  .button-wrapper:last-child {
    margin-right: 0;
    margin-bottom: 50px;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    border: 0;
    border-bottom: 1px solid #929292;
    box-shadow: 0px 1px 0px #fff;
    color: #929292;
    display: block;
    font-size: 1.3rem;
    font-weight: 300;
    height: 30px;
    vertical-align: middle;
    width: 100%;
  }
  input[type="text"]::placeholder,
  input[type="email"]::placeholder,
  textarea::placeholder {
    opacity: 0;
  }
  input[type="text"]::-webkit-input-placeholder,
  input[type="email"]::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: #ddd;
    font-family: "Lato";
    opacity: 0;
  }
  input[type="text"]:focus,
  input[type="text"]:valid,
  input[type="email"]:focus,
  input[type="email"]:valid,
  textarea:focus,
  textarea:valid {
    outline: 0;
  }
  input[type="text"]:focus::placeholder,
  input[type="text"]:valid::placeholder,
  input[type="email"]:focus::placeholder,
  input[type="email"]:valid::placeholder,
  textarea:focus::placeholder,
  textarea:valid::placeholder {
    opacity: 1;
  }
  input[type="text"]:focus::-webkit-input-placeholder,
  input[type="text"]:valid::-webkit-input-placeholder,
  input[type="email"]:focus::-webkit-input-placeholder,
  input[type="email"]:valid::-webkit-input-placeholder,
  textarea:focus::-webkit-input-placeholder,
  textarea:valid::-webkit-input-placeholder {
    opacity: 1;
  }

  .label {
    color: #306f41;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: bold;
    position: absolute;
    pointer-events: none;
    top: 8px;
  }

  .bar {
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    position: relative;
    left: 50%;
    height: 2px;
    width: 0%;
    display: block;
    background: #306f41;
    top: -1px;
    z-index: 1;
  }

  /* active state */
  .input:focus ~ label,
  .input:valid ~ label,
  textarea:focus ~ label,
  textarea:valid ~ label {
    top: -20px;
    font-size: 0.75rem;
    color: #009688;
  }

  .trigger ~ label {
    color: red;
  }

  input[type="text"]:focus ~ .bar,
  input[type="text"]:valid ~ .bar,
  input[type="email"]:focus ~ .bar,
  input[type="email"]:valid ~ .bar,
  textarea:focus ~ .bar,
  textarea:valid ~ .bar {
    width: 100%;
  }

  .auto-textarea {
    resize: none;
    overflow: hidden;
    line-height: 1.6;
    height: 60px;
    padding-bottom: 0.5rem;
  }

  button {
    width: 100%;
    background: #306f41;
    border: 0;
    border-radius: 1.5rem;
    box-shadow: 4px 4px 5px rgba(146, 146, 146, 0.4);
    color: #fff;
    font-family: "Lato";
    font-size: 0.75rem;
    letter-spacing: 0.75px;
    padding: 0.5rem 2.5rem;
    text-transform: uppercase;
    font-weight: bold;
  }
  button:hover {
    background: #466e73;
  }

  .checkbox-title {
    color: #306f41;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: bold;
    pointer-events: none;
    display: inline-block;
    margin-right: 1rem;
  }

  .checkbox-wrapper {
    display: inline-block;
    margin: 0 0.5rem;
  }

  select {
    padding: 10px 30px;
    margin-left: 110px;
  }
`;

export default class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      stock: false,
      material: "",
      setting: "",
      notes: "",
      size: "",
      vendor: [],
      designer: [],
      unitcost: "",
      link: "",
      color: "",
      images: "",
      description: "",
    };
  }

  updateDesigner = (id) => {
    this.setState((prevState) => ({ designer: [...prevState.designer, id] }));
  };

  handleChange = (e) => {
    const { name, value, type } = e.target;
    let val = type === "checkbox" ? !this.state.stock : value;
    this.setState({ [name]: val });
  };

  createProduct = (e) => {
    e.preventDefault();
    const value = this.context;
    const {
      name: Name,
      description: Description,
      link: Link,
      type: Type,
      vendor: Vendor,
      designer: Designer,
    } = this.state;
    const product = {
      Name,
      Description,
      Link,
      Type,
      Vendor,
      Designer,
      "Size (WxLxH)": this.state.size,
      "In stock": this.state.stock,
      "Unit cost": Number(this.state.unitcost),
      Images: [
        {
          url: this.state.images,
        },
      ],
      Materials: this.state.material.trim().split(","),
      Color: this.state.color.trim().split(","),
      Settings: this.state.setting.trim().split(","),
    };
    value.createProduct(product);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      type: "",
      stock: false,
      material: "",
      setting: "",
      notes: "",
      vendor: [],
      designer: [],
      unitcost: "",
      link: "",
      color: "",
      images: "",
      description: "",
    });
  };

  render() {
    return (
      <Wrapper>
        <h1>Add Product</h1>
        <Form onSubmit={this.createProduct}>
          <div className="row">
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Night Lamp"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="name" className="label">
              Product Name
            </label>
            <div className="bar"></div>
          </div>

          <div className="row">
            <input
              type="text"
              name="type"
              placeholder="Bookshelves"
              className="input"
              value={this.state.type}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="type" className="label">
              Type
            </label>
            <div className="bar"></div>
          </div>
          <div className="row">
            <div className="checkbox-title">In Stock</div>
            <div className="checkbox-wrapper">
              <input
                name="stock"
                type="checkbox"
                checked={this.state.stack}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row">
            <input
              type="text"
              name="images"
              className="input"
              placeholder="https://mysite.com/img/product"
              value={this.state.images}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="images" className="label">
              Image Url
            </label>
            <div className="bar"></div>
          </div>
          <div className="row">
            <input
              type="text"
              name="unitcost"
              className="input"
              placeholder="5555"
              value={this.state.unitcost}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="unitcost" className="label">
              Unit Cost
            </label>
            <div className="bar"></div>
          </div>
          <div className="row">
            <input
              type="text"
              name="material"
              className="input"
              placeholder="Add , to seprate material like Light Wood, Bold Colour"
              value={this.state.material}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="material" className="label">
              Material
            </label>
            <div className="bar"></div>
          </div>
          <div className="row">
            <input
              type="text"
              name="setting"
              className="input"
              placeholder="Add , to seprate material like Living room, Kitchen"
              value={this.state.setting}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="setting" className="label">
              Setting
            </label>
            <div className="bar"></div>
          </div>
          <div className="row">
            <input
              type="text"
              name="color"
              className="input"
              placeholder="Add , to seprate color like Green, Red, Orange"
              value={this.state.color}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="color" className="label">
              Colors
            </label>
            <div className="bar"></div>
          </div>
          <div className="row">
            <input
              type="text"
              name="size"
              className="input"
              placeholder="16 x 45 x 60"
              value={this.state.size}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="size" className="label">
              Size (WxLxH)
            </label>
            <div className="bar"></div>
          </div>
          <div className="row">
            <input
              type="text"
              name="link"
              className="input"
              placeholder="www.example.com"
              value={this.state.link}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="link" className="label">
              Link
            </label>
            <div className="bar"></div>
          </div>
          <div className="row">
            <input
              type="text"
              name="note"
              className="input"
              placeholder="Back in stock!"
              value={this.state.note}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="note" className="label">
              Notes
            </label>
            <div className="bar"></div>
          </div>
          <MultiSelect
            data={[
              { value: null, label: "Choose Here" },
              { value: "Akash", label: "Akash" },
              { value: "Mamta", label: "Mamta" },
              { value: "Others", label: "Others" },
            ]}
            name="vendor"
            label="Vendor"
          />

          <ProductContext.Consumer>
            {(value) => (
              <MultiSelect
                data={value.designers.map((designer) => {
                  const option = {
                    value: designer["fields"]["Name"],
                    label: designer["fields"]["Name"],
                    id: designer.id,
                  };
                  return option;
                })}
                name="designer"
                label="Designers"
                returnIds={this.updateDesigner}
              />
            )}
          </ProductContext.Consumer>
          <div className="row">
            <textarea
              className="auto-textarea input"
              type="text"
              name="description"
              placeholder="Product Description..."
              value={this.state.description}
              onChange={this.handleChange}
              required
            ></textarea>
            <label htmlFor="name" className="label">
              Description
            </label>
            <div className="bar"></div>
          </div>
          <div className="button-wrapper">
            <button type="submit">Add</button>
          </div>
        </Form>
      </Wrapper>
    );
  }
}

ProductForm.contextType = ProductContext;
