// src/components/Modal.tsx
import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (newContent: string) => Promise<void>; // Make sure this is a Promise
  onDelete: () => Promise<void>; // Make sure this is a Promise
  currentContent: string; // New prop for current comment content
}

const UpdateOrDeleteModal: React.FC<ModalProps> = ({ isOpen, onClose, onUpdate, onDelete, currentContent }) => {
  const [updatedContent, setUpdatedContent] = useState(currentContent); // State to hold the updated content
  const [loading, setLoading] = useState(false); // State to handle loading

  if (!isOpen) return null;

  const handleUpdate = async () => {
    setLoading(true);
    await onUpdate(updatedContent); // Wait for the update to complete
    setLoading(false);
    onClose(); // Close the modal after the update
  };

  const handleDelete = async () => {
    setLoading(true);
    await onDelete(); // Wait for the delete to complete
    setLoading(false);
    onClose(); // Close the modal after deletion
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-lg font-bold mb-4">Actions</h2>
        <textarea
          value={updatedContent}
          onChange={(e) => setUpdatedContent(e.target.value)}
          className="w-full border rounded-md p-2 mb-4"
          placeholder="Update your comment..."
        />
        {loading ? (
          <div className="text-center">Loading...</div> // Loading message
        ) : (
          <>
            <button onClick={handleUpdate} className="bg-green-500 text-white py-1 px-3 rounded-md mb-2 w-full">
              Update Comment
            </button>
            <button onClick={handleDelete} className="bg-red-500 text-white py-1 px-3 rounded-md w-full">
              Delete Comment
            </button>
          </>
        )}
        <button onClick={onClose} className="mt-4 py-1 px-3 rounded-md w-full">
          Close
        </button>
      </div>
    </div>
  );
};

export default UpdateOrDeleteModal;
