/**
 * AMIT DOBARIYA - MOTIVATIONAL SPEAKER & KEYNOTE ANCHOR COMING SOON WEBSITE SCRIPT
 * Dynamic 7-Day Countdown, Interactive Canvas, Modals, Forms & Audio Synthesizer
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. 7-DAY COUNTDOWN ENGINE
    // ==========================================
    const COUNTDOWN_KEY = 'amit_dobariya_launch_timestamp';
    const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

    // Retrieve existing launch target timestamp or initialize new 7-day target
    let launchTime = localStorage.getItem(COUNTDOWN_KEY);
    if (!launchTime || isNaN(launchTime)) {
        launchTime = Date.now() + SEVEN_DAYS_MS;
        localStorage.setItem(COUNTDOWN_KEY, launchTime.toString());
    } else {
        launchTime = parseInt(launchTime, 10);
        // If expired, reset to fresh 7 days for demo/preview continuity
        if (launchTime < Date.now()) {
            launchTime = Date.now() + SEVEN_DAYS_MS;
            localStorage.setItem(COUNTDOWN_KEY, launchTime.toString());
        }
    }

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    const ringDays = document.getElementById('ringDays');
    const ringHours = document.getElementById('ringHours');
    const ringMinutes = document.getElementById('ringMinutes');
    const ringSeconds = document.getElementById('ringSeconds');

    const progressBar = document.getElementById('progressBar');
    const progressPercent = document.getElementById('progressPercent');

    const CIRCUMFERENCE = 2 * Math.PI * 50; // 314.159

    function updateRingProgress(element, ratio) {
        if (!element) return;
        const clampedRatio = Math.max(0, Math.min(1, ratio));
        const offset = CIRCUMFERENCE - (clampedRatio * CIRCUMFERENCE);
        element.style.strokeDashoffset = offset.toFixed(2);
    }

    function updateCountdown() {
        const now = Date.now();
        const diff = launchTime - now;

        if (diff <= 0) {
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';

            updateRingProgress(ringDays, 0);
            updateRingProgress(ringHours, 0);
            updateRingProgress(ringMinutes, 0);
            updateRingProgress(ringSeconds, 0);

            if (progressBar && progressPercent) {
                progressBar.style.width = '100%';
                progressPercent.textContent = '100% (LIVE NOW)';
            }
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysEl.textContent = days.toString().padStart(2, '0');
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');

        // Progress Ratios for Circles
        updateRingProgress(ringDays, days / 7);
        updateRingProgress(ringHours, hours / 24);
        updateRingProgress(ringMinutes, minutes / 60);
        updateRingProgress(ringSeconds, seconds / 60);

        // Calculate total percentage completed towards 7-day launch
        const elapsedTime = SEVEN_DAYS_MS - diff;
        const totalPercent = Math.min(99, Math.max(85, Math.floor((elapsedTime / SEVEN_DAYS_MS) * 100)));
        if (progressBar && progressPercent) {
            progressBar.style.width = `${totalPercent}%`;
            progressPercent.textContent = `${totalPercent}%`;
        }
    }

    // Run immediately and set 1-second interval
    updateCountdown();
    setInterval(updateCountdown, 1000);


    // ==========================================
    // 2. INTERACTIVE PARTICLE CANVAS CONSTELLATION
    // ==========================================
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        let particles = [];
        const particleCount = Math.min(80, Math.floor((width * height) / 15000));
        const mouse = { x: null, y: null, radius: 140 };

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        });

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.8;
                this.vy = (Math.random() - 0.5) * 0.8;
                this.radius = Math.random() * 2 + 1;
                this.baseAlpha = Math.random() * 0.4 + 0.2;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interactivity
                if (mouse.x && mouse.y) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouse.radius) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        this.x -= (dx / dist) * force * 2;
                        this.y -= (dy / dist) * force * 2;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(99, 102, 241, ${this.baseAlpha})`;
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function connectParticles() {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        const alpha = (1 - dist / 120) * 0.2;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connectParticles();
            requestAnimationFrame(animateCanvas);
        }

        initParticles();
        animateCanvas();
    }


    // ==========================================
    // 3. INTEREST TAG SELECTION
    // ==========================================
    const tagPills = document.querySelectorAll('.tag-pill');
    tagPills.forEach(pill => {
        pill.addEventListener('click', () => {
            pill.classList.toggle('active');
        });
    });


    // ==========================================
    // 4. NEWSLETTER SUBSCRIPTION FORM & LOCALSTORAGE
    // ==========================================
    const subscribeForm = document.getElementById('subscribeForm');
    const emailInput = document.getElementById('emailInput');
    const subscribeBtn = document.getElementById('subscribeBtn');
    const btnSpinner = document.getElementById('btnSpinner');
    const successModal = document.getElementById('successModal');
    const closeSuccessModal = document.getElementById('closeSuccessModal');
    const dismissSuccessBtn = document.getElementById('dismissSuccessBtn');
    const successMessageText = document.getElementById('successMessageText');

    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();

        if (!validateEmail(email)) {
            showToast('Please enter a valid email address.', 'error');
            emailInput.focus();
            return;
        }

        // Selected tags
        const selectedTags = Array.from(document.querySelectorAll('.tag-pill.active'))
            .map(tag => tag.dataset.tag);

        // Show loading state
        subscribeBtn.disabled = true;
        btnSpinner.style.display = 'inline-block';

        setTimeout(() => {
            // Save subscriber in localStorage
            const subscribers = JSON.parse(localStorage.getItem('amit_dobariya_subscribers') || '[]');
            subscribers.push({
                email: email,
                tags: selectedTags,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('amit_dobariya_subscribers', JSON.stringify(subscribers));

            // Reset form UI
            btnSpinner.style.display = 'none';
            subscribeBtn.disabled = false;
            emailInput.value = '';

            // Update & show modal
            if (successMessageText) {
                successMessageText.textContent = `Thank you for subscribing (${email})! You are now registered on Amit Dobariya's VIP launch invite list.`;
            }
            openModal(successModal);
            showToast('Successfully subscribed for launch notifications!', 'success');
        }, 800);
    });

    if (closeSuccessModal) closeSuccessModal.addEventListener('click', () => closeModal(successModal));
    if (dismissSuccessBtn) dismissSuccessBtn.addEventListener('click', () => closeModal(successModal));


    // ==========================================
    // 5. EVENT BOOKING DIRECT CONTACT MODAL
    // ==========================================
    const contactModal = document.getElementById('contactModal');
    const openContactBtn = document.getElementById('openContactModal');
    const closeContactModal = document.getElementById('closeContactModal');
    const contactForm = document.getElementById('contactForm');

    if (openContactBtn && contactModal) {
        openContactBtn.addEventListener('click', () => openModal(contactModal));
    }
    if (closeContactModal && contactModal) {
        closeContactModal.addEventListener('click', () => closeModal(contactModal));
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const category = document.getElementById('eventCategory')?.value.trim() || 'General Inquiry';
            const msg = document.getElementById('contactMessage').value.trim();

            if (!name || !email || !msg) {
                showToast('Please fill out all required fields.', 'error');
                return;
            }

            if (!validateEmail(email)) {
                showToast('Please enter a valid email address.', 'error');
                return;
            }

            // Store inquiry locally
            const inquiries = JSON.parse(localStorage.getItem('amit_dobariya_inquiries') || '[]');
            inquiries.push({
                name, email, category, msg,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('amit_dobariya_inquiries', JSON.stringify(inquiries));

            closeModal(contactModal);
            contactForm.reset();
            showToast(`Thank you, ${name}! Your event inquiry (${category}) has been submitted to Amit Dobariya's team.`, 'success');
        });
    }


    // Modal Helper Functions
    function openModal(modal) {
        if (!modal) return;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal(modal) {
        if (!modal) return;
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    }

    // Close on backdrop click & Escape key
    [contactModal, successModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal(modal);
            });
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal(contactModal);
            closeModal(successModal);
        }
    });


    // ==========================================
    // 6. TOAST NOTIFICATION HELPER
    // ==========================================
    function showToast(message, type = 'success') {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        const iconClass = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';
        toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }


    // ==========================================
    // 7. AMBIENT SYNTH AUDIOWEB SYNTHESIZER
    // ==========================================
    const soundToggle = document.getElementById('soundToggle');
    const soundIcon = document.getElementById('soundIcon');
    let audioCtx = null;
    let isPlayingSound = false;
    let oscillators = [];

    if (soundToggle) {
        soundToggle.addEventListener('click', () => {
            if (!audioCtx) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                audioCtx = new AudioContext();
            }

            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }

            isPlayingSound = !isPlayingSound;

            if (isPlayingSound) {
                soundToggle.classList.add('active');
                soundIcon.className = 'fa-solid fa-volume-high';
                startAmbientSound();
                showToast('Ambient Event Synth Audio Activated 🎵', 'success');
            } else {
                soundToggle.classList.remove('active');
                soundIcon.className = 'fa-solid fa-volume-xmark';
                stopAmbientSound();
                showToast('Ambient Sound Muted', 'info');
            }
        });
    }

    function startAmbientSound() {
        if (!audioCtx) return;
        // Soft chord (Fm9 ambient drone: F3, C4, Eb4, G4)
        const frequencies = [174.61, 261.63, 311.13, 392.00];

        oscillators = frequencies.map(freq => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

            // Very soft volume
            gain.gain.setValueAtTime(0.015, audioCtx.currentTime);

            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            return { osc, gain };
        });
    }

    function stopAmbientSound() {
        oscillators.forEach(({ osc, gain }) => {
            try {
                gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
                setTimeout(() => osc.stop(), 500);
            } catch (err) {}
        });
        oscillators = [];
    }


    // Email Validation Regex
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
