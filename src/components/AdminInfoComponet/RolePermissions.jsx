const RolePermissions = ({ roles }) => {
  return (
    <div className="bg-white dark:bg-secondary-dark-bg dark:text-white shadow-md rounded-lg p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4">Roles & Permissions</h3>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
        {roles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
    </div>
  );
};

export default RolePermissions;
