// import React, { useEffect, useState } from 'react'
// import { getAllUsers } from './api/users.api';

// export default function Xno() {


//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     async function loadUsers() {
//       const res = await getAllUsers()
//       console.log(res.data);
//       setUsers(res.data)
//     }
//     loadUsers();
//   }, [])

//   return (

//     <>
//       {
//         users.map((user) => (
//           <div className="border border-solid border-black" key={user.id}>
//             <dl class="-my-3 divide-y divide-gray-100 text-sm">

//               <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
//                 <dt class="font-medium text-gray-900">Nombre</dt>
//                 <dd class="text-gray-700 sm:col-span-2">{user.fullName}</dd>
//               </div>

//               <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
//                 <dt class="font-medium text-gray-900">Fecha de Nacimiento</dt>
//                 <dd class="text-gray-700 sm:col-span-2">{user.birthDate}</dd>
//               </div>

//               <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
//                 <dt class="font-medium text-gray-900">Telefono</dt>
//                 <dd class="text-gray-700 sm:col-span-2">{user.telephone}</dd>
//               </div>

//               <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
//                 <dt class="font-medium text-gray-900">E-mail</dt>
//                 <dd class="text-gray-700 sm:col-span-2">{user.email}</dd>
//               </div>

//               <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
//                 <dt class="font-medium text-gray-900">Nombre de usuario</dt>
//                 <dd class="text-gray-700 sm:col-span-2">{user.userName}</dd>
//               </div>

//             </dl>
//           </div>

//         ))
//       }
//     </>

//   )
// }

import React, { useEffect, useState } from 'react';
import { getAllUsers } from './api/users.api';

export default function Xno() {
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
          <dl className="divide-y divide-gray-100 text-sm">
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Nombre</dt>
              <dd className="text-gray-700 sm:col-span-2">{user.fullName}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Fecha de Nacimiento</dt>
              <dd className="text-gray-700 sm:col-span-2">{user.birthDate}</dd>
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
