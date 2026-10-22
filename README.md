# FinBud - App de Controle Financeiro Pessoal

Aplicativo web completo e responsivo de Controle Financeiro Pessoal, otimizado para dispositivos móveis (como o Samsung Galaxy S26 Ultra) e navegação desktop.

## 🚀 Funcionalidades

- **Dashboard Principal**:
  - Saldo Total, Entradas (Receitas) e Saídas (Despesas).
  - Projeção de saldo mensal considerando lançamentos recorrentes ativos.
  - **Calendário mensal** com os lançamentos de cada dia, status de pago/pendente/atrasado e o saldo acumulado abaixo do dia (toque no dia para ver os itens e marcar como pago).
  - Gráficos interativos (Chart.js) para distribuição de despesas por categoria.
  - Barras de progresso dos limites de orçamento por categoria (alertas de 80% e 100%), com quanto resta ou quanto passou. **Toque numa barra, ou em Ajustar, para editar os limites.**

- **Despesas e Receitas Recorrentes**:
  - Suporte a periodicidades: **Diário, Semanal, Quinzenal, Mensal e Anual**.
  - Configuração de data de início.
  - Periodicidade sempre visível em cada regra (etiqueta colorida + "Todo mês", "Toda semana" etc.).
  - Opção para ativar/desativar regras e registrar diretamente no extrato com um clique.
  - Botão de **editar** em cada regra.

- **Extrato e Histórico de Movimentações**:
  - Filtro por mês e por categoria.
  - Botão de **editar** e remoção individual de lançamentos.
  - Lançamentos vindos de recorrências mostram a periodicidade.

- **Tema claro e escuro**: botão ☀️/🌙 no cabeçalho e opção Automático / Claro / Escuro em Configurações > Aparência (segue o sistema; padrão: escuro).
- **Ícones (emojis) nos lançamentos**: escolha um ícone ao criar/editar lançamentos e recorrências em um painel de emojis estilo WhatsApp (rolagem contínua, abas por categoria, busca, recentes e sugestão automática pela descrição). Aparece no extrato, nas recorrências e no calendário do dia.

- **Configurações Personalizadas**:
  - **Gestão de Categorias**: criar, **editar** (nome, ícone e limite; o ícone é escolhido visualmente, entre ícones do app e emojis) e excluir categorias. Renomear atualiza os lançamentos e recorrências.
  - **Backup & Importação**: Exportação e importação de dados em formato JSON.
  - **Reset de Dados**: Opção para restaurar configurações iniciais.

- **Persistência de Dados**:
  - Salvamento automático via `localStorage` no próprio navegador (sem necessidade de backend ou banco de dados externo).

## 🛠️ Como Executar / Publicar no GitHub Pages

1. Faça o upload dos arquivos (`index.html` e `README.md`) para o seu repositório no GitHub.
2. Acesse as **Settings** (Configurações) do repositório no GitHub.
3. Navegue até a seção **Pages** no menu lateral esquerdo.
4. Em **Build and deployment** > **Source**, selecione `Deploy from a branch`.
5. Selecione a branch `main` (ou `master`) e a pasta `/ (root)`.
6. Clique em **Save**. Em instantes seu aplicativo estará acessível publicamente!

## 📲 Instalar no Android (PWA)

1. Abra o link publicado do app no **Chrome** do Android (precisa ser HTTPS).
2. Menu ⋮ > **Instalar app** (ou **Adicionar à tela inicial**).
3. O ícone do FinBud aparece na tela inicial e o app abre em tela cheia.

Arquivos necessários no repositório: `index.html`, `manifest.webmanifest`, `sw.js` e a pasta `icons/`.
