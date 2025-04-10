API Countries 🌍
Este projeto é uma aplicação web construída com React e Axios, que permite ao usuário visualizar informações detalhadas sobre diversos países do mundo. A aplicação consome a API pública RestCountries para buscar dados como bandeira, moeda, idiomas e a capital dos países.

📸 Demonstração
(Adicione aqui capturas de tela ou um link para a aplicação hospedada, caso aplicável)

🚀 Tecnologias Utilizadas
React: Biblioteca JavaScript para construção de interfaces de usuário.
Axios: Cliente HTTP baseado em Promises para fazer requisições à API.
RestCountries API: Fonte de dados sobre países do mundo.
HTML, CSS e JavaScript: Para estrutura, estilo e funcionalidades.
📡 Funcionalidades
Exibir uma lista de países com informações básicas.
Permitir ao usuário clicar em um país para visualizar detalhes como:
Bandeira
Nome oficial
Capital
Moeda
Idiomas
Pesquisa por nome de país para facilitar a navegação.
🛠️ Como Executar o Projeto
Clone o repositório:

bash
git clone https://github.com/Arthurpereiraa/Api-countries.git
cd Api-countries
Instale as dependências:

bash
npm install
Inicie o servidor de desenvolvimento:

bash
npm start
Acesse a aplicação no navegador:

Code
http://localhost:3000
🌐 Requisição à API
A aplicação utiliza a seguinte requisição para buscar os dados dos países:

JavaScript
const response = await axios.get('https://restcountries.com/v3.1/all');
Os dados retornados pela API incluem informações detalhadas sobre cada país, que são exibidas na interface do usuário.

🖼️ Estrutura do Projeto
Code
src/
├── components/
|   ├── CountryCard.js   # Componente para exibir informações de cada país
|   ├── CountryDetails.js # Componente para exibir os detalhes do país selecionado
├── App.js               # Componente principal
├── index.js             # Ponto de entrada do React
├── styles/              # Arquivos de estilo CSS
└── services/
    └── api.js           # Configuração do Axios
✨ Melhorias Futuras
Adicionar paginação para melhorar a navegação por países.
Implementar filtragem por região ou idioma.
Adicionar um tema escuro para a interface.
Melhorar o design responsivo para dispositivos móveis.
📄 Licença
Este projeto é de uso livre e não possui licença específica.
