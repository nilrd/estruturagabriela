import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { 
  CheckCircle, 
  Shield, 
  Clock, 
  DollarSign, 
  Users, 
  Star, 
  ArrowRight, 
  Play, 
  Lock,
  Zap,
  Target,
  TrendingUp,
  Award,
  Globe,
  Smartphone,
  Eye,
  EyeOff
} from 'lucide-react'
import './App.css'
import notebookVideo from './assets/Notebook3D.mp4'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Maria Silva",
      result: "R$ 15.000 no primeiro mês",
      text: "Nunca imaginei que conseguiria ganhar tanto dinheiro sem aparecer. O método realmente funciona!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Costa", 
      result: "R$ 32.000 em 60 dias",
      text: "Estava desempregada e hoje tenho minha liberdade financeira. Gratidão eterna!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Juliana Santos",
      result: "R$ 8.500 na primeira semana", 
      text: "Simples, prático e eficiente. Consegui resultados muito rápido seguindo o passo a passo.",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Carla Mendes",
      result: "R$ 25.000 em 45 dias",
      text: "Trabalho de casa, no meu tempo, sem aparecer. É exatamente o que eu precisava!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Fernanda Lima",
      result: "R$ 18.500 no segundo mês",
      text: "O suporte é incrível e as estratégias realmente funcionam. Recomendo 100%!",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Patricia Rocha",
      result: "R$ 12.000 em 3 semanas",
      text: "Consegui sair das dívidas e ainda sobra dinheiro. Mudou minha vida completamente!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const benefits = [
    {
      icon: <EyeOff className="w-8 h-8 text-yellow-400" />,
      title: "100% Anônimo",
      description: "Venda sem aparecer, sem gravar vídeos, sem exposição pessoal"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Automático",
      description: "Sistema que trabalha 24h por dia, mesmo enquanto você dorme"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
      title: "Baixo Investimento",
      description: "Comece com pouco dinheiro e escale seus resultados rapidamente"
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: "Para Iniciantes",
      description: "Método desenvolvido especialmente para quem está começando do zero"
    }
  ];

  const modules = [
    {
      title: "ESTRATÉGIAS ORGÂNICAS",
      description: "Ideal para quem quer começar do zero, sem precisar investir em anúncios — e ainda ver resultados rápidos para levantar caixa e, depois, automatizar e escalar as vendas com segurança e estratégia.",
      color: "from-red-500 to-red-600",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "TRÁFEGO DIRETO",
      description: "Tenha acesso imediato a uma seleção de produtos validados e exclusivos, além de um passo a passo completo para montar sua estrutura de vendas com tráfego direto e investimento mínimo.",
      color: "from-blue-500 to-blue-600",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "PRODUTOS FÍSICOS",
      description: "Comece hoje a vender os produtos físicos mais quentes do mercado — como máquina Ton, encapsulados de saúde e beleza, além de ofertas em Cash on Delivery e Pay After Delivery.",
      color: "from-green-500 to-green-600",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "TURBINAR + MANYCHAT",
      description: "Aprenda a fazer anúncios diretos pelo seu celular, sem complicações e sem precisar do gerenciador — tudo de forma simples, com investimento mínimo.",
      color: "from-purple-500 to-purple-600",
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      title: "PERFIL VIRAL",
      description: "Aprenda do zero a construir uma estrutura orgânica e 100% anônima no Instagram e TikTok, sem precisar aparecer em nenhum momento.",
      color: "from-pink-500 to-pink-600",
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: "LOJAS PARCEIRAS",
      description: "Fature diariamente com grandes plataformas como Magalu, Shopee, Amazon, Shein, Temu e Mercado Livre — de forma 100% anônima e automática.",
      color: "from-indigo-500 to-indigo-600",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "FATURAR EM DÓLAR",
      description: "Com o Start, você aprende a faturar em dólar de forma prática, automática e sem precisar aparecer. Tenha acesso à Estratégia Orgânica e ao passo a passo do Tráfego Direto para vender no exterior.",
      color: "from-yellow-500 to-yellow-600",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: "BÔNUS EXCLUSIVOS",
      description: "Conteúdo bônus exclusivo para acelerar seus resultados e te deixar à frente da concorrência, incluindo mentoria mensal ao vivo.",
      color: "from-gray-500 to-gray-600",
      icon: <Star className="w-8 h-8" />
    }
  ];

  const uniqueFeatures = [
    "Venda no automático, sem precisar conversar com ninguém",
    "Estratégia combinada de Turbinador + Manychat + Perfil Dark",
    "Posts e funis prontos para copiar e colar",
    "+30 infoprodutos validados, com materiais prontos",
    "+10 produtos físicos quentes, incluindo encapsulados e Máquina TON",
    "Tráfego para WhatsApp (opcional)",
    "Estratégias orgânicas para levantar caixa rápido",
    "Fature em DÓLAR com estratégias e produtos internacionais",
    "Ganhe no automático com marketplaces",
    "Mentoria mensal ao vivo com a produtora do método",
    "Suporte diferenciado com atendimento no privado",
    "Programa de afiliados com comissões de até 77%",
    "Pagamento único, acesso vitalício e atualizações constantes"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header/Hero Section */}
      <section className="relative overflow-hidden hero-gradient min-h-screen flex items-center">
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="fade-in-up">
            <Badge className="mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg px-6 py-3 rounded-full shadow-lg floating-animation">
              🔥 MÉTODO MAIS ATUALIZADO DE 2025
            </Badge>
            
            <div className="mb-4">
              <span className="text-2xl md:text-3xl font-light text-yellow-300 italic">novo</span>
              <h1 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2" style={{fontFamily: 'cursive'}}>
                Start Digital
              </h1>
            </div>
            
            <h2 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              DESCUBRA COMO FATURAR DE{' '}
              <span className="gradient-text text-6xl md:text-8xl block my-4">
                R$10.000,00 A R$50.000,00
              </span>
              <span className="text-3xl md:text-5xl">POR MÊS DE FORMA</span>{' '}
              <span className="text-green-400 text-4xl md:text-6xl block">100% ANÔNIMA E AUTOMÁTICA</span>
              <span className="text-2xl md:text-4xl block mt-4">MESMO COMEÇANDO DO ABSOLUTO ZERO</span>
            </h2>

            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200">
              Descubra o método mais acessível e atualizado de 2025 para gerar renda online sem precisar aparecer, vender cursos ou gravar vídeos.
            </p>

            <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-300">
              Com o Novo Start Digital, você terá acesso a estratégias exclusivas, tráfego direto com baixo investimento e produtos validados prontos para vender. Tudo no automático e com retorno rápido. Uma estrutura completa para transformar o seu celular em uma máquina de vendas silenciosa, escalável e lucrativa.
            </p>

            {/* Video Container */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="video-container aspect-video">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover"
                  src={notebookVideo}
                >
                  Seu navegador não suporta vídeos HTML5.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-20 h-20 text-white mb-4 mx-auto opacity-80" />
                    <p className="text-white text-lg font-semibold">Assista ao Vídeo de Apresentação</p>
                  </div>
                </div>
              </div>
            </div>

            <Button 
              onClick={() => window.open("https://pay.kiwify.com.br/CmsPj6t", "_blank")}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-xl md:text-2xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6 btn-pulse"
            >
              🚀 QUERO ATIVAR MINHA MÁQUINA DE VENDAS AGORA
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>

            <div className="flex items-center justify-center gap-2 text-yellow-400 mb-4">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Garantia Incondicional de 7 Dias - Risco Zero!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className={`py-20 bg-gray-800 text-white ${isVisible.benefits ? 'fade-in-up' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            A Estrutura Completa para Você Faturar no Automático, Sem Aparecer e Com Investimento Mínimo
          </h2>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl mb-6 leading-relaxed text-gray-300">
              Se você está começando agora ou já tentou de tudo mas ainda não conseguiu destravar seus resultados no digital, 
              o Start Digital é a solução definitiva que você precisa.
            </p>
            <p className="text-xl mb-6 leading-relaxed text-gray-300">
              Desenvolvido para afiliados iniciantes ou travados, ele une produtos validados, estratégias atualizadas e automações reais 
              para você vender todos os dias — mesmo sem aparecer, sem gravar vídeos e com pouco investimento.
            </p>
            <p className="text-2xl font-bold text-yellow-400 mb-6">
              Essa é a sua chance de virar o jogo!
            </p>
            <p className="text-xl mb-6 leading-relaxed text-gray-300">
              Chega de depender de sorte, promessas vagas ou conteúdos genéricos.
            </p>
            <p className="text-xl leading-relaxed text-gray-300">
              Com o Start Digital, você constrói uma estrutura real de vendas e tem em mãos o que precisa para começar a faturar de forma simples, anônima e escalável.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 bg-gray-700 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => window.open("https://pay.kiwify.com.br/CmsPj6t", "_blank")}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-xl px-10 py-4 rounded-full shadow-xl btn-pulse"
            >
              QUERO COMEÇAR AGORA
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-20 hero-gradient ${isVisible.testimonials ? 'fade-in-up' : ''}`}>
        <div className="hero-overlay py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
              VEJA ALGUNS <span className="text-yellow-400">DEPOIMENTOS</span> DAS NOSSAS ALUNAS
            </h2>
            <p className="text-xl text-center mb-16 text-gray-200 max-w-3xl mx-auto">
              <strong>Resultados falam mais do que promessas.</strong><br/>
              Confira os depoimentos de mulheres reais que aplicaram o método Start e hoje colhem os frutos: vendas diárias, qualidade de vida e liberdade. A próxima história pode ser a sua.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="testimonial-card p-6 bg-gray-800 border border-yellow-400/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-yellow-400" 
                      />
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-white mb-4 italic text-lg">"{testimonial.text}"</p>
                    <div className="border-t border-white/20 pt-4">
                      <p className="font-bold text-white text-lg">{testimonial.name}</p>
                      <p className="text-green-400 font-bold text-xl">{testimonial.result}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className={`py-20 bg-gray-900 text-white ${isVisible.modules ? 'fade-in-up' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            O QUE VOCÊ VAI APRENDER NO START DIGITAL?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {modules.map((module, index) => (
              <Card key={index} className={`module-card p-6 bg-gray-800 border-0 shadow-lg`}>
                <CardContent className="pt-6">
                  <div className={`mb-4 flex justify-center text-white bg-gradient-to-r ${module.color} p-3 rounded-full w-max mx-auto`}>
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-yellow-400">{module.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section id="features" className={`py-20 bg-gray-800 text-white ${isVisible.features ? 'fade-in-up' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            POR QUE O START DIGITAL É ÚNICO?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {uniqueFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gray-700 rounded-lg shadow-md">
                <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section id="guarantee" className={`py-20 bg-gray-900 text-white ${isVisible.guarantee ? 'fade-in-up' : ''}`}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="guarantee-badge text-black p-8 rounded-2xl shadow-2xl mb-12">
              <Shield className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                GARANTIA INCONDICIONAL DE 7 DIAS
              </h2>
              <p className="text-xl">
                Se o START Digital não for para você, mesmo após assistir às aulas durante 7 dias, 
                garantimos a devolução do seu dinheiro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={`py-20 hero-gradient ${isVisible.pricing ? 'fade-in-up' : ''}`}>
        <div className="hero-overlay py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-8 bg-red-500 text-white font-bold text-xl px-8 py-3 rounded-full shadow-lg countdown-timer">
              ⏰ OFERTA ESPECIAL POR TEMPO LIMITADO!
            </Badge>
            
            <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-yellow-400/20">
              <div className="mb-6">
                <p className="text-white text-2xl mb-2">De <span className="line-through">R$347</span> por apenas</p>
                <div className="price-highlight text-6xl md:text-8xl font-bold mb-4">
                  R$197,00
                </div>
                <p className="text-white text-xl">ou 12x de R$20,37</p>
              </div>

              <div className="countdown-timer text-black p-4 rounded-lg mb-8">
                <p className="text-lg mb-2">Oferta expira em:</p>
                <div className="flex justify-center gap-4 text-2xl font-bold">
                  <div className="bg-white/20 px-3 py-2 rounded">
                    {String(timeLeft.hours).padStart(2, '0')}h
                  </div>
                  <div className="bg-white/20 px-3 py-2 rounded">
                    {String(timeLeft.minutes).padStart(2, '0')}m
                  </div>
                  <div className="bg-white/20 px-3 py-2 rounded">
                    {String(timeLeft.seconds).padStart(2, '0')}s
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => window.open("https://pay.kiwify.com.br/CmsPj6t", "_blank")}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-2xl px-12 py-6 rounded-full shadow-2xl btn-pulse mb-6"
              >
                🚀 GARANTIR MINHA VAGA AGORA
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>

              <div className="flex items-center justify-center gap-2 text-green-400">
                <Lock className="w-5 h-5" />
                <span className="font-semibold">Pagamento 100% Seguro</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={`py-20 bg-gray-800 text-white ${isVisible.faq ? 'fade-in-up' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            PERGUNTAS FREQUENTES
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Preciso ter experiência prévia para começar?",
                  answer: "Não! O Start Digital foi desenvolvido especialmente para iniciantes. Você receberá um passo a passo completo desde o básico até estratégias avançadas."
                },
                {
                  question: "Quanto tempo leva para ver os primeiros resultados?",
                  answer: "Muitos alunos começam a ver resultados nas primeiras semanas aplicando as estratégias orgânicas. Com dedicação, é possível ter resultados ainda mais rápidos."
                },
                {
                  question: "Preciso aparecer ou gravar vídeos?",
                  answer: "Não! Todo o método é baseado em estratégias 100% anônimas. Você pode trabalhar sem mostrar o rosto ou gravar vídeos pessoais."
                },
                {
                  question: "Qual o investimento inicial necessário?",
                  answer: "O curso ensina estratégias orgânicas que você pode começar sem investimento, e também estratégias de tráfego pago com investimento mínimo."
                },
                {
                  question: "Tenho suporte após a compra?",
                  answer: "Sim! Você terá acesso ao grupo de suporte exclusivo, mentoria mensal ao vivo e atendimento direto com a equipe."
                }
              ].map((faq, index) => (
                <Card key={index} className="p-6 bg-gray-700 border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3 text-yellow-400">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="hero-overlay py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              ESTÁ PRONTO PARA TRANSFORMAR SUA VIDA?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto">
              Clique no botão abaixo e comece hoje mesmo. O acesso é vitalício. As atualizações são constantes. 
              E os resultados… dependem só de você.
            </p>
            
            <Button 
              onClick={() => window.open("https://pay.kiwify.com.br/CmsPj6t", "_blank")}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-2xl px-16 py-8 rounded-full shadow-2xl btn-pulse mb-8"
            >
              🚀 SIM, QUERO COMEÇAR AGORA!
              <ArrowRight className="ml-2 w-8 h-8" />
            </Button>

            <div className="flex items-center justify-center gap-2 text-yellow-400 mb-8">
              <Shield className="w-6 h-6" />
              <span className="font-semibold text-lg">Garantia Incondicional de 7 Dias - Risco Zero!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Todos os direitos reservados – Ane Peonia – Novo Start Digital
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
