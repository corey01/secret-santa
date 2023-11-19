'use client';

import { useEffect, useState } from 'react';
import NameOption from './NameOption';
import Result from './Result';
import style from './SecretSanta.module.scss';

export default function SecretSanta({ allUsers }: { allUsers: User[] }) {
  const [currentName, setCurrentName] = useState<string | null>('');

  const findMyUser = () => {
    const myUser = allUsers.find((user) => user.username === currentName);
    if (!myUser) return '';
    return myUser.chosenName;
  };

  const handleSelectMyUser = (name: string) => {
    window.localStorage.setItem('name', name);
    setCurrentName(name);
  };

  useEffect(() => {
    const nameFromLS = window.localStorage.getItem('name');
    if (nameFromLS) {
      setCurrentName(nameFromLS);
    }
  }, []);

  if (!currentName) {
    return (
      <>
        <h1>Who are you?</h1>
        {allUsers.map(({ username }) => (
          <NameOption
            name={username}
            key={username}
            onClick={handleSelectMyUser}
          />
        ))}
      </>
    );
  }
  return (
    <div className={style.resultPage}>
      <h1>Welcome back {currentName}</h1>
      <p>Your secret santa is:</p>
      <Result chosenName={findMyUser()} />
    </div>
  );
}
