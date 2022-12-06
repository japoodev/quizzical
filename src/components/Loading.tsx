const Loading = () => {
  const options = ['A', 'B', 'C', 'D']
  return (
    <div className="flex md:w-[60vw] md:align-middle flex-col p-4 h-[40vh] justify-between">
      <p
        className="h-16 text-xl bg-gray-300 animate-pulse rounded-md"
      ></p>
      <ul className="justify-self-end grid gap-4 w-screen md:w-full md:grid-cols-2">
        {options.map((option: string, index: number) => (
          <li className="px-5">
            <input
              id={option}
              type="radio"
              name={option}
              key={index}
              value={option}
              className="hidden peer"
            />
            <label
              htmlFor={option}
              className="flex items-center justify-center w-full h-12 text-xl text-white bg-gray-300 animate-pulse rounded-md cursor-pointer peer-checked:bg-green-600 peer-checked:text-white"
            ></label>
          </li>
        ))}
      </ul>
    </div>
  )
}
// const Loading = () => {
//   return (
//     <div className="lds-ripple"><div></div><div></div></div>
//   )
// }

export default Loading