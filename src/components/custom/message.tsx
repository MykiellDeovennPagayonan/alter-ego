import { type FC } from "react";

interface MessageProps {
  role: string
  message: string
}

const Message: FC<MessageProps> = ({role, message}) => {
  return (
    <div className={`w-full p-4 rounded-xl border-gray-300 border ${role === "user" ? 'bg-white' : 'bg-blue-50'}`}>
      <div className="flex flex-col justify-between">
        <div>
          <span className="font-semibold">{role === "user" ? "You" : "Alter Ego"}</span>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message