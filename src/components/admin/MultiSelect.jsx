import React from "react";
import styled from "styled-components";

const Select = styled.select`
  max-height: 50px;
  margin-left: 110px;
  padding: 10px 30px;
  overflow: auto;

  option {
    font-size: 1rem;
    padding: 8px;
  }
`;

const Selected = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  p {
    padding: 2px 16px;
    border-radius: 25px;
    background: #ccc7c7;
    font-weight: 600;
    margin-right: 23px;
    font-size: 0.8rem;
    color: #000;
    margin-bottom: 20px;
  }
`;

class MultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multiValue: [],
      filterOptions: this.props.data,
    };
  }

  handleMultiChange = (e) => {
    const { value: option } = e.target;
    if (option !== "Choose Here") {
      this.setState((state) => {
        return {
          multiValue: [...state.multiValue, option],
          filterOptions: state.filterOptions.filter(
            (op) => op.value !== option
          ),
        };
      });
    }
  };

  render() {
    return (
      <div className="row">
        <label className="label">{this.props.label}</label>
        <Select
          name={this.props.name}
          placeholder="Filters"
          onChange={this.handleMultiChange}
          multiple={true}
        >
          {this.state.filterOptions.map((option) => (
            <option value={option.value} key={option.value} text={option.label}>
              {option.label}
            </option>
          ))}
        </Select>
        <Selected>
          {this.state.multiValue.map((option, i) => (
            <p key={i}>{option}</p>
          ))}
        </Selected>
      </div>
    );
  }
}

export default MultiSelect;
