import React, { useState } from 'react'
import './App.css'
import Icons from './icon'
const App = () => {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState([])
  const [menue, setMenue] = useState(false)
  const tags = ['Devesh', 'Suman', 'Sidesh', 'Rishabs', 'Tech-m']

  const filterTags = tags.filter(
    item =>
      item.toLocaleLowerCase().includes(query.toLocaleLowerCase().trim()) &&
      !selected.includes(item)
  )

  return (
    <div className='bg-white h-screen grid place-items-center'>
      <div className='relative w-80 h-96 text-sm'>
        {selected.length ? (
          <div className='bg-white w-80 relative  text-xs flex flex-wrap gap-1 p-2'>
            {selected.map(tag => {
              return (
                <div
                  key={tag}
                  className='rounded-full w-fit py-1.5 px-3 border border-gray-400 bg-gray-50 text-gray-500 flex items-center gap-2'
                >
                  {tag}
                  <div 
                  onMouseDown={(e)=>e.preventDefault()}
                    onClick={()=>setSelected(selected.filter((i)=>i!==tag))}>
                    <Icons.Close />
                  </div>
                </div>
              )
            })}
            <div className='w-full text-right'>
              <span onClick={()=>{setSelected([]);}}> Clear-All</span>
            </div>
          </div>
        ) : null}
        <div className='card flex items-center justify-between p-3 w-80 gap-2.5'>
          <Icons.Search />
          <input
            type='text'
            value={query}
            onChange={e => setQuery(e.target.value.trimStart())}
            placeholder='Search or Create-tags'
            className='bg-transparent text-sm flex-1'
            onFocus={() => setMenue(true)}
            onBlur={() => setMenue(false)}
          />
          <button className='text-sm disabled:text-gray-300 text-rose-500 disabled:cursor-not-allowed'>
            + Add
          </button>
        </div>
        {/* {JSON.stringify(selected)} */}
        {menue ? (
          <div className='card absolute w-full max-h-52 mt-2 p-1 flex scrollbar-thin scrollbar-track-slate-50 scrollbar-thumb-slate-200'>
            <ul className='w-full'>
              {filterTags?.length ? (
                filterTags.map((tag, i) => (
                  <li
                    key={tag}
                    className='p-2 cursor-pointer hover:bg-rose-50 hover:text-rose-500 rounded-md w-full'
                    onMouseDown={e => e.preventDefault()}
                    onClick={() => {
                      setMenue(true)
                      setSelected(prev => [...prev, tag])
                    }}
                  >
                    {tag}
                  </li>
                ))
              ) : (
                <li className='p-2 cursor-pointer hover:bg-rose-500 rounded-md-full'>
                  No item found
                </li>
              )}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  )
}
export default App
