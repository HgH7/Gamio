import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface UserProfile {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  xp: number;
  level: number;
  isPremium: boolean;
  badges: Array<{
    id: string;
    name: string;
    description: string;
    iconUrl: string;
  }>;
  posts: Array<{
    id: string;
    content: string;
    mediaUrl: string;
    mediaType: string;
    createdAt: string;
  }>;
}

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user: currentUser } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // TODO: Replace with actual API call
        const response = await fetch(`/api/users/${id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch profile');
        }

        setProfile(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-600">Loading profile...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-red-50 text-red-600 p-4 rounded-md">
          {error}
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center text-gray-600">
          Profile not found
        </div>
      </div>
    );
  }

  const isOwnProfile = currentUser?.id === profile.id;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center space-x-6">
          <img
            src={profile.profilePicture || '/default-avatar.png'}
            alt={profile.username}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {profile.firstName} {profile.lastName}
            </h1>
            <p className="text-gray-600">@{profile.username}</p>
            {isOwnProfile && (
              <button className="mt-2 text-indigo-600 hover:text-indigo-700">
                Edit Profile
              </button>
            )}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-indigo-50 p-4 rounded-lg text-center">
            <h3 className="text-sm font-medium text-indigo-700">Level</h3>
            <p className="text-2xl font-bold">{profile.level}</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg text-center">
            <h3 className="text-sm font-medium text-indigo-700">Total XP</h3>
            <p className="text-2xl font-bold">{profile.xp}</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg text-center">
            <h3 className="text-sm font-medium text-indigo-700">Status</h3>
            <p className="text-2xl font-bold">
              {profile.isPremium ? 'Premium' : 'Free'}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Badges</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {profile.badges.map((badge) => (
            <div
              key={badge.id}
              className="bg-gray-50 p-4 rounded-lg text-center"
            >
              <img
                src={badge.iconUrl}
                alt={badge.name}
                className="w-12 h-12 mx-auto mb-2"
              />
              <h3 className="font-medium text-gray-900">{badge.name}</h3>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Posts</h2>
        <div className="space-y-6">
          {profile.posts.map((post) => (
            <div key={post.id} className="border-b border-gray-200 pb-6">
              <p className="text-gray-900 mb-4">{post.content}</p>
              {post.mediaUrl && (
                <div className="mb-4">
                  {post.mediaType === 'image' ? (
                    <img
                      src={post.mediaUrl}
                      alt="Post media"
                      className="rounded-lg max-h-96 object-cover"
                    />
                  ) : (
                    <video
                      src={post.mediaUrl}
                      controls
                      className="rounded-lg max-h-96"
                    />
                  )}
                </div>
              )}
              <p className="text-sm text-gray-500">
                Posted on {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile; 