import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import courseslist from "../../Data/data.json";
import './editcourse.css';

const EditCourse = () => {
  const { id } = useParams();
  const course = courseslist.Courses.find((c) => c.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: course.name,
    startDate: course.startDate,
    endDate: course.endDate,
    price: course.price,
    description: course.description,
    imageUrl: course.imageUrl,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedCourses = courseslist.Courses.map((c) =>
      c.id === parseInt(id) ? { ...c, ...formData } : c
    );

    
    console.log('Updated courses list:', updatedCourses);

  
    alert('Course updated successfully!');
    navigate('/');
  };

  return (
    <div className="edit-course-container">
      <div className="edit-course-card">
        <h2>Edit Course</h2>
        <form onSubmit={handleSubmit} className="edit-course-form">
          <div className="form-group">
            <label htmlFor="name">Course Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter course name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="price">Price ($)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              min="0"
              placeholder="Enter price"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Enter course description"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              required
              placeholder="Enter image URL"
            />
            {formData.imageUrl && (
              <div className="image-preview">
                <img src={formData.imageUrl} alt="Course Preview" />
              </div>
            )}
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Update Course</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
