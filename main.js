
    document.addEventListener('DOMContentLoaded', function() {
        let selectedRating = 0;

        // tähtedega huiamine
        document.querySelectorAll('.star').forEach(star => {
            star.addEventListener('click', function() {
                selectedRating = parseInt(this.getAttribute('data-value'));

           
                document.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));

  
                fillStars(selectedRating);
            });
        });

   
        function fillStars(rating) {
            document.querySelectorAll('.star').forEach(star => {
                if (parseInt(star.getAttribute('data-value')) <= rating) {
                    star.classList.add('selected');
                } else {
                    star.classList.remove('selected');
                }
            });
        }


        document.getElementById('submit-btn').addEventListener('click', function() {
            const group = document.getElementById('group-select').value;
            const course = document.getElementById('course-select').value;
            const description = document.getElementById('description').value;

            if (!group || !course || selectedRating === 0 || !description) {
                alert('Please complete all fields.');
                return;
            }

            // Store in localStorage
            const feedbackData = {
                group: group,
                course: course,
                rating: selectedRating,
                description: description
            };

            // Save to localStorage
            localStorage.setItem('feedback', JSON.stringify(feedbackData));

            alert('Feedback submitted successfully!');
        });

    });
