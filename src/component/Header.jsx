import React, { useState } from "react";
import { space, layout, color } from "styled-system";
import styled from "@emotion/styled";
import Logo from "../image/Logo.png";
import { useDispatch } from "react-redux";
import { searchSongsFetch } from "../redux/songsSlice";
const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  width: 90%;
  margin: 0 auto;
  max-width: 1400px;

  @media (max-width: 768px) {
    width: 95%;
  }
`;
const Image = styled.img`
  width: 70px;
  height: auto;

  @media (max-width: 768px) {
    width: 60px;
  }
`;
const SearchInput = styled.input`
  ${space}
  ${color}
  ${layout}
  border:1px solid #333;
  border-radius: 9999px;
  width: 30%;

  @media (max-width: 768px) {
    width: 50%;
  }

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: #777;
    font-weight: 300;
    font-size: 12px;
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchText(query);
    dispatch(searchSongsFetch(query));
  };
  return (
    <HeaderBox>
      <Image src={Logo} alt="Logo" />

      <SearchInput
        px={3}
        py={2}
        placeholder="Search By Song"
        onChange={handleSearch}
        value={searchText}
      />
    </HeaderBox>
  );
};

export default Header;
