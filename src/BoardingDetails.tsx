import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup'
import { boardingSchema } from './validationSchema';
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
} from '@mui/material';

type FormData = {
  bookingDate: string;
  bookingTime: string;
};

const BoardingDetails: React.FC = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors }} = useForm<FormData>({ resolver: yupResolver(boardingSchema),});

  // useEffect(() => {
  //   const storedData = localStorage.getItem('formData');
  //   if (storedData) {
  //     const parsedData = JSON.parse(storedData);
  //     setValue('bookingDate', parsedData.bookingDate);
  //     setValue('bookingTime', parsedData.bookingTime);
  //   }
  // }, [setValue]);

  const onSubmit: SubmitHandler<FormData> = data => {
    const existingData = JSON.parse(localStorage.getItem('formData') || '{}');
    localStorage.setItem('formData', JSON.stringify({ ...existingData, ...data }));
    navigate('/summary');
  };

  return (
    <Container maxWidth="sm">
    <Typography variant="h4" component="h1" gutterBottom>
      Boarding Details
    </Typography>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="bookingTime"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Booking Time"
                type="time"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                inputProps={{ step: 1800 }} 
                error={!!errors.bookingTime}
                helperText={errors.bookingTime?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="bookingDate"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Booking Date"
                type="date"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                error={!!errors.bookingDate}
                helperText={errors.bookingDate?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Book
          </Button>
        </Grid>
      </Grid>
    </form>
  </Container>
  );
};

export default BoardingDetails;
