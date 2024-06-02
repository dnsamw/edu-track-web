import React, { useContext } from 'react'
import { AuthContext } from '../app/context/AuthContext';

type Props = {}

function ProfilePage({}: Props) {

  const {state} = useContext(AuthContext);

  return (
    <div>hi</div>
  )
}

export default ProfilePage