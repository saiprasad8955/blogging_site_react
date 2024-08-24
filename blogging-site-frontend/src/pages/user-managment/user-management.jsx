import { useState } from 'react';
import { Link } from "react-router-dom"
import { Button, Chip, Skeleton } from "@mui/material";
import axiosInstance, { endpoints, fetcher } from "../../utils/axios";
import { ConfirmDialog } from '../../components/custom-dialog';
import useSWR, { mutate } from 'swr';
import { useSnackbar } from '../../components/Snackbar';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs/custom-breadcrumbs';



const UserManagement = () => {

    const { enqueueSnackbar } = useSnackbar();

    const [deleteDialog, setDeleteDialog] = useState(false);
    const [idToDelete, setIdToDelete] = useState('');


    const URL = endpoints.user.list;

    const { data, isLoading, error } = useSWR(URL, fetcher);

    const userList = !error ? data?.data : [];


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
            <div >
                <CustomBreadcrumbs
                    heading="User List"
                    links={[
                        { name: 'User Management', href: '/user-management' },
                        { name: 'List' },
                    ]}
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
                                    <th className="px-4 py-2 border-b">Name</th>
                                    <th className="px-4 py-2 border-b">Email</th>
                                    <th className="px-4 py-2 border-b text-center">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userList.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="text-center py-4 text-gray-600">
                                            No blogs available! Please click on ADD BLOG to create.
                                        </td>
                                    </tr>
                                ) : (
                                    userList.map((user, index) => (
                                        <tr className="hover:bg-gray-100" key={user._id}>

                                            <td className="px-4 py-2 border-b">{index + 1}</td>
                                            <td className="px-4 py-2 border-b">{user.title}</td>
                                            <td className="px-4 py-2 border-b">
                                                <Link to={`/user-management/${user._id}`} className='hover:cursor-pointer  hover:underline hover:text-indigo-600'>
                                                    {`${user.fname} ${user.lname}`}
                                                </Link>
                                            </td>
                                            <td className="px-4 py-2 border-b">{user.email}</td>
                                            <td className="px-4 py-2 border-b text-center">
                                                <Chip label={user.role.name} />

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

export default UserManagement