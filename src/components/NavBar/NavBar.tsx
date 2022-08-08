import { AppBar, Toolbar } from '@mui/material'

const NavBar = () => {
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar
          sx={{
            display: 'flex',
            height: '80px',
          }}
        ></Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar
