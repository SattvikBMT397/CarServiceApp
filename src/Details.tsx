import React, { useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { detailsSchema } from './validationSchema';
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
} from '@mui/material';

type FormInput = {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
};

const Details: React.FC = () => {
  const { control, handleSubmit, formState: { errors }, setValue } = useForm<FormInput>({
    resolver: yupResolver(detailsSchema)});
  const navigate = useNavigate();

  // useEffect(() => {
  //   const storedData = localStorage.getItem('formData');
  //   // console.log(storedData);
  //   if (storedData) {
  //     const parsedData = JSON.parse(storedData);
  //     // console.log("parsedData",parsedData)
  //     setValue('name', parsedData.name);
  //   }
  // }, [setValue]);

  const onSubmit: SubmitHandler<FormInput> = data => {
    localStorage.setItem('formData', JSON.stringify(data));
    navigate('/ServiceDetails');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Personal Details
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Name"
                  variant="outlined"
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Phone Number"
                  type="tel"
                  variant="outlined"
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="address"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Address"
                  variant="outlined"
                  error={!!errors.address}
                  helperText={errors.address?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Details;
