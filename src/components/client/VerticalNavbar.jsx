import React from 'react'
import styled from 'styled-components';
import { Component } from 'react';

const Styledsidenavbar = styled.div`
        .main-menu:hover,nav.main-menu.expanded {
            width:250px;
            overflow:visible;
            }
            
            .main-menu {
            background:#262626;
            border-right:1px solid #e5e5e5;
            position:absolute;
            top:6.2em;
            bottom:0;
            height:100%;
            left:0;
            width:60px;
            overflow:hidden;
            -webkit-transition:width .05s linear;
            transition:width .05s linear;
            -webkit-transform:translateZ(0) scale(1,1);
            z-index:1;
            }
            
            .main-menu>div {
            margin:7px 0;
            }
            
            .main-menu div {
            position:relative;
            display:block;
            width:250px;
            }
            
            .main-menu div>a {
            position:relative;
            display:table;
            border-collapse:collapse;
            border-spacing:0;
            color:#999;
             font-family: arial;
            font-size: 14px;
            text-decoration:none;
            -webkit-transform:translateZ(0) scale(1,1);
            -webkit-transition:all .1s linear;
            transition:all .1s linear;
              
            }
            
            .main-menu .nav-icon {
            position:relative;
            display:table-cell;
            width:60px;
            height:36px;
            text-align:center;
            vertical-align:middle;
            font-size:18px;
            }
            
            .main-menu .nav-text {
            position:relative;
            display:table-cell;
            vertical-align:middle;
            width:190px;
              font-family: 'Titillium Web', sans-serif;
            }
            
            .main-menu>ul.logout {
            position:absolute;
            left:0;
            bottom:0;
            }
            
            .no-touch .scrollable.hover {
            overflow-y:hidden;
            }
            
            .no-touch .scrollable.hover:hover {
            overflow-y:auto;
            overflow:visible;
            }
            
            a:hover,a:focus {
            text-decoration:none;
            }
            
            nav {
            -webkit-user-select:none;
            -moz-user-select:none;
            -ms-user-select:none;
            -o-user-select:none;
            user-select:none;
            }
            
            nav div,nav div {
            outline:0;
            margin:0;
            padding:0;
            }
            .main-menu div:hover>a,nav.main-menu div.active>a,.dropdown-menu>div>a:hover,.dropdown-menu>div>a:focus,.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus,.no-touch .dashboard-page nav.dashboard-menu div div:hover a,.dashboard-page nav.dashboard-menu div div.active a {
            color:#fff;
            transform: scale(1.5); 
            }
            .area {
            float: left;
            background: #e2e2e2;
            width: 100%;
            height: 100%;
            }
            img{
                width:40px;
                height:40px                
            }
            .nav-text{
                float:right;
                margin-top:10px;
                margin-left:20px;
            }
            .img{
                margin:60px
            }
        `;

class VerticalNavbar extends Component {
    render() {
        return (
            <Styledsidenavbar><div className="area"></div><nav className="main-menu">
                <div>
                    <div>
                        <a href="#">
                            <img src="https://cdn2.iconfinder.com/data/icons/mobile-banking-ver-3a/100/1-48-512.png"></img>
                            <span className="nav-text">Dashboard</span>

                        </a>

                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div>
                        <a href="#">
                            <img className="img" src="https://icons-for-free.com/iconfiles/png/512/facebook+logo+logo+website+icon-1320190502625926346.png"></img>

                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img className="img" src="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png"></img>
                        </a>
                    </div>

                    <div>
                        <a href="#">
                            <img className="img" src="https://png.pngtree.com/element_our/png/20181011/instagram-social-media-icon-design-template-vector-png_126996.jpg"></img>
                        </a>
                    </div>
                </div>

                <div class="logout">
                    <div>
                        <a href="#">
                            <i class="fa fa-power-off fa-2x"></i>

                        </a>
                    </div>
                </div>
            </nav></Styledsidenavbar>
        );
    }
}

class Sidebar extends Component {
    render() {
        return (
            <VerticalNavbar></VerticalNavbar>
        );
    }
}

export default Sidebar

