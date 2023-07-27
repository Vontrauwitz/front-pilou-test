/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react';
import { getAllUsers } from './api/users.api';
import Image from 'next/image';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await getAllUsers();
        console.log(res.data);
        setUsers(res.data);
      } catch (error) {
        console.error('Error while fetching users:', error);
      }
    }
    loadUsers();
  }, []);

  return (
    <>

      {users.map((user) => (

        <div className="border border-solid border-black rounded-lg p-4" key={user.id}>
          <img
            alt="profile photo"
            src={user.image}
            className="w-[5%] rounded-full  drop-shadow-[2px_3px_2px_rgba(255,255,255,.4)]"
          />
          <dl className="divide-y divide-gray-100 text-sm">
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Nombre</dt>
              <dd className="text-gray-700 sm:col-span-2">{user.fullName}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Edad</dt>
              <dd className="text-gray-700 sm:col-span-2">{user.age}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Teléfono</dt>
              <dd className="text-gray-700 sm:col-span-2">{user.telephone}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">E-mail</dt>
              <dd className="text-gray-700 sm:col-span-2">{user.email}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Nombre de usuario</dt>
              <dd className="text-gray-700 sm:col-span-2">{user.userName}</dd>
            </div>
          </dl>
        </div>
      ))}
    </>
  );
}
