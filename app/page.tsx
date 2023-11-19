// import { useEffect } from 'react';
import { Suspense } from 'react';
import { generateResults, getUsers, setUser } from '@/firebase/firestore';
import SecretSanta from './_components/SecretSanta';

export default async function Home() {
  // if no localstorage object, ask who are you?

  // save to local storage

  // check localstorage on pageLoad

  // once total entrants = 6, generate results

  // if total entrants is less than 6, show message saying come back soon

  const allUsers = await getUsers();
  console.log(allUsers);

  // generateResults();

  return (
    <main>
      <SecretSanta allUsers={allUsers} />
    </main>
  );
}
