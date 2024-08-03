import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TaxonomyCard = ({ title }) => (
  <Card variant="outlined" sx={{ marginBottom: 2 }}>
    <CardContent>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1a237e' }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mb:2, lineHeight: 1.6, color: '#37474f' }}>
        This is the taxonomy card content for {title}.
      </Typography>
    </CardContent>
  </Card>
);

export default TaxonomyCard;
