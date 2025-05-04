import React from 'react';
import CourseCard from '../../components/CourseCard/courseCard';
import courseList from '../../Data/data.json';
import './Home.css'; 
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container py-4">
      <div dir='rtl'>
      <Link to='/addcourse' className="button mb-4">+ Add Course</Link>
      </div>
      <h2 className="text-center mb-4">Our Courses</h2>
      <div className="row">
        {courseList.Courses.map((course, index) => (
          <div className="col-12 col-sm-6 col-lg-4 mb-4" key={index}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}
