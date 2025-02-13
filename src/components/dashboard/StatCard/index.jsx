import React from 'react';
import { Box, Paper, Typography, LinearProgress } from '@mui/material';

const StatCard = ({ title, value, icon, color }) => (
  <Paper 
    elevation={3}
    className="h-40 rounded-xl overflow-hidden"
    sx={{
      background: `linear-gradient(135deg, ${color}11 0%, ${color}22 100%)`,
      transition: 'all 0.3s ease',
      animation: 'fadeIn 0.5s ease-out', 
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 3
      },
      '@keyframes fadeIn': {
        '0%': {
          opacity: 0,
          transform: 'translateY(20px)'
        },
        '100%': {
          opacity: 1,
          transform: 'translateY(0)'
        }
      }
    }}
  >
    <Box className="p-6 h-full relative">
      <Box className="flex justify-between items-start mb-4">
        <Box 
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
          sx={{ backgroundColor: `${color}22` }}
        >
          {icon}
        </Box>
      </Box>
      <Box>
        <Typography className="text-gray-600 font-medium mb-3 text-lg">
          {title}
        </Typography>
        <Typography className="text-4xl font-bold" sx={{ color }}>
          {value}
        </Typography>
      </Box>
      <LinearProgress 
        variant="determinate" 
        value={70} 
        className="absolute bottom-0 left-0 right-0"
        sx={{ 
          height: 6,
          backgroundColor: `${color}22`,
          '& .MuiLinearProgress-bar': {
            backgroundColor: color
          }
        }}
      />
    </Box>
  </Paper>
);

export default StatCard;