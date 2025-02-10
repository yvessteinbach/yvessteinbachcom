import { AuthProvider } from '../../context/AuthContext';
import LogoutButton from '@/components/logoutbutton';
import AdminUpload from '@/components/adminUpload';

export default function Admin() {
    return (
        <>
            <AuthProvider>
                <div className="container">
                    <div className="admin__container">
                        <AdminUpload />
                    </div>
                </div>
                <div className="logout">
                    <LogoutButton />
                </div>
            </AuthProvider >
        </>
    );
}