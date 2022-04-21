import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { previewerAtom } from '../atoms/previewerAtom'
import { marked } from 'marked'
import parse from 'html-react-parser'

function OutputMarkdown() {
  const [preview, setPreview] = useRecoilState(previewerAtom)
  const [render, setRender] = useState<string>('')

  useEffect(() => {
    console.log('modification')
    marked.setOptions({
      breaks: true,
    })
    const markdown = marked.parse(preview)
    setRender(markdown)
  }, [preview])

  return (
    <div>
      <h1 className="mb-5 text-3xl">Mardown parse</h1>
      <div id="preview" className="border-4 p-10">
        {parse(render)}
      </div>
    </div>
  )
}

export default OutputMarkdown
