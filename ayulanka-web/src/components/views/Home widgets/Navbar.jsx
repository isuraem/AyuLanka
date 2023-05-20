import React from 'react';
import styled from 'styled-components';
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link, NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  background-color:eaffff;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const Product = styled.span`
  font-size: 14px;
  margin-left: 30px;
  cursor: pointer;
  color: "black";
`;

const Feedback = styled.span`
font-size: 14px;
margin-left: 30px;
cursor: pointer;
color: "black";
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  let history = useHistory();
  return (
    <Container>
      <Wrapper>

        <Left>
          {/* <Language>ENG</Language> */}
          {/* <SearchContainer>
              <Input placeholder='Search'/>
              <Search style={{color:"gray", fontSize:16}}/>
            </SearchContainer> */}

          <Product>
            <Link style={{ textDecoration: 'none', color: "black" }} to="/catelog">

              <b>Products</b>
            </Link>
          </Product>
          <Feedback>
            <Link style={{ textDecoration: 'none', color: "black" }} to="/feedback">

              <b>Feedback</b>
            </Link>
          </Feedback>
        </Left>

        <Center>
          <Link to="/home">
            <Logo>
              <img src="images/new.png" style={{
                width: '250px',
              }} alt="logo" />
              {/* <img tyle={{width:"100%"}}src={"images/new.png"} alt="Logo" /> */}
            </Logo>
          </Link>
        </Center>

        <Right>
          {/* <MenuItem><b>Register</b></MenuItem> */}
          <MenuItem><button type="button" class="btn btn-outline-success" onClick={() => { history.push("/signup"); window.location.reload() }}><b>Sign Up</b></button></MenuItem>
          <MenuItem><button type="button" class="btn btn-outline-success" onClick={() => { history.push("/login"); window.location.reload() }}><b>Login</b></button></MenuItem>
          {/* <MenuItem><b>SIGN IN</b></MenuItem> */}
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Link to="/cart">
                <ShoppingCartOutlined color="action" />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
