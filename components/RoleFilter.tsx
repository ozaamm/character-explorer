'use client';

import { useState } from 'react';
import filterStyles from './FiltersContainer.module.css';

interface RoleFilterProps {
  onRoleChange: (role: string) => void;
  roles: string[];
}

export default function RoleFilter({ onRoleChange, roles }: RoleFilterProps) {
  const [selectedRole, setSelectedRole] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedRole(value);
    onRoleChange(value);
  };

  return (
    <select 
      value={selectedRole}
      onChange={handleChange}
      className={filterStyles.select}
    >
      <option value="">All Roles</option>
      {roles.map(role => (
        <option key={role} value={role}>{role}</option>
      ))}
    </select>
  );
}