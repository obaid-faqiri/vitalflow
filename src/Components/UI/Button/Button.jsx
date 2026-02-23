const Button = ({ children }) => {
  return (
    <button className="px-6 py-3 font-medium text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700">
      {children}
    </button>
  )
}

export default Button
