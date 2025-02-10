'use client';

import React from 'react';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';

function LogoutButton() {
    const handleLogout = async () => {
        await signOut(auth);
    };

    return <button className="button" onClick={handleLogout}>Sign Out</button>;
}

export default LogoutButton;