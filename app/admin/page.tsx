import { AuthProvider } from '../../context/AuthContext';
import LogoutButton from '@/components/logoutbutton';

export default function Admin() {
    return (
        <>
            <AuthProvider>
                <div className="container">
                    <div className="admin__container">
                        <LogoutButton />
                    </div>
                </div>
            </AuthProvider >
        </>
    );
}