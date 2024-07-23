document.getElementById('addcourses').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const title = document.getElementById('title').value;
    const image = document.getElementById('image').value;
    const topics = document.getElementById('topics').value; 
    const subtopics = document.getElementById('subtopics').value;
    const description = document.getElementById('description').value;
    const courseData = {
        title,
        image,
        topics,
        subtopics,
        description
    };
    let courses = JSON.parse(localStorage.getItem('courses')) || [];
    courses.push(courseData);
    localStorage.setItem('courses', JSON.stringify(courses));
    window.location.href = '../index-file/home.html';
});
