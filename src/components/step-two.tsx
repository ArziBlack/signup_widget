import { Input } from "@chakra-ui/react";
import SignupInput from "./signup-input";
import {
  companyConfirmPassword,
  companyPassword,
  companyURL,
} from "@/store/signup";
import { Field } from "./ui/field";

const StepTwo = () => {
  return (
    <div>
      <SignupInput
        name="company_password"
        label="Company Password"
        type="password"
        placeholder="enter company password"
      />
      <Field label="confirm password">
      <Input
        name="confirm_password"
        type="password"
        placeholder="enter confirm password"
        />
        </Field>
      <SignupInput
        name="company_url"
        label="Company URL"
        type="text"
        placeholder="enter company URL"
      />
    </div>
  );
};

export default StepTwo;
