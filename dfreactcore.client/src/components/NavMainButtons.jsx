import { MultiActionCard } from '../components/mui/MultiActionCard';
import { Box } from '@mui/material';

export function NavMainButtons() {

    const data = [
        { title: 'About', description: '', imgurl: 'src/assets/img/eav.jpg'},
        { title: 'Resume', description: '', imgurl: 'src/assets/img/job.jpeg'},
        { title: 'Sandbox', description: '', imgurl: 'src/assets/img/code.jpg' },
    ];

    return (
        <Box
            sx={{
                display: 'grid',
                width: '100%',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(250px, 100%), 1fr))',
                gap: 2,
            }}>
            {data.map(item => (
                <MultiActionCard title={item.title} description={item.description} imgurl={item.imgurl} key={item.id} />
            ))}
        </Box>
  );
}

export default NavMainButtons;