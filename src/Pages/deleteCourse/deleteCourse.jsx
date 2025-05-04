import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import courseslist from '../../Data/data.json';
import { Modal, Button } from 'react-bootstrap';

const DeleteCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const course = courseslist.Courses.find((c) => c.id === parseInt(id));
  const [showModal, setShowModal] = useState(false);
  
  const handleDelete = () => {
    // Here you would typically delete the course from your data (API or state)
    // In this example, we'll just remove it from the courses array temporarily
    courseslist.Courses = courseslist.Courses.filter((c) => c.id !== parseInt(id));
    
    // After deletion, redirect the user back to the course list (or home page)
    navigate('/'); // Redirect to home or course list
    alert('Course deleted successfully');
  };

  return (
    <div className="delete-course">
      <h2>Delete Course</h2>
      {course ? (
        <div>
          <h3>{course.name}</h3>
          <p>Are you sure you want to delete this course?</p>
          <Button variant="danger" onClick={() => setShowModal(true)}>
            Delete Course
          </Button>
        </div>
      ) : (
        <p>Course not found!</p>
      )}

      {/* Modal for confirmation */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this course? This action cannot be undone.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteCourse;
