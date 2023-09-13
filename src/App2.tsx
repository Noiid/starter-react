import { useState } from "react";
import { Form1, Form2, Form3 } from "./containers";

const App2 = () => {
  const [page, setPage] = useState<number>(1);

  return (
    <>
      <div>
        {page == 1 && <Form1 page={page} setPage={setPage} />}

        {page == 2 && <Form2 page={page} setPage={setPage} />}

        {page == 3 && <Form3 page={page} setPage={setPage} />}
      </div>
    </>
  );
};

export default App2;
