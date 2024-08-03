import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AppleCard = ({onClick}) => (
    <Card variant="outlined" sx={{ marginBottom: 2 }} onClick={onClick}>
      <CardContent 
         sx={{
         transition: 'all 0.3s ease',
           '&:hover': {
             backgroundColor: '#f5f5f5',
             transform: 'translateY(-5px)',
             boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
             border:'2px solid #1e40af'
           }
         }}
    >
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1a237e' }}>
          AppleCard
        </Typography>
        
        <Typography variant="body1" sx={{ mb:2, lineHeight: 1.6, color: '#37474f' }}>
          I have been charged for cars that were not filled and overcharged for cars 
          that were filled. The money on hold was never returned to my bank. They are 
          robbers — please don't use Cafu.
        </Typography>

        <div className='flex justify-between'>
          <Typography variant="caption" sx={{ color: '#78909c', fontStyle: 'italic' }}>
            16 Feb 2024
          </Typography>
        
          <ArrowForwardIcon sx={{ ml: 1, fontSize: '1.5rem' }} />
        </div>
  
     </CardContent>
  </Card>
);

export default AppleCard;