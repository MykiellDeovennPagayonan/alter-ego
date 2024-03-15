import { type FC } from "react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "~/components/ui/sheet"
import MemoryFragment from "./memoryFragment"

interface MemoryProps {
  memories: Array<string>
}

const Memory: FC<MemoryProps> = ({memories}) => {

  return (
    <Sheet>
      <SheetTrigger className="fixed top-4 right-4 bg-black text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md text-sm font-medium">
        Memory
      </SheetTrigger>
      <SheetContent className="pt-10">
        <div className="flex gap-2 flex-col w-full h-full overflow-y-scroll scrollbar">
          {memories.map((memory, index) => {
            return <MemoryFragment key={index} memory={memory}/>
          })}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Memory