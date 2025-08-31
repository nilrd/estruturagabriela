import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Shield, Clock, DollarSign, Users, Star, ArrowRight, Play, Lock } from 'lucide-react'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

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

  const testimonials = [
    {
      name: "Maria Silva",
      result: "R$ 15.000 no primeiro mês",
      text: "Nunca imaginei que conseguiria ganhar tanto dinheiro sem aparecer. O método realmente funciona!"
    },
    {
      name: "Ana Costa",
      result: "R$ 32.000 em 60 dias",
      text: "Estava desempregada e hoje tenho minha liberdade financeira. Gratidão eterna!"
    },
    {
      name: "Juliana Santos",
      result: "R$ 8.500 na primeira semana",
      text: "Simples, prático e eficiente. Consegui resultados muito rápido seguindo o passo a passo."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "100% Anônimo",
      description: "Venda sem aparecer, sem gravar vídeos, sem exposição pessoal"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Automático",
      description: "Sistema que trabalha 24h por dia, mesmo enquanto você dorme"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      title: "Baixo Investimento",
      description: "Comece com pouco dinheiro e escale seus resultados rapidamente"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Para Iniciantes",
      description: "Método desenvolvido especialmente para quem está começando do zero"
    }
  ];

  const modules = [
    "Estratégias Orgânicas para Começar Sem Investir",
    "Tráfego Direto com Baixo Investimento",
    "Produtos Físicos de Alta Conversão",
    "Automação com Manychat e Funis Prontos",
    "Perfil Viral Anônimo no Instagram e TikTok",
    "Vendas em Marketplaces (Amazon, Shopee, Magalu)",
    "Faturamento em Dólar - Mercado Internacional",
    "Suporte VIP e Mentoria Mensal ao Vivo"
  ];

  const handleCTAClick = () => {
    // Aqui você colocaria o link de afiliado da Gabriela
    window.open('https://kiwify.app/V5Kfs58?afid=iH0i9mVd', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900">
      {/* Header/Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 py-16 text-center text-white">
          <Badge className="mb-6 bg-yellow-500 text-black font-bold text-lg px-6 py-2">
            🔥 MÉTODO MAIS ATUALIZADO DE 2025
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            DESCUBRA COMO FATURAR DE{' '}
            <span className="text-yellow-400">R$10.000 A R$50.000</span>{' '}
            POR MÊS DE FORMA{' '}
            <span className="text-green-400">100% ANÔNIMA</span>{' '}
            E AUTOMÁTICA
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Mesmo começando do <strong>absoluto zero</strong>, sem aparecer, sem vender cursos ou gravar vídeos. 
            Transforme seu celular em uma <strong>máquina de vendas silenciosa e lucrativa</strong>.
          </p>

          {/* Video Placeholder */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-20 h-20 text-white mb-4 mx-auto" />
                  <p className="text-white text-lg">Vídeo de Apresentação do Método</p>
                  <p className="text-gray-300">Clique para assistir</p>
                </div>
              </div>
            </div>
          </div>

          <Button 
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6"
          >
            🚀 QUERO ATIVAR MINHA MÁQUINA DE VENDAS AGORA
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>

          <div className="flex items-center justify-center gap-2 text-yellow-400">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Garantia Incondicional de 7 Dias - Risco Zero!</span>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            A Estrutura Completa para Você Faturar no Automático
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            VEJA ALGUNS <span className="text-yellow-600">DEPOIMENTOS</span> DAS NOSSAS ALUNAS
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600">
            Resultados falam mais do que promessas.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-green-600 font-semibold">{testimonial.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            O QUE VOCÊ VAI APRENDER NO START DIGITAL?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {modules.map((module, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{module}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🔥 OFERTA ESPECIAL POR TEMPO LIMITADO!
          </h2>
          
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="bg-black/30 rounded-lg p-4">
              <div className="text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-sm">HORAS</div>
            </div>
            <div className="text-2xl">:</div>
            <div className="bg-black/30 rounded-lg p-4">
              <div className="text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-sm">MIN</div>
            </div>
            <div className="text-2xl">:</div>
            <div className="bg-black/30 rounded-lg p-4">
              <div className="text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-sm">SEG</div>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-2xl mb-2">De <span className="line-through">R$ 347,00</span> por apenas</p>
            <p className="text-6xl font-bold text-yellow-400 mb-2">R$ 197,00</p>
            <p className="text-xl">ou 12x de R$ 20,37</p>
          </div>

          <Button 
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-2xl px-16 py-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6"
          >
            💳 GARANTIR MINHA VAGA AGORA
            <ArrowRight className="ml-3 w-8 h-8" />
          </Button>

          <div className="flex items-center justify-center gap-2 text-yellow-300">
            <Lock className="w-5 h-5" />
            <span>Pagamento 100% Seguro | Acesso Imediato</span>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Shield className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              GARANTIA INCONDICIONAL DE 7 DIAS
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Se o START Digital não for para você, mesmo após assistir às aulas durante 7 dias, 
              garantimos a devolução do seu dinheiro. <strong>Risco Zero!</strong>
            </p>
            
            <Button 
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-xl px-12 py-6 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              🎯 SIM, EU QUERO COMEÇAR AGORA!
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Start Digital - Todos os direitos reservados | 
            <span className="text-yellow-400"> Afiliada: Gabriela Carlos Pereira</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

