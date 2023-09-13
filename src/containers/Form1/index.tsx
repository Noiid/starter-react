import { Dispatch, SetStateAction } from "react";

interface Props {
  page?: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const Form1 = ({ page, setPage }: Props) => {
  return (
    <>
      <h1>Ini Halaman {page}</h1>
      {page == 1 && (
        <div>
          <button onClick={() => setPage(2)}>Next</button>
        </div>
      )}
    </>
  );
};

export default Form1;
