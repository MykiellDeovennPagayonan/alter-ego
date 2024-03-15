import React, { type FC } from "react";

interface MessageProps {
  role: string;
  message: string;
}

const Message: FC<MessageProps> = ({ role, message }) => {
  const formattedMessage = message.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");

  const messages = formattedMessage.split("\n\n");

  return (
    <div
      className={`w-full p-4 rounded-xl border-gray-300 border ${
        role === "user" ? "bg-white" : "bg-blue-50"
      }`}
    >
      <div className="flex flex-col justify-between">
        <div>
          <span className="font-semibold">
            {role === "user" ? "You" : "Alter Ego"}
          </span>
        </div>
        <div className="space-y-2">
          {role === "model" ? messages.map((paragraph, index) => (
            <div key={index}>
              {paragraph.split("\n").map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  <span dangerouslySetInnerHTML={{ __html: line }} />
                  <br />
                </React.Fragment>
              ))}
            </div>
          ))
          :
          message
        }
        </div>
      </div>
    </div>
  );
};

export default Message;