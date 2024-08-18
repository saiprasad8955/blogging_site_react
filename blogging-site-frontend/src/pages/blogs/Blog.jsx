import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { Button, Chip, IconButton, Skeleton } from "@mui/material";
import axiosInstance, { endpoints, fetcher } from "../../utils/axios";
import { ConfirmDialog } from '../../components/custom-dialog';
import useSWR, { mutate } from 'swr';
import useAuthContext from "../../auth/hook/use-context-hook"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import Iconify from '../../components/Iconify';
import { useSnackbar } from '../../components/Snackbar';


const Blog = () => {
    let { user } = useAuthContext();
    const { enqueueSnackbar } = useSnackbar();

    const [deleteDialog, setDeleteDialog] = useState(false);
    const [idToDelete, setIdToDelete] = useState('');

    const navigate = useNavigate();

    const URL = `${endpoints.blog.list}?authorId=${user?._id}`;

    const { data, isLoading, error } = useSWR(URL, fetcher);

    const blogList = !error ? data?.data : [];


    const handleAdd = () => {
        navigate('/blog/add')
    };

    const handleDelete = (id) => {
        setDeleteDialog(true);
        setIdToDelete(id);
    };

    const handleUpdate = (blog) => {
        navigate('/blog/update', { state: blog })
    };

    // TruncatedText Component
    const TruncatedText = ({ text, maxLength }) => {
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };

    const onDelete = async () => {
        const url = `${endpoints.blog.delete}/${idToDelete}`;
        try {
            const response = await axiosInstance.delete(url)
            console.log("🚀 ~ onDelete ~ response:", response)
            if (response.data.message) {
                enqueueSnackbar('Delete success!.');
                // Trigger re-fetch of the blog list
                mutate(URL);
                setDeleteDialog(false);
            }
        } catch (err) {
            console.log(err)
            enqueueSnackbar(err.error || 'Something went wrong!', { variant: 'error' });
            setDeleteDialog(false);
        }
    }

    return (
        <div className='overflow-y-auto h-full'>
            <div className="Heading flex justify-between items-center ">
                <CustomBreadcrumbs
                    heading="Blog List"
                    links={[
                        { name: 'Home', href: '/home' },
                        { name: 'Blog', href: '/blog' },
                        { name: 'List' },
                    ]}
                    action={
                        <Button variant='contained' onClick={handleAdd} startIcon={<Iconify icon="mingcute:add-line" />} sx={{ borderRadius: '10px' }}  >Add Blog</Button>
                    }
                    sx={{
                        mb: { xs: 3, md: 5 },
                    }}
                />
            </div>

            <div className="border-amber-500 my-5 overflow-x-auto">
                {
                    isLoading ?
                        <Skeleton animation="wave" variant="rectangular" style={{ width: '100%', height: '200px' }} /> :
                        <table className="table-auto text-left border-collapse bg-white shadow-md w-[100%] ">
                            <thead>
                                <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
                                    <th className="px-4 py-2 border-b">#</th>
                                    <th className="px-4 py-2 border-b">Title</th>
                                    <th className="px-4 py-2 border-b">Body</th>
                                    <th className="px-4 py-2 border-b text-center">Category</th>
                                    <th className="px-4 py-2 border-b text-center">Status</th>
                                    <th className="px-4 py-2 border-b">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogList.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="text-center py-4 text-gray-600">
                                            No blogs available! Please click on ADD BLOG to create.
                                        </td>
                                    </tr>
                                ) : (
                                    blogList.map((blog, index) => (
                                        <tr className="hover:bg-gray-100" key={blog._id}>
                                            <td className="px-4 py-2 border-b">{index + 1}</td>
                                            <td className="px-4 py-2 border-b font-bold  hover:cursor-pointer">
                                                <Link to={`/blog/${blog._id}`} >
                                                    {blog.title}
                                                </Link>
                                            </td>
                                            <td className="px-4 py-2 border-b">
                                                <TruncatedText text={blog.body} maxLength={30} />
                                            </td>
                                            <td className="px-4 py-2 border-b text-center">
                                                <TruncatedText text={blog.category} maxLength={30} />
                                            </td>
                                            <td className="px-4 py-2 border-b text-center">
                                                <Chip
                                                    label={blog.isPublished ? 'PUBLISHED' : 'NOT PUBLISHED'}
                                                    color={blog.isPublished ? 'success' : 'error'}
                                                    icon={
                                                        blog.isPublished ? <CheckCircleIcon style={{ color: 'white' }} /> : <CancelIcon style={{ color: 'white' }} />
                                                    }
                                                    className={`inline-flex items-center px-3 py-1 rounded-full text-white text-xs font-bold shadow-md ${blog.isPublished ? 'bg-green-500' : 'bg-red-500'
                                                        }`}
                                                />
                                            </td>
                                            <td className="px-4 py-2 border-b">
                                                <IconButton onClick={() => handleUpdate(blog)} color='success'>
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton onClick={() => handleDelete(blog._id)} color='error'>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                }
            </div>

            <ConfirmDialog
                open={deleteDialog}
                onClose={() => setDeleteDialog(false)}
                title="Delete"
                content="Are you sure want to delete this blog?"
                action={
                    <Button variant="contained" color="error" onClick={() => onDelete()}>
                        Delete
                    </Button>
                }
            />

        </div >
    )
}

export default Blog