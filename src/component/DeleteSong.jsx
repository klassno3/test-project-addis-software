import styled from "@emotion/styled";
import { space, layout, color } from "styled-system";
import { useDispatch } from "react-redux";
import { deleteSongsFetch } from "../redux/songsSlice";
const Confirm = styled.div`
  font-family: "Poppins", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;

  width: 100%;
  gap: 6px;
  & > p {
    font-size: 18px;
    font-weight: 500;
  }
`;
const ConfirmButtons = styled.div`
  display: flex;
  gap: 20px;
`;
const Button = styled.button`
  ${space}
  ${color}
  ${layout}
  border: 1px solid transparent;
  border-radius: 2px;
  background-color: ${(props) => (props.red ? "#FF4E88" : "#3fb090")};
  color: white;
  cursor: pointer;
  font-size: 13px;
  font-size: ${(props) => props.fontSize || "13px"};
  font-family: "Poppins", sans-serif;
`;
const DeleteSong = ({ showModal, song }) => {
  console.log(song);
  const dispatch = useDispatch();

  return (
    <Confirm className="">
      <p className="">Are you sure you want to delete this song?</p>
      <ConfirmButtons>
        <Button py={2} px={3} color={"#fff"} onClick={() => showModal(false)}>
          No!
        </Button>
        <Button
          py={2}
          px={3}
          red
          onClick={() => {
            dispatch(deleteSongsFetch(song._id));

            showModal(false);
          }}
        >
          Yes, Delete it!
        </Button>
      </ConfirmButtons>
    </Confirm>
  );
};

export default DeleteSong;
