import { useState } from "preact/hooks";
import { Button, Center, Fieldset, Group, Stack } from "@chakra-ui/react";
import {
  StepsCompletedContent,
  StepsContent,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
} from "./ui/steps";
import StepOne from "./step-one";
import StepTwo from "./step-two";
import StepThree from "./step-three";
import { createCompany } from "@/store/api";
import { useRecoilValue } from "recoil";
import {
  companyAddress,
  companyEmail,
  companyLogo,
  companyName,
  companyPassword,
  companyURL,
} from "@/store/signup";

export const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const name = useRecoilValue(companyName);
    const email = useRecoilValue(companyEmail);
    const address = useRecoilValue(companyAddress);
    const password = useRecoilValue(companyPassword);
    const logo = useRecoilValue(companyLogo);
    const url = useRecoilValue(companyURL);
    try {
      const payload = {
        company_name: name,
        company_email: email,
        company_address: address,
        company_url: url,
        company_logo: logo,
        company_password: password,
      };
      await createCompany(payload);
    } catch (error) {
      setError("Failed to fetch user data. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <StepsRoot count={3}>
      <Center className="">
        <main className="w-[400px] py-8">
          <StepsList>
            <StepsItem index={0} />
            <StepsItem index={1} />
            <StepsItem index={2} />
          </StepsList>

          <Fieldset.Root>
            <Stack>
              <Fieldset.Legend>Create Account</Fieldset.Legend>
              <Fieldset.HelperText>
                Please provide your account details below.
              </Fieldset.HelperText>
            </Stack>
            <Fieldset.Content>
              <StepsContent index={0}>
                <StepOne />
              </StepsContent>
              <StepsContent index={1}>
                <StepTwo />
              </StepsContent>
              <StepsContent index={2}>
                <StepThree />
              </StepsContent>
              <StepsCompletedContent>
                <Button variant="solid" size="sm" onClick={handleSubmit}>
                  Signup
                </Button>
              </StepsCompletedContent>
            </Fieldset.Content>
            <Group>
              <StepsPrevTrigger asChild>
                <Button variant="outline" size="sm">
                  Prev
                </Button>
              </StepsPrevTrigger>
              <StepsNextTrigger asChild>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </StepsNextTrigger>
            </Group>
          </Fieldset.Root>
        </main>
      </Center>
    </StepsRoot>
  );
};
