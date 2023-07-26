import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'
import formImage from '../../public/images/formulario/wom1.jpg'

export default function Formulario() {

  const { register } = useForm()

  return (
    <div>
      <section class="relative flex flex-wrap lg:h-screen lg:items-center">
        <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div class="mx-auto max-w-lg text-center">
            <h1 class="text-2xl font-bold sm:text-3xl">Bienvenido a PILOU!</h1>

            <p class="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
              eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label for="email" class="sr-only">Email</label>

              <div class="relative">
                <input
                  type="text"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}

                />
                <input
                  type="text"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Fecha de nacimiento"
                  {...register("birthdate", { required: true })}
                />
                <input
                  type="text"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Telefono"
                  {...register("phone", { required: true })}
                />
                <input
                  type="email"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  {...register("email", { required: true })}
                />
                <input
                  type="text"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="UserName"
                  {...register("username", { required: true })}
                />
                <p>picker de foto de perfil</p>
              </div>
            </div>



            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-500">
                No account?
                <a class="underline" href="">Sign up</a>
              </p>

              <button
                type="submit"
                class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <Image

            fill={true}
            alt="form"
            src={formImage}
            class="absolute inset-0 h-full w-full object-cover"
            priority
            sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw'
          />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
