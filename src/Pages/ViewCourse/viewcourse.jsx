import React from 'react';
import { useParams } from 'react-router-dom';
import courseslist from "../../Data/data.json";
import { Button, Card } from 'react-bootstrap';

export default function Viewcourse() {
  const { id } = useParams();
  const course = courseslist.Courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <div className="container py-5">
      <div className="row">
        {/* Left column for image */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <Card>
            <Card.Img
              variant="top"
              src={course.imageUrl}
              alt={course.title}
              style={{ height: '300px', objectFit: 'cover', borderRadius: '0.5rem' }}
            />
          </Card>
        </div>

        {/* Right column for detailed description */}
        <div className="col-12 col-md-6 h-full d-flex flex-column justify-content-between">
          <h3>Course Details</h3>
          <p>{course.description}</p>
          <p><strong>Duration:</strong> {course.startDate} : {course.endDate}</p>
          <p><strong>Price:</strong> ${course.price}</p>
          <Button variant="success" className="w-100">Start Learning</Button>
        </div>
      </div>
    </div>
  );
}
