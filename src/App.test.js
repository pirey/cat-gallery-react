import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const judul1 = getByText(/Gallery Kucing/i)
  const judul2 = getByText(/Favorit Saya/i)
  expect(judul1).toBeInTheDocument()
  expect(judul2).toBeInTheDocument()
})
