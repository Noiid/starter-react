import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface DataUser {
  name?: string;
  email?: string;
  gender?: "L" | "P";
  address?: string;
}

interface Props {
  form?: DataUser;
  setForm: Dispatch<SetStateAction<DataUser | undefined>>;
}

const RegisterForm = ({ form, setForm }: Props) => {
  const handleForm =
    (type: "name" | "gender" | "email" | "address") =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const tempForm: DataUser = {
        ...form,
        [type]: event.target.value,
      };
      setForm(tempForm);
    };

  return (
    <form>
      <div>
        <label>Nama</label>
        <input
          type="text"
          value={form?.name}
          name="name"
          onBlur={handleForm("name")}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          value={form?.email}
          name="email"
          onBlur={handleForm("email")}
        />
      </div>
      <div>
        <label>Gender</label>
        <input
          type="text"
          value={form?.gender}
          name="gender"
          onBlur={handleForm("gender")}
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          value={form?.address}
          name="address"
          onBlur={handleForm("address")}
        />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default RegisterForm;
