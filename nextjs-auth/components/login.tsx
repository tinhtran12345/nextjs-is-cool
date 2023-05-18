import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
    const { data: session, status } = useSession();
    // console.log(session);
    if (!session) {
        return (
            <>
                <div className="flex items-center w-[80%] justify-between p-2">
                    <p>User: </p>
                    <a
                        href={`/api/auth/signin`}
                        className="px-6 py-2 bg-[blue] rounded-md text-[white] font-bold hover:bg-sky-500 "
                        onClick={(e) => {
                            e.preventDefault();
                            signIn();
                        }}
                    >
                        Log in
                    </a>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="flex items-center w-[80%] justify-between p-2">
                <p>User: </p>
                <a
                    href={`/api/auth/signout`}
                    className="px-6 py-2 bg-[blue] rounded-md text-[white] font-bold hover:bg-sky-500 "
                    onClick={(e) => {
                        e.preventDefault();
                        signOut();
                    }}
                >
                    Sign out
                </a>
            </div>
        </>
    );
};

export default Login;
