import React from 'react'
import styled from 'styled-components';
import { Component } from 'react';
const Styledtopnavbar = styled.div`
.navigation {
  height: 100px;
  background: #262626;
}

.brand {
  position: absolute;
  padding-left: 20px;
  float: left;
  line-height: 70px;
  text-transform: uppercase;
  font-size: 1.4em;
  a,
  a:visited {
    color: $nav-font-color;
    text-decoration: none;
  }
}

.nav-container {
  max-width: 1000px;
  margin: 0 auto;
}

nav {
  float: right;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      float: left;
      position: relative;
      a,
      a:visited {
        display: block;
        padding: 0 20px;
        line-height: 70px;
        background: #262626;
        color: $nav-font-color;
        text-decoration: none;
        &:hover {
          background: $link-hover-color;
          color: $nav-font-color;
        }
        &:not(:only-child):after {
          padding-left: 4px;
          content: ' ▾';
        }
      } 
      ul li {
        min-width: 190px;
        a {
          padding: 15px;
          line-height: 20px;
        }
      }
    }
  }
}

.nav-dropdown {
  position: absolute;
  display: none;
  z-index: 1;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
}

.nav-mobile {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background: #262626;
  height: 70px;
  width: 70px;
}
img{
    background:none;
    margin-left:-200px
}
`;

class HorizontalBar extends Component {
  render() {
    return (
      <Styledtopnavbar>
        <section className="navigation">
          <div className="nav-container">
            <div className="brand">
              <a href="#!"><img width="100px" height="100px" src="https://images.template.net/wp-content/uploads/2017/01/19134257/Furniture-Logo-in-C-Design.jpg"></img>
              </a>
            </div>
            <nav>
              <div className="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
              <ul className="nav-list">
                <li>
                  <a href="#!">About</a>
                </li>
                <li>
                  <a href="#!">Services</a>
                  <ul className="nav-dropdown">
                    <li>
                      <a href="#!">Web Design</a>
                    </li>
                    <li>
                      <a href="#!">Web Development</a>
                    </li>
                    <li>
                      <a href="#!">Graphic Design</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#!">Pricing</a>
                </li>
                <li>
                  <a href="#!">Portfolio</a>
                  <ul className="nav-dropdown">
                    <li>
                      <a href="#!">Web Design</a>
                    </li>
                    <li>
                      <a href="#!">Web Development</a>
                    </li>
                    <li>
                      <a href="#!">Graphic Design</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#!">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </Styledtopnavbar>
    )
  }
}
class Topbar extends Component {
  render() {
    return (
      <HorizontalBar></HorizontalBar>
    );
  }
}
export default Topbar

