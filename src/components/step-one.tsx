import SignupInput from "./signup-input";
import { companyAddress, companyEmail, companyName } from "@/store/signup";

const StepOne = () => {
  return (
    <div>
      <SignupInput
        name="name"
        label="Company Name"
        type="text"
        atom={companyName}
      />
      <SignupInput
        name="email"
        label="Company Email Address"
        type="email"
        atom={companyEmail}
      />
      <SignupInput
        name="address"
        label="Company Address"
        type="text"
        atom={companyAddress}
      />
    </div>
  );
};

export default StepOne;
