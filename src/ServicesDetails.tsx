import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup'
import {serviceSchema} from './validationSchema';
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from '@mui/material';

type InputForm = {
  VechicleType: string;
  VechileModleNumber: number;
}

export default function ServiceDetails() {
  const { control, handleSubmit, formState: { errors } } = useForm<InputForm>({ resolver: yupResolver(serviceSchema),});
  const navigate = useNavigate();


  const onSubmit: SubmitHandler<InputForm> = () => {
    navigate("/BoardingDetails");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Service Details
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth error={!!errors.VechicleType} sx={{ mb: 2 }}>
              <InputLabel>Vehicle Type</InputLabel>
              <Controller
                name="VechicleType"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Vehicle Type"
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Two Wheeler">Two Wheeler</MenuItem>
                    <MenuItem value="Three Wheeler">Three Wheeler</MenuItem>
                    <MenuItem value="Four Wheeler">Four Wheeler</MenuItem>
                    <MenuItem value="Eight Wheeler">Eight Wheeler</MenuItem>
                  </Select>
                )}
              />
              {errors.VechicleType && <FormHelperText>{errors.VechicleType.message}</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="VechileModleNumber"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Vehicle Model Number"
                  variant="outlined"
                  type="number"
                  error={!!errors.VechileModleNumber}
                  helperText={errors.VechileModleNumber?.message}
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
}
