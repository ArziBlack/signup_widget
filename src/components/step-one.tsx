import SignupInput from "./signup-input";

const StepOne = () => {
  return (
    <div>
      <SignupInput
        name="company_name"
        label="Company Name"
        type="text"
        placeholder="enter company name"
      />
      <SignupInput
         name="company_email"
         label="Company Email"
         type="email"
         placeholder="enter company email"
      />
      <SignupInput
         name="company_address"
         label="Company Address"
         type="text"
         placeholder="enter company address"
      />
    </div>
  );
};

export default StepOne;
