import { useEffect, useState } from 'react';
import { Button, Checkbox, FormControlLabel, Skeleton } from "@mui/material";
import axiosInstance, { endpoints, fetcher } from "../../utils/axios";
import useSWR, { mutate } from 'swr';
import { useSnackbar } from '../../components/Snackbar';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs/custom-breadcrumbs';
import { useNavigate, useParams } from 'react-router-dom';

const permissionsStructure = {
    blog: { c: 'Create', r: 'Read', u: 'Update', d: 'Delete' }
};

const RoleDetail = () => {
    const { enqueueSnackbar } = useSnackbar();
    const { id: roleId } = useParams();
    const navigate = useNavigate();

    const URL = `${endpoints.role.details}/${roleId}`;
    const { data, isLoading, error } = useSWR(URL, fetcher);


    const [permissions, setPermissions] = useState([]);

    useEffect(() => {
        if (data) {
            setPermissions(data.permissions);
        }
    }, [data]);

    const handlePermissionChange = (category, permission) => {
        setPermissions((prevPermissions) => {
            // Toggle the specific permission within the category
            const updatedCategoryPermissions = {
                ...prevPermissions[category],
                [permission]: !prevPermissions[category][permission],
            };

            // Return the updated permissions object
            return {
                ...prevPermissions,
                [category]: updatedCategoryPermissions,
            };
        });
    };

    const handleSave = async () => {
        try {
            const response = await axiosInstance.put(`${endpoints.role.update}/${roleId}`, { permissions });
            if (response.data) {
                enqueueSnackbar('Permissions updated successfully!');
                navigate('/role-management')
            }
        } catch (err) {
            enqueueSnackbar(err.error || 'Something went wrong!', { variant: 'error' });
        }
    };

    if (isLoading) return <Skeleton animation="wave" variant="rectangular" style={{ width: '100%', height: '200px' }} />;
    if (error) return <div>Error loading role details</div>;

    return (
        <div className='overflow-y-auto h-full'>
            <CustomBreadcrumbs
                heading={`Role Details: ${data.name}`}
                links={[
                    { name: 'Role Management', href: '/role-management' },
                    { name: data.name },
                ]}
                sx={{ mb: { xs: 3, md: 5 } }}
            />

            {!isLoading && <div className="my-5">
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
                <Button variant="contained" className='float-right' color="primary" onClick={handleSave}>
                    Save
                </Button>
            </div>}
        </div>
    );
};

export default RoleDetail;
