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
import { useAppContext } from "@/store/app-context";

export const SignupForm = () => {
  const { createCompany, payload:state, loading, error } = useAppContext()
  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      const payload = {
        company_name: state.company_name,
        company_email: state.company_email,
        company_address: state.company_address,
        company_url: state.company_url,
        company_logo: state.company_logo,
        company_password: state.company_password,
      };
      console.log(payload)
      await createCompany(payload);
    } catch (error) {
      console.error(error);
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
                <Button variant="solid" size="sm" onClick={handleSubmit} loading={loading} disabled={loading}>
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
