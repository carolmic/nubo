import { useState } from "react"

const FileTypeSelector = () => {
  const [selectedFileType, setFileType] = useState("")

  const fileTypes = ["csv", "json", "txt"]

  return (
    <div className="py-2 rounded-xl w-min shadow-xl">
      <ul className="flex gap-0.5 bg-[var(--color-gray-200)] rounded-xl">
        {fileTypes.map((type) => (
          <li
            key={type}
            onClick={() => setFileType(type)}
            className={`px-5 py-2 cursor-pointer flex font-bold bg-(--color-white) text-(--color-blue-400)`}
          >
               <span className={`${
              selectedFileType === type ? "opacity-100" : "opacity-60"
            }`}>{type.toUpperCase()}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FileTypeSelector
