import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { space, layout, color } from "styled-system";
import styled from "@emotion/styled";
import Song from "./Song";
import ModalParent from "./common/ModalParent";
import { getSongsFetch } from "../redux/songsSlice";
import Loading from "./common/Loading";
import toast from "react-hot-toast";
import Error from "./common/Error";
const Container = styled.div`
  width: 90%;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 30px;
  max-width: 1400px;
  @media (max-width: 768px) {
    width: 97%;
    margin: 70px auto;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Table = styled.table`
  background-color: #93d2c01a;
  font-family: "Poppins", sans-serif;
  border-radius: 5px;
  width: 1000px;
  table-layout: auto;
  width: 100%;
`;

const TableRow = styled.tr`
  width: 100%;
  display: flex;
`;

const TableHeader = styled.th`
  ${space}
  ${layout}
${color}
  padding: 15px 10px;
  text-align: left;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SongList = () => {
  const songsStore = useSelector((state) => state.songs);
  const { searchResults, songs, isLoading, error } = songsStore;
  const dispatch = useDispatch();
  const songsList = songsStore
    ? searchResults.length > 0
      ? searchResults
      : songs.songs
    : [];

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);
  if (error) {
    toast.error(error);
  }

  return (
    <div className="">
      {error ? (
        <Error error={error} />
      ) : (
        <Container>
          <FlexContainer>
            <ModalParent />
            {songsList && songsList.length !== 0 && <ModalParent deleteAll />}
          </FlexContainer>

          <FlexContainer>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader width={1 / 30}>#</TableHeader>
                  <TableHeader width={1 / 4}>Title</TableHeader>
                  <TableHeader width={1 / 3}> Artist</TableHeader>
                  <TableHeader width={1 / 4}>Album</TableHeader>
                </TableRow>
              </thead>
              {isLoading ? (
                <Loading />
              ) : (
                <tbody>
                  {songsList &&
                    songsList.map((song, index) => (
                      <Song song={song} key={index} number={index} />
                    ))}
                </tbody>
              )}
            </Table>
          </FlexContainer>
        </Container>
      )}
    </div>
  );
};

export default SongList;
