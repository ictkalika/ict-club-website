"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface TeamMember {
  _id?: string;
  name: string;
  position: string;
  image?: string;
  bio?: string;
  skills?: string[];
  social?: {
    [key: string]: string;
  };
  grade?: number;
  order?: number;
  type: 'board' | 'member' | 'advisor';
}

interface TeamContextType {
  boardMembers: TeamMember[];
  members: TeamMember[];
  advisors: TeamMember[];
  loading: boolean;
  error: string | null;
  refetchTeamData: () => Promise<void>;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const useTeam = (): TeamContextType => {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error('useTeam must be used within a TeamProvider');
  }
  return context;
};

interface TeamProviderProps {
  children: ReactNode;
}

export const TeamProvider: React.FC<TeamProviderProps> = ({ children }) => {
  const [boardMembers, setBoardMembers] = useState<TeamMember[]>([]);
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [advisors, setAdvisors] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTeamData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/team');
      if (!response.ok) {
        throw new Error('Failed to fetch team data');
      }
      
      const data = await response.json();
      
      setBoardMembers(data.filter((member: TeamMember) => member.type === 'board'));
      setMembers(data.filter((member: TeamMember) => member.type === 'member'));
      setAdvisors(data.filter((member: TeamMember) => member.type === 'advisor'));
      
      console.log('Team data loaded successfully:', {
        board: data.filter((member: TeamMember) => member.type === 'board').length,
        members: data.filter((member: TeamMember) => member.type === 'member').length,
        advisors: data.filter((member: TeamMember) => member.type === 'advisor').length
      });
      
    } catch (err) {
      console.error('Error fetching team data:', err);
      setError('Failed to load team data');
    } finally {
      setLoading(false);
    }
  };

  // Load team data when the provider mounts (when site is visited)
  useEffect(() => {
    fetchTeamData();
  }, []);

  const refetchTeamData = async () => {
    await fetchTeamData();
  };

  const value: TeamContextType = {
    boardMembers,
    members,
    advisors,
    loading,
    error,
    refetchTeamData,
  };

  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>;
};
