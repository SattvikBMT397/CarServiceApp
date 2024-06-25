import * as Yup from 'yup';

export const detailsSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
  address: Yup.string().required('Address is required'),
});

export const serviceSchema = Yup.object().shape({
  VechicleType: Yup.string().required('Vehicle Type is required'),
  VechileModleNumber: Yup.number()
    .typeError('Model number must be a number')
    .required('Vehicle Model Number is required'),
});

export const boardingSchema = Yup.object().shape({
  bookingDate: Yup.string().required('Booking date is required'),
  bookingTime: Yup.string().required('Booking time is required'),
});
