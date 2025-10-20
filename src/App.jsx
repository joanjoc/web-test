import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Container, Typography, Button, Stack, AppBar, Toolbar, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const theme = createTheme()

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Web Test
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          React + MUI Test Page
        </Typography>

        <Typography variant="body1" paragraph>
          This is a small demo page using React and Material UI (MUI). Click the button below to see an action.
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={() => alert('Hello from MUI!')}>Primary</Button>
          <Button variant="outlined" onClick={() => alert('Hello Secondary!')}>Secondary</Button>
        </Stack>
      </Container>
    </ThemeProvider>
  )
}
