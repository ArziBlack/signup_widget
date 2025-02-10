import { hydrate, prerender as ssr } from "preact-iso";

import "./style.css";
import { RecoilRoot } from "recoil";
import { SignupForm } from "./components/signup";
import { ChakraProvider } from "@chakra-ui/react";

export function App() {
  return <SignupForm />;
}

if (typeof window !== "undefined") {
  hydrate(
    <RecoilRoot>
      <ChakraProvider value={null}>
        <App />
      </ChakraProvider>
    </RecoilRoot>,
    document.getElementById("app")
  );
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
