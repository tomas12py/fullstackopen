

const Part = ({courseName,courseNumExercise}) => {

    return (

        <p>{`${courseName} ${courseNumExercise}`}</p>

    )

}


export const Content = ({courseInfo}) => {
  return (

    <>

    <Part courseName={courseInfo.parts[0].nameCourse} courseNumExercise={courseInfo.parts[0].exercises}/>
    <Part courseName={courseInfo.parts[1].nameCourse} courseNumExercise={courseInfo.parts[1].exercises}/>
    <Part courseName={courseInfo.parts[2].nameCourse} courseNumExercise={courseInfo.parts[2].exercises}/>

    </>
  )
}
