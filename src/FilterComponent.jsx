// import React, { useState } from 'react';
// import { Container, FormControl, InputLabel, MenuItem, Select, Card, CardContent, Typography } from '@mui/material';

// const FilterComponent = () => {
//   const [selectedFilter, setSelectedFilter] = useState('');

//   const handleFilterChange = (e) => {
//     setSelectedFilter(e.target.value);
//   };

//   return (
//     <Container maxWidth="sm">
//       <FormControl fullWidth variant="outlined" margin="normal">
        
//         <div className='flex justify-between'>
//         <InputLabel>Filter by</InputLabel>
//         <Select
//           value={selectedFilter}
//           onChange={handleFilterChange}
//           label="Source"
//         >
//           <MenuItem value=""><em>None</em></MenuItem>
//           <MenuItem value="Android">Android</MenuItem>
//           <MenuItem value="Apple">Apple</MenuItem>
//           <MenuItem value="Google Maps">Google Maps</MenuItem>
//         </Select>
//         <InputLabel>Filter by</InputLabel>
//         <Select
//           value={selectedFilter}
//           onChange={handleFilterChange}
//           label="sentiment"
//         >
//           <MenuItem value=""><em>None</em></MenuItem>
//           <MenuItem value="Dubai">Dubai</MenuItem>
//           <MenuItem value="Abu dhabi">Abu dhabi</MenuItem>
//           <MenuItem value="Sharjah">Sharjah</MenuItem>
//         </Select>
//         <Select
//           value={selectedFilter}
//           onChange={handleFilterChange}
//           label="Filter by"
//         >
//           <MenuItem value=""><em>None</em></MenuItem>
//           <MenuItem value="Negative">Negative</MenuItem>
//           <MenuItem value="Neautral">Neautral</MenuItem>
//           <MenuItem value="Positive">Positive</MenuItem>
//         </Select>    
//         </div>
        
//       </FormControl>

//       {(selectedFilter === 'Dubai'&& selectedFilter === 'Android' ) && (
//         <div>
//           <SourceCard />
//           <SourceTaxonomy />
//         </div>
//       )}

//       {selectedFilter === 'Android' && (
//         <div>
//           <CityCard />
//           <CityTaxonomy />
//         </div>
//       )}

//       {selectedFilter === 'Positive' && (
//         <div>
//           <SentimentCard />
//           <SentimentTaxonomy />
//         </div>
//       )}
//     </Container>
//   );
// };

// const SourceCard = () => (
//   <Card variant="outlined" sx={{ marginBottom: 2 }}>
//     <CardContent>
//       <Typography variant="h6">Source Card</Typography>
//       <Typography>Details about the source...</Typography>
//     </CardContent>
//   </Card>
// );

// const CityCard = () => (
//   <Card variant="outlined" sx={{ marginBottom: 2 }}>
//     <CardContent>
//       <Typography variant="h6">City Card</Typography>
//       <Typography>Details about the city...</Typography>
//     </CardContent>
//   </Card>
// );

// const SentimentCard = () => (
//   <Card variant="outlined" sx={{ marginBottom: 2 }}>
//     <CardContent>
//       <Typography variant="h6">Sentiment Card</Typography>
//       <Typography>Details about the sentiment...</Typography>
//     </CardContent>
//   </Card>
// );

// const SourceTaxonomy = () => (
//   <Card variant="outlined">
//     <CardContent>
//       <Typography variant="h6">Source Taxonomy</Typography>
//       <Typography>Taxonomy related to the source...</Typography>
//     </CardContent>
//   </Card>
// );

// const CityTaxonomy = () => (
//   <Card variant="outlined">
//     <CardContent>
//       <Typography variant="h6">City Taxonomy</Typography>
//       <Typography>Taxonomy related to the city...</Typography>
//     </CardContent>
//   </Card>
// );

// const SentimentTaxonomy = () => (
//   <Card variant="outlined">
//     <CardContent>
//       <Typography variant="h6">Sentiment Taxonomy</Typography>
//       <Typography>Taxonomy related to the sentiment...</Typography>
//     </CardContent>
//   </Card>
// );

// export default FilterComponent;

