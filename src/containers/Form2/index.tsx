import { Dispatch, SetStateAction } from "react";

interface Props {
  page?: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const Form2 = ({ page, setPage }: Props) => {
  return (
    <>
      <h1>Ini Halaman {page}</h1>
      {page == 2 && (
        <div>
          <button onClick={() => setPage(1)}>Kembali</button>
          <button onClick={() => setPage(3)}>Next</button>
        </div>
      )}
    </>
  );
};

export default Form2;
