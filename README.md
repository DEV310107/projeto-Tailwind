# Documentação Projeto TailWind 🔔

Nosso objetivo é criar um painel de administração, usando o Tailwind CSS, que seja fácil de utilizar e visualmente atrativo. O painel deve aderir às melhores práticas de UI e UX Design, proporcionando uma experiência interativa e acessível.

Para começarmos fazendo o nosso projeto, iniciamos o protótipo de baixa fidelidade pelo figma, assim tendo uma noção melhor do que iriamos fazer com convicção em nosso projeto.

Link do Figma: https://www.figma.com/design/HOctb6xHDzgUBF9kMripGY/Projeto?node-id=0-1&p=f&t=N7avuvU2TZlEmuqm-0

![image.png](https://github.com/DEV310107/projeto-Tailwind/blob/main/img/image%201.png?raw=true)

Tela para adicionar o produto:

![image.png](https://github.com/DEV310107/projeto-Tailwind/blob/main/img/image%202.png?raw=true)

Remover produto:

![image.png](https://github.com/DEV310107/projeto-Tailwind/blob/main/img/image%203.png?raw=true)

Lista de produtos:

![image.png](https://github.com/DEV310107/projeto-Tailwind/blob/main/img/image%204.png?raw=true)

Adicionar produto (responsivo para celular)

![image.png](https://github.com/DEV310107/projeto-Tailwind/blob/main/img/image%205.png?raw=true)

Remover produto (responsivo para celular)

![image.png](https://github.com/DEV310107/projeto-Tailwind/blob/main/img/image%206.png?raw=true)

Lista de produtos (responsivo para celular)

![image.png](https://github.com/DEV310107/projeto-Tailwind/blob/main/img/image%207.png?raw=true)

# Código 💬

O código foi estruturado da seguinte forma usamos 4 arquivos index, e 2 JS, cada arquivo index fazia respectivamente cada função do protótipo como adicionar, deletar e a lista de produtos.

Já o conf.js foi utilizado para configurar o gráfico de produtos, o main.js foi utilizado para configurar o menu responsivo.

![image.png](https://github.com/DEV310107/projeto-Tailwind/blob/main/img/image%208.png?raw=true)

###🚪 INDEX: 

```html
<!DOCTYPE html> <!-- Declara o tipo do documento como HTML5 -->
<html lang="pt-BR"> <!-- Define o idioma da página como português do Brasil -->
<head> <!-- Início da seção de cabeçalho -->
  <meta charset="UTF-8" /> <!-- Define a codificação de caracteres como UTF-8 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <!-- Faz a página responsiva em dispositivos móveis -->
  <script src="https://cdn.tailwindcss.com"></script> <!-- Importa o Tailwind CSS via CDN -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> <!-- Importa o Chart.js para gráficos -->
  <title>Dashboard</title> <!-- Título da aba do navegador -->
</head> <!-- Fim do cabeçalho -->

<body class="bg-gray-100"> <!-- Início do corpo com fundo cinza claro -->

  <button id="menuButton" class="md:hidden p-4"> <!-- Botão do menu visível apenas em telas pequenas -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <!-- Ícone em SVG do botão -->
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /> <!-- Linhas do menu hambúrguer -->
    </svg>
  </button>

  <div class="flex"> <!-- Container flexível para sidebar e conteúdo principal -->
    <aside id="sidebar" class="fixed top-0 left-0 w-64 h-screen bg-white p-5 shadow-md transform -translate-x-full transition-transform md:relative md:translate-x-0 md:block md:w-100 z-50"> <!-- Barra lateral com comportamento responsivo -->
      <h1 class="text-2xl font-bold text-blue-500 p-2">TrendBox</h1> <!-- Título da sidebar -->
      <nav class="mt-10"> <!-- Navegação da sidebar -->
        <ul>
          <li class="mb-10 p-2"><a href="/index.html">Dashboard</a></li> <!-- Link para dashboard -->
          <li class="mb-10 p-2"><a href="/addProduto.html">Adicionar Produto</a></li> <!-- Link para adicionar produto -->
          <li class="mb-10 p-2"><a href="/delProduto.html">Remover Produto</a></li> <!-- Link para remover produto -->
          <li class="mb-10 p-2"><a href="/produtos.html">Produtos</a></li> <!-- Link para lista de produtos -->
        </ul>
      </nav>
    </aside>

    <main class="flex-1 p-6 w-full mt-10 md:mt-0"> <!-- Conteúdo principal com padding e margem no topo para mobile -->
      <h1 class="text-2xl font-bold">Dashboard</h1> <!-- Título principal -->

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5"> <!-- Cards em grid responsivo -->
        <div class="bg-white p-5 shadow-md rounded-lg"> <!-- Card de vendas -->
          <h3 class="text-lg font-bold">Total de Vendas</h3>
          <p class="text-2xl font-semibold">25,024</p>
        </div>
        <div class="bg-white p-5 shadow-md rounded-lg"> <!-- Card de despesas -->
          <h3 class="text-lg font-bold">Total de Despesas</h3>
          <p class="text-2xl font-semibold">14,024</p>
        </div>
        <div class="bg-white p-5 shadow-md rounded-lg"> <!-- Card de custos -->
          <h3 class="text-lg font-bold">Total de Custos</h3>
          <p class="text-2xl font-semibold">25,024</p>
        </div>
      </div>

      <div class="bg-white p-1 shadow-md rounded-lg mt-5 overflow-x-auto"> <!-- Container do gráfico com scroll horizontal se necessário -->
        <h3 class="text-lg font-bold mb-3">Gráfico de Vendas, Despesas e Custos</h3> <!-- Título do gráfico -->
        <canvas id="myChart" class="w-5 h-5"></canvas> <!-- Elemento canvas para o gráfico -->
      </div>

      <div class="overflow-x-auto mt-3"> <!-- Tabela com scroll horizontal em telas pequenas -->
        <table class="min-w-full bg-white shadow-md rounded-lg"> <!-- Tabela com fundo branco e bordas arredondadas -->
          <thead>
            <tr class="border-b"> <!-- Linha do cabeçalho da tabela -->
              <th class="p-3 text-left">Nome do Produto</th> <!-- Cabeçalho da coluna nome -->
              <th class="p-3 text-left">Número do Produto</th> <!-- Cabeçalho da coluna número -->
              <th class="p-3 text-left">Pagamento</th> <!-- Cabeçalho da coluna pagamento -->
              <th class="p-3 text-left">Status</th> <!-- Cabeçalho da coluna status -->
            </tr>
          </thead>
          <tbody>
            <tr class="border-b"> <!-- Primeira linha da tabela -->
              <td class="p-3">Mini Drone</td>
              <td class="p-3">123</td>
              <td class="p-3">Cartão de Crédito</td>
              <td class="p-3 text-yellow-500">Pendente</td>
            </tr>
            <tr class="border-b"> <!-- Segunda linha da tabela -->
              <td class="p-3">Celular</td>
              <td class="p-3">124</td>
              <td class="p-3">Boleto</td>
              <td class="p-3 text-yellow-500">Pendente</td>
            </tr>
            <tr> <!-- Terceira linha da tabela -->
              <td class="p-3">Carregador</td>
              <td class="p-3">125</td>
              <td class="p-3">Cartão de Crédito</td>
              <td class="p-3 text-yellow-500">Pendente</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>

  <script src="/script/conf.js"></script> <!-- Script de configurações -->
  <script src="/script/menu.js"></script> <!-- Script para o botão do menu -->
</body>
</html> <!-- Fim do documento HTML -->

```

Esse código cria uma **página de dashboard administrativa responsiva**, voltada para o controle de vendas de uma empresa fictícia chamada **TrendBox**. Ele é todo estilizado com **Tailwind CSS** e utiliza também **Chart.js** para gerar gráficos.

Logo no topo, há um botão de menu visível apenas em telas pequenas (mobile), permitindo abrir um **menu lateral (sidebar)** que contém links para páginas importantes: Dashboard, Adicionar Produto, Remover Produto e Produtos.

A interface é dividida em duas áreas principais:

- **Sidebar (menu lateral)** fixa na esquerda, que serve como navegação.
- **Área principal (main)** onde ficam os conteúdos do dashboard.

Dentro da área principal, ele exibe três blocos de estatísticas:

- Total de Vendas: 25.024
- Total de Despesas: 14.024
- Total de Custos: 25.024

Essas informações são apresentadas de forma visual e chamativa, com caixas brancas arredondadas, sombras e textos destacados.

Abaixo dessas estatísticas, há um **gráfico** que irá exibir os dados de vendas, despesas e custos (embora o script específico para configurar o gráfico esteja em outro arquivo chamado `conf.js`, que não foi enviado). A presença do `<canvas>` indica que esse gráfico será desenhado dinamicamente com o Chart.js.

Logo depois, é mostrada uma **tabela de produtos** com colunas para o nome do produto, número de identificação, forma de pagamento e status do pedido (todos com o status “Pendente”). Ela tem um layout bem limpo e adaptável a diferentes tamanhos de tela, com rolagem horizontal para dispositivos menores.

Por fim, dois scripts são carregados no final:

- `conf.js`: provavelmente contém a lógica do gráfico.
- `menu.js`: deve conter a lógica para mostrar/ocultar o menu lateral em dispositivos móveis.

Ou seja, essa página serve como **painel gerencial** para uma loja ou sistema de controle de produtos, facilitando a visualização de dados financeiros e status de pedidos, com uma interface moderna e responsiva.

###📩 ADDPRODUTO:

```html
<!DOCTYPE html> <!-- Declara o tipo do documento como HTML5 -->
<html lang="pt-BR"> <!-- Define o idioma da página como português do Brasil -->
<head> <!-- Início do cabeçalho da página -->
  <meta charset="UTF-8" /> <!-- Define a codificação de caracteres como UTF-8 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <!-- Configura a visualização para dispositivos móveis -->
  <script src="https://cdn.tailwindcss.com"></script> <!-- Importa o Tailwind CSS via CDN -->
  <title>Dashboard</title> <!-- Título da aba do navegador -->
</head>
<body class="bg-gray-100"> <!-- Início do corpo da página com fundo cinza claro -->

  <button id="menuButton" class="md:hidden p-4"> <!-- Botão de menu visível apenas em telas pequenas -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <!-- Ícone SVG do botão -->
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /> <!-- Desenho do ícone de menu hambúrguer -->
    </svg>
  </button>

  <div class="flex"> <!-- Container flex para sidebar e conteúdo principal -->
    <aside id="sidebar" class="fixed top-0 left-0 w-64 h-screen bg-white p-5 shadow-md transform -translate-x-full transition-transform md:relative md:translate-x-0 md:block md:w-64 z-50"> <!-- Sidebar com comportamento responsivo -->
      <h1 class="text-2xl font-bold text-blue-500 p-2">TrendBox</h1> <!-- Título da sidebar -->
      <nav class="mt-10"> <!-- Navegação da sidebar -->
        <ul>
          <li class="mb-10 p-2"><a href="/index.html">Dashboard</a></li> <!-- Link para Dashboard -->
          <li class="mb-10 p-2"><a href="/addProduto.html">Adicionar Produto</a></li> <!-- Link para adicionar produto -->
          <li class="mb-10 p-2"><a href="/delProduto.html">Remover Produto</a></li> <!-- Link para remover produto -->
          <li class="mb-10 p-2"><a href="/produtos.html">Produtos</a></li> <!-- Link para página de produtos -->
        </ul>
      </nav>
    </aside>

    <main class="flex-1 h-screen flex justify-center items-center md:ml-50 bg-gray-100"> <!-- Área principal centralizada com fundo cinza -->
      <div class="w-full max-w-md"> <!-- Container com largura máxima média -->
        <h2 class="text-3xl font-bold mt-1 mb-10 text-center">Adicionar Produto</h2> <!-- Título do formulário -->
        <form id="productForm" class="bg-white p-6 rounded shadow-md"> <!-- Formulário com fundo branco e sombra -->
          <div class="mb-4"> <!-- Campo do nome do produto -->
            <label for="productName" class="block text-gray-700 font-bold mb-2">Nome do Produto</label>
            <input type="text" id="productName" class="w-full p-2 border border-gray-300 rounded" placeholder="Digite o nome do produto">
          </div>
          <div class="mb-4"> <!-- Campo do preço do produto -->
            <label for="productPrice" class="block text-gray-700 font-bold mb-2">Preço</label>
            <input type="number" id="productPrice" class="w-full p-2 border border-gray-300 rounded" placeholder="Digite o preço do produto">
          </div>
          <div class="mb-4"> <!-- Campo da descrição do produto -->
            <label for="productDescription" class="block text-gray-700 font-bold mb-2">Descrição</label>
            <textarea id="productDescription" class="w-full p-2 border border-gray-300 rounded" placeholder="Digite a descrição do produto"></textarea>
          </div>
          <div class="mb-4"> <!-- Campo da categoria do produto -->
            <label for="productCategory" class="block text-gray-700 font-bold mb-2">Categoria</label>
            <select id="productCategory" class="w-full p-2 border border-gray-300 rounded">
              <option value="">Selecione uma categoria</option> <!-- Opção padrão -->
              <option value="electronics">Eletrônicos</option> <!-- Categoria: Eletrônicos -->
              <option value="clothing">Roupas</option> <!-- Categoria: Roupas -->
              <option value="accessories">Acessórios</option> <!-- Categoria: Acessórios -->
            </select>
          </div>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Adicionar Produto</button> <!-- Botão de envio do formulário -->
        </form>
      </div>
    </main>    
  </div>

  <script src="/script/menu.js"></script> <!-- Script para o botão do menu lateral -->
</body>
</html> <!-- Fim do documento HTML -->

```

Esse código monta uma página chamada **Adicionar Produto**, que faz parte de um sistema chamado **TrendBox**. Ele é todo estilizado com Tailwind CSS e tem um visual bem moderno, limpo e responsivo, ou seja, funciona bem tanto no computador quanto no celular.

Logo no canto esquerdo, tem um **menu lateral fixo** que mostra links para as principais páginas do sistema: Dashboard, Adicionar Produto, Remover Produto e Produtos. Esse menu fica escondido no celular e aparece só quando o usuário clica no botão de menu (o ícone com três linhas).

No centro da tela, tem um **formulário para cadastrar um novo produto**. Esse formulário tem campos para o usuário digitar:

- O **nome do produto**
- O **preço**
- Uma **descrição**
- E escolher uma **categoria** (como Eletrônicos, Roupas ou Acessórios)

Depois que o usuário preenche tudo, ele pode clicar no botão **“Adicionar Produto”** pra enviar os dados. O formulário tá bem organizado, com tudo separado por blocos, e o layout ajuda bastante na hora de preencher.

Por fim, o código carrega um script chamado `menu.js`, que provavelmente cuida da lógica do botão de menu no celular — tipo abrir e fechar o menu lateral quando precisar.

No geral, essa página é feita pra facilitar o trabalho de quem tá gerenciando os produtos da loja, deixando tudo bem simples, claro e bonito de usar.

###📦 DELPRODUTO:

```html
<!DOCTYPE html> <!-- Define o tipo de documento como HTML5 -->
<html lang="pt-BR"> <!-- Define o idioma da página como português do Brasil -->
<head>
  <meta charset="UTF-8" /> <!-- Define a codificação de caracteres como UTF-8 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <!-- Torna a página responsiva -->
  <script src="https://cdn.tailwindcss.com"></script> <!-- Importa o Tailwind CSS via CDN -->
  <title>Dashboard</title> <!-- Título da aba do navegador -->
</head>
<body class="bg-gray-100"> <!-- Corpo da página com fundo cinza claro -->

  <!-- Botão de menu para telas pequenas -->
  <button id="menuButton" class="md:hidden p-4">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>

  <!-- Container principal com flexbox -->
  <div class="flex">
    
    <!-- Sidebar lateral com links -->
    <aside id="sidebar" class="fixed top-0 left-0 w-64 h-screen bg-white p-5 shadow-md transform -translate-x-full transition-transform md:relative md:translate-x-0 md:block md:w-100 z-50">
      <h1 class="text-2xl font-bold text-blue-500 p-2">TrendBox</h1> <!-- Logo da sidebar -->
      <nav class="mt-10">
        <ul>
          <li class="mb-10 p-2"><a href="/index.html">Dashboard</a></li> <!-- Link Dashboard -->
          <li class="mb-10 p-2"><a href="/addProduto.html">Adicionar Produto</a></li> <!-- Link Adicionar -->
          <li class="mb-10 p-2"><a href="/delProduto.html">Remover Produto</a></li> <!-- Link Remover -->
          <li class="mb-10 p-2"><a href="/produtos.html">Produtos</a></li> <!-- Link Produtos -->
        </ul>
      </nav>
    </aside>

    <!-- Conteúdo principal da página -->
    <main class="flex-1 p-10 flex justify-center items-center mt-10 md:mt-0">
      <div class="w-full max-w-md">
        <h2 class="text-3xl font-bold mt-1 mb-10 text-center">Remover Produto</h2> <!-- Título da seção -->

        <!-- Formulário para remover produto -->
        <form id="productForm" class="bg-white p-6 rounded shadow-md">
          
          <!-- Campo: Nome do Produto -->
          <div class="mb-4">
            <label for="productName" class="block text-gray-700 font-bold mb-2">Nome do Produto</label>
            <input type="text" id="productName" class="w-full p-2 border border-gray-300 rounded" placeholder="Digite o nome do produto cadastrado" />
          </div>

          <!-- Campo: Categoria do Produto -->
          <div class="mb-4">
            <label for="productCategory" class="block text-gray-700 font-bold mb-2">Categoria</label>
            <select id="productCategory" class="w-full p-2 border border-gray-300 rounded">
              <option value="">Selecione uma categoria</option>
              <option value="electronics">Eletrônicos</option>
              <option value="clothing">Roupas</option>
              <option value="accessories">Acessórios</option>
            </select>
          </div>

          <!-- Botão de envio -->
          <button type="submit" id="submitButton" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Remover Produto</button>
        </form>
      </div>
    </main>
  </div>

  <!-- Script que controla o comportamento do menu -->
  <script src="/script/menu.js"></script>
</body>
</html>

```

Essa página foi feita pra facilitar a vida de quem precisa **remover um produto do sistema**. Em vez de ficar caçando o produto em listas enormes ou mexendo em várias telas, aqui o usuário só precisa informar o **nome do produto** e escolher a **categoria** em que ele tá cadastrado. Tudo isso é feito dentro de um formulário simples, bem no centro da tela, com campos organizados e claros.

O layout é limpo e direto ao ponto, o que ajuda a evitar erro na hora de preencher. Não tem enrolação nem distração. A ideia é que o administrador consiga, em poucos segundos, identificar e excluir o produto sem complicação.

Além disso, o botão de menu no topo garante que a navegação continue fluida mesmo no celular, então dá pra usar essa funcionalidade de qualquer lugar. O sistema foi pensado pra ser ágil, leve e prático no dia a dia de quem gerencia os produtos.

###☄️ PRODUTO:

```html
<!DOCTYPE html> <!-- Declaração do tipo de documento como HTML5 -->
<html lang="pt-BR"> <!-- Início da tag HTML com atributo de idioma definido como português brasileiro -->
<head> <!-- Início da seção de cabeçalho do documento -->
  <meta charset="UTF-8" /> <!-- Define a codificação de caracteres como UTF-8 para suportar caracteres especiais -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <!-- Configura a responsividade para dispositivos móveis, ajustando a largura e escala inicial -->
  <script src="https://cdn.tailwindcss.com"></script> <!-- Inclui o Tailwind CSS via CDN para estilização baseada em classes utilitárias -->
  <title>Dashboard</title> <!-- Define o título da página exibido na aba do navegador como "Dashboard" -->
</head> 
<body class="bg-gray-100"> <!-- Início do corpo do documento com fundo cinza claro aplicado via Tailwind -->

  <button id="menuButton" class="md:hidden p-4"> <!-- Botão para o menu hamburger visível apenas em telas menores que 'md' (escondido em telas médias e maiores), com padding de 4 -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <!-- Ícone SVG de menu com altura e largura de 6 unidades, cor azul -->
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /> <!-- Desenho de três linhas horizontais representando o ícone de menu -->
    </svg> 
  </button> 

  <div class="flex"> <!-- Container flexível para organizar o layout em linha -->
    <aside id="sidebar" class="fixed top-0 left-0 w-64 h-screen bg-white p-5 shadow-md transform -translate-x-full transition-transform md:relative md:translate-x-0 md:block md:w-100 z-50"> <!-- Barra lateral fixa com largura de 64 unidades, altura total da tela, fundo branco, padding de 5, sombra, inicialmente escondida (-translate-x-full) com transição, visível em telas médias e maiores -->
      <h1 class="text-2xl font-bold text-blue-500 p-2">TrendBox</h1> <!-- Título da barra lateral com texto grande, negrito, cor azul e padding de 2 -->
      <nav class="mt-10"> <!-- Seção de navegação com margem superior de 10 unidades -->
        <ul> 
          <li class="mb-10 p-2"><a href="/index.html">Dashboard</a></li> <!-- Item de menu com margem inferior de 10, padding de 2, link para o dashboard -->
          <li class="mb-10 p-2"><a href="/addProduto.html">Adicionar Produto</a></li> <!-- Item de menu para adicionar produto -->
          <li class="mb-10 p-2"><a href="/delProduto.html">Remover Produto</a></li> <!-- Item de menu para remover produto -->
          <li class="mb-10 p-2"><a href="/produtos.html">Produtos</a></li> <!-- Item de menu para listar produtos -->
        </ul> 
      </nav> 
    </aside> 

    <main class="flex-10 p-6 mt-15 md:mt-0"> <!-- Seção principal com flexibilidade de 10, padding de 6, margem superior de 15 (ajustada para 0 em telas médias e maiores) -->
      <h2 class="text-xl font-bold mb-4">Lista de Produtos</h2> <!-- Subtítulo com texto grande, negrito e margem inferior de 4 -->
      <div class="overflow-x-auto"> <!-- Container com rolagem horizontal para a tabela em telas pequenas -->
        <table class="min-w-full bg-white border border-gray-300 text-sm"> <!-- Tabela com largura mínima total, fundo branco, borda cinza e texto pequeno -->
          <thead> 
            <tr class="bg-gray-100"> <!-- Linha do cabeçalho com fundo cinza claro -->
              <th class="px-4 py-3 border-b text-left font-medium">ID</th> <!-- Coluna ID com padding, borda inferior, texto alinhado à esquerda e fonte média -->
              <th class="px-4 py-3 border-b text-left font-medium">Nome</th> <!-- Coluna Nome -->
              <th class="px-4 py-3 border-b text-left font-medium">Preço</th> <!-- Coluna Preço -->
              <th class="px-4 py-3 border-b text-left font-medium">Categoria</th> <!-- Coluna Categoria -->
              <th class="px-4 py-3 border-b text-left font-medium">Descrição</th> <!-- Coluna Descrição -->
            </tr> 
          </thead> 
          <tbody> 
            <tr> 
              <td class="px-4 py-3 border-b">1</td> <!-- Célula com ID 1 -->
              <td class="px-4 py-3 border-b">Smartphone Samsung Galaxy S23</td> <!-- Nome do produto -->
              <td class="px-4 py-3 border-b">R$ 4.999,00</td> <!-- Preço -->
              <td class="px-4 py-3 border-b">Eletrônicos</td> <!-- Categoria -->
              <td class="px-4 py-3 border-b">Smartphone de última geração com câmera avançada, tela AMOLED de alta resolução e bateria de longa duração.</td> <!-- Descrição -->
            </tr> 
            <tr> 
              <td class="px-4 py-3 border-b">2</td> <!-- ID 2 -->
              <td class="px-4 py-3 border-b">Notebook Dell Inspiron</td> <!-- Nome -->
              <td class="px-4 py-3 border-b">R$ 3.500,00</td> <!-- Preço -->
              <td class="px-4 py-3 border-b">Eletrônicos</td> <!-- Categoria -->
              <td class="px-4 py-3 border-b">Notebook ideal para trabalho e estudos, com processador rápido, tela Full HD e design leve e portátil.</td> <!-- Descrição -->
            </tr> 
            <tr> 
              <td class="px-4 py-3 border-b">3</td> <!-- ID 3 -->
              <td class="px-4 py-3 border-b">Camiseta Nike Dry-Fit</td> <!-- Nome -->
              <td class="px-4 py-3 border-b">R$ 149,90</td> <!-- Preço -->
              <td class="px-4 py-3 border-b">Roupas</td> <!-- Categoria -->
              <td class="px-4 py-3 border-b">Camiseta esportiva com tecnologia de secagem rápida, ideal para atividades físicas e conforto diário.</td> <!-- Descrição -->
            </tr> 
            <tr> 
              <td class="px-4 py-3 border-b">4</td> <!-- ID 4 -->
              <td class="px-4 py-3 border-b">Relógio Apple Watch Series 8</td> <!-- Nome -->
              <td class="px-4 py-3 border-b">R$ 5.299,00</td> <!-- Preço -->
              <td class="px-4 py-3 border-b">Acessórios</td> <!-- Categoria -->
              <td class="px-4 py-3 border-b">Relógio inteligente com monitoramento de saúde, resistência à água e integração com dispositivos Apple.</td> <!-- Descrição -->
            </tr> 
            <tr> 
              <td class="px-4 py-3 border-b">5</td> <!-- ID 5 -->
              <td class="px-4 py-3 border-b">Boné Adidas Classic</td> <!-- Nome -->
              <td class="px-4 py-3 border-b">R$ 99,90</td> <!-- Preço -->
              <td class="px-4 py-3 border-b">Acessórios</td> <!-- Categoria -->
              <td class="px-4 py-3 border-b">Boné casual com design clássico, ajuste confortável e material de alta qualidade.</td> <!-- Descrição -->
            </tr> 
            <tr> >
              <td class="px-4 py-3 border-b">6</td> <!-- ID 6 -->
              <td class="px-4 py-3 border-b">Calça Jeans Levi's</td> <!-- Nome -->
              <td class="px-4 py-3 border-b">R$ 279,90</td> <!-- Preço -->
              <td class="px-4 py-3 border-b">Roupas</td> <!-- Categoria -->
              <td class="px-4 py-3 border-b">Calça jeans de alta qualidade e conforto, com design moderno e durabilidade garantida.</td> <!-- Descrição -->
            </tr> 
          </tbody> 
        </table>
      </div> 
    </main> 
  </div> 

  <script src="/script/menu.js"></script> <!-- Inclui um arquivo JavaScript externo para manipular o comportamento do menu -->
</body> 
</html> 
```

Essa página é onde o administrador visualiza **todos os produtos cadastrados** na loja de forma organizada. A ideia é facilitar tanto o controle como a atualização dos dados, porque cada item aparece com suas principais informações: **ID, nome, preço, categoria e descrição**.

A tabela já vem estilizada, com um visual limpo e agradável, o que ajuda bastante na leitura. Se o dono da loja quiser conferir rapidamente se um produto já foi adicionado, ou mesmo só dar aquela revisada nos valores e descrições, essa é a tela ideal.

O layout funciona bem tanto no desktop quanto no celular — com rolagem horizontal se precisar — então dá pra acessar tranquilo de qualquer dispositivo. Em resumo, é uma **lista simples, prática e direta** pra gerenciar os produtos sem estresse.
