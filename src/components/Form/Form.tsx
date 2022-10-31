import Input from "../Input/Input";
import CheckBox from "../CheckBox/CheckBox";
import Button from "../Button/Button";
import { useInput } from "../../hooks/useInput";

function Form() {
  const name = useInput("", { isEmpty: true });
  const company = useInput("", { isEmpty: true });
  const email = useInput("", { isEmpty: true });
  const phone = useInput("", { isEmpty: true });
  const subject = useInput("", { isEmpty: true });
  const message = useInput("", { isEmpty: true });
  return (
    <form className=" sm:mx-0 mx-12 y-0 mx-auto text-center flex bg-stone-300 flex-col w-screen h-screen ">
      <div className="xl:w-1/4 lg:w-1/3 sm:w-1/2  mx-auto my-24 ">
        <span className="text-xl font-bold text-white">Hello</span>

        <div className="bg-gray-200 rounded-lg p-12">
          <div>for business enquiries please use the form below</div>
          {name.isDirty && name.isEmpty && (
            <div style={{ color: "red" }}>Поле не может быть пустым</div>
          )}
          <Input valid={name} required={true} name={"Name"} />
          {company.isDirty && company.isEmpty && (
            <div style={{ color: "red" }}>Поле не может быть пустым</div>
          )}
          <Input valid={company} required={true} name={"Company"} />
          {email.isDirty && email.isEmpty && (
            <div style={{ color: "red" }}>Поле не может быть пустым</div>
          )}
          <Input valid={email} required={true} name={"E-Mail"} />
          {phone.isDirty && phone.isEmpty && (
            <div style={{ color: "red" }}>Поле не может быть пустым</div>
          )}
          <Input valid={phone} required={false} name={"Phone"} />
          {subject.isDirty && subject.isEmpty && (
            <div style={{ color: "red" }}>Поле не может быть пустым</div>
          )}
          <Input valid={subject} required={false} name={"Subject"} />
          {message.isDirty && message.isEmpty && (
            <div style={{ color: "red" }}>Поле не может быть пустым</div>
          )}
          <Input valid={message} required={true} name={"Message"} />
          <CheckBox />
          <Button
            disabled={
              !name.inputValid ||
              !company.inputValid ||
              !email.inputValid ||
              !phone.inputValid ||
              !subject.inputValid ||
              !message.inputValid
            }
            text={"Send"}
          />
        </div>
      </div>
    </form>
  );
}

export default Form;
