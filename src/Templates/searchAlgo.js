// Assuming fetchedCourses array is already populated

function searchCourses(keyword) {
    // Convert keyword to lowercase for case-insensitive search
    const lowerKeyword = keyword.toLowerCase();
    
    return fetchedCourses.filter(course => {
        // Convert course code and course name to lowercase for case-insensitive search
        const lowerCourseCode = course.courseCode.toLowerCase();
        const lowerCourseName = course.courseName.toLowerCase();
        
        // Check if keyword exists in course code or course name
        return lowerCourseCode.includes(lowerKeyword) || lowerCourseName.includes(lowerKeyword);
    });
}

// Example usage
const searchResults = searchCourses('i'); // User input 'i'
console.log(searchResults);
