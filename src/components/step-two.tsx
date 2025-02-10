import SignupInput from "./signup-input";
import {
  companyConfirmPassword,
  companyPassword,
  companyURL,
} from "@/store/signup";

const StepTwo = () => {
  return (
    <div>
      <SignupInput
        name="password"
        label="Company Password"
        type="password"
        atom={companyPassword}
      />
      <SignupInput
        name="confirm_password"
        label="Confirm Password"
        type="password"
        atom={companyConfirmPassword}
      />
      <SignupInput
        name="url"
        label="Company Website URL"
        type="text"
        atom={companyURL}
      />
    </div>
  );
};

export default StepTwo;
