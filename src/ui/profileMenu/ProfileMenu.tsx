"use client";
import Cookies from "js-cookie";
import { TbLogout2 } from "react-icons/tb";
import scss from "./ProfileMenu.module.scss";
import { useHeaderStore } from "@/stores/useHeaderStore";
import { useGetMeQuery } from "@/redux/api/auth";
import Image from "next/image";
import Login from "@/appPages/auth/components/pages/login";
import { useState, useEffect } from "react";
import SignUpPage from "@/appPages/auth/components/pages/SignUpPage";
import { usePathname } from "next/navigation";
import Link from "next/link";
import userLogo from "@/assets/user.png";

const ProfileMenu = () => {
  const { isOpenProfileMenu, setIsOpenProfileMenu, links } = useHeaderStore();
  const { status, data: userData } = useGetMeQuery();

  const [isOpenAuth, setIsOpenAuth] = useState(true);
  const pathname = usePathname();

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("refresh");
    Cookies.remove("user");
    window.location.reload();
  };

  const tokenExists = Boolean(Cookies.get("token"));
  const isRejected = !tokenExists || status === "rejected";

  const parsedUser = userData || null;

  return (
    <div
      className={
        isOpenProfileMenu
          ? `${scss.ProfileMenu} ${scss.active}`
          : `${scss.ProfileMenu}`
      }
      onClick={(e) => e.stopPropagation()}
    >
      {isRejected || !parsedUser ? (
        <>
          {isOpenAuth ? (
            <SignUpPage setIsOpenAuth={setIsOpenAuth} />
          ) : (
            <Login setIsOpenAuth={setIsOpenAuth} />
          )}
        </>
      ) : (
        <div className={scss.content}>
          <div className={scss.user}>
            <div className={scss.user_cont}>
              <h3>{parsedUser?.username}</h3>
              <Image
                src={parsedUser?.user_image || userLogo}
                alt={parsedUser?.username || "User"}
                width={70}
                height={70}
                className={scss.avatar}
              />
              <div className={scss.username}>
                <h2>{parsedUser?.username}</h2>
                <p>{parsedUser?.email}</p>
              </div>
            </div>
          </div>
          <nav className={scss.nav}>
            <ul>
              {links.map((item, index) => (
                <li key={index}>
                  <Link
                    className={
                      pathname === item.href
                        ? `${scss.link} ${scss.active}`
                        : `${scss.link}`
                    }
                    href={item.href}
                    onClick={() => setIsOpenProfileMenu(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href=""
            className={`${scss.logout} ${isOpenProfileMenu ? scss.active : ""}`}
            onClick={handleLogout}
          >
            <TbLogout2 />
            Выйти
          </a>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
