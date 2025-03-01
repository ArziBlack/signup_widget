import { Input } from "@chakra-ui/react";
import { Field } from "./ui/field";
import { useAppContext } from "@/store/app-context";

interface SignupInputProps {
  label: string;
  name: keyof ReturnType<typeof useAppContext>["payload"];
  type?: string;
  placeholder?: string;
}

const SignupInput = ({ label, name, type = "text", placeholder }: SignupInputProps) => {
  const { payload, updatePayload } = useAppContext();

  return (
    <Field label={label}>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={payload[name] || ""}
        onChange={(e) => updatePayload(name, (e.target as HTMLInputElement).value)}
      />
    </Field>
  );
};

export default SignupInput;
