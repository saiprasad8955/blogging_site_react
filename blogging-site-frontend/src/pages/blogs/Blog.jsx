import useSWR from 'swr';
import useAuthContext from "../../auth/hook/use-context-hook"
import { Link, useNavigate } from "react-router-dom"
import { endpoints, fetcher } from "../../utils/axios";
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop, Button, Chip, IconButton, Skeleton } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const Blog = () => {
    let { user } = useAuthContext();

    const navigate = useNavigate();

    const URL = `${endpoints.blog.list}?authorId=${user?._id}`;

    const { data, isLoading } = useSWR(URL, fetcher);

    const blogList = isLoading === false ? data.data : [];


    const handleAdd = () => {
        navigate('/blog/add')
    };

    const handleDelete = () => {
    };

    const handleUpdate = (blog) => {
        console.log("🚀 ~ handleUpdate ~ blog:", blog)
        navigate('/blog/update', { state: blog })
    };

    // TruncatedText Component
    const TruncatedText = ({ text, maxLength }) => {
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };


    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <div className="Heading mx-12 flex justify-between items-center">
                <h1 className=" m-2 p-2  text-slate-800 font-extrabold text-6xl">Blog List</h1>
                <div>
                    <Button variant='contained' onClick={handleAdd} sx={{ borderRadius: '10px' }} color='success' >Add Blog</Button>
                </div>
            </div>
            {
                blogList.length &&
                <div className="p-4 my-2 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800">
                    <p className="font-medium text-lg">
                        NOTE: <span className="font-semibold">Click on the title to view blog.</span>
                    </p>
                </div>
            }

            <div className=" p-10 m-2  border-amber-500 overflow-x-auto">
                {
                    isLoading ?
                        <Skeleton animation="wave" variant="rectangular" style={{ width: '100%', height: '200px' }} /> :
                        <table className="table-auto text-left border-collapse bg-white shadow-md w-full ">
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
                                            <td className="px-4 py-2 border-b font-bold hover:text-blue-400 hover:cursor-pointer">
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



        </div >
    )
}

export default Blog