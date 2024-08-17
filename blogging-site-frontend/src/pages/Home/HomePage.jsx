import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';

const HomePage = () => {

    return (
        <div className="min-h-screen flex flex-col items-center space-y-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
            <h1 className="text-white text-4xl font-bold mb-4">Publish your passions, your way</h1>
            <h3 className="text-white text-lg mb-10">Create a unique and beautiful blog easily</h3>
            <Link to="/blog" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" endIcon={<SendIcon />} >
                    Start Your Blog
                </Button>
            </Link>
        </div>
    )
}

export default HomePage