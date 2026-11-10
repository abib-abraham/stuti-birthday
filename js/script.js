
// =============================================
// STUTI'S LITTLE UNIVERSE
// Complete JavaScript - UTF-8
// =============================================


// 1. ENTER THE UNIVERSE

function enterUniverse() {
    document.getElementById("birthday").scrollIntoView({
        behavior: "smooth"
    });
}


// 2. PHOTO COLLECTIONS

const elishibaPhotos = [
    {
        image: "assets/images/elishiba-stuti-1.jpeg",
        caption: "Beautiful memories together ♡"
    },
    {
        image: "assets/images/elishiba-stuti-2.jpeg",
        caption: "Partners in every little moment ✨"
    },
    {
        image: "assets/images/elishiba-stuti-3.jpeg",
        caption: "Two beautiful souls 🌸"
    },
    {
        image: "assets/images/elishiba-stuti-4.jpeg",
        caption: "A bond full of memories ❤️"
    },
    {
        image: "assets/images/elishiba-stuti-5.jpeg",
        caption: "Keep smiling together ♡"
    }
];


const motherPhotos = [
    {
        image: "assets/images/mother-stuti-1.jpeg",
        caption: "A mother's endless love ❤️"
    },
    {
        image: "assets/images/mother-stuti-2.jpeg",
        caption: "Forever her little girl ♡"
    },
    {
        image: "assets/images/mother-stuti-3.jpeg",
        caption: "A mother's love is forever ❤️"
    }
];


const siblingPhotos = [
    {
        image: "assets/images/sibling-1.jpeg",
        caption: "Partners in crime 😂"
    },
    {
        image: "assets/images/sibling-2.jpeg",
        caption: "One for the memories ♡"
    },
    {
        image: "assets/images/sibling-3.jpeg",
        caption: "Too many stories to tell!"
    },
    {
        image: "assets/images/sibling-4.jpeg",
        caption: "My favourite troublemaker ❤️"
    },
    {
        image: "assets/images/sibling-5.jpeg",
        caption: "Forever my favourite sibling ♡"
    }
];


// FRIENDS PHOTO COLLECTION

const friendsPhotos = [
    {
        image: "assets/images/friends-1.jpeg",
        caption: "Friends who make every moment special ♡"
    },
    {
        image: "assets/images/friends-2.jpeg",
        caption: "A little madness, a lot of memories 😂"
    },
    {
        image: "assets/images/friends-3.jpeg",
        caption: "The best moments are shared ✨"
    },
    {
        image: "assets/images/friends-4.jpeg",
        caption: "Together is always a good idea 🌸"
    },
    {
        image: "assets/images/friends-5.jpeg",
        caption: "Memories worth keeping forever ❤️"
    },
    {
    image: "assets/images/friends-6.jpeg",
    caption: "More beautiful memories together ❤️"
},
{
    image: "assets/images/friends-7.jpeg",
    caption: "Friends forever, memories forever ✨"
}
    
];


// 3. PHOTO SLIDESHOW CREATION

function createGallery(containerId, photos) {

    const container = document.getElementById(containerId);

    if (!container || !photos || photos.length === 0) return;

    container.innerHTML = "";
    container.classList.add("slideshow-grid");

    let currentIndex = 0;

    const card = document.createElement("div");
    card.className = "photo-card slideshow-card";

    const image = document.createElement("img");
    image.alt = "Birthday memory";

    const caption = document.createElement("p");

    const navigation = document.createElement("div");
    navigation.className = "slideshow-navigation";

    const previousButton = document.createElement("button");
    previousButton.type = "button";
    previousButton.className = "slideshow-btn";
    previousButton.textContent = "← Previous";

    const counter = document.createElement("span");
    counter.className = "slideshow-counter";

    const nextButton = document.createElement("button");
    nextButton.type = "button";
    nextButton.className = "slideshow-btn";
    nextButton.textContent = "Next →";

    function showPhoto(index) {

        currentIndex = index;

        const photo = photos[currentIndex];

        image.src = photo.image;
        image.alt = photo.caption;
        caption.textContent = photo.caption;

        counter.textContent =
            `${currentIndex + 1} / ${photos.length}`;

        previousButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === photos.length - 1;

    }

    previousButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            showPhoto(currentIndex - 1);
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentIndex < photos.length - 1) {
            showPhoto(currentIndex + 1);
        }
    });

    navigation.appendChild(previousButton);
    navigation.appendChild(counter);
    navigation.appendChild(nextButton);

    card.appendChild(image);
    card.appendChild(caption);

    container.appendChild(card);
    container.appendChild(navigation);

    showPhoto(0);

}


