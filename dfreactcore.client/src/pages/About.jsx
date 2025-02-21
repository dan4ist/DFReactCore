import { NavMenu } from '../components/NavMenu';
import { Box, Avatar, Typography } from '@mui/material';

function About() {
  return (
	<div>
		<NavMenu />
		  <Box
			  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10  }}
		  >
			  <Avatar alt='df' src='./src/assets/img/df2.jpg' sx={{ width: 200, height: 200 }} />
		  </Box>
		  <Box
			  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}
		  >
			  <Typography variant="h5" component="div" sx={{ mt: 4 }}>
				  Daniel Forrest
			  </Typography>
			  <Typography color="text.secondary" sx={{ mt: 4, px: 4, maxWidth: '800px' }}>
				  This site was created using Visual Studio 2022 and Visual Studio Code.
				  The solution is utilizing an Azure SQL and .NET API backend, and React+Vite frontend.
				  <br />
				  <br />
				  FE Packages include: rough.js, react-router, and Material UI for styling.
				  <br />
				  <br />
				  BE Packages include: Dapper and Swashbuckle/Swagger.
				  <br />
				  <br />
				  Contact: <a href='mailto:dan4ist@gmail.com'>dan4ist@gmail.com</a>
				  <br />
				  <br />
				  <a href='https://www.linkedin.com/in/danforrest/'>LinkedIn</a>
			  </Typography>
		  </Box>
	</div>

  );
}

export default About;