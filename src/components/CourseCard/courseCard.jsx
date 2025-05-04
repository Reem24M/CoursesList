import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './courseCard.css'; // Import your CSS file for styling
export default function CourseCard({ course }) {
    return (
      
        <Link to={`/viewcourse/${course.id}`} className="text-decoration-none text-dark">
            <Card className="h-100 shadow-sm">
                <Card.Img
                    variant="top"
                    src={course.imageUrl}
                    alt={course.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className='fw-bold'>{course.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        📅 {course.startDate} - {course.endDate}
                    </Card.Subtitle>
                    <Card.Text className="flex-grow-1">{course.description}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <span className="price fw-bold fs-3">${course.price}</span>
                        <div className='flex justify-content-between align-items-center '>
                        <Link to={`/delete/${course.id}`} className='deletebutton mx-3'>Delete</Link>
                        <Link className='editbutton' to={`/editcourse/${course.id}`}>Edit</Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
    </Link>
    );
}
