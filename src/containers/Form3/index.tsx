import { Dispatch, SetStateAction } from "react";

interface Props {
  page?: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const Form3 = ({ page, setPage }: Props) => {
  return (
    <>
      <h1>Ini Halaman {page}</h1>
      {page == 3 && (
        <div>
          <button onClick={() => setPage(2)}>Kembali</button>
        </div>
      )}
    </>
  );
};

export default Form3;
