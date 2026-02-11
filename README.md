# 🎯 Landing Page - 150 Dinâmicas Práticas de Educação Física

## 📋 Sobre o Projeto

Landing page profissional para venda de produto digital (e-book de dinâmicas de Educação Física), desenvolvida seguindo as melhores práticas de conversão e design moderno.

## ✨ Características

### 🎨 Design Premium
- **Paleta de Cores Profissional:**
  - Primária: `rgb(15, 23, 42)` - Slate 900 (títulos)
  - Ação: `rgb(34, 197, 94)` - Green 500 (botões)
  - Destaque: `rgb(37, 99, 235)` - Blue 600 (ofertas)
  - Fundos: Branco e Gray 50

- **Tipografia:** Inter (Google Fonts)
- **Animações Suaves:** Micro-interações e transições fluidas
- **Responsivo:** Funciona perfeitamente em desktop, tablet e mobile

### 🚀 Elementos de Conversão

1. **Top Bar de Urgência** - Barra fixa com data atual
2. **Countdown Timer** - Contador regressivo até o fim do dia
3. **CTAs Estratégicos** - Botões com animação de pulso
4. **Prova Social** - Depoimentos com avatares
5. **Ancoragem de Preço** - Comparação Básico vs Premium
6. **Garantia de 7 Dias** - Seção destacada em verde
7. **FAQ Interativo** - Accordion para quebrar objeções

### 📱 Seções da Landing Page

1. ✅ Top Bar (Urgência)
2. ✅ Hero (Título + Mockup + CTA)
3. ✅ O Que Você Vai Receber (6 cards)
4. ✅ Por Que Escolher (4 benefícios)
5. ✅ Bônus Exclusivos (3 bônus)
6. ✅ Planos e Preços (Básico + Premium)
7. ✅ Depoimentos (3 testemunhos)
8. ✅ Sobre o Autor (Autoridade)
9. ✅ FAQ (6 perguntas)
10. ✅ Garantia (Segurança)
11. ✅ CTA Final

## 🎯 Funcionalidades JavaScript

- ✅ Data dinâmica atualizada automaticamente
- ✅ Countdown timer até 23:59:59
- ✅ FAQ accordion interativo
- ✅ Smooth scroll para âncoras
- ✅ Animações ao scroll (Intersection Observer)
- ✅ Imagens placeholder SVG geradas automaticamente
- ✅ Tracking de cliques nos CTAs
- ✅ Efeito de pulso nos botões principais

## 📂 Arquivos

```
252/
├── index.html      # Estrutura HTML completa
├── style.css       # Estilos CSS com design premium
├── script.js       # Funcionalidades JavaScript
└── README.md       # Este arquivo
```

## 🌐 Como Visualizar

### Opção 1: Abrir Diretamente
1. Navegue até a pasta `252`
2. Clique duas vezes no arquivo `index.html`
3. A página abrirá no seu navegador padrão

### Opção 2: Usar um Servidor Local
```bash
# Se tiver Python instalado:
cd "c:/Users/thaso/OneDrive/Área de Trabalho/252"
python -m http.server 8000

# Depois abra: http://localhost:8000
```

### Opção 3: Live Server (VS Code)
1. Abra a pasta no VS Code
2. Instale a extensão "Live Server"
3. Clique com botão direito em `index.html`
4. Selecione "Open with Live Server"

## 🎨 Imagens do Projeto

O projeto já está configurado com imagens reais de alta qualidade:

- ✅ **product-mockup.png**: Mockup 3D principal do produto.
- ✅ **bonus1.png, bonus2.png, bonus3.png**: Artes exclusivas para os bônus.
- ✅ **author.png**: Foto profissional do autor.
- ✅ **avatar1.webp, avatar2.jpg, avatar3.jpg**: Fotos reais de prova social.

**Para atualizar as imagens:** Basta substituir os arquivos na pasta mantendo os mesmos nomes.

## 🔧 Personalização

### Alterar Cores
Edite as variáveis CSS em `style.css`:
```css
:root {
    --color-primary: rgb(15, 23, 42);
    --color-action: rgb(34, 197, 94);
    --color-blue: rgb(37, 99, 235);
    /* ... */
}
```

### Alterar Textos
Edite diretamente o arquivo `index.html` - todos os textos estão em português.

### Alterar Preços
Procure por `.price-current` e `.price-old` no HTML.

### Adicionar Analytics
No arquivo `script.js`, na função `initCTATracking()`, adicione seu código de tracking:
```javascript
// Google Analytics
gtag('event', 'click', { 'event_category': 'CTA', 'event_label': buttonText });

// Facebook Pixel
fbq('track', 'Lead', { content_name: buttonText });
```

## 📊 Otimizações SEO

- ✅ Meta tags (title, description)
- ✅ Estrutura semântica HTML5
- ✅ Heading hierarchy (H1, H2, H3)
- ✅ IDs únicos em elementos interativos
- ✅ Alt text em imagens
- ✅ Performance otimizada

## 🎯 Próximos Passos

1. **Substituir imagens placeholder** por imagens reais do produto
2. **Configurar link de checkout** - Substituir `#checkout` pelos links reais
3. **Adicionar pixels de tracking** (Google Analytics, Facebook Pixel)
4. **Testar responsividade** em diferentes dispositivos
5. **Configurar domínio** e hospedagem
6. **Adicionar SSL** para segurança

## 💡 Dicas de Conversão

- O plano Premium está destacado como "O MAIS ESCOLHIDO"
- Use escassez real no countdown timer
- Atualize os depoimentos com casos reais
- Teste diferentes CTAs (A/B testing)
- Monitore taxa de conversão e otimize

## 🚀 Deploy

Para colocar no ar, você pode usar:
- **Netlify** (gratuito, fácil)
- **Vercel** (gratuito, rápido)
- **GitHub Pages** (gratuito)
- **Hostinger/HostGator** (pago, mais controle)

---

**Desenvolvido com atenção aos detalhes de conversão e experiência do usuário** ✨

Qualquer dúvida, basta perguntar!
