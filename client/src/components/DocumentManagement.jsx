import React, { useState } from 'react';
import { Box, Button, Typography, TextField, Paper, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ff from './ff.jpg'; // Import the background image

const DocumentManagement = () => {
  const [documents, setDocuments] = useState([]);
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUpload = () => {
    if (file && description) {
      const newDocument = {
        id: documents.length + 1,
        name: file.name,
        description,
      };
      setDocuments([...documents, newDocument]);
      setFile(null);
      setDescription('');
    }
  };

  const handleClearFile = () => {
    setFile(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 4,
        height: '100vh',
        backgroundImage: `url(${ff})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        },
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 3,
          backgroundColor: 'white',
          maxWidth: 600,
          width: '100%',
          borderRadius: 2,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
          Document Management
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Safe storage for all your important documents.
        </Typography>

        <Box>
          <Box display="flex" alignItems="center" mb={2}>
            <TextField
              type="file"
              inputProps={{ 'aria-label': 'Upload document file' }}
              onChange={handleFileChange}
              fullWidth
            />
            {file && (
              <IconButton onClick={handleClearFile} aria-label="Clear file">
                <ClearIcon />
              </IconButton>
            )}
          </Box>

          <TextField
            label="Description"
            value={description}
            onChange={handleDescriptionChange}
            fullWidth
            aria-label="Enter document description"
            sx={{ mb: 2 }}
          />
        </Box>

        <Button onClick={handleUpload} variant="contained" color="primary" fullWidth aria-label="Upload document">
          Upload Document
        </Button>

        <Typography variant="h6" sx={{ mt: 3 }}>
          Uploaded Documents
        </Typography>
        <Box sx={{ mt: 2 }}>
          {documents.map((doc) => (
            <Paper key={doc.id} elevation={1} sx={{ padding: 1, mb: 1 }}>
              <Typography variant="body2">
                <strong>{doc.name}</strong> - {doc.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default DocumentManagement;
