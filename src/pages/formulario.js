import Image from 'next/image';
import React, { useState } from 'react';
import formImage from '../../public/images/formulario/wom1.jpg';
import { createUser } from './api/users.api'

export default function Formulario() {

  const [ageError, setAgeError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [telephoneError, setTelephoneError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    telephone: '',
    email: '',
    image: '',
    userName: '',
  });

  // const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const telephoneRegex = /^\(\d{2}\)\d{8}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'age') {
      const ageValue = parseInt(value, 10);
      if (isNaN(ageValue) || ageValue < 18 || ageValue >= 99) {
        setAgeError('Para ser parte de nuestra comunidad, debes ser mayor a 18');
      } else {
        setAgeError('');
      }
    }

    if (name === 'fullName') {
      if (value.length < 1 || value.length > 30) {
        setFullNameError('El nombre debe tener entre 1 y 30 caracteres');
      } else {
        setFullNameError('');
      }
    }

    if (name === 'telephone') {
      if (!telephoneRegex.test(value)) {
        setTelephoneError('El formato de teléfono no es válido Ejemplo: (55)55555555');
      } else {
        setTelephoneError('');
      }
    }

    if (name === 'email') {
      if (!emailRegex.test(value)) {
        setEmailError('El formato del email no es válido. Debe ser del tipo ejemplo@pilou.com');
      } else {
        setEmailError('');
      }
    }

    if (name === 'username') {
      if (value.length < 1 || value.length > 30) {
        setUsernameError('El nombre de usuario debe tener entre 1 y 30 caracteres');
      } else {
        setUsernameError('');
      }
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      const res = await createUser(formData);
      console.log('====================================');
      console.log('Response', res);
      console.log('====================================');
    } catch (error) {

      console.error('Error al crear el usuario:', error);
    }
  };

  return (
    <div>
      <section className="relative flex flex-row  md:flex-wrap lg:h-screen lg:items-center lg:">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Bienvenido a PILOU!</h1>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
              eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="sr-only">Nombre</label>
              <input
                type="text"
                name="fullName" // Nombre debe ser una cadena de texto, no una variable.
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Pon tu Nombre"
                value={formData.fullName} // Debes usar formData.name en lugar de formData.name
                onChange={handleInputChange}
              />

              {fullNameError && <p className="text-red-500">{fullNameError}</p>}

              <input
                type="text"
                name="age"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Ingresa tu Edad"
                value={formData.age}
                onChange={handleInputChange}
                required
              />

              {ageError && <p className="text-red-500">{ageError}</p>}

              <input
                type="text"
                name="telephone" // Nombre debe ser una cadena de texto, no una variable.
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Telefono"
                value={formData.phone} // Debes usar formData.phone en lugar de formData.name
                onChange={handleInputChange}
              />

              {telephoneError && <p className="text-red-500">{telephoneError}</p>}

              <input
                type="email"
                name="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Pon tu E-mail"
                value={formData.email}
                onChange={handleInputChange}
              />

              {emailError && <p className="text-red-500">{emailError}</p>}

              <input
                type="text"
                name="userName" // Nombre debe ser una cadena de texto, no una variable.
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Elige tu Usuario"
                value={formData.username} // Debes usar formData.username en lugar de formData.name
                onChange={handleInputChange}
              />

              {usernameError && <p className="text-red-500">{usernameError}</p>}

              <p>picker de foto de perfil</p>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  No account?
                  <a className="underline" href="">Sign up</a>
                </p>

                <button
                  type="submit"
                  className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="relative h-screen w-full sm:h-96 lg:h-full ">
          <Image
            fill={true}
            alt="form"
            src={formImage}
            className="absolute inset-0 h-full w-full object-cover"
            priority
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'
          />
        </div>
      </section>
    </div>
  );
}
