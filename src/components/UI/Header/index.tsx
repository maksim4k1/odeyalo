"use client";

import { FunctionComponent, useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import LogoIcon from "@/assets/svg/Icons/Logo";
import Container from "../Container";
import ProfileImage from "../Images/ProfileImage";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  selectAuthIsAuth,
  selectAuthLoginState,
} from "@/redux/features/auth/selectors";
import { getToken } from "@/storage/token";
import AuthServise from "@/api/auth";

const Header: FunctionComponent = ({}) => {
  const isAuth: boolean = useAppSelector(selectAuthIsAuth);
  const { isLoading } = useAppSelector(selectAuthLoginState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuth) {
      const token: string | null = getToken();
      if (token) dispatch(AuthServise.loginByToken(token));
    }
  }, [isAuth]);

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link
          href="/"
          className={styles.logo}
        >
          <LogoIcon />
        </Link>
        {/* <nav className={styles.nav}>
          <Link
            className={styles.navLink}
            href="/"
          >
            План
          </Link>
          <Link
            className={styles.navLink}
            href="/"
          >
            Теория
          </Link>
          <Link
            className={styles.navLink}
            href="/"
          >
            Практика
          </Link>
          <Link
            className={styles.navLink}
            href="/"
          >
            Психолог
          </Link>
        </nav> */}
        {isAuth ? (
          <Link
            href="/psychologist"
            className={styles.profileContainer}
          >
            <ProfileImage
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
              size={54}
            />
          </Link>
        ) : isLoading ? (
          <PrimaryButton disabled={isLoading}>Загрузка...</PrimaryButton>
        ) : (
          <PrimaryButton href="/auth/login">Войти</PrimaryButton>
        )}
      </Container>
    </header>
  );
};

export default Header;
