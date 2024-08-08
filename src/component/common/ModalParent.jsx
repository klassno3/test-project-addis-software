import React, { useState } from "react";
import Modal from "./Modal";
import AddSong from "../AddSong";
import styled from "@emotion/styled";
import { space, layout, color } from "styled-system";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditSong from "../EditSong";
import DeleteSong from "../DeleteSong";
import DeleteAll from "../DeleteAll";

const Button = styled.button`
  ${space}
  ${color}
  ${layout}
  border: 1px solid transparent;
  border-radius: 2px;

  cursor: pointer;
  font-size: 13px;
  font-size: ${(props) => props.fontSize || "13px"};
  font-family: "Poppins", sans-serif;
`;

const ModalParent = ({ edit, song, deleteAll, deleteSong }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button
        fontSize="20px"
        bg={"transparent"}
        onClick={handleClose}
        className="font-semibold text-white font-beVietnamPro hover:text-red-400 transition-all duration-200"
      >
        x
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      {edit ? (
        <EditSong showModal={setShowModal} editSong={song} />
      ) : deleteAll ? (
        <DeleteAll showModal={setShowModal} />
      ) : deleteSong ? (
        <DeleteSong showModal={setShowModal} song={song} />
      ) : (
        <AddSong showModal={setShowModal} />
      )}
    </Modal>
  );

  return (
    <div>
      {edit ? (
        <FaEdit onClick={handleClick} />
      ) : deleteAll ? (
        <Button
          py={2}
          px={3}
          red
          color={"#fff"}
          bg={"#FF4E88"}
          onClick={handleClick}
        >
          Delete All
        </Button>
      ) : deleteSong ? (
        <FaTrash onClick={handleClick} />
      ) : (
        <Button
          py={2}
          bg={"#3fb090"}
          px={3}
          color={"#fff"}
          onClick={handleClick}
        >
          Add a song
        </Button>
      )}

      {showModal && modal}
    </div>
  );
};

export default ModalParent;
