import axios from "axios";
import { createContext, useContext, useState, ReactNode } from "react";

interface IPayload {
  company_url: string;
  company_logo: string;
  company_name: string;
  company_email: string;
  company_address: string;
  company_password: string;
}

interface AppContextType {
  company: string;
  loading: boolean;
  payload: IPayload;
  error: string | null;
  createCompany: (payload: IPayload) => Promise<void>;
  updatePayload: (field: keyof IPayload, value: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [company, setCompany] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [payload, setPayload] = useState<IPayload>({
    company_name: "",
    company_email: "",
    company_address: "",
    company_url: "",
    company_logo: "https://google.com",
    company_password: "",
  });

  const updatePayload = (field: keyof IPayload, value: string) => {
    setPayload((prev) => ({ ...prev, [field]: value }));
  };

  const createCompany = async (payload: any) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `https://f3d-server.onrender.com/api/v1/clients/create`,
        payload
      );
      setCompany(response.data); 
      return response.data;
    } catch (err: any) {
      console.error("Error creating company:", err);
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider value={{ company, createCompany, loading, error, payload, updatePayload }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
