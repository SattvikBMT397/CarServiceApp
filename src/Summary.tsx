import React, { useEffect, useState } from 'react';
import { Typography, Container, Box } from '@mui/material'; 
type InputData={
  name:string,
  bookingTime:string,
  bookingDate:string,
}

const SummaryPage: React.FC = () => {
  const [formData, setFormData] = useState<InputData>({
    name: '',
    bookingTime: '',
    bookingDate: ''
  });

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Summary
      </Typography>
      <Box sx={{ margin: '0 auto', padding: '20px', textAlign: 'center' }}>
        <Typography variant="body1">
          Hi {formData.name}, your booking is scheduled at {formData.bookingTime} on {formData.bookingDate}.
        </Typography>
        <Typography variant="h5" mt={3}>
          Thanks
        </Typography>
      </Box>
    </Container>
  );
};

export default SummaryPage;
