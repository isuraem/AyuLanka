import React from 'react';
import styled from 'styled-components';
import { Search, AccountCircleOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  height: 60px;
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
            <Language>ENG</Language>
            <SearchContainer>
              <Input placeholder='Search'/>
              <Search style={{color:"gray", fontSize:16}}/>
            </SearchContainer>
          </Left>

          <Center>
            <Logo>AyuLanka</Logo>
          </Center>

          <Right>
            <MenuItem><button onClick={()=>{history.push("/admin/order")}}>Orders</button></MenuItem>
            <MenuItem><button onClick={()=>{history.push("/admin")}}>Deliveries</button></MenuItem>
            <MenuItem>Login</MenuItem>
            <MenuItem>
              
                <AccountCircleOutlined color="action" />
              
            </MenuItem>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
