import './Button.css'

interface ButtonProps {
  onClick: () => void
}

function Button({ onClick }: ButtonProps) {
  return (
    <button className="new-task-button" type="button" onClick={onClick}>
      <span aria-hidden="true">+</span>
    </button>
  )
}

export default Button



