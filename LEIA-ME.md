# ECO — Descoberta Musical

## Abrir e apresentar

Extraia todo o ZIP em uma pasta. Abra index.html no navegador. Não é necessário instalar programas, iniciar um servidor ou compilar o projeto.

Para publicar no GitHub Pages, envie o conteúdo da pasta extraída ao repositório, mantendo index.html na raiz. Em Settings → Pages, selecione a publicação a partir da branch que contém os arquivos e da pasta / (root).

## Roteiro para o professor

1. Abra Explorar, escolha um gênero e uma faixa. Use o link do artista ou do álbum para continuar a navegação.
2. Entre com uma conta fictícia da tabela. No painel do ouvinte, abra Biblioteca e escolha uma playlist. No Estúdio, consulte as métricas e a discografia do Tame Impala.
3. No rodapé, abra Central de ajuda → Teste de som. O navegador controla reprodução, pausa, posição e volume do sinal de teste.
4. No cadastro, experimente duas senhas diferentes para verificar a mensagem de validação.

| Perfil | E-mail fictício | Senha de apresentação |
| --- | --- | --- |
| Ouvinte | ouvinte@gmail.com | eco12345 |
| Artista | artista@gmail.com | eco12345 |
| Administrador | administrador@gmail.com | 1234567 |

## Organização do código

- Os arquivos HTML da raiz contêm as páginas principais e os painéis.
- artistas/, albuns/, faixas/, generos/ e playlists/ contêm as páginas individuais. As fichas usam caminhos iniciados por ../ para acessar outras pastas.
- css/eco.css reúne o layout original, a paleta, os efeitos visuais e as regras para telas menores. As variáveis de cor ficam no body.
- js/auth.js confere os campos do login, encaminha cada conta ao painel correspondente e verifica a confirmação de senha do cadastro. Só é carregado nas páginas de acesso.
- assets/ guarda os arquivos locais. Os ícones originais foram separados em arquivos de imagem para utilização com img.

## O que mudou

As categorias substituem a pesquisa dinâmica. Playlists, favoritos, histórico, recomendações, relatórios e administração têm conteúdo fixo. O gráfico do Estúdio apresenta um intervalo ilustrativo de 30 dias. Upload, edição e exclusão de conteúdo, notificações, agendamento e criação de coleções foram retirados. O painel do administrador permite consultar o catálogo.

As 16 músicas do catálogo original são referências editoriais sem gravações no pacote. O sinal em assets/teste-de-som.wav é um teste técnico separado das músicas. Para disponibilizar uma gravação autorizada, copie seu arquivo para assets/ e inclua na ficha correspondente um elemento audio com controls e src="../assets/nome-do-arquivo.mp3". Atualize a indicação de disponibilidade naquela ficha.

## Regras e limites para explicar

Cada página é um documento HTML completo. As tags técnicas html, head, meta, title, link e body sustentam o documento. A tag técnica script é necessária para carregar auth.js no login e cadastro. Confirme com o professor a aceitação dessa tag, da validação de confirmação no cadastro e das propriedades personalizadas CSS utilizadas com var(). O conteúdo usa as tags da lista fornecida.

As contas são públicas e fictícias. O login demonstra a verificação e o redirecionamento. Páginas estáticas podem ser abertas diretamente pelo endereço. Autenticação real, recuperação por e-mail e controle de acesso exigiriam um servidor. Não informe dados pessoais ou senhas reais.

