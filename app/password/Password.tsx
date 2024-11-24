'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Password: React.FC = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password === 'fedev2024test') {
      // Set password cookie
      document.cookie = `password=${password}; path=/; max-age=86400; Secure; SameSite=Strict` // 1 day
      console.log('Password set, redirecting...')
      router.push('/') // Redirect to home page
    } else {
      setError(true)
      setPassword('') // Clear the input for better UX
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-darkBg p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-4">Enter Password</h1>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-dark px-4 py-2 border rounded mb-4"
        />
        {error && (
          <p className="text-red-500 text-sm mb-4">
            Incorrect password. Try again.
          </p>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Password
