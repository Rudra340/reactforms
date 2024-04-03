import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ReactHookFormMini() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const { formState: { errors } } = useForm();
  const onSubmit = (data) => {
    setData(data)
  }

  return (
    <div className="w-full flex justify-center items-center bg-gray-900 p-8 border-r border-dashed">
      <div className="w-1/2 shadow-lg rounded-md bg-white p-8 flex flex-col" style={{ height: '375px' }}>
        <h2 className="text-center font-medium text-2xl mb-4">
          React Hook Form abc
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-1 flex-col justify-evenly"
        >
          <input
            className="border-2 outline-none p-2 rounded-md"
            placeholder="Name"
            {...register("name")}
          />
          <input
            className="border-2 outline-none p-2 rounded-md"
            placeholder="Phone Number"
            {...register("phoneNumber", {
              minLength: 1,
              maxLength: 10,
            })}
          />
          <input
            className="border-2 outline-none p-2 rounded-md"
            placeholder="Email"
            {...register("email", {
              pattern: {
                value: /^.*@gmail.com$/,
                message: 'Email must end with gmail.com'
              }
            })}
          />
          <button
            className=" flex justify-center p-2 rounded-md w-1/2 self-center bg-gray-900  text-white hover:bg-gray-800"
            type='submit'
          >
            <span>
            Submit
              {errors?.email?.message}
            </span>
          </button>
        </form>
        <div className='h-4'>
          <p> Data: {JSON.stringify(data)}</p>
        </div>
      </div>
    </div>
  );
}