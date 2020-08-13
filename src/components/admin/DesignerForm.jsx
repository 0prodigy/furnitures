import React from "react";
import styled from "styled-components";
import MultiSelect from "./MultiSelect";
import { ProductContext } from "../../context/ProductContext";

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

export default function DesignerForm(props) {
  return (
    <Wrapper>
      <h1>Add Designer</h1>
      <Form>
        <div className="row">
          <input
            type="text"
            name="name"
            className="input"
            placeholder="John Smith"
            required
          />
          <label htmlFor="name" className="label">
            Full Name
          </label>
          <div className="bar"></div>
        </div>
        <div className="row">
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Paste Image Url https://img.com/me"
            required
          />
          <label htmlFor="name" className="label">
            Photo
          </label>
          <div className="bar"></div>
        </div>

        <div className="row">
          <input
            type="text"
            name="bio"
            className="input"
            placeholder="Designing furniture don't disturb"
            required
          />
          <label htmlFor="note" className="label">
            Bio
          </label>
          <div className="bar"></div>
        </div>
        <ProductContext.Consumer>
          {(value) => (
            <MultiSelect
              data={value.products.map((product) => {
                const option = {
                  value: product["fields"]["Name"],
                  label: product["fields"]["Name"],
                };
                return option;
              })}
              name="products"
              label="products"
            />
          )}
        </ProductContext.Consumer>

        <div className="button-wrapper">
          <button type="submit">Add</button>
        </div>
      </Form>
    </Wrapper>
  );
}
