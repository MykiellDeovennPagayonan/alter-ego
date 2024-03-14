"use client"

import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import Message from "~/components/custom/message"
import getChatResponse from "~/utils/getChatResponse"

type Message = {
  role: string
  parts: string
}

export default function Chat() {
  const [messages, setMessages] = useState<Array<Message>>([])
  const [inputValue, setInputValue] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  async function handleSendMessage() {
    if (inputValue.trim() !== "") {
      setIsDisabled(true)
      setMessages([...messages, { role: "user", parts: inputValue }])

      const messagesInitial = messages
      const reply = await getChatResponse(messagesInitial, inputValue)

      setMessages([...messages, { role: "user", parts: inputValue }, { role: "model", parts: reply }])
      setIsDisabled(false)

      setInputValue("")
    }
  }

  async function handleInputKeyDown (e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      await handleSendMessage()
    }
  }

  return (
    <div className="flex flex-col items-center w-screen h-screen bg-gray-100 text-white">
      <div className="flex flex-col h-full w-full overflow-y-scroll text-black scrollbar">
        <div className="flex flex-col gap-2 w-3/5 mx-auto p-8 pb-28">
          {messages.map((message, index) => {
            return <Message key={index} role={message.role} message={message.parts} />
          })}
        </div>
      </div>
      <div className="fixed mx-auto w-3/5 bottom-0 flex h-20 gap-4 bg-white p-4 border-gray-300 border-2 rounded-t-xl">
        <Input
          type="text"
          placeholder="Message Alter Ego..."
          className="text-black rounded-full"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          disabled={isDisabled}
        />
        <Button type="button" className="bg-gray-800" onClick={handleSendMessage} disabled={isDisabled}>
          Send
        </Button>
      </div>
    </div>
  )
}