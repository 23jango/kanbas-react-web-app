import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";

interface AssignmentControlButtons {
  assignmentId: string;
}

const AssignmentControlButtons: React.FC<
  AssignmentControlButtons
> = ({ assignmentId }) => {
  return (
    <div className="float-end ms-auto">
      <GreenCheckmark />
      <FaTrash
        className="text-danger me-2 mb-1 cursor-pointer"
        data-bs-toggle="modal"
        data-bs-target="#wd-delete-assignment-dialog"
        onClick={() => {
          const modal = document.getElementById("wd-delete-assignment-dialog");
          if (modal) {
            modal.setAttribute("data-assignment-id", assignmentId);
          }
        }}
      />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
};

export default AssignmentControlButtons;