import React from 'react'

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={onToggle}>
      {isDarkMode ? 'Toggle to Light Mode' : 'Toggle to Dark Mode'}
    </button>
  )
}

export default DarkModeToggle