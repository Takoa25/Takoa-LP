# Takoa Digital - Landing Page

> Site profissional para clínicas e profissionais da saúde

## 🚀 Sobre o Projeto

Landing page moderna e otimizada para a **Takoa Digital**, agência especializada em desenvolvimento de sites para clínicas e profissionais da área da saúde. O site foi desenvolvido com foco em conversão, performance e segurança.

## ✨ Características

- ✅ **Design Responsivo** - Perfeito em mobile, tablet e desktop
- ✅ **Performance Otimizada** - Lighthouse 90+ score
- ✅ **SEO Completo** - Meta tags, Open Graph, Twitter Cards
- ✅ **Segurança** - Headers HTTP configurados, CSP, HSTS
- ✅ **LGPD Compliant** - Cookie banner granular, políticas de privacidade
- ✅ **Acessibilidade** - Semântica HTML, ARIA labels
- ✅ **Animações Suaves** - Framer Motion para UX premium

## 🛠️ Stack Tecnológica

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 3.4
- **Animações:** Framer Motion
- **Smooth Scroll:** Lenis
- **Ícones:** Lucide React + React Icons
- **Deploy:** Netlify

## 📦 Instalação

### Pré-requisitos
- Node.js 18 ou superior
- npm ou yarn

### Passos

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Takoa25/Takoa-LP.git
   cd Takoa-LP
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute em desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Build para produção:**
   ```bash
   npm run build
   ```

5. **Preview do build:**
   ```bash
   npm run preview
   ```

## 🌐 Deploy

O projeto está configurado para deploy automático na **Netlify** via GitHub.

### Configuração Netlify:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18

Consulte o arquivo [`DEPLOY.md`](./DEPLOY.md) para instruções detalhadas de deploy.

## 📁 Estrutura do Projeto

```
├── public/              # Assets estáticos
│   ├── _headers        # Headers de segurança HTTP
│   ├── robots.txt      # Instruções para crawlers
│   ├── llms.txt        # Informações para IAs
│   ├── favicon.png     # Favicon
│   └── preview.webp    # Imagem de preview social
├── src/
│   ├── components/     # Componentes React
│   ├── lib/           # Utilitários
│   ├── content.ts     # Conteúdo centralizado
│   ├── types.ts       # Definições TypeScript
│   └── App.tsx        # Componente principal
├── index.html         # HTML base
├── netlify.toml       # Configuração Netlify
└── tailwind.config.js # Configuração Tailwind
```

## 🎨 Personalização

Todo o conteúdo do site está centralizado em [`src/content.ts`](./src/content.ts). Para alterar textos, cores, links ou qualquer informação, edite apenas esse arquivo.

### Exemplo:
```typescript
export const CONTENT = {
  theme: {
    colors: {
      primary: "#3B82F6",
      // ... outras cores
    }
  },
  homeHero: {
    title: "Seu título aqui",
    // ... outros textos
  }
}
```

## 🔒 Segurança

- Headers HTTP configurados (CSP, HSTS, X-Frame-Options)
- Proteção contra XSS e clickjacking
- HTTPS obrigatório via Netlify
- Dependências auditadas regularmente

## 📄 Licença

© 2026 Takoa Digital. Todos os direitos reservados.

## 📞 Contato

- **Email:** takoadigital@gmail.com
- **WhatsApp:** +55 19 99580-9849
- **Site:** [takoadigital.com](https://takoadigital.com)
