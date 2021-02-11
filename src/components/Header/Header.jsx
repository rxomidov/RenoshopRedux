import React from 'react';
import {Link} from "react-router-dom";
import {
    FaPhoneSquareAlt, FaChevronDown, FaSearch, FaRecycle,
    FaRegHeart, FaShoppingCart
} from "react-icons/all";
import logo from "../../assets/images/logo.png"
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderWrapper>
            <header>
                <div className="header-top">
                    <div className="container p-0 d-flex justify-content-between">
                        <div className="header-left">
                            <Link to="/" className="d-flex align-items-center">
                                <FaPhoneSquareAlt className="mr-1"/>
                                Call: +998 99 992 28 17
                            </Link>
                        </div>
                        <div className="header-right">
                            <div className="header-dropdown">
                                <Link to="/">USD
                                    <FaChevronDown/>
                                </Link>
                                <div className="header-menu">
                                    <ul>
                                        <li>
                                            <Link to="/">SUM</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link to="/">USD</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="header-dropdown">
                                <Link to="/">English
                                    <FaChevronDown/>
                                </Link>
                                <div className="header-menu">
                                    <ul>
                                        <li>
                                            <Link to="/">English</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link to="/">Russian</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link to="/">Uzbek</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <Link to="/">Sign In / Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-middle">
                    <div className="container">
                        <div className="header-left">
                            <Link to="/">
                                <img src={logo} alt="logo"/>
                            </Link>
                        </div>
                        <div className="header-middle-middle">
                            <div className="header-search">
                                <form action="">
                                    <input type="text" placeholder="Search products"/>
                                    <button type="submit">
                                        <FaSearch/>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="compare">
                                <div className="dropdown dropdown-compare">
                                    <FaRecycle/>
                                    <p>Compare</p>
                                </div>
                            </div>
                            <div className="wishlist">
                                <Link to="/wishlist">
                                    <FaRegHeart/>
                                    <p>Wishlist</p>
                                </Link>
                            </div>
                            <div className="cart">
                                <Link to="/cart">
                                    <FaShoppingCart/>
                                    <p>Cart</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div>Header Component</div>
            <ul>
                <div className="header-middle-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link to="/laptop">Laptop</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <Link to="/desktop">Desktop</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <Link to="/phone">Phone</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <Link to="/accessories">Accessories</Link>*/}
                    {/*</li>*/}
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </div>
            </ul>
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.div`
  .header-middle{
    .container{
      padding: 1rem 0;
    }
    .header-right{
      width: 300px;
    }
    .header-middle-middle{
      position:relative;
      .header-search{
        form{
          width: 100%;
          input{
          width: 500px;
          border-radius: 2.4rem;
          padding: 0.6rem 2rem 0.6rem 3rem;
          border: 1px solid lightgray;
          &:active, &:hover{
            border-color: grey;
          }
        }
        button{
          border: none;
          color:grey;
          background:transparent;
          position:absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
        }
        }
      }
    }
  }
  .wishlist, .cart, .compare{
    a, div{
     display:flex;
     margin: 0;
     justify-content:center; 
     align-items: center;
     svg{
       margin-right: 0.5rem;
     }
     p{
      margin: 0;
     }
    }
  }
  .header-middle{
    div{
      display:flex;
      justify-content:space-between;
      align-items:center;
    }
  }
  .header-top{
    background: #f5f6f9;
  }
  .header-left, .header-center, .header-right {
    display: flex;
    align-items: center;
  }
  .header-left{
    a{
      color:#000;
      transition: 0.3s;
      &:hover{
        color:#8ebaff;
      }
    }
  }
  .header-right{
    width: 400px;
    justify-content:space-between;
    a{
      color:#000;
      transition: 0.3s;
      &:hover{
        color:#8ebaff;
      }
    }
  }
  .header-dropdown{
    float: left;
    overflow: hidden;
    a{
      display:flex;
      align-items: center;
      text-decoration:none;
      font-size: 16px;    
        border: none;
        outline: none;
        color: black;
        padding: 10px 12px;
        margin: 0;
        svg{
          margin-left: .5rem;
          font-size: 12px;
          color:grey;
        }
        &:hover{
          color:#8ebaff;
        }
    }
    .header-menu{
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 100px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        ul{
          list-style: none;
          padding: 0;
          margin: 0;
          li{
           
             a{
                float: none;
                color: black;
                padding: 4px 6px;
                text-decoration: none;
                display: block;
                text-align: center;
                font-size: 14px;  
                &:hover{
                  background:#efefef;
                }
            }   
          }
        }
    }
    &:hover .header-menu{
      display: block;
    }
  }
`;