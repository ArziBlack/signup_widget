import { selector } from "recoil";
import {
  companyAddress,
  companyConfirmPassword,
  companyEmail,
  companyLogo,
  companyName,
  companyPassword,
  companyURL,
} from "./signup";

export const isValidCompanyName = selector({
  key: "isValidCompanyName",
  get: ({ get }) => {
    const name = get(companyName);
    return name.trim() !== "";
  },
});

export const isValidCompanyEmail = selector({
  key: "isValidCompanyEmail",
  get: ({ get }) => {
    const email = get(companyEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
});

export const isValidCompanyAddress = selector({
  key: "isValidCompanyAddress",
  get: ({ get }) => {
    const address = get(companyAddress);
    return address.trim() !== "";
  },
});

export const isValidCompanyURL = selector({
  key: "isValidCompanyURL",
  get: ({ get }) => {
    const url = get(companyURL);
    const urlRegex =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return urlRegex.test(url);
  },
});

export const isValidCompanyPassword = selector({
  key: "isValidCompanyPassword",
  get: ({ get }) => {
    const password = get(companyPassword);
    return password.length >= 8;
  },
});

export const doPasswordsMatch = selector({
  key: "doPasswordsMatch",
  get: ({ get }) => {
    const password = get(companyPassword);
    const confirmPassword = get(companyConfirmPassword);
    return password === confirmPassword;
  },
});

export const isValidCompanyLogo = selector({
  key: "isValidCompanyLogo",
  get: ({ get }) => {
    const logo = get(companyLogo);
    if (!logo) return true;
    const urlRegex =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return urlRegex.test(logo);
  },
});

export const isFormValid = selector({
  key: "isFormValid",
  get: ({ get }) => {
    return (
      get(isValidCompanyName) &&
      get(isValidCompanyEmail) &&
      get(isValidCompanyAddress) &&
      get(isValidCompanyURL) &&
      get(isValidCompanyPassword) &&
      get(doPasswordsMatch) &&
      get(isValidCompanyLogo)
    );
  },
});
