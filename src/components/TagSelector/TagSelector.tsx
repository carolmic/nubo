import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

type TagSelectorProps = {
  options: string[];
};

export default function TagSelector({ options }: TagSelectorProps) {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const filteredOptions = options.filter(
    (opt) =>
      opt.toLowerCase().includes(inputValue.toLowerCase()) &&
      !selectedTags.includes(opt)
  )

  useEffect(() => {
    console.log("Tags atualizadas:", selectedTags)
    // Substituir por uma chamada ao backend depois que integrarmos
  }, [selectedTags])

  const handleSelect = (tag: string) => {
    setSelectedTags((prev) => [...prev, tag])
    setInputValue("")
    setTimeout(() => setOpen(true), 0) 
  }

  const handleRemove = (tag: string) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag))
  }

  return (
    <div className="w-full max-w-md">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            className="flex flex-wrap gap-1 items-center min-h-[44px] border border-input px-3 py-2 rounded-md bg-white cursor-text"
            onClick={() => setOpen(true)}
          >
            {selectedTags.map((tag) => (
              <Badge
                key={tag}
                data-testid={`${tag}`}
                className="flex items-center bg-(--color-blue-200) text-white gap-1 pr-1"
                variant="secondary"
              >
                {tag}
                <button
                  type="button"
                  
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRemove(tag)
                  }}
                  className="cursor-pointer"
                >
                  <X data-testid={`${tag}-delete`} className="h-3 w-3" />
                </button>
              </Badge>
            ))}

            <Input
              className="border-none p-0 pl-1 h-auto focus-visible:ring-0 flex-1 min-w-[100px] shadow-none focus:shadow-none"
              value={inputValue}
              data-testid="tag-input"
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setOpen(true)}
              placeholder="Add tag..."
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </PopoverTrigger>

        <PopoverContent className="min-w-[var(--radix-popover-trigger-width)] p-0" align="start">
          <Command>
            <CommandInput
              placeholder="Search..."
              value={inputValue}
              onValueChange={setInputValue}
            />
            <CommandList>
              {filteredOptions.map((tag) => (
                <CommandItem
                  key={tag}
                  onSelect={() => handleSelect(tag)}
                  className="cursor-pointer"
                >
                  {tag}
                </CommandItem>
              ))}
              {filteredOptions.length === 0 && (
                <div className="p-2 text-sm text-muted-foreground">
                  No results
                </div>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}