document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Toggle icon between bars and times
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // Set active nav link based on current page
    const setNavActive = () => {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === page) {
                link.classList.add('active');
            }
        });
    };
    
    setNavActive();
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 16px rgba(46, 125, 50, 0.15)';
                navbar.style.padding = '0.5rem 0';
            } else {
                navbar.style.boxShadow = '0 2px 8px rgba(46, 125, 50, 0.08)';
                navbar.style.padding = '1rem 0';
            }
        });
    }
});

// Plant Database
const plantData = {
    "rose": {
        name: "Rose",
        scientificName: "Rosa rubiginosa",
        image: "images/rose_plant.png",
        description: "Roses are classic, beautiful flowering plants known for their stunning blooms and pleasant fragrance. They come in various colors and are a favorite in gardens worldwide.",
        water: "Water deeply when the top inch of soil feels dry. Avoid wetting the leaves to prevent disease.",
        sunlight: "Requires at least 6 hours of direct sunlight daily for best blooming.",
        temp: "Prefers moderate temperatures between 60°F and 70°F (15°C - 21°C).",
        soil: "Rich, well-draining loam soil with a slightly acidic pH (6.0 to 6.5).",
        fertilizer: "Use a balanced, slow-release fertilizer or rose-specific feed every 4-6 weeks during the growing season.",
        tips: "Prune regularly in early spring to encourage new growth and better air circulation. Remove spent blooms (deadheading) to promote more flowers."
    },
    "tulsi": {
        name: "Tulsi (Holy Basil)",
        scientificName: "Ocimum tenuiflorum",
        image: "images/tulsi_plant.png",
        description: "Tulsi is a sacred plant in India, highly valued for its medicinal properties. It is an aromatic shrub that purifies the air and repels mosquitoes.",
        water: "Keep the soil consistently moist but not waterlogged. Water when the top soil feels slightly dry.",
        sunlight: "Loves bright sunlight. Needs 4-6 hours of direct sunlight every day.",
        temp: "Thrives in warm temperatures above 70°F (21°C). Protect from frost.",
        soil: "Well-draining, fertile soil mixed with compost or organic matter.",
        fertilizer: "Apply a balanced liquid fertilizer once a month. Don't over-fertilize as it can reduce the medicinal aroma.",
        tips: "Pinch off the top leaves regularly to encourage bushy growth. Remove flowers as soon as they appear to extend the plant's life."
    },
    "aloe_vera": {
        name: "Aloe Vera",
        scientificName: "Aloe barbadensis miller",
        image: "images/aloe_vera.png",
        description: "A popular medicinal succulent known for the soothing gel inside its thick leaves. It's incredibly easy to care for and perfect for beginners.",
        water: "Water thoroughly, then allow the soil to completely dry out before watering again. Very drought tolerant.",
        sunlight: "Bright, indirect sunlight. Direct sun can burn its leaves.",
        temp: "Thrives between 55°F and 80°F (13°C - 27°C). Cannot survive freezing temperatures.",
        soil: "Cactus or succulent potting mix with excellent drainage.",
        fertilizer: "Needs very little fertilizer. Feed once in spring with a half-strength houseplant fertilizer.",
        tips: "If the leaves start to droop or wrinkle, it needs more water. If they become mushy, it's overwatered."
    },
    "money_plant": {
        name: "Money Plant (Pothos)",
        scientificName: "Epipremnum aureum",
        image: "images/money_plant.png",
        description: "An incredibly hardy indoor trailing plant. It's famous for its air-purifying qualities and is believed to bring good fortune.",
        water: "Allow the top inch of soil to dry out between waterings. Can tolerate erratic watering.",
        sunlight: "Adaptable to various light conditions, from low light to bright indirect light.",
        temp: "Prefers 60°F to 85°F (15°C - 29°C). Keep away from cold drafts.",
        soil: "Any well-draining potting soil works perfectly.",
        fertilizer: "Feed monthly during spring and summer with a standard houseplant fertilizer.",
        tips: "You can easily propagate it by taking stem cuttings and placing them in water. Wipe the leaves occasionally with a damp cloth to remove dust."
    },
    "snake_plant": {
        name: "Snake Plant",
        scientificName: "Sansevieria trifasciata",
        image: "images/snake_plant.png",
        description: "Characterized by its stiff, upright, sword-like leaves. It's one of the best plants for filtering indoor air, especially at night.",
        water: "Water very sparingly. Let the soil dry out completely between waterings. Overwatering is the only way to kill it.",
        sunlight: "Extremely versatile. Can survive in very low light or full direct sun.",
        temp: "Tolerates a wide range of temperatures from 50°F to 85°F (10°C - 29°C).",
        soil: "Free-draining soil, like a cactus/succulent mix.",
        fertilizer: "Light feeder. Fertilize just once or twice during the summer.",
        tips: "Avoid getting the leaves wet when watering. Only repot when it literally bursts out of its current pot."
    },
    "hibiscus": {
        name: "Hibiscus",
        scientificName: "Hibiscus rosa-sinensis",
        image: "images/hibiscus.png",
        description: "A tropical shrub famous for its large, showy, trumpet-shaped flowers. It adds a vibrant, tropical feel to any garden or bright indoor space.",
        water: "Needs plenty of water, especially when blooming. Keep soil moist but never soggy.",
        sunlight: "Requires full sun (at least 6-8 hours a day) for maximum blooming.",
        temp: "Thrives in warm conditions, 60°F to 90°F (15°C - 32°C). Protect from freezing.",
        soil: "Well-draining, slightly acidic soil rich in organic matter.",
        fertilizer: "Heavy feeder. Use a high-potassium fertilizer every two weeks during the blooming season.",
        tips: "Prune back in late winter to encourage new growth. Watch out for aphids and spider mites."
    },
    "jasmine": {
        name: "Jasmine",
        scientificName: "Jasminum polyanthum",
        image: "images/jasmine.png",
        description: "A beautiful vining plant producing delicate white or yellow flowers that emit a sweet, intoxicating fragrance, especially in the evening.",
        water: "Keep the soil evenly moist during the growing season. Reduce watering in winter.",
        sunlight: "Bright light with some direct sun. A south or west-facing window is ideal indoors.",
        temp: "Prefers cooler temperatures in autumn to set buds (around 60°F/15°C), then warmer in spring.",
        soil: "Porous, well-draining soil with plenty of peat moss or compost.",
        fertilizer: "Feed every two weeks during spring and summer with a fertilizer high in phosphorus.",
        tips: "Provide a trellis or support for the vines to climb. Prune vigorously after flowering to maintain size and shape."
    },
    "neem": {
        name: "Neem",
        scientificName: "Azadirachta indica",
        image: "images/neem.png",
        description: "A fast-growing evergreen tree native to the Indian subcontinent. It's highly prized for its medicinal, agricultural, and antibacterial properties.",
        water: "Water deeply, then allow the top few inches of soil to dry before watering again. Very drought resistant once established.",
        sunlight: "Requires full, direct sunlight to thrive.",
        temp: "Needs a hot climate. Cannot tolerate cold or frost.",
        soil: "Grows well in almost any well-draining soil, even rocky or poor soils.",
        fertilizer: "Generally doesn't need much fertilizer. A layer of compost around the base in spring is sufficient.",
        tips: "As a houseplant, keep it in the brightest spot possible. Neem oil can be extracted from seeds to use as a natural pesticide."
    },
    "spider_plant": {
        name: "Spider Plant",
        scientificName: "Chlorophytum comosum",
        image: "images/spider_plant.png",
        description: "An incredibly adaptable indoor plant known for its cascading foliage and small white flowers. It effectively cleans indoor air.",
        water: "Water moderately. Keep soil slightly moist but not soggy. More forgiving of underwatering.",
        sunlight: "Bright, indirect light is best, but tolerates lower light.",
        temp: "Prefers average room temperatures, 55°F to 80°F (13°C - 27°C).",
        soil: "Any standard, well-draining potting mix.",
        fertilizer: "Feed sparingly, once a month in spring and summer.",
        tips: "Easily propagated from the small 'spiderettes' (babies) that grow on long stems."
    },
    "lavender": {
        name: "Lavender",
        scientificName: "Lavandula",
        image: "images/lavender.png",
        description: "A highly fragrant herb with silvery-green foliage and purple flower spikes. Often used for essential oils, medicinal purposes, and culinary dishes.",
        water: "Drought tolerant once established. Water deeply but infrequently.",
        sunlight: "Requires full sun (6+ hours) daily.",
        temp: "Prefers warm summers and cool, dry winters. High humidity can cause issues.",
        soil: "Sandy, extremely well-draining alkaline soil.",
        fertilizer: "Rarely needs fertilizer. A little compost in spring is enough.",
        tips: "Prune back by one-third after flowering to keep the plant compact and prevent woody centers."
    },
    "echeveria": {
        name: "Echeveria",
        scientificName: "Echeveria spp.",
        image: "images/echeveria.png",
        description: "A popular rosette-shaped succulent known for its stunning pastel colors and fleshy leaves. Great for low-maintenance indoor or outdoor gardens.",
        water: "Soak and dry method: water thoroughly, then let soil dry completely before watering again.",
        sunlight: "Bright sunlight. Needs 4-6 hours of direct sun to maintain its compact shape and colors.",
        temp: "Thrives in warm conditions. Protect from frost.",
        soil: "Specialized cactus and succulent mix with excellent drainage.",
        fertilizer: "Feed lightly in the spring with a low-nitrogen fertilizer.",
        tips: "When watering, avoid getting water on the leaves as it can cause rot."
    },
    "jade_plant": {
        name: "Jade Plant",
        scientificName: "Crassula ovata",
        image: "images/jade_plant.png",
        description: "A long-lived succulent with thick, woody stems and glossy green leaves. It is often considered a symbol of good luck.",
        water: "Water deeply, but let the soil completely dry out between waterings. Leaves will wrinkle if underwatered.",
        sunlight: "Requires bright, indirect light or some direct sunlight (4 hours).",
        temp: "Prefers temperatures between 65°F and 75°F (18°C - 24°C).",
        soil: "Well-draining succulent or cactus mix.",
        fertilizer: "Feed once every couple of months during active growth with a balanced liquid fertilizer.",
        tips: "Can be pruned to shape like a bonsai. Propagates easily from single leaves."
    },
    "peace_lily": {
        name: "Peace Lily",
        scientificName: "Spathiphyllum",
        image: "images/peace_lily.png",
        description: "An elegant indoor plant with dark green leaves and distinctive white flowers. Very popular for its low maintenance and air purifying qualities.",
        water: "Keep soil consistently moist but not soggy. The plant will dramatically droop when it needs water.",
        sunlight: "Prefers medium, indirect sunlight. Can survive in low light, though it may not flower.",
        temp: "Likes average room temperatures, 65°F to 85°F (18°C - 29°C). Keep away from drafts.",
        soil: "Rich, well-draining organic potting soil.",
        fertilizer: "Feed every 6 weeks during spring and summer with a balanced fertilizer.",
        tips: "Wipe leaves with a damp cloth to remove dust. Mildly toxic if ingested by pets."
    },
    "mint": {
        name: "Mint (Peppermint/Spearmint)",
        scientificName: "Mentha",
        image: "images/mint.png",
        description: "A vigorous, aromatic herb widely used for culinary, medicinal, and tea purposes. Known for its refreshing scent.",
        water: "Keep soil consistently moist. Mint loves water.",
        sunlight: "Full sun to partial shade.",
        temp: "Very adaptable and hardy. Can tolerate light frosts.",
        soil: "Rich, moist, well-draining soil.",
        fertilizer: "Feed once in spring with a balanced fertilizer if grown in a pot.",
        tips: "Mint is incredibly invasive! Always grow it in a container or pot, even outdoors, to prevent it from taking over your garden."
    }
};

