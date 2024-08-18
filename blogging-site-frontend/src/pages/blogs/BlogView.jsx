// src/pages/BlogDetail.jsx
import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import { endpoints, fetcher } from '../../utils/axios';
import { Button, Chip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import Iconify from '../../components/Iconify';

const BlogView = () => {
    const { id } = useParams();

    const URL = `${endpoints.blog.details}/${id}`;

    const { data, error, isLoading } = useSWR(URL, fetcher);

    const blog = data ? data.data : {};

    const renderBackButton = () => (
        <div className="mb-4">
            <CustomBreadcrumbs
                heading="Blog Details"
                links={[
                    { name: 'Home', href: '/home' },
                    { name: 'Blog', href: '/blog' },
                    { name: 'View' },
                ]}
                sx={{
                    mb: { xs: 3, md: 5 },
                }}
            />
        </div>
    );

    const renderContent = () => {
        if (error) {
            return (
                <div className="text-center p-6 ">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">No Blog Found</h2>
                    <p className="text-gray-600">The blog you are looking for does not exist or has been removed. Please check the URL or try again later.</p>
                </div>
            );
        }

        if (isLoading) {
            return <p className="text-gray-600 text-lg text-center">Loading...</p>;
        }

        return (
            <div className='h-full'>
                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

                <div className="text-gray-600 mb-4">
                    <div className="mb-2">
                        <span className="font-semibold">Category:</span> {blog.category || 'N/A'}
                    </div>
                    <div className="mb-2">
                        <span className="font-semibold">Subcategory:</span> {blog.subcategory || 'N/A'}
                    </div>
                    <div className="mb-4">
                        <span className="font-semibold">Publish Status: </span>
                        <Chip
                            label={blog.isPublished ? 'Published' : 'Not Published'}
                            color={blog.isPublished ? 'success' : 'error'}
                            icon={
                                blog.isPublished ? (
                                    <CheckCircleIcon style={{ color: 'white' }} />
                                ) : (
                                    <CancelIcon style={{ color: 'white' }} />
                                )
                            }
                            sx={{
                                padding: '4px 8px',
                                borderRadius: '16px',
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                                backgroundColor: blog.isPublished ? '#4caf50' : '#f44336',
                                color: 'white',
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                            }}
                        />
                    </div>
                    <div className="mb-2">
                        <span className="font-semibold">Published on:</span> {blog.publishedDate ? new Date(blog.publishedDate) : 'N/A'}
                    </div>
                </div>

                <div className="max-w-full h-[100px] overflow-y-auto ">
                    <span className="font-semibold">Body:</span>
                    <p>{blog.body}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="overflow-y-auto h-full">
            {renderBackButton()}
            {renderContent()}
        </div>
    );
};

export default BlogView;
