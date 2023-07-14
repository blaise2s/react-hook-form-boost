import { Box, Button, Grid, TextField } from "@mui/material";
import { useContext } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ContactContext, IContactContext } from "./contactContext";
import { Contact } from "./interfaces";
import { isValidEmail } from "./validation";

export const ContactForm = () => {
  const { setContacts } = useContext<IContactContext>(ContactContext);

  const form = useForm<Contact>({
    mode: "onTouched",
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = form;

  const onSubmit: SubmitHandler<Contact> = (contact) => {
    setContacts((previous) => [...previous, contact]);
    reset();
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container spacing={2}>
        <Grid display="flex" justifyContent="center" item xs={12}>
          <Controller
            control={control}
            name="firstName"
            rules={{ required: "Must be provided" }}
            render={({ field: { value, ...remaining } }) => (
              <TextField
                sx={{ width: "15rem" }}
                label="First Name"
                id="ContactForm_FirstName"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                error={Boolean(errors?.firstName)}
                helperText={errors?.firstName?.message || " "}
                value={value || ""}
                {...remaining}
              />
            )}
          />
        </Grid>
        <Grid display="flex" justifyContent="center" item xs={12}>
          <Controller
            control={control}
            name="lastName"
            rules={{ required: "Must be provided" }}
            render={({ field: { value, ...remaining } }) => (
              <TextField
                sx={{ width: "15rem" }}
                label="Last Name"
                id="ContactForm_LastName"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                error={Boolean(errors?.lastName)}
                helperText={errors?.lastName?.message || " "}
                value={value || ""}
                {...remaining}
              />
            )}
          />
        </Grid>
        <Grid display="flex" justifyContent="center" item xs={12}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Must be provided",
              validate: (email) =>
                isValidEmail(email) || "Must be a valid email",
            }}
            render={({ field: { value, ...remaining } }) => (
              <TextField
                sx={{ width: "15rem" }}
                label="Email"
                id="ContactForm_Email"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                error={Boolean(errors?.email)}
                helperText={errors?.email?.message || " "}
                value={value || ""}
                {...remaining}
              />
            )}
          />
        </Grid>
        <Grid display="flex" justifyContent="center" item xs={12}>
          <Controller
            control={control}
            name="dob"
            render={({ field: { value, ...remaining } }) => (
              <TextField
                sx={{ width: "15rem" }}
                type="date"
                label="Date of Birth"
                id="ContactForm_DateOfBirth"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                error={Boolean(errors?.dob)}
                helperText={errors?.dob?.message || " "}
                value={value || ""}
                {...remaining}
              />
            )}
          />
        </Grid>
        <Grid display="flex" justifyContent="center" item xs={12}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
