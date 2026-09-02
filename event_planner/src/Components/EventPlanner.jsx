import React from "react";
import "./EventPlanner.css"; // Import CSS file for styling

const EventPlanner = () => {
  return (
    <div className="event-planner-container">
      {/*Cabeçalho da página*/}
      <header>
        <h1>Bem-vindo ao Event Planner!</h1>
      </header>

      {/*Seção que descreve a visão geral do app*/}
      <section className="description">
        <p>
          Planeje e organize seus eventos sem esforço com o Event Planner. De
          aniversários a reuniões corporativas, nós cuidamos de tudo.
        </p>

        <button className="get-started-button">Começar</button>
      </section>

      {/*Seção para categorizar os diferentes tipos de evento*/}
      <section className="events_categories">
        <ul>
          <h2>Eventos Sociais:</h2>
          <li>Festas de aniversário</li>
          <li>Celebrações de aniversário de casamento</li>
          <li>Recepções de casamento</li>
          <li>Chás de bebê</li>
          <li>Festas de formatura</li>
          <li>Reuniões de família</li>
        </ul>

        <ul>
          <h2>Eventos de entretenimento:</h2>
          <li>Concertos</li>
          <li>Festivais de música</li>
          <li>Exibições de filmes</li>
          <li>Programas de comédia</li>
          <li>Exposições de arte</li>
          <li>Eventos culturais</li>
        </ul>

        <ul>
          <h2>Eventos da comunidade:</h2>
          <li>Eventos de arrecadação de fundos</li>
          <li>Galas de caridade</li>
          <li>Movimentos voluntários</li>
          <li>Festas de bairro</li>
          <li>Festivais comunitários</li>
          <li>Celebrações culturais</li>
        </ul>
      </section>

      {/*Seção para destacar as funcionalidades do app*/}
      <section className="features">
        <h2>Recursos</h2>
        <ul>
          <li>Fácil criação e gerenciamento de eventos</li>
          <li>Modelos de eventos personalizáveis</li>
          <li>Gerenciamento da lista de convidados</li>
          <li>Colaboração em tempo real</li>
          <li>Lembretes e notificações</li>
        </ul>
      </section>

      {/*Seção para avaliações*/}
      <section className="testimonials">
        <h2>Depoimentos</h2>
        <div className="testimonial">
          <p>
            &quot; O Event Planner facilitou muito a organização do meu
            casamento. Altamente recomendado! &quot;
          </p>
          <p className="author">Emily Johnson</p>
        </div>

        <div className="testimonial">
          <p>
            &quot; Eu uso o Event Planner para todos os meus eventos corporativos. Isso me economiza muito tempo e esforço! &quot;
          </p>
          <p className="author">João Santana</p>
        </div>
      </section>

      {/*Seção com informações de contato*/}
      <section className="contact">
        <h2>Entre em Contato</h2>
        <form>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="E-mail" />
            <textarea placeholder="Mensagem"></textarea>
            <button className="submit-button">Enviar</button>
        </form>
      </section>
    </div>
  );
};

export default EventPlanner;