import React, { useState } from 'react';
import { Container, FormControl, InputLabel, MenuItem, Select, Card, CardContent, Typography,Paper } from '@mui/material';

const FilterComponent = () => {
  const [sourceFilter, setSourceFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [sentimentFilter, setSentimentFilter] = useState('');

  const handleSourceChange = (e) => {
    setSourceFilter(e.target.value);
  };

  const handleCityChange = (e) => {
    setCityFilter(e.target.value);
  };

  const handleSentimentChange = (e) => {
    setSentimentFilter(e.target.value);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} className="p-6 mt-8 border-2 border-blue-700">
        <Typography variant="h5" className="text-blue-600 border-b-2 border-indigo-200 ">
          Filter
        </Typography>
        <div className='flex flex-wrap justify-between gap-4 mt-4'>
        <FormControl variant="outlined" className="w-full sm:w-[30%]">
            <InputLabel id="source-label" className='font-bold text-3xl'>Source</InputLabel>
            <Select
              labelId="source-label"
              value={sourceFilter}
              onChange={handleSourceChange}
              label="Source"
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="Android">Android</MenuItem>
              <MenuItem value="Apple">Apple</MenuItem>
              <MenuItem value="Google Maps">Google Maps</MenuItem>
            </Select>
          </FormControl>

          {/* City Filter */}
          
          <FormControl variant="outlined" className="w-full sm:w-[30%]">
            <InputLabel id="city-label">City</InputLabel>
            <Select
              labelId="city-label"
              value={cityFilter}
              onChange={handleCityChange}
              label="City"
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="Dubai">Dubai</MenuItem>
              <MenuItem value="Abu Dhabi">Abu Dhabi</MenuItem>
              <MenuItem value="Sharjah">Sharjah</MenuItem>
            </Select>
          </FormControl>

          {/* Sentiment Filter */}
          <FormControl variant="outlined" className="w-full sm:w-[30%]">
            <InputLabel id="sentiment-label">Sentiment</InputLabel>
            <Select
              labelId="sentiment-label"
              value={sentimentFilter}
              onChange={handleSentimentChange}
              label="Sentiment"
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="Negative">Negative</MenuItem>
              <MenuItem value="Neutral">Neutral</MenuItem>
              <MenuItem value="Positive">Positive</MenuItem>
            </Select>
          </FormControl>
          </div>
         </Paper> 

      {/* Conditional Rendering of Cards and Taxonomies */}
      <div className="mt-8 space-y-4">
        {(sourceFilter === 'Android' && cityFilter === 'Dubai' && sentimentFilter === 'Positive') && (
          <div className="space-y-4">
            <SourceCard />
            <CityCard />
            <SentimentCard />
          </div>
        )}

        {(sourceFilter === 'Android' && cityFilter === 'Dubai') && (
          <div className="space-y-4">
            <SourceCard />
            <CityCard />
          </div>
        )}

        {(sourceFilter === 'Android') && (
          <div>
            <SourceCard />
          </div>
        )}

        {(cityFilter === 'Dubai') && (
          <div>
            <CityCard />
          </div>
        )}

        {(sentimentFilter === 'Positive') && (
          <div>
            <SentimentCard />
          </div>
        )}

        {/* Add more combinations based on your needs */}
      </div>
    </Container>
  );
};

// Example card components
const SourceCard = () => (
  <Card variant="outlined" sx={{ marginBottom: 2 }}>
    <CardContent>
      <Typography variant="h6">Source Card</Typography>
      <Typography>Details about the source...</Typography>
    </CardContent>
  </Card>
);

const CityCard = () => (
  <Card variant="outlined" sx={{ marginBottom: 2 }}>
    <CardContent>
      <Typography variant="h6">City Card</Typography>
      <Typography>Details about the city...</Typography>
    </CardContent>
  </Card>
);

const SentimentCard = () => (
  <Card variant="outlined" sx={{ marginBottom: 2 }}>
    <CardContent>
      <Typography variant="h6">Sentiment Card</Typography>
      <Typography>Details about the sentiment...</Typography>
    </CardContent>
  </Card>
);

export default FilterComponent;

