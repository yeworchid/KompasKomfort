

(function() {
    'use strict';

    
    function initTabs() {
        const tabLinks = document.querySelectorAll('[data-toggle="tab"]');

        tabLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetPane = document.querySelector(targetId);

                if (!targetPane) return;
                tabLinks.forEach(function(tab) {
                    tab.classList.remove('active', 'show');
                    tab.setAttribute('aria-selected', 'false');
                });
                const allPanes = document.querySelectorAll('.tab-pane');
                allPanes.forEach(function(pane) {
                    pane.classList.remove('active', 'show');
                });
                this.classList.add('active', 'show');
                this.setAttribute('aria-selected', 'true');
                targetPane.classList.add('active', 'show');
            });
        });
    }

    
    function initGallery() {
        const galleryItems = document.querySelectorAll('.view-gallery-owl .item');
        const thumbItems = document.querySelectorAll('.owl-thumbs .item');

        if (galleryItems.length === 0 || thumbItems.length === 0) return;
        thumbItems[0].classList.add('active');

        thumbItems.forEach(function(thumb, index) {
            thumb.addEventListener('click', function() {
                galleryItems.forEach(function(item) {
                    item.style.display = 'none';
                });
                thumbItems.forEach(function(t) {
                    t.classList.remove('active');
                });
                if (galleryItems[index]) {
                    galleryItems[index].style.display = 'block';
                }
                this.classList.add('active');
            });
        });
    }

    
    document.addEventListener('DOMContentLoaded', function() {
        initTabs();
        initGallery();
    });

})();