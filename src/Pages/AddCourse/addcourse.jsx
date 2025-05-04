import React, { useState } from "react";
import courseslist from "../../Data/data.json";
import "./addcourse.css";
import { useNavigate } from "react-router";

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    id: courseslist.Courses.length + 1,
    name: "",
    startDate: "",
    endDate: "",
    price: 0,
    description: "",
    imageUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prev) => ({ ...prev, [name]: value }));
  };
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new course to the JSON (for the sake of this example, we'll just log it)
    courseslist.Courses.push(courseData);

    alert("Course added successfully!");
    setCourseData({
      id: courseslist.Courses.length + 1,
      name: "",
      startDate: "",
      endDate: "",
      price: 0,
      description: "",
      imageUrl: "",
    });
    navigate("/"); 
  };

  return (
    <div className="add-course-form">
      <h2 className="form-title">Add New Course</h2>
      <form onSubmit={handleSubmit} className="course-form">
        <div className="form-group">
          <label htmlFor="name">Course Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={courseData.name}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={courseData.startDate}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={courseData.endDate}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={courseData.price}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Course Description</label>
          <textarea
            id="description"
            name="description"
            value={courseData.description}
            onChange={handleInputChange}
            required
            className="form-control"
            rows={4}
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={courseData.imageUrl}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>

        <button type="submit" className="btn-submit">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
