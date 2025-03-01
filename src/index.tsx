import { hydrate, prerender as ssr } from "preact-iso";

import "./style.css";
import { RecoilRoot } from "recoil";
import { SignupForm } from "./components/signup";
import { Provider } from "./components/ui/provider";
import { AppProvider } from "./store/app-context";

export function App() {
  return <SignupForm />;
}

if (typeof window !== "undefined") {
  hydrate(
    <AppProvider>
      <Provider>
        <App />
      </Provider>
    </AppProvider>,
    document.getElementById("app")
  );
}

export async function prerender(data) {
  return await ssr(
    <RecoilRoot>
      <Provider>
        <App {...data} />
      </Provider>
    </RecoilRoot>
  );
}