createGallery("elishibaGallery", elishibaPhotos);
createGallery("motherGallery", motherPhotos);
createGallery("siblingGallery", siblingPhotos);
createGallery("friendsGallery", friendsPhotos);


// 4. PHOTO LIGHTBOX

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close image">×</button>
    <img src="" alt="Selected memory">
`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector("img");


function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


document.addEventListener("click", function (event) {

    if (event.target.matches(".photo-card img")) {

        lightboxImage.src = event.target.src;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    }

});


lightbox.addEventListener("click", function (event) {

    if (
        event.target === lightbox ||
        event.target.classList.contains("lightbox-close")
    ) {

        closeLightbox();

    }

});


// 5. ELEVEN LITTLE SURPRISES

const surprises = [

    {
        title: "A Compliment",
        icon: "🌸",
        message: "You have a beautiful way of making people smile! Never stop being the wonderful person you are."
    },

    {
        title: "A Wish",
        icon: "✨",
        message: "May every dream you have find its way to you. You deserve all the happiness in the world."
    },

    {
        title: "A Reminder",
        icon: "💗",
        message: "Never forget how special and loved you are. Keep believing in yourself."
    },

    {
        title: "A Funny Truth",
        icon: "😂",
        message: "You can be annoying sometimes... okay, maybe a LOT! But life would be boring without you."
    },

    {
        title: "A Hug",
        icon: "🧸",
        message: "Sending you the biggest birthday hug! Consider this your unlimited sibling hug coupon."
    },

    {
        title: "Your Future",
        icon: "🌈",
        message: "I hope your future is filled with happiness, success, exciting adventures and beautiful opportunities."
    },

    {
        title: "A Little Magic",
        icon: "🦋",
        message: "Keep shining. The world needs your sparkle. Never let anything dim your light."
    },

    {
        title: "A Secret",
        icon: "🤫",
        message: "No matter how much we fight or tease each other, remember that I will always be on your side."
    },

    {
        title: "A Smile",
        icon: "😊",
        message: "Keep that beautiful smile forever. It makes even ordinary days special."
    },

    {
        title: "A Memory",
        icon: "📸",
        message: "Some memories become treasures. And I hope we keep creating countless more together."
    },

    {
        title: "The Final Gift",
        icon: "🎁",
        message: "The biggest gift is having you as my sister. Happy Birthday, Stuti! Always remember that your brother is cheering for you. ❤️"
    }

];


const giftGrid = document.getElementById("giftGrid");

const surpriseModal = document.getElementById("surpriseModal");


function openSurprise(title, icon, message) {

    document.getElementById("modalTitle").textContent = title;

    document.getElementById("modalIcon").textContent = icon;

    document.getElementById("modalMessage").textContent = message;

    surpriseModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeSurprise() {

    surpriseModal.classList.remove("active");

    document.body.style.overflow = "";

}


document.getElementById("closeSurprise").addEventListener(
    "click",
    closeSurprise
);

document.getElementById("modalOkay").addEventListener(
    "click",
    closeSurprise
);


surpriseModal.addEventListener("click", function (event) {

    if (event.target === surpriseModal) {

        closeSurprise();

    }

});


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeSurprise();
        closeLightbox();

    }

});


surprises.forEach((surprise, index) => {

    const gift = document.createElement("div");

    gift.className = "gift";

    gift.innerHTML = `
        <span>🎁</span>
        <p>Surprise ${index + 1}</p>
    `;

    gift.addEventListener("click", function () {

        if (gift.classList.contains("opened")) return;

        gift.classList.add("opened");

        gift.innerHTML = `
            <span>${surprise.icon}</span>
            <p>${surprise.title}</p>
        `;

        openSurprise(
            surprise.title,
            surprise.icon,
            surprise.message
        );

    });

    giftGrid.appendChild(gift);

});


// 6. BIRTHDAY CANDLE INTERACTION

const candleBtn = document.getElementById("candleBtn");

candleBtn.addEventListener("click", function () {

    const cake = document.getElementById("cake");

    const message = document.getElementById("candleMessage");

    cake.classList.add("blown");

    cake.textContent = "🎂✨";

    message.textContent =
        "Your wish has been sent to the universe! 🌟";

    candleBtn.textContent = "Wish made! ❤️";

    candleBtn.disabled = true;

    // Move to the birthday video section first.

    setTimeout(function () {

        document.getElementById("video-memories").scrollIntoView({
            behavior: "smooth"
        });

    }, 2500);

});


// 7. SIBLING QUIZ

const questions = [

    {
        question: "Who is more annoying?",
        options: ["Abi 😂", "Stuti 😂"],
        feedback: [
            "Nice try! I think we both know the answer.",
            "Caught you! 😂"
        ]
    },

    {
        question: "Who wins most of our arguments?",
        options: ["Abi", "Stuti"],
        feedback: [
            "That's a suspicious answer!",
            "Obviously, you think you always win!"
        ]
    },

    {
        question: "Who loves teasing the other?",
        options: ["Abi", "Stuti"],
        feedback: [
            "I'm definitely not admitting anything!",
            "You know exactly what you're doing 😂"
        ]
    },

    {
        question: "Who is more dramatic?",
        options: ["Abi", "Stuti"],
        feedback: [
            "Interesting choice!",
            "A little drama makes life entertaining!"
        ]
    }

];


let currentQuestion = 0;

const questionElement = document.getElementById("question");

const optionsElement = document.getElementById("quizOptions");

const feedbackElement = document.getElementById("quizFeedback");

const nextButton = document.getElementById("nextQuestion");

const quizCount = document.getElementById("quizCount");


function loadQuestion() {

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    quizCount.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    optionsElement.innerHTML = "";

    feedbackElement.textContent = "";

    nextButton.hidden = true;

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.textContent = option;

        button.addEventListener("click", function () {

            feedbackElement.textContent =
                question.feedback[index];

            optionsElement.querySelectorAll("button").forEach(btn => {

                btn.disabled = true;

            });

            nextButton.hidden = false;

        });

        optionsElement.appendChild(button);

    });

}


loadQuestion();


nextButton.addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        quizCount.textContent = "Quiz completed!";

        questionElement.textContent =
            "You passed the sibling test! ❤️";

        optionsElement.innerHTML = "";

        feedbackElement.textContent =
            "Happy Birthday, Stuti! You will always be my favourite sister.";

        nextButton.hidden = true;

    }

});


// 8. OPEN THE PERSONAL LETTER

const openLetter = document.getElementById("openLetter");

openLetter.addEventListener("click", function () {

    document.getElementById("envelope").hidden = true;

    document.getElementById("letterContent").hidden = false;

});


// 9. BACKGROUND MUSIC

const music = document.getElementById("backgroundMusic");

const musicBtn = document.getElementById("musicBtn");


musicBtn.addEventListener("click", async function () {

    if (music.paused) {

        try {

            await music.play();

            musicBtn.textContent = "♫ Pause Music";

        } catch (error) {

            musicBtn.textContent = "Music unavailable";

            console.error("Music playback failed:", error);

        }

    } else {

        music.pause();

        musicBtn.textContent = "♫ Play Music";

    }

});


// 10. FLOATING STARS

const stars = document.getElementById("stars");

for (let i = 0; i < 30; i++) {

    const star = document.createElement("span");

    star.className = "star-particle";

    star.textContent = "✦";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.fontSize =
        (Math.random() * 12 + 8) + "px";

    star.style.animationDelay =
        Math.random() * 4 + "s";

    stars.appendChild(star);

}


// 11. BIRTHDAY VIDEO PLAYER

const birthdayVideos = [

    // FRIEND 1
    {
        file: "assets/videos/friend-1.mp4",
        title: "A Message For Stuti 💕",
        tag: "FROM YOUR FRIENDS",
        description: "A little birthday love, just for you."
    },

    // FRIEND 2
    {
        file: "assets/videos/friend-2.mp4",
        title: "Another Beautiful Wish ✨",
        tag: "FROM YOUR FRIENDS",
        description: "Another person sending you love."
    },

    // FRIEND 3
    {
        file: "assets/videos/friend-3.mp4",
        title: "A Special Birthday Wish 💗",
        tag: "FROM YOUR FRIENDS",
        description: "A memory to make you smile."
    },

    // FRIEND 4
    {
        file: "assets/videos/friend-4.mp4",
        title: "More Love, More Memories 🌸",
        tag: "FROM YOUR FRIENDS",
        description: "Because you deserve all the happiness."
    },

    // FRIEND 5
    {
        file: "assets/videos/friend-5.mp4",
        title: "One More Surprise 🎀",
        tag: "FROM YOUR FRIENDS",
        description: "The birthday wishes keep coming."
    },

    // FRIEND 6
    {
        file: "assets/videos/friend-6.mp4",
        title: "One Last Wish From A Friend 💖",
        tag: "FROM YOUR FRIENDS",
        description: "Another beautiful birthday message, just for you."
    },


    // ==========================================
    // RESERVED FRIEND VIDEO SLOT 7
    // Add friend-7.mp4 when the video arrives.
    // Uncomment the object below to activate it.
    // ==========================================

    
    {
        file: "assets/videos/friend-7.mp4",
        title: "Another Birthday Surprise 💕",
        tag: "FROM YOUR FRIENDS",
        description: "Another special message, just for you."
    },
    


    // ==========================================
    // RESERVED FRIEND VIDEO SLOT 8
    // Add friend-8.mp4 when the video arrives.
    // Uncomment the object below to activate it.
    // ==========================================

    
    {
        file: "assets/videos/friend-8.mp4",
        title: "One More Beautiful Wish ✨",
        tag: "FROM YOUR FRIENDS",
        description: "More memories and birthday love."
    },
    


    // SPECIAL MESSAGE FROM ELISHIBA
    {
        file: "assets/videos/elishiba.mp4",
        title: "A Message From Elishiba ❤️",
        tag: "A SPECIAL MESSAGE",
        description: "Someone special has something to say."
    },


    // FINAL MESSAGE FROM ABI
    {
        file: "assets/videos/brother.mp4",
        title: "From Your Brother ❤️",
        tag: "WITH LOVE, YOUR BROTHER",
        description: "A little message from me, just for you."
    }

];


let currentVideoIndex = 0;

const birthdayVideo = document.getElementById("birthdayVideo");

const videoTitle = document.getElementById("videoTitle");

const videoTag = document.getElementById("videoTag");

const videoDescription = document.getElementById("videoDescription");

const videoCounter = document.getElementById("videoCounter");

const previousVideo = document.getElementById("previousVideo");

const nextVideo = document.getElementById("nextVideo");


function loadBirthdayVideo(index) {

    if (!birthdayVideo) return;

    currentVideoIndex = index;

    const video = birthdayVideos[index];

    birthdayVideo.pause();

    birthdayVideo.src = video.file;

    birthdayVideo.load();

    videoTitle.textContent = video.title;

    videoTag.textContent = video.tag;

    videoDescription.textContent = video.description;

    // Automatically updates the total video count.
    videoCounter.textContent =
        `VIDEO ${String(index + 1).padStart(2, "0")} OF ${String(birthdayVideos.length).padStart(2, "0")}`;

    previousVideo.disabled = index === 0;

    nextVideo.textContent =
        index === birthdayVideos.length - 1
            ? "Finish & Continue ↓"
            : "Next Video →";

}


if (birthdayVideo && previousVideo && nextVideo) {

    nextVideo.addEventListener("click", () => {

        if (currentVideoIndex < birthdayVideos.length - 1) {

            loadBirthdayVideo(currentVideoIndex + 1);

        } else {

            document.getElementById("elishiba").scrollIntoView({
                behavior: "smooth"
            });

        }

    });


    previousVideo.addEventListener("click", () => {

        if (currentVideoIndex > 0) {

            loadBirthdayVideo(currentVideoIndex - 1);

        }

    });


    // Pause background music while a video is playing.

    birthdayVideo.addEventListener("play", () => {

        if (music) {

            music.pause();

            musicBtn.textContent = "♫ Play Music";

        }

    });


    loadBirthdayVideo(0);

}


// 12. CONSOLE MESSAGE

console.log(
    "Stuti's Little Universe is ready! Made with love. ❤️"
);
