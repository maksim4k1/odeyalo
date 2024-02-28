"use client";

import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import styles from "./styles.module.scss";
import Form from "@/components/UI/Form";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button/PrimaryButton";
import PageTitle from "@/components/UI/Titles/PageTitle";
import Container from "@/components/UI/Containers/FormContainer";
import AuthButtons from "@/components/UI/AuthButtons";

interface Props {}

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterPage: FunctionComponent<Props> = ({}) => {
  const [formState, setFormState] = useState(initialState);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormState((currentFormState) => ({
      ...currentFormState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <Container>
      <PageTitle>Регистрация</PageTitle>
      <Form
        title="Регистрация"
        onSubmit={onSubmitHandler}
      >
        <Input
          labelText="Ваше имя"
          name="name"
          type="text"
          placeholder="Введите имя"
          value={formState.name}
          onChange={onChangeHandler}
        />
        <Input
          labelText="Электронная почта"
          name="email"
          type="email"
          placeholder="Введите адрес почты"
          value={formState.email}
          onChange={onChangeHandler}
        />
        <Input
          labelText="Пароль"
          name="password"
          type="password"
          placeholder="Создайте пароль"
          value={formState.password}
          onChange={onChangeHandler}
        />
        <Input
          labelText="Пароль повторно"
          name="confirmPassword"
          type="password"
          placeholder="Повторите пароль"
          value={formState.confirmPassword}
          onChange={onChangeHandler}
        />
        <AuthButtons className={styles.authButtons}>
          <Button type="submit">Зарегистрироваться</Button>
        </AuthButtons>
        {/* <p>
          Уже есть аккаунт? <Link href="/login">Войти</Link>
        </p> */}
      </Form>
    </Container>
  );
};

export default RegisterPage;
