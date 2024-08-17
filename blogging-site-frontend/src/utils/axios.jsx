import axios from 'axios';
// config
// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: 'http://localhost:3000' });

axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args) => {
    const [url, config] = Array.isArray(args) ? args : [args];

    const res = await axiosInstance.get(url, { ...config });

    return res.data;
};

// ----------------------------------------------------------------------

export const endpoints = {
    auth: {
        me: '/me',
        login: '/login',
        register: '/createAuthor',
    },
    blog: {
        add: '/createBlogs',
        list: '/getBlogs',
        update: '/UpdateBlogs',
        delete: '/deleteBlogsById',
        details: '/blog'
    }
};