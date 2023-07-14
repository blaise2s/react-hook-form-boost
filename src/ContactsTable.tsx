import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { format, parse } from "date-fns";
import { useContext } from "react";
import { ContactContext, IContactContext } from "./contactContext";

export const ContactsTable = () => {
  const { contacts } = useContext<IContactContext>(ContactContext);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>DOB</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map(({ firstName, lastName, email, dob }, idx) => (
            <TableRow key={idx}>
              <TableCell>{firstName}</TableCell>
              <TableCell>{lastName}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>
                {dob
                  ? format(parse(dob, "yyyy-mm-dd", new Date()), "mm/dd/yyyy")
                  : ""}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
