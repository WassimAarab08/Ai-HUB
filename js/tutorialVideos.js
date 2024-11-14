document.addEventListener('DOMContentLoaded', function () {
    const videoFrames = document.querySelectorAll('.video-frame');
    const modal = document.getElementById('videoModal');
    const modalVideoContainer = document.getElementById('modalVideoContainer');
    const closeModal = document.querySelector('.close-modal');

    videoFrames.forEach(frame => {
        frame.addEventListener('click', function () {
            const videoId = this.dataset.videoId;
            const iframe = document.createElement('iframe');

            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            iframe.title = "YouTube video player";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;

            modalVideoContainer.innerHTML = '';
            modalVideoContainer.appendChild(iframe);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });


    closeModal.addEventListener('click', () => {
        closeModal.style.display = 'block';
        modal.style.display = 'none';
        modalVideoContainer.innerHTML = '';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalVideoContainer.innerHTML = '';
            document.body.style.overflow = 'auto';
        }
    });
});