import { marked } from "marked";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

marked.setOptions({
  // gfm: true,
  breaks: true,  
  // headerIds: false
});

function App() {
  const [text, setText] = useState(`
# Hi, I'm Javed Akhtar

![alt text](ProfileImg.jpg)

## I'm Passionate Full Stack Developer

[Click to know more about me](https://javedakhtar.vercel.app)

(Full Stack Developer, **MERN Stack Specialization**)

> Full Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React, Node.js)

- React
- Marked.js
- Tailwind CSS

\`console.log('Hello world!') \`

\`\`\`
{
  "firstName": "Javed",
  "lastName": "Akhtar"
}
\`\`\`

    `);

  return (
    <>
    <div className="bg-zinc-100">
      <div className="grid grid-cols-3 p-2 bg-zinc-800 text-slate-50">
        <div></div>
        <div className="text-sm text-center">Markdown Live Preview</div>
        <div className="flex justify-end items-center mr-5"><a className="hover:scale-105 transition-all" href="https://github.com/javed-ak/Markdown-Previewer.git" target="_blank"><FaGithub size={18}/></a></div>
      </div>
      <div className="grid grid-col-1 lg:grid-cols-2 gap-2 h-full">
        <div className="bg-zinc-50 shadow-lg h-screen lg:h-full">
          <div className="p-1 bg-green-600 text-slate-50 font-bold text-center shadow-lg sticky top-0">Editor</div>
          <div className="h-full overflow-y-auto">
            <textarea className="h-full w-full bg-zinc-50 focus:outline-none p-2" name="editor" id="editor" onChange={(e)=>{setText(e.target.value)}} value={text}></textarea>
          </div>
        </div>
        <div className="bg-zinc-5 shadow-lg bg-zinc-50 h-full">
          <div className="p-1 bg-green-600 text-slate-50 font-bold text-center shadow-lg sticky top-0">Previewer</div>
          <div className="h-full overflow-y-auto">
            <div id="preview" className="prose p-5 h-full" dangerouslySetInnerHTML={{__html: marked(text)}}></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
