
import { Content } from './types';

export const CONTENT: Content = {
    theme: {
        colors: {
            primary: "#3B82F6",
            secondary: "#3B82F6",
            accent: "#3B82F6",
            background: "#0D0D0D",
            sidebarBackground: "#1A1A1A",
            sidebarTitle: "#F8FAFC",
            sidebarHighlight: "#3B82F6",
            text: "#F8FAFC",
            textLight: "#c7d2e2ff",
            card: "#161616",
            border: "rgba(248, 250, 252, 0.1)",
            highlight: "#3B82F6",
            whatsapp: "#25D366",
            menuHover: "#eb1000",
            selection: "#3B82F6",  // Cor do texto selecionado na página
            contactButton: {
                bg: "#37DA22",
                hover: "#128C7E",
                text: "#ffffff"
            }
        },
        fonts: {
            // Fonte dos textos comuns (parágrafos, descrições)
            sans: "'Plus Jakarta Sans', sans-serif",
            // Fonte dos TÍTULOS (Hero, seções, cards)
            // Para testar outras fontes: primeiro adicione no index.html, depois altere aqui
            heading: "'Ubuntu', sans-serif"
        }
    },
    brand: {
        name: "Takoa Digital",
        logoUrl: "",
        logoAlt: "Takoa Digital Logo"
    },
    navigation: [
        { label: "Início", href: "#hero" },
        { label: "Projetos", href: "#work" },
        { label: "Serviços", href: "#services" },
        { label: "Processo", href: "#process" }
    ],
    homeHero: {
        title: "Sua clínica é única, seu site também deve ser.",
        subtitlePrefix: "Com um site profissional personalizado, você ",
        subtitleTexts: [
            "ganha mais autoridade.",
            "aumenta suas vendas."
        ]
    },
    projectsTitle: "Último projeto realizado",
    projects: [
        {
            id: 'alterna-spvb',
            title: 'Clinica do Dente',
            link: 'https://clinicadodente.netlify.app/',
            image: '/card1.gif'
        }
    ],
    servicesSection: {
        title: "Nossas Soluções",
        items: [
            {
                id: "websites",
                title: "Criação de sites",
                description: "Não basta ser bonito. Seu site precisa vender. Mostrar autoridade, transmitir confiança e facilitar o agendamento.",
                features: [
                    "Design responsivo (perfeito no celular e desktop)",
                    "Otimização para Google (SEO Local para sua cidade)",
                    "Páginas de alta conversão para tratamentos específicos",
                    "Integração direta com WhatsApp da recepção"
                ]
            },
            {
                id: "lgpd",
                title: "Adequação à LGPD",
                description: "Sua clínica lida com dados sensíveis. Evite multas e processos adequando seu site às normas da Lei Geral de Proteção de Dados.",
                features: [
                    "Auditoria completa do seu site atual",
                    "Implementação de Política de Privacidade personalizada",
                    "Criação de Termos de Uso",
                    "Criação de Aviso de Cookies (Cookie Banner)"
                ]
            }
        ]
    },
    processSection: {
        title: "São 6 etapas na criação dos sites",
        subtitle: "Você acompanhará todas as etapas de criação do seu site.",
        steps: [
            {
                number: "01",
                title: "Contato",
                description: "Entre em contato conosco para que possamos entender qual a sua necessidade.",
                image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1470&auto=format&fit=crop"
            },
            {
                number: "02",
                title: "Layout",
                description: "Utilizando diversas ferramentas criamos o design e apresentamos a você.",
                image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1470&auto=format&fit=crop"
            },
            {
                number: "03",
                title: "Desenvolvimento",
                description: "Após a aprovação do design, começamos o desenvolvimento do layout.",
                image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1470&auto=format&fit=crop"
            },
            {
                number: "04",
                title: "Otimização",
                description: "Após o desenvolvimento, otimizamos o site para ficar rápido e com a maior nota possível no Google!",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1426&auto=format&fit=crop"
            },
            {
                number: "05",
                title: "Gerenciamento",
                description: "Te ensinamos de forma muito simples a gerenciar o seu site!",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop"
            },
            {
                number: "06",
                title: "Suporte",
                description: "Mesmo após o trabalho ser feito, continuamos dando suporte vitalício a possíveis dúvidas.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop"
            }
        ]
    },
    finalCta: {
        title: "E aí, vamos transformar a sua clínica?",
        buttonText: "Entrar em contato",
        whatsappNumber: "5519995809849"
    },
    contact: {
        email: "takoadigital@gmail.com",
        buttonText: "Diga Olá!",
        defaultWhatsappMessage: "Olá! Gostaria de saber mais sobre os serviços da Takoa.",
        social: [
            { name: "WhatsApp", url: "https://wa.me/5519995809849" }
        ]
    },
    footer: {
        copyright: "© 2026 Todos os direitos reservados. Takoa Digital."
    },
    cookieBanner: {
        title: "Sua privacidade é nossa prioridade",
        description: "Utilizamos cookies para melhorar sua experiência, analisar o tráfego e fornecer conteúdo personalizado. Você pode aceitar todos ou gerenciar suas preferências abaixo. Leia nossa Política de Privacidade.",
        acceptAllLabel: "Aceitar todos",
        denyLabel: "Negar",
        preferencesLabel: "Preferências",
        privacyPolicyLabel: "Política de Privacidade",
        preferences: {
            title: "Preferências de Cookies",
            description: "Gerencie suas preferências de consentimento por categoria. Cookies essenciais são necessários para o funcionamento básico do site e não podem ser desativados.",
            saveLabel: "Salvar",
            rejectLabel: "Rejeitar",
            categories: [
                {
                    id: "essential",
                    title: "Estritamente Necessários",
                    description: "Obrigatórios para o site funcionar (segurança, login, consentimento).",
                    required: true
                },
                {
                    id: "marketing",
                    title: "Marketing & Publicidade",
                    description: "Usados para exibir anúncios relevantes e medir eficácia de campanhas.",
                    required: false
                },
                {
                    id: "analytics",
                    title: "Estatísticas & Analytics",
                    description: "Nos ajudam a entender como os visitantes interagem com o site.",
                    required: false
                }
            ]
        }
    },
    privacyPolicy: {
        title: "Política de Privacidade da Takoa Digital",
        introduction: "Bem-vindo à Takoa Digital, inscrita no CNPJ 49.643.536/0001-14, com sede na Rua: Nazareno Mingoni, nº 113, Jardim do Lago, Campinas - SP, CEP: 13050-022. Nosso compromisso é com a integridade e a segurança dos dados pessoais dos nossos usuários e clientes. Esta Política de Privacidade aplica-se a todas as interações digitais realizadas em nosso site takoadigital.com, serviços associados, aplicativos móveis e outras plataformas digitais sob nosso controle.\n\nAo acessar e utilizar nossas plataformas, você reconhece e concorda com as práticas descritas nesta política. Nós tratamos a proteção de seus dados pessoais com a máxima seriedade e nos comprometemos a processá-los de forma responsável, transparente e segura.",
        sections: [
            {
                title: "Definições",
                content: [
                    "“Dados Pessoais” são informações que identificam ou podem identificar uma pessoa natural.",
                    "“Dados Pessoais Sensíveis” são informações que revelam características pessoais íntimas, como origem racial, convicções religiosas, opiniões políticas, dados genéticos ou biométricos.",
                    "“Tratamento de Dados Pessoais” abrange qualquer operação com Dados Pessoais, como coleta, registro, armazenamento, uso, compartilhamento ou destruição.",
                    "“Leis de Proteção de Dados” são todas as leis que regulamentam o Tratamento de Dados Pessoais, incluindo a LGPD (Lei Geral de Proteção de Dados Pessoais, Lei nº 13.709/18)."
                ]
            },
            {
                title: "Dados Coletados e Motivos da Coleta",
                content: [
                    "Nós coletamos e processamos os seguintes tipos de dados pessoais:",
                    "Informações Fornecidas por Você: Isso inclui, mas não se limita a, nome, sobrenome, endereço de e-mail, endereço físico, informações de pagamento e quaisquer outras informações que você optar por fornecer ao criar uma conta, fazer uma compra ou interagir com nossos serviços de atendimento ao cliente.",
                    "Informações Coletadas Automaticamente: Quando você visita nosso site, coletamos automaticamente informações sobre seu dispositivo e sua interação com nosso site. Isso pode incluir dados como seu endereço IP, tipo de navegador, detalhes do dispositivo, fuso horário, páginas visitadas, produtos visualizados, sites ou termos de busca que o direcionaram ao nosso site, e informações sobre como você interage com nosso site."
                ]
            },
            {
                title: "Uso de Cookies e Tecnologias de Rastreamento",
                content: [
                    "A Takoa Digital utiliza cookies, que são pequenos arquivos de texto armazenados no seu dispositivo, e outras tecnologias de rastreamento para melhorar a experiência do usuário em nosso site takoadigital.com, entender como nossos serviços são utilizados e otimizar nossas estratégias de marketing.",
                    "Tipos de Cookies Utilizados:",
                    "Cookies Essenciais: Essenciais para o funcionamento do site, permitindo que você navegue e use suas funcionalidades. Sem esses cookies, serviços como carrinho de compras e processamento de pagamento não podem ser fornecidos.",
                    "Cookies de Desempenho e Analíticos: Coletam informações sobre como os visitantes usam o nosso site, quais páginas são visitadas com mais frequência e se eles recebem mensagens de erro. Esses cookies são usados apenas para melhorar o desempenho e a experiência do usuário no site.",
                    "Cookies de Funcionalidade: Permitem que o site lembre de escolhas que você faz (como seu nome de usuário, idioma ou a região em que você está) e forneça recursos aprimorados e mais pessoais.",
                    "Cookies de Publicidade e Redes Sociais: Usados para oferecer anúncios mais relevantes para você e seus interesses. Eles também são usados para limitar o número de vezes que você vê um anúncio, bem como ajudar a medir a eficácia das campanhas publicitárias."
                ]
            },
            {
                title: "Finalidades do Processamento de Dados",
                content: [
                    "Os dados coletados são utilizados para:",
                    "Proporcionar, operar e melhorar nossos serviços e ofertas;",
                    "Processar suas transações e enviar notificações relacionadas a suas compras;",
                    "Personalizar sua experiência de usuário e recomendar conteúdo ou produtos que possam ser do seu interesse;",
                    "Comunicar informações importantes, ofertas e promoções, conforme sua preferência de comunicação;",
                    "Realizar análises internas para desenvolver e aprimorar nossos serviços;",
                    "Cumprir obrigações legais e regulatórias aplicáveis."
                ]
            },
            {
                title: "Compartilhamento e Transferência de Dados Pessoais",
                content: [
                    "Nós podemos compartilhar seus dados pessoais com terceiros nas seguintes circunstâncias:",
                    "Com fornecedores de serviços e parceiros que nos auxiliam nas operações de negócio, desde que estes atuem em conformidade com nossas diretrizes de proteção de dados e com a legislação aplicável;",
                    "Para cumprir com obrigações legais, responder a processos judiciais, ou proteger nossos direitos e propriedades, bem como a segurança de nossos clientes e do público;",
                    "Em caso de reestruturação corporativa, venda, fusão ou outra transferência de ativos, garantindo que a entidade receptora concorde em respeitar a privacidade de seus dados de acordo com uma política equivalente à nossa."
                ]
            },
            {
                title: "Links para outros sites e redes sociais",
                content: [
                    "Nossa plataforma pode incluir links para sites externos de parceiros, anunciantes e fornecedores. Clicar nesses links implica que você será direcionado para fora do nosso site, entrando em domínios que seguem suas próprias políticas de privacidade, pelas quais não somos responsáveis.",
                    "Recomendamos a leitura atenta dessas políticas antes de fornecer qualquer dado pessoal. Da mesma forma, não assumimos responsabilidade pelas práticas de privacidade de terceiros como Facebook, Apple, Google e Microsoft. Aconselhamos você a se informar sobre as políticas de privacidade dessas entidades ao utilizar seus serviços ou aplicativos."
                ]
            },
            {
                title: "Direitos dos Titulares dos Dados",
                content: [
                    "Você possui diversos direitos em relação aos seus dados pessoais, incluindo:",
                    "O direito de acesso, retificação ou exclusão de seus dados pessoais sob nossa posse;",
                    "O direito de limitar ou se opor ao nosso processamento de seus dados;",
                    "O direito à portabilidade de dados;",
                    "O direito de retirar seu consentimento a qualquer momento, quando o processamento for baseado em consentimento.",
                    "Para exercer esses direitos, entre em contato conosco através de takoadigital@gmail.com."
                ]
            },
            {
                title: "Segurança dos Dados",
                content: "Implementamos medidas de segurança técnica e organizacional para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, é importante notar que nenhum sistema é completamente seguro. Nos comprometemos a notificar você e qualquer autoridade aplicável de quaisquer brechas de segurança de acordo com a legislação vigente."
            },
            {
                title: "Alterações na Política de Privacidade",
                content: "Nossa Política de Privacidade pode ser atualizada periodicamente. A versão mais atual será sempre publicada em nosso site, indicando a data da última revisão. Encorajamos você a revisar regularmente nossa política para estar sempre informado sobre como estamos protegendo seus dados."
            }
        ],
        contact: {
            text: "Se tiver dúvidas ou preocupações sobre nossa Política de Privacidade ou práticas de dados, por favor, não hesite em nos contatar em",
            email: "takoadigital@gmail.com"
        }
    },
    termsOfUse: {
        title: "Termos de Uso e Serviço da Takoa Digital",
        introduction: "Seja Bem-Vindo ao site da Takoa Digital. Antes de explorar tudo o que temos a oferecer, é importante que você entenda e concorde com algumas regras básicas que regem o uso do nosso site takoadigital.com, e qualquer outro serviço digital que nós oferecemos, como lojas e plataformas de e-commerce.\n\nAo usar nosso site e serviços, você automaticamente concorda em seguir as regras que estabelecemos aqui. Caso não concorde com algo, por favor, considere não usar nossos serviços. É muito importante para nós que você se sinta seguro e informado a todo momento.",
        sections: [
            {
                title: "1. Aceitando os Termos",
                content: "Ao navegar e usar o site da Takoa Digital, você concorda automaticamente com nossas regras e condições. Estamos sempre procurando melhorar, então esses termos podem mudar de vez em quando. Se fizermos alterações significativas, vamos postar as atualizações aqui no site. Continuar usando o site após essas mudanças significa que você aceita os novos termos."
            },
            {
                title: "2. Como Usar o Nosso Site",
                content: "A maior parte do nosso site está aberta para você sem a necessidade de cadastro. No entanto, algumas seções especiais podem exigir que você crie uma conta. Pedimos que você seja honesto ao fornecer suas informações e que mantenha sua senha e login seguros. Se decidir compartilhar algum conteúdo conosco, como comentários, por favor, faça-o de maneira respeitosa e dentro da lei."
            },
            {
                title: "3. Sua Privacidade",
                content: [
                    "Na Takoa Digital, a privacidade é um valor essencial. Ao interagir com nosso site, você aceita nossa Política de Privacidade, que detalha nossa abordagem responsável e conforme às leis para o manejo dos seus dados pessoais. Nosso compromisso é com a transparência e a segurança: explicamos como coletamos, usamos e protegemos suas informações, garantindo sua privacidade e oferecendo controle sobre seus dados.",
                    "Adotamos práticas de segurança para proteger suas informações contra acesso não autorizado e compartilhamento indevido, assegurando que qualquer cooperação com terceiros ocorra apenas com base na sua aprovação ou exigências legais claras, reafirmando nosso comprometimento com a sua confiança e segurança digital."
                ]
            },
            {
                title: "4. Direitos de Conteúdo",
                content: [
                    "O conteúdo disponível no site da Takoa Digital, incluindo, mas não se limitando a, textos, imagens, ilustrações, designs, ícones, fotografias, programas de computador, videoclipes e áudios, constitui propriedade intelectual protegida tanto pela legislação nacional quanto por tratados internacionais sobre direitos autorais e propriedade industrial. Essa propriedade engloba não apenas materiais diretamente produzidos e publicados por nós, mas também conteúdos que são utilizados sob licença ou permissão de terceiros, garantindo que todos os direitos sejam respeitados conforme as normativas vigentes.",
                    "Ao acessar nosso site, você recebe uma licença limitada, não exclusiva e revogável para visualizar e usar o conteúdo para fins pessoais e não comerciais. Isso implica que qualquer reprodução, distribuição, transmissão ou modificação do conteúdo, sem a devida autorização escrita da Takoa Digital, é estritamente proibida. Tal restrição visa proteger os direitos de propriedade intelectual associados aos materiais disponibilizados, assegurando que sua utilização não infrinja os direitos dos criadores ou detentores desses direitos, além de promover um ambiente de respeito e valorização da criatividade e inovação."
                ]
            },
            {
                title: "5. Cookies e Mais",
                content: [
                    "Utilizamos cookies para melhorar sua experiência, coletando informações anônimas durante sua visita, como suas preferências de idioma, duração da visita, páginas acessadas, e outras estatísticas de uso. Esses dados nos ajudam a personalizar seu conteúdo, otimizar a navegação, melhorar continuamente o site em design e funcionalidade, e garantir sua segurança online. Esta prática é essencial para nos permitir oferecer um serviço mais ajustado às suas necessidades e resolver qualquer problema que possa surgir mais rapidamente.",
                    "Se você preferir limitar ou recusar o uso de cookies, a configuração pode ser ajustada através do seu navegador. Isso pode afetar a sua experiência no site, pois algumas funcionalidades dependem dos cookies para funcionar corretamente. Entendemos a importância do controle sobre suas informações e queremos que você saiba que, ao ajustar as configurações para bloquear cookies, algumas partes do nosso site podem não oferecer a experiência completa pretendida."
                ]
            },
            {
                title: "6. Explorando Links Externos",
                content: "Nosso site pode incluir links para sites externos que achamos que podem ser do seu interesse. Note que não temos controle sobre esses sites externos e, portanto, não somos responsáveis pelo seu conteúdo ou políticas."
            },
            {
                title: "7. Mudanças e Atualizações",
                content: [
                    "A evolução é parte de como operamos, o que significa que estes Termos de Uso podem passar por atualizações para refletir melhor as mudanças em nossos serviços ou na legislação. Sempre que isso acontecer, você encontrará a versão mais recente disponível aqui. Se as mudanças forem significativas, faremos o possível para notificá-lo através dos meios de contato que você nos forneceu.",
                    "Continuar a acessar o site após essas mudanças indica que você concorda com os novos termos. Se, por qualquer motivo, você não concordar com as atualizações, pedimos que não continue utilizando nosso site e serviços."
                ]
            }
        ],
        contact: {
            text: "Se tiver dúvidas sobre estes termos, não hesite em nos contatar através do e-mail",
            email: "takoadigital@gmail.com"
        }
    }
};
