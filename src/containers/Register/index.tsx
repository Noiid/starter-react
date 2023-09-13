import { useState } from "react";
import { Table } from "../../components";
import { RegisterForm } from "../../components";
import { Dispatch, SetStateAction } from "react";

interface DataUser {
  name?: string;
  email?: string;
  gender?: "L" | "P";
  address?: string;
}

interface Props {
  page?: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const Register = ({ page, setPage }: Props) => {
  const [form, setForm] = useState<DataUser>();
  const data: DataUser[] = [
    {
      name: "fulan",
      email: "fulan@example.com",
      gender: "L",
      address: "Jl. Pahlawan",
    },
  ];

  const renderTableBody = () => {
    return (
      <>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.address}</td>
          </tr>
        ))}
      </>
    );
  };

  return (
    <>
      <RegisterForm setForm={setForm} form={form} />
      <Table
        headers={["Nama", "Email", "Gender", "Address"]}
        children={renderTableBody()}
      />
      {page == 2 && (
        <div>
          <button onClick={() => setPage(1)}>Kembali</button>
          <button onClick={() => setPage(3)}>Next</button>
        </div>
      )}
    </>
  );
};

export default Register;
