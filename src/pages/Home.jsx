import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [username, setUsername] = useState('')
  const [timeRange, setTimeRange] = useState('1month')
  const [trackCount, setTrackCount] = useState('20')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const timeRanges = [
    { value: '7day', label: 'Last 7 days' },
    { value: '1month', label: 'Last month' },
    { value: '3month', label: 'Last 3 months' },
    { value: '6month', label: 'Last 6 months' },
    { value: '12month', label: 'Last year' },
    { value: 'overall', label: 'All time' },
  ]

  const trackCounts = [
    { value: '5', label: 'Top 5' },
    { value: '10', label: 'Top 10' },
    { value: '20', label: 'Top 20' },
    { value: '50', label: 'Top 50' },
    { value: '100', label: 'Top 100' },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!username.trim()) return

    setIsLoading(true)
    
    // Navigate to countdown page with parameters
    navigate(`/countdown?user=${encodeURIComponent(username.trim())}&period=${timeRange}&limit=${trackCount}`)
  }

  return (
    <div className="min-h-screen flex justify-center px-4 pt-16">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">

          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-b from-[#8c1539] to-[#c40039] bg-clip-text text-transparent">
            audio.fm
          </h1>
          <p className="text-sm text-dark-300 max-w-sm mx-auto">
            Create narrated countdowns of your top tracks from Last.fm
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-dark-200 mb-2">
              Last.fm Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your Last.fm username"
              className="input-field w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="timeRange" className="block text-sm font-medium text-dark-200 mb-2">
              Time Range
            </label>
            <select
              id="timeRange"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="input-field w-full"
            >
              {timeRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="trackCount" className="block text-sm font-medium text-dark-200 mb-2">
              Number of Tracks
            </label>
            <select
              id="trackCount"
              value={trackCount}
              onChange={(e) => setTrackCount(e.target.value)}
              className="input-field w-full"
            >
              {trackCounts.map((count) => (
                <option key={count.value} value={count.value}>
                  {count.label}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={isLoading || !username.trim()}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating your countdown...
              </span>
            ) : (
              'Create Countdown'
            )}
          </button>
        </form>

        <div className="text-center text-sm text-dark-400">
          <p>
            Don't have a Last.fm account?{' '}
            <a 
              href="https://www.last.fm/join" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home 