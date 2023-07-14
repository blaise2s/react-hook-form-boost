import { Dispatch, SetStateAction, createContext } from "react";
import { Contact } from "./interfaces";

export interface IContactContext {
  contacts: Contact[];
  setContacts: Dispatch<SetStateAction<Contact[]>>;
}

export const ContactContext = createContext<IContactContext>({
  contacts: [],
  setContacts: () => {},
});
