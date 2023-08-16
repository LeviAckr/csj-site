function showArticleContent(articleId) {
    const articlesSection = document.getElementById('articles');
    const articleContentSection = document.getElementById('article-content');
    const articleTitle = document.getElementById('article-title');
    const articleText = document.getElementById('article-text');

    // Simule o carregamento do conteúdo do artigo com base no ID
    if (articleId === 1) {
        articleTitle.textContent = 'Funcionamento';
        articleText.innerHTML = '<p>Um fórum é uma plataforma online onde os usuários podem discutir, compartilhar e interagir sobre tópicos de interesse. Os fóruns são organizados em categorias e tópicos, permitindo que os membros participem de discussões relevantes para seus interesses. Os usuários podem criar novos tópicos, postar respostas, compartilhar informações e colaborar com outros participantes. Através de recursos como postagens, respostas, citações e avaliações, os fóruns facilitam a troca de conhecimento, a resolução de dúvidas e a construção de uma comunidade engajada. 🌐✨🗣️</p>';
    } else if (articleId === 2) {
        articleTitle.textContent = 'Cargos Atuais';
        articleText.innerHTML = '<p>No momento apenas administradores da pagina podem publicar</p>';
    }

    articlesSection.style.display = 'none';
    articleContentSection.style.display = 'block';
}