// Search and Filter Logic for Plants Page
document.addEventListener('DOMContentLoaded', () => {
    const plantSearch = document.getElementById('plantSearch');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const plantCards = document.querySelectorAll('#plantsGrid .plant-card');
    const noResultsMsg = document.getElementById('noResultsMsg');
    const plantsGrid = document.getElementById('plantsGrid');

    // Home page search redirection logic
    const homeSearchBtn = document.getElementById('homeSearchBtn');
    const homeSearchInput = document.getElementById('homeSearchInput');
    
    if (homeSearchBtn && homeSearchInput) {
        homeSearchBtn.addEventListener('click', () => {
            const query = homeSearchInput.value.trim();
            if (query) {
                window.location.href = `plants.html?search=${encodeURIComponent(query)}`;
            }
        });
        homeSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') homeSearchBtn.click();
        });
    }

    if (plantCards.length > 0) {
        // Check for URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search') || '';
        const categoryQuery = urlParams.get('category') || 'all';
        
        if (searchQuery && plantSearch) {
            plantSearch.value = searchQuery;
        }

        if (categoryQuery !== 'all') {
            filterBtns.forEach(b => b.classList.remove('active', 'btn-primary'));
            filterBtns.forEach(b => b.classList.add('btn-outline'));
            
            const activeBtn = Array.from(filterBtns).find(b => b.dataset.filter === categoryQuery);
            if (activeBtn) {
                activeBtn.classList.remove('btn-outline');
                activeBtn.classList.add('btn-primary', 'active');
            }
        }

        if (searchQuery || categoryQuery !== 'all') {
            filterPlants(searchQuery, categoryQuery);
        }

        // Search Input Event
        if (plantSearch) {
            plantSearch.addEventListener('input', (e) => {
                const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
                filterPlants(e.target.value, activeFilter);
            });
        }

        // Filter Buttons Event
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterBtns.forEach(b => b.classList.remove('active', 'btn-primary'));
                filterBtns.forEach(b => b.classList.add('btn-outline'));
                
                e.target.classList.remove('btn-outline');
                e.target.classList.add('btn-primary', 'active');

                const searchTerm = plantSearch ? plantSearch.value : '';
                filterPlants(searchTerm, e.target.dataset.filter);
            });
        });

        function filterPlants(searchTerm, category) {
            searchTerm = searchTerm.toLowerCase();
            let visibleCount = 0;

            plantCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const desc = card.querySelector('.plant-short-desc').textContent.toLowerCase();
                const cardCategories = card.dataset.category || '';
                
                const matchesSearch = title.includes(searchTerm) || desc.includes(searchTerm);
                const matchesCategory = category === 'all' || cardCategories.includes(category);

                if (matchesSearch && matchesCategory) {
                    card.style.display = 'flex';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (noResultsMsg) {
                noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
                plantsGrid.style.display = visibleCount === 0 ? 'none' : 'grid';
            }
        }
    }

    // Modal Logic
    const modal = document.getElementById('plantModal');
    const closeBtn = document.querySelector('.close-modal');
    const viewBtns = document.querySelectorAll('.view-details-btn');

    if (modal && closeBtn) {
        viewBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const plantId = e.target.dataset.plant;
                openModal(plantId);
            });
        });

        closeBtn.addEventListener('click', closeModal);
        window.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        
        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') closeModal();
        });
    }

    function openModal(plantId) {
        const data = plantData[plantId];
        if (!data || !modal) return;

        document.getElementById('modalImg').src = data.image;
        document.getElementById('modalTitle').textContent = data.name;
        document.getElementById('modalScientificName').textContent = data.scientificName;
        document.getElementById('modalDesc').textContent = data.description;
        document.getElementById('modalWater').textContent = data.water;
        document.getElementById('modalSun').textContent = data.sunlight;
        document.getElementById('modalTemp').textContent = data.temp;
        document.getElementById('modalSoil').textContent = data.soil;
        document.getElementById('modalFertilizer').textContent = data.fertilizer;
        document.getElementById('modalTips').textContent = data.tips;

        modal.style.display = 'block';
        // Small timeout to allow display:block to apply before changing opacity for transition
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.querySelector('.modal-content').style.transform = 'translateY(0)';
        }, 10);
        
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        if (!modal) return;
        
        modal.style.opacity = '0';
        modal.querySelector('.modal-content').style.transform = 'translateY(-50px)';
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }, 300); // Wait for transition to finish
    }
});
