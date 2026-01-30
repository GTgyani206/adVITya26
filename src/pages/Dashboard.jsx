import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import AdminDashboard from '@/components/Dashboard/AdminDashboard.jsx';
import CoordinatorDashboard from '@/components/Dashboard/CoordinatorDashboard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard() {
  const { user, userData, loading } = useAuth();
  const navigate = useNavigate();

  /**
   * Strict route protection
   * Waits for user AND userData before redirecting
   */
  useEffect(() => {
    if (loading) return;

    // Not logged in
    if (!user) {
      navigate('/');
      return;
    }

    // Wait until userData is available
    if (!userData) return;

    // Check Roles
    if (userData.type === 'member') {
      navigate('/');
      return;
    }

    const isAuthorized =
      userData.type === 'admin' ||
      userData.type === 'coordinator';

    // Unauthorized roles
    if (!isAuthorized) {
      navigate('/');
    }
  }, [user, userData, loading, navigate]);

  /**
   * Loading state
   */
  if (loading || (user && !userData)) {
    return (
      <div className="min-h-screen bg-[#12001A]">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <FontAwesomeIcon
            icon={faSpinner}
            spin
            className="text-6xl text-purple-600"
          />
        </div>
      </div>
    );
  }

  /**
   * While redirecting — render nothing
   */
  if (!user) return null;

  /**
   * Role-based rendering
   */
  if (userData?.type === 'admin') {
    return <AdminDashboard />;
  }

  if (userData?.type === 'coordinator') {
    return <CoordinatorDashboard clubName={userData.clubName} />;
  }

  /**
   * Fallback — should never hit
   */
  return null;
}
