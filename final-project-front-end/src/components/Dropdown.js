export default function Dropdown({options }) {
  return (
    <div className="pt-6">
      <label
        htmlFor="location"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {/* {label} */}
      </label>
      <select
        id="location"
        name="location"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue={options[0]} // Set default value to the first option
      >
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
}
