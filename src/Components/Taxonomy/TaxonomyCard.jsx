import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const TaxonomyCard = ({ title }) => (
  <Card 
    variant="outlined" 
    sx={{ 
      marginBottom: 2, 
      border: '1px solid black',
      borderRadius: 2,
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
      }
    }}
  >
    <CardContent sx={{ padding: 3 }}>
        <div className='flex justify-between'>
           <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, color: '#1a237e' }}>
              Taxonomy
          </Typography>
          <ArrowForwardIcon sx={{ ml: 1, fontSize: '1.5rem' }} />
        </div>
      
      {['L1', 'L2'].map((level, index) => (
        <Box key={level} sx={{ display: 'flex', alignItems: 'center', mb: index === 0 ? 2 : 0 }}>
          <Typography variant="h6" sx={{ mr: 2, minWidth: '40px' }}>
            {level}:
          </Typography>
          <Typography 
            sx={{ 
              fontWeight: 'bold', 
              color: '#ffffff',
              background: '#177edb', 
              px: 1.5,
              py: 0.5,
              borderRadius: '20px',
              boxShadow: '0 2px 4px rgba(23,126,219,0.3)',
              transition: 'all 0.2s ease',
              '&:hover': {
                background: '#1565c0',
                transform: 'scale(1.05)',
              }
            }}
          >
            {title}
          </Typography>
        </Box>
      ))}
    </CardContent>
  </Card>
);

export default TaxonomyCard;