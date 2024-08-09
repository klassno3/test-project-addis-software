import React, { useState } from "react";
import { space, layout, color } from "styled-system";
import styled from "@emotion/styled";
import { FaPlay, FaBackward, FaForward, FaPause } from "react-icons/fa";

import ModalParent from "./common/ModalParent";
const TableData = styled.td`
  padding: 15px 10px;
  text-align: center;
  width: 100%;
  text-align: left;
  text-transform: capitalize;
  font-weight: 300;

  ${space} ${layout} ${color};
  @media (max-width: 768px) {
    padding: 10px 7px;
  }
`;

const TableRow = styled.tr`
  width: 100%;
  transition: all 0.5s ease;
  display: flex;
  font-size: 13px;
  &:nth-of-type(odd) {
    background: #9cdba65e;
  }
  &:hover {
    background: #9cdba6b1;
  }
  &:hover > td > div > span {
    display: flex;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;
const PlayContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 14px;
  color: #444;
  & > * {
    cursor: pointer;
  }
  & > *:hover {
    transition: all 0.5s ease;

    cursor: pointer;
    color: #000;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const ActionContainer = styled.span`
  display: none;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  & > * {
    cursor: pointer;
    display: flex;
  }

  @media (max-width: 768px) {
    display: flex;
    font-size: 16px;
    gap: 10px;
  }
`;
const Song = ({ song, number }) => {
  const { name, artist, album } = song;
  const [play, setPlay] = useState(false);

  return (
    <TableRow>
      <TableData width={1 / 30}>{number + 1}</TableData>
      <TableData width={1 / 4}>
        <FlexContainer>
          <PlayContainer>
            <FaBackward />
            {play ? (
              <FaPause onClick={() => setPlay(!play)} />
            ) : (
              <FaPlay onClick={() => setPlay(!play)} />
            )}
            <FaForward />
          </PlayContainer>
          {name}
        </FlexContainer>
      </TableData>
      <TableData width={1 / 3}>{artist} </TableData>
      <TableData width={1 / 4}>
        {" "}
        <FlexContainer>
          {album}
          <ActionContainer>
            <ModalParent edit song={song} />
            <ModalParent deleteSong song={song} />
          </ActionContainer>
        </FlexContainer>
      </TableData>
    </TableRow>
  );
};

export default Song;
