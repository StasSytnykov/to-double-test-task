import { useForm } from "react-hook-form";
import { Button } from "../../../../Button/Button";
import {
  ReqFormDiv,
  ReqInput,
  ReqInputThumb,
  ReqAlertText,
  ReqButtonThumb,
} from "./RequestForm.styled";

export const RequestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ReqFormDiv>
        <ReqInputThumb>
          <ReqInput
            type="text"
            placeholder="Имя"
            {...register("Name", {
              required: true,
              minLength: 3,
              maxLength: 80,
            })}
          />
          {errors.Name && <ReqAlertText>Please check the name</ReqAlertText>}
        </ReqInputThumb>
        <ReqInputThumb>
          <ReqInput
            type="tel"
            placeholder="Telegram/Viber"
            {...register("Num", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
          {errors.Num && <ReqAlertText>Please check the number</ReqAlertText>}
        </ReqInputThumb>

        <ReqInputThumb>
          <ReqInput
            type="text"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.Email && <ReqAlertText>Please check the Email</ReqAlertText>}
        </ReqInputThumb>
        <ReqButtonThumb>
          <Button type="submit" title="Отправить" />
        </ReqButtonThumb>
      </ReqFormDiv>
    </form>
  );
};
