import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, IconButton, Switch, TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom'
import axiosInstance, { endpoints } from '../../utils/axios';
import { useSnackbar } from '../../components/snackbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';

// Validation schema using yup
const validationSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    tags: yup.string(),
    category: yup.string().required('Category is required'),
    subcategory: yup.string(),
    body: yup.string().required('Body is required'),
});

// Common TextField Component
const TextFieldComponent = ({ name, control, label, defaultValue, ...other }) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                        },
                    }}
                    label={label}
                    fullWidth
                    error={!!error}
                    helperText={error ? error.message : ''}
                    {...other}
                />
            )}
        />
    );
};

const BlogForm = () => {

    const { state } = useLocation();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    let action, blogId;
    if (state) {
        blogId = state._id;
        action = 'edit';
    } else {
        action = 'add';
    }

    const defaultValues = {
        title: state ? state.title : '',
        tags: state ? state.tags.join(',') : '',
        category: state ? state.category : '',
        subcategory: state ? state.subcategory.join(',') : '',
        body: state ? state.body : '',
        isPublished: state ? state.isPublished : false
    };

    const { handleSubmit, control, formState: { isSubmitting }, } = useForm({ resolver: yupResolver(validationSchema), defaultValues });


    const handleAction = async (formData) => {
        const url = action === 'add' ? endpoints.blog.add : `${endpoints.blog.update}/${blogId}`;

        try {

            const payloadData = {
                title: formData.title,
                tags: formData.tags.split(','),
                category: formData.category,
                subcategory: formData.subcategory.split(','),
                body: formData.body,
                isPublished: formData.isPublished
            }
            const response = action === 'add' ? await axiosInstance.post(url, payloadData) : await axiosInstance.put(url, payloadData)

            if (response.data.status) {
                enqueueSnackbar(action === 'add' ? 'Blog added successfully!' : 'Blog updated successfully!');
                navigate(-1);
            }
        } catch (err) {
            enqueueSnackbar(err.error || 'Something went wrong!', { variant: 'error' });
        }
    };

    return (
        <div className='flex  items-center h-screen flex-col'>
            <div className='blog-page-header flex justify-start items-center w-full gap-x-10'>
                <div>
                    <IconButton onClick={() => navigate(-1)}>
                        <ArrowBackIcon />
                    </IconButton>
                </div>

                <h1 className='text-2xl my-10 font-bold'>{action === 'add' ? 'Create Blog' : 'Update Blog'}</h1>
            </div>
            <Grid className='blog-form' spacing={2} style={{ width: '50%', mt: 2 }} container>
                <Grid item xs={12} md={6}>
                    <TextFieldComponent name="title" control={control} label="Title" required />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextFieldComponent name="tags" control={control} label="Tags" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextFieldComponent name="category" control={control} label="Category" required />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextFieldComponent name="subcategory" control={control} label="Subcategory" />
                </Grid>
                <Grid item xs={12}>
                    <TextFieldComponent
                        name="body"
                        required
                        control={control}
                        label="Body"
                        multiline
                        rows={6}
                    />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Controller
                        name="isPublished"
                        control={control}
                        defaultValue={defaultValues.isPublished}
                        render={({ field }) => (
                            <FormControlLabel
                                control={<Checkbox {...field} checked={field.value} color="primary" />}
                                label="Do you want to publish this blog?"
                            />
                        )}
                    />

                </Grid>

                <Grid item xs={12} sx={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                    <LoadingButton
                        fullWidth
                        color="success"
                        onClick={handleSubmit(handleAction)}
                        variant="contained"
                        sx={{ borderRadius: '10px', width: '150px' }}
                        loading={isSubmitting}
                    >
                        {action === 'add' ? 'ADD BLOG' : 'UPDATE BLOG'}
                    </LoadingButton>
                    <Button variant='contained' sx={{ borderRadius: '10px' }} color='error' onClick={() => { navigate(-1) }}>CANCEL</Button>
                </Grid>

            </Grid>
        </div>
    )
}

export default BlogForm