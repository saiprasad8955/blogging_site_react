import { Link } from "react-router-dom"

const PageNotFound = () => {

    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75')] bg-cover bg-center h-screen">
            <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 ">
                <div className="text-center">
                    <p className="text-base font-semibold ">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Not Found</h1>
                    <p className="mt-6 text-base leading-7 text-gray-200">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/"
                            className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white  shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >
                            &larr; Back to home
                        </Link>
                        <Link
                            to="/"
                            className="rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PageNotFound;