# Deploy Takoa Digital - Netlify via GitHub

## ✅ Checklist Pré-Deploy

### Segurança Implementada
- ✅ Tailwind CSS via PostCSS (removido CDN)
- ✅ React bundled localmente (removido ESM.sh)
- ✅ Headers de segurança HTTP configurados (`public/_headers`)
- ✅ Package renomeado para `takoa-digital-landing-page`

### Arquivos Importantes
- `public/_headers` - Headers de segurança HTTP para Netlify
- `public/robots.txt` - Instruções para crawlers
- `public/llms.txt` - Informações para IAs
- `public/preview.webp` - Imagem de preview para redes sociais

## 📦 Passos para Deploy

### 1. Preparar Repositório GitHub
```bash
git init
git add .
git commit -m "Initial commit - Takoa Digital Landing Page"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/takoa-digital.git
git push -u origin main
```

### 2. Configurar Netlify

#### Via Interface Web:
1. Acesse [app.netlify.com](https://app.netlify.com)
2. Clique em "Add new site" → "Import an existing project"
3. Conecte com GitHub e selecione o repositório
4. Configure as opções de build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18 ou superior

#### Variáveis de Ambiente (se necessário):
Nenhuma variável de ambiente é necessária no momento.

### 3. Deploy Automático
- Após conectar o repositório, o Netlify fará o deploy automaticamente
- Cada push para `main` dispara um novo deploy

## 🔒 Headers de Segurança Configurados

Os seguintes headers HTTP estão configurados em `public/_headers`:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self';
```

## 🌐 Domínio Personalizado

### Configurar takoadigital.com:
1. No painel da Netlify, vá em "Domain settings"
2. Clique em "Add custom domain"
3. Digite `takoadigital.com`
4. Configure os DNS records no seu provedor:
   - **A Record:** `@` → `75.2.60.5` (Netlify Load Balancer)
   - **CNAME:** `www` → `SEU-SITE.netlify.app`

### SSL/HTTPS Automático:
- Netlify provisiona certificado SSL automaticamente via Let's Encrypt
- Aguarde alguns minutos após configurar o domínio

## ✅ Verificação Pós-Deploy

### Testar Funcionalidades:
- [ ] Página inicial carrega corretamente
- [ ] Navegação entre seções funciona
- [ ] Links de WhatsApp funcionam
- [ ] Cookie Banner aparece e salva preferências
- [ ] Páginas de Privacidade e Termos carregam
- [ ] Imagens carregam (card1.gif, preview.webp)

### Testar SEO:
- [ ] Compartilhar link no WhatsApp mostra preview correto
- [ ] Acessar `/robots.txt` retorna o arquivo
- [ ] Acessar `/llms.txt` retorna o arquivo

### Testar Segurança:
Use [securityheaders.com](https://securityheaders.com) para verificar os headers:
- [ ] X-Frame-Options presente
- [ ] CSP configurado
- [ ] HSTS ativo

## 🚀 Performance

### Build atual:
- CSS: ~19 KB (gzipped: 4 KB)
- JS: ~571 KB (gzipped: 177 KB)

### Otimizações futuras (opcional):
- Code splitting com dynamic imports
- Lazy loading de componentes pesados
- Self-hosting de Google Fonts

## 📝 Manutenção

### Atualizar Conteúdo:
1. Edite `src/content.ts`
2. Commit e push para GitHub
3. Netlify faz deploy automático

### Atualizar Dependências:
```bash
npm update
npm audit
npm run build  # Testar localmente
git commit -am "Update dependencies"
git push
```

## 🆘 Troubleshooting

### Build falha na Netlify:
- Verifique os logs de build no painel
- Certifique-se que `package.json` tem todas as dependências
- Node version deve ser 18+

### Headers não aparecem:
- Verifique se `public/_headers` está na pasta `dist` após build
- Teste com `curl -I https://takoadigital.com`

### Preview social não funciona:
- Aguarde alguns minutos (cache do WhatsApp/Facebook)
- Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- Verifique se `preview.webp` existe em `public/`
