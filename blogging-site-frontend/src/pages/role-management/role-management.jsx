import { useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, IconButton, Skeleton, TextField } from "@mui/material";
import axiosInstance, { endpoints, fetcher } from "../../utils/axios";
import { ConfirmDialog } from '../../components/custom-dialog';
import useSWR, { mutate } from 'swr';
import { useSnackbar } from '../../components/Snackbar';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs/custom-breadcrumbs';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const permissionsStructure = {
    blog: { c: 'Create', r: 'Read', u: 'Update', d: 'Delete' }
};

const RoleManagement = () => {
    const { enqueueSnackbar } = useSnackbar();

    const [deleteDialog, setDeleteDialog] = useState(false);
    const [idToDelete, setIdToDelete] = useState('');

    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [roleId, setRoleId] = useState('');
    const [roleName, setRoleName] = useState('');
    const [permissions, setPermissions] = useState({
        blog: { c: false, r: false, u: false, d: false }
    });
    const handleOpen = () => { setEdit(false); setOpen(true); }
    const handleClose = () => { setOpen(false); setEdit(false) }

    const URL = endpoints.role.list;
    const { data, isLoading, error } = useSWR(URL, fetcher);
    const roleList = !error ? data?.data : [];

    const onDelete = async () => {
        const url = `${endpoints.role.delete}/${idToDelete}`;
        try {
            console.log("🚀 ~ onDelete ~ url:", url)
            const response = await axiosInstance.delete(url);
            console.log("🚀 ~ onDelete ~ response:", response)
            if (response.data) {
                enqueueSnackbar('Delete success!');
                mutate(URL);
                setDeleteDialog(false);
            }
        } catch (err) {
            enqueueSnackbar(err.error || 'Something went wrong!', { variant: 'error' });
            setDeleteDialog(false);
        }
    };

    const handleAddRole = async () => {
        try {


            const response = await axiosInstance.post(endpoints.role.add, roleData);
            if (response.data.status) {
                enqueueSnackbar('Role added successfully!', { variant: 'success' });
                // Clear form fields
                setRoleName('');
                setPermissions(permissionsStructure);
                setOpen(false);
                mutate(endpoints.role.list);
            }
        } catch (err) {
            console.log("🚀 ~ handleAddRole ~ err:", err)
            enqueueSnackbar(err.response?.data?.message || 'Something went wrong!', { variant: 'error' });
        }
    };

    const handleUpdateRole = async (req, res) => {

    };

    const handleAction = async () => {
        const url = !edit ? endpoints.role.add : `${endpoints.role.update}/${roleId}`;

        const roleData = {
            name: roleName,
            permissions,
        };

        try {

            const response = !edit ? await axiosInstance.post(url, roleData) : await axiosInstance.put(url, roleData)

            if (response.data) {
                enqueueSnackbar(!edit ? 'Role added successfully!' : 'Role updated successfully!');
                // Clear form fields
                setOpen(false);
                setEdit(false);
                mutate(endpoints.role.list);
                setTimeout(() => {
                    setRoleName('');
                    setPermissions(permissionsStructure);
                }, 400)

            }
        } catch (err) {
            enqueueSnackbar(err.error || 'Something went wrong!', { variant: 'error' });
        }
    };

    const handlePermissionChange = (category, permission) => {
        setPermissions((prevPermissions) => ({
            ...prevPermissions,
            [category]: {
                ...prevPermissions[category],
                [permission]: !prevPermissions[category][permission],
            },
        }));
    };



    return (
        <div className='overflow-y-auto h-full'>
            <div>
                <CustomBreadcrumbs
                    heading="Role Management"
                    links={[
                        { name: 'Role Management', href: '/role-management' },
                        { name: 'List' },
                    ]}
                    sx={{
                        mb: { xs: 3, md: 5 },
                    }}
                    action={
                        <Button variant="contained" color="primary" onClick={handleOpen}>
                            Add Role
                        </Button>
                    }
                />
            </div>

            <div className="border-amber-500 my-5 overflow-x-auto">
                {isLoading ? (
                    <Skeleton animation="wave" variant="rectangular" style={{ width: '100%', height: '200px' }} />
                ) : (
                    <table className="table-auto text-left border-collapse bg-white shadow-md w-[100%] ">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
                                <th className="px-4 py-2 border-b">#</th>
                                <th className="px-4 py-2 border-b">Role</th>
                                <th className="px-4 py-2 border-b text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roleList.length === 0 ? (
                                <tr>
                                    <td colSpan="3" className="text-center py-4 text-gray-600">
                                        No roles available! Please click on ADD ROLE to create.
                                    </td>
                                </tr>
                            ) : (
                                roleList.map((role, index) => (
                                    <tr className="hover:bg-gray-100" key={role._id}>
                                        <td className="px-4 py-2 border-b">{index + 1}</td>
                                        <td className="px-4 py-2 border-b"><Link to={`/role-management/${role._id}`} className='hover:cursor-pointer  hover:underline hover:text-indigo-600'>{role.name}</Link></td>
                                        <td className="px-4 py-2 border-b text-center">
                                            {/* <IconButton color="success" onClick={() => { setRoleName(role.name); setPermissions(role.permissions); setOpen(true); setEdit(true); setRoleId(role._id) }}>
                                                <EditIcon />
                                            </IconButton> */}
                                            <IconButton color="error" onClick={() => { setIdToDelete(role._id); setDeleteDialog(true); }}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                )}
            </div>

            <ConfirmDialog
                open={deleteDialog}
                onClose={() => setDeleteDialog(false)}
                title="Delete"
                content="Are you sure want to delete this role?"
                action={
                    <Button variant="contained" color="error" onClick={() => onDelete()}>
                        Delete
                    </Button>
                }
            />

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle sx={{ fontWeight: 600 }}>{edit ? 'UPDATE ROLE' : 'ADD ROLE'}</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Role Name"
                        value={roleName}
                        onChange={(e) => setRoleName(e.target.value)}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />

                    <h3 className="text-lg font-bold mb-4">Permissions</h3>
                    {Object.entries(permissionsStructure).map(([category, perms]) => (
                        <div key={category} className="mb-4">
                            <h4 className="text-md font-semibold">{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                            <div>
                                {Object.entries(perms).map(([key, label]) => (
                                    <FormControlLabel
                                        key={key}
                                        control={
                                            <Checkbox
                                                checked={permissions[category]?.[key] || false}
                                                onChange={() => handlePermissionChange(category, key)}
                                            />
                                        }
                                        label={label}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        CANCEL
                    </Button>
                    <Button
                        onClick={handleAction}
                        variant="contained"
                        color="primary"
                        disabled={!roleName} // Disable button if roleName is empty
                    >
                        {edit ? 'UPDATE ROLE' : 'ADD ROLE'}
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
};

export default RoleManagement;
