const posts = [
    { id: 1, title: 'Getting Started with JavaScript', date: '2024-01-15', content: 'JavaScript is a powerful programming language that runs in the browser. Learn the basics and start building interactive websites.' },
    { id: 2, title: 'CSS Tips and Tricks', date: '2024-01-10', content: 'Discover amazing CSS techniques to make your websites look professional. From flexbox to grid, master modern CSS.' },
    { id: 3, title: 'HTML Best Practices', date: '2024-01-05', content: 'Writing clean and semantic HTML is crucial for accessibility and SEO. Follow these best practices for better websites.' }
];

function showPosts() {
    const container = document.getElementById('posts');
    
    container.innerHTML = posts.map(post => `
        <article class="post">
            <h2>${post.title}</h2>
            <p class="date">${post.date}</p>
            <p class="content">${post.content}</p>
            <button onclick="readMore(${post.id})">Read More</button>
        </article>
    `).join('');
}

function readMore(id) {
    const post = posts.find(p => p.id === id);
    alert(`${post.title}\n\n${post.content}`);
}

showPosts();
