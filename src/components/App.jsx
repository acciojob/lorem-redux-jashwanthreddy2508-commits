import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchdata } from './fetchslice'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const { info, status, error } = useSelector((state) => state.data)

  useEffect(() => {
    dispatch(fetchdata())
  }, [dispatch])

  return (
    <main className="app">
      <h1>Story Naration of Lorem Ipsum</h1>
      <section className="story-card" aria-live="polite">
        {status === 'loading' && <p className="loading">Loading...</p>}
        {status === 'failed' && (
          <p className="error" role="alert">
            Failed to load content: {error}
          </p>
        )}
        {status === 'succeeded' && info && (
          <article>
            <p className="story-title">{info.title}</p>
            <p className="story-body">{info.body}</p>
          </article>
        )}
      </section>
    </main>
  )
}

export default App
