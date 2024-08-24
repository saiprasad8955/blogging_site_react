import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import { Grid, MenuItem, TextField, FormControl, InputLabel, Select } from '@mui/material';
import useSWR from 'swr';
import axiosInstance, { endpoints, fetcher } from '../../utils/axios';
import { LoadingButton } from '@mui/lab';
import { useSnackbar } from '../../components/Snackbar';


const UserDetails = () => {
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const [user, setUser] = useState({});
    const [roles, setRoles] = useState([]);
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    // Fetch user details
    const userURL = `${endpoints.user.details}/${id}`;
    const { data: userAPIData, error: userError, isLoading: userLoading } = useSWR(userURL, fetcher);

    // Fetch roles list
    const { data: rolesData, error: rolesError } = useSWR(endpoints.role.list, fetcher);

    // Update user and roles state when data is fetched
    useEffect(() => {
        if (userAPIData) {
            setUser(userAPIData.data);
            setRole(userAPIData.data.role._id)
        }
    }, [userAPIData]);

    useEffect(() => {
        if (rolesData) {
            setRoles(rolesData.data);
        }
    }, [rolesData]);


    const breadCrumb = (
        <CustomBreadcrumbs
            heading="User Details"
            links={[
                { name: 'User Management', href: '/user-management' },
                { name: 'Details' },
            ]}
            sx={{
                mb: { xs: 3, md: 5 },
            }}
        />
    )
    // Show loading state
    if (userLoading) {
        return (
            <>
                {breadCrumb}
                <div className='overflow-y-auto h-full w-full flex justify-center items-center'>
                    Loading...
                </div>
            </>
        );
    }

    // Show error state
    if (userError || rolesError) {
        return (
            <>
                {breadCrumb}
                <div className='overflow-y-auto h-full w-full flex justify-center items-center'>
                    Error occurred while fetching data...
                </div>
            </>
        );
    }


    const handleUpdate = async () => {
        const url = `${endpoints.user.update}/${id}`;

        try {

            const payload = { roleId: role }
            const response = await axiosInstance.put(url, payload)

            if (response.data) {
                enqueueSnackbar('User role updated!');
                navigate('/user-management');
            };

        } catch (err) {
            enqueueSnackbar(err.error || 'Something went wrong!', { variant: 'error' });
        }
    }

    return (
        <div className='overflow-y-auto h-full'>
            {breadCrumb}

            {
                !userError &&
                <Grid container spacing={2} sx={{ mt: 5 }}>
                    <Grid item xs={12} md={6}>
                        <TextField label='Title' value={user?.title} fullWidth disabled />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField label='First Name' value={user?.fname} fullWidth disabled />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField label='Last Name' value={user?.lname} fullWidth disabled />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField label='Email' value={user?.email} fullWidth disabled />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="role-select-label">Role</InputLabel>
                            <Select
                                labelId="role-select-label"
                                id="role-select"
                                value={role}
                                label="Role"
                                onChange={handleChange}
                            >
                                {
                                    roles.map((role) => (
                                        <MenuItem key={role._id} value={role._id}>
                                            {role.name}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} className='flex justify-end gap-x-2'>
                        <LoadingButton color='success' variant='contained' onClick={handleUpdate}>UPDATE</LoadingButton>
                        <LoadingButton color='error' variant='contained' onClick={() => navigate('/user-management')}>CANCEL</LoadingButton>
                    </Grid>
                </Grid>
            }

        </div>
    )
}

export default UserDetails