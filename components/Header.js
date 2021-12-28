import { useState, useEffect, useContext } from "react";
import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import { SearchIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";

function Header() {
  const {
    state: { user },
    dispatch,
  } = useContext(Context);
  const router = useRouter();

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    console.log(data.message);
    router.push("/login");
  };
  return (
    <header className="sticky z-50 top-0 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
      <div className=" relative items-center flex h-10 cursor-pointer my-auto">
        <Image
          src="/images/tiich.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Search your course"
        />
        <SearchIcon
          className=" hidden md:inline-flex h-8 bg-blue-400
         text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>

      <div className="flex items-center justify-end">
        {user && user.role && user.role.includes("Tutor") ? (
          <>
            <p className="font-bold text-blue-400 text-md pr-2 hidden md:inline-flex">
              Create Course
            </p>
          </>
        ) : (
          <>
            <p className="font-bold text-blue-400 text-md pr-2 hidden md:inline-flex">
              Teach
            </p>

            {user !== null && (
              <>
                <Link  href="/user">
                  <a className="mr-3 hidden md:inline-flex"> Dashboard</a>
                </Link>
                <p
                  onClick={logout}
                  className="font-bold text-blue-400 text-md pr-2 md:inline-flex cursor-pointer"
                >
                  Logout
                </p>
              </>
            )}
          </>
        )}
      </div>
      {user === null && (
        <>
          <p className="font-bold text-blue-400 text-md pr-2 hidden md:inline-flex">
            register
          </p>
        </>
      )}
    </header>
  );
}

export default Header;
