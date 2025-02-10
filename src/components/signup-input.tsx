import { Input } from "@chakra-ui/react";
import { Field } from "./ui/field";
import { useRecoilState } from "recoil";

const SignupInput = ({ label, atom, name, type }) => {
  const [value, setValue] = useRecoilState(atom);
  return (
    <div>
      <Field label={label}>
        <Input
          name={name}
          type={type}
          value={value as string}
          onChange={(e: any) => setValue(e.target.value!)}
        />
      </Field>
    </div>
  );
};

export default SignupInput;
