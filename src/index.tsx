import { hydrate, prerender as ssr } from "preact-iso";

import "./style.css";
import { RecoilRoot } from "recoil";
import { SignupForm } from "./components/signup";
import { Provider } from "./components/ui/provider";

export function App() {
  return <SignupForm />;
}

if (typeof window !== "undefined") {
  hydrate(
    <RecoilRoot>
      <Provider>
        <App />
      </Provider>
    </RecoilRoot>,
    document.getElementById("app")
  );
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
