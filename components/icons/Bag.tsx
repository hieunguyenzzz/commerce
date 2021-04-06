const Bag = ({ ...props }) => {
  return (
    <svg
      height="1em"
      fill="currentColor"
      width="1em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M19 10h-3V7c0-2.206-1.794-4-4-4S8 4.794 8 7v3H5c-.55 0-.908.441-.797.979l1.879 9.042c.112.538.654.979 1.204.979h9.429c.55 0 1.092-.441 1.203-.979l1.879-9.042C19.908 10.441 19.55 10 19 10zm-9-3c0-1.103.897-2 2-2s2 .897 2 2v3h-4V7zm6.087 12H7.913l-1.455-7h11.313l-1.684 7z" />
    </svg>
  )
}

export default Bag
