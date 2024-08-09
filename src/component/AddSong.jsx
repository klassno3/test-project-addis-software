import * as Yup from "yup";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import Loading from "./common/Loading";
import Error from "./common/Error";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { createSongsFetch } from "../redux/songsSlice";

const Input = styled.input`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 12px 20px;

  border-color: ${(props) => (props.err ? "#FF4E88" : "#ccc")};

  &::placeholder {
    color: #777;
    font-weight: 200;
  }
`;

const Button = styled.button`
  padding: 10px 50px;
  border: 1px solid transparent;
  border-radius: 2px;
  background-color: ${(props) => (props.red ? "#FF4E88" : "#3fb090")};
  color: white;
  cursor: pointer;
`;

const Label = styled.label`
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 90%;
  margin: 0 auto;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const ErrorText = styled.div`
  color: #f66666;
  font-size: 12px;
`;

const Title = styled.h4`
  font-size: 30px;
  margin: 0 auto;
  color: #333;
  flex-direction: column;
  gap: 7px;
  @media (max-width: 400px) {
    font-size: 18px;
  }
`;
const AddSong = ({ showModal }) => {
  const song = useSelector((state) => state.songs);
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    const data = {
      name: values.name,
      artist: values.artist,
      album: values.album,
    };
    dispatch(createSongsFetch(data));
    if (song.success) {
      toast.success(song.success);
    }
    if (song.error) {
      toast.error(song.error);
    }
    setTimeout(() => {
      showModal(false);
    }, 1000);
  };

  // Validation schema using Yup
  const Schema = Yup.object().shape({
    name: Yup.string().required("Song name is required."),
    artist: Yup.string().required("Artist name is required."),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      artist: "",
      album: "",
    },
    validationSchema: Schema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="">
      {song.error ? (
        <Error error={song.error} />
      ) : (
        <Container>
          <Title>Add a song</Title>
          {song.isLoading ? (
            <Loading />
          ) : (
            <Form onSubmit={formik.handleSubmit}>
              <InputContainer>
                <Label htmlFor="artist">
                  Song name:{" "}
                  <span
                    css={css`
                      color: #f66666;
                    `}
                  >
                    *
                  </span>
                </Label>
                <Input
                  placeholder="Song Name"
                  required
                  type="text"
                  name="name"
                  id="name"
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  err={formik.touched.name && formik.errors.name}
                />
                {formik.errors.name && formik.touched.name && (
                  <ErrorText>{formik.errors.name}</ErrorText>
                )}
              </InputContainer>

              <InputContainer>
                <Label htmlFor="artist">
                  Artist:{" "}
                  <span
                    css={css`
                      color: #f66666;
                    `}
                  >
                    *
                  </span>
                </Label>
                <Input
                  placeholder="Artist Name"
                  required
                  type="text"
                  name="artist"
                  id="artist"
                  value={formik.values.artist}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  err={formik.touched.artist && formik.errors.artist}
                />
                {formik.errors.artist && formik.touched.artist && (
                  <ErrorText>{formik.errors.artist}</ErrorText>
                )}
              </InputContainer>
              <InputContainer>
                <Label htmlFor="album">Album:</Label>
                <Input
                  type="text"
                  placeholder="Album Name"
                  name="album"
                  id="album"
                  value={formik.values.album}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </InputContainer>
              <Button type="submit">Submit</Button>
            </Form>
          )}
        </Container>
      )}
    </div>
  );
};

export default AddSong;
