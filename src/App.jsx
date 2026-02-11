import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')


  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }


  const handleContactSubmit = (e) => {
    e.preventDefault()
    
    // Obter valores do formulário
    const name = e.target.elements['name'].value
    const email = e.target.elements['email'].value
    const message = e.target.elements['message'].value
    
    // Validação simples
    if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }
    
    // Aqui você pode adicionar a lógica para enviar os dados (por exemplo, para uma API)
    console.log('Dados do formulário:', { name, email, message })
    
    // Mostrar mensagem de sucesso
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    
    // Limpar formulário
    e.target.reset()
  }



  return (
    <div className="App">
      {/* Header/Navegação */}
      <header className="header" role="banner">
        <div className="container">
          <div className="logo">
            <h1>Golden English Academy</h1>
          </div>
          <nav className="nav" role="navigation" aria-label="Menu principal">
            <ul>
              <li>
                <button 
                  className={activeSection === 'home' ? 'active' : ''}
                  onClick={() => scrollToSection('home')}
                  aria-label="Ir para início"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  className={activeSection === 'about' ? 'active' : ''}
                  onClick={() => scrollToSection('about')}
                  aria-label="Ir para sobre"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  className={activeSection === 'courses' ? 'active' : ''}
                  onClick={() => scrollToSection('courses')}
                  aria-label="Ir para cursos"
                >
                  Cursos
                </button>
              </li>
              <li>
                <button 
                  className={activeSection === 'testimonials' ? 'active' : ''}
                  onClick={() => scrollToSection('testimonials')}
                  aria-label="Ir para depoimentos"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button 
                  className={activeSection === 'contact' ? 'active' : ''}
                  onClick={() => scrollToSection('contact')}
                  aria-label="Ir para contato"
                >
                  Contato
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      {/* Top Banner with Hero Content */}
      <div className="top-banner">
        <img src="/imagen5.png" alt="Golden English Academy Banner" className="banner-image" loading="eager" />
        <section id="home" className="hero" aria-labelledby="hero-title">
          <div className="container">
            <div className="hero-content">
              <h1 id="hero-title">Domine o Inglês com Excelência</h1>
              <p>Transforme sua carreira e alcance novos patamares com a Golden English Academy. Aulas presenciais premium personalizadas para todos os níveis.</p>
              <div className="cta-buttons">
                <button className="btn-primary">Matricule-se Agora</button>
                <button className="btn-secondary">Saiba Mais</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Seção Sobre */}
      <section id="about" className="about fade-in" aria-labelledby="about-title">
        <div className="container">
          <h2 id="about-title">Sobre a Golden English Academy</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Somos uma instituição premium especializada no ensino presencial de inglês, comprometida em oferecer uma educação de excelência que transforma vidas e abre portas para oportunidades globais.</p>
              <p>Nossa metodologia avançada combina interação humana direta com professores altamente qualificados e certificados internacionalmente, garantindo resultados excepcionais e duradouros para nossos alunos.</p>
              <div className="stats">
                <div className="stat slide-up">
                  <h3 id="alunos-graduados">+2000</h3>
                  <p>Alunos Formados</p>
                </div>
                <div className="stat slide-up">
                  <h3 id="anos-excelencia">8 anos</h3>
                  <p>de Excelência</p>
                </div>
                <div className="stat slide-up">
                  <h3 id="taxa-sucesso">98%</h3>
                  <p>Taxa de Sucesso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Cursos */}
      <section id="courses" className="courses fade-in" aria-labelledby="courses-title">
        <div className="container">
          <h2 id="courses-title">Nossos Cursos</h2>
          <div className="courses-grid">
            <div className="course-card slide-up" role="article" aria-labelledby="curso-fundamental">
              <h3 id="curso-fundamental">Inglês Fundamental Presencial</h3>
              <p>Ideal para iniciantes. Construa uma base sólida e confiante no idioma em ambiente presencial.</p>
              <ul>
                <li>Vocabulário essencial estratégico</li>
                <li>Gramática funcional aplicada</li>
                <li>Conversação prática guiada</li>
                <li>Aulas em pequenos grupos</li>
              </ul>
              <button className="btn-course">Detalhes do Curso</button>
            </div>
            <div className="course-card slide-up" role="article" aria-labelledby="curso-intermediario">
              <h3 id="curso-intermediario">Inglês Intermediário Presencial</h3>
              <p>Desenvolva habilidades avançadas e conquiste fluência comunicativa em aulas presenciais.</p>
              <ul>
                <li>Compreensão auditiva refinada</li>
                <li>Expressão oral fluida e natural</li>
                <li>Leitura crítica e escrita persuasiva</li>
                <li>Interação em grupo real</li>
              </ul>
              <button className="btn-course">Detalhes do Curso</button>
            </div>
            <div className="course-card slide-up" role="article" aria-labelledby="curso-mastery">
              <h3 id="curso-mastery">Inglês Mastery Presencial</h3>
              <p>Atinga a maestria linguística para contextos profissionais e acadêmicos em ambiente presencial.</p>
              <ul>
                <li>Fluência nativa-like</li>
                <li>Preparação intensiva para certificações</li>
                <li>Inglês especializado corporativo</li>
                <li>Networking com colegas</li>
              </ul>
              <button className="btn-course">Detalhes do Curso</button>
            </div>
            <div className="course-card slide-up" role="article" aria-labelledby="curso-preparacao">
              <h3 id="curso-preparacao">Preparação Premium Presencial</h3>
              <p>Prepare-se com excelência para TOEFL, IELTS, Cambridge e outras certificações em ambiente presencial.</p>
              <ul>
                <li>Simulados personalizados</li>
                <li>Estratégias avançadas de prova</li>
                <li>Correção especializada individualizada</li>
                <li>Acompanhamento presencial</li>
              </ul>
              <button className="btn-course">Detalhes do Curso</button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section id="testimonials" className="testimonials fade-in" aria-labelledby="testimonials-title">
        <div className="container">
          <h2 id="testimonials-title">O Que Nossos Alunos Dizem</h2>
          <div className="testimonials-grid">
            <div className="testimonial slide-up" role="region" aria-labelledby="testimonial-maria">
              <p id="testimonial-maria">"A Golden English Academy transformou minha trajetória profissional. As aulas presenciais premium abriram portas para uma promoção internacional e novas oportunidades globais!"</p>
              <h4>Maria Silva</h4>
              <p className="position">Diretora de Projetos Internacionais</p>
            </div>
            <div className="testimonial slide-up" role="region" aria-labelledby="testimonial-carlos">
              <p id="testimonial-carlos">"A equipe de professores é excepcionalmente qualificada e dedicada. As aulas presenciais dinâmicas e personalizadas garantem aprendizado acelerado e resultados surpreendentes através da interação humana direta."</p>
              <h4>Carlos Oliveira</h4>
              <p className="position">Pesquisador Universitário</p>
            </div>
            <div className="testimonial slide-up" role="region" aria-labelledby="testimonial-ana">
              <p id="testimonial-ana">"Iniciei sem conhecimento prévio e hoje mantenho comunicação fluida em inglês em ambientes corporativos internacionais graças às aulas presenciais interativas. Uma experiência transformadora que recomendo fortemente!"</p>
              <h4>Ana Costa</h4>
              <p className="position">CEO & Empreendedora Internacional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contact" className="contact fade-in" aria-labelledby="contact-title">
        <div className="container">
          <h2 id="contact-title">Entre em Contato</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item slide-up">
                <h3 id="contact-email">Email</h3>
                <p>contato@goldenenglish.com.br</p>
              </div>
              <div className="info-item slide-up">
                <h3 id="contact-phone">Telefone</h3>
                <p>(11) 99999-9999</p>
              </div>
              <div className="info-item slide-up">
                <h3 id="contact-hours">Horário de Atendimento</h3>
                <p>Segunda a Sexta: 8h às 20h</p>
                <p>Sábado: 9h às 17h</p>
              </div>
            </div>
            <form className="contact-form slide-up" onSubmit={(e) => handleContactSubmit(e)} noValidate>
              <input type="text" name="name" placeholder="Seu Nome" required aria-label="Digite seu nome completo" />
              <input type="email" name="email" placeholder="Seu Email" required aria-label="Digite seu email válido" />
              <textarea name="message" placeholder="Sua Mensagem" rows="5" required aria-label="Escreva sua mensagem"></textarea>
              <button type="submit" className="btn-primary">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h2>Golden English Academy</h2>
              <p>Aprendizado que transforma vidas</p>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4 id="cursos-footer">Cursos</h4>
                <ul aria-labelledby="cursos-footer">
                  <li>Inglês Básico</li>
                  <li>Inglês Intermediário</li>
                  <li>Inglês Avançado</li>
                  <li>Preparatórios</li>
                </ul>
              </div>
              <div className="link-group">
                <h4 id="instituicao-footer">Instituição</h4>
                <ul aria-labelledby="instituicao-footer">
                  <li>Sobre Nós</li>
                  <li>Professores</li>
                  <li>Metodologia</li>
                  <li>Depoimentos</li>
                </ul>
              </div>
              <div className="link-group">
                <h4 id="suporte-footer">Suporte</h4>
                <ul aria-labelledby="suporte-footer">
                  <li>FAQ</li>
                  <li>Contato</li>
                  <li>Blog</li>
                  <li>Políticas</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2024 Golden English Academy. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
