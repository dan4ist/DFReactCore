import { Box, Typography } from '@mui/material';
import { NavMainButtons } from '../components/NavMainButtons';

export function HomeContent() {
    return (
        <div>
            <Box
                className='Box'
                sx={{
                    display: 'flex',
                    m: 10
                }}>
                <NavMainButtons />
            </Box>
            <Box
                className='Box'
                sx={{
                    display: 'flex',
                    minHeight: '100vh',
                    m: 10,
                    wordWrap: 'break-word',
                    maxWidth: '800px'
                }}>
                <Typography
                    variant='overline'>
                    Welcome to my personal site.
                </Typography>
                <Typography
                    variant='body1'
                    align='justify'>
                    This will hopefully show some of my competencies while also
                    expanding my knowledge with new technologies.
                    <br />
                    <br />
                    This site is built with a .NET 9 API back-end
                    and React/Vite front-end. This application is also leveraging Material UI for styling and
                    React-Router for navigation.
                    <br />
                    <br />
                    Please feel free to look around and contact me if you have any job opportunities available
                    that might be a good fit! (github: dan4ist)
                    <br />
                    <br />

                    Thanks,
                    <br />

                    Dan
                </Typography>
            </Box>
        </div>
        
    );
}

export default HomeContent;