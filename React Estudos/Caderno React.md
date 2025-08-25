# 🚀 **React**

> Ao começar a usar o **React**, é essencial entender seu funcionamento e como criar componentes reutilizáveis.

React é uma **biblioteca JavaScript** para construir interfaces de usuário dinâmicas e interativas.

O React roda do lado cliente, mas é importante entender a estrutura dos projetos criados com React, especialmente as pastas **src** e **public**:

- **src**: Esta pasta contém todo o código-fonte da aplicação, incluindo componentes React, arquivos JavaScript, CSS e imagens utilizadas diretamente pelo código. Tudo que está em **src** é processado pelo React e pelo Webpack antes de ser exibido no navegador.

- **public**: Aqui ficam os arquivos estáticos que não passam pelo processamento do React, como o `index.html`, ícones e imagens públicas. O arquivo `index.html` é o ponto de entrada da aplicação, onde o React será "injetado" para renderizar a interface.

Em resumo, desenvolva e organize seu código na pasta **src** e coloque arquivos estáticos ou públicos na pasta **public**.

---

### 🛠️ **Como começar?**

1. **Instale o React**:
    ```
    npx create-react-app nome-da-aplicacao
    ```
2. **Inicie o servidor de desenvolvimento**:
    ```
    cd nome-da-aplicacao
    npm start
    ```

---


### 🗺️ **Como usar o React Router?**

1. **Instale o React Router**:
    ```
    npm install react-router-dom
    ```
2. **Altere o documento principal** (ex: `Index.js`):
    ```js
    import { BrowserRouter } from 'react-router-dom';
    ```
    - Importe o BrowserRouter para ativar a tag onde vai configurar as rotas

    ```js
    root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
    ```
3. **Arquivo de navegação**
    - No arquivo de navegação faz os import dos componentes do router e as paginas a ser carregadas

    ```js
    import { Routes, Route, Link } from 'react-router-dom';
    import Pagina1 from "../componentes/Pagina1";
    import Pagina2 from "../componentes/Pagina2";

    ```
    > Crie os componentes como `Home` entre outros conforme necessário.

    ```js
    return (
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/pg1">Página 1</Link>
                <Link to="/pg2">Página 2</Link>
            </header>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/pg1" element={<Pagina1 />} />
                <Route path="/pg2" element={<Pagina2 />} />
            </Routes>
        </div>
    );
    ```

---