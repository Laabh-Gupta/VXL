import React from "react";
import { Assignment } from "./CoursePage";

interface AssignmentTableProps {
  assignments: Assignment[];
  onViewClick: (assignment: Assignment) => void;
}

const AssignmentTable: React.FC<AssignmentTableProps> = ({
  assignments,
  onViewClick,
}) => {
  const handleViewClick = (assignment: Assignment) => {
    onViewClick(assignment);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Due Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {assignments.map((assignment) => (
          <tr key={assignment.id}>
            <td>{assignment.title}</td>
            <td>{assignment.dueDate}</td>
            <td>
              <button onClick={() => handleViewClick(assignment)}>View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AssignmentTable;
