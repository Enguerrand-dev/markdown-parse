import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { previewerAtom } from '../atoms/previewerAtom'

function InputHtml() {
  const [preview, setPreview] = useRecoilState(previewerAtom)
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPreview(e.target.value)
  }
  return (
    <div className="">
      <h2 className="mb-5 text-3xl">Your Markdown</h2>
      <textarea
        id="editor"
        className="h-screen w-full border-4 p-10"
        onChange={handleChange}
        value={preview}
      ></textarea>
    </div>
  )
}

export default InputHtml
