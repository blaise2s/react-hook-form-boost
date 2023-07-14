import { Box } from "@mui/material";
import { useState } from "react";
import { ContactForm } from "./ContactForm";
import { ContactsTable } from "./ContactsTable";
import { ContactContext } from "./contactContext";
import { Contact } from "./interfaces";

export const ReactHookFormBoost = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
      }}
    >
      <Box height="100%" overflow="auto" display="flex" flexDirection="column">
        <Box margin="2rem">
          <ContactForm />
        </Box>
        <Box margin="2rem" flex="1" overflow="auto">
          <ContactsTable />
        </Box>
      </Box>
    </ContactContext.Provider>
  );
};
