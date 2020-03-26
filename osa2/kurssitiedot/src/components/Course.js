import React from 'react';

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

const Header = ({ course }) => <h2>{course.name}</h2>

const Content = ({ course }) => (
  <>
    {course.parts.map(part => 
      <Part 
        key={part.id} 
        name={part.name} 
        exercises={part.exercises} 
      />)}
  </>
)

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>

const Total = ({ course }) => (
  <p>
    <b>
      Total of {course.parts
        .map(part => part.exercises)
        .reduce((acc, cur) => acc + cur, 0)} exercises
    </b>
  </p>
)

export default Course